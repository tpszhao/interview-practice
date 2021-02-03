import { minRemoveToMakeValid } from "./solution";

test("11. first test no removal", () => {
  const str = "()()()()()";
  expect(minRemoveToMakeValid(str)).toBe(str);
});
test("11. second test remove closing", () => {
  const str = "asd)(aa)";
  expect(minRemoveToMakeValid(str)).toBe("asd(aa)");
});
test("11. third test remove opening", () => {
  const str = "asdf(aa)(";
  expect(minRemoveToMakeValid(str)).toBe("asdf(aa)");
});
test("11. fourth test remove all", () => {
  const str = ")))(((";
  expect(minRemoveToMakeValid(str)).toBe("");
});
