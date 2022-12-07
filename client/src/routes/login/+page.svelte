<script lang="ts">
	import { Card, TextInput, Button } from "$lib/components/ui";
	import { axios } from "$lib/utils/axios.utils";

	let email: string;
	let password: string;

	const onClick = async () => {
		const login = await axios.post("/users/login", { email, password });
		window.location.pathname = "/dashboard";
	};
</script>

<Card>
	<h1>Login</h1>
	<TextInput bind:value="{email}" placeholder="severus@hogwarts.edu" variant="email" />
	<TextInput bind:value="{password}" variant="password" placeholder="password" />
	<Button onClick="{onClick}" label="LOGIN" />
	<p>Not a user, <a href="/register">Register</a> instead</p>
</Card>
