import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import electionsReducer from './electionsReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    newsReducer,
    electionsReducer,
    modalReducer,
})

export default rootReducer;