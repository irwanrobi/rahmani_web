import { combineReducers } from 'redux';

import offers from './offers';
import articles from './articles'
import users from './users'

const reducers = combineReducers({
    offers: offers,
    articles: articles,
    users: users
});

export default reducers;