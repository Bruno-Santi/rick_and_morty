//import characters from "../data";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card({ name, species, gender, image, onClose, id }) {
  return (
    <>
      <div className={style.contenedor}>
        <button className={style.myButton} onClick={() => onClose(id)}>
          {" "}
          X{" "}
        </button>
        <Link to={`detail/${id}`} >
        <h2 className={style.name}>{name}</h2>
        </Link>
        <img className={style.img} src={image} alt="" />
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
      </div>
    </>
  );
}
