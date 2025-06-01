# 事件委托

本节将列举所有的可订阅的事件委托

|             字段             |                   类型                    |                  描述                  |
| :--------------------------: | :---------------------------------------: | :------------------------------------: |
|      `OnBotOnlineEvent`      |      LagrangeEvent\<BotOnlineEvent>?      | Bot 上线时触发,可用于监控是否登录成功  |
|     `OnBotOfflineEvent`      |     LagrangeEvent\<BotOfflineEvent>?      | Bot 下线时触发,可用于监控 Bot 是否掉线 |
|       `OnBotLogEvent`        |       LagrangeEvent\<BotLogEvent>?        |             日志产生时触发             |
|     `OnBotCaptchaEvent`      |     LagrangeEvent\<BotCaptchaEvent>?      |          Bot 需要验证码时触发          |
| `OnGroupInvitationReceived`  |   LagrangeEvent\<GroupInvitationEvent>?   |          Bot 被邀请入群时触发          |
|  `OnFriendMessageReceived`   |    LagrangeEvent\<FriendMessageEvent>?    |           收到私聊消息时触发           |
|   `OnGroupMessageReceived`   |    LagrangeEvent\<GroupMessageEvent>?     |           收到群聊消息时触发           |
|   `OnTempMessageReceived`    |     LagrangeEvent\<TempMessageEvent>?     |          收到群临时消息时触发          |
|  `OnGroupAdminChangedEvent`  |  LagrangeEvent\<GroupAdminChangedEvent>?  |             群管变更时触发             |
| `OnGroupMemberIncreaseEvent` | LagrangeEvent\<GroupMemberIncreaseEvent>? |             有人入群时触发             |
| `OnGroupMemberDecreaseEvent` | LagrangeEvent\<GroupMemberDecreaseEvent>? |             有人退群时触发             |
|     `FriendRequestEvent`     |    LagrangeEvent\<FriendRequestEvent>?    |            有好友申请时触发            |
