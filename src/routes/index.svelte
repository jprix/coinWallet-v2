<script>
    import { onMount } from 'svelte';
    import { session } from "$app/stores";
    import {Content} from "carbon-components-svelte";
    // import {connected, defaultEvmStores, web3} from 'svelte-web3'

    import Nav from '../Nav.svelte'
    import LoggedIn from "../UI/LoggedIn.svelte";
    import WalletConnect from "../UI/WalletConnect.svelte";
    import { userSession } from "../stores/userSession-store.js";
    let authenticated;

    console.log($session)

    onMount(
        async () => {

                     // await defaultEvmStores.setProvider('https://rpc.slock.it/goerli')

        })

    authenticated = $userSession.isLoggedIn
    console.log(authenticated)

</script>

<svelte:head>
    <title>Coin Wallet</title>
</svelte:head>
<Nav/>
<Content>
    {#if !authenticated}
        <WalletConnect />
    {/if}
    {#if authenticated}
        <LoggedIn/>
    {/if}


</Content>



