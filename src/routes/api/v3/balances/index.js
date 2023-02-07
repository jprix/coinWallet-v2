export async function get(request) {
  console.log(request.url.searchParams.get('access_token'));
  const access_token = request.url.searchParams.get('access_token');
  console.log('v3 hit ', access_token);
  let url = `https://api.coinbase.com/v3/brokerage/accounts`;
  const getAccounts = await fetch(url, {
    credentials: 'include',
    method: 'GET',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'CB-VERSION': '2015-04-08',
      Authorization: 'Bearer ' + access_token,
    },
  });
  console.log(getAccounts);
  const accountList = await getAccounts.json();
  console.log(accountList);
  const result = accountList.accounts;
  return {
    status: 200,
    body: result,
  };
}
