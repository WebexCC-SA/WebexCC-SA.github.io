import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const kHubTilesCss = ":host{display:flex;flex-direction:column;margin:5% 10%}section{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2rem;min-height:30vh;}div{display:grid;place-items:center;text-align:center;border:solid 2px;font-size:20px;max-height:10rem;margin-left:4rem}div:hover{background-color:rgb(143, 140, 140);color:white}";
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
        let maincontent = this.tilesList.map(tile => (h("div", { key: '9c76bee6c54af241f4e5f3960fc8f13fbcca3dc3', onClick: this.launch.bind(this, tile.url) }, h("strong", { key: 'b70ce49de8ea549d8d6cd83215cfeff68223c018' }, tile.title))));
        return [h("section", { key: '8cd985f21d65b3867481b09e16720adbddf51764' }, maincontent)
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