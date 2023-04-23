/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
// import { getUser, removeUser, saveUser } from "../utils/userUtils";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const initialState={
        user:null,
        isAuthenticated: false,
        token:'',
    }
    const [auth,setAuth]=useState(initialState)
    return (
        <AuthContext.Provider value={{auth,setAuth}}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext)