# 2017
SITCON 2017

## Requirement

* [Node.js v6 (or up)](https://nodejs.org/)
* [NPM v3](https://www.npmjs.com/)
* [Gulp v3](http://gulpjs.com/)

Latest Version

```sh
$ brew install node
$ node -v
v7.3.0
```

Version 6 LTS

```sh
$ brew tap homebrew/versions
$ brew install node6-lts
v6.9.1
```

Update NPM

```sh
$ npm install --global npm
$ npm -v
3.10.9
```

Install Gulp.js

```sh
$ npm install --global gulp
$ gulp -v
[15:26:14] CLI version 3.9.1
[15:26:14] Local version 3.9.1
```

## Development

* `npm start`
    - `npm install`: Install dependencies.
    - `gulp`: Build the website.
* `gulp watch`: Work with live reload.
* `npm run preview`: Build in production mode with live reload.

> Use `ctrl + c` to end the live reload process.

## Production

* `npm run build`

Push all the files in `public/` to `gh-pages` branch.

## Uninstallation

* Uninstall Gulp.js: `npm uninstall --global gulp`
* Clean up NPM cache: `npm cache clean`
* Uninstall Node.js: `brew uninstall node` or `brew uninstall node-6-lts`
* Remove all node modules: `rm -rf node_modules` and `rm -rf /usr/local/lib/node_modules`
