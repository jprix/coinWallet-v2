export async function get(request)  {
    console.log(request.url.searchParams.get('access_token'))
    const access_token = request.url.searchParams.get('access_token')
    console.log(access_token)
    let url = `https://api.coinbase.com/v2/accounts`
    const getUser = await fetch(url, {
        credentials: 'include',
        method: 'GET',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'CB-VERSION': '2015-04-08',
            'Authorization': 'Bearer ' + access_token
        }
    })
    const userProfile = await getUser.json();
    const result = userProfile.data
    return {
        status: 200,
        body: result
    }
}