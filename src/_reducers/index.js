import { combineReducers } from 'redux';
import types from '../_actions/types';

const INITIAL_STATE = [];
const articleReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.FETCH_ARTICLES:
            return [ ...Object.values(action.payload) ]
        default:
            return state
    }
}


export default combineReducers({
    articles: articleReducer,
})