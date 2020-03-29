import {
    combineReducers
} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});

console.log("Stripe key is", process.env.REACT_APP_STRIPE_KEY)
console.log("Environmemt is", process.env.NODE_ENV)