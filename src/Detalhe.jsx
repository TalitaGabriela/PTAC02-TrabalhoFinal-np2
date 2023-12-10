import { useParams } from "react-router-dom";
import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card';

export default function Detalhe(){
    const { id } = useParams();
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));

    const listaTrailers = listaLocalStorage.filter((objeto)=>{
    if(objeto.id == id){
    return objeto;
    }
    return null;
    });

console.log(listaTrailers[0]);

    return(
        <div>
        <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"} />
        <div className="card-container">
          <Card listaTrailers = {listaLocalStorage[0]}/>
     </div>
    </div>
    );
}