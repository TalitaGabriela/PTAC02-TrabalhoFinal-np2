import NavBar from './Componentes/NavBar';
import Menu from './Componentes/Menu';
import Card from './Componentes/Card';

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