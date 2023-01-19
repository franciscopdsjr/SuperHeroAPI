import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastrar from "./components/cadastrar";
import Editar from "./components/editar";
import Excluir from "./components/excluir";
import Pesquisar from "./components/pesquisar";
import Home from "./home";

const Rotas = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/excluir" element={<Excluir />} />
                <Route path="/pesquisar" element={<Pesquisar />} />
                <Route path="/editar" element={<Editar />} />
            </Routes>
       </BrowserRouter>
   )
}

export default Rotas;