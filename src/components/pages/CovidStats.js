import React, {useContext, useEffect} from 'react';
import CovidGlobalContext from '../../context/covidglobal/covidGlobalContext';
import {NavLink} from "react-router-dom";
import Spinner from "../layout/Spinner";

const CovidStats = () => {
  const covidGlobalContext = useContext(CovidGlobalContext);

  const {covidStat, error, getCovid19Data, clearErrors, loading} = covidGlobalContext;

  useEffect(() => {
    document.getElementById('menu-content').classList.remove('flex');
    document.getElementById('menu-content').classList.add('hidden');
    getCovid19Data();
    if (error) {
      console.error(error)
      clearErrors()
    }
    // eslint-disable-next-line
  }, [])

  if (loading || covidStat === null) return (
    <div className="flex h-80vh w-100vw justify-center items-center">
      <Spinner />
    </div>
  )

  return (
    <div>
      <div className="m-4 ">
        <h4 className="text-base md:text-2xl uppercase font-bold text-center my-2">Covid-19 Cases</h4>
        <div className="overflow-x-auto mx-4">
          <table className="border-collapse border border-green-800 w-full">
            <thead>
            <tr>
              <th className="border border-green-600 p-2">Country</th>
              <th className="border border-green-600 p-2">City</th>
              <th className="border border-green-600 p-2">Province</th>
              <th className="border border-green-600 p-2">Confirmed</th>
              <th className="border border-green-600 p-2">Deaths</th>
              <th className="border border-green-600 p-2">Recovered</th>
            </tr>
            </thead>
            <tbody>
            {covidStat.map((data, index) => (
              <tr key={index}>
                <td className="border border-green-600 p-2 text-blue-500 hover:text-gray-700" >
                  <NavLink exact to={`/chart/${data.country}`}>{data.country}</NavLink>
                </td>
                <td className="border border-green-600 p-2">{data.city}</td>
                <td className="border border-green-600 p-2">{data.province}</td>
                <td className="border border-green-600 p-2">{data.confirmed && data.confirmed.toLocaleString()}</td>
                <td className="border border-green-600 p-2">{data.deaths && data.deaths.toLocaleString()}</td>
                <td className="border border-green-600 p-2">{data.recovered && data.recovered.toLocaleString()}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CovidStats;
