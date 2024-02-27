# 发送消息

方法:SendMessage(_messageChain)

参数:MessageChain [构建消息导航](/Lagrange.Core/MessageChain/MessageBuilder)

返回:MessageResult [消息结果导航](/Lagrange.Core/Send/MessageResult)



```csharp
var messageChain;
//假设之前已经构建好了消息链
var result = await bot.SendMessage(messageChain.Build());
```



补充:发送消息成功后,对应的XXXMessageEvent会被自己的消息触发,可用于监听消息发送的状态