export const getCoinsList = async () => {
  const API = 'https://api.exchangerate.host/symbols';
  const response = await fetch(API);
  return response.json();
};
