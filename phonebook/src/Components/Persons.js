const Persons = ({ persons, handleDel }) => {
  return persons.map((person) => (
    <p key={person.name}>
      {person.name} {person.number}
      <button
        type="button"
        id={person.id}
        value={person.name}
        onClick={handleDel}
      >
        Delete
      </button>
    </p>
  ));
};

export default Persons;
