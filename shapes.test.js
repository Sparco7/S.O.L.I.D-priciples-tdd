import {Square} from "./shapes.js";
import {Circle} from "./shapes.js";
import {AreaCalculator} from "./shapes.js";
import {SquareWithArea} from "./shapes.js";
import {CircleWithArea} from "./shapes.js";

// Square Test
test("show return the length of a square to 5", () => {
  const sq1 = new Square(5);
  expect(sq1.getLegth()).toBe(5);
});

test("show return the length of a square to 5", () => {
  const sq2 = new Square(7);
  expect(sq2.length).toBe(7);
});

// Circle Test
test("show return the radius of a circle to 8", () => {
  const circle1 = new Circle(8);
  expect(circle1.radius).toBe(8);
});

// AreaCalculator Test 
test("calculates the area of different shapes(square and circle)", () => {
    const shapes = [new Circle(5), new Square(7)]
    let areaCalc = new AreaCalculator(shapes)
    expect(areaCalc.sum()).toBe("127.54");
  });

// SquareWithArea
test("shows the return area of a square", () => {
    const sq3 = new SquareWithArea(4)
    expect(sq3.area()).toBe(16);
  });

 // CircleWithArea
 test("shows the return area of a circle", () => {
    const circle3 = new CircleWithArea(6)
    expect(circle3.area()).toBe("113.10");
  });