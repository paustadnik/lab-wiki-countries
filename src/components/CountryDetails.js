import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.production.min'


export function CountryDetails({countries}) {

  const [foundCountry, setFoundCountry] = useState(null)

  const {countryId} = useParams()

  useEffect(() => {
    const country = countries.find((countryObject) => {
      return countryObject.alpha3Code === countryId
    })

    if (country) {
      setFoundCountry(country)
    }
  }, [countryId])

  return (
    <div>
      {!foundCountry && <h3>Country not found</h3>}
      {foundCountry && (
        <>
          <h2>{foundCountry.name.common}</h2>
          <p>Capital: {foundCountry.capital}</p>
          <p>Area: {foundCountry.area}</p>
          <ul>{foundCountry.borders.map((e) => {
            return <li>{foundCountry.name.common}</li>
          })}
          </ul>

        </>
      )}
    </div>
  )
}