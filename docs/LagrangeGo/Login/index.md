# 登录前的准备

首先需要确保你已经生成了设备信息(DeviceInfo)和版本信息(AppInfo)，以及与版本信息对应的签名服务器

## 创建设备信息

> `import "github.com/LagrangeDev/LagrangeGo/client/auth"`

```go
// 手动定义各个字段
deviceInfo := &auth.DeviceInfo{
    GUID:          "cfac208495d565ef66e7dff9f98764da",
    DeviceName:    "Lagrange-DCFCD07E",
    SystemKernel:  "Windows 10.0.22631",
    KernelVersion: "10.0.22631",
}
```

```go
// 自动生成
deviceInfo := auth.NewDeviceInfo(114514)
```

```go
// 从文件读取
deviceInfo,err := auth.LoadOrSaveDevice("path/to/deviceinfo.json")
```

## 创建版本信息

> `import "github.com/LagrangeDev/LagrangeGo/client/auth"`

[内置版本信息](https://github.com/LagrangeDev/LagrangeGo/blob/master/client/auth/app.go)
```go
// 使用内置的版本信息
appInfo := auth.AppList["linux"]["3.2.15-30366"]
```

:::tip 提示
此外，你还需要准备好与版本对应的签名服务器url
:::

## 创建一个`qqclient`实例

> `import "github.com/LagrangeDev/LagrangeGo/client"`

```go
// 创建一个空的client
qqclient := client.NewClientEmpty()
```

## 将之前生成的信息加载进`qqclient`

```go
// 设备信息
qqclient.UseDevice(deviceInfo)
// 版本信息
qqclient.UseVersion(appInfo)
```

## 添加签名服务器

```go
qqclient.AddSignServer("https://sign.lagrangecore.org/api/sign/30366")
```

# 登录

## 二维码登录

1. 首先获取登录二维码

    ```go
    qrcode, url, err = qqclient.FecthQRCode()
    // 你可以将二维码保存到本地以便扫码
    os.WriteFile("path/to/qrcode.png", qrcode, 0666)
    ```
    
    返回的元组包括
    | 字段 | 类型 | 备注 |
    |:------:|:------:|:-------:|
    | `qrcode` | []byte | 二维码图片数据 |
    | `url`    | string | 二维码内容链接 |
    | `err`    | error | 错误信息 |
    
    :::tip 提示
    二维码内容链接需要被转换为二维码图片后通过手机 App 扫码登录, 不要直接访问链接
    :::

2. 轮询二维码扫码状态

    ```go
    retCode, err := c.GetQRCodeResult()
    if retCode.Waitable() {
        // 二维码在等待扫码或等待确认
    }
    if retCode.Success() {
        // 二维码扫码成功
    }
    ```

3. 登录

    ```go
    // 等待扫码完成后即可登录
    _, err := qqclient.QRCodeLogin()
    ```

## 密码登录

> 不保证可用性

```go
err = qqclient.PasswordLogin()
```
