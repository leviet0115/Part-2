import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    personService.getAll().then((res) => {
      console.log(res.data);
      setPersons(res.data);
    });
  }, []);

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
      const newPerson = { name: newName, number: newNumber };
      personService
        .create(newPerson)
        .then((res) => setPersons([...persons, res.data]));
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
