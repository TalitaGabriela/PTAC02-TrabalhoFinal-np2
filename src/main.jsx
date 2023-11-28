import React from 'react'
import ReactDOM from 'react-dom/client'
//npm i react-router-dom//

import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from './Home'
import Detalhe from './Detalhe.jsx'
import NavBar from './Componentes/NavBar';
import Menu from './Componentes/Menu';
import Card from './Componentes/Card';

//Renderização dos objetos JSX// 
ReactDOM.createRoot(document.getElementById('root')).render(
  //Definição de rotas de navegação//
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
      <Route path='/detalhe/:id' element={<Detalhe/>}></Route>
      <Route path='/NavBar' element={<NavBar/>}></Route>
      <Route path='/Menu' element={<Menu/>}></Route>
      <Route path='Card' element={<Card/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)