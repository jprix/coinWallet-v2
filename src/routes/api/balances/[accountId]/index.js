let access_token
let id;



export async function get({url, params })  {
    id = params.accountId
    access_token = url.searchParams.get('access_token')

    let apiUrl = `https://api.coinbase.com/v2/accounts/${id}`

    const getAccountById = await fetch(apiUrl, {
        credentials: 'include',
        method: 'GET',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'CB-VERSION': '2015-04-08',
            'Authorization': 'Bearer ' + access_token
        }
    })

    const accountById = await getAccountById.json();
    const result = await accountById.data
    return {
        status: 200,
        body: result
    }
}