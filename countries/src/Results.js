const Results = ({ results }) => {
  if (results.length === 1) {
    const c = results[0];
    return (
      <div>
        <h2>{c.name.common}</h2>
        <p>Capital: {c.capital[0]}</p>
        <p>Area: {c.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(c.languages).map((lang) => (
            <li>{lang}</li>
          ))}
        </ul>
        <img src={c.flags.png} alt="Flag"></img>
      </div>
    );
  }

  if (results.length <= 10) {
    return (
      <div>
        {results.map((country) => (
          <p>{country.name.common}</p>
        ))}
      </div>
    );
  }

  if (results.length > 10) {
    return <p>Too many matches, specify another filter.</p>;
  }
};

export default Results;
