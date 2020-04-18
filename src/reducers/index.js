import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { visibilityReducer } from './visibilityReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  form: formReducer,
  visibility: visibilityReducer,
  loading: loadingReducer,
});

export default rootReducer;
