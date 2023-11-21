module.exports = {
    title: 'Lagrange 文档',
    description: 'Lagrange\'s document',
    base: '/Lagrange.Doc/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'GitHub',
                items: [
                    {
                        text: 'Lagrange.Core',
                        link: 'https://github.com/LagrangeDev/Lagrange.Core'
                    },
                    {
                        text: 'Lagrange.Doc',
                        link: 'https://github.com/KusaGumina/Lagrange.Doc'
                    }
                ]
            }
        ],
        sidebar: [
            {
                text: '首页',
                link: '/',
                collapsed: false,
                items: [
                    { text: "简介", link: "/" },
                    { text: "快速上手", link: "/QuickStart" }
                ]
            },
            {
                text: '开始',
                link: '/Start/',
                collapsed: true,
                items: [
                    { text: '创建Bot实例', link: '/Start/CreateBot' }
                ]
            },
            {
                text: '登录',
                link: '/Login/',
                collapsed: true,
                items: [
                    { text: '扫码登录', link: '/Login/LoginByScanQrCode' },
                    { text: '密码登录', link: '/Login/LoginByPassword' },
                    { text: '扩展', link: '/Login/Extern' }
                ]
            },
            {
                text: '消息实体',
                link: '/MessageEntity/',
                collapsed: true,
                items: [
                    { text: '消息实体接口', link: '/MessageEntity/IMessageEntity' },
                    { text: '表情消息', link: '/MessageEntity/FaceEntity' },
                    { text: '文件消息', link: '/MessageEntity/FileEntity' },
                    { text: '回复消息', link: '/MessageEntity/ForwardEntity' },
                    { text: '图片消息', link: '/MessageEntity/ImageEntity' },
                    { text: 'Json消息', link: '/MessageEntity/JsonEntity' },
                    { text: '提及消息', link: '/MessageEntity/MentionEntity' },
                    { text: '合并转发消息', link: '/MessageEntity/MultiMsgEntity' },
                    { text: '文本消息', link: '/MessageEntity/TextEntity' },
                    { text: '视频消息', link: '/MessageEntity/VideoEntity' },
                    { text: 'Xml消息', link: '/MessageEntity/XmlEntity' },
                ]
            },
            {
                text: '消息链',
                link: '/MessageChain/',
                collapsed: true,
                items: [
                    { text: '消息链', link: '/MessageChain/MessageChain' },
                    { text: '构造消息链', link: '/MessageChain/MessageBuilder' },
                    { text: '解析消息链', link: '/MessageChain/ParseMessageChain' }
                ]
            },
            {
                text: '事件',
                link: '/Event/',
                collapsed: true,
                items: [
                    { text: '事件委托', link: '/Event/EventInvoker' },
                    { text: '事件数据', link: '/Event/EventArgs' }
                ]
            }
        ]
    }
}