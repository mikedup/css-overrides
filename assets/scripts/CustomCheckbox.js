var Kony_www = Kony_www || {};

Kony_www.CustomCheckbox = (function () {
  "use strict";

  function CustomCheckbox (element) {

    this.element = element;

    this.$element = $(element);

    _init.call(this);
  };

  CustomCheckbox.SELECTORS = {
    IS_CHECKED: 'konyCheckbox_isChecked'
  };

  var _init = function () {
    this.onChange = $.proxy(this.onChange, this);
    this.$element.on('change', this.onChange);
    this.$element.trigger('change');
  };

  /**
   * Define what happens when the 'change' event is triggered on CustomCheckbox.element
   * @param  {Event} e  The 'change' event
   */
  CustomCheckbox.prototype.onChange = function (e) {
    if (e.currentTarget.checked) {
      this.$element.addClass(CustomCheckbox.SELECTORS.IS_CHECKED);
    } else {
      this.$element.removeClass(CustomCheckbox.SELECTORS.IS_CHECKED);
    }

    // Force IE8 to refresh the DOM because otherwise it'll wait until the user moves their cursor to update the checkbox. I'm serious.
    this.$element.hide().show();
  };

  return CustomCheckbox;
}());