import "./App.css";

import Nav from "./components/Nav/Nav";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Detail from "./views/Detail";
import Titulo from './components/Titulo/Titulo'
// prueba comentario
function App() {
  const [characters, setCharacters] = useState([]);
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          // setCharacters((oldChars) => [...oldChars, data]);
          setCharacters([...characters, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div className="App">
      <Nav props={characters} onSearch={onSearch} />

      <Routes>
        <Route path = '/' element ={<Titulo />} />
        <Route
          path="home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="about" element={<About />} />
        <Route path="home/detail/:id" element={<Detail />} />
      </Routes>

      <div></div>
    </div>
  );
}

export default App;
