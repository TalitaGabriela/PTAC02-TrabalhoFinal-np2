import NavBar from './Componentes/NavBar';
import { useState, useEffect } from "react";
import "./style.css"; 
export const listaTrailers=[];

export default function Registrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [];
    const [vdUrl, setVdUrl] = useState("");
    const [vdNome, setVdNome] = useState("");
    const [vdDescricao, setVdDescricao] = useState("");
    const [vdGenero, setVdGenero] = useState("");
    const [vdLancamento, setVdLancamento] = useState("");
    const [vdEmissora, setVdEmissora] = useState("");
    const [listaTrailers, setListaTrailers] = useState(listaLocalStorage);
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1||1);
    document.title = `Lista Dorama`
    useEffect(() => {localStorage.setItem("Lista", JSON.stringify(listaTrailers));}, [listaTrailers]);

    const salvar = (e) => {
        e.preventDefault();
        setListaTrailers([...listaTrailers, { vdUrl: vdUrl, id: id,}]);
        setId(id + 1);
        setVdUrl("");
    };

    return (
    <div>
        <NavBar nomeSite={"INDICAÇÕES DE DORAMAS"}/>
        <div className="container-1">
        
            <h1>CADASTRE SEU TRAILER</h1>
            <br/>
            <form onSubmit={salvar}>
                <h2> Insira URL</h2>
                <input type="text"
                    value={vdUrl}
                    onChange={(e) => { setVdUrl(e.target.value) }} />

                <br/>
                <h2>Insira Nome</h2>
                <input type="text"
                    value={vdNome}
                    onChange={(e) => { setVdNome(e.target.value) }} />

                <br/>
                <h2>Insira Descrição</h2>
                <input type="text"
                    value={vdDescricao}
                    onChange={(e) => { setVdDescricao(e.target.value) }} />

                <br/>
                <h2>Insira Gênero</h2>
                <input type="text"
                    value={vdGenero}
                    onChange={(e) => { setVdGenero(e.target.value) }} />

                <br/>
                <h2>Insira Lançamento</h2>
                <input type="text"
                    value={vdLancamento}
                    onChange={(e) => { setVdLancamento(e.target.value) }} />

                <br/>
                <h2>Insira Emissora</h2>
                <input type="text"
                    value={vdEmissora}
                    onChange={(e) => { setVdEmissora(e.target.value) }} />        

                <button>ADICIONAR</button>  
                <br/>
            </form >
        </div>
    </div>
    );
}