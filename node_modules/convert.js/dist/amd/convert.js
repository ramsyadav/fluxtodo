/*!
 * convert.js
 */


define(function (require) {


/* -----------------------------------------------------------------------------
 * convert
 * ---------------------------------------------------------------------------*/

/**
 * @global
 * @public
 * @namespace convert
 *
 * @desc Utility methods to convert between various date formats.
 */
return {
  isoToMilli: require('./isoToMilli'),
  milliToIso: require('./milliToIso')
};


});