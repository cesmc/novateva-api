import { useEffect, useRef, useState } from "react";
import Characters from "./components/Characters";
import "./App.css";

const API_URL = "https://swapi.dev/api/people";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  console.log(characters);

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <h1>NOVATEVA</h1>
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder="Search"
      />
      <Characters filteredUsers={filteredUsers} />
    </div>
  );
}

export default App;
