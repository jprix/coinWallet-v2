let access_token
let id;



export async function get({url, params })  {
    console.log(params)
    id = params.depositId
    access_token = url.searchParams.get('access_token')

    let apiUrl = `https://api.coinbase.com/v2/accounts/aa2b0050-5cb7-5e1c-9020-e52fe190cd39/deposits/${id}`

    const getDepositById = await fetch(apiUrl, {
        credentials: 'include',
        method: 'GET',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'CB-VERSION': '2015-04-08',
            'Authorization': 'Bearer ' + access_token
        }
    })

    const depositById = await getDepositById.json();
    const result = await depositById.data
    return {
        status: 200,
        body: result
    }
}