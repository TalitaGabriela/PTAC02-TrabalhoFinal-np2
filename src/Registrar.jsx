import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"; 

export default function Registrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [listaTrailers, setListaTrailers] = useState(listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1||1);
    document.title = `Lista Dorama`
    console.log(lista)
    useEffect(() => {localStorage.setItem("Lista", JSON.stringify(listaTrailers));}, [listaTrailers]);

    const salvar = (e) => {
        e.preventDefault();
        setListaTrailers([...listaTrailers, { atividade: atividade, id: id }]);
        setId(id + 1);
        setAtividade("");
    };

    const remover = (id) => {
        setListaTrailers(listaTrailers.filter((ativ) => ativ.id !== id));
    }

    return (
        <div className="container">
            <h1>PTAC 2 - PROJETO FINAL</h1>
            <h1>Lista de Doramas</h1>
            <form onSubmit={salvar}>
                <input type="text"
                    value={atividade}
                    onChange={(e) => { setAtividade(e.target.value) }} />
                <button>ADD</button>     
            </form >
            {lista.map((ativ) =>
                <ul key={ativ.id}>

                    <Link to={`/detalhe/${ativ.id}`}>
                        <p>{ativ.atividade}</p>
                    </Link>
                    <li>
                        <button onClick={() => remover(ativ.id)}>REMOVE</button>
                    </li>
                </ul>
            )}
        </div>
    );
}