/**
 * Turns an element into an accordion
 */

var Kony_www = Kony_www || {};

Kony_www.Accordion = (function () {
  "use strict";

  function Accordion (element) {

    this.element = element;

    this.$element = $(element);

    this.$heading = this.$element.find('.' + Accordion.SELECTOR.HEADING);

    this.$section = this.$element.find('.' + Accordion.SELECTOR.SECTION);

    this.isExpanded = false;

    _init.call(this);
  };

  Accordion.SELECTOR = {
    HEADING: 'js-accordion-heading',
    SECTION: 'js-accordion-section'
  };

  /**
   * Initialize an accordion, meant to be used with Function.call
   * @private
   */
  var _init = function () {
    this.$section.css({
      height: 0,
      opacity: 0,
      overflow: 'hidden'
    });

    this.onHeadingClick = $.proxy(this.onHeadingClick, this);
    this.enable();

    if (this.element.id === window.location.hash.slice(1)) {
      this.toggle();
    }
  };

  /**
   * Prevents the object from creating a new object every time it's shown or hid
   * @type {Object}
   * @private
   */
  var _animationProperties = {
    height: 0,
    opacity: 0
  };

  /**
   * Describes what happens when the heading is clicked
   * @param  {Event} e  The click event
   */
  Accordion.prototype.onHeadingClick = function (e) {
    e.preventDefault();
    this.toggle();
  };

  /**
   * Open or close the accordion
   * @return {Accordion}
   */
  Accordion.prototype.toggle = function () {
    if (this.isExpanded === false) {
      var currentHeight = this.$section.height();
      _animationProperties.height = this.$section.height('auto').height();
      _animationProperties.opacity = 1;
      this.$section.height(currentHeight);

      var id = this.element.id;
      this.element.id = '';
      window.location.hash = id;
      this.element.id = id;

    } else {
      _animationProperties.height = 0;
      _animationProperties.opacity = 0;
    }
    this.$section.stop().animate(_animationProperties);
    this.isExpanded = !this.isExpanded;
    return this;
  };

  /**
   * Enable's the accordion's controls
   * @return {Accordion}
   */
  Accordion.prototype.enable = function () {
    this.$heading.on('click', this.onHeadingClick);
    return this;
  };

  return Accordion;
}());