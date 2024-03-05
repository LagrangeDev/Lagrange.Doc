# 扫码登陆

本节将介绍如何扫码登陆

扫码登陆是目前初次登陆所必须的登陆方式,初次登陆使用密码登陆有较大概率无法登陆

## QrCode 二维码

首先,你需要使用FetchQrCode()异步方法,这将返回一个元组

```csharp
var qrCode = await bot.FetchQrCode();
```

返回的元组包含以下元素:

|  字段  |  类型  |     描述     |
| :----: | :----: | :----------: |
|  Url   | string |  二维码内容链接  |
| QrCode | byte[] | 二维码PNG byte[] |

可以将二维码的byte[]保存为本地png文件扫码，也可以用二维码生成工具把Url生成为二维码交给手机扫描

## 等待登陆

在获取完二维码后,等待异步方法LoginByQrCode(),该方法会等待用户扫码并在扫码完毕后返回

```csharp
await bot.LoginByQrCode();
```
