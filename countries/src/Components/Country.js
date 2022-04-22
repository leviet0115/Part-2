const Country = ({ country }) => (
  <div>
    <h2>{country.name.common}</h2>
    <p>Capital: {country.capital[0]}</p>
    <p>Area: {country.area}</p>
    <h3>Languages</h3>
    <ul>
      {Object.values(country.languages).map((lang) => (
        <li key={country.languages}>{lang}</li>
      ))}
    </ul>
    <img src={country.flags.png} alt="Flag"></img>
  </div>
);

export default Country;
