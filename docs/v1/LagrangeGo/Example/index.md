# 示例

项目提供了示例模板`main.go`，可供开发者进行概念验证和功能测试

```go
package main

import (
	"errors"
	"fmt"
	"os"
	"os/signal"
	"path"
	"strings"
	"syscall"
	"time"

	"github.com/mattn/go-colorable"
	"github.com/sirupsen/logrus"

	"github.com/LagrangeDev/LagrangeGo/client"
	"github.com/LagrangeDev/LagrangeGo/client/auth"
	"github.com/LagrangeDev/LagrangeGo/message"
	"github.com/LagrangeDev/LagrangeGo/utils"
)

var (
	dumpspath = "dump"
)

func main() {
    // 使用特定的协议版本
	appInfo := auth.AppList["linux"]["3.2.15-30366"]
	// 创建设备信息
	deviceInfo := &auth.DeviceInfo{
		GUID:          "cfcd208495d565ef66e7dff9f98764da",
		DeviceName:    "Lagrange-DCFCD07E",
		SystemKernel:  "Windows 10.0.22631",
		KernelVersion: "10.0.22631",
	}
    
    // 创建qqclient实例
	qqclient := client.NewClient(0, "")
	// 设置qqclient的logger
	qqclient.SetLogger(protocolLogger{})
	// 使用协议版本
	qqclient.UseVersion(appInfo)
	// 添加signserver，注意要和appinfo版本匹配
	qqclient.AddSignServer("https://sign.lagrangecore.org/api/sign/30366")
	// 使用设备信息
	qqclient.UseDevice(deviceInfo)
	
	// 从保存的sig.bin文件读取登录信息
	data, err := os.ReadFile("sig.bin")
	if err != nil {
		logrus.Warnln("read sig error:", err)
	} else {
	    // 将登录信息反序列化
		sig, err := auth.UnmarshalSigInfo(data, true)
		if err != nil {
			logrus.Warnln("load sig error:", err)
		} else {
		    // 如果登录信息有效，则使用登录信息登录
			qqclient.UseSig(sig)
		}
	}
    
    // 订阅群消息事件
	qqclient.GroupMessageEvent.Subscribe(func(client *client.QQClient, event *message.GroupMessage) {
		if event.ToString() == "114514" {
			img, _ := message.NewFileImage("testgroup.png")
			_, err := client.SendGroupMessage(event.GroupUin, []message.IMessageElement{img})
			if err != nil {
				return
			}
		}
	})

	qqclient.PrivateMessageEvent.Subscribe(func(client *client.QQClient, event *message.PrivateMessage) {
		img, _ := message.NewFileImage("testprivate.png")
		_, err := client.SendPrivateMessage(event.Sender.Uin, []message.IMessageElement{img})
		if err != nil {
			return
		}
	})

	qqclient.DisconnectedEvent.Subscribe(func(client *client.QQClient, event *client.DisconnectedEvent) {
		logger.Infof("连接已断开：%v", event.Message)
	})

	err = func(c *client.QQClient, passwordLogin bool) error {
		logger.Info("login with password")
		// 如果登录信息存在，可以使用fastlogin
		err := c.FastLogin()
		if err == nil {
			return nil
		}

		if passwordLogin {
		    // 密码登录，目前无法使用
			ret, err := c.PasswordLogin()
			for {
				if err != nil {
					logger.Errorf("密码登录失败: %s", err)
					break
				}
				if ret.Success {
					return nil
				}
				switch ret.Error {
				case client.SliderNeededError:
					logger.Warnln("captcha verification required")
					logger.Warnln(ret.VerifyURL)
					aid := strings.Split(strings.Split(ret.VerifyURL, "sid=")[1], "&")[0]
					logger.Warnln("ticket?->")
					ticket := utils.ReadLine()
					logger.Warnln("rand_str?->")
					randStr := utils.ReadLine()
					ret, err = c.SubmitCaptcha(ticket, randStr, aid)
					continue
				case client.UnsafeDeviceError:
					vf, err := c.GetNewDeviceVerifyURL()
					if err != nil {
						return err
					}
					logger.Infoln(vf)
					err = c.NewDeviceVerify(vf)
					if err != nil {
						return err
					}
				default:
					logger.Errorf("Unhandled exception raised: %s", ret.ErrorMessage)
				}
			}
		}
		logger.Infoln("login with qrcode")
		
		// 扫码登录流程
		// 首先获取二维码
		png, _, err := c.FetchQRCodeDefault()
		if err != nil {
			return err
		}
		qrcodePath := "qrcode.png"
		// 保存到本地以供扫码
		err = os.WriteFile(qrcodePath, png, 0666)
		if err != nil {
			return err
		}
		logger.Infof("qrcode saved to %s", qrcodePath)
		for {
		    // 轮询二维码扫描结果
			retCode, err := c.GetQRCodeResult()
			if err != nil {
				logger.Errorln(err)
				return err
			}
			// 等待扫码
			if retCode.Waitable() {
				time.Sleep(3 * time.Second)
				continue
			}
			if !retCode.Success() {
				return errors.New(retCode.Name())
			}
			break
		}
		// 扫码完成后就可以进行登录
		_, err = c.QRCodeLogin()
		return err
	}(qqclient, false)

	if err != nil {
		logger.Errorln("login err:", err)
		return
	}
	logger.Infoln("login successed")

	defer qqclient.Release()

	defer func() {
	    // 序列化登录信息以便下次使用
		data, err = qqclient.Sig().Marshal()
		if err != nil {
			logger.Errorln("marshal sig.bin err:", err)
			return
		}
		err = os.WriteFile("sig.bin", data, 0644)
		if err != nil {
			logger.Errorln("write sig.bin err:", err)
			return
		}
		logger.Infoln("sig saved into sig.bin")
	}()

	// setup the main stop channel
	mc := make(chan os.Signal, 2)
	signal.Notify(mc, os.Interrupt, syscall.SIGTERM)
	for {
		switch <-mc {
		case os.Interrupt, syscall.SIGTERM:
			return
		}
	}
}

// protocolLogger from https://github.com/Mrs4s/go-cqhttp/blob/a5923f179b360331786a6509eb33481e775a7bd1/cmd/gocq/main.go#L501
type protocolLogger struct{}

const fromProtocol = "Lgr -> "

func (p protocolLogger) Info(format string, arg ...any) {
	logger.Infof(fromProtocol+format, arg...)
}

func (p protocolLogger) Warning(format string, arg ...any) {
	logger.Warnf(fromProtocol+format, arg...)
}

func (p protocolLogger) Debug(format string, arg ...any) {
	logger.Debugf(fromProtocol+format, arg...)
}

func (p protocolLogger) Error(format string, arg ...any) {
	logger.Errorf(fromProtocol+format, arg...)
}

func (p protocolLogger) Dump(data []byte, format string, arg ...any) {
	message := fmt.Sprintf(format, arg...)
	if _, err := os.Stat(dumpspath); err != nil {
		err = os.MkdirAll(dumpspath, 0o755)
		if err != nil {
			logger.Errorf("出现错误 %v. 详细信息转储失败", message)
			return
		}
	}
	dumpFile := path.Join(dumpspath, fmt.Sprintf("%v.dump", time.Now().Unix()))
	logger.Errorf("出现错误 %v. 详细信息已转储至文件 %v 请连同日志提交给开发者处理", message, dumpFile)
	_ = os.WriteFile(dumpFile, data, 0o644)
}

const (
	// 定义颜色代码
	colorReset  = "\x1b[0m"
	colorRed    = "\x1b[31m"
	colorYellow = "\x1b[33m"
	colorGreen  = "\x1b[32m"
	colorBlue   = "\x1b[34m"
	colorWhite  = "\x1b[37m"
)

var logger = logrus.New()

func init() {
	logger.SetLevel(logrus.TraceLevel)
	logger.SetFormatter(&ColoredFormatter{})
	logger.SetOutput(colorable.NewColorableStdout())
}

type ColoredFormatter struct{}

func (f *ColoredFormatter) Format(entry *logrus.Entry) ([]byte, error) {
	// 获取当前时间戳
	timestamp := time.Now().Format("2006-01-02 15:04:05")

	// 根据日志级别设置相应的颜色
	var levelColor string
	switch entry.Level {
	case logrus.DebugLevel:
		levelColor = colorBlue
	case logrus.InfoLevel:
		levelColor = colorGreen
	case logrus.WarnLevel:
		levelColor = colorYellow
	case logrus.ErrorLevel, logrus.FatalLevel, logrus.PanicLevel:
		levelColor = colorRed
	default:
		levelColor = colorWhite
	}

	return utils.S2B(fmt.Sprintf("[%s] [%s%s%s]: %s\n",
		timestamp, levelColor, strings.ToUpper(entry.Level.String()), colorReset, entry.Message)), nil
}
```
