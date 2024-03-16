# 扩展

在使用上述两种方法之一登陆完毕后,你可以通过订阅 `BotOnlineEvent` 来判断是否登陆成功,该 Event 将在下文介绍；
此外,在登陆完毕后你还可以使用 `UpdateKeystore()` 方法获取新的 KeyStore 文件并保存以方便下次快速登陆。

```csharp
_keyStore = bot.UpdateKeystore();
```
