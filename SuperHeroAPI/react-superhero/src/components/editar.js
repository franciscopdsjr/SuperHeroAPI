import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios'; 
import {Link} from 'react-router-dom';


export default function Editar() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [firstName, setPrimeiro] = useState();
  const [lastName, setSegundo] = useState();
  const [place, setLocal] = useState();

  const putData = () => 
  {

    axios.put('https://superheroapi-apim.azure-api.net/api/SuperHero/Editar', {
      id,
      name,
      firstName,
      lastName,
      place

    }).then((response) =>
    {
      document.getElementById("resultado").innerHTML = "Sucesso! " + response.data.name;

    }).catch(function (error)
    {
      console.log(error.message);
      document.getElementById("resultado").innerHTML = "Busca não realizada: " + error.response.data;
    })
    
  }
  const getData = () => 
  {

    axios.get('https://superheroapi-apim.azure-api.net/api/SuperHero/GetId?id='+id, {
      id,

    }).then((response) =>
    {
      document.getElementById("nome").value = response.data.name;
      document.getElementById("primeiro").value = response.data.firstName;
      document.getElementById("segundo").value = response.data.lastName;
      document.getElementById("cidade").value = response.data.place;

    }).catch(function (error)
    {
      console.log(error.message);
      document.getElementById("resultado").innerHTML = "Busca não realizada: " + error.response.data;
    })
    
  }
  return (
    <div className="App-principal">
      <Form className='formulario'>
      <Form.Field>
          <label>ID</label>
          <input onChange={(e) => setId(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Nome</label>
          <input id="nome" onChange={(e) => setName(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Primeiro Nome</label>
          <input id="primeiro" onChange={(e) => setPrimeiro(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Segundo Nome</label>
          <input id="segundo" onChange={(e) => setSegundo(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Cidade</label>
          <input id="cidade" onChange={(e) => setLocal(e.target.value)}></input>
        </Form.Field>
      
        <Button id="editar" onClick={putData} type='submit'>Editar</Button>
        <Button id="buscar" onClick={getData} type='submit'>Buscar</Button>
      </Form>
      <div id="resultado"></div>
      <div className='botoes'>
        <nav>
            <a class="nav-link" href="/cadastrar">Cadastrar</a>
            <a class="nav-link" href="/pesquisar">Pesquisar</a>
            <a class="nav-link" href="/excluir">Excluir</a>
            <a class="nav-link" href="/">Home</a>          
        </nav>
      </div>
    </div>
  );
}

//export default App;
