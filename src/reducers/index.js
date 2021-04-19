import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import electionsReducer from './electionsReducer';
import modalReducer from './modalReducer';
import opinionReducer from './opinionReducer'

const rootReducer = combineReducers({
    newsReducer,
    electionsReducer,
    modalReducer,
    opinionReducer,
})

export default rootReducer;