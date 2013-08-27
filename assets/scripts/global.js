var Kony_www = Kony_www || {};

$(function () {

  var tabber = new Kony_www.Tabber(
    $('.tabber'),
    '.tabber-tabs-tab',
    '.tabber-panes-pane',
    'tabber-tabs-tab_isActive',
    'tabber-panes-pane_isActive'
  );
  tabber.enable();

  var $modal = $('.modal').eq(0);
  var modal = new Kony_www.Modal(
    $modal,
    $('.modal-content', $modal),
    $('.modal-fg-close', $modal)
    );
  modal.enable();
  window.Kony_www.modal = modal;


  $('.js-customCheckbox').each(function (i, element) {
    new Kony_www.CustomCheckbox(element);
  });

  /* TODO: This will have to be integrated when we build out the customer tile behavior */
  var $activeBlocks = $('.blocks-block_isActive');
  $activeBlocks.each(function (i, element) {
    var $activeBlock = $activeBlocks.eq(i);
    var $notched = $activeBlock.find('.notched').show();
    var height = $notched.find('.notched-content').outerHeight();
    $notched.css({ marginBottom: height });
  });

});

// We need to wait for the window.load event since we need the fonts to finish loading
$(window).on('load', function () {

  $('.js-equalColumns').each(function (i, element) {
    new Kony_www.EqualColumns(element);
  });

  $('.js-accordion').each(function (i, element) {
    new Kony_www.Accordion(element);
  });

});

 
$(document).ready(function() {

  /* Mobile navigation dropdown */
  $('i[data-js="nav-dropdown"]').click(function() {
    $(this).toggleClass('active');
    $('.navPrimary').toggleClass('open');
    $('.navPrimary-list-item').removeClass('open');
  });
  $('.navPrimary-link').click(function() {
    if ($(this).parent('.navPrimary-list-item').hasClass('open')) {
      $('.navPrimary-list-item').removeClass('open');
    } else {
      $('.navPrimary-list-item').removeClass('open');
      $(this).parent().addClass('open');
    }
  });

  /* Slideshow (Flexslider 2) */
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    manualControls: ".flex-control-nav li",
  });
});
