import httpClient from './api';

const apiLogin = (email, password) => httpClient.post('login', { email, password });
const apiRegister = (name, email, password) => httpClient.post('register', { name, email, password });

export  {
    apiLogin,
    apiRegister
}