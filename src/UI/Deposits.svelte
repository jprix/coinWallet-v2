<script>
    import { onMount } from 'svelte'
    import { DataTable, Link } from "carbon-components-svelte";
    let userDeposits
    export let access_token;
    onMount( async () => {
        try {
            const getDeposits = await fetch(`/api/deposits?access_token=${access_token}`,{
                method: "GET"
            })
            const results = await getDeposits.json()
            userDeposits = results
        } catch (e) {
            return e
        }
    })
</script>
<DataTable
        size="medium"
        headers={[{ key: 'id', value: 'Id' },  { key: 'status', value: 'Status' }, { key: 'created_at', value: 'Created At' }, { key: 'payment_method.id', value: 'Payment Id' },{ key: 'amount.amount', value: 'Amount'}]}
        rows={userDeposits}
>

        <span slot="cell" let:row let:cell>
        {#if cell.key === 'id' && cell.value}
        <Link href="/deposits/{cell.value}">
           {cell.value}
          </Link>
        {:else}{cell.value}{/if}
        </span>
</DataTable>