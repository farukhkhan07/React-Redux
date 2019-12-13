import {secondReducerAction} from '../actions/types'
const secondReducer = (state,actions) => {
    if (actions.type === secondReducerAction)
    {
        return {ResponseSecondReducer:actions.payload};
    }
    return {...state};
}

export default secondReducer;