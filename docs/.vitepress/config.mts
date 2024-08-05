import type { DefaultTheme, UserConfig } from "vitepress"
import { defineConfig } from "vitepress"
import { theme } from "./theme"

export default defineConfig({
	title: "Lagrange 文档",
	description: "Lagrange's document",
	base: "/Lagrange.Doc/",
	lang: "zh-CN",
	cleanUrls: true,
	lastUpdated: true,
	themeConfig: theme,
} as UserConfig<DefaultTheme.Config>)
