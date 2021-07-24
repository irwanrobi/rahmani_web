import { FETCH_ALL_ARTICLES, FETCH_ARTICLE, CREATE_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE } from '../constants/actionTypes';

export default (articles = [], action) => {
    switch (action.type) {
        case FETCH_ALL_ARTICLES:
            return action.payload;
        case FETCH_ARTICLE:
            return action.payload;
        case CREATE_ARTICLE:
            return [ ... articles, action.payload ];
        case UPDATE_ARTICLE:
            return articles.map((article) => (article._id === action.payload._id ? action.payload : article))
        case DELETE_ARTICLE:
            return articles.filter((article) => article._id !== action.payload);
        default:
            return articles;
    }
}
