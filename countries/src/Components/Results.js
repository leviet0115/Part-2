import Country from "./Country";
import { useState } from "react";

const Results = ({ results }) => {
  const [showIndex, setShowIndex] = useState(-1);

  const handleShow = (e) => {
    const index = results.findIndex(
      (country) =>
        country.name.common.toLowerCase() === e.target.id.toLowerCase()
    );
    setShowIndex(index);
  };

  if (results.length === 1) {
    return <Country country={results[0]} />;
  }

  if (results.length <= 10) {
    return (
      <div>
        {results.map((country) => (
          <div key={country.name.common}>
            <span>{country.name.common}</span>
            <button id={country.name.common} type="button" onClick={handleShow}>
              Show
            </button>
          </div>
        ))}
        {showIndex !== -1 && <Country country={results[showIndex]} />}
      </div>
    );
  }

  if (results.length > 10) {
    return <p>Too many matches, specify another filter.</p>;
  }
};

export default Results;
