# 密码登陆

密码登陆需要之前已经使用扫码登陆过,并保存了BotDeviceInfo,BotKeyStore,且在创建BotContext的时候已将上述配置给到构造方法内,使用空的BotDeviceInfo,BotKeyStore会导致登陆失败,且如果BotDeviceInfo与BotKeyStore不匹配也会导致登陆失败!

使用LoginByPassword()异步方法等待密码登陆完成

```csharp
await bot.LoginByPassword();
```
