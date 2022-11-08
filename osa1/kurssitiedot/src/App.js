const Part = ({course, index}) => {
  return (
    <div>
      <p>
        {course.parts[index].name + " " + course.parts[index].exercises}
      </p>
    </div>
  )
}

const Content = ({course}) => {

return (
  <div>
    {course.parts.map(parts => {
      return <Part course={course} index={parts.id - 1} key={parts.id} />
    })}
  </div>
)
}

const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

const App = () => {
  const course = {
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
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App