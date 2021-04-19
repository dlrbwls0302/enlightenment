export const CHANGE_LOADING = 'CHANGE_LOADING';
export const SET_ARTICLES = 'SET_ARTICLES';
export const CHANGE_QUERY = 'CHANGE_QUERY';
export const LOAD_ELECTIONS = 'LOAD_ELECTIONS';
export const CHANGE_MODAL = 'CHANGE_MODAL';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const SORT_COMMENTS = 'SORT_COMMENTS';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_TOGGLE = 'SET_TOGGLE';
export const OPEN_MODAL = 'OPEN_MODAL';

export const changeLoading = () => {
    return {
        type: CHANGE_LOADING,
        payload: {

        }
    }
}

export const setArticles = (articles) => {
    return {
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

export const loadElections = (elections) => {
    return {
        type: LOAD_ELECTIONS,
        payload: {
            elections
        }
    }
}

export const changeModal = () => {
    return {
        type: CHANGE_MODAL,
        payload: {}
    }
}


export const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        payload: {
            comments
        }
    }
}

export const sortComments = (comments) => {
    return {
        type: SORT_COMMENTS,
        payload: {
            comments
        }
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
        payload: {}
    }
}

export const openModal = () => {
    return {
        type: OPEN_MODAL,
        payload: {}
    }
}

export const setToggle = () => {
    return {
        type: SET_TOGGLE,
        payload: {}
    }
}