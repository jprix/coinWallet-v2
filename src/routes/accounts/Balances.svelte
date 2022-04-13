
<script>
    import { onMount } from 'svelte'
    import Nav from "../../Nav.svelte";
    import {userSession} from "../../stores/userSession-store.js";
    import _ from 'lodash-es';
    import {Content, Link} from "carbon-components-svelte";




    let totalBalance;
    let dollar = 'loading...';
    // let keys = { symbol: 'id'};
    $: access_token = $userSession.access_token
    let userBalances =[];





    onMount( async () => {
        try {
            const getBalances = await fetch(`/api/balances?access_token=${access_token}&limit=6`,{
                method: "GET"
        })
            const results = await getBalances.json()
            userBalances = results
    } catch (e) {
        return e
    }
        _.each(userBalances, item => item.native_balance.amount = parseInt(item.native_balance.amount, 13));


        totalBalance = _.sumBy(userBalances, item => {
            return item.native_balance.amount;
        });


        const formatMoney = (totalBalance) => {
            return totalBalance.toLocaleString('en-US');
        }

        dollar =  await formatMoney(totalBalance)
        console.log('this is the dollar ' + dollar)
    })



</script>

<Nav/>
<Content>
<div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
    <div class="mb-4 flex items-center justify-between">
        <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Portfolio Balance:  ${dollar}</h3>
            <span class="text-base font-normal text-gray-500">This is a list of your Retail balances</span>
        </div>
<!--        <div class="flex-shrink-0">-->
<!--            <a href="/Orders" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>-->
<!--        </div>-->

    </div>
    <div class="flex flex-col mt-8">
        <div class="overflow-x-auto rounded-lg">
            <div class="align-middle inline-block min-w-full">
                <div class="shadow overflow-hidden sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Symbol
                            </th>
                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Id
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-white">
                        {#each userBalances as r}
                            <tr>
                                <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    <span class="font-semibold">{r.name}</span>
                                </td>
                                <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    {r.native_balance.amount}
                                </td>
                                <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    <Link href="/accounts/{r.id}">
                                        {r.id}
                                    </Link>
                                </td>
                            </tr>
                        {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</Content>
<!--<DataTable-->
<!--        size="medium"-->
<!--        headers={[{ key: 'id', value: 'Id' }, { key: 'amount.currency', value: 'Currency' }, { key: 'status', value: 'Status' }, { key: 'created_at', value: 'Created At' }, { key: 'amount.amount', value: 'Base Quantity' }]}-->
<!--        rows={userOrders}-->
<!--&gt;-->

<!--        <span slot="cell" let:row let:cell>-->
<!--        {#if cell.key === 'id' && cell.value}-->
<!--        <Link href="/trades/{cell.value}">-->
<!--           {cell.value}-->
<!--          </Link>-->
<!--        {:else}{cell.value}{/if}-->
<!--        </span>-->
<!--</DataTable>-->




