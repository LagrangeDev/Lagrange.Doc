---
layout: home

hero:
  name: Lagrange.Doc
  tagline: Lagrange V2 使用手册
  actions:
    - text: 使用 Core
      link: ./Lagrange.Core/index
    - text: 使用 Native API
      link: ./Lagrange.NativeAPI/index
---

Lagrange.Core 是一个开源的 NTQQ 协议实现，免责声明详见项目主页。

### "已经是一名熟练的 C# Dev 了？"

前往 [Lagrange.Core](./Lagrange.Core/index.md) 查看 API 文档

### "希望内置到你喜欢的语言？"

前往 [Lagrange.Core.NativeAPI](./Lagrange.Core.NativeAPI/index.md) 查看如何通过 C ABI 调用 Lagrange.Core，提供 64 位的本机 DLL 和 SO，支持 C、C++、Go、Python、Rust 等语言

### "……等等，Lagrange.OneBot 去哪里了？"

由于 OneBot 11 协议的[各种历史遗留问题](https://milky.ntqqrev.org/guide/introduction.html)，我们最终决定，LagrangeV2 不再支持 OneBot 11 协议，V1 的 OneBot 11 协议实现也一并不再维护。

你可以使用以上方法或改用的 [Lagrange.Milky](https://lagrangedev.github.io/Lagrange.Milky.Document), Lagrange.Milky 是基于 LagrangeV2 的 [Milky](https://milky.ntqqrev.org) 协议实现