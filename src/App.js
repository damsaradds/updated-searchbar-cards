import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useState } from "react";
import "./App.css";
import { SearchBar } from "./component/searchbar.jsx";
import { SearchResultsList } from "./component/SearchResultsList.jsx";
import Data from "./sampledata.json";
import Card from "./component/card.jsx";

function App() {
  const [results, setResults] = useState([]);

 

  return (
    
    <div className="App">
    <div className="rectangle"></div>   
       <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
    </div>

      <div
          className="Expander-class">
          {Data.map((item, index) => {
            return (
              <>
                <Card key={index} item={item} />
              </>
            );
          })}
      </div> 

  </div> 
  );
}

export default App;
