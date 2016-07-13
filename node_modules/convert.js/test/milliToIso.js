/*!
 * test/milliToIso.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var assert = require('proclaim');
var sinon = require('sinon');
var milliToIso = require('milliToIso');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('milliToIso.js', function () {

  it('Should convert milliseconds since epoch to iso formatted date.', function () {
    assert.equal(milliToIso(0), '1970-01-01T00:00:00.000Z');
  });

});


});