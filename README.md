# open-npm-link

> Open the npm link for the package

<p>
  <a href="https://www.npmjs.com/package/open-npm-link">
    <img src="https://img.shields.io/npm/v/open-npm-link.svg" alt="Version" />
  </a>
  <a href="https://github.com/yyz945947732/open-npm-link/pulls">
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs Welcome"
    />
  </a>
  <a href="https://github.com/yyz945947732/open-npm-link/blob/master/LICENSE">
    <img
      src="https://img.shields.io/badge/license-MIT-blue.svg"
      alt="GitHub license"
    />
  </a>
</p>

This is meant to be used in command-line tools and scripts, not in the browser.

## Install

```bash
npm install --save open-npm-link
```

**Warning:** This package is native [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and no longer provides a CommonJS export. If your project uses CommonJS, you will have to [convert to ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) or use the [dynamic `import()`](https://v8.dev/features/dynamic-import) function. Please don't open issues for questions regarding CommonJS / ESM.

## Usage

```js
import open from 'open-npm-link';

// Opens the react npm link in the default browser.
await open('lodash');

// Opens the react npm link in the specified browser.
await open('lodash', 'chrome');
```

### API

```js
function(packageName?: string, browser?: string): string;
```

## Supported browser

- [`chrome`](https://www.google.com/chrome) - Web browser
- [`firefox`](https://www.mozilla.org/firefox) - Web browser
- [`edge`](https://www.microsoft.com/edge) - Web browser
- `browser` - Default web browser
- `browserPrivate` - Default web browser in incognito mode

`browser` and `browserPrivate` only supports `chrome`, `firefox`, and `edge`.

## Related

- [open-npm-link-cli](https://github.com/yyz945947732/open-npm-link-cli) - CLI for this module

## LICENSE

[MIT](https://github.com/yyz945947732/open-npm-link/blob/master/LICENSE)

---

This project is created using [generator-stupid](https://github.com/yyz945947732/generator-stupid).
