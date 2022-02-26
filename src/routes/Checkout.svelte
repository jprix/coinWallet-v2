<script>

    import {connected} from "svelte-web3";
    import {Content} from "carbon-components-svelte";
    import Nav from '../Nav.svelte'

    $: walletAddress = $connected ? window.localStorage.getItem('-walletlink:https://www.walletlink.org:Addresses') : 'wallet address not found';


</script>
<Nav />
<Content>
<h2>Wallet Checkout</h2>
<h3>{walletAddress}</h3>

    <div class="flex flex-wrap justify-center">
        <img
                src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
                alt=""
        />
    </div>
</Content>
