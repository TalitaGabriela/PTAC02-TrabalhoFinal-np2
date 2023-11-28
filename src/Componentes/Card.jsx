import { Link } from "react-router-dom";
import '../styles/card.css'

export default function Card({listaTrailers}){
return(
    listaTrailers.map((video) =>
    <div className='card'>
        <iframe
            width = "853"
            height = "480"
            src = {
                'https://youtu.be/Qieu0vtPaKc?si=u6d0kcMi7uzrQ4QZ' + video.url.slice(17)}
            frameborder = "0"
            allow = "accelerometer; autoplay; clipboard-write ; encrypted-media gyroscope; picture-in-picture" allowfullscreen>   
        </iframe>

        <Link to ={'/detalhe/$video.id'}>
            <span>
                {video.nome}
            </span>
        </Link>
    </div>
    )
);
}