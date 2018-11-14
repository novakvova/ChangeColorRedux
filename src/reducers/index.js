let defaultState = {
    color: "blue"
};

const mainReducer = (state = defaultState, action) => {
    if(action.type=="CHANGE_COLOR") {
        return {
            ...state,
            color: action.color
        }
    }
    else {
        return {
            ...state
        }
    }
}
export default mainReducer;