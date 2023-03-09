import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav/Nav";
import Titulo from "../src/components/Titulo/Titulo";
import { useState } from "react";

// prueba comentario
function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          // setCharacters((oldChars) => [...oldChars, data]);
          setCharacters([...characters, data])
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  }
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav props = {characters} onSearch={onSearch} />
      </div>
      <div>
        <Titulo />
      </div>

      <div>
        <Cards onClose = {onClose} characters = {characters} />
      </div>
    </div>
  );
}

export default App;
