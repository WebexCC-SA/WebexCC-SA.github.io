import { p as promiseResolve, b as bootstrapLazy } from './index-ceae7313.js';
export { s as setNonce } from './index-ceae7313.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.12.5 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["k-hub-links_2",[[1,"k-hub-links",{"lList":[1,"l-list"],"linksList":[32]}],[1,"k-hub-tiles",{"tList":[1,"t-list"],"tiles":[32],"tilesClean":[32],"maincontent":[32]}]]]], options);
});

//# sourceMappingURL=hub-widgets.js.map