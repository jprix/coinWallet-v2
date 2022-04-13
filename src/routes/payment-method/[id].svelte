
<script>
    import "carbon-components-svelte/css/white.css";
    import { Tile, CodeSnippet } from "carbon-components-svelte";

    import  { Content} from "carbon-components-svelte";
    import {onMount} from "svelte";
    import Nav from '../../Nav.svelte'
    import {userSession} from "../../stores/userSession-store.js";

    $: access_token = $userSession.access_token


    let paymentIdDetails;
    let payload;

    onMount( async () => {
        try {
            paymentIdDetails = await fetch(`/api/payment-methods/f02b80e3-6b72-5c94-8693-72432144ad53?access_token=${access_token}`, {
                method: "GET"})
            console.log(paymentIdDetails)

           const results = await paymentIdDetails.json()
            console.log(paymentIdDetails)
            payload = JSON.stringify(results)
        } catch (e) {
            return e
        }

    })


</script>
<Nav />
<Content class="Layout">

    <Tile style={{"width":"100px"}}>
        <h3>payment Details:</h3>
    </Tile>

    <CodeSnippet type="multi" wrapText="true" expanded="true">
        {payload}
    </CodeSnippet>

</Content>
