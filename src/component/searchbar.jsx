import { useState } from "react";
import "./searchbar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

 
  const fetchData = (value) => {
    fetch("https://api.npoint.io/9e78f5d79462a27d5fa0")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <div id="search-icon" ></div>
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};