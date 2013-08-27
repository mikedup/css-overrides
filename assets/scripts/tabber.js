var Kony_www = Kony_www || {};

Kony_www.Tabber = (function(global, $) {

  /**
   * @constructor
   */
  function Tabber($element, tabSelector, paneSelector, activeTabClass, activePaneClass) {
    this._$element = undefined;
    this._$items = undefined;
    this._$tabs = undefined;
    this._$panes = undefined;
    this._tabClickHandler = undefined;
    this._activeIndex = undefined;
    this._activeTabClass = undefined;
    this._activeTabClass = undefined;
    if ($element
     && tabSelector
     && paneSelector
     && activeTabClass
     && activePaneClass
    ) {
      this.initialize($element, tabSelector, paneSelector, activeTabClass, activePaneClass);
    }
  }

  /**
   * @param {jQuery} $element  The element(s) containing tabs 
   * @param {String} tabSelector
   * @param {String} paneSelector
   * @param {String} activeTabClass
   * @param {String} activePaneClass
   */
  Tabber.prototype.initialize = function($element, tabSelector, paneSelector, activeTabClass, activePaneClass) {
    this._$element = $element;
    this._$items = this._$element.children();
    this._$tabs = $(tabSelector, this._$element);
    this._$panes = $(paneSelector, this._$element);
    this._tabClickHandler = $.proxy(this._handlers.tabClick, this);
    this._activeIndex = null;
    this._activeTabClass = activeTabClass;
    this._activePaneClass = activePaneClass;
  };

  /**
   * Enable the tabber
   */
  Tabber.prototype.enable = function() {
    var $firstPane = this._$panes.eq(0);
    this._$panes.not($firstPane).hide();
    this._$tabs.click(this._tabClickHandler);
    this._$tabs.eq(0).trigger('click');
  };

  /**
   * Disable the tabber
   */
  Tabber.prototype.disable = function() {
    this._$tabs.unbind('click', this._tabClickHandler);
    this._$panes.show();
  };

  /**
   * Stores default event handlers for tabbers
   */
  Tabber.prototype._handlers = {

    tabClick: function(clickEvent) {

      clickEvent.preventDefault();

      var newIndex = this._$tabs.index(clickEvent.currentTarget);
      if (newIndex < 0) {
        return;
      }

      this._$tabs.eq(this._activeIndex).removeClass(this._activeTabClass);
      this._$panes.eq(this._activeIndex).removeClass(this._activePaneClass).hide();

      this._activeIndex = newIndex;

      this._$tabs.eq(this._activeIndex).addClass(this._activeTabClass);
      this._$panes.eq(this._activeIndex).addClass(this._activePaneClass).show();

    },

  };

  return Tabber;

})(window, jQuery);

