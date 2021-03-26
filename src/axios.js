import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ecomerce-project-1b6a3.cloudfunctions.net/api",
  // "localhost:5001/ecomerce-project-1b6a3/us-central1/api"
});

export default instance;
