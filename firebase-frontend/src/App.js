import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  }, []);

  console.log(people);

  return <div className="App"></div>;
}

export default App;
