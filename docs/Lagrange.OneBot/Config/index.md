# 快速部署&配置

Lagrange.OneBot.exe 会在第一次运行之后会自动生成默认配置的 appsettings.json

<br/>

在配置文件按需要正确修改后，在命令行中按任意键，Lagrange 将正式运行。在同一文件夹下会出现一张登录二维码图片 qr-0.png，在二维码过期前尽快使用手机 QQ 扫码连接。

::: tip 提示
推荐勾选「下次登录无需确认」来简化登陆流程
:::

::: tip 提示
NTQQ的SignServer不可与Android协议混用(如unidbg-fetch-qsign)

本项目不主动提供SignServer 请前往README.md加入Telegram群聊以获取有效信息
:::

### 关于验证码
::: warning 警告
如果出现验证码登录的情况 推荐删除Keystore进行扫码登录

验证码登录因为未知原因成功率较低
:::
NTQQ的验证码拥有两个参数 ticket与randomStr

首先复制ticket参数到输入框内 按下回车确认

再次复制randomStr参数到输入框内 按下回车确认

### 默认配置
```json5
{
  Logging: {
    LogLevel: {
      Default: "Information",  # 提Issue时请切换到Trace
      Microsoft: "Warning",
      "Microsoft.Hosting.Lifetime": "Information",
    },
  },
  SignServerUrl: "",  # 寻求国外网友帮助.png
  Account: {
    Uin: 0,  # Uin填写0以使用扫码连接
    Password: "",  # 不填写密码以使用扫码连接
    Protocol: "Linux",  #推荐使用Linux协议
    AutoReconnect: true,
    GetOptimumServer: true,
  },
  Message: {
    IgnoreSelf: true,  # 忽略Bot自身的消息
  },
  Implementations: [  # 服务实现 支持多链接
    {
      Type: "ReverseWebSocket",
      Host: "127.0.0.1",
      Port: 8080,
      Suffix: "/onebot/v11/ws",
      ReconnectInterval: 5000,
      HeartBeatInterval: 5000,
      AccessToken: "",
    },
    {
      Type: "ForwardWebSocket",
      Host: "127.0.0.1",
      Port: 8081,
      HeartBeatInterval: 5000,
      AccessToken: "",
    },
  ],
}
```

<br/>

### 反向 WebSocket 配置

```json5
{
  Type: "ReverseWebSocket",
  Host: "127.0.0.1",
  Port: 8080,
  Suffix: "/onebot/v11/ws",
  ReconnectInterval: 5000,
  HeartBeatInterval: 5000,
  AccessToken: "",
}
```

<br/>

### 正向 WebSocket 配置

```json5
{
  Type: "ForwardWebSocket",
  Host: "127.0.0.1",
  Port: 8081,
  HeartBeatInterval: 5000,
  AccessToken: "",
}
```
