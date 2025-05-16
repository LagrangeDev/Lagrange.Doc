import type { DefaultTheme, UserConfig } from "vitepress"
import { defineConfig } from "vitepress"
import taskLists from "markdown-it-task-lists"
import { theme } from "./theme"

export default defineConfig({
	title: "Lagrange 文档",
	description: "Lagrange's document",
	base: "/Lagrange.Doc/",
	lang: "zh-CN",
	markdown: {
		config: (md) => {
			md.use(taskLists)
		},
	},
	cleanUrls: true,
	lastUpdated: true,
	themeConfig: theme,
} as UserConfig<DefaultTheme.Config>)
