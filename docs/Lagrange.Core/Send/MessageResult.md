# 发送消息结果 MessageResult

MessageResult 为发送消息后异步返回的结果。

|    字段     | 类型  |    描述     |
| :---------: | :---: | :---------: |
|  `Result`   | uint  |     N/A     |
| `Timestamp` | uint  | Unix 时间戳 |

:::tip 额外

Sequence 被封装为了 internel，回复消息实际上只需要一个 seq，需要回复自己的消息方法之一是监听消息事件对自己处理,或者考虑特殊用法使用 Seq 回复自己的消息。
:::
