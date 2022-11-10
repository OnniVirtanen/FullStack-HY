const TotalExercises = ({courses, index}) => {
  const allExercises = courses[index].parts.map( ({exercises}) => {
    return exercises
  })
  const initialValue = 0;
  const sumOfExercises = allExercises.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  )
  return (
    <p><b>total of {sumOfExercises} exercises</b></p>
  )
}


const Part = ({courses, index}) => {
  return (
    <div>
      <h2>{courses[index].name}</h2>
      {courses[index].parts.map( ({name, exercises}, i) => {
        return <p key={i}>{name} {exercises}</p>
      })}
      <TotalExercises courses={courses} index={index} />
    </div>
  )
}


const Content = ({courses}) => {
  return (
    courses.map( (array, i) => {
        return <Part courses={courses} index={i} key={i}/>
    })
  )
}


const Header = ({text}) => {
  return (
    <div>
      <h1>
        {text}
      </h1>
    </div>
  )
}

const Course = ({courses}) => {
  return (
    <div>
      <Header text="Web development curriculum" />
      <Content courses={courses} />
    </div>
  )
}

export default Course