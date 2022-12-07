<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import TextInput from "./TextInput.svelte";

	let value: string;
</script>

<Meta title="TextInput" component="{TextInput}" />

<Template let:args>
	<TextInput bind:value="{value}" placeholder="severus@hogwarts.edu" {...args} />
</Template>

<Story name="TextInput" />
<Story name="TextArea" args="{{ variant: 'textarea' }}" />
