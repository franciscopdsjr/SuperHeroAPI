import axios from "axios";

const api = axios.create({
  baseURL: "https://superheroapi-apim.azure-api.net/api/SuperHero/Cadastrar",
});

export default api;