<!--https://api.coinbase.com/v2/payment-methods-->

<script>
    import { onMount } from 'svelte'
    import { DataTable, Link } from "carbon-components-svelte";
    let userPayments
    export let access_token;
    onMount( async () => {
        try {
            const getPayments = await fetch(`/api/payment-methods?access_token=${access_token}`,{
                method: "GET"
            })
            const results = await getPayments.json()
            userPayments = results
        } catch (e) {
            return e
        }
    })
</script>

<DataTable
        size="medium"
        headers={[{ key: 'id', value: 'Id' }, { key: 'currency', value: 'Currency' }, { key: 'name', value: 'Name' }, { key: 'fiat_account.resource_path', value: 'Resource Path' }, { key: 'amount.amount', value: 'Base Quantity' }]}
        rows={userPayments}
>

        <span slot="cell" let:row let:cell>
        {#if cell.key === 'id' && cell.value}
        <Link href="/payment-method/{cell.value}">
           {cell.value}
          </Link>
        {:else}{cell.value}{/if}
        </span>
</DataTable>