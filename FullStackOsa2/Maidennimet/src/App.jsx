import { useEffect, useState } from "react";

import axios from "axios"

import Countrydetails from "./components/countrydetails";
import Countrylist from "./components/Countrylist";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [selectedCountry, setSelectedCountry] = useState(null)
  
    useEffect(() => {
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then((response) => {
          setCountries(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])
  
    const handleFilterChange = (event) => setFilter(event.target.value)
  
    const handleShowClick = (country) => setSelectedCountry(country)
  
    const countriesToShow = filter
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(filter.toLowerCase())
        )
      : []
  
    return (
      <>
        <main>
          <label>
            Find countries:
            <input type="text" value={filter} onChange={handleFilterChange} />
          </label>
  
          {countriesToShow.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : countriesToShow.length === 1 ? (
            <Countrydetails country={countriesToShow[0]} />
          ) : (
            <Countrylist
              countriesToShow={countriesToShow}
              handleShowClick={handleShowClick}
            />
          )}
          {selectedCountry && <Countrydetails country={selectedCountry} />}
        </main>
  
        <section>
          <p>
            Filter: {filter} <br />
            Count: {countriesToShow.length} <br />
          </p>
        </section>
      </>
    )
  }
  
  export default App
