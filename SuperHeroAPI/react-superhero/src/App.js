import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import api from "./services/api";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios'; 
import Routes from "./routes";


export default function App() {
  return(
    <Routes/>
  );
}

//export default App;
