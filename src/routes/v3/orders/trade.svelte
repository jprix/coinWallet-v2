<script>

    import {onMount} from "svelte";
    import "carbon-components-svelte/css/white.css";
    import Nav from '../../../Nav.svelte'
    import { Modal } from "carbon-components-svelte";
    import { goto } from '$app/navigation';
    import {createForm} from "svelte-forms-lib";
    import { Content, CodeSnippet} from "carbon-components-svelte";
    import {userSession} from "../../../stores/userSession-store.js";


    //export let walletId;
    let open = false;
    let orderBlock;
    // let id;
    let orderResponse;

    let ordersPreview;
    let previewPayload = {};
    let amount;
    let currency;
    let quote
    let results
    let limit;
    $: access_token = $userSession.access_token

    onMount(async () => {
        const orderLimit = await fetch(`/api/payment-methods/f02b80e3-6b72-5c94-8693-72432144ad53?access_token=${access_token}`, {
            method: "GET"})
        results = await orderLimit.json()
        limit = results.limits.buy[0].remaining.amount
        console.log(limit)
        orderBlock = false
    })
    const finalRequest = async () => {

        console.log(access_token)
                console.log('this is final request')

                const placeOrder = await fetch(`/api/buys?amount=${amount}&currency=${currency}&access_token=${access_token}`,{
            method: 'POST'
        })
        console.log(placeOrder)
        if(placeOrder){
                await goto("/")
        }


    }


    const orderPreview = async event => {
        try {

             const createPreview = await fetch(`/api/v3/balances/orders/trade?amount=${amount}&currency=${currency}&quote=${quote}&access_token=${access_token}`, {
            method: 'POST'
        })
             ordersPreview = await createPreview.json()
            if (ordersPreview) {
                console.log('this is order preview')

                console.log(ordersPreview.body)
                previewPayload = JSON.stringify(ordersPreview)
                console.log(previewPayload)
                if(previewPayload){
                    open = true
                }
            } else {
                event.preventDefault ();
                return false;
            }
            // await finalRequest(amount, currency)
        }
        catch (e) {
            return e
        }



    }

    const {form, handleChange, handleSubmit} = createForm({
        initialValues: {
            amount: "1",
            currency: "USD"
        },
        onSubmit: values => {
            amount = values.amount
            currency = values.currency
            //open = true
           orderPreview(amount, currency)


        }
    })
</script>
<Nav/>
<Content class="Layout">
    <h4 style="color: #1554f0">Trades</h4>
    <form on:submit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label for="type" class="block text-gray-700 text-sm font-bold mb-2"><b>Please fill out order form:</b></label><br>
        <span style="color: #ff0000">Your limit is: {limit}</span><br><br>
        <label for="amount">Amount</label><br>
        <input
                id="amount"
                name="amount"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                on:change={handleChange}
                bind:value={$form.amount}/>
        <label for="currency">Currency</label><br>
        <input
                id="currency"
                name="currency"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                on:change={handleChange}
                bind:value={$form.currency}/>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">Submit
        </button><br><br>
        <span>Adding to BTC addreess: <bold>f4f84a96-1e1a-5346-b594-a5c25cdf874e</bold></span>
        <br><br>
        {#if orderBlock}
            <CodeSnippet type="multi" wrapText="true" expanded="true">{orderResponse}</CodeSnippet>
        {/if}
    </form>
</Content>
<Modal class="font-bold text-xl mb-2"
       bind:open
       modalHeading="Are you sure you want to Place this order?"
       primaryButtonText="Confirm"
       secondaryButtonText="Cancel"
       on:click:button--secondary={() => (open = false)}
       on:open
       on:close
       on:submit={finalRequest}
>
    <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <div class="font-bold text-xl mb-2"> Order Preview Details:
            <p class="text-blue-600-700 text-base"> Amount:{amount}</p>
            <p class="text-blue-600-700 text-base"> Currency: {currency} </p>
            <p class="text-blue-600-700 text-base"> Limit: {limit}</p>
        </div>
        <CodeSnippet type="multi" wrapText="true" expanded="true">{previewPayload}</CodeSnippet>
    </div>

</Modal>













