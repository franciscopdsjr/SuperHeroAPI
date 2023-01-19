import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () =>{
  return (
    <div className='App-principal'>
      <h1 /* class="App-logo" */>Bem Vindo!</h1>
      <div /* className='botoes' */>
        <nav>
            <a class="nav-link" href="/cadastrar">Cadastrar</a>
            <a class="nav-link" href="/pesquisar">Pesquisar</a>
            <a class="nav-link" href="/excluir">Excluir</a>
            <a class="nav-link" href="/editar">Editar</a>          
        </nav>
      </div>
    </div>
  );
}

export default Home;