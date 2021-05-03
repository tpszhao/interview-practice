// import quickSelect from "./quicksort";
// import quickSelect from "./quicksortReduceSpace";
import quickSelect from "./hoareQuickselect";

test("13. quickSelect test 1", () => {
  const num = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  const k = 4;
  const output = 4;
  expect(quickSelect(num, k)).toBe(output);
});
test("13. quickSelect test 2", () => {
  const num = [3, 2, 1, 4, 5, 6];
  const k = 4;
  const output = 3;
  expect(quickSelect(num, k)).toBe(output);
});
test("13. quickSelect test 3", () => {
  const num = [1, 1, 1, 1, 1, 1, 1];
  const k = 4;
  const output = 1;
  expect(quickSelect(num, k)).toBe(output);
});
test("13. quickSelect test 4", () => {
  const num = [1, 2];
  const k = 2;
  const output = 1;
  expect(quickSelect(num, k)).toBe(output);
});
test("13. quickSelect test 5", () => {
  const num = [2, 1];
  const k = 2;
  const output = 1;
  expect(quickSelect(num, k)).toBe(output);
});
