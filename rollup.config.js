// rollup.config.js
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/firebase', // Chemin vers votre fichier source Firebase
  output: {
    file: 'public/bundle.js', // Chemin de sortie du bundle
    format: 'iife', // Format de sortie pour les navigateurs
  },
  plugins: [
    // ...
    babel({
      babelHelpers: 'bundled', // ou 'runtime' selon vos besoins
      presets: ['@babel/preset-env'],
    }),
  ],
};






