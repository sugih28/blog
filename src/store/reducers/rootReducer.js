import postReducer from './postReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    post:postReducer,
    auth:authReducer,
    firebase:firebaseReducer,
})

export default rootReducer;