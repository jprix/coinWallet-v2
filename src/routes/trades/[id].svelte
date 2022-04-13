
<script>
    import "carbon-components-svelte/css/white.css";
    import { Tile, CodeSnippet } from "carbon-components-svelte";
    import { page } from "$app/stores";

    import  { Content} from "carbon-components-svelte";
    import {onMount} from "svelte";
    import Nav from '../../Nav.svelte'
    import {userSession} from "../../stores/userSession-store.js";

    $: access_token = $userSession.access_token
    $: orderId = $page.params.id

    let orderIdDetails;
    let payload;
    onMount( async () => {

        try {
            console.log(orderId)
            orderIdDetails = await fetch(`/api/buys/${orderId}?access_token=${access_token}`, {
                method: "GET"})
            console.log(orderIdDetails)

            const results = await orderIdDetails.json()
            console.log(orderIdDetails)
            payload = JSON.stringify(results)
        } catch (e) {
            return e
        }

    })


</script>
<Nav />
<Content class="Layout">

    <Tile style={{"width":"100px"}}>
        <h3>Order Details:</h3>
    </Tile>

    <CodeSnippet type="multi" wrapText="true" expanded="true">
        {payload}
    </CodeSnippet>

</Content>
