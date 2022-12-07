<style lang="scss">
	.button {
		background-color: var(--primary);
		padding: 8px 16px;
		color: var(--primary-alt);
		border: 0;
		transition: all 0.5s;
		border-radius: 5px;
		font-size: 1rem;
		outline: none;

		&:hover {
			cursor: pointer;
			background-color: var(--primary-hover);
		}
	}

	.alternative {
		background-color: var(--secondary);
		color: var(--secondary-alt);

		&:hover {
			background-color: var(--secondary-hover);
		}
	}

	.small {
		font-size: 0.8rem;
		padding: 6px 12px;
	}

	.circular {
		padding: 4px;
		box-sizing: border-box;
		font-size: 0.8rem;
		width: 25px;
		height: 25px;
		border-radius: 20px;
		text-transform: uppercase;
	}

	.large {
		font-size: 1.2rem;
		padding: 10px 20px;
	}
</style>

<script lang="ts">
	export let variant: "primary" | "secondary" = "primary";
	export let label: string;
	export let onClick: (...args: any[]) => void;
	export let size: "large" | "medium" | "small" | "circular" = "medium";
</script>

<button
	class="button"
	class:alternative="{variant === 'secondary'}"
	class:large="{size === 'large'}"
	class:small="{size === 'small'}"
	class:circular="{size === 'circular'}"
	on:click="{onClick}">{label}</button
>
