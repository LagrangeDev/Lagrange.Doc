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
                        text: 'lagrangejs',
                        link: 'https://github.com/LagrangeDev/lagrangejs'
                    },
                    {
                        text: 'lagrange-python',
                        link: 'https://github.com/LagrangeDev/lagrange-python'
                    },
                    {
                        text: 'Lagrange.Doc',
                        link: 'https://github.com/LagrangeDev/Lagrange.Doc'
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
                ]
            },
            {
                text: 'Lagrange.Core',
                link: '/Lagrange.Core/',
                collapsed: false,
                items: [
                    {
                        text: '开始',
                        link: '/Lagrange.Core/Start/',
                        collapsed: true,
                        items: [
                            { text: "快速上手", link: "/Lagrange.Core/QuickStart" },
                            { text: '创建Bot实例', link: '/Lagrange.Core/Start/CreateBot' }
                        ]
                    },
                    {
                        text: '登录',
                        link: '/Lagrange.Core/Login/',
                        collapsed: true,
                        items: [
                            { text: '扫码登录', link: '/Lagrange.Core/Login/LoginByScanQrCode' },
                            { text: '密码登录', link: '/Lagrange.Core/Login/LoginByPassword' },
                            { text: '扩展', link: '/Lagrange.Core/Login/Extern' }
                        ]
                    },
                    {
                        text: '消息实体',
                        link: '/Lagrange.Core/MessageEntity/',
                        collapsed: true,
                        items: [
                            { text: '消息实体接口', link: '/Lagrange.Core/MessageEntity/IMessageEntity' },
                            { text: '表情消息', link: '/Lagrange.Core/MessageEntity/FaceEntity' },
                            { text: '文件消息', link: '/Lagrange.Core/MessageEntity/FileEntity' },
                            { text: '回复消息', link: '/Lagrange.Core/MessageEntity/ForwardEntity' },
                            { text: '图片消息', link: '/Lagrange.Core/MessageEntity/ImageEntity' },
                            { text: 'Json消息', link: '/Lagrange.Core/MessageEntity/JsonEntity' },
                            { text: '提及消息', link: '/Lagrange.Core/MessageEntity/MentionEntity' },
                            { text: '合并转发消息', link: '/Lagrange.Core/MessageEntity/MultiMsgEntity' },
                            { text: '文本消息', link: '/Lagrange.Core/MessageEntity/TextEntity' },
                            { text: '视频消息', link: '/Lagrange.Core/MessageEntity/VideoEntity' },
                            { text: 'Xml消息', link: '/Lagrange.Core/MessageEntity/XmlEntity' },
                        ]
                    },
                    {
                        text: '消息链',
                        link: '/Lagrange.Core/MessageChain/',
                        collapsed: true,
                        items: [
                            { text: '消息链', link: '/Lagrange.Core/MessageChain/MessageChain' },
                            { text: '构造消息链', link: '/Lagrange.Core/MessageChain/MessageBuilder' },
                            { text: '解析消息链', link: '/Lagrange.Core/MessageChain/ParseMessageChain' }
                        ]
                    },
                    {
                        text: '事件',
                        link: '/Lagrange.Core/Event/',
                        collapsed: true,
                        items: [
                            { text: '事件委托', link: '/Lagrange.Core/Event/EventInvoker' },
                            { text: '事件数据', link: '/Lagrange.Core/Event/EventArgs' }
                        ]
                    },
                    {
                        text: '发送',
                        link: '/Lagrange.Core/Send/',
                        collapsed: true,
                        items: [
                            { text: '发送消息', link: '/Lagrange.Core/Send/SendMessage' },
                            { text: '发送消息结果', link: '/Lagrange.Core/Send/MessageResult' }
                        ]
                    }
                ]
            },
            {
                text: 'Lagrange.OneBot',
                link: '/Lagrange.OneBot/',
                collapsed: false,
                items: [
                    {
                        text: "快速部署&配置",
                        link: '/Lagrange.OneBot/Config/',
                    },
                    {
                        text: "API",
                        collapsed: true,
                        items: [
                            { text: 'OneBot V11标准API', link: '/Lagrange.OneBot/API/OneBot/' },
                            {
                                text: '拓展API',
                                link: '/Lagrange.OneBot/API/Extend/',
                                collapsed: true,
                                items: [
                                    { text: "构造合并转发消息" }
                                ]
                            },
                        ]
                    },
                    {
                        text: "Segment",
                        collapsed: true,
                        items: [
                            { text: 'OneBot V11标准消息链', link: '/Lagrange.OneBot/Segment/OneBot/' },
                            { text: '拓展消息链', link: '/Lagrange.OneBot/Segment/Extend/' },
                        ]
                    }
                ]
            }
        ]
    }
}