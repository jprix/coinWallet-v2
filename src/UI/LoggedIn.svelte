<script>

    import {web3, selectedAccount, connected, chainId, chainData, defaultEvmStores} from 'svelte-web3'
import {onMount} from "svelte";
import {CodeSnippet} from "carbon-components-svelte";

//import Nav from '../Nav.svelte'
$: name = $connected ? window.localStorage.getItem('-walletlink:https://www.walletlink.org:walletUsername') : '...';
$: checkAccount = $selectedAccount || '0x0000000000000000000000000000000000000000'
$: balance = $connected ? $web3.eth.getBalance(checkAccount) : ''

console.log(name)


     defaultEvmStores.setProvider()

</script>

<svelte:head>
    <title>Coin Wallet</title>
</svelte:head>





        <!--{#await name}-->
        <!--    <h3>waiting...</h3>-->
        <!--{:then {name}}-->
        <!--    <h3 class="text-3xl font-bold underline">Hi, {name}</h3>-->
        <!--{/await}-->
{#if connected}

        <div class="pt-6 px-4">
            <p>Hi, {name}</p>
            <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                <h3 class="text-xl font-bold leading-none text-gray-900">Chain Info</h3>
            </div>
            <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="h-8 w-8 rounded-full" src="https://thumbs.dreamstime.com/b/online-marketing-portfolio-icon-element-premium-quality-graphic-design-signs-symbols-collection-websites-web-white-144857696.jpg" alt="portfolio image">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-lg font-medium text-gray-900 truncate">
                                    Wallet Address
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                {checkAccount}
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="h-8 w-8 rounded-full" src="https://thumbs.dreamstime.com/b/online-marketing-portfolio-icon-element-premium-quality-graphic-design-signs-symbols-collection-websites-web-white-144857696.jpg" alt="portfolio image">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-lg font-medium text-gray-900 truncate">
                                    Connected Chain Id:
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                 {$chainId}
                            </div>
                        </div>
                    </li>

                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="h-8 w-8 rounded-full" src="https://cdn4.iconfinder.com/data/icons/glyph-ui-icons-part-1/22/company-512.png" alt="Entity image">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-lg font-medium text-gray-900 truncate">
                                    Ethereum Mainnet Balance:
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                {#await balance}
                                   <span>waiting...</span>
                               {:then value}
                                    <span>{value}</span>
                                {/await}  {$chainData.nativeCurrency.symbol}
                            </div>
                        </div>
                    </li>
                </ul>
                <CodeSnippet type="multi" wrapText="true" expanded="true">chainData = {JSON.stringify($chainData)} </CodeSnippet>
            </div>
        </div>
    {/if}




    <!--{#if false && $selectedAccount}-->
    <!--    <p><button on:click="{sendTip}">send 0.01 {$chainData.nativeCurrency.symbol} tip to {tipAddress} (author)</button></p>-->
    <!--{/if}-->




