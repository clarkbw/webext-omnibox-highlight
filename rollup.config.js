import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [['env', { modules: false }]],
      plugins: ['external-helpers'],
    }),
  ],
  dest: 'dist/index.js',
};
