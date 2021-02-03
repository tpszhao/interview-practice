import { createList } from "./definition";
import { detectCycle } from "./solution";

test("cycle in list", () => {
  const list = [1, 2, 3, 4, 5];
  const linkedList = createList(list, 1);
  const node = detectCycle(linkedList);
  expect(node.value).toEqual(2);
});

test("cycle in second list", () => {
  const list = [1, 2, 3, 4, 5];
  const linkedList = createList(list, 3);
  const node = detectCycle(linkedList);
  expect(node.value).toEqual(4);
});

test("cycle starts at head", () => {
  const list = [1, 2, 3, 4, 5];
  const linkedList = createList(list, 0);
  const node = detectCycle(linkedList);
  expect(node.value).toEqual(1);
});

test("cycle in empty list", () => {
  const list = [];
  const linkedList = createList(list);
  const node = detectCycle(linkedList);
  expect(node).toEqual(null);
});
test("cycle in single element list", () => {
  const list = [1];
  const linkedList = createList(list);
  const node = detectCycle(linkedList);
  expect(node).toEqual(null);
});
