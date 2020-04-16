export const formReducer = (state = {
  companyImage: 'https://via.placeholder.com/150',
  companyName: 'MailChimp',
  mainImage: 'https://via.placeholder.com/1200x600',
  mainImageTagline: 'Download our new e-book for free!',
  mainImageButtonCopy: 'Free Download',
  content: `Hey there, I'm the VP of Business Development here at Devetry – I see you downloaded our "Make Your Software Dream Team a Reality" ebook. I'd love to learn more about your company and what you do there. What would be the best time for a 15-minute phone call?`,
  cta: 'Call Now',
  footerAddress: 'Company Address',
}, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {...state, ...action.payload}
    default:
      return state;
  }
};
