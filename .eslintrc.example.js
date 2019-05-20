const config = {
  extends: ['@chancedigital', '@chancedigital/eslint-config/react'],
  // overrides:
  rules: {
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-debugger': 1,
  },
  // additional settings not included in the core package
  settings: {
    react: {
      version: '16.8',
    },
  },
};

module.exports = config;
