/*!
 * isoToMilli.js
 */


define(function (require) {


/* -----------------------------------------------------------------------------
 * isoToMilli
 * ---------------------------------------------------------------------------*/

/**
 * @public
 * @memberof convert
 *
 * @desc Convert iso formatted date to milliseconds since epoch.
 *
 * @example
 * convert.isoToMilli('1970-01-01T00:00:00.000Z')
 * // 0
 *
 * @param {string} isoString - ISO formatted date string.
 */
var isoToMilli = function (isoString) {
  var date = new Date(isoString);
  return date.getTime();
};


/* -----------------------------------------------------------------------------
 * expose
 * ---------------------------------------------------------------------------*/

return isoToMilli;


});