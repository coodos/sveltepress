<script lang="ts">
	import { Button } from "$lib/components/ui";
	import { redirect } from "@sveltejs/kit";

	const goToLogin = () => {
		window.location.pathname = "/login";
	};
</script>

<h1>Welcome to SveltePress!</h1>

<Button label="login" variant="primary" onClick="{goToLogin}" />
