const plugin = require('tailwindcss/plugin');
// const { moduleFileExtensions } = require('../../jest.config');

module.exports = plugin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      '.bg-coral': { background: 'coral' },
    });
  };
});

const plugin = require('tailwindcss/plugin');

// module.exports = plugin.withOptions((options) => {
//   return function ({ addUtilities }) {
//     addUtilities(namedStyles);
//   };
// });

module.exports = function buttonComponentsPlugin({ addComponents }) {
  addComponents({
    '.btn-outline': {
      '@apply bg-blue-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded':
        // '@apply [var(--button-color)] hover:bg-green-900 text-white font-bold py-2 px-4 rounded':
        {},
    },

    '.fluid-button': {
      '@apply text-gray-400': {},
    },
    '.btn-primary': {
      '@apply bg-primary-color hover:bg-green-900 text-white font-bold py-2 px-4 rounded':
        // '@apply [var(--button-color)] hover:bg-green-900 text-white font-bold py-2 px-4 rounded':
        {},
    },
  });
};
