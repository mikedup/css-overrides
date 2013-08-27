var Kony_www = Kony_www || {};

Kony_www.Modal = (function(global, $) {

  /**
   * @constant  The number of milliseconds it should take for the modal to fade in/out.
   */
  var MODAL_FADE_MILLISECONDS = 0;

  /**
   * @constructor
   * @param $element {$}  The outermost modal element.
   * @param $content {$}  The element of the modal whose content changes.
   * @param $close {$}  An element that closes the modal when clicked.
   * @param $initialContent {String}  Content to populate the modal with on initialization.
   */
  function Modal($element, $content, $close, initialContent) {
    this._enabled = false;
    this._$element = undefined;
    this._$content = undefined;
    this._$close = undefined;
    this._closeClickHandler = undefined;

    if ($element && $content) {
      this.initialize($element, $content, $close, initialContent);
    }

  }

  /**
   * @constructor
   * @param $element {$}  Required. The outermost modal element.
   * @param $content {$}  Required. The element of the modal whose content changes.
   * @param $close {$}  Optional. An element that closes the modal when clicked.
   * @param $initialContent {String}  Optional. Content to populate the modal with on initialization.
   */
  Modal.prototype.initialize = function($element, $content, $close, initialContent) {
    this._$element = $element;
    this._$content = $content;
    this._$close = $close;
    this._closeClickHandler = $.proxy(this._handlers.closeClick, this);

    if (initialContent) {
      this.setContent(initialContent);
    }

  };

  /**
   * Enables the modal
   */
  Modal.prototype.enable = function() {
    if (this._enabled) {
      return;
    }

    this._enabled = true;
    if (this._$close) {
      this._$close.click(this._closeClickHandler);
    }

  };

  /**
   * Disables the modal
   */
  Modal.prototype.disable = function() {
    if (!this._enabled) {
      return;
    }

    this._enabled = false;
    this._$close.unbind('click', this._closeClickHandler);

  };

  /**
   * @constructor
   */
  Modal.prototype.setContent = function(content) {
    this._$content.html(content);
    return this;
  };

  /**
   * Show the modal.
   * @param content {String}  Optional. Content to populate the modal with before the modal is made visible.
   */
  Modal.prototype.show = function(milliseconds, content) {
    if (!this._enabled) {
      return;
    }

    if (content) {
      this.setContent(content);
    }

    this._$element.show(MODAL_FADE_MILLISECONDS);
    return this;

  };

  /**
   * Hide the modal.
   */
  Modal.prototype.hide = function() {
    if (!this._enabled) {
      return;
    }

    this._$element.fadeOut(MODAL_FADE_MILLISECONDS);
    return this;

  };

  /**
   * Object that holds references to default event handlers for the Modal module.
   */
  Modal.prototype._handlers = {
    closeClick: function(clickEvent) {
      this.hide();
    }
  };

  return Modal;

})(window, jQuery);

