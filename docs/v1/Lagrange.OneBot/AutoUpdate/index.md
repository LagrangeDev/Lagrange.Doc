# 自动更新

自[#810](https://github.com/LagrangeDev/Lagrange.Core/commit/7ce94a451347e893a60d347ae38270180b61805f)以来,Lagrange.OneBot已实装了自动从GitHub Releases更新的功能, 该功能会在启动时检查更新, 如果有新版本, 会自动下载并替换当前版本.
默认情况下, 自动更新功能是关闭的, 你可以在配置文件中设置`EnableAutoUpdate`为`true`来启用它.

## 配置文件

每次启动时,如果当前目录不存在AutoUpdaterConfig.json文件, Lagrange会在当前目录下创建一个json文件, 你可以在其中设置自动更新的相关配置.

```json
{
   "EnableAutoUpdate": false,  // 启用自动更新
   "CheckInterval": 360,  // 每360s检查一次更新,单位为秒
   "ProxyUrl": "",  //访问Github的代理地址, 为空则不使用代理,和SignServer的ProxyUrl一样只接受http协议
   "LastUpdateTime": "2025-04-24T17:00:00Z"  //由程序自动生成的上次更新时间, 一般情况下请勿修改
}
```

::: warning 注意

以 `//` 开头的为注释, 试图复制粘贴到实际的配置文件中时务必删除

:::

## Tips
- 如果你在使用自动更新功能时遇到问题, 请检查你的网络连接和代理设置.
- 更新的配置文件不支持热重载, 你需要重启Lagrange才能使更改生效.
- 更新下载完毕后会自动强制重启Lagrange. 此举可能导致Docker容器内的Lagrange无法正常重启, 丢失生命周期等, 在Dockerfile中添加`--restart=always`参数可能可以解决该问题.
- MacOS更新完毕需要手动信任新的二进制文件. 
- 更新的临时文件放置在系统Temp目录下Lagrange.OneBot.AutoUpdate中, 你可以在更新完成后手动删除, 在每次自动更新后会自动删除上一次的更新文件.