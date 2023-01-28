interface CoinsRatesProps {
  currency: string;
}

export const getCoinsRates = async ({ currency }: CoinsRatesProps) => {
  const API = 'https://api.exchangerate.host/latest';
  const response = await fetch(`${API}?base=${currency}`);
  return response.json();
};
