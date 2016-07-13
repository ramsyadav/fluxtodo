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
 * convert.isoToMilli()
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