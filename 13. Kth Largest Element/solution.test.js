// import quicksortSelect from "./quicksort";
import quicksortSelect from "./quicksortReduceSpace";

test("13. quicksortSelect test 1", () => {
  const num = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  const k = 4;
  const output = 4;
  expect(quicksortSelect(num, k)).toBe(output);
});
test("13. quicksortSelect test 2", () => {
  const num = [3, 2, 1, 4, 5, 6];
  const k = 4;
  const output = 3;
  expect(quicksortSelect(num, k)).toBe(output);
});
test("13. quicksortSelect test 3", () => {
  const num = [1, 1, 1, 1, 1, 1, 1];
  const k = 4;
  const output = 1;
  expect(quicksortSelect(num, k)).toBe(output);
});
test("13. quicksortSelect test 4", () => {
  const num = [1, 2];
  const k = 2;
  const output = 1;
  expect(quicksortSelect(num, k)).toBe(output);
});
