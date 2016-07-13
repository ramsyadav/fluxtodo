/*!
 * milliToIso.js
 */





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
 * convert.isoToMilli()
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

module.exports = milliToIso;


