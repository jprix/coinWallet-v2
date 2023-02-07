let access_token;
let id;

export async function get({ url, params }) {
  id = params.accountId;
  access_token = url.searchParams.get('access_token');

  let apiUrl = `https://api.coinbase.com/v3/brokerage/accounts/${id}`;

  const getAccountById = await fetch(apiUrl, {
    credentials: 'include',
    method: 'GET',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'CB-VERSION': '2015-04-08',
      Authorization: 'Bearer ' + access_token,
    },
  });

  const accountById = await getAccountById.json();
  console.log(accountById);
  const result = await accountById;
  return {
    status: 200,
    body: result,
  };
}
