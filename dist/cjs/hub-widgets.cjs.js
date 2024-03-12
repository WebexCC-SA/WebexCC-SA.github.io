'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-097b56d8.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.12.5 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('hub-widgets.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["k-hub-links_2.cjs",[[1,"k-hub-links",{"lList":[1,"l-list"],"linksList":[32]}],[1,"k-hub-tiles",{"tList":[1,"t-list"],"tilesList":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=hub-widgets.cjs.js.map