/*!
 * test/_umd.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var assert = require('proclaim');
var convert = require('convert/convert');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('umd - convert.js', function () {

  it('Should expose methods.', function () {
    assert.ok(convert.milliToIso);
    assert.ok(convert.isoToMilli);
  });

});


});