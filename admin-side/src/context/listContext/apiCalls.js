import axios from "axios";
import {
    getListsStart,
    getListsSuccess,
    getListsFailure,
    DeleteLitsStart,
    DeleteListSuccess,
    DeleteListFailure,
    createListStart,
    createListSuccess,
    createListFailure,
    updateListStart,
    updateListSuccess,
    updateListFailure
} from "./ListAction";


export const getlists = async (dispatch) => {

    try {
        dispatch(getListsStart());
        const res = await axios.get("list/all", { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(getListsSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(getListsFailure());
    }

}

export const createList = async (list, dispatch) => {

    try {
        dispatch(createListStart());
        const res = await axios.post("/list/", list, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(createListSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(createListFailure());
    }

}
export const updateList = async (id, list, dispatch) => {

    try {
        dispatch(updateListStart());
        const res = await axios.put("/list/" + id, list, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(updateListSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(updateListFailure());
    }

}

export const deleteList = async (id, dispatch) => {

    try {
        dispatch(DeleteLitsStart());
        await axios.delete("/list/" + id, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(DeleteListSuccess(id));


    } catch (error) {
        console.log(error);
        dispatch(DeleteListFailure());
    }

}