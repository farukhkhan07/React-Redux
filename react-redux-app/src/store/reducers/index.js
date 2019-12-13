import firstReducer from './firstReducer'
import secondReducer from './secondReducer'
import thirdReducer from './thirdReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({first:firstReducer,second:secondReducer,third:thirdReducer});

export default allReducers;