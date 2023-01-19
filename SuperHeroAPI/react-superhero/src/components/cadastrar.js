import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios'; 

export default function Cadastrar() {
  const [id, setId] = useState();
  const [name, setNome] = useState();
  const [firstName, setPrimeiro] = useState();
  const [lastName, setSegundo] = useState();
  const [place, setLocal] = useState();

  const postData = () => 
  {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Private-Network'] = 'true';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'POST';
    console.log(name);

    axios.post('https://superheroapi-apim.azure-api.net/api/SuperHero/Cadastrar', {
      id,
      name,
      firstName,
      lastName,
      place
    }).then((response) =>
    {
      document.getElementById("resultado").innerHTML = "Cadastrado com sucesso!!"

    }).catch(function (error)
    {
      console.log(error.message);
      document.getElementById("resultado").innerHTML = "Não cadastrado devido ao erro: " + error.message;
    })
    
  }
  return (
    <div className="App-principal">
      <Form className='formulario'>
        <Form.Field>
            <label className="label" >ID</label>
            <input onChange={(e) => setId(e.target.value)}></input>
          </Form.Field>
          <Form.Field>
            <label className="label">Nome</label>
            <input onChange={(e) => setNome(e.target.value)}></input>
          </Form.Field>
          <Form.Field>
            <label className="label">Primeiro Nome</label>
            <input onChange={(e) => setPrimeiro(e.target.value)}></input>
          </Form.Field>
          <Form.Field>
            <label className="label">Segundo Nome</label>
            <input onChange={(e) => setSegundo(e.target.value)}></input>
          </Form.Field>
          <Form.Field>
            <label className="label">Cidade</label>
            <input onChange={(e) => setLocal(e.target.value)}></input>
          </Form.Field>
        <Button onClick={postData} type='submit'>Cadastrar</Button>
      </Form>
      <div id="resultado"></div>
      <div className='botoes'>
        <nav>
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="/pesquisar">Pesquisar</a>
            <a class="nav-link" href="/excluir">Excluir</a>
            <a class="nav-link" href="/editar">Editar</a>          
        </nav>
      </div>
    </div>
  );
}

//export default App;
