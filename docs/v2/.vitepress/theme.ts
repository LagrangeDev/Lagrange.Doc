import { DefaultTheme } from "vitepress"
import {coreSidebar, nativeAPISidebar} from "./catalogue"
import {coreNav, nativeAPINav} from "./nav"

export const theme: DefaultTheme.Config = {
	search: {
		provider: "local",
	},
	nav: [
		{ text: "首页", link: "/" },
		{
			text: "版本",
			base: "",
			items: [
				{text: "v1", link: "https://lagrangedev.github.io/Lagrange.Doc/v1/"},
				{text: "v2 (你在这里)", link: "/"}
			]
		},
		coreNav,
		nativeAPINav,
		{
			text: "GitHub",
			items: [
				{
					text: "Lagrange.Core",
					link: "https://github.com/LagrangeDev/LagrangeV2",
				}
			],
		},
	] as DefaultTheme.NavItem[],
	sidebar: {
		"/Lagrange.Core/": coreSidebar,
		"/Lagrange.Core.NativeAPI/": nativeAPISidebar,
	} as DefaultTheme.SidebarMulti,
	socialLinks: [
		{ icon: "github", link: "https://github.com/LagrangeDev/Lagrange.Doc" },
	],
	editLink: {
		pattern: "https://github.com/LagrangeDev/Lagrange.Doc/edit/main/docs/:path",
		text: "在 GitHub 上帮助我们完善这个页面",
	},
	docFooter: {
		prev: "上一页",
		next: "下一页",
	},
	lastUpdated: {
		text: "最后更新",
	},
	outlineTitle: "目录",
	sidebarMenuLabel: "菜单",
	returnToTopLabel: "返回顶部",
	externalLinkIcon: true,
	darkModeSwitchLabel: "外观",
	lightModeSwitchTitle: "切换到浅色模式",
	darkModeSwitchTitle: "切换到深色模式",
}
