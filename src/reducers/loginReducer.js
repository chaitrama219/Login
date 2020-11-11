


export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                userDetails: action.payload
            }
        case 'LOGOUT':
            return {
                userDetails: {}
            }
        default:
            return state
    }
}