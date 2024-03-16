# 事件数据 `EventArgs`

本节介绍所有的事件被触发时传递的数据。

## 数据基类 `EventBase`

所有事件数据均继承自此类

|      字段      |    类型    |        描述        |
| :------------: | :--------: | :----------------: |
|  `EventTime`   | `DateTime` | 事件被触发时的时间 |
| `EventMessage` |  `string`  |    事件消息概述    |

## Bot 上线事件 `BotOnlineEvent`

无额外字段

## Bot 下线事件 `BotOfflineEvent`

无额外字段

## Bot 日志事件 `BotLogEvent`

|  字段   |    类型    |      描述      |
| :-----: | :--------: | :------------: |
|  `Tag`  |  `string`  | 发生的地点标签 |
| `Level` | `LogLevel` |  事件消息概述  |

`ToString()` 方法覆写，返回日志概述。

日志内容为基类的 `EventMessage`。

## Bot 验证码事件 `BotCaptchaEvent`

| 字段  |   类型   |    描述    |
| :---: | :------: | :--------: |
| `Url` | `string` | 验证码链接 |

## Bot 私聊消息事件 `FriendMessageEvent`

|  字段   |      类型      |  描述  |
| :-----: | :------------: | :----: |
| `Chain` | `MessageChain` | 消息链 |

## Bot 群聊消息事件 `GroupMessageEvent`

|  字段   |      类型      |  描述  |
| :-----: | :------------: | :----: |
| `Chain` | `MessageChain` | 消息链 |

## Bot 临时消息事件 `GroupMessageEvent`

暂未实现

## Bot 好友请求事件 `FriendRequestEvent`

|    字段     |   类型   |          描述          |
| :---------: | :------: | :--------------------: |
| `SourceUin` |  `uint`  |        对方 Uin        |
|   `Name`    | `string` |        对方昵称        |
|  `Message`  | `string` | 对方发送的验证消息内容 |

## Bot 所在群管理变更事件 `GroupAdminChangedEvent`

|    字段     |   类型   |    描述    |
| :---------: | :------: | :--------: |
| `GroupUin`  |  `uint`  |   群 Uin   |
| `AdminUin`  | `string` |  管理 Uin  |
| `IsPromote` |  `bool`  | 是否为晋升 |

## Bot 被邀请至群事件 `GroupInvitationEvent`

|     字段     |  类型  |    描述    |
| :----------: | :----: | :--------: |
|  `GroupUin`  | `uint` |   群 Uin   |
| `InvitorUin` | `uint` | 邀请者 Uin |

## Bot 所在群新增成员事件 `GroupMemberIncreaseEvent`

|     字段     |  类型   |              描述              |
| :----------: | :-----: | :----------------------------: |
|  `GroupUin`  | `uint`  |             群 Uin             |
| `MemberUin`  | `uint`  |            成员 Uin            |
| `InvitorUin` | `uint?` | 邀请者 Uin (自己入群为 `null`) |

## Bot 所在群新增成员事件 `GroupMemberDecreaseEvent`

|     字段      |  类型   |              描述              |
| :-----------: | :-----: | :----------------------------: |
|  `GroupUin`   | `uint`  |             群 Uin             |
|  `MemberUin`  | `uint`  |            成员 Uin            |
| `OperatorUin` | `uint?` | 操作者 Uin (主动退群为 `null`) |
