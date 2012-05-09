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



Links
=====

- Main github project repository: https://github.com/4teamwork/collective.tinymceplugins.tooltip
- Issue tracker: https://github.com/4teamwork/collective.tinymceplugins.tooltip/issues
- Package on pypi: http://pypi.python.org/pypi/collective.tinymceplugins.tooltip


Copyright
=========

This package is copyright by `4teamwork <http://www.4teamwork.ch/>`_.

``collective.tinymceplugins.tooltip`` is licensed under GNU General Public License, version 2.
