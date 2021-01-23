import React, {useEffect, useContext} from 'react';
import CovidGlobalContext from '../../context/covidglobal/covidGlobalContext';
import Spinner from "../layout/Spinner";

const CovidDaily = () => {
  const covidGlobalContext = useContext(CovidGlobalContext);

  const {covidGlobal, error, getCovidData, clearErrors, loading} = covidGlobalContext;

  useEffect(() => {
    document.getElementById('menu-content').classList.remove('flex');
    document.getElementById('menu-content').classList.add('hidden');
    getCovidData();
    if (error) {
      console.error(error)
      clearErrors()
    }
    // eslint-disable-next-line
  }, [])

  if (loading || covidGlobal === null) return (
    <div className="flex h-80vh w-100vw justify-center items-center">
      <Spinner />
    </div>
  )

  return (
    <div className="m-4 ">
      <h4 className="text-base md:text-2xl uppercase font-bold text-center my-2">Covid-19 Daily Statistics</h4>
      <div className="overflow-x-auto example">
        <table className="border-collapse border border-green-800">
          <thead>
          {covidGlobal.slice(0, 1).map((head, index) => (
            <tr key={index}>
              {head.map(((head, index) => (
                <td key={index} className="border border-green-600 p-2">{head}</td>
              )))}
            </tr>
          ))}

          </thead>
          <tbody>
          {
            covidGlobal.slice(1).map((body, index) => (
              <tr key={index}>
                {body.map((stats, index) => (
                  <td key={index} className="border border-green-600 p-2">{stats}</td>
                ))}
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CovidDaily;
