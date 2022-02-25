<script>
    import "carbon-components-svelte/css/white.css";
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu,
        // SideNav,
        // SideNavItems,
        // SideNavMenu,
        // SideNavMenuItem,
        // SideNavLink,
        // SideNavDivider,
        SkipToContent,
        // Content,
        // Grid,
        // Row,
        // Column,
    } from "carbon-components-svelte";

    let isSideNavOpen = false;

    // /console.log('this is the isLoggedIn', isLoggedIn)



</script>

<style>

</style>

<Header  company="Coin Wallet" bind:isSideNavOpen href="/" >
    <div slot="skip-to-content" >
        <SkipToContent />
    </div>
    <HeaderNav style="background: #1554f0" >
        <HeaderNavMenu text="..." class="a.bx--header__menu-item" style="background: #1554f0">
                <HeaderNavItem href="/" text="Home" on:click={'/'}/>
<!--                <HeaderNavItem href="/Settings" text="Settings" on:click={(event) => routeTo(event, '/Settings')}/>-->
<!--         -->
<!--                <HeaderNavItem href="/Login" text="Login" />-->

        </HeaderNavMenu>
        <!--        <Search placeholder="Search..." value="Search Coin" style="alignment: right"/>-->
    </HeaderNav>
</Header>

<!--<SideNav bind:isOpen={isSideNavOpen} style="width: 10rem;"  >-->
<!--    <SideNavItems class="bg-white border-b border-gray-200 fixed z-30 w-full">-->
<!--        &lt;!&ndash;        <SideNavLink text="Account" href="/Account" on:click={(event) => routeTo(event, '/Account')} />&ndash;&gt;-->
<!--        <SideNavDivider />-->
<!--&lt;!&ndash;        <SideNavLink text="Products" href="/Products" on:click={(event) => routeTo(event, '/Products')} />&ndash;&gt;-->
<!--        <SideNavDivider />-->
<!--&lt;!&ndash;        <SideNavLink text="Users" href="/Users" on:click={(event) => routeTo(event, '/Users')}  />&ndash;&gt;-->
<!--        <SideNavDivider />-->
<!--        &lt;!&ndash;        <SideNavLink text="Orders" href="/Orders" />&ndash;&gt;-->
<!--        <SideNavMenu text="Orders">-->
<!--&lt;!&ndash;            <SideNavMenuItem href="/Orders" text="Orders" on:click={(event) => routeTo(event, '/Orders')} />&ndash;&gt;-->
<!--&lt;!&ndash;            <SideNavMenuItem href="/Orders/Feed" text="Order Feed" on:click={(event) => routeTo(event, '/Orders/Feed')}  />&ndash;&gt;-->
<!--&lt;!&ndash;            <SideNavMenuItem href="/Orders/Create" text="Place Order"  on:click={(event) => routeTo(event, '/Orders/Create')} />&ndash;&gt;-->
<!--        </SideNavMenu>-->
<!--        <SideNavDivider />-->
<!--        <SideNavMenu text="Transactions">-->
<!--&lt;!&ndash;            <SideNavMenuItem href="/Transactions" text="Transactions" on:click={(event) => routeTo(event, '/Transactions')} />&ndash;&gt;-->
<!--&lt;!&ndash;            <SideNavMenuItem href="/KYTransactions" text="KYTransactions"  on:click={(event) => routeTo(event, '/KYTransactions')} />&ndash;&gt;-->
<!--        </SideNavMenu>-->
<!--        <SideNavDivider />-->

<!--    </SideNavItems>-->
<!--</SideNav>-->


