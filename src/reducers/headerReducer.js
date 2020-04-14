export const headerReducer = (state = {
  companyImage: 'https://via.placeholder.com/150',
  companyName: 'Company Name',
  bgColor: "#000000",
  borderColor: "#000000",
}, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {...state, ...action.payload}
    default:
      return state;
  }
};
