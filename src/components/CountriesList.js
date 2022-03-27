import React from 'react';
import { Link } from "react-router-dom"
import { CountryDetails } from "./CountryDetails"


export function CountriesList({countries}) {
  return (
    <div>
      <h2>List of countries</h2>
      {countries.map((country) => {
        return (
          <div>
            <Link to={`/${country.alpha3Code}`} element={<CountryDetails country={country} />}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='country flag' width="20px" />

              <span> {country.name.common} </span>
          
            </Link>
          </div>

        )
      })}
    </div>
  )
}