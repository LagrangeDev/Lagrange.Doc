# Lagrange.OneBot

Lagrange.Core 实现了 OneBot V11 的通信协议, 可以和主流 Bot 框架进行通信

1. [nightly](https://github.com/LagrangeDev/Lagrange.Core/releases/tag/nightly) 通过 Nightly Release 获取 Self-Contained .NET 8 程序包 (该版本可能不为最新版本)
2. [Docker](https://github.com/LagrangeDev/Lagrange.Core/pkgs/container/lagrange.onebot) 通过 ghcr.io 的 Docker 部署
3. [Actions](https://github.com/LagrangeDev/Lagrange.Core/actions) 通过 Docker 获取 Framework-Dependent .NET 7 / 8 程序包

::: tip 提示

Actions 内的工件为 Framework-Dependent 打包模式；

请前往 [Microsoft](https://dotnet.microsoft.com/zh-cn/download) 获取 .NET Runtime 以运行
:::

::: danger 提醒

NTQQ 的 SignServer 不可与 Android 协议混用 (如 unidbg-fetch-qsign)

本项目不主动提供 SignServer, 请前往 README.md 加入 Telegram 群聊以获取有效信息
:::

## 从 LiteDB 迁移到 Realm

使用 [Lagrange.OneBot.DatabaseShift](https://github.com/LagrangeDev/Lagrange.OneBot.DatabaseShift) 将 `lagrange-x.db` 数据库迁移到 `lagrange-x-db`, 将 `lagrange-x-db` 放在原先 `lagrange-x.db` 所在的目录, 启动即可迁移完成
