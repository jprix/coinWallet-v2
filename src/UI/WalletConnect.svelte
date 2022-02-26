<script>
    //import { onMount } from 'svelte';
    import {Button} from "carbon-components-svelte";
    //import { goto } from '$app/navigation';
    import { defaultEvmStores, web3} from 'svelte-web3'
    import {userSession} from "../stores/userSession-store.js";

    // export let isLoggedIn;
    let walletConnected;

    let version =  $web3.version

    const updateSession = async () => {
        console.log('update triggered')
        let userSesh = {
            "isLoggedIn" : true
        }
        await userSession.update(user => {
            console.log(user)
            return userSesh
        })
    }
    //const enable = () => defaultEvmStores.setProvider('https://:@mainnet.infura.io/v3/7bc8abe60fb941df8cfba6d3a4264dde')
    const enableBrowser = async ()  => {
                        //console.log(window.walletLinkExtension.isWalletLink)
            walletConnected =  window.walletLinkExtension.isConnected()
                    console.log(walletConnected)

            await defaultEvmStores.setProvider()
            await updateSession()

    }


    // onMount(
    //     async () => {
    //
    //         // await defaultEvmStores.setProvider('https://rpc.slock.it/goerli')
    //         // message = ''
    //     })
</script>


        <h4>{version}</h4>
        <Button on:click="{enableBrowser}">Connect to CB Wallet</Button>





