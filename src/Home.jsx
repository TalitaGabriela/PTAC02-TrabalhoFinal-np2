import NavBar from './Componentes/NavBar';
import Menu from './Componentes/Menu';
import Card from './Componentes/Card';
import {listaTrailers} from './Registrar'
import "./style.css"; 

export default function Home(){
    return(
    <div className="container">
        <Menu/>
        <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"} />
        <div className="card-container">
          <Card listaTrailers = {listaTrailers}/>
     </div>
    </div>
    );
}