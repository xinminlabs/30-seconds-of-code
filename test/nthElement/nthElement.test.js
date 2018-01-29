const test = require('tape');
const nthElement = require('./nthElement.js');

test('Testing nthElement', (t) => {
  //For more information on all the methods supported by tape
  //Please go to https://github.com/substack/tape
  t.true(typeof nthElement === 'function', 'nthElement is a Function');
  t.equal(nthElement(['a', 'b', 'c'], 1), 'b', 'Returns the nth element of an array.');
  t.equal(nthElement(['a', 'b', 'c'], -3), 'a', 'Returns the nth element of an array.');
  //t.deepEqual(nthElement(args..), 'Expected');
  //t.equal(nthElement(args..), 'Expected');
  //t.false(nthElement(args..), 'Expected');
  //t.throws(nthElement(args..), 'Expected');
  t.end();
});