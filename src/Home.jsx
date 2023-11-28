import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card';
import {listaTrailers} from './Registrar'
import "./style.css"; 

export default function Home(){
    return(
    <div className="container">
        <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"} />
        <div className="card-container">
          <Card listaTrailers = {listaTrailers}/>
     </div>
    </div>
    );
}