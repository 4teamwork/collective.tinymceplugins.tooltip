Introduction
============


This is a plugin for `TinyMCE`__ editor for Plone.

__ http://plone.org/products/tinymce/

It provides additional toolbar icons for providing a tooltip
on the selected text.

The tooltip is displayed with `jQuery Tools`__

__ http://flowplayer.org/tools/index.html


Installation
============

Install it using buildout with Plone > 4.0::

    [buildout]
    ...

    [instance]
    ...
    eggs +=
        collective.tinymceplugins.tooltip


Install it using buildout with Plone < 4.0::

    [buildout]
    ...

    [instance]
    ...
    eggs +=
        collective.tinymceplugins.tooltip
    zcml +=
        collective.tinymceplugins.tooltip

After running buildout, import collective.tinymceplugins.tooltip
in portal_setup of your site.

When editing a page with TinyMCE, select some text, press the new
tooltip icon and enter a tooltip text. After saving, the text will
appear when hovering the previously selected text.


Credits
=======

Sponsered by `4teamwork`_.

 * `Jonas Baumann`_, author


.. _`4teamwork`: http://www.4teamwork.ch/
.. _`Jonas Baumann`: http://github.com/jone
