import { Link } from "react-router-dom";
import '../styles/card.css';

export default function Card({ listaTrailers }) {
  return (
    listaTrailers.map((video, index) => (
     
        

        <div className="container">

            <div className='card' key={index}>  
    
                <div className="card-header">
                    <iframe
                        width="400"
                        height="280"
                        src={`https://www.youtube.com/embed/${video.vdUrl.slice(17)}`}
                        title="Diva à Deriva | Trailer oficial | Netflix [PT SUB CC]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        >
                    </iframe>
            </div>
            <div className="card-body">
            <h2 className="card-local">{video.vdNome}</h2>
            <div className="card-footer"></div>
            <Link to={`/detalhe/${video.id}`}>
            <button className="card-button">
                    VER DETALHES 
            </button>
              </Link>
             </div>
           </div>
        </div>
    ))
  );
}