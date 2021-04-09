import { LOAD_ELECTIONS } from '../actions/index';
import { initialState } from './initialState';

const electionsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_ELECTIONS:
            return {
                ...state,
                elections: action.payload.elections
            }
        default:
            return state;
    }
} 

export default electionsReducer;