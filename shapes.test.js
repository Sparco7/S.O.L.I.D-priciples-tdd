import Square from './shapes.js'



test('show return the length of a square to 5', () =>{
    const sq1 = new Square(5)
    expect(sq1.getLegth()).toBe(5)
});

test('show return the length of a square to 5', () =>{
    const sq1 = new Square(5)
    expect(sq1.length).toBe(7)
});