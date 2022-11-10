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
  <div>
  <Part courses={courses} index={0}/>
  <Part courses={courses} index={1} />
  </div>
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


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App