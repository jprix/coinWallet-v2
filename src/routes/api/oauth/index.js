export async function post(request) {
  console.log(request.url.searchParams.get('code'));
  const code = request.url.searchParams.get('code');
  console.log(code);
  let payload = {
    grant_type: 'authorization_code',
    code: code,
    client_id: 'xx',
    client_secret: 'xxx',
    redirect_uri: 'http://localhost:3000/',
  };
  console.log(new URLSearchParams(payload));

  let url = `https://api.coinbase.com/oauth/token`;
  const res = await fetch(url, {
    credentials: 'include',
    method: 'POST',
    body: new URLSearchParams(payload),
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
  const token = await res.json();
  return {
    status: 200,
    body: token,
  };
}
