import axios from "axios";
import {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    createUserStart,
    createUserSuccess,
    createUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure
} from "./userAction";

export const getUsers = async (dispatch) => {

    try {
        dispatch(getUsersStart());
        const res = await axios.get("/user", { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(getUsersSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(getUsersFailure());
    }

}

export const createUser = async (user, dispatch) => {

    try {
        dispatch(createUserStart());
        const res = await axios.post("/auth/register", user);

        dispatch(createUserSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(createUserFailure());
    }

}
export const updateUser = async (id, user, dispatch) => {

    try {
        dispatch(updateUserStart());
        const res = await axios.put("/user/" + id, user, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(updateUserSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(updateUserFailure());
    }

}

export const deleteUser = async (id, dispatch) => {

    try {
        dispatch(deleteUserStart());
        await axios.delete("/user/" + id, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken } });

        dispatch(deleteUserSuccess(id));


    } catch (error) {
        console.log(error);
        dispatch(deleteUserFailure());
    }

}