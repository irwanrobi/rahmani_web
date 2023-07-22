import { FETCH_ALL_ARTICLES, FETCH_ARTICLE } from '../constants/actionTypes'

import * as api from '../api';

export const getArticles = () => async (dispatch) => {

    try {
        const { data } = await api.fetchArticlesList();
        dispatch({ 
            type: FETCH_ALL_ARTICLES, 
            payload: data
        });
        console.log(data);
    } catch (error) {
        console.log(error.message)
    }
};

export const getArticle = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchArticleDetail(id);
  
      dispatch({ 
          type: FETCH_ARTICLE, 
          payload: data
        });
    } catch (error) {
      console.log(error.message);
    }
  };