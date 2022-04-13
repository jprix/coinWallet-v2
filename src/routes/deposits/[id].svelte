
<script>
    import "carbon-components-svelte/css/white.css";
    import { Tile, CodeSnippet } from "carbon-components-svelte";
    import { page } from "$app/stores";

    import  { Content} from "carbon-components-svelte";
    import {onMount} from "svelte";
    import Nav from '../../Nav.svelte'
    import {userSession} from "../../stores/userSession-store.js";

    $: access_token = $userSession.access_token
    $: depositId = $page.params.id

    let depositIdDetails;
    let payload;
    onMount( async () => {

        try {
            console.log(depositId)
            depositIdDetails = await fetch(`/api/deposits/${depositId}?access_token=${access_token}`, {
                method: "GET"})
            console.log(depositIdDetails)

            const results = await depositIdDetails.json()
            console.log(depositIdDetails)
            payload = JSON.stringify(results)
        } catch (e) {
            return e
        }

    })


</script>
<Nav />
<Content class="Layout">

    <Tile style={{"width":"100px"}}>
        <h3>deposit Details:</h3>
    </Tile>

    <CodeSnippet type="multi" wrapText="true" expanded="true">
        {payload}
    </CodeSnippet>

</Content>
