jQuery(document).ready(function($) {
  $('span.tooltip[title]').tooltip({

    layout: '<div><div class="tooltip-arrow-border"></div>' +
      '<div class="tooltip-arrow"></div></div>',

    delay: 200,

    effect: 'fade',

    onBeforeShow: function(ob, pos) {
      var arrow_left = this.getTrigger().position().left - pos.left + 22;
      this.getTip().find('div.tooltip-arrow').css('left', arrow_left);
      this.getTip().find('div.tooltip-arrow-border').css('left', arrow_left);
    }

  }).dynamic();
});
