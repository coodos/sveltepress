import { ButtonSizePresets, ButtonTypes } from "../../../types";
import Button from "./Button.svelte";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        variant: ButtonTypes.Primary | ButtonTypes.Secondary,
        label: { control: "text" },
        onClick: { action: "onClick" },
        size: ButtonSizePresets,
    },
};

const Template = (args) => ({
    Component: Button,
    props: args,
    on: {
        click: args.onClick,
    },
});

export const Primary = Template.bind({});
Primary.args = {
    label: "Yo",
    onClick: () => {},
};
