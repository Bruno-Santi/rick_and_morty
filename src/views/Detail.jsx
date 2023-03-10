import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Detail = () => {
  const id = useParams();
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id.id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);
  return (
    <div>
      <h1>{character.name}</h1>
      
    </div>
  );
};

export default Detail;
