<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import { ButtonSizePresets, ButtonTypes } from "../../../types";
    import Button from "./Button.svelte";

    const args = {
        variant: ButtonTypes.Primary,
        size: ButtonSizePresets.Medium,
        label: "hi button",
        onClick: () => {},
    };

    const secondaryArgs = {
        ...args,
        variant: ButtonTypes.Secondary,
    };
</script>

<Meta title="Button" component={Button} />

<Template let:args>
    <Button {...args} />
</Template>

<Story name="Primary" {args} />

<Story name="Secondary" args={secondaryArgs} />
