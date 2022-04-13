<script>
    import { onMount } from 'svelte'
    import { DataTable, Link } from "carbon-components-svelte";
    let userTransactions
    export let access_token;
    onMount( async () => {
        console.log(access_token)
        try {
            const getTransactions = await fetch(`/api/transactions?access_token=${access_token}`,{
                method: "GET"
            })
            const results = await getTransactions.json()
            userTransactions = results
        } catch (e) {
            return e
        }
    })
</script>
<DataTable
        size="medium"
        headers={[{ key: 'id', value: 'Id' }, { key: 'amount.currency', value: 'Currency' }, { key: 'status', value: 'Status' }, { key: 'created_at', value: 'Created At' }, { key: 'type', value: 'Buy' }]}
        rows={userTransactions}
>

        <span slot="cell" let:row let:cell>
        {#if cell.key === 'id' && cell.value}
        <Link href="/transactions/{cell.value}">
           {cell.value}
          </Link>
        {:else}{cell.value}{/if}
        </span>
</DataTable>