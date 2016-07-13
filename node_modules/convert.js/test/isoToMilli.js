/*!
 * test/isoToMilli.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var assert = require('proclaim');
var sinon = require('sinon');
var isoToMilli = require('isoToMilli');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('isoToMilli.js', function () {

  it('Should convert iso formatted date to milliseconds since epoch.', function () {
    assert.equal(isoToMilli('1970-01-01T00:00:00.000Z'), 0);
  });

});


});