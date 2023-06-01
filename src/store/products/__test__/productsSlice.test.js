import productsSlice, { initialState } from "../productsSlice";

describe("tests for productsSlice", () => {
  test("initialize slice with initialValue", () => {
    const productsSliceInit = productsSlice(initialState, { type: "unknown" });
    expect(productsSliceInit).toBe(initialState);
  });
});