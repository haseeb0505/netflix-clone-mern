
// Get list 
export const getListsStart = () => ({
    type: "GET_LISTS_START"
});
export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists
});
export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE"
});

// create List 
export const createListStart = () => ({
    type: "CREATE_LIST_START"
});
export const createListSuccess = (lists) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: lists
});
export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE"
});
// delete List
export const DeleteLitsStart = () => ({
    type: "DELETE_LIST_START"
});
export const DeleteListSuccess = (listS) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: listS
});
export const DeleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE"
});