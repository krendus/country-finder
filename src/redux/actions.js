import { ActionTypes } from "./reducer"
export const setMode = () => dispatch => {
    dispatch({
        type: ActionTypes.CHANGE_MODE
    })
}