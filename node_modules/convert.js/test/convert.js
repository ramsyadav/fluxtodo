/*!
 * test/convert.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var assert = require('proclaim');
var sinon = require('sinon');
var convert = require('convert');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('convert.js', function () {

  it('Should expose methods.', function () {
    assert.ok(convert.milliToIso);
    assert.ok(convert.isoToMilli);
  });

});


});