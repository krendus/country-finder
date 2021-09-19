export const ActionTypes = {
    CHANGE_MODE : 'CHANGE_MODE'
}
const initialState = {
    mode: 'light'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_MODE :
            if(state.mode === 'light'){
                return {
                    ...state,
                    mode: 'dark'
                }
            }else {
                return {
                    ...state,
                    mode: 'light'
                }
            }
        default :
            return state
    }
}
export default reducer