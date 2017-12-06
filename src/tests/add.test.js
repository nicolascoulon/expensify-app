// npm test -- --watch


const add = (a, b) => a + b;
const generateGreeting = (name) => `hello ${name}!!!`;  

test('should add two numbers', () => {
const result = add(3, 4);
expect(result).toBe(7);
});

test('should generate greeting from a name', () => {
    const result = generateGreeting('mike');
    expect(result).toBe('hello mike!!!');
});
