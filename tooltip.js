;(function ($) {

  $('.tooltip').on('mouseenter', function (e) {
    var tooltip = $('<span>' + e.target.attributes['data-tooltip'].value + '</span>');

    tooltip.appendTo(this).hide().fadeIn('slow');

    $(this).on('mouseleave', function () {
      $(this).find('span').fadeOut('slow');
    });
  });

})(jQuery);