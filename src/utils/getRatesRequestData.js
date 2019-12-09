export const getRatesRequestData = (data) => {
  if (!data) {
    return {};
  }
  
  const base = data.baseCurrency.value;
  const symbols = data.comparedCurrencies.map(currency => currency.value).join(',');
  let date = null;
  
  if (data.dateInHistory) {
    date = data.dateInHistory;
  }
  
  return { base, symbols, date }
};