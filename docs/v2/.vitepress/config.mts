import type { DefaultTheme, UserConfig } from "vitepress"
import { defineConfig } from "vitepress"
import taskLists from "markdown-it-task-lists"
import { theme } from "./theme"

export default defineConfig({
	title: "Lagrange 文档 v2",
	description: "Lagrange v2's document",
	base: "/Lagrange.Doc/v2/",
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
