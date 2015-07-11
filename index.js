/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project falseOrValue
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Returns the supplied value or false.
 * @module index
 */

module.exports = function(a){
  if(a === false ||
     a === 'false' ||
     a == null || // Checks for null and undefined
     a !== a ||   // checks for NaN
     a === "" ||
     a === ''){ return false }

  var s = {}.toString.call(a);
  // Empty array.
  if(s === '[object Array]' && a.length === 0){ return false }

  if(s === '[object Object]' && Object.keys(a).length === 0) { return false }

  return a
};

