import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	vite: {
		plugins: [llmstxt()],
	},
	title: "Ciara - deploy from your terminal in 4 minutes",
	description:
		"Ciara allows you to deploy any application in N servers in 4 minutes from your terminal, requiring no previous configuration on the Operational System.",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		siteTitle: "Ciara",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Docs", link: "/quickstart" },
			{ text: "About", link: "/about" },
		],
		editLink: {
			pattern: "https://github.com/andresribeiro/ciara-docs/edit/main/:path",
		},
		footer: {
			copyright:
				'Released under MIT License. © 2025 <a href="https://github.com/andresribeiro">André Ribeiro</a>',
		},
		search: {
			provider: "local",
		},
		sidebar: [
			{
				text: "Docs",
				items: [
					{ text: "Quickstart", link: "/quickstart" },
					{ text: "Creating a Server", link: "/creating-a-server" },
					{ text: "Deploying", link: "/deploying" },
					{ text: "Environment Variables", link: "/environment-variables" },
					{ text: "Proxy/HTTPS", link: "/proxy" },
					{ text: "Healthchecks", link: "/healthchecks" },
					{ text: "Firewall", link: "/firewall" },
					{
						text: "Databases/Plugins/Add-ons",
						link: "/databases-plugins-add-ons",
					},
					{ text: "Server Updates", link: "/server-updates" },
					{
						text: "Multiple Apps",
						link: "/multiple-apps",
					},
					{ text: "Adding New Servers", link: "/adding-new-servers" },
					{ text: "High Availability", link: "/high-availability" },
					{ text: "Security", link: "/security" },
					{ text: "LLMs", link: "/llms" },
					{ text: "About", link: "/about" },
				],
			},
		],
		socialLinks: [
			{ icon: "github", link: "https://github.com/andresribeiro/ciara" },
		],
	},
});
