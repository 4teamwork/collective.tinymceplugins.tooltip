
var TooltipDialog = {
  init : function(mcePopup) {
    var action, elm, f = document.forms[0];

    this.tinyMCEPopup = mcePopup;
    this.editor = mcePopup.editor;
    elm = ed.dom.getParent(ed.selection.getNode(), 'span');
    v = ed.dom.getAttrib(elm, 'title');

    if (v) {
      this.action = 'update';
      f.tooltipName.value = v;
    }

    f.insert.value = ed.getLang(elm ? 'update' : 'insert');
  },

  update : function() {
    var ed = this.editor, elm, tooltip = document.forms[0].tooltipName.value;

    this.tinyMCEPopup.restoreSelection();

    elm = ed.dom.getParent(ed.selection.getNode(), 'span');

    /* if no tooltip text is defined and there was / is a
       tooltip span, remove the span */
    if (!tooltip) {
      if (elm) {
        b = ed.selection.getBookmark();
        ed.dom.remove(elm, 1);
        ed.selection.moveToBookmark(b);
        this.tinyMCEPopup.execCommand("mceEndUndoLevel");
        this.tinyMCEPopup.close();
        return;
      }
    }

    if (elm) {
      /* update the tooltip title */
      elm.title = tooltip;

      /* add the tooltip class if missing. this happens when there
         already was a span tag */
      if (!elm.getAttribute('class')) {
        elm.setAttribute('class', 'tooltip');
      } else if (elm.getAttribute('tooltip') == -1) {
        elm.setAttribute('class', elm.getAttribute('class') + ' tooltip');
      }

    } else {
      /* create a new span tag around the selected text */
      ed.execCommand('mceInsertContent', 0,
                     ed.dom.createHTML(
                       'span', {title: tooltip,
                                'class' : 'tooltip'},
                       ed.selection.getContent({format : 'text'})));
    }

    this.tinyMCEPopup.close();
  }
};

this.tinyMCEPopup.onInit.add(TooltipDialog.init, TooltipDialog);
