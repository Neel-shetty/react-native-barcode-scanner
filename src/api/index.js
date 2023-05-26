import axios from "axios";

export const api = axios.create({
  baseURL: "https://codelumina.com/project/scanme/api",
});
