import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card';

export default function Destaque(){
      const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")).slice(-4)|| []

      return(
      <div>
          <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"} />
          <div className="card-container">
            {listaLocalStorage.slice(-4).map((video) =>
            <Card video = {video}/>
)}
       </div>
      </div>
    );
}    