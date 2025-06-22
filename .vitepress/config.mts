import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Ciara - deploy from your terminal in 4 minutes",
	description:
		"Ciara allows you to deploy any application in N servers in 4 minutes from your terminal, requiring no previous configuration on the Operational System.",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		siteTitle: "",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Docs", link: "/quickstart" },
		],

		sidebar: [
			{
				text: "Docs",
				items: [
					{ text: "Quickstart", link: "/quickstart" },
					{ text: "Deploying", link: "/deploying" },
					{ text: "Creating a server", link: "/creating-a-server" },
					{ text: "Adding new servers", link: "/adding-new-servers" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/andresribeiro/ciara" },
		],
	},
});
