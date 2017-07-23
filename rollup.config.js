import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'main.js',
  format: 'umd',
  moduleName: 'Form2JSON',
  dest: 'index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      babelrc: true,
      exclude: 'node_modules/**'
    })
  ]
}
