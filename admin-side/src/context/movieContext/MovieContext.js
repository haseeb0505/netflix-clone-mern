import MovieReducer from "./MovieReducer";
import { createContext } from "react";
import React from "react";

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false
}
export const MovieContext = createContext(INITIAL_STATE);
export const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(MovieReducer, INITIAL_STATE);


    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </MovieContext.Provider>
    );

}
