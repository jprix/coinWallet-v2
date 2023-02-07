let payload;
let access_token;
export async function post(request) {
  console.log(request.url.searchParams.get('amount'));
  const amount = request.url.searchParams.get('amount');

  console.log(request.url.searchParams.get('currency'));
  const currency = request.url.searchParams.get('currency');

  console.log(request.url.searchParams.get('access_token'));
  access_token = request.url.searchParams.get('access_token');
  console.log(request.url.searchParams.get('quote'));
  const quote = request.url.searchParams.get('quote');
  if (quote) {
    payload = {
      amount: amount,
      currency: currency,
      quote: true,
    };
  } else {
    payload = {
      amount: amount,
      currency: currency,
    };
  }

  let url =
    'https://api.coinbase.com/v2/accounts/f4f84a96-1e1a-5346-b594-a5c25cdf874e/buys';

  const createOrders = await fetch(url, {
    credentials: 'include',
    method: 'POST',
    withCredentials: true,
    body: new URLSearchParams(payload),
    headers: {
      Accept: 'application/json',
      'CB-VERSION': '2015-04-08',
      Authorization: 'Bearer ' + access_token,
    },
  });

  const placeOrder = await createOrders.json();
  const result = placeOrder.data;
  console.log(result);
  return {
    status: 201,
    body: result,
  };
}

export async function get(request) {
  access_token = request.url.searchParams.get('access_token');

  let url =
    'https://api.coinbase.com/v2/accounts/f4f84a96-1e1a-5346-b594-a5c25cdf874e/buys';

  const getOrders = await fetch(url, {
    credentials: 'include',
    method: 'GET',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'CB-VERSION': '2015-04-08',
      Authorization: 'Bearer ' + access_token,
    },
  });

  const fetchOrders = await getOrders.json();
  const result = fetchOrders.data;
  return {
    status: 200,
    body: result,
  };
}
