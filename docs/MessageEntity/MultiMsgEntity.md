# MultiMsgEntity 合并转发消息

合并转发消息类,继承自接口IMessageEntity

|   字段   |        类型         |           描述            |
| :------: | :-----------------: | :-----------------------: |
|  ResId   |       string?       | 消息ResId(类似于唯一标识) |
| GroupUin |        uint?        |       转发源群的Uin       |
|  Chains  | List\<MessageChain> | 合并转发包含的消息链(们)  |

