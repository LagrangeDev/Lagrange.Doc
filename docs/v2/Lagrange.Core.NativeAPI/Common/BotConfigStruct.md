# BotConfigStruct

| 字段名               | 类型   | 默认值         | 说明              |
|-------------------|------|-------------|-----------------|
| Protocol          | byte | 0b00000100  | 协议标识位,默认为Linux  |
| AutoReconnect     | bool | true        | 是否自动重连          |
| UseIPv6Network    | bool | false       | 是否使用 IPv6 网络    |
| GetOptimumServer  | bool | true        | 是否获取最优服务器       |
| HighwayChunkSize  | uint | 1024 * 1024 | Highway的块大小（字节） |
| HighwayConcurrent | uint | 4           | Highway并发数量     |
| AutoReLogin       | bool | true        | 是否自动重新登录        |