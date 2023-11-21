# FileEntity 文件消息

文件消息类,继承自接口IMessageEntity

|   字段   |  类型   |     描述     |
| :------: | :-----: | :----------: |
| IsGroup  |  bool   | 是否为群文件 |
| FileSize |  long   |   文件大小   |
| FileName | string  |    文件名    |
| FileMd5  | byte[]  |   文件Md5    |
| FileUrl  | string? |   文件路径   |
