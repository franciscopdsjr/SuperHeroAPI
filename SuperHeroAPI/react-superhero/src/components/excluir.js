import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios'; 
import {Link} from 'react-router-dom';


export default function Excluir() {
  const [id, setId] = useState();

  const deleteData = () => 
  {

    axios.delete('https://superheroapi-apim.azure-api.net/api/SuperHero/Deletar?id='+id, {
      id,

    }).then((response) =>
    {
      document.getElementById("resultado").innerHTML = response.data.name + " Excluído com sucesso!!!";

    }).catch(function (error)
    {
      console.log(error.message);
      document.getElementById("resultado").innerHTML = "Não excluído: " + error.message;
    })
    
  }
  return (
    <div className="App-principal">
      <Form className='formulario'>
      <Form.Field>
          <label>ID</label>
          <input onChange={(e) => setId(e.target.value)}></input>
        </Form.Field>
        
        <Button onClick={deleteData} type='submit'>Excluir</Button>
      </Form>
      <div id="resultado"></div>
      <div className='botoes'>
        <nav>
            <a class="nav-link" href="/cadastrar">Cadastrar</a>
            <a class="nav-link" href="/pesquisar">Pesquisar</a>
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="/editar">Editar</a>          
        </nav>
      </div>
    </div>
  );
}

//export default App;
