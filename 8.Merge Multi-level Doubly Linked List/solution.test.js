import { flatten } from "./solution";
// import { flatten } from "./solution2";
import {
  generateThreeLevelList,
  convertListToArray,
  convertListToReverseArray,
  generateVerticalList,
} from "./definition";

const list1 = generateThreeLevelList(2, 1);
const expected1 = [1, 2, 3, [7, 8, [11, 12], 9, 10], 4, 5, 6].flat(Infinity);

const list2 = generateVerticalList(5);
const expected2 = [1, 2, 3, 4, 5];

test("flatten list 1", () => {
  const array = convertListToArray(flatten(list1));
  expect(array).toEqual(expected1);
});
test("flatten list 2", () => {
  const array = convertListToArray(flatten(list2));
  expect(array).toEqual(expected2);
});
