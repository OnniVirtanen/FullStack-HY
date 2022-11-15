import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import FilterInput from './components/FilterInput'
import PersonForm from './components/PersonForm'
import axios from 'axios'


const App = (props) => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])
  console.log('render', persons.length, 'notes')

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const nameComparison = persons.map(({name}) => {
    const listOfNames = name
    return listOfNames
  })

  const testFiltering = nameComparison.map(element => {
    return element.toLowerCase()
  })
  
  const filteredPersonByName = testFiltering.indexOf(newFilter)
  const completedFilterArray = persons[filteredPersonByName]

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phone: newNumber,
      id: persons.length + 1
    }

    const valueOfNameComparison = nameComparison.filter(name => name == newName)

    if (Boolean (valueOfNameComparison == newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value.toLowerCase())
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <FilterInput handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
        <PersonForm addName={addName} newName={newName} newNumber={newNumber}
         handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
         />
      <h2>Numbers</h2>
      <Persons persons={persons} completedFilterArray={completedFilterArray}/>
    </div>
  )
}

export default App