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

                // No selection and not in link
                if (se.isCollapsed() && !ed.dom.getParent(se.getNode(), 'A'))
                    return;

                ed.windowManager.open({
                    file : url + '/tooltip.htm',
                    width : 820 + parseInt(
                      ed.getLang('plonelink.delta_width', 0), 10),
                    height : 500 + parseInt(
                      ed.getLang('plonelink.delta_height', 0), 10),
                    inline : 1
                }, {
                    plugin_url : url
                });
            });

            // Register buttons
            ed.addButton('link', {
                title : 'advanced.tooltip_desc',
                cmd : 'mceTooltip'
            });

            ed.addShortcut('', 'advanced.tooltip_desc', 'mceTooltip');

            // ed.onNodeChange.add(function(ed, cm, n, co) {
            //     cm.setDisabled('link', co && n.nodeName != 'A');
            //     cm.setActive('link', n.nodeName == 'A' && !n.name);
            // });
        },

        getInfo : function() {
            return {
                longname : 'tooltip plugin',
                author : 'jone',
                authorurl : 'http://www.4teamwokr.ch/',
                infourl : 'http://github.com/4teamwork/collective.tinymceplugins.tooltip',
                version : tinymce.majorVersion + "." + tinymce.minorVersion
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('tooltip', tinymce.plugins.PloneLinkPlugin);
})();
