import { useParams } from "react-router-dom";
import Card from './Componentes/Card';

export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));

    const videos = lista.filter((objeto)=>{
    if(objeto.id == id){
    return objeto;
    }
    return null;
    });

console.log(videos[0]);

    return(
    <div>
    <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"} />
    <div>
    <Card videos={videos[0]}/>
    </div>
    </div>
    );
}