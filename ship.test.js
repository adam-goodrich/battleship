const Ship = require("./ship");

const Battleship = Ship("Battleship", [0, 0, 0, 0]);

test("BattleShip has a name", () => {
  expect(Battleship.shipName()).toBe("Battleship");
});

test("Battleship length is 4", () => {
  expect(Battleship.shipLength()).toBe(4);
});

test("Battleship was hit", () => {
  expect(Battleship.hit(0)).toBe("Ship was hit");
});

test("Hitting same spot twice causes error", () => {
  const alreadyHit = () => Battleship.hit(0);
  expect(alreadyHit).toThrow("You already hit that spot");
});

test("index is not a number", () => {
  const mustBeNum = () => Battleship.hit("HI");
  expect(mustBeNum).toThrow("Index must be a number");
});

test("hit index needs to be in bounds", () => {
  const outOfBounds = () => Battleship.hit(5);
  expect(outOfBounds).toThrow("Index out of bounds");
});

test("ship is sunk", () => {
  Battleship.hit(1);
  Battleship.hit(2);
  Battleship.hit(3);
  expect(Battleship.isSunk()).toBe(true);
});

const Destroyer = Ship("Destroyer", [0, 0, 0]);

test("ship is not sunk", () => {
  Destroyer.hit(0);
  Destroyer.hit(1);
  expect(Destroyer.isSunk()).toBe(false);
});

test("Destroyer length is 3", () => {
  expect(Destroyer.shipLength()).toBe(3);
});

test("Destroyer was hit", () => {
  expect(Destroyer.hit(2)).toBe("Ship was hit");
});

test("Destroyer is sunk", () => {
  expect(Destroyer.isSunk()).toBe(true);
});
