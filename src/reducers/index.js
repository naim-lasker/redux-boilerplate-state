import { combineReducers } from 'redux'
import postReducers from './postReducers';

const rootReducer = combineReducers({
    posts: postReducers
});
export default rootReducer;