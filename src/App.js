import './App.css';
import countries from './countries.json'
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<CountriesList countries={countries} />}  />
        <Route path='/:countryId' element={<CountryDetails countries={countries} />}  />
      </Routes>
      
    </div>
  );
}

export default App;
