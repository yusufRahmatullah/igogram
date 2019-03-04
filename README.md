# WikipedIGO-lang Firefox Extension

This is a Firefox extension to check whether an Instagram ID has been added to [Wikipedigolang](https://wikipedigolang.herokuapp.com). Currently, it will check the IG ID and add `added` or `not added` after its username (h1 HTML Tag).

## Installation

First, download this repository and install `web-ext` tools by run `npm install --global web-ext` (maybe you require `sudo` at the first).

Build extension by run `web-ext build`. This command will create `web-ext-artifacts` directory which contains extension file `igogram-<version>.zip`.

To install this extension in local, you should turn off (set as `false`) the `xpinstall.signatures.required` config on `about:config` in Firefox.

Add extension to Firefox by access the `about:addons` page, choose the settings (gear) icon, and choose `Install Add-on From File...`

Choose the corresponding file (`igogram-<version>.zip`).