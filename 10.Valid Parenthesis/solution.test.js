import { isValid } from "./solution";

test("10. case1", () => {
  const str = "(){}[]";
  expect(isValid(str)).toBe(true);
});
test("10. case2", () => {
  const str = "";
  expect(isValid(str)).toBe(true);
});
test("10. case3", () => {
  const str = "(]";
  expect(isValid(str)).toBe(false);
});
test("10. case4", () => {
  const str = "((((";
  expect(isValid(str)).toBe(false);
});
