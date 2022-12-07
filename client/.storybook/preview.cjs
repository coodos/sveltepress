import "../static/style.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	darkMode: {
		classTarget: "html",
		stylePreview: true
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
