<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Button from "./Button.svelte";

	const args = {
		variant: "primary",
		size: "medium",
		label: "hi button",
		onClick: () => null
	};

	const secondaryArgs = {
		...args,
		variant: "secondary"
	};
</script>

<Meta title="Button" component={Button} />s

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Primary" {args} />

<Story name="Secondary" args={secondaryArgs} />
