# MessageChain 消息链

消息链类,继承自List\<IMessageEntity>

如果为群聊消息:

|      字段       |      类型      |        描述        |
| :-------------: | :------------: | :----------------: |
|    GroupUin     |     uint?      |   消息源的群Uin    |
|    FriendUin    |      uint      |    发送者的Uin     |
|    MessageId    |     ulong      |       消息Id       |
|   FriendInfo    |   BotFriend    |        null        |
| GroupMemberInfo | BotGroupMember | 发送者于群中的信息 |

如果为私聊消息:

|      字段       |      类型      |          描述          |
| :-------------: | :------------: | :--------------------: |
|    GroupUin     |     uint?      |          null          |
|    FriendUin    |      uint      |      发送者的Uin       |
|    MessageId    |     ulong      |         消息Id         |
|   FriendInfo    |   BotFriend    | 发送者于好友列表的信息 |
| GroupMemberInfo | BotGroupMember |          null          |

补充:消息的Sequence目前被封装为了Internal,但是该字段在某些特殊情况可能会用到,请各位开发者自行考虑如何使用