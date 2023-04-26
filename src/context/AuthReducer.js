const AuthReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN-START":
            return{
                user:null,
                isFecthing: true,
                err: false,
            };
            case "LOGIN-SUCCESS":
                return{
                    user:action.payload,
                    isFecthing: false,
                    err: false,
                };
                case "LOGIN-FAILURE":
                    return{
                        user:null,
                        isFecthing: false,
                        err: action.payload,
                    };
            default:
                return state
    }
}

export default AuthReducer;