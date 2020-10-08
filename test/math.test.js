/*jshint esversion: 6 */
const { add, multiply, subtract, divide, toThePowerOf } = require('../src/math');

test('adds 1 + 2 to equal 12', () => {
    expect(add(10, 2)).toBe(12);
});
test('adds 0 + -6 to equal -6', () => {
    expect(add(0, -6)).toBe(-6);
});
test('multiplies 2 * 5 to equal 10', () => {
    expect(multiply(2, 5)).toBe(10);
});
test('multiplies 4 * 13 to equal 52 (fails)', () => {
    expect(multiply(4, 13)).toBe(52);
});
test('subtracts 4 + 3 to equal 1', () => {
    expect(subtract(4,3)).toBe(1);
});
test('divides 10 + 2 to equal 5', () => {
    expect(divide(10,2)).toBe(5);
});
test('toThePowerOf 3 ** 2 to equal 9', () => {
    expect(toThePowerOf(3,2)).toBe(9);
});
test('toThePowerOf 4 ** 3 to equal 64', () => {
    expect(toThePowerOf(4,3)).toBe(64);
});