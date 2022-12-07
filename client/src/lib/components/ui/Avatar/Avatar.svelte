<style lang="scss">
	.avatar {
		display: flex;
		width: fit-content;
		justify-content: center;
		align-items: center;
	}

	.accompanying-text {
		font-family: var(--header-font);
		color: var(--header-text);
		font-weight: 500;
		padding-left: 10px;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.avatar-img {
		height: 60px;
		width: 60px;
		border-radius: 30px;
		object-fit: cover;
	}

	.large {
		height: 90px;
		width: 90px;
		border-radius: 45px;
	}

	.small {
		height: 45px;
		width: 45px;
		border-radius: 22.5px;
	}
</style>

<script lang="ts">
	export let image: string;
	export let variant: "large" | "medium" | "small" = "medium";
	export let text: string | null = null;
	export let onClick: (...args: any[]) => any = () => null;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="avatar" on:click="{onClick}">
	<img
		src="{image}"
		alt="user avatar"
		class="avatar-img"
		class:large="{variant === 'large'}"
		class:small="{variant === 'small'}"
	/>
	{#if text}
		<div class="accompanying-text">{text}</div>
	{/if}
</div>
