<script>
    import { Route, Link } from 'svelte-routing';
    import accessDenied from '../routes/AccessDenied.svelte';
    import { userStore } from '../stores.js';

    export let path;
    export let component;

    $: isAuthenticated = $userStore;
</script>

{#if isAuthenticated}
    <Route path={path} component={component} />
{:else}
    <Route path={path} component={accessDenied} />
{/if}