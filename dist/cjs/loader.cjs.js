'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-097b56d8.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["k-hub-links_2.cjs",[[1,"k-hub-links",{"lList":[1,"l-list"],"linksList":[32]}],[1,"k-hub-tiles",{"tList":[1,"t-list"],"tilesList":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map