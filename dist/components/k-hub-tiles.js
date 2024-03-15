import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const kHubTilesCss = "\r\n\r\n@media(width > 600px){\r\n    :host {\r\n        display: flex; \r\n        flex-direction: column;\r\n        margin: 5% 10%;\r\n    \r\n        div{\r\n            min-width:75%;\r\n            max-width: 75;\r\n        }\r\n    }\r\n}\r\n\r\nsection {\r\n    display: grid;\r\n    /* grid-template-columns: 1fr 1fr 1fr; */\r\n    grid-template-columns: repeat(auto-fill,minmax(450px,1fr));\r\n    gap: 2rem;\r\n    min-height: 30vh;\r\n    /* border: solid 2px; */\r\n    place-items: center;\r\n    \r\n    \r\n\r\n}\r\n\r\ndiv {\r\n    display: grid;\r\n    place-items: center;\r\n    text-align: center;\r\n    border: solid 2px rgb(179, 179, 179);\r\n    font-size: 20px;\r\n    min-width:60%;\r\n    max-width: 60%;\r\n    min-height: 75%;\r\n    border-radius: 15px;\r\n    \r\n}\r\n\r\ndiv:hover {\r\n    background-color: rgb(212, 208, 208);\r\n    /* color: white; */\r\n    /* font-weight: bolder; */\r\n    /* border-color: black; */\r\n    box-shadow: 8px 8px 5px rgb(94, 92, 92);\r\n    transition: .04s;\r\n    \r\n}\r\n\r\n";
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