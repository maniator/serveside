// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@maniator/ssr-aas',
  displayName: 'Bin',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
