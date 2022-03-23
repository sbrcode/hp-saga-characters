import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/hp-api.herokuapp.com/api/characters/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  }
});