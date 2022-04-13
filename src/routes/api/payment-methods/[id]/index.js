let access_token
let id;



export async function get({url, params })  {

    id = params.id
    console.log(url.searchParams.get('access_token'))
    access_token = url.searchParams.get('access_token')

    let apiUrl = `https://api.coinbase.com/v2/payment-methods/${id}`



    const getPaymentsById = await fetch(apiUrl, {
        credentials: 'include',
        method: 'GET',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'CB-VERSION': '2015-04-08',
            'Authorization': 'Bearer ' + access_token
        }
    })

    const paymentById = await getPaymentsById.json();
    const result = await paymentById.data
    //console.log(result.limits.buy[0].remaining.amount)
    return {
        status: 200,
        body: result
    }
}