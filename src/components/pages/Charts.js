import React, {useEffect, useContext, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import CovidGlobalContext from "../../context/covidglobal/covidGlobalContext";
import PadString from "../../utils/padString";
import Spinner from "../layout/Spinner";

const Charts = ({match}) => {
  const covidGlobalContext = useContext(CovidGlobalContext);

  const {covidCountry, error, getTotalNumbersForACountry, clearErrors, loading, clearCovidCountry} = covidGlobalContext;

  const [search, setSearch] = useState("")

  const onSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    if (search === "") {
      console.log(`Can't submit an empty search`)
      return;
    }
    getTotalNumbersForACountry(search)
    //clearCovidCountry()
    console.log(search)
    console.log(covidCountry)
  }

  const data = {
    labels: ['Confirmed', 'death', 'recovered'], // confirmed, deaths, recovered
    datasets: [{
      label: `${covidCountry && covidCountry.location}`, // country
      backgroundColor: [
        'rgba(255, 99, 132, 0.75)',
        'rgba(54, 162, 235, 0.75)',
        'rgba(255, 206, 86, 0.75)',
      ],
      data: [`${covidCountry && covidCountry.confirmed}`, `${covidCountry && covidCountry.deaths}`, `${covidCountry && covidCountry.recovered}`] // number from labels
    }]
  }

  useEffect(() => {
    clearCovidCountry()
    getTotalNumbersForACountry(match.params.country)
    if (error) {
      console.error(error)
      clearErrors()
    }
    // eslint-disable-next-line
  }, [])

  if (loading || covidCountry === null) return (
    <div className="flex h-80vh w-100vw justify-center items-center">
      <Spinner />
    </div>
  )

  return (
    <div className="my-12">
      <div className="md:mx-24 mx-10 card">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="search">
            <input type="text"
                   id="search"
                   className="block w-full border border-2 border-black py-2 px-1 text-lg rounded-lg"
                   placeholder="search by country"
                   name="search"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <br/>
          <input type="submit" className="block w-full bg-red-500 py-2 rounded-sm hover:shadow-lg"/>
        </form>
      </div>
      <h1 className="text-base md:text-2xl uppercase font-bold text-center mt-6 mb-12">Covid Cases Chart</h1>
      <div className="overflow-x-auto mx-2 lg:mx-4 example">
        <table className="border-collapse border border-green-800 text-center w-full">
          <thead>
          <tr>
            <th className="border border-green-600 p-2 lg:p-4">Country</th>
            <th className="border border-green-600 p-2 lg:p-4">Confirmed</th>
            <th className="border border-green-600 p-2 lg:p-4">Deaths</th>
            <th className="border border-green-600 p-2 lg:p-4">Recovered</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="border border-green-600 p-2 lg:p-4">{covidCountry.location}</td>
            <td className="border border-green-600 p-2 lg:p-4">{PadString(covidCountry.confirmed)}</td>
            <td className="border border-green-600 p-2 lg:p-4">{PadString(covidCountry.deaths)}</td>
            <td className="border border-green-600 p-2 lg:p-4">{PadString(covidCountry.recovered)}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-7 mx-6">
        <Bar
          data={data}
        />
      </div>
    </div>
  );
};

export default Charts;
