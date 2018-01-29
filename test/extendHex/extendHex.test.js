const test = require('tape');
const extendHex = require('./extendHex.js');

test('Testing extendHex', (t) => {
  //For more information on all the methods supported by tape
  //Please go to https://github.com/substack/tape
  t.true(typeof extendHex === 'function', 'extendHex is a Function');
  t.equal(extendHex('#03f'), '#0033ff', 'Extends a 3-digit color code to a 6-digit color code');
  t.equal(extendHex('05a'), '#0055aa', 'Extends a 3-digit color code to a 6-digit color code');
  //t.deepEqual(extendHex(args..), 'Expected');
  //t.equal(extendHex(args..), 'Expected');
  //t.false(extendHex(args..), 'Expected');
  //t.throws(extendHex(args..), 'Expected');
  t.end();
});