import {thirdReducerAction} from '../actions/types'
const thirdReducer = (state,actions) => {
    if (actions.type === thirdReducerAction){
        return {ResponseThirdReducer:actions.payload}
    }
    return {...state};
}

export default thirdReducer;