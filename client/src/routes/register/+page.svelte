<script lang="ts">
	import { Card, TextInput, Button } from "$lib/components/ui";
	import { axios } from "$lib/utils/axios.utils";

	let email: string;
	let password: string;

	const onClick = async () => {
		const { data } = await axios.post("/users", { email, password });
		window.location.pathname = "/login";
	};
</script>

<Card>
	<h1>Register</h1>
	<TextInput bind:value="{email}" placeholder="severus@hogwarts.edu" variant="email" />
	<TextInput bind:value="{password}" variant="password" placeholder="password" />
	<Button onClick="{onClick}" label="REGISTER" />
	<p>Already a user, <a href="/login">Login</a> instead</p>
</Card>
