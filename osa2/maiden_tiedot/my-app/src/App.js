import { useState, useEffect } from "react"
import axios from 'axios'
import FindInput from "./components/FindInput"
import ShowCountries from "./components/ShowCountries"


function App() {
  const [countries, setCountries] = useState([]);
  const [newInput, setNewInput] = useState('');

  useEffect(() => {
  console.log('effect');
  axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])
  console.log('render', countries.length, 'notes');

  const handleInputChange = (event) => {
    setNewInput(event.target.value);
  }

  return (
    <div>
      <FindInput newInput={newInput} handleInputChange={handleInputChange}/>
      <ShowCountries countries={countries} input={newInput}/>
    </div>
  )
}

export default App;
