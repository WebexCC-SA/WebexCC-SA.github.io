import type { Components, JSX } from "../types/components";

interface KHubLinks extends Components.KHubLinks, HTMLElement {}
export const KHubLinks: {
    prototype: KHubLinks;
    new (): KHubLinks;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
