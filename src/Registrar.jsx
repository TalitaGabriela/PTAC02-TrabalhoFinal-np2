import NavBar from './Componentes/NavBar';
import { useState, useEffect } from "react";
import "./style.css"; 
export const listaTrailers=[];

export default function Registrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [];
    const [video, setVideo] = useState("");
    const [listaTrailers, setListaTrailers] = useState(listaLocalStorage);
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1||1);
    document.title = `Lista Dorama`
    useEffect(() => {localStorage.setItem("Lista", JSON.stringify(listaTrailers));}, [listaTrailers]);

    const salvar = (e) => {
        e.preventDefault();
        setListaTrailers([...listaTrailers, { video: video, id: id }]);
        setId(id + 1);
        setVideo("");
    };

    return (
        <div className="container">
            <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"} />
            <h1>Lista de Doramas</h1>
            <form onSubmit={salvar}>
                <input type="text"
                    value={video}
                    onChange={(e) => { setVideo(e.target.value) }} />
                <button>ADICIONAR</button>  
            </form >
        </div>
    );
}