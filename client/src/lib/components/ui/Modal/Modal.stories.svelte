<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '../Button/Button.svelte';
	import Modal from './Modal.svelte';

	let isOpen = false;
	function setIsOpen(state: boolean) {
		isOpen = state;
	}
</script>

<Meta title="Modal" component={Modal} />

<Template>
	<Button label="show modal" onClick={() => setIsOpen(true)} />
	<Modal {isOpen} {setIsOpen}>
		<h1 slot="header">The Final Solution</h1>
		<div class="modal-body">
			<p>
				Ambition is very important for one's career for without ambition one can't obtain the
				necessary motivation for one to achieve their goals. However it is very important that one
				does not get cancelled on twitter in pursuit of greatness for without musky boi's blessing
				what are we but shit-brained neanderthals, thus it is very important to hide your ambitions,
				never let them know your next move, accept the sigma grindest.
			</p>
		</div>
		<Button label="Okay Bro 👍🏻" onClick={() => setIsOpen(false)} />
	</Modal>
</Template>

<Story name="Modal" />
