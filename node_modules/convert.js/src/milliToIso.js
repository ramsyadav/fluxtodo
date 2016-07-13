/*!
 * milliToIso.js
 */


define(function (require) {


/* -----------------------------------------------------------------------------
 * milliToIso
 * ---------------------------------------------------------------------------*/

/**
 * @public
 * @memberof convert
 *
 * @desc Convert milliseconds since epoch to iso formatted date.
 *
 * @example
 * convert.milliToIso(0)
 * // '1970-01-01T00:00:00.000Z'
 *
 * @param {integer|string} milliseconds - milliseconds since epoch.
 */
var milliToIso = function (milliseconds) {
  var date = new Date(parseFloat(milliseconds));
  return date.toISOString();
};


/* -----------------------------------------------------------------------------
 * expose
 * ---------------------------------------------------------------------------*/

return milliToIso;


});