import { getShift, getRectPoint } from "./arrows";

test("shift from start", () => {
  expect(getShift("start", 3)).toBe(0);
});

test("shift from center", () => {
  expect(getShift("center", 6)).toBe(3);
});

test("shift from center", () => {
  expect(getShift("end", 4)).toBe(4);
});

const mockElement = {
  coords: {
    x: 60,
    y: 60
  },
  size: {
    width: 80,
    height: 70
  }
};

test("get shifted rect point", () => {
  expect(getRectPoint(mockElement)).toEqual({ x: 100, y: 60 });
});
