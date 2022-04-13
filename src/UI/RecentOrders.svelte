<script>
    import { onMount } from 'svelte'
    import { DataTable, Link } from "carbon-components-svelte";
    let userOrders
    export let access_token;
    onMount( async () => {
        console.log(access_token)
        try {
            const getOrders = await fetch(`/api/buys?access_token=${access_token}`,{
                method: "GET"
            })
            const results = await getOrders.json()
            userOrders = results
        } catch (e) {
            return e
        }
    })
</script>
<DataTable
        size="medium"
        headers={[{ key: 'id', value: 'Id' }, { key: 'amount.currency', value: 'Currency' }, { key: 'status', value: 'Status' }, { key: 'created_at', value: 'Created At' }, { key: 'amount.amount', value: 'Base Quantity' }]}
        rows={userOrders}
>

        <span slot="cell" let:row let:cell>
        {#if cell.key === 'id' && cell.value}
        <Link href="/trades/{cell.value}">
           {cell.value}
          </Link>
        {:else}{cell.value}{/if}
        </span>
</DataTable>