import axios from "axios";
import { getMoviesStart, getMoviesSuccess, getMoviesFailure, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure } from "./MovieAction";

export const getMovies = async (dispatch) => {

    try {
        dispatch(getMoviesStart());
        const res = await axios.get("/movie", { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(getMoviesSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(getMoviesFailure());
    }

}

export const createMovie = async (movie, dispatch) => {

    try {
        dispatch(deleteMovieStart());
        const res = await axios.post("/movie/", movie, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(deleteMovieSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(deleteMovieFailure());
    }

}

export const deleteMovies = async (id, dispatch) => {

    try {
        dispatch(deleteMovieStart());
        await axios.delete("/movie/" + id, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(deleteMovieSuccess(id));


    } catch (error) {
        console.log(error);
        dispatch(deleteMovieFailure());
    }

}