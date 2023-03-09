import style from './SeachBar.module.css'
import React, {useState} from 'react';


export default function SearchBar({onSearch}) {
   const[id, setId] = useState('');
   const handleChange = (event) =>{
      setId(event.target.value)
   }
   return (
      <div>
       <input className = {style.input}  onChange={handleChange}/>
       <button className = {style.agregar} onClick = {() => onSearch(id)}>Agregar</button>
      </div>
   );
}
