module.exports = {
    title: 'Lagrange 文档',
    description: 'Lagrange\'s document',
    base: '/Lagrange.Doc/',
    themeConfig: {
        nav: [
            {
                text: 'GitHub',
                items: [
                    { text: 'Lagrange.Core', link: 'https://github.com/LagrangeDev/Lagrange.Core' },
                    { text: 'Lagrange.Doc', link: 'https://github.com/KusaGumina/Lagrange.Doc' }
                ]
            }
        ],
        sidebar: [
            {
                title: '首页',
                path: '/',
                collapsable: false,
                children: [
                    { title: "简介", path: "/" },
                    { title: "快速上手", path: "/QuickStart" }
                ]
            },
            {
                title: "开始",
                path: '/Start/',
                collapsable: false,
                children: [
                    { title: "创建Bot实例", path: "/Start/CreateBot" }
                ],
            },
            {
                title: "登陆",
                path: '/Login/',
                collapsable: false,
                children: [
                    { title: "扫码登陆", path: "/Login/LoginByScanQrCode" },
                    { title: "密码登陆", path: "/Login/LoginByPassword" },
                    { title: "扩展", path: "/Login/Extern" }
                ],
            }
        ]
    }
}
