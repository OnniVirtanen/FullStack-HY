import Person from "./Person"

const Persons = ({persons, completedFilterArray, person}) => {
  if (!Boolean(completedFilterArray)) {
    return (
      <div>
        {persons.map(list =>
        <Person key={list.id} person={list}/>
        )}
      </div>
    )
  } else {
    return (
      <div>
        {completedFilterArray.name} {completedFilterArray.phone}
      </div>
    )
  }
}

export default Persons