import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { visibilityReducer } from './visibilityReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  form: formReducer,
  visibility: visibilityReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;
