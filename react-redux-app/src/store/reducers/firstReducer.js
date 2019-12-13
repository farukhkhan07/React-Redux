import {firstReducerAction} from '../actions/types'

const firstReducer = (state,actions) => {
    if(actions.type === firstReducerAction)
    {
        return {ResponseFirstReducer:actions.payload}
    }
    return {...state};
}

export default firstReducer;