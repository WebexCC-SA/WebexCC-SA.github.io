import type { Components, JSX } from "../types/components";

interface KHubTiles extends Components.KHubTiles, HTMLElement {}
export const KHubTiles: {
    prototype: KHubTiles;
    new (): KHubTiles;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
