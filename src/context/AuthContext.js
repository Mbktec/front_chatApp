import {createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer";

const INITIALE_STATE = {
    user: null,
    isFecthing: false,
    error:false
};

export const AuthContext = createContext(INITIALE_STATE);


export const AuthContextProvider = (children) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIALE_STATE);

    return(
        <AuthContextProvider 
        value={{ 
        user:state.user, 
        isFecthing:state.isFecthing,
        error: state.error,
        dispatch
        }}>
            {children}
        </AuthContextProvider>
    )
}