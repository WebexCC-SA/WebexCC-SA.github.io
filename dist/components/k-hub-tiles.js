import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const kHubTilesCss = ":host{display:flex;flex-direction:column;margin:5% 10%}section{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2rem;min-height:30vh;place-items:center}div{display:grid;place-items:center;text-align:center;border:solid 2px rgb(179, 179, 179);font-size:20px;min-width:75%;max-width:75%;min-height:75%;border-radius:15px}div:hover{background-color:rgb(212, 208, 208);box-shadow:8px 8px 5px rgb(94, 92, 92);transition:.04s}";
const KHubTilesStyle0 = kHubTilesCss;

const kHubTiles = /*@__PURE__*/ proxyCustomElement(class kHubTiles extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tilesList = [];
        this.tList = undefined;
    }
    async componentWillLoad() {
        const response = await fetch(this.tList);
        const tiles = await response.json();
        this.tilesList = await tiles.map(match => {
            return { title: match["title"], url: match["url"] };
        });
    }
    launch(url) {
        window.location.href = url;
    }
    render() {
        let maincontent = this.tilesList.map(tile => (h("div", { key: '0bd75c6f2395ecb95cf303e5eb9c5f2d8b83b5e9', onClick: this.launch.bind(this, tile.url) }, tile.title)));
        return [h("section", { key: '5158eff8c7ed07c09e5708788ad5cb897b00b498' }, maincontent)
        ];
    }
    static get style() { return KHubTilesStyle0; }
}, [1, "k-hub-tiles", {
        "tList": [1, "t-list"],
        "tilesList": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["k-hub-tiles"];
    components.forEach(tagName => { switch (tagName) {
        case "k-hub-tiles":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, kHubTiles);
            }
            break;
    } });
}

const KHubTiles = kHubTiles;
const defineCustomElement = defineCustomElement$1;

export { KHubTiles, defineCustomElement };

//# sourceMappingURL=k-hub-tiles.js.map