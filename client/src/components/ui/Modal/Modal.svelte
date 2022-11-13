<script lang="ts">
    import { Card } from "../";

    export let isOpen: boolean = false;
    export let setIsOpen: (isOpen: boolean) => void;
</script>

{#if isOpen}
    <div class="backdrop" on:click={() => setIsOpen(false)} />
    <div class="modal">
        <Card>
            <slot name="buttons">
                <button class="close-button" on:click={() => setIsOpen(false)}
                    >x</button
                ></slot
            >
            <div class="modal-header">
                <slot name="header" />
            </div>
            <slot />
        </Card>
    </div>
{/if}
