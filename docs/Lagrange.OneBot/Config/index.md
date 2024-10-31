# 快速部署 & 配置

## 下载安装

下载 Lagrange.OneBot 可执行文件并解压

1. 可以从 [Releases](https://github.com/LagrangeDev/Lagrange.Core/releases) 下载对应系统版本 (该版本可能不为最新版本)
2. 还可以从 [Actions](https://github.com/KonataDev/Lagrange.Core/actions/workflows/Lagrange.OneBot-build.yml) 中获得当前最新的构建

::: warning 注意

从 Actions 下载的 Lagrange.OneBot 需要手动安装 .Net, 你应当自行安装对应版本的 [.Net SDK](https://dotnet.microsoft.com/zh-cn/download)

:::

::: danger 运行前请阅读

遇到问题请按照以下步骤进行

1. 查看 [Github 仓库](https://github.com/LagrangeDev/Lagrange.Core)中的 `README.md` 以确保没有配置错误

2. 查看 [Github 仓库](https://github.com/LagrangeDev/Lagrange.Core)中的 Issue 查看此问题是否因为某种原因未能修复

3. 将 application.json 中的 `Logging.LogLevel.Default` 改为 `Trace` 并重启 Lagrange 复现问题  
   然后将 <span style="background: linear-gradient(to bottom right, skyblue, pink); color: black; font-weight: 900">Lagrange Lagrange Lagrange</span> 的日志 <span style="background: linear-gradient(to bottom right, skyblue, pink); color: black; font-weight: 900">全部 全部 全部 全部 全部 全部 全部 全部 全部</span> 复制并发送到 Issue 或群里提问

:::

## 运行

::: code-group

```text [Windows]
双击 Lagrange.OneBot.exe 运行即可
```

```shell [Linux/MacOS]
# 可执行权限（可选）
chmod +x ./Lagrange.OneBot
# 运行
./Lagrange.OneBot
```

:::

第一次运行时, 会在同级目录下自动生成默认的 `appsettings.json` 配置文件, 你需要正确 [修改配置文件](#配置文件) 以设置 Lagrange

在配置文件按需修改后（推荐使用扫码登录）, 在命令行中按任意键, Lagrange 将正式运行在同一文件夹下会出现一张登录二维码图片 qr-0.png, 在二维码过期前尽快使用手机 QQ 扫码连接

::: tip 提示

手机扫描登录二维码时, 推荐勾选「下次登录无需确认」

:::

::: danger Sign

NTQQ 的 SignServer **不可与 Android 协议混用**（如 unidbg-fetch-qsign）

本项目不主动提供 SignServer, 请前往 README.md 搜索加入 Telegram 群聊以获取有效信息

:::

如果出现验证码登录, 见 [关于验证码](#关于验证码)

## 配置文件

请注意几个重要的设置项需要手动配置：

```json5{9-10,26-45}
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",  // 提 Issue 时请切换到 Trace
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information",
    },
  },
  "SignServerUrl": "https://sign.lagrangecore.org/api/sign/25765",
  "SignProxyUrl": "", // 留空不使用代理,仅支持http代理, example: http://127.0.0.1:7890
  "MusicSignServerUrl": "",
  "Account": {
    "Uin": 0,  // Uin 填写 0 以使用扫码连接
    "Password": "",  // 不填写密码以使用扫码连接
    "Protocol": "Linux",  // 使用 Linux 协议
    "AutoReconnect": true,
    "GetOptimumServer": true,
  },
  "Message": {
    "IgnoreSelf": true,  // 忽略 Bot 自身的消息
    "StringPost": false,
  },
  "QrCode": {
    "ConsoleCompatibilityMode": false,
  },
  "Implementations": [  // 服务实现 支持多链接
    {
      "Type": "ReverseWebSocket",
      "Host": "127.0.0.1",
      "Port": 8080,
      "Suffix": "/onebot/v11/ws",
      "ReconnectInterval": 5000,
      "HeartBeatInterval": 5000,
      "HeartBeatEnable": true,
      "AccessToken": "",
    },
    {
      "Type": "ForwardWebSocket",
      "Host": "127.0.0.1",
      "Port": 8081,
      "HeartBeatInterval": 5000,
      "HeartBeatEnable": true,
      "AccessToken": "",
    },
  ],
}
```

::: warning 注意

以 `//` 开头的为注释, 试图复制粘贴到实际的配置文件中时务必删除

:::

服务实现目前支持以下多种方式, 请根据需要添加到配置文件中的 `Implementations` 中

- [快速部署 \& 配置](#快速部署--配置)
  - [下载安装](#下载安装)
  - [运行](#运行)
  - [配置文件](#配置文件)
    - [反向 WebSocket 配置](#反向-websocket-配置)
    - [正向 WebSocket 配置](#正向-websocket-配置)
    - [HTTP POST 配置](#http-post-配置)
    - [正向 HTTP 配置](#正向-http-配置)
  - [关于验证码](#关于验证码)

### 反向 WebSocket 配置

```json5
{
	"Type": "ReverseWebSocket",
	"Host": "127.0.0.1",
	"Port": 8080,
	"Suffix": "/onebot/v11/ws",
	"ReconnectInterval": 5000,
	"HeartBeatInterval": 5000,
	"HeartBeatEnable": true,
	"AccessToken": ""
}
```

### 正向 WebSocket 配置

```json5
{
	"Type": "ForwardWebSocket",
	"Host": "127.0.0.1",
	"Port": 8081,
	"HeartBeatInterval": 5000,
	"HeartBeatEnable": true,
	"AccessToken": ""
}
```

### HTTP POST 配置

```json5{3}
{
  "Type": "HttpPost",
  "Host": "127.0.0.1", // 可以填写前缀协议, 例如 `https://`
  "Port": 8082,
  "Suffix": "/",
  "HeartBeatInterval": 5000,
  "HeartBeatEnable": true,
  "AccessToken": "",
  "Secret": ""
}
```

::: warning 注意

以 `//` 开头的为注释, 试图复制粘贴到实际的配置文件中时务必删除

:::

### 正向 HTTP 配置

```json5
{
	"Type": "Http",
	"Host": "*",
	"Port": 8083,
	"AccessToken": ""
}
```

## 关于验证码

::: warning 警告

如果出现验证码登录的情况 推荐删除 `Keystore` 进行扫码登录

验证码登录因为未知原因成功率较低

:::

NTQQ 的验证码拥有两个参数 `ticket` 与 `randomStr`

首先复制 `ticket` 参数到输入框内, 按下回车确认

再次复制 `randomStr` 参数到输入框内, 按下回车确认
