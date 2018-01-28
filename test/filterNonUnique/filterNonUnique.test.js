const test = require('tape');
const filterNonUnique = require('./filterNonUnique.js');

test('Testing filterNonUnique', (t) => {
  //For more information on all the methods supported by tape
  //Please go to https://github.com/substack/tape
  t.true(typeof filterNonUnique === 'function', 'filterNonUnique is a Function');
  t.deepEqual(filterNonUnique([1, 2, 2, 3, 4, 4, 5]), [1,3,5], 'Filters out the non-unique values in an array');
  //t.deepEqual(filterNonUnique(args..), 'Expected');
  //t.equal(filterNonUnique(args..), 'Expected');
  //t.false(filterNonUnique(args..), 'Expected');
  //t.throws(filterNonUnique(args..), 'Expected');
  t.end();
});