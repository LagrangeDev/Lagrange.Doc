# BotKeystoreStruct

| 字段名                | 类型                  | 默认值      | 说明           |
|--------------------|---------------------|----------|--------------|
| Uin                | long                | 0        | 用户 UIN（QQ号）  |
| Uid                | ByteArrayNative     | new()    | 用户唯一标识符      |
| Guid               | ByteArrayNative     | new()    | 设备 GUID      |
| AndroidId          | ByteArrayNative     | new()    | Android ID   |
| Qimei              | ByteArrayNative     | new()    | 设备 QIMEI 号   |
| DeviceName         | ByteArrayNative     | new()    | 设备名称         |
| A2                 | ByteArrayNative     | new()    | 登录凭证 A2      |
| A2Key              | ByteArrayNative     | byte[16] | A2 的密钥       |
| D2                 | ByteArrayNative     | new()    | 登录凭证 D2      |
| D2Key              | ByteArrayNative     | byte[16] | D2 的密钥       |
| A1                 | ByteArrayNative     | new()    | 登录凭证 A1      |
| A1Key              | ByteArrayNative     | byte[16] | A1 的密钥       |
| NoPicSig           | ByteArrayNative     | new()    | 无图验证码签名      |
| TgtgtKey           | ByteArrayNative     | new()    | TGTGT 加密密钥   |
| Ksid               | ByteArrayNative     | new()    | 会话 ID        |
| SuperKey           | ByteArrayNative     | new()    | 超级登录密钥       |
| StKey              | ByteArrayNative     | new()    | ST 密钥        |
| StWeb              | ByteArrayNative     | new()    | Web ST 密钥    |
| St                 | ByteArrayNative     | new()    | ST 凭证        |
| WtSessionTicket    | ByteArrayNative     | new()    | WtSession 凭证 |
| WtSessionTicketKey | ByteArrayNative     | new()    | WtSession 密钥 |
| RandomKey          | ByteArrayNative     | byte[16] | 会话随机密钥       |
| SKey               | ByteArrayNative     | new()    | SKey 密钥      |
| PsKey              | ByteArrayDictNative | new()    | PsKey 表      |