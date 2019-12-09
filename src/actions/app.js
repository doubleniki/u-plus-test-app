import constants from '../constants';

export const fetchAvailableCurrencies = () => ({
  type: constants.FETCH_AVAILABLE_CURRENCIES,
  payload: {
    promise: fetch(`https://api.exchangeratesapi.io/latest`, {
    
    })
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error();
      }
      return resp.json();
    })
    .catch(reason => {
      throw new Error(reason);
    })
  }
});

export const fetchLastRates = ({ base, symbols }) => ({
  type: constants.FETCH_LATEST_RATES,
  payload: {
    promise: fetch(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`, {
    
    })
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error();
      }
      return resp.json();
    })
    .catch(reason => {
      throw new Error(reason);
    })
  }
});

export const fetchHistoricalRates = ({ base, symbols, date }) => ({
  type: constants.FETCH_HISTORICAL_RATES,
  payload: {
    promise: fetch(`https://api.exchangeratesapi.io/${date}?base=${base}&symbols=${symbols}`, {
    
    })
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error();
      }
      return resp.json();
    })
    .catch(reason => {
      throw new Error(reason);
    })
  }
});