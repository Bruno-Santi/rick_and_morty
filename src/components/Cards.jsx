import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return( 
   <div>
      {characters.map((char) => {
              return <Card key = {char.id}
              name = {char.name}
              species = {char.species}
              genre = {char.genre}
              image = {char.image} />
      })}
        
   </div>

   )
   } 