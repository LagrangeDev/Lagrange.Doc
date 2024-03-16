# 密码登陆

密码登陆需要之前**已经使用扫码登陆过**，并**保存了 BotDeviceInfo、BotKeyStore**，且**在创建 BotContext 的时候已将上述配置给到构造方法内**。

使用空的 BotDeviceInfo、BotKeyStore 会导致登陆失败，且如果 BotDeviceInfo 与 BotKeyStore 不匹配也会导致登陆失败！

使用 `LoginByPassword()` 异步方法等待密码登陆完成。

```csharp
await bot.LoginByPassword();
```
