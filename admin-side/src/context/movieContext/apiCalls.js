import axios from "axios";
import {
    getMoviesStart,
    getMoviesSuccess,
    getMoviesFailure,
    deleteMovieStart,
    deleteMovieSuccess,
    deleteMovieFailure,
    createMovieStart,
    createMovieSuccess,
    createMovieFailure,
    updateMovieStart,
    updateMovieSuccess,
    updateMovieFailure
} from "./MovieAction";

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
        dispatch(createMovieStart());
        const res = await axios.post("/movie/", movie, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(createMovieSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(createMovieFailure());
    }

}
export const updateMovie = async (id, movie, dispatch) => {

    try {
        dispatch(updateMovieStart());
        const res = await axios.put("/movie/" + id, movie, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(updateMovieSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(updateMovieFailure());
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