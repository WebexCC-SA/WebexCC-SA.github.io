import { r as registerInstance, h } from './index-ceae7313.js';

const kHubLinksCss = ":host{display:flex;flex-direction:column;margin:0 10%}h1{text-align:center}section{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;border:solid 2px}div{display:grid;place-items:center;text-align:center;font-size:18px;max-height:10rem;margin-left:4rem;color:blue}div:hover{background-color:blue;color:white}";
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
        return [h("h1", { key: 'cb486d104050677c17378f8bda68f1bf071d544d' }, "Useful Links"), h("section", { key: 'e0df65544cf48ffb7f24c6946457849db78c903c' }, maincontent)
        ];
    }
};
kHubLinks.style = KHubLinksStyle0;

const kHubTilesCss = ":host{display:flex;flex-direction:column;margin:5% 10%}section{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2rem;min-height:30vh;}div{display:grid;place-items:center;text-align:center;border:solid 2px;font-size:20px;max-height:10rem;margin-left:4rem}div:hover{background-color:rgb(143, 140, 140);color:white}";
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
        let maincontent = this.tilesList.map(tile => (h("div", { key: '9c76bee6c54af241f4e5f3960fc8f13fbcca3dc3', onClick: this.launch.bind(this, tile.url) }, h("strong", { key: 'b70ce49de8ea549d8d6cd83215cfeff68223c018' }, tile.title))));
        return [h("section", { key: '8cd985f21d65b3867481b09e16720adbddf51764' }, maincontent)
        ];
    }
};
kHubTiles.style = KHubTilesStyle0;

export { kHubLinks as k_hub_links, kHubTiles as k_hub_tiles };

//# sourceMappingURL=k-hub-links_2.entry.js.map