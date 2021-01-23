import {GET_COVID_G_DATA, GET_COVID_S_DATA, GET_TOTAL_NUMBERS_FOR_COUNTRY, CLEAR_COVID_COUNTRY, ERROR, CLEAR_ERRORS, LOADING} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_COVID_G_DATA:
      return {
        ...state,
        covidGlobal: action.payload,
        loading: false,
        error: null
      }
    case GET_COVID_S_DATA:
      return {
        ...state,
        covidStat: action.payload,
        loading: false,
        error: null
      }
    case GET_TOTAL_NUMBERS_FOR_COUNTRY:
      return {
        ...state,
        covidCountry: action.payload,
        loading: false,
        error: null
      }
    case CLEAR_COVID_COUNTRY:
      return {
        ...state,
        loading: false,
        covidCountry: null
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}