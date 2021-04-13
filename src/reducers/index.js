import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import electionsReducer from './electionsReducer';

const rootReducer = combineReducers({
    newsReducer,
    electionsReducer,
})

export default rootReducer;