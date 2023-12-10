import { useParams } from "react-router-dom";
import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card';
import "./style.css"; 

export default function Detalhe(){
    const { id } = useParams();
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));

    const listaTrailers = listaLocalStorage.filter((objeto) => {
        return objeto.id == id;
    });

    console.log(listaTrailers[0]);

    return (
        listaTrailers.map((video) => (
        <div>
            <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"} />
            <div className="container-1">
            <Card listaTrailers={listaTrailers} />
                <p>{video.vdDescricao}</p>
                <p><strong>{video.vdGenero}</strong></p>
                <p><strong>{video.vdLancamento}</strong></p>
                <p><strong>{video.vdEmissora}</strong></p> 
        </div>
        </div> 
        ))
    );
}
