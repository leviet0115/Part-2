import { useState } from "react";
import PersonForm from "./Components/PersonForm";
import Filter from "./Components/Filter";
import Persons from "./Components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [keyword, setKeyword] = useState("");

  const contactToShow =
    keyword.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(keyword.toLowerCase())
        );

  const handleName = (e) => {
    setNewName(e.target.value);
    console.log(newName);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
    console.log(newNumber);
  };

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const checkDup = persons.find((person) => person.name === newName);
    console.log(checkDup);

    if (checkDup) {
      alert(`${newName} is already added to phonebook.`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
    console.log(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter keyword={keyword} handleKeyword={handleKeyword} />
      <h2>Add a new contact</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleAdd={handleAdd}
        handleName={handleName}
        handleNumber={handleNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={contactToShow} />
    </div>
  );
};

export default App;
