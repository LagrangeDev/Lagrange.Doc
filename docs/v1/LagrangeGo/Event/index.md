# 事件

LagrangeGo使用的是事件订阅机制

方法签名:

```go
EventHandle[T].Subscribe(func(client *QQClient, event T))
```

示例

```go
qqclient.GroupMessageEvent.Subscribe(func(client *client.QQClient, event *message.GroupMessage) {
	// 你可以从event中获取事件的各个参数
	
	// 这段代码会将群聊收到的消息打印出来
    fmt.Println(event.ToString())
})
```

目前支持的EventHandle

|                        EventHandle[T]                        |    描述    |
|:------------------------------------------------------------:|:--------:|
|             `EventHandle[*message.GroupMessage]`             |  群聊消息事件  |
|        `PrivateMessageEvent[*message.PrivateMessage]`        |  私聊消息事件  |
|           `TempMessageEvent[*message.TempMessage]`           | 临时会话消息事件 |
|           `GroupInvitedEvent[*event.GroupInvite]`            |  被邀请入群   |
| `GroupMemberJoinRequestEvent[*event.GroupMemberJoinRequest]` |   加群申请   |
|      `GroupMemberJoinEvent[*event.GroupMemberIncrease]`      |   成员入群   |
|     `GroupMemberLeaveEvent[*event.GroupMemberDecrease]`      |   成员退群   |
|              `GroupMuteEvent[*event.GroupMute]`              |   群聊禁言   |
|            `GroupRecallEvent[*event.GroupRecall]`            |  群聊撤回消息  |
|          `FriendRequestEvent[*event.FriendRequest]`          |   好友申请   |
|           `FriendRecallEvent[*event.FriendRecall]`           |  好友消息撤回  |
|                 `RenameEvent[*event.Rename]`                 |   昵称变动   |
