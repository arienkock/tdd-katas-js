/* 
http://codingdojo.org/kata/FizzBuzz/
*/
const fizzbuzz = require('./fizzbuzz')
describe("fizzbuzz", () => {
    it("does stuff", () => {
        expect(fizzbuzz(5)).toBe([
            1,
            2,
            'Fizz',
            4,
            'Buzz',
            'Fizz',
            7,
            8,
            'Fizz',
            'Buzz',
            11,
            'Fizz',
            13,
            14,
            'FizzBuzz',
        ])
    })
})