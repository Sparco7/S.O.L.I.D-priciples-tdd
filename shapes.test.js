import Square from './shapes.js'


// Square Test
test('show return the length of a square to 5', () =>{
    const sq1 = new Square(5)
    expect(sq1.getLegth()).toBe(5)
});

test('show return the length of a square to 5', () =>{
    const sq1 = new Square(7)
    expect(sq1.length).toBe(7)
});


// Circle Test
test('show return the radius of a circle to 8', () =>{
    const sq1 = new Square(8)
    expect(sq1.length).toBe(8)
});