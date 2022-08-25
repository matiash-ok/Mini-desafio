import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Formulario from '../paginas/Formulario/Formulario.jsx'
import Tabla from '../paginas/Tabla/Tabla.jsx'
import Navbar from '../componentes/Navbar/Navbar.jsx'

const Rutas = ()=>{
  return (
        <>
        <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={
                  <Tabla />
              }
              />
              <Route path="/Formulario" element={
                <Formulario />
              }
              />
          </Routes>
            </Router>
            </>
  )
}

export default Rutas