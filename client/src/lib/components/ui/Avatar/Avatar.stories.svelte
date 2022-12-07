<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Avatar from "./Avatar.svelte";
</script>

<Meta title="Avatar" component="{Avatar}" />

<Template let:args>
	<Avatar image="{'https://picsum.photos/300/300'}" {...args} />
</Template>

<Story name="Avatar" />
<Story name="Large" args="{{ variant: 'large' }}" />
<Story name="Small" args="{{ variant: 'small' }}" />
<Story name="With-Text" args="{{ variant: 'small', text: 'Dogecoin Investor' }}" />
