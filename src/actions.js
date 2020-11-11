


export function loginSuccess(data) {
    return function (dispatch) {
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: data
        })
    }

}


export function logout() {
    return function (dispatch) {
        dispatch({
            type: 'LOGOUT',
            payload: null,
        })
    }

}