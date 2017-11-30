# emoji-rate

<p align="center">
  <a href="https://jsfiddle.net/fireyy/q1c2zcya/" target="_blank">
    <img src="demo.png" width="213">
    <br>
    Live Demo
  </a>
</p>

> Emoji rate component.

- Idea from [Alipay](https://alipay.com)
- Emoji from [EmojiOne™ 2](https://emojitwo.github.io/)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save emoji-rate
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import emojiRate from 'emoji-rate'

// using CommonJS modules
var emojiRate = require('emoji-rate')
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="//unpkg.com/emoji-rate/dist/emoji-rate.cjs.js"></script>
```

This exposes the `emojiRate()` function as a global.

* * *

## Usage

```js
import emojiRate from 'emoji-rate'

emojiRate('.emoji-rate', {
  size: 30
})
```

## Examples & Demos

[**Real Example on JSFiddle**](https://jsfiddle.net/fireyy/q1c2zcya/) ➡️

## API

Emoji-rate's API is organized as follows:

### `emojiRate(el: String|Element, options: Object)`

emojiRate will account for the following properties in options:

  * `size` The emoji size, default to `20px`.
  * `name` The name for the `input[type=radio]`, default to `emojiRate`
