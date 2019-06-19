import postReducer from './postReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    post:postReducer,
    auth:authReducer,
})

export default rootReducer;