import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  reviewApp: reviewReducer,
});

export default rootReducer;
