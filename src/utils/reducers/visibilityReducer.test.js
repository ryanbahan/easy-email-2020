import { visibilityReducer } from './visibilityReducer';
import { DefaultVisibilityState } from '../Templates/DefaultVisibilityState';

describe("visibilityReducer", () => {

  it("should return the initial state", () => {
    const expected = DefaultVisibilityState;
    const result = visibilityReducer(undefined, {});
    expect(expected).toEqual(result);
  })

  it("should return the updated visibility state on TOGGLE_VISIBILITY", () => {
    const expected = {
      "Header": false,
      "Main Image": true,
      "Image Tagline": true,
      "Main Content": true,
      "Footer": true,
    }
    const result = visibilityReducer(DefaultVisibilityState, {
      type: "TOGGLE_VISIBILITY", payload: {"Header": false}
    });
    expect(expected).toEqual(result);
  })

})
