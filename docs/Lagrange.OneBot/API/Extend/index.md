# 拓展 API

## 获取收藏表情

### 方法名

`fetch_custom_face`

### 参数

该方法无参数

### 响应数据

| 字段            | 类型         | 说明           |
| --------------- | ------------ | -------------- |
| `[RootElement]` | List[string] | 表情的下载 URL |

## 获取好友历史消息记录

### 方法名

`get_friend_msg_history`

### 参数

| 字段         | 类型 | 说明                        |
| ------------ | ---- | --------------------------- |
| `user_id`    | uint | 好友 ID                     |
| `message_id` | int  | 要获取的消息的最后一条的 ID |
| `count`      | int  | 获取的消息数量              |

### 响应数据

| 字段       | 类型                       | 说明       |
| ---------- | -------------------------- | ---------- |
| `messages` | List[OneBotPrivateMessage] | 获取的消息 |

## 获取群组历史消息记录

### 方法名

`get_group_msg_history`

### 参数

| 字段         | 类型 | 说明                        |
| ------------ | ---- | --------------------------- |
| `group_id`   | uint | 群组 ID                     |
| `message_id` | int  | 要获取的消息的最后一条的 ID |
| `count`      | int  | 获取的消息数量              |

### 响应数据

| 字段       | 类型                     | 说明       |
| ---------- | ------------------------ | ---------- |
| `messages` | List[OneBotGroupMessage] | 获取的消息 |

## 构造合并转发消息

### 方法名

`send_forward_msg`

### 参数

| 字段       | 类型                                             | 说明     |
| ---------- | ------------------------------------------------ | -------- |
| `messages` | List[[Node](../../Segment/Extend/index.md#node)] | 参考下方 |

其中`OneBotSegment.node`的`data`部分要求如下

| 字段      | 类型                | 说明                   |
| --------- | ------------------- | ---------------------- |
| `name`    | string              | 自定义消息发送者昵称   |
| `uin`     | string              | 自定义消息发送者 QQ 号 |
| `content` | List[OneBotSegment] | 消息内容               |

### 响应数据

| 字段    | 类型   | 说明  |
| ------- | ------ | ----- |
| `resid` | string | Resid |

:::tip 提示
**发送合并转发消息**

请使用标准消息发送 API 发送一个 `"type": "forward", "id": Resid` 的 `OneBotSegment` 消息

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

## 发送合并转发 (群聊)

### 方法名

`send_group_forward_msg`

### 参数

| 字段       | 类型                                             | 说明                         |
| ---------- | ------------------------------------------------ | ---------------------------- |
| `group_id` | uint                                             | 群号                         |
| `messages` | List[[Node](../../Segment/Extend/index.md#node)] | 自定义转发消息, 要求参看前文 |

### 响应数据

| 字段名       | 数据类型 | 说明        |
| ------------ | -------- | ----------- |
| `message_id` | int      | 消息 ID     |
| `forward_id` | string   | 转发消息 ID |

## 发送合并转发(好友)

### 方法名

`send_private_forward_msg`

### 参数

| 字段       | 类型                                             | 说明                         |
| ---------- | ------------------------------------------------ | ---------------------------- |
| `user_id`  | uint                                             | 好友 QQ 号                   |
| `messages` | List[[Node](../../Segment/Extend/index.md#node)] | 自定义转发消息, 要求参看前文 |

### 响应数据

| 字段名       | 数据类型 | 说明        |
| ------------ | -------- | ----------- |
| `message_id` | int      | 消息 ID     |
| `forward_id` | string   | 转发消息 ID |

## 上传群文件

### 方法名

`upload_group_file`

### 参数

| 字段       | 类型   | 说明              |
| ---------- | ------ | ----------------- |
| `group_id` | int    | 群号              |
| `file`     | string | **本地**文件路径  |
| `name`     | string | 储存名称          |
| `folder`   | string | 父目录 ID（可选） |

::: tip 提示
在不提供 `folder` 参数的情况下默认上传到根目录
:::

## 私聊发送文件

### 方法名

`upload_private_file`

### 参数

| 字段      | 类型   | 说明             |
| --------- | ------ | ---------------- |
| `user_id` | int    | 对方 QQ 号       |
| `file`    | string | **本地**文件路径 |
| `name`    | string | 文件名称         |

## 获取群根目录文件列表

### 方法名

`get_group_root_files`

### 参数

| 字段       | 类型 | 说明 |
| ---------- | ---- | ---- |
| `group_id` | int  | 群号 |

### 响应数据

| 字段      | 类型                                                 | 说明       |
| --------- | ---------------------------------------------------- | ---------- |
| `files`   | List[[File](../../Segment/Extend/index.md#file)]     | 文件列表   |
| `folders` | List[[Folder](../../Segment/Extend/index.md#folder)] | 文件夹列表 |

## 获取群子目录文件列表

### 方法名

`get_group_files_by_folder`

### 参数

| 字段        | 类型   | 说明                         |
| ----------- | ------ | ---------------------------- |
| `group_id`  | int    | 群号                         |
| `folder_id` | string | 文件夹 ID 参考 `Folder` 对象 |

### 响应数据

| 字段      | 类型                                                 | 说明       |
| --------- | ---------------------------------------------------- | ---------- |
| `files`   | List[[File](../../Segment/Extend/index.md#file)]     | 文件列表   |
| `folders` | List[[Folder](../../Segment/Extend/index.md#folder)] | 文件夹列表 |

## 获取群文件资源链接

### 方法名

`get_group_file_url`

### 参数

| 字段       | 类型   | 说明     |
| ---------- | ------ | -------- |
| `group_id` | int    | 群号     |
| `file_id`  | string | 文件 ID  |
| `busid`    | int    | 文件类型 |

### 响应数据

| 字段  | 类型   | 说明         |
| ----- | ------ | ------------ |
| `url` | string | 文件下载链接 |

## 好友戳一戳

### 方法名

`friend_poke`

### 参数

| 字段      | 类型 | 说明       |
| --------- | ---- | ---------- |
| `user_id` | int  | 对方 QQ 号 |

## 群组戳一戳

### 方法名

`group_poke`

### 参数

| 字段       | 类型 | 说明       |
| ---------- | ---- | ---------- |
| `group_id` | int  | 群号       |
| `user_id`  | int  | 对方 QQ 号 |

## 设置群组专属头衔

### 方法名

`set_group_special_title`

### 参数

| 字段名          | 数据类型 | 默认值 | 说明                               |
| --------------- | -------- | ------ | ---------------------------------- |
| `group_id`      | uint     | -      | 群号                               |
| `user_id`       | uint     | -      | 要设置的 QQ 号                     |
| `special_title` | string   | -      | 专属头衔, 空字符串表示删除专属头衔 |
