# 拓展API

## 获取收藏表情

**方法名**：
`fetch_custom_face`

:::tip 提示
该方法无参数
:::

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

:::tip 提示
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

## 发送合并转发(群聊)

**方法名**：
`send_group_forward_msg`

**参数**

| 字段       | 类型                     | 说明                                                         |
| ---------- | ------------------------ | ------------------------------------------------------------ |
| `group_id` | uint                     | 群号                                                         |
| `messages` | List[OneBotSegment.node] | 自定义转发消息, 要求参看前文 |

**响应数据**

| 字段名       | 数据类型 | 说明        |
| ------------ | -------- | ----------- |
| `message_id` | int64    | 消息 ID     |
| `forward_id` | string   | 转发消息 ID |



## 发送合并转发(好友)

**方法名**：
`send_private_forward_msg`

**参数**

| 字段       | 类型           | 说明                                                         |
| ---------- | ------------------------ | ------------------------------------------------------------ |
| `user_id`  | uint                     | 好友QQ号                                                     |
| `messages` | List[OneBotSegment.node] | 自定义转发消息, 要求参看前文 |

**响应数据**

| 字段名       | 数据类型 | 说明        |
| ------------ | -------- | ----------- |
| `message_id` | int64    | 消息 ID     |
| `forward_id` | string   | 转发消息 ID |

## 上传群文件

**方法名**：
`upload_group_file`

**参数**

| 字段       | 类型   | 说明         |
| ---------- | ------ | ------------ |
| `group_id` | int64  | 群号         |
| `file`     | string | **本地**文件路径 |
| `name`     | string | 储存名称     |
| `folder`   | string | 父目录ID（可选）     |

::: tip 提示
在不提供 `folder` 参数的情况下默认上传到根目录
:::

## 私聊发送文件

**方法名**：
`upload_private_file`

**参数**

| 字段      | 类型   | 说明         |
| --------- | ------ | ------------ |
| `user_id` | int64  | 对方 QQ 号   |
| `file`    | string | **本地**文件路径 |
| `name`    | string | 文件名称     |
