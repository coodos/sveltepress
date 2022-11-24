<script lang="ts">
    export let value: string;
    export let variant: "textarea" | "textbox" | "password" | "email" = "textbox";
    export let placeholder: string;
</script>

{#if variant === "textbox"}
    <input type="text" bind:value {placeholder} class="text-input" />
{:else if variant === "password"} 
    <input type="password" bind:value {placeholder} class="text-input" />
{:else if variant === "email"} 
    <input type="email" bind:value {placeholder} class="text-input" />
{:else if variant === "textarea"}
	<textarea bind:value {placeholder} rows="10" class="text-input-block" />
{/if}

<style>
	.text-input,
	.text-input-block {
		padding: 8px 16px;
		outline: none;
		font-size: 1rem;
		color: var(--header-text);
		border: 1.5px solid var(--border);
		border-radius: 5px;
		font-family: var(--body-fonmt);
		width: 100%;
		box-sizing: border-box;
		resize: none;
		transition: all 400ms;
	}

	.text-input:focus,
	.text-input-block:focus {
		border: 1.5px solid var(--highlight);
	}

	.text-input:hover,
	.text-input-block:hover {
		border: 1.5px solid var(--highlight-hover);
	}
</style>
