import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import opinionReducer from './opinionReducer'

const rootReducer = combineReducers({
    modalReducer,
    opinionReducer,
})

export default rootReducer;