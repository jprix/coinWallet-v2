export async function get(request)  {
    console.log(request.url.searchParams.get('access_token'))
    const access_token = request.url.searchParams.get('access_token')
    let url = `https://api.coinbase.com/v2/accounts/aa2b0050-5cb7-5e1c-9020-e52fe190cd39/deposits`
    const getDeposits = await fetch(url, {
        credentials: 'include',
        method: 'GET',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'CB-VERSION': '2015-04-08',
            'Authorization': 'Bearer ' + access_token
        }
    })
    const userDeposits = await getDeposits.json();
    const result = userDeposits.data
    return {
        status: 200,
        body: result
    }
}