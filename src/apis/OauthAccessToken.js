export const getOauthToken = async (code) => {
    console.log(code)


    let payload = {
        "grant_type":"authorization_code",
        "code": code,
        "client_id": "Your CLIENT ID",
        "client_secret": "YOUR SECRET",
        "redirect_uri": "http://localhost:3000/"

}

    let url = `http://localhost:3000/oauthAPI/token`
    try {
        const fetchOauthToken = await fetch(url, {
            credentials: 'include',
            method: 'POST',
            body: new URLSearchParams(payload),
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }

        })
        let tokenResponse = await fetchOauthToken.json()
        console.log('this is the token response ' , tokenResponse)
        if (tokenResponse) {

            return tokenResponse
        }
        console.log('token sent')
    } catch (e) {
        console.log('this was the token error', e)
    }
}
