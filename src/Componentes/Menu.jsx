import { Link } from "react-router-dom";
import '../styles/menu.css'

export default function Menu(){
    return(
       <menu className="menu">
        <Link to="/Home">Home</Link>
        <Link to="/Destaque">Destaque</Link>
        <Link to="/Registrar">Registrar</Link>
       </menu> 
    );
}