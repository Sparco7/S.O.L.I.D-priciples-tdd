import { Square, Cubic, Circle, Ball } from "./Shapes-typescript";

test("show the length of a square of length 5", () => {
  const sq1 = new Square(5);
  expect(sq1.getLegth()).toBe(5);
});

test("show return the length of a square to 5", () => {
  const sq1 = new Square(7);
  expect(sq1.length).toBe(7);
});

test("calculate the correct area of square of 5 length", () => {
  const sq1 = new Square(5);
  expect(sq1.area()).toBe(25);
});

test("calculate the correct volume of square of 5 length", () => {
    const sq1 = new Cubic(5);
    expect(sq1.volume()).toBe(125);
  });

  test("show the radius of a circle of length 5", () => {
    const circ1 = new Circle(5);
    expect(circ1.area()).toBe("78.54");
  });
  
  test("calculate the correct volume of square of 5 length", () => {
      const Bal1 = new Ball(5);
      expect(Bal1.volume()).toBe(523.60);
    });
