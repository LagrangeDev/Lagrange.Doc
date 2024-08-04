# 创建 Bot 实例

## BotContext 上下文类

BotContext 是 Lagrange.Core 的核心实例, Event, Logger, Send 等操作都需要由该实例完成

|   字段    |     类型     |                 描述                 |
| :-------: | :----------: | :----------------------------------: |
| `Invoker` | EventInvoker | 所有 Event 的集合,用于订阅并处理消息 |
| `BotUin`  |     uint     |              登陆的账号              |
| `BotName` |    string    |            登陆账号的昵称            |

BotContext 的构造需要由 BotFactory 工厂类创建, 其本身的构造函数私有化

BotFactory 需要 BotConfig, DeviceInfo, KeyStore 作为参数, 返回 BotContext 实例

```csharp
var bot = BotFactory.Create(new BotConfig(), _deviceInfo, _keyStore);
```

## BotConfig 配置类

|         字段         |     类型      |                                     描述                                     |
| :------------------: | :-----------: | :--------------------------------------------------------------------------: |
|      `Protocol`      |   Protocols   |                           协议平台,默认为 `Linux`                            |
|   `AutoReconnect`    |     bool      |                            自动重连,默认为 `true`                            |
|   `UseIPv6Network`   |     bool      |                        是否使用 IPv6, 默认为 `false`                         |
|  `GetOptimumServer`  |     bool      |                 自动使用链接状态最优的服务器, 默认为 `true`                  |
| `CustomSignProvider` | SignProvider? | 自定义签名服务器, 需要与 Protocol 和版本匹配, 不匹配或无签名可能导致无法登陆 |

## BotDeviceInfo 设备信息类

|      字段       |  类型  |                               描述                                |
| :-------------: | :----: | :---------------------------------------------------------------: |
|     `Guid`      |  Guid  |                     全局唯一标识符, 可为任意                      |
|  `MacAddress`   | byte[] |                  设备 MAC 地址, 6 位长 `byte[]`                   |
|  `DeviceName`   | string |                        设备名称, 可为任意                         |
| `SystemKernel`  | string | 系统内核, 固定为 `Windows 10.0.19042`, 可能会随着默认构造方法修改 |
| `KernelVersion` | string |                      内核版本号, 同系统内核                       |

手动创建示例:

```csharp
private BotDeviceInfo _deviceInfo = new()
{
    Guid = Guid.NewGuid(),
    MacAddress = GenRandomBytes(6),
    DeviceName = $"Lagrange-52D02F",
    SystemKernel = "Windows 10.0.19042",
    KernelVersion = "10.0.19042.0"
};
//手动创建设备信息
```

## BotKeyStore 密钥存储类

由序列化现有 KeyStore 创建, 或由初始构造方法自动创建, 登陆成功后可使用

```csharp
_keyStore = bot.UpdateKeystore();
```

更新获取 KeyStore 序列化至本地存储,方便下次快速登陆
