const plugin = require('tailwindcss/plugin');
// const { moduleFileExtensions } = require('../../jest.config');

module.exports = plugin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      '.bg-coral': { background: 'coral' },
    });
  };
});

// const plugin = require('tailwindcss/plugin');

// module.exports = plugin.withOptions((options) => {
//   return function ({ addUtilities }) {
//     addUtilities(namedStyles);
//   };
// });

module.exports = function buttonComponentsPlugin({ addComponents }) {
  addComponents({
    '.baz-btn': {
      '@apply p-2 pl-5 pr-5 text-lg rounded-lg py-2 px-4':
        // '@apply [var(--button-color)] hover:bg-green-900 text-white py-2 px-4 rounded':
        {},
    },
    '.baz-btn-primary': {
      '@apply bg-primary-500 border border-primary-600 hover:bg-primary-600 text-on-primary-500':
        // '@apply [var(--button-color)] hover:bg-green-900 text-white py-2 px-4 rounded':
        {},
    },
    '.baz-btn-primary__outline': {
      '@apply bg-transparent border-2 border-primary-500 text-primary-500 text-lg rounded-lg hover:bg-primary-500 hover:text-on-primary-500 focus:border-4 focus:border-blue-300':
        {},
    },

    '.baz-btn-secondary': {
      '@apply bg-secondary-500 hover:bg-secondary-400 text-on-secondary-500':
        {},
    },

    '.baz-btn-accent': {
      '@apply bg-accent-500 hover:bg-accent-400 text-on-accent-500': {},
    },
    '.baz-btn-warn': {
      '@apply bg-warn-500 hover:bg-warn-400 text-on-warn-500': {},
    },

    '.baz-btn-disable': {
      '@apply bg-disable-500 hover:bg-disable-400 text-on-disable-500': {},
    },
    '.baz-btn-flat': {
      '@apply bg-accent-500 hover:bg-disable-400 text-on-disable-500': {},
    },
  });
};
