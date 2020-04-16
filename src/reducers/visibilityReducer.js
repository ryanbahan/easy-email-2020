export const visibilityReducer = (state = {
  "Header": true,
  "Main Image": true,
  "Image Tagline": true,
  "Main Content": true,
  "Footer": true,
}, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
