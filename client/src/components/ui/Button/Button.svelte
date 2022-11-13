<script lang="ts">
    export let variant: "primary" | "secondary" = "primary";
    export let label: string;
    export let onClick: (...args: any[]) => void;
    export let size: "large" | "medium" | "small " = "medium";
</script>

<button
    class="button"
    class:alternative={variant === "secondary"}
    class:large={size === "large"}
    class:small={size === "small "}
    on:click={onClick}>{label}</button
>

<style>
    .button {
        background-color: var(--primary);
        padding: 8px 16px;
        color: var(--primary-alt);
        border: 0;
        transition: all 0.5s;
        border-radius: 5px;
        font-size: 1rem;
    }

    .button:hover {
        cursor: pointer;
        background-color: var(--primary-hover);
    }

    .alternative {
        background-color: var(--secondary);
        color: var(--secondary-alt);
    }

    .alternative:hover {
        background-color: var(--secondary-hover);
    }

    .small {
        font-size: 0.8rem;
        padding: 6px 12px;
    }

    .large {
        font-size: 1.2rem;
        padding: 10px 20px;
    }
</style>
