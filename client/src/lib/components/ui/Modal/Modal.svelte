<style lang="scss">
	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		width: 100vw;
		height: 100vh;
		z-index: 5;
		background-color: var(--backdrop);
	}

	.modal {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		background-color: var(--body-background);
		border-radius: 5px;
		max-width: 90vw;
		min-width: 600px;

		.modal-header {
			padding-bottom: 10px;
			border-bottom: 1px solid var(--border);
		}

		.modal-content {
			position: relative;
		}

		.close-button {
			position: absolute;
			top: 0;
			right: 0;
			background-color: back;
		}
	}

	@media only screen and (max-width: 700px) {
		.modal {
			min-width: 80vw;
		}
	}
</style>

<script lang="ts">
	import { Card, Button } from "../";
	import { fade, fly } from "svelte/transition";

	export let isOpen = false;
	export let setIsOpen: (isOpen: boolean) => void;
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="backdrop" on:click="{() => setIsOpen(false)}" transition:fade></div>
	<div class="modal" transition:fly="{{ y: 50, duration: 400 }}">
		<Card>
			<div class="modal-content">
				<slot name="buttons">
					<div class="close-button">
						<Button label="x" size="circular" onClick="{() => setIsOpen(false)}" />
					</div>
				</slot>
				<div class="modal-header">
					<slot name="header" />
				</div>
				<slot />
			</div>
		</Card>
	</div>
{/if}
