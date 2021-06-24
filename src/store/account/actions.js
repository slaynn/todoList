import router from '@/router'

import httpClient from '@/api/api'


export function login({ commit }, payload) {
    let email = payload.email
    let password = payload.password
    httpClient.post('login', { email, password }).then(function (response) {
        let token = response.data.token
        commit("setUserToken", token)
        router.push('/')
    })
    .catch(function (error) {
        console.log(error)
    });
}

export function register({commit}, payload){
    let email = payload.email
    let password = payload.password
    let name = payload.name
    httpClient.post('register', { name, email, password }).then(function (response) {
        let token = response.data.token
        commit("setUserToken", token)
        router.push('/')
    })
    .catch(function (error) {
        console.log(error)
    });
}