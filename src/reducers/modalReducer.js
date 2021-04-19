import { CHANGE_MODAL } from '../actions/index';
import { initialState } from './initialState';

const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_MODAL:
            return {
                ...state,
                modalIsOpen: !state.modalIsOpen
            }
        default:
            return state;
    }
}

export default modalReducer;