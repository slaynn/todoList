import router from "@/router";

import httpClient from "@/api/api";
//import Axios from "axios";

export function login({ commit }, payload) {
  let email = payload.email;
  let password = payload.password;
  /*
  let httpClient = axios.create({
    baseURL: "http://138.68.74.39/api/todolists",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer xxxxxxxx",
    },
  });
  

  httpClient.get("http://138.68.74.39/api/todolists").then(function(response) {
    let token = response.data.token;
  });
  */

  httpClient
    .post("login", { email, password })
    .then(function(response) {
      let token = response.data.token;
      commit("setUserToken", token);
      router.push("/");
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function register({ commit }, payload) {
  let email = payload.email;
  let password = payload.password;
  let name = payload.name;
  httpClient
    .post("register", { name, email, password })
    .then(function(response) {
      let token = response.data.token;
      commit("setUserToken", token);
      router.push("/");
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function logout({ commit }) {
  commit("logout");
}
