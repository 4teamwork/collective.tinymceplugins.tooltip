/**
 * TinyMCE tooltip plugin
 */

(function() {
  tinymce.create('tinymce.plugins.Tooltip', {
    init : function(ed, url) {
      this.editor = ed;

      // Register commands
      ed.addCommand('mceTooltip', function() {
        var se = ed.selection;

        var span = ed.dom.getParent(ed.selection.getNode(), 'span');
        var within_tooltip = (span && span.getAttribute(
          'class') && span.getAttribute('class').indexOf('tooltip') > -1);
        if (se.isCollapsed() && !within_tooltip) {
          return;
        }

        ed.windowManager.open({
          file : url + '/tooltip.htm',
          width : 320 + parseInt(
            ed.getLang('advanced.anchor_delta_width', 0), 10),
          height : 90 + parseInt(
            ed.getLang('advanced.anchor_delta_height', 0), 10),
          inline : 1
        }, {
          plugin_url : url
        });
      });

      // Register buttons
      ed.addButton('tinymce_tooltip', {
        title : 'advanced.tooltip_desc',
        cmd : 'mceTooltip',
        image: url + '/img/tooltip.gif'
      });

      ed.onNodeChange.add(function(ed, cm, n, co) {
        cm.setDisabled('tinymce_tooltip', co && n.nodeName != 'span');
        cm.setActive('tinymce_tooltip', n.nodeName == 'span' && !n.title);

        var selecting = !co;
        var span = ed.dom.getParent(ed.selection.getNode(), 'span');
        if (span) {
          var enabled = (span.getAttribute('class') &&
                          span.getAttribute('class').indexOf('tooltip') > -1);

          cm.setActive('tinymce_tooltip', enabled);
          cm.setDisabled('tinymce_tooltip', !enabled && !selecting);
        }
      });
    },

    getInfo : function() {
      return {
        longname : 'tooltip plugin',
        author : 'jone',
        authorurl : 'http://www.4teamwork.ch/',
        infourl : 'http://github.com/4teamwork/collective.tinymceplugins.tooltip',
        version : tinymce.majorVersion + "." + tinymce.minorVersion
      };
    }
  });

  // Register plugin
  tinymce.PluginManager.add('tinymce_tooltip', tinymce.plugins.Tooltip);
})();
