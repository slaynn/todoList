export function user (state) {
    return state.userData
}

export function token (state) {
    return state.token
}
export function isLoggedIn (state) {
    if(state.token == ''){
        if(localStorage.getItem('token') == null){
            return false
        }
        else{
            //commit("setUserToken", localStorage.getItem('token'))
            state.token = localStorage.getItem('token')
            return true
        }
    }
    else{
        return true
    }
}