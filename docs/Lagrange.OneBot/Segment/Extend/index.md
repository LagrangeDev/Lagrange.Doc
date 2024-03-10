# 拓展消息链

## File

| 字段             | 类型   | 说明                   |
| ---------------- | ------ | ---------------------- |
| `group_id`       | int    | 群号                   |
| `file_id`        | string | 文件ID                 |
| `file_name`      | string | 文件名                 |
| `busid`          | int    | 文件类型               |
| `file_size`      | int    | 文件大小               |
| `upload_time`    | int    | 上传时间               |
| `dead_time`      | int    | 过期时间,永久文件恒为0 |
| `modify_time`    | int    | 最后修改时间           |
| `download_times` | int    | 下载次数               |
| `uploader`       | int    | 上传者ID               |
| `uploader_name`  | string | 上传者名字             |

## Folder

| 字段               | 类型   | 说明       |
| ------------------ | ------ | ---------- |
| `group_id`         | int    | 群号       |
| `folder_id`        | string | 文件夹ID   |
| `folder_name`      | string | 文件名     |
| `create_time`      | int    | 创建时间   |
| `creator`          | int    | 创建者     |
| `creator_name`     | string | 创建者名字 |
| `total_file_count` | int    | 子文件数量 |

## Node

| 字段               | 类型   | 说明       |
| ------------------ | ------ | ---------- |
| `uin`              | int    | QQ号       |
| `name     `        | string | 昵称       |
| `content`          | List[OneBotSegment] / OneBotSegment  | 消息内容     |
