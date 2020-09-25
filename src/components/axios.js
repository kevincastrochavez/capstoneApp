import axios from "axios";

const instance = axios.create({
  baseURL: "https://kcc-capstone-db.herokuapp.com/api/v1/payments",
});

export default instance;
