const preprocess = require("svelte-preprocess");

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(ts|svelte)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-svelte-csf",
		"storybook-dark-mode"
	],
	framework: "@storybook/svelte",
	core: {
		builder: "@storybook/builder-vite"
	},
	svelteOptions: {
		preprocess: preprocess({
			typescript: true
		})
	},
	features: {
		storyStoreV7: false
	}
};
