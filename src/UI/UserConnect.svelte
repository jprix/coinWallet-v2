<script>
    //import { onMount } from 'svelte';
    import {Button} from "carbon-components-svelte";
    // import {CBPayButton} from "cbpay-sdk"
    //import { goto } from '$app/navigation';
    //import {userSession} from "../stores/userSession-store.js";
    import {onMount} from "svelte";
    import { initOnramp } from "cbpay-sdk";

    // export let isLoggedIn;
   // let userConnected;
    let scope;
    let state = Math.floor(Date.now() / 1000)
    let setIsReady = false;


    const scopes = [
        'wallet:accounts:read',
        'wallet:accounts:update',
        'wallet:accounts:create',
        'wallet:addresses:read',
        'wallet:addresses:create',
        'wallet:buys:read',
        'wallet:buys:create',
        'wallet:deposits:read',
        'wallet:deposits:create',
        'wallet:deposits:read',
        'wallet:notifications:read',
        'wallet:payment-methods:read',
        'wallet:payment-methods:limits',
        'wallet:sells:read',
        'wallet:sells:create',
        'wallet:transactions:read',
        'wallet:transactions:request',
        'wallet:user:email',
        'wallet:withdrawals:read',
        'wallet:transactions:send'
    ]
    scope = scopes.join(' ')

    const initiateOauth = async ()  => {
            window.location.href = `https://www.coinbase.com/oauth/authorize?client_id=749d445a2ef58ce55108bec312ed558faa39a4b9292c55d0baf6cb405e4ffdd4&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=${scope}&state=${state}&account=all&meta[account]=all&meta[send_limit_amount]=1.00&meta[send_limit_currency]=USD`

    }
    // const initiateCBPay = async ()  => {
    //        const client = initOnramp({
    //                appId: '...',
    //                widgetParameters: {
    //                        destinationWallets: [
    //                                {
    //                                        address: '0x1A2C69...',
    //                                        blockchains: ['ETH', 'AVAX'],
    //                                }],
    //                },
    //                        onReady: () => {
    //                                setIsReady =true;
    //                        },
    //                        onSuccess: () => {
    //                                console.log('success');
    //                        },
    //                        onExit: () => {
    //                                console.log('exit');
    //                        },
    //                        onEvent: (event)=> {
    //                             console.log(event)
    //                        }
    //        }
    //
    //
    //        )
    //         console.log(client)
    //
    //
    // }

    onMount(() => {
                if (window.opener) {
                        console.log('window opener ', window.opener)
                }
        })

</script>
        <h4>Sign In with Oauth</h4>
        <Button on:click="{initiateOauth}">Connect CB Identity</Button>
<!--        <Button on:click="{initiateCBPay}">Pay With Coinbase</Button>-->

<!--<CBPayButton on:click={initiateCBPay()}> </CBPayButton>-->

