import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import FilterInput from "./components/FilterInput";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";
import { v4 as uuidv4 } from "uuid";

const App = (props) => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const nameComparison = persons.map(({ name }) => {
    const listOfNames = name;
    return listOfNames;
  });

  const completedFilterArray = persons.filter((person) =>
    person.name.toLowerCase().startsWith(newFilter.toLowerCase())
  );

  const renderPersons = [...completedFilterArray];

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      phone: newNumber,
      id: uuidv4(),
    };

    let valueOfNameComparison = nameComparison
      .filter((name) => name === newName)
      .join();

    if (valueOfNameComparison === newName) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService
      .create(nameObject)
      .then((response) => {
        console.log("response from post", response);
        setPersons(persons.concat(nameObject));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value.toLowerCase());
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={renderPersons} setPersons={setPersons} />
    </div>
  );
};

export default App;
