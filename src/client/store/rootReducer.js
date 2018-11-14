import { combineReducers } from 'redux';
import homeReducer from './../Routes/Home/store/reducers';
import loginReducer from './../Routes/Login/store/reducers';

export const rootReducer = combineReducers({
    homeReducer,
    loginReducer
})