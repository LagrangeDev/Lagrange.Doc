# 快速部署 & 配置

## 下载安装

开发期可以从[Actions](https://github.com/LagrangeDev/LagrangeV2/actions/workflows/milky-build.yaml)下载最新的构建

## 运行

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

第一次运行时, 会在同级目录下自动生成默认的 `appsettings.jsonc` 配置文件, 请按照下文的指导正确[修改配置文件](#配置文件)以设置 Lagrange.

在配置文件按需修改后（推荐使用扫码登录）, 重新运行, Lagrange 将正式运行在同一文件夹下会出现一张登录二维码图片 qrcode.png, 在二维码过期前尽快使用手机 QQ 扫码连接

::: tip 提示

手机扫描登录二维码时, 推荐勾选「下次登录无需确认」

:::

::: warning 注意

当前主签名尚未同步, 如出现签名相关错误请加入群获取Error签名地址

:::

## 配置文件

```json5{11-12,24-43}

{
    "$schema": "https://json.schemastore.org/appsettings.json",
    "Logging": {
        "LogLevel": {
            "Default": "Trace", // 开发阶段默认为 Trace, 提 Issue 时也请切换到 Trace
        },
    },
    "Core": {
        "Server": {
            // "AutoReconnect": true, // 自动重连
            // "UseIPv6Network": false, // 使用 IPv6 网络
            // "GetOptimumServer": true, // 获取最佳服务器
        },
        "Signer": {
            "Base": "https://sign.lagrangecore.org/api/sign", // 当前主签名尚未同步,请加入群获取Error签名地址 // 内置, 为 Cloudflare, 可能需要代理
            "Version": "30366", // QQ版本号, 在不知道具体版本时不要修改
            // "ProxyUrl": null, // 代理地址, 留空不使用代理, 仅支持 http 代理, example: http://127.0.0.1:7890
        },
        "Login": {
            "Uin": 0, // 为0表示使用扫码登录, 否则使用指定的 Uin 登录, 扫码的账号Uin不能与此处不一致
            // "Password": null, // 密码
            // "DeviceName": "LGR-Milky", // 设备名称, 可选
            // "AutoReLogin": true, // 自动重连
            // "CompatibleQrCode": false, // 兼容模式下的二维码, 扫不上可选
            // "UseOnlineCaptchaResolver": true, // 使用在线Captcha解析器, 使用由 Lagrange 提供的验证码链接
        },
    },
    "Milky": {
        "Host": "127.0.0.1", // 监听地址
        "Port": 3000, // 监听端口
        // "Prefix": "/", // 前缀, 可选, 默认为 "/"
        // "UseWebSocket": true, // 是否使用 WebSocket, 默认为 true
        // "WebHook": null, // Default WebHook 配置, 可选
        // "WebHook": {
        //     "Url": "http://127.0.0.1:3001/webhook" // WebHook 地址, 可选
        // }
    },
}


```

## 协议相关

参见[Milky文档](https://milky.ntqqrev.org/guide/introduction.html), 此处不做过多赘述

