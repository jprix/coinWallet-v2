<script>
    import { userSession } from "../stores/userSession-store";
    import { goto } from '$app/navigation';
    import  { Content } from "carbon-components-svelte";
    import {onMount} from "svelte";
    $: access_token = $userSession.access_token
    let userDetails;
    let userPayload;
    let name;
    let userId;
    let email;

    onMount(async ()=> {

            try {
                const getProfile = await fetch(`/api/profile?access_token=${access_token}`, {
                    method: "GET",
                }  )
                const response = await getProfile.json()
                userDetails = response.data
                //hh




            } catch (e) {
                return e
            }


        if(userDetails){
            userPayload = JSON.stringify(userDetails)
            name = userDetails.name
            email = userDetails.email
            userId = userDetails.id


            // $: console.log(avatar_url)
        } else {
            await goto('/');
        }
    })
    //let balance;

</script>
<style>

</style>


<Content class="Layout">

        <div class="flex flex-wrap place-items-center">
            <ul role="list" class="divide-y divide-gray-200">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="h-8 w-8 rounded-full" src="https://thumbs.dreamstime.com/b/online-marketing-portfolio-icon-element-premium-quality-graphic-design-signs-symbols-collection-websites-web-white-144857696.jpg" alt="portfolio image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-lg font-medium text-gray-900 truncate">
                            User Name
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        {name}
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
                            User Id
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        {userId}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="h-8 w-8 rounded-full" src="https://www.svgrepo.com/show/154049/id.svg" alt="Org Id image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-lg font-medium text-gray-900 truncate">
                            Email:
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        {email}
                    </div>
                </div>
            </li>
<!--            <li class="py-3 sm:py-4">-->
<!--                <div class="flex items-center space-x-4">-->
<!--                    <div class="flex-shrink-0">-->
<!--                        <img class="h-8 w-8 rounded-full" src="https://image.shutterstock.com/image-vector/hand-holding-dollar-icon-vector-600w-1933848302.jpg" alt="Org Id image">-->
<!--                    </div>-->
<!--                    <div class="flex-1 min-w-0">-->
<!--                        <p class="text-lg font-medium text-gray-900 truncate">-->
<!--                            Credit Amount:-->
<!--                        </p>-->
<!--                    </div>-->
<!--                    <div class="inline-flex items-center text-base font-semibold text-gray-900">-->
<!--                        <WalletCredit />-->
<!--                    </div>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="py-3 sm:py-4">-->
<!--                <div class="flex items-center space-x-4">-->
<!--                    <div class="flex-shrink-0">-->
<!--                        <img class="h-8 w-8 rounded-full" src="https://icon-library.com/images/commission-icon/commission-icon-11.jpg" alt="Commission image">-->
<!--                    </div>-->
<!--                    <div class="flex-1 min-w-0">-->
<!--                        <p class="text-lg font-medium text-gray-900 truncate">-->
<!--                            Commission Amount:-->
<!--                        </p>-->
<!--                    </div>-->
<!--                    <div class="inline-flex items-center text-base font-semibold text-gray-900">-->
<!--                        <PortfolioCommission />-->
<!--                    </div>-->
<!--                </div>-->
<!--            </li>-->
            </ul>
            <!-- card -->
<!--            <div class="shadow-lg rounded-xl  md:w-96 p-4 bg-white relative overflow-hidden">-->
<!--                <h4>User Details:</h4>-->

<!--                <div class="flex items-center border-b-2 mb-2 py-2">-->
<!--                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src={avatar_url}>-->

<!--                    <div class="pl-3" >-->
<!--                        <div class="font-medium text-blue-600">-->
<!--                            {name}-->
<!--                        </div>-->
<!--                        <div class="text-gray-600 text-sm">-->
<!--                            Senior Sales Engineer-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="w-full">-->
<!--                    <h4>User Object:</h4>-->
<!--                    <CodeSnippet type="multi" wrapText="true" expanded="true">-->
<!--                        {userPayload}-->
<!--                    </CodeSnippet>-->
<!--                </div>-->

            </div>
<!--        </div><br>-->






</Content>
<!--<input bind:value={$content} />-->