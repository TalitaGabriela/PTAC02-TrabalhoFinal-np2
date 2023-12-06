import { Link } from "react-router-dom";
import Detalhe from '../Detalhe';
import '../styles/card.css';

export default function Card({ listaTrailers }) {
  return (
    listaTrailers.map((video, index) => (
     
        

        <div className="container">

            <div className='card' key={index}>  
    
                <div className="card-header">
                    <iframe
                        width="800"
                        height="500"
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
              <h3 className="card-titulo">{video.vdDescricao}</h3>
              <h5 className="card-titulo">{video.vdGenero}</h5>
              <h5 className="card-titulo">{video.vdLancamento}</h5>
              <h5 className="card-titulo">{video.vdEmissora}</h5>
              <div className="card-footer">
              <Link to={`/detalhe/${video.id}`}>
                    <button className="card-button" style={{ color: 'black', borderColor: 'black' }}>VER DETALHES</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
    ))
  );
}