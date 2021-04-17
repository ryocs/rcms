<script>

import { navigate } from "svelte-routing";

</script>
<style lang="scss">
    .container404 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, $color-primary, $color-primary 50%, white 50%);

        h1 {
            font-size: 15em;
            margin: 0;
            text-shadow: 10px 10px 0px $color-primary;
            @media (max-width: $width-sm) {
                font-size: 10em;
            }
        }
    }
</style>


<div class="container404">
    <h1>404</h1>
    <h2>Not Found</h2>
</div>