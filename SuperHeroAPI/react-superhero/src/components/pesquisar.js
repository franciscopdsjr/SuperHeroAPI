import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios'; 

export default function Cadastrar() {
  const [id, setId] = useState();

  const getData = () => 
  {

    axios.get('https://superheroapi-apim.azure-api.net/api/SuperHero/GetId?id='+id, {
      id,

    }).then((response) =>
    {
      document.getElementById("resultado").innerHTML = response.data.name;

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
        
        <Button onClick={getData} type='submit'>Pesquisar</Button>
      </Form>
      <div id="resultado"></div>
      <div className='botoes'>
        <nav>
            <a class="nav-link" href="/cadastrar">Cadastrar</a>
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="/excluir">Excluir</a>
            <a class="nav-link" href="/editar">Editar</a>          
        </nav>
      </div>
    </div>
  );
}

//export default App;
