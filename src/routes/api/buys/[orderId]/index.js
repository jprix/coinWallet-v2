let access_token
let id;



export async function get({url, params })  {
    console.log(params)
    id = params.orderId
    access_token = url.searchParams.get('access_token')

    let apiUrl = `https://api.coinbase.com/v2/accounts/f4f84a96-1e1a-5346-b594-a5c25cdf874e/buys/${id}`

    const getOrderById = await fetch(apiUrl, {
        credentials: 'include',
        method: 'GET',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'CB-VERSION': '2015-04-08',
            'Authorization': 'Bearer ' + access_token
        }
    })

    const orderById = await getOrderById.json();
    const result = await orderById.data
    return {
        status: 200,
        body: result
    }
}