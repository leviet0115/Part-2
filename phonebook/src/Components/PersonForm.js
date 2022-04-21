const PersonForm = ({
  newName,
  newNumber,
  handleAdd,
  handleName,
  handleNumber,
}) => (
  <form>
    <div>
      name: <input value={newName} onChange={handleName} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumber} />
    </div>
    <div>
      <button type="submit" onClick={handleAdd}>
        add
      </button>
    </div>
  </form>
);

export default PersonForm;
