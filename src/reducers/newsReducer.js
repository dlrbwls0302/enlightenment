import { CHANGE_LOADING, SET_ARTICLES, CHANGE_QUERY } from '../actions/index';
import { initialState } from './initialState';

const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.payload.articles,
            }
        case CHANGE_QUERY:
            return {
                ...state,
                query: action.payload.query,
            }
        default:
            return state;
    }
} 

export default newsReducer;