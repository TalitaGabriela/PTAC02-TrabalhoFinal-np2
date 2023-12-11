import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card';
import "./style.css"; 

export default function Home(){
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [];

    return(
    <div>
        <NavBar nomeSite={"Mundo KDRAMAS"} />
        <div className="card-container">
          <Card listaTrailers = {listaLocalStorage}/>
     </div>
    </div>
    );
}