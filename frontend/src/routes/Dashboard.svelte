<script>
    import { Link } from 'svelte-routing';
    import { logout } from '../api/userCalls.js';
    import { getToken, getUserFromStorage } from '../utility/userUtility.js';

    const name = getUserFromStorage().firstName;
    const sname = getUserFromStorage().secondName;
</script>

<h1>👋 Welcome {name} {sname}</h1>
<h2>
    <Link to="/" on:click={logout}>Logout</Link>
</h2>