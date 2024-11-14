const {getDefaultConfig} = require('@react-native/metro-config');
const {getConfig} = require('react-native-builder-bob/metro-config');
const pkg = require('../package.json');
const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = getConfig(getDefaultConfig(__dirname), {
  root,
  pkg,
  project: __dirname,
});
