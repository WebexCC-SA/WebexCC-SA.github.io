import { r as registerInstance, h } from './index-ceae7313.js';

const kHubLinksCss = ":host{display:flex;flex-direction:column;margin:0 10%}h1{text-align:center}section{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;border:solid 2px rgb(179, 179, 179);border-radius:15px;padding:15px}div{display:grid;place-items:center;text-align:center;font-size:18px;color:rgb(57, 57, 196);min-width:75%;overflow-wrap:anywhere}div:hover{text-decoration:underline;transition:.04s;cursor:pointer}";
const KHubLinksStyle0 = kHubLinksCss;

const kHubLinks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.linksList = [];
        this.lList = undefined;
    }
    async componentWillLoad() {
        const response = await fetch(this.lList);
        const link = await response.json();
        this.linksList = await link.map(match => {
            return { title: match["title"], url: match["url"] };
        });
    }
    launch(url) {
        window.location.href = url;
    }
    render() {
        let maincontent = this.linksList.map(link => (h("div", { key: '266b6927702938d5edd74ea973d71582d69aea66', onClick: this.launch.bind(this, link.url) }, link.title)));
        return [h("section", { key: '243e7182405a1028650294f14a80c482e767332c' }, maincontent)
        ];
    }
};
kHubLinks.style = KHubLinksStyle0;

const kHubTilesCss = ":host{display:flex;flex-direction:column;margin:5% 10%}section{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2rem;min-height:30vh;place-items:center}div{display:grid;place-items:center;text-align:center;border:solid 2px rgb(179, 179, 179);font-size:20px;min-width:75%;max-width:75%;min-height:75%;border-radius:15px}div:hover{background-color:rgb(212, 208, 208);box-shadow:8px 8px 5px rgb(94, 92, 92);transition:.04s}";
const KHubTilesStyle0 = kHubTilesCss;

const kHubTiles = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
kHubTiles.style = KHubTilesStyle0;

export { kHubLinks as k_hub_links, kHubTiles as k_hub_tiles };

//# sourceMappingURL=k-hub-links_2.entry.js.map