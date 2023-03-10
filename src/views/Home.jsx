import Titulo from "../components/Titulo/Titulo";
import Cards from "../components/Cards";
const Home = ({ characters, onClose }) => {
  return (
    <div>
      <div>
        <Titulo />
      </div>
      <div>
        <Cards characters={characters} onClose = {onClose} />
      </div>
    </div>
  );
};

export default Home;
