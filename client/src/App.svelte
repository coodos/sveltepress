<script lang="ts">
    import { Button } from "./components/ui/";
    import { ButtonSizePresets, ButtonTypes } from "./types";
</script>

<Button
    label="yo"
    variant={ButtonTypes.Secondary}
    size={ButtonSizePresets.Small}
    onClick={() => {}}
/>
<Button
    label="yo"
    variant={ButtonTypes.Secondary}
    size={ButtonSizePresets.Big}
    onClick={() => {}}
/>

<style>
</style>
