export function setUserData(state, val) {
    state.userData = val
}
export function setUserToken(state, val) {
    state.token = val
    localStorage.setItem('token', val)

}
export function logout(state){
    localStorage.removeItem('token')
    state.token = ''
}