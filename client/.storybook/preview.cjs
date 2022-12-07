import "../static/style.css";
import { themes } from "@storybook/theming";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	darkmode: {
		darkClass: "dark",
		classTarget: "body",
		current: "light",
		dark: { ...themes.dark, appBg: "black" }
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
