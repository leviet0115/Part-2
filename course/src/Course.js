const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0);
  return <p>Total of {total} exercises </p>
};

const Part = ({ part }) => (
  <p>{part.name} {part.exercises}</p>
);

const Content = ({ parts }) => (
  parts.map(part => <Part part={part} key={part.id}/>)
);

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </>
  );
};

export default Course;