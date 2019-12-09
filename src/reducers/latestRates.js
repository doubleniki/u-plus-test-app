import constants from "../constants";

const initialState = {
  baseCurrency: null,
  comparedCurrencies: [],
  humanDate: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_LATEST_RATES_SUCCESS: {
      const { base, date, rates } = action.payload;
      const humanDate = new Date(date).toLocaleString("en-US", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
      const comparedCurrencies = [];
      for (let [key, value] of Object.entries(rates) ) {
        comparedCurrencies.push({ code: key, rate: value.toFixed(4) })
      }
      return {
        ...state,
        comparedCurrencies,
        baseCurrency: { code: base, rate: 1 },
        humanDate
      }
    }
    
    default:
      return state;
  }
};

export default reducer;
