import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card';

export default function Destaque(){
      const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| []

      return(
      <div>
          <NavBar nomeSite={"Mundo KDRAMAS"} />
          <div className="card-container">
            <Card listaTrailers = {listaLocalStorage.slice(-4)}/>
       </div>
      </div>
    );
}    