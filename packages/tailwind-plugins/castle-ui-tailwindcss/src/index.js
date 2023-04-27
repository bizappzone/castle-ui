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
      '@apply bg-primary-5-color border border-primary-6-color hover:bg-primary-6-color text-on-primary-5-color':
        // '@apply [var(--button-color)] hover:bg-green-900 text-white py-2 px-4 rounded':
        {},
    },
    '.baz-btn-primary__outline': {
      '@apply bg-transparent border-2 border-primary-5-color text-primary-5-color text-lg rounded-lg hover:bg-primary-5-color hover:text-on-primary-5-color focus:border-4 focus:border-blue-300':
        {},
    },

    '.baz-btn-secondary': {
      '@apply bg-secondary-5-color hover:bg-secondary-4-color text-on-secondary-5-color':
        {},
    },

    '.baz-btn-accent': {
      '@apply bg-accent-5-color hover:bg-accent-4-color text-on-accent-5-color':
        {},
    },
    '.baz-btn-warn': {
      '@apply bg-warn-5-color hover:bg-warn-4-color text-on-warn-5-color': {},
    },

    '.baz-btn-disable': {
      '@apply bg-disable-5-color hover:bg-disable-4-color text-on-disable-5-color':
        {},
    },
    '.baz-btn-flat': {
      '@apply bg-accent-5-color hover:bg-disable-4-color text-on-disable-5-color':
        {},
    },
  });
};
