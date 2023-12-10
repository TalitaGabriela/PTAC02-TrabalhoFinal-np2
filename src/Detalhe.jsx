import { useParams } from "react-router-dom";
import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card';

export default function Detalhe(){
    const { id } = useParams();
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));

    const listaTrailers = listaLocalStorage.filter((objeto) => {
        return objeto.id == id;
    });

    console.log(listaTrailers[0]);

    return (
        <div>
            <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"} />
            <div className="card-container">
                <Card listaTrailers={listaTrailers} />
            </div>
        </div>
    );
}
