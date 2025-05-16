# 扩展

你可以通过在登录前订阅 `BotOnlineEvent` 来获取是否登录成功, 该 Event 将在下文介绍

此外, 在登录完毕后你还可以使用 `UpdateKeystore()` 方法获取新的 KeyStore 文件并保存以方便下次快速登录

```csharp
_keyStore = bot.UpdateKeystore();
```
