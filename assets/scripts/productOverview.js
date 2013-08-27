var Kony_www = Kony_www || {};

Kony_www.ProductOverview = (function(global, $) {

  /**
   * @constructor
   */
  function ProductOverview($element, $hero) {
    this._$element = undefined;
    this._$hero = undefined;
    this._heroClickHandler = undefined;
    this._heroHref = undefined;

    if ($element && $hero) {
      this.initialize($element, $hero);
    }

  }

  /**
   * Initialize the module
   */
  ProductOverview.prototype.initialize = function($element, $hero) {
    this._$element = $element;
    this._$hero = $hero;
    this._heroHref = this._$hero.attr('data-href');
    this._heroClickHandler = this._handlers.heroClick.bind(this);
  };

  /**
   * Enable the module
   */
  ProductOverview.prototype.enable = function() {
    if (this._enabled) {
      return;
    }
    this._$hero.click(this._heroClickHandler);
    this._$hero.css('cursor', 'pointer');
  };

  /**
   * Disable the module
   */
  ProductOverview.prototype.disable = function() {
    if (!this._enabled) {
      return;
    }
    this._$hero.unbind('click', this._heroClickHandler);
    this._$hero.css('cursor', '');
  };

  /**
   * Stores default event handlers
   */
  ProductOverview.prototype._handlers = {

    heroClick: function(clickEvent) {
      clickEvent.preventDefault();
      location.href = this._heroHref;
    },

  };

  return ProductOverview;

})(window, jQuery);


