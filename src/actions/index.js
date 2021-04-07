export const CHANGE_LOADING = 'CHANGE_LOADING';
export const SET_ARTICLES = 'SET_ARTICLES';
export const CHANGE_QUERY = 'CHANGE_QUERY';

export const changeLoading = () => {
    return{
        type: CHANGE_LOADING,
        payload: {

        }
    }
}

export const setArticles = (articles) => {
    return{
        type: SET_ARTICLES,
        payload: {
            articles
        }
    }
}

export const changeQuery = (e) => {
    return {
        type: CHANGE_QUERY,
        payload: {
            query: e.target.value
        }
    }
}