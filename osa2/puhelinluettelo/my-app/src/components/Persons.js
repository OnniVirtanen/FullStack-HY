import Person from "./Person";
import personService from "../services/persons";

const Persons = ({ persons, setPersons }) => {
  const handleClick = (list) => {
    if (window.confirm(`Delete ${list.name}`)) {
      personService.remove(list.id).then((response) => {
        setPersons(persons.filter((person) => person.id !== list.id));
      });
    }
  };

  return (
    <div>
      {persons.map((list) => (
        <div style={{ display: "flex" }} key={list.id}>
          <Person person={list} />
          <button onClick={() => handleClick(list)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
