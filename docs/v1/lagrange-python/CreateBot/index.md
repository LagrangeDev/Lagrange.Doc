# 创建 Bot 实例

首先从`lagrange`库直接导入`Lagrange`类，随后创建实例。

初始化参数中，`uin`可直接传入`0`（类型为`int`），`protocol`根据`sign_url`的类型而定，如果使用`Linux`的`Signer`，`protocol`请传入`linux`，以此类推。

`sign_url`需要传入一个实际可用的`Lagrange Sign`地址，注意本项目的`Sign`与其他`Lagrange`实现的同版本一致。

将初始化的类实例赋值给一个变量后，可使用实例方法订阅事件以及启动。调用该实例的`launch`方法即可启动`lagrange-python`。

> 目前`lagrange-python`只支持扫码登录，如果扫码登录后出现`Code 45`，请检查`Sign`是否正常（连接状态？请求地址？协议版本？）。

初始化完毕后，可参考下一章节对具体的事件进行响应以及处理。