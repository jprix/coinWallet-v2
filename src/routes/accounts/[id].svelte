
<script>
    import "carbon-components-svelte/css/white.css";
    import { Tile, CodeSnippet } from "carbon-components-svelte";
    import { page } from "$app/stores";

    import  { Content} from "carbon-components-svelte";
    import {onMount} from "svelte";
    import Nav from '../../Nav.svelte'
    import {userSession} from "../../stores/userSession-store.js";

    $: access_token = $userSession.access_token
    $: accountId = $page.params.id

    let accountIdDetails;
    let payload;
    onMount( async () => {

        try {
            //console.log(orderId)
            accountIdDetails = await fetch(`/api/balances/${accountId}?access_token=${access_token}`, {
                method: "GET"})
            console.log(accountIdDetails)

            const results = await accountIdDetails.json()
            payload = JSON.stringify(results)
        } catch (e) {
            return e
        }

    })


</script>
<Nav />
<Content class="Layout">

    <Tile style={{"width":"100px"}}>
        <h3>Account Details for: {accountId}</h3>
    </Tile>

    <CodeSnippet type="multi" wrapText="true" expanded="true">
        {payload}
    </CodeSnippet>

</Content>
