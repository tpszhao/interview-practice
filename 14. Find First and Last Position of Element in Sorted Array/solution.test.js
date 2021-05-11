// import searchRange from "./solution";
import searchRange from "./fasterSolution";

test("14. searchRange test 1", () => {
  const num = [1, 2, 3, 4];
  const k = 4;
  const output = [3, 3];
  expect(searchRange(num, k)).toStrictEqual(output);
});
test("14. searchRange test 2", () => {
  const num = [1, 2, 3, 4];
  const k = 5;
  const output = [-1, -1];
  expect(searchRange(num, k)).toStrictEqual(output);
});
test("14. searchRange test 3", () => {
  const num = [];
  const k = 5;
  const output = [-1, -1];
  expect(searchRange(num, k)).toStrictEqual(output);
});
