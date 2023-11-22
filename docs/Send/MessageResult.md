# 发送消息结果 MessageResult

MessageResult为发送消息后异步返回的结果



|   字段    | 类型 |    描述    |
| :-------: | :--: | :--------: |
|  Result   | uint |    N/A     |
| Timestamp | uint | Unix时间戳 |



额外:Sequence被封装为了internel,回复消息实际上只需要一个seq,需要回复自己的消息方法之一是监听消息事件对自己处理,或者考虑特殊用法使用Seq回复自己的消息