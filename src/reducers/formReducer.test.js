import { formReducer } from './formReducer';
import { DefaultState } from '../Templates/DefaultState';

describe("formReducer", () => {

  it("should return the initial state", () => {
    const expected = DefaultState;
    const result = formReducer(undefined, {});
    expect(expected).toEqual(result);
  })

  it("should return the updated state of the form content", () => {
    const expected = {
      companyImage: 'https://via.placeholder.com/150',
      companyName: 'Figma',
      mainImage: 'https://via.placeholder.com/1200x600',
      mainImageTagline: 'Download our new e-book for free!',
      mainImageButtonCopy: 'Free Download',
      mainImageTaglineBG: "#ffffff",
      content: `Happy Easter! And happy birthday to us! 2 years ago, we launched the Darkglass Ultra plugin. Since then we've launched a further 7 plugins. We've got plenty more on our roadmap (s o o n), and we can't wait to show you the Quad Cortex later this year! We'd love to throw a big party, but since nobody can go outside, we're just going to discount all our plugins instead! Get 30% off all plugins until April 18th 00:00 EEST.`,
      cta: 'Call Now',
      footerAddress: 'Company Address',
      footerBGColor: "#ffffff",
      headerBGColor: "#ffffff",
    };

    const result = formReducer(DefaultState, {
      type: "UPDATE", payload: {companyName: "Figma"}
    });
    expect(expected).toEqual(result);
  })

})
