<script>
    import { Router, Route } from 'svelte-routing';
    import ProtectedRoute from './components/ProtectedRoute.svelte';

    import Login from './routes/Login.svelte';
    import Dashboard from './routes/Dashboard.svelte';
import NotFound from './routes/NotFound.svelte';
</script>

<Router>
    <Route path="/" component={Login} />
    <ProtectedRoute path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
</Router>