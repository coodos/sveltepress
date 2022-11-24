<script lang="ts">
    import { Card, TextInput, Button } from '$lib/components/ui'

    let email: string;
    let password: string;

    const onClick = () => {
        console.log(email, password)
    }
</script>

<Card>
    <h1>Register</h1>
    <TextInput bind:value={email} placeholder="severus@hogwarts.edu" variant="email" />
    <TextInput bind:value={password} variant="password" placeholder="password" />
    <Button onClick={onClick} label="REGISTER" />
    <p>Already a user, <a href="/login">Login</a> instead</p>
</Card>