import Person from "./Person"
import personService from '../services/persons'

const Persons = ({persons}) => {

  const handleClick = (list) => {
    if (window.confirm("Do you really want to leave?")) {
      personService.remove(list.id)
    }
  }

  return (
    <div>
      {persons.map(list =>
      <div style={{display: "flex"}} key={list.id}>
        <Person person={list}/>
        <button onClick={() => handleClick(list)}>delete</button>
      </div>
      )}
    </div>
  )
}

export default Persons