import axios from "axios";

const api = axios.create({
  baseURL: "https://consulta-postos.herokuapp.com/api/v1",
});

export default api;