

import axios from "axios";

const SWAPI = axios.create({
  baseURL: "https://swapi.dev/api",
  timeout: 90000,
});

export const fetchPeople = (page = 1, search = "") =>
  SWAPI.get("/people/", { params: { page, search } }).then(res => res.data);

export const fetchResource = (url) =>
  axios.get(url).then(res => res.data); // for homeworld / species / films


