
export async function post(request)  {
    console.log(request.url.searchParams.get('code'))
    const code = request.url.searchParams.get('code')
    console.log(code)
    let payload = {
        "grant_type":"authorization_code",
        "code": code,
        "client_id": "749d445a2ef58ce55108bec312ed558faa39a4b9292c55d0baf6cb405e4ffdd4",
        "client_secret": "aeca05c79fe7f6eb6cccae409eac9429b3852eebbb32cc8885621d0cc5d9f1fd",
        "redirect_uri": "http://localhost:3000/"

    }
    console.log(new URLSearchParams(payload))

    let url = `https://api.coinbase.com/oauth/token`
    const res = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: new URLSearchParams(payload),
        withCredentials: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
    const token = await res.json();
    return {
        status: 200,
        body: token
    }
}