export const headerReducer = (state = {
  companyImage: 'https://via.placeholder.com/150',
  companyName: 'Company Name',
  bgColor: "#000000",
  borderColor: "#000000",
}, action) => {
  switch (action.type) {
    case 'UPDATE_LOGO':
      return action.payload;
    case 'UPDATE_NAME':
      return action.payload;
    case 'UPDATE_BG_COLOR':
      return action.payload;
    case 'UPDATE_BORDER':
      return action.payload;
    default:
      return state;
  }
};
