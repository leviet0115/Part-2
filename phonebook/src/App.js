import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleName = (e) => {
    setNewName(e.target.value);
    console.log(newName)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const checkDup = persons.find(person => person.name === newName);
    console.log(checkDup);
    if(checkDup){
      alert(`${newName} is already added to phonebook.`)
    } else{
      setPersons([...persons, {name: newName}]);
    }
    console.log(persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleName}/>
        </div>
        <div>
          <button type="submit" onClick={handleAdd}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => <p key={person.name}>{person.name}</p>)}
    </div>
  )
} 

export default App