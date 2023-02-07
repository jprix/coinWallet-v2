<script>
    import "carbon-components-svelte/css/white.css";
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu,
        SkipToContent,
    } from "carbon-components-svelte";

    let isSideNavOpen = false;




</script>

<style>

</style>

<Header  company="Coin Wallet" bind:isSideNavOpen href="/" >
    <div slot="skip-to-content" >
        <SkipToContent />
    </div>
    <HeaderNav style="background: #1554f0" >
        <HeaderNavMenu text="API version" class="a.bx--header__menu-item" style="background: #1554f0">
                <HeaderNavItem href="/" text="v2" on:click={'/'}/>
                <HeaderNavItem href="/v3/landing" text="v3" on:click={'/v3/landing'}/>


        </HeaderNavMenu>
    </HeaderNav>
</Header>




