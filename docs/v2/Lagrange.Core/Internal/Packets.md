# Packets
`Lagrange.Core`将事件层层封装为Packet然后发送。首先，是`protobuf`包，然后，将会被封装为`SSO Packet`, 最终会被封装为不同版本(12/13)的`UniPacket`封装。

在协议上可以参考腾讯的[Tars](https://tarscloud.github.io/TarsDocs/base/tars-tup.html)。其为`TRPC`的早期开源版本，暴露了更多细节。