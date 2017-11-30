# emoji-vote

<p align="center">
  <a href="https://jsfiddle.net/fireyy/q1c2zcya/" target="_blank">
    <img src="demo.png" width="213">
    <br>
    Live Demo
  </a>
</p>

> Emoji vote component.

- Idea from [Alipay](https://alipay.com)
- Emoji from [EmojiOne™ 2](https://emojitwo.github.io/)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save emoji-vote
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import emojiVote from 'emoji-vote'

// using CommonJS modules
var emojiVote = require('emoji-vote')
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="//unpkg.com/emoji-vote/dist/emoji-vote.cjs.js"></script>
```

This exposes the `emojiVote()` function as a global.

* * *

## Usage

```js
import emojiVote from 'emoji-vote'

emojiVote('.emoji-vote', {
  size: 30
})
```

## Examples & Demos

[**Real Example on JSFiddle**](https://jsfiddle.net/fireyy/q1c2zcya/) ➡️

## API

emoji-vote's API is organized as follows:

### `emojiVote(el: String|Element, options: Object)`

emojiVote will account for the following properties in options:

  * `size` The emoji size, default to `20px`.
