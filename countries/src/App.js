import { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Components/Results";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [countries, setCountries] = useState([]);
  const [view, setView] = useState([]);
  const handleShow = (e) => {
    setView(e.target.id);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const matches =
    keyword.length === 0
      ? []
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(keyword.toLowerCase())
        );

  return (
    <div>
      <p>
        Find countries: <input value={keyword} onChange={handleKeyword} />
      </p>
      <Results results={matches} />
    </div>
  );
};

export default App;
