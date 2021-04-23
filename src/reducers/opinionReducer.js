import { LOAD_COMMENTS } from '../actions/index';
import { SORT_COMMENTS } from '../actions/index';
import { initialState } from './initialState';

const opinionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                // ...state,
                comments: action.payload.comments
            }
        case SORT_COMMENTS:
            return {
                // ...state,
                comments: action.payload.comments.sort(function (a, b) {
                    return a.like - b.like
                }).reverse()
            }
        default:
            return state;
    }

    switch (action.type) {
        case SORT_COMMENTS:
            return {
                ...state,
                comments: action.payload.comments.sort(function (a, b) {
                    return a.like - b.like
                }).reverse()
            }
        default:
            return state;
    }
}

export default opinionReducer;