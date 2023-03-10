import Card from "./Card";

export default function Cards({characters, onClose}) {


  return (
    <div>
      {characters.map(({ name, species, gender, image, id }) => {
        
        return (
          <Card
          id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
          
        ) ; 
      })}
    </div>
  );
}
