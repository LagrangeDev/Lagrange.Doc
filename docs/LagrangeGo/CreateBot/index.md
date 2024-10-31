# 创建一个bot实例

## QQClient

位于`github.com/LagrangeDev/LagrangeGo/client`

> 创建一个QQClient，参数分别是qq号，appinfo，sign地址...

方法签名:

```go
func NewClient(uin uint32, appInfo *auth.AppInfo, signUrl ...string) *QQClient
```

示例

```go
qqclient := client.NewClient(0, appInfo，"https://sign.lagrangecore.org/api/sign/25765")
```

## DeviceInfo

```go
// 创建一个新的DeviceInfo，可使用随机数字作为参数
deviceInfo := NewDeviceInfo(114514)
```

```go
// 加载DeviceInfo，如果指定的路径不存在，则返回一个新的info并保存
deviceInfo := auth.LoadOrSaveDevice(path)

// 保存DeviceInfo
deviceInfo.Save(path)
```

```go
qqclient.UseDevice(deviceInfo)
```

## SigInfo

```go
// 序列化，得到的data可自行存储
data, err := sig.Marshal()

// 反序列化
sig, err := UnmarshalSigInfo(data, true)
```

```go
// 存储与加载sig示例
data, err := os.ReadFile("sig.bin")
	if err != nil {
		logrus.Warnln("read sig error:", err)
	} else {
		sig, err := auth.UnmarshalSigInfo(data, true)
		if err != nil {
			logrus.Warnln("load sig error:", err)
		} else {
			qqclient.UseSig(sig)
		}
	}
```

```go
qqclient.UseSig(sig)
```
