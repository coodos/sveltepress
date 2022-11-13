<script lang="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Button from "../Button/Button.svelte";
    import Modal from "./Modal.svelte";

    let isOpen = true;
    function setIsOpen(state: boolean) {
        isOpen = state;
    }
</script>

<Meta title="Modal" component={Modal} />

<Template>
    <Button label="show modal" onClick={() => setIsOpen(true)} />
    <Modal {isOpen} {setIsOpen}>
        <h1 slot="header">Hi Soham</h1>
        <div class="modal-body">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                atque consectetur natus magni itaque totam, illum fugit
                veritatis neque. Ipsum hic cum voluptate quas voluptas possimus
                facere, quod ducimus illum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                ducimus veritatis doloremque laboriosam alias dignissimos eius
                cumque adipisci ut iusto, nam numquam laudantium error maxime?
                Libero facilis voluptates sequi sit?
            </p>
        </div>
        <Button label="Okay Bro 👍🏻" onClick={() => setIsOpen(false)} />
    </Modal>
</Template>

<Story name="Modal" />
