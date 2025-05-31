# 启动 & 配置

## 启动

::: code-group

```text [Windows]
双击 Lagrange.Milky.exe 运行即可
```

```shell [Linux/MacOS]
# 可执行权限（可选）
chmod +x ./Lagrange.Milky
# 运行
./Lagrange.Milky
```

:::

第一次运行时，会在同级目录下自动生成默认的 `appsettings.jsonc` 配置文件，同时控制台输出：

```text
Please edit the configuration file
and press any key to continue starting the application.
```

请按照下文的指导正确修改配置文件，然后按任意键，Lagrange 将正式启动，并在同一文件夹下生成一张登录二维码图片 `qrcode.png`。在二维码过期前，请尽快使用手机 QQ 扫码连接。

::: tip

手机扫描登录二维码时, 推荐勾选「下次登录无需确认」

:::

## 配置文件

```json
{
    "$schema": "https://json.schemastore.org/appsettings.json",

    // 日志相关
    "Logging": {
        // 日志等级相关
        "LogLevel": {
            // 开发阶段默认为 Trace, 提 Issue 时也请切换到 Trace
            "Default": "Trace",
        },
    },

    "Core": {
        "Server": {
            // 是否自动重连
            // "AutoReconnect": true,

            // 是否使用 IPv6 网络
            // "UseIPv6Network": false,

            // 是否使用最低延迟的服务器
            // "GetOptimumServer": true,
        },
        "Signer": {
            // 内置, 由 Cloudflare 提供保护, 访问可能需要代理
            "Base": "https://sign.lagrangecore.org/api/sign",

            // 使用的签名的 QQ 版本号, 在不知道具体版本时不要修改
            "Version": "30366",

            // 访问签名服务器所用的代理地址, 留空不使用代理, 仅支持 http 代理
            // 例如 http://example.com:8080/
            // "ProxyUrl": null,
        },
        "Login": {
            // 扫码登录所用的 QQ 号
            // 若与实际登录的 QQ 号不一致, 则再次启动时无法自动登录
            "Uin": 0,

            // 登录时使用的密码, 若不需要密码登录, 则留空
            // "Password": null,

            // 登录时使用的设备名称
            // "DeviceName": "LGR-Milky",

            // 在强制下线后是否自动重新登录
            // "AutoReLogin": true,

            // 是否启用二维码兼容模式
            // 若控制台的二维码显示有问题, 可尝试开启此选项
            // "CompatibleQrCode": false,

            // 在使用安卓协议登录时, 是否使用 Lagrange 提供的在线验证码解析服务
            // "UseOnlineCaptchaResolver": true,
        },
    },

    // Milky 协议相关
    "Milky": {
        // HTTP/WebSocket 服务绑定地址
        "Host": "127.0.0.1",

        // HTTP/WebSocket 服务监听端口
        "Port": 3000,

        // HTTP 和 WebSocket 服务的前缀路径
        // 在使用反向代理将 Milky 服务置于其他路径下时需要设置
        // "Prefix": "/",

        // 是否开启 WebSocket 事件推送服务
        // "UseWebSocket": true,

        // HTTP/WebSocket 服务的访问令牌
        // 若设置, 则需要在应用端配置中指定同样的 AccessToken
        // "AccessToken": "123456"

        // WebHook 相关配置, 留空则不启用 WebHook
        // "WebHook": {
        //     // WebHook 上报的 URL
        //     "Url": "http://127.0.0.1:3001/webhook"
        // }
    },
}
```

## 协议相关

参见 [Milky 文档](https://milky.ntqqrev.org/guide/introduction.html)。

