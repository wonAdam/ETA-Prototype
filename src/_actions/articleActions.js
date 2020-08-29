import axios from 'axios';
import types from './types';

export const fetchArticles = (start) => (dispatch, getState) => {
    dispatch({
        type:types.FETCH_ARTICLES,
        payload: {}
    })

    axios.get(`https://every-time-archiver-api.herokuapp.com/api/v1/articles/382283?start=${start}&end=${start+9}`)
    .then((response) => {
        const articles = response.data.data;
        dispatch({
            type:types.FETCH_ARTICLES,
            payload: articles
        })
    }); 
}