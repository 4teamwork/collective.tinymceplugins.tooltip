from setuptools import setup, find_packages
import os

version = '1.0-dev'

setup(name='collective.tinymceplugins.tooltip',
      version=version,
      description="TinyMCE plugin for creating tooltips on text",
      long_description=open("README.rst").read() + "\n" + \
          open(os.path.join("docs", "HISTORY.txt")).read(),

      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        "Programming Language :: JavaScript",
        ],

      keywords='tinymce plugin tooltip',
      author='Jonas Baumann, 4teamwork.ch',
      author_email='mailto:info@4teamwork.ch',

      url='http://github.com/4teamwork/collective.tinymceplugins.tooltip',
      license='GPL2',

      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['collective', 'collective.tinymceplugins'],
      include_package_data=True,
      zip_safe=False,

      install_requires=[
        'setuptools',
        'Products.TinyMCE',
        'plone.app.jquerytools',
        ],

      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
