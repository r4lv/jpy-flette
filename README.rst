jpy-flette
==========

*jpy-flette* is a lightweight (~150 lines) python static website generator which uses jupyter notebooks as input. It's fantastic for documenting scientific projects, documentation, or just to share your thoughts with the world.

Installation
------------

Download or clone this repository, then run

.. code:: bash

    python3 setup.py install


Usage
-----

Make sure you check the `full documentation <google.de>`_, which is actually built using *jpy-flette* itself!

*jpy-flette* transforms a directory full of ``.ipynb`` jupyter notebooks into a website with multiple pages. Let's assume the following directory structure:

.. code:: text

    ~/my/directory
              └── notebooks
                  ├── 00.index.ipynb
                  └── 01.jpy-flette-documentation.ipynb
    
After calling

.. code:: bash

    jpy-flette ~/my/directory/notebooks

you would obtain

.. code:: text

    ~/my/directory
              ├── docs
              │   ├── index.html
              │   ├── jpy-flette-documentation.html
              │   └── static
              │       ├── style.css
              │       └── script.js
              └── notebooks
                  ├── 00.index.ipynb
                  └── 01.jpy-flette-documentation.ipynb


``~/my/directory/docs`` is then ready to be published!

*jpy-flette* can be configured using ``fletteconf.yaml`` files for *theming*, titles/footers and more. Check the `documentation <google.de>`_!