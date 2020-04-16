import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { visibilityReducer } from './visibilityReducer';

const rootReducer = combineReducers({
  form: formReducer,
  visibility: visibilityReducer,
});

export default rootReducer;
