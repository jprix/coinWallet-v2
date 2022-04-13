let access_token;

export async function get(request)  {
    access_token = request.url.searchParams.get('access_token')

    let url = 'https://api.coinbase.com/v2/accounts/aa2b0050-5cb7-5e1c-9020-e52fe190cd39/transactions'

    const getTransactions = await fetch(url, {
        credentials: 'include',
        method: 'GET',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'CB-VERSION': '2015-04-08',
            'Authorization': 'Bearer ' + access_token
        }
    })

    const fetchTransactions = await getTransactions.json();
    const result = fetchTransactions.data
    return {
        status: 200,
        body: result
    }
}