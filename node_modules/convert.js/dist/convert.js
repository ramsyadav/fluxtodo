(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['convert'] = factory();
  }
}(this, function () {

/*!
 * isoToMilli.js
 */
var convert, _isoToMilli_, _milliToIso_;
_isoToMilli_ = function (require) {
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
}({});
/*!
 * milliToIso.js
 */
_milliToIso_ = function (require) {
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
  return milliToIso;
}({});
/*!
 * convert.js
 */
convert = {
  isoToMilli: _isoToMilli_,
  milliToIso: _milliToIso_
};

return convert;


}));