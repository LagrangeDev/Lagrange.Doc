# 拓展API

## 获取收藏表情

**方法名**：
`fetch_custom_face`

#### 该方法无参数

**响应数据**

| 字段            | 类型           | 说明       |
|---------------|--------------|----------|
| [RootElement] | List[string] | 表情的下载URL |


## 获取好友历史消息记录

**方法名**：
`get_friend_msg_history`

**参数**

| 字段           | 类型     | 说明             |
|--------------|--------|----------------|
| `user_id`    | uint32 | 好友ID           |
| `message_id` | int32  | 要获取的消息的最后一条的ID |
| `count`      | int32  | 获取的消息数量        |

**响应数据**

| 字段         | 类型                         | 说明    |
|------------|----------------------------|-------|
| `messages` | List[OneBotPrivateMessage] | 获取的消息 |

## 获取群组历史消息记录

**方法名**：
`get_group_msg_history`

**参数**

| 字段           | 类型     | 说明             |
|--------------|--------|----------------|
| `group_id`   | uint32 | 群组ID           |
| `message_id` | int32  | 要获取的消息的最后一条的ID |
| `count`      | int32  | 获取的消息数量        |

**响应数据**

| 字段 | 类型                       | 说明    |
| --- |--------------------------|-------|
| `messages` | List[OneBotGroupMessage] | 获取的消息 |



## 构造合并转发消息

**方法名**：
`send_forward_msg`

**参数**

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `messages` | List[OneBotSegment.node] | 参考下方 |

其中`OneBotSegment.node`的`data`部分要求如下

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `name` | string | 自定义消息发送者昵称 |
| `uin`  | string | 自定义消息发送者QQ号 |
| `content` | List[OneBotSegment] | 消息内容 |

**响应数据**

| 字段 | 类型  | 说明 |
| --- | --- | --- |
| `resid` | string | Resid |

:::tip
**发送合并转发消息**

请使用标准消息发送API发送一个`"type": "forward", "id": Resid`的`OneBotSegment`消息


**参考代码**

::: code-group

```python{10-11} [Nonebot OneBot V11]
from nonebot.adapters.onebot.v11 import MessageSegment

async def test_send_forward_message(target_id: int):
    messages = [
        {
            "type": "node",
            "data": {"name": "小助手", "uin": "2854196310", "content": [MessageSegment.text("测试消息")]},
        }
    ]
    res_id = await bot.call_api("send_forward_msg", messages=messages)
    await bot.send_group_msg(group_id=target_id, message=MessageSegment.forward(res_id))
```

:::
