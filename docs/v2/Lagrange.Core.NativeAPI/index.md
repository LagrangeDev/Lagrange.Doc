# Lagrange.Core.NativeAPI

## 简介
Lagrange.Core.NativeAPI(以下简称NAPI)是对Lagrange.Core使用[C ABI](https://zh.m.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%8E%A5%E5%8F%A3)封装的本机库,采用NativeAOT,无需运行时,旨在为各应用端提供封装的嵌入的协议端使用方法

## 协议许可
Lagrange.Core基于GPl3.0开源,所以在你使用它的衍生物二进制NativeAPI做动态链接调用的时候,不需要把你自己的代码开源,但你仍然需要在一个合适的位置声明协议的提供方,并附带原项目的链接

## 约定
NativeAPI的命名采取驼峰命名的方式,我们尽可能的保证与Core的类型命名一致,但对于实在没无办法避开的OOP/GC类型,文档里会进行额外的说明

**所有**由NativeAPI发送的指针均需要通过NativeAPI的FreeMemory()方法进行释放,同时,所有传给NativeAPI的指针在方法调用结束后都需要由调用方释放,NativeAPI内部不会在方法结束调用后仍然持有传入的指针和内存

所有的string都会被转化为以utf8编码的NativeByteArray类型封送,不会存在其他格式的字符串,NAPI也仅接受对应的格式传入

NativeAPI不使用SAFEARRAY,所有的数组都有对应的封装,并声明其长度,相关封装定义可以在文档的Common类下查看

## 开始开发

1.基本类型

2.登录

3.事件

4.发送消息