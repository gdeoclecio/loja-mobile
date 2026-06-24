import axios from "axios";

const api = axios.create({
 baseURL: "https://arguably-award-puppet.ngrok-free.dev", // por o ip da maquina que vai rodar a api
});

export default api;