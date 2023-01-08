import Person from "./Person"
import personService from '../services/persons'

const Persons = ({persons}) => {
  return (
    <div>
      {persons.map(list =>
      <div style={{display: "flex"}} key={list.id}>
        <Person person={list}/>
        <button onClick={() => personService.remove(list.id)}>delete</button>
      </div>
      )}
    </div>
  )
}

export default Persons