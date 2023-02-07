let access_token;

export async function get({ url }) {
  access_token = url.searchParams.get('access_token');

  let apiUrl = `https://api.coinbase.com/v3/brokerage/products`;

  const getProducts = await fetch(apiUrl, {
    credentials: 'include',
    method: 'GET',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'CB-VERSION': '2015-04-08',
      Authorization: 'Bearer ' + access_token,
    },
  });

  const products = await getProducts.json();
  const result = await products;
  console.log(result);
  return {
    status: 200,
    body: result,
  };
}
