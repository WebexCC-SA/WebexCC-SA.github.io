import { b as bootstrapLazy } from './index-ceae7313.js';
export { s as setNonce } from './index-ceae7313.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["k-hub-links_2",[[1,"k-hub-links",{"lList":[1,"l-list"],"linksList":[32]}],[1,"k-hub-tiles",{"tList":[1,"t-list"],"tiles":[32],"tilesClean":[32],"maincontent":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map