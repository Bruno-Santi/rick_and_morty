//import characters from "../data";

export default function Card(props) {
   return (
      <>
      <div style={{display: "inline-block", padding:'15px'}}>
         <button onClick = {() => window.alert('Emulamos que se cierra la card')}> X </button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img props='{props.name}' src={props.image} alt="" /> 

      </div>
      </>
   );
}
