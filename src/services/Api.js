const URL_CURRENCIES = 'https://economia.awesomeapi.com.br/json/all';

export default async function getCurrencies() {
  const response = await fetch(URL_CURRENCIES);
  const result = await response.json();
  return result;
}
