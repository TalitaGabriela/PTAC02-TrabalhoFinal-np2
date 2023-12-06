import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card';
import {listaTrailers} from './Registrar'
import "./style.css"; 

export default function Home(){
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [];

    return(
    <div>
        <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"} />
        <div className="card-container">
          <Card listaTrailers = {listaLocalStorage}/>
     </div>
    </div>
    );
}