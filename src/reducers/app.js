import constants from "../constants";

const initialState = {
  isAppLoading: true,
  currenciesList: [],
  apiError: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_AVAILABLE_CURRENCIES_SUCCESS: {
      const { rates } = action.payload;
      
      const currenciesList = [];
      
      for ( let [key] of Object.entries(rates)) {
        currenciesList.push({
          value: key,
          label: `${key}`,
        });
      }
      
      return {
        ...state,
        currenciesList,
        isAppLoading: false
      }
    }
    case constants.FETCH_AVAILABLE_CURRENCIES_ERROR: {
      return {
        ...state,
        isAppLoading: false,
        apiError: true
      }
    }
    
    default:
      return state;
  }
};

export default reducer;
