let access_token;
export async function get(request)  {

    console.log(request.url.searchParams.get('access_token'))
    access_token = request.url.searchParams.get('access_token')


    let url = 'https://api.coinbase.com/v2/payment-methods'


    const getPayments = await fetch(url, {
        credentials: 'include',
        method: 'GET',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'CB-VERSION': '2015-04-08',
            'Authorization': 'Bearer ' + access_token
        }
    })

    const placePayments = await getPayments.json();
    const result = placePayments.data
    return {
        status: 200,
        body: result
    }
}

