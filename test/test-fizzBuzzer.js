const fizzBuzzer = require('../fizzBuzzer');
const should = require('chai').should();

describe('fizzBuzzer', function(){

  // Test non numeric input
  it('should should raise error if arg is not a number', function(){
    const nonNumericInputs = [
      'a',
      undefined,
      null,
      true,
      {a: 0}
    ];

    nonNumericInputs.forEach(input=>{
      (function(){
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });

  // Test fizz-buzz
  it('should return fizz-buzz', function(){
    const fizzBuzzInputs = [15,30,45,60,90];

    fizzBuzzInputs.forEach(input=>{
        fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  // Test buzz
  it('should return buzz', function(){
    const buzzInputs = [5, 10, 20, 25, 35];
    buzzInputs.forEach(input=>{
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  // Test Fizz
  it('should return fizz', () =>{
    const fizzInputs = [3, 6, 9, 12, 18, 21];
    fizzInputs.forEach(input => {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

});