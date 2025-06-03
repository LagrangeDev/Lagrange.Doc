# Protocol Events
`Lagrange.Core` 是一个事件驱动的系统。在上层，每一种API调用操作本质上都是组装一个事件，然后在系统的Logic, Service, Context中层层转发，最终变成通过Socket发送出去的字节流；而收到的回复或者推送也是同样地层层上递，最终解析为`Protocol Event`处理的。

在这里按照语义定义了多种`Protocol Event`，分为登录事件、系统事件和消息事件。