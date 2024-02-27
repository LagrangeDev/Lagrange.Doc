

# MessageBuilder 构造消息链

构造消息链工厂类,根据静态方法的不同返回特定的MessageChain

------

## 构造群聊消息MessageChain:

```csharp
var groupMessageChain = MessageBuilder.Group(_uin)
```

该静态方法将接收一个uint作为目标群的群号,返回一个MessageChain实例

## 构造私聊消息MessageChain:

```csharp
var groupMessageChain = MessageBuilder.Group(_uin)
```

该静态方法将接收一个uint作为目标用户的uin,返回一个MessageChain实例

## 向构造里加入消息实体

采用链式调用的方法向消息内加入内容

### 加入文本

```csharp
.Text(_text);
```

参数\:text\:string(消息内容)

向消息内加入一段文本

### 加入图片

该方法有多个重载

1.指定图片路径(string)的重载

```csharp
.Image(_filePath);
```

2.指定图片二进制(byte[])的重载

```csharp
.Image(_file);
```

向消息内加入一张图片

### 加入提及(at)

```csharp
.Mention(_target);
```

参数\:target:uint(提及的目标用户),display:string?=null(显示的文本)

向消息内加入一个提及(at),备选参数display默认为null,会自动补上at目标所显示的文本

### 加入表情

```csharp
.Face(_id);
```

参数\:id\:ushort(表情Id),isLarge:bool=false(是否为大表情)

向消息内加入一个表情

### 加入回复

```csharp
.Forward(_text);
```

参数\:target\:MessageChain(目标消息)

让消息回复某个消息

~~(其实实际上只需要消息的Seq)~~

### 加入合并转发

```csharp
.MultiMsg();
```

N/A

~~(截至目前我也不会用)~~

### 加入Xml

```csharp
.Xml(_xml);
```

参数\:xml\:string(xml内容)

向消息内加入一段xml

### 加入文件

该方法有多个重载

1.指定文件路径(string)的重载

```csharp
.File(_filePath);
```

2.指定文件二进制(byte[])的重载

```csharp
.File(_file,_fileName);
```

向消息内加入一个文件
