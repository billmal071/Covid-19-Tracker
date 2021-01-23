import React, {useReducer} from 'react';
import CovidGlobalContext from './covidGlobalContext';
import CovidGlobalReducer from './covidGlobalReducer';
import {GET_COVID_G_DATA, GET_COVID_S_DATA, GET_TOTAL_NUMBERS_FOR_COUNTRY, CLEAR_COVID_COUNTRY, ERROR, CLEAR_ERRORS} from '../types';
import Papa from 'papaparse/papaparse'

const CovidGlobalState = props => {
  const initialState = {
    covidGlobal: null,
    covidStat: null,
    covidCountry: null,
    error: null,
    loading: true
  }

  const [state, dispatch] = useReducer(CovidGlobalReducer, initialState);

  // methods https://cors-anywhere.herokuapp.com/
  const getCovidData = async () => {
    try {
      const res = await fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv');
      // console.log(res)
      let string;
      await res.body.getReader().read().then(({done, value}) => {
        // console.log(done, value)
        string = new TextDecoder("utf-8").decode(value);
        let data = Papa.parse(string);
        dispatch({
          type: GET_COVID_G_DATA,
          payload: data.data
        })
      })
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err
      })
    }
  }

  const getCovid19Data = async () => {
    try {
      const res = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          "x-rapidapi-host": process.env.REACT_APP_API_HOST
        }
      })
      const data = await res.json();
      // console.log(data)
      dispatch({
        type: GET_COVID_S_DATA,
        payload: data.data.covid19Stats
      })
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err
      })
    }
  }

  const getTotalNumbersForACountry = async (country) => {
    try {
      const res = await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${country}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          "x-rapidapi-host": process.env.REACT_APP_API_HOST
        }
      })
      const data = await res.json();
      dispatch({
        type: GET_TOTAL_NUMBERS_FOR_COUNTRY,
        payload: data.data
      })
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err
      })
    }
  }

  // clear errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS
    })
  }

  const clearCovidCountry = () => {
    dispatch({
      type: CLEAR_COVID_COUNTRY
    })
  }

  return (
    <CovidGlobalContext.Provider value={{
      covidGlobal: state.covidGlobal,
      covidStat: state.covidStat,
      covidCountry: state.covidCountry,
      error: state.error,
      loading: state.loading,
      getCovidData,
      getCovid19Data,
      getTotalNumbersForACountry,
      clearErrors,
      clearCovidCountry,
    }}>
      {props.children}
    </CovidGlobalContext.Provider>
  )
}

export default CovidGlobalState;