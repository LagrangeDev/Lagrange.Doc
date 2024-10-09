# 事件

与`LagrangeGo`类似，`Lagrange-Python`亦采用事件订阅制。

`创建 Bot 实例`章节中，初始化的实例具有`subscribe`方法，可以使用该方法进行订阅事件。

**参数**

- event (*dataclass*): 订阅事件数据类，可参考下方事件列表。
- handler (*function*): 订阅事件的处理函数。

> `handler`函数需要传入一个`client`（类型为`lagrange.client.client.Client`）和需要处理的事件，事件可以有联合类型，但是订阅只可传入一种事件数据类。

## 事件列表

如果事件以`Friend`或`Private`开头，则通过`lagrange.client.events.friend`导入。

反之，如果以`Group`开头，则通过`lagrange.client.events.group`导入。

|事件名称|备注|
|-----|-----|
|`GroupMessage`|群消息|
|`GroupRecall`|群消息撤回|
|`GroupNudge`|群戳一戳|
|`GroupSign`|群打卡|
|`GroupMuteMember`|群禁言|
|`GroupMemberJoinRequest`|加群申请|
|`GroupMemberJoined`|群成员增加|
|`GroupMemberQuit`|群成员减少|
|`GroupMemberGotSpecialTitle`|群成员获得特殊头衔|
|`GroupNameChanged`|群名变动|
|`GroupReaction`|群消息回应|
|`GroupAlbumUpdate`|群相册更新（上传）|
|`GroupInvite`|邀请入群|
|`GroupMemberJoinedByInvite`|群成员邀请入群|
|`FriendMessage`|私聊消息|
|`FriendRecall`|私聊撤回|
|`FriendRequest`|好友申请|