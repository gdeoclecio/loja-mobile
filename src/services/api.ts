import axios from "axios";

const api = axios.create({
 baseURL: "http://192.168.1.3:8080", // por o ip da maquina que vai rodar a api
});

export default api;