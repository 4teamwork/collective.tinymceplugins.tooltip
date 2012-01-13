jQuery(document).ready(function($) {

  // create custom tooltip effect for jQuery Tooltip
  $.tools.tooltip.addEffect(
    "tooltip_with_arrow",

    // opening animation
    function(done) {
      this.getTip().fadeIn();
      var trigger_left = this.getTrigger().offset().left;
      var trigger_width = this.getTrigger().width();
      var tip_left = this.getTip().offset().left;
      var arrow_left = trigger_left - tip_left + (trigger_width / 2);
      this.getTip().find('div.tooltip-arrow').css('left', arrow_left);
      this.getTip().find('div.tooltip-arrow-border').css('left', arrow_left);
    },

    // closing animation
    function(done) {
      this.getTip().fadeOut();
      done.call();
    }
  );

  $('span.tooltip[title]').tooltip({

    layout: '<div><div class="tooltip-arrow-border"></div>' +
      '<div class="tooltip-arrow"></div></div>',
    delay: 200,
    effect: 'tooltip_with_arrow',
  });
});
