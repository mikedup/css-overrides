/**
 * Use this to force columns to be the same height all the way back to IE8
 */

var Kony_www = Kony_www || {};

Kony_www.EqualColumns = (function () {
  "use strict";

  function EqualColumns (element) {

    this.element = element;

    this.$element = $(element);

    this.$columns = this.$element.find('.' + EqualColumns.SELECTOR.COLUMN);

    _init.call(this);
  };

  EqualColumns.SELECTOR = {
    COLUMN: 'js-equalColumns-col'
  };

  var _init = function () {
    var self = this;
    var heights = $.map(this.$columns, function (element, i) {
      return self.$columns.eq(i).outerHeight();
    });

    var maxHeight = Math.max.apply(null, heights);
    this.$columns.height(maxHeight);
  };

  return EqualColumns;
}());