import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import pkg from './package.json';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'emojiRate'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    sass({
      processor: css => postcss([autoprefixer])
      .process(css)
      .then(result => result.css),
      output: true,
      output: 'dist/emoji-rate.css',
    }),
    buble(),
    resolve(),
    commonjs()
  ]
}

if (process.env.NODE_ENV === 'development') {
  config.plugins.push(
    require('rollup-plugin-serve')({
      contentBase: __dirname,
      host: 'localhost',
      port: 3000,
      open: false
    }),
    require('rollup-plugin-livereload')()
  )
}

export default config