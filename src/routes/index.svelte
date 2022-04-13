<script>
    import { onMount } from 'svelte';
    import { session } from "$app/stores";
    import {Content} from "carbon-components-svelte";
    import Nav from '../Nav.svelte'
    import LoggedIn from "../UI/LoggedIn.svelte";
    import UserConnect from "../UI/UserConnect.svelte";
    import { userSession } from "../stores/userSession-store.js";

    console.log($session)
    let code

    console.log($userSession)

    onMount(
        async () => {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            code = params.code
            console.log(code)

            if(code) {
                try {
                    const tokenResponse = await fetch(`/api/oauth?code=${code}`, {
                    method: "POST",
                    }  )
                    const response = await tokenResponse.json()
                    console.log(response)
                    const accessToken = response.access_token


                    await updateSession(accessToken)

                } catch (e) {
                    return e
                }
            }
        })




    const updateSession = async (accessToken) => {
        console.log(accessToken)
        console.log('update triggered')
        let userSesh = {
            "isLoggedIn" : true,
            "access_token": accessToken
        }
        await userSession.update(user => {
            console.log(user)
            return userSesh
        })
    }


</script>

<svelte:head>
    <title>Coin Wallet</title>
</svelte:head>
<Nav/>
<Content>
    {#if $userSession.access_token}
        <LoggedIn/>
        {:else }
        <UserConnect />
        {/if}
</Content>



