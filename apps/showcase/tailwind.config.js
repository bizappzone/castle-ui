const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('../../packages/tailwind-plugins/castle-ui-tailwindcss/castle-ui-base'),
    require('../../packages/tailwind-plugins/castle-ui-tailwindcss/castle-ui-blue-theme'),
  ],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),

    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, './packages/**/src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    './packages/**/src/**/!(*.stories|*.spec).{ts,html}',
  ],
  theme: {
    extend: {},
  },

  plugins: [require('../../packages/tailwind-plugins/castle-ui-tailwindcss')],
};
