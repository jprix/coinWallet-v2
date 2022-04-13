<script>

    import { userSession } from "../stores/userSession-store.js";
    import Profile from "./Profile.svelte";
    import Balances from "../routes/accounts/Balances.svelte";
    import RecentOrders from "./RecentOrders.svelte";
    import PaymentMethods from "./PaymentMethods.svelte";
    import Deposits from "./Deposits.svelte";
    import Transactions from "./Transactions.svelte";




//console.log($userSession.access_token)
$: access_token = $userSession.access_token



</script>

<svelte:head>
    <title>Coin Auth</title>
</svelte:head>
<h4 style="color: #1554f0">Logged In</h4>
<!--<p>Your access token: {access_token}</p>-->
<main>
    <div class="pt-6 px-4">
        <!--            <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">-->
        <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
            <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold leading-none text-gray-900">Profile Information</h3>
                    <a href="/Orders" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View Profile</a>
                </div>
                <div class="flex flex-col mt-8">
                    <div class="overflow-x-auto rounded-lg">
                        <div class="align-middle inline-block min-w-full">
                            <Profile />
                    </div>
                </div>
            </div>
        </div>
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Recent Orders</h3>
                        <span class="text-base font-normal text-gray-500">This is a list of your last few Orders</span>
                    </div>
                    <div class="flex-shrink-0">
                        <a href="/Orders" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                        <a href="/trades/PlaceTrade" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">Place Trade</a>
                    </div>
                </div>
                <div class="flex flex-col mt-8">
                    <div class="overflow-x-auto rounded-lg">
                        <div class="align-middle inline-block min-w-full">
                            <RecentOrders access_token={access_token} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Recent Deposits</h3>
                        <span class="text-base font-normal text-gray-500">This is a list of the your deposits:</span>
                    </div>
                    <div class="flex-shrink-0">
                        <a href="/Orders" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                        <a href="/trades/PlaceTrade" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">Deposit Funds</a>
                    </div>
                </div>
                <div class="flex flex-col mt-8">
                    <div class="overflow-x-auto rounded-lg">
                        <div class="align-middle inline-block min-w-full">
                            <Deposits access_token={access_token} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Recent Transactions</h3>
                        <span class="text-base font-normal text-gray-500">This is a list of your transactions. GET /v2/accounts/:account_id/transactions</span>
                    </div>
                    <div class="flex-shrink-0">
                        <a href="/Orders" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                    </div>
                </div>
                <div class="flex flex-col mt-8">
                    <div class="overflow-x-auto rounded-lg">
                        <div class="align-middle inline-block min-w-full">
                            <Transactions access_token={access_token} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Payment Methods</h3>
                        <span class="text-base font-normal text-gray-500">This is a list your payment methods</span>
                    </div>
                    <div class="flex-shrink-0">
                        <a href="/Orders" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                    </div>
                </div>
                <div class="flex flex-col mt-8">
                    <div class="overflow-x-auto rounded-lg">
                        <div class="align-middle inline-block min-w-full">
                            <PaymentMethods access_token={access_token} />
                        </div>
                    </div>
                </div>
            </div>

    </div>
    </div>
</main>




<!--    <Deposits access_token={access_token}/>-->
    <Balances />




