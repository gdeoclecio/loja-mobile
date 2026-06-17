import axios from "axios";

const api = axios.create({
  baseURL: "http://SEU_IP:192.168.0.5", // por o ip da maquina que vai rodar a api
});

export default api;