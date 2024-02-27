# 解析消息链

这里给出一个简单的示例

```csharp
var messageChain = new MessageChain();
//假设有一个MessageChain
foreach(var entity in messageChain)
{
    if(entity is TextEntity textEntity)
        Console.WriteLine(textEntity.Text);
}
```

