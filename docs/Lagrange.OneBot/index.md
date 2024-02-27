# Lagrange.OneBot
Lagrange.Core实现了OneBot V11的通信协议，可以和主流Bot框架进行通信

1. [nightly](https://github.com/LagrangeDev/Lagrange.Core/releases/tag/nightly) 通过Nightly Release获取最新的Self-Contained .NET8程序包
2. [Docker](https://github.com/LagrangeDev/Lagrange.Core/pkgs/container/lagrange.onebot) 通过ghcr.io的Docker部署（CI自动打包，可以获取每一个Commit的更新内容）
3. [Actions](https://github.com/LagrangeDev/Lagrange.Core/actions) 通过Docker获取Framework-Dependent .NET7/8程序包

::: tip 提示
Actions内的工件为Framework-Dependent打包模式
请前往[Microsoft](https://dotnet.microsoft.com/zh-cn/download)获取.NET Runtime 以运行
:::

::: tip 提示
NTQQ的SignServer不可与Android协议混用(如unidbg-fetch-qsign)

本项目不主动提供SignServer 请前往README.md加入Telegram群聊以获取有效信息
:::