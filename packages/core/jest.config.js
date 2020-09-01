// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@maniator/ssr-aas-core',
  displayName: 'Core',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
