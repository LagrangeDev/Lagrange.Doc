# 事件数据 EventArgs

本节介绍所有的事件被触发时传递的数据

## 数据基类 EventBase

所有事件数据均继承自此类

|     字段     |   类型   |        描述        |
| :----------: | :------: | :----------------: |
|  EventTime   | DateTime | 事件被触发时的时间 |
| EventMessage |  string  |    事件消息概述    |

## Bot上线事件 BotOnlineEvent

无额外字段

## Bot下线事件 BotOfflineEvent

无额外字段

## Bot日志事件 BotLogEvent

| 字段  |   类型   |      描述      |
| :---: | :------: | :------------: |
|  Tag  |  string  | 发生的地点标签 |
| Level | LogLevel |  事件消息概述  |

ToString()方法覆写 返回日志概述

日志内容为基类的EventMessage

## Bot验证码事件 BotCaptchaEvent

| 字段 |  类型  |    描述    |
| :--: | :----: | :--------: |
| Url  | string | 验证码链接 |

## Bot私聊消息事件 FriendMessageEvent

| 字段  |     类型     |  描述  |
| :---: | :----------: | :----: |
| Chain | MessageChain | 消息链 |

## Bot群聊消息事件 GroupMessageEvent

| 字段  |     类型     |  描述  |
| :---: | :----------: | :----: |
| Chain | MessageChain | 消息链 |

## Bot临时消息事件 GroupMessageEvent

暂未实现

## Bot好友请求事件 FriendRequestEvent

|   字段    |  类型  |          描述          |
| :-------: | :----: | :--------------------: |
| SourceUin |  uint  |        对方Uin         |
|   Name    | string |        对方昵称        |
|  Message  | string | 对方发送的验证消息内容 |

## Bot所在群管理变更事件 GroupAdminChangedEvent

|   字段    |  类型  |    描述    |
| :-------: | :----: | :--------: |
| GroupUin  |  uint  |   群Uin    |
| AdminUin  | string |  管理Uin   |
| IsPromote |  bool  | 是否为晋升 |

## Bot被邀请至群事件 GroupInvitationEvent

|    字段    | 类型 |   描述    |
| :--------: | :--: | :-------: |
|  GroupUin  | uint |   群Uin   |
| InvitorUin | uint | 邀请者Uin |

## Bot所在群新增成员事件 GroupMemberIncreaseEvent

|    字段    | 类型  |           描述            |
| :--------: | :---: | :-----------------------: |
|  GroupUin  | uint  |           群Uin           |
| MemberUin  | uint  |          成员Uin          |
| InvitorUin | uint? | 邀请者Uin(自己入群为null) |

## Bot所在群新增成员事件 GroupMemberDecreaseEvent

|    字段     | 类型  |           描述            |
| :---------: | :---: | :-----------------------: |
|  GroupUin   | uint  |           群Uin           |
|  MemberUin  | uint  |          成员Uin          |
| OperatorUin | uint? | 操作者Uin(主动退群为null) |