import React from 'react'
import ReactDOM from 'react-dom/client'
//npm i react-router-dom//

import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from './Home';
import Detalhe from './Detalhe';
import Destaque from './Destaque';
import Registrar from './Registrar';

//Renderização dos objetos JSX// 
ReactDOM.createRoot(document.getElementById('root')).render(
  //Definição de rotas de navegação//
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
      <Route path='/Detalhe' element={<Detalhe/>}></Route>
      <Route path='/Registrar' element={<Registrar/>}></Route>
      <Route path='/Destaque' element={<Destaque/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)