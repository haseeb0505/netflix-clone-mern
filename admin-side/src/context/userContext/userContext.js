import UserReducer from "./userReducer";
import { createContext } from "react";
import React from "react";

const INITIAL_STATE = {
    users: [],
    isFetching: false,
    error: false
}
export const UserContext = createContext(INITIAL_STATE);
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(UserReducer, INITIAL_STATE);


    return (
        <UserContext.Provider
            value={{
                users: state.users,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </UserContext.Provider>
    );

}
