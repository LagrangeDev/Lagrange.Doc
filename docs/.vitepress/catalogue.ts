export const coreSidebar = {
	text: "Lagrange.Core",
	base: "",
	items: [
		{
			text: "Lagrange.Core",
			link: "/Lagrange.Core/",
		},
		{
			text: "Bot 实例",
			items: [
				{
					text: "创建 Bot 实例",
					link: "/Lagrange.Core/CreateBot/",
				},
			],
		},
		{
			text: "登录",
			link: "/Lagrange.Core/Login/",
			items: [
				{
					text: "扫码登录",
					link: "/Lagrange.Core/Login/LoginByScanQrCode",
				},
				{
					text: "密码登录",
					link: "/Lagrange.Core/Login/LoginByPassword",
				},
				{
					text: "扩展",
					link: "/Lagrange.Core/Login/Extern",
				},
			],
		},
		{
			text: "消息实体",
			link: "/Lagrange.Core/MessageEntity/",
			items: [
				{
					text: "消息实体接口",
					link: "/Lagrange.Core/MessageEntity/IMessageEntity",
				},
				{
					text: "表情消息",
					link: "/Lagrange.Core/MessageEntity/FaceEntity",
				},
				{
					text: "文件消息",
					link: "/Lagrange.Core/MessageEntity/FileEntity",
				},
				{
					text: "回复消息",
					link: "/Lagrange.Core/MessageEntity/ForwardEntity",
				},
				{
					text: "图片消息",
					link: "/Lagrange.Core/MessageEntity/ImageEntity",
				},
				{
					text: "JSON 消息",
					link: "/Lagrange.Core/MessageEntity/JsonEntity",
				},
				{
					text: "提及消息",
					link: "/Lagrange.Core/MessageEntity/MentionEntity",
				},
				{
					text: "合并转发消息",
					link: "/Lagrange.Core/MessageEntity/MultiMsgEntity",
				},
				{
					text: "文本消息",
					link: "/Lagrange.Core/MessageEntity/TextEntity",
				},
				{
					text: "视频消息",
					link: "/Lagrange.Core/MessageEntity/VideoEntity",
				},
				{
					text: "XML 消息",
					link: "/Lagrange.Core/MessageEntity/XmlEntity",
				},
			],
		},
		{
			text: "消息链",
			link: "/Lagrange.Core/MessageChain/",
			items: [
				{
					text: "消息链",
					link: "/Lagrange.Core/MessageChain/MessageChain",
				},
				{
					text: "构造消息链",
					link: "/Lagrange.Core/MessageChain/MessageBuilder",
				},
				{
					text: "解析消息链",
					link: "/Lagrange.Core/MessageChain/ParseMessageChain",
				},
			],
		},
		{
			text: "事件",
			link: "/Lagrange.Core/Event/",
			items: [
				{ text: "事件委托", link: "/Lagrange.Core/Event/EventInvoker" },
				{ text: "事件数据", link: "/Lagrange.Core/Event/EventArgs" },
			],
		},
		{
			text: "发送",
			link: "/Lagrange.Core/Send/",
			items: [
				{ text: "发送消息", link: "/Lagrange.Core/Send/SendMessage" },
				{
					text: "发送消息结果",
					link: "/Lagrange.Core/Send/MessageResult",
				},
			],
		},
	],
}

export const oneBotSidebar = {
	text: "Lagrange.OneBot",
	base: "",
	items: [
		{
			text: "Lagrange.OneBot",
			link: "/Lagrange.OneBot/",
		},
		{
			text: "快速开始",
			items: [
				{
					text: "快速部署 & 配置",
					link: "/Lagrange.OneBot/Config/",
				},
				{
					text: "生成配置文件",
					link: "https://lagrangedev.github.io/lagrange-config-generator/",
				},
				{
					text: 'Apifox 上的 API 文档',
					link: 'https://lagrange-onebot.apifox.cn/',
				},
			],
		},
		{
			text: "API (Deprecated)",
			collapsed: true,
			items: [
				{
					text: "OneBot V11 标准 API",
					link: "/Lagrange.OneBot/API/OneBot/",
				},
				{
					text: "拓展 API",
					link: "/Lagrange.OneBot/API/Extend/",
					items: [
						{
							text: "获取收藏表情",
							link: "/Lagrange.OneBot/API/Extend/#获取收藏表情",
						},
						{
							text: "获取好友历史消息记录",
							link: "/Lagrange.OneBot/API/Extend/#获取好友历史消息记录",
						},
						{
							text: "获取群组历史消息记录",
							link: "/Lagrange.OneBot/API/Extend/#获取群组历史消息记录",
						},
						{
							text: "构造合并转发消息",
							link: "/Lagrange.OneBot/API/Extend/#构造合并转发消息",
						},
						{
							text: "发送合并转发 (群聊)",
							link: "/Lagrange.OneBot/API/Extend/#发送合并转发-群聊",
						},
						{
							text: "发送合并转发 (好友)",
							link: "/Lagrange.OneBot/API/Extend/#发送合并转发-好友",
						},
						{
							text: "上传群文件",
							link: "/Lagrange.OneBot/API/Extend/#上传群文件",
						},
						{
							text: "私聊发送文件",
							link: "/Lagrange.OneBot/API/Extend/#私聊发送文件",
						},
						{
							text: "获取群根目录文件列表",
							link: "/Lagrange.OneBot/API/Extend/#获取群根目录文件列表",
						},
						{
							text: "获取群子目录文件列表",
							link: "/Lagrange.OneBot/API/Extend/#获取群子目录文件列表",
						},
						{
							text: "获取群文件资源链接",
							link: "/Lagrange.OneBot/API/Extend/#获取群文件资源链接",
						},
						{
							text: "好友戳一戳",
							link: "/Lagrange.OneBot/API/Extend/#好友戳一戳",
						},
						{
							text: "群组戳一戳",
							link: "/Lagrange.OneBot/API/Extend/#群组戳一戳",
						},
						{
							text: "设置群组专属头衔",
							link: "/Lagrange.OneBot/API/Extend/#设置群组专属头衔",
						},
						{
							text: "设置群消息表情回应",
							link: "/Lagrange.OneBot/API/Extend/#设置群消息表情回应",
						},
					],
				},
				{
					text: "OneBot V11 标准消息链",
					link: "/Lagrange.OneBot/Segment/OneBot/",
				},
				{ text: "拓展消息链", link: "/Lagrange.OneBot/Segment/Extend/" },
			],
		},
	],
}

export const goSidebar = {
	text: "LagrangeGo",
	base: "",
	items: [
		{
			text: "LagrangeGo",
			link: "/LagrangeGo/",
		},
		{
			text: "Bot实例",
			items: [{ text: "创建bot实例", link: "/LagrangeGo/CreateBot/" }],
		},
		{
			text: "登录",
			items: [
				{ text: "登录", link: "/LagrangeGo/Login/" },
				{ text: "完整示例", link: "/LagrangeGo/Example/" },
			],
		},
		{
			text: "事件",
			items: [{ text: "概述", link: "/LagrangeGo/Event/" }],
		},
	],
}

export const pythonSidebar = {
	text: "lagrange-python",
	base: "",
	items: [
		{
			text: "lagrange-python",
			link: "/lagrange-python/"
		},
		{
			text: "登录",
			items: [
				{ text: "登录", link: "/lagrange-python/Login" }
			]
		},
		{
			text: "事件",
			items: [
				{ text: "事件", link: "/lagrange-python/Event" }
			]
		}
	]
}