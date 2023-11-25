import Card from './Componentes/Card';

export default function Home(){
    return(
    <div className="container">
        <Menu/>
        <NavBar = nomeSite{"Indicações de Doramas"}/>
        <div className="card-container">
          <Cards listaTrailers = {listaTrailers}/>
     </div>
    </div>
    );
}