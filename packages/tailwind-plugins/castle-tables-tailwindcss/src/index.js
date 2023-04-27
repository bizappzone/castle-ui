// const plugin = require('tailwindcss/plugin');

// const { moduleFileExtensions } = require('../../jest.config');

module.exports = plugin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      '.bg-coral': { background: 'coral' },
    });
  };
});
