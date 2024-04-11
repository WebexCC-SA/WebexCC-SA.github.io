import { r as registerInstance, h } from './index-ceae7313.js';

const kHubLinksCss = ":host{display:flex;flex-direction:column;margin:0 10%}h1{text-align:center}section{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px,1fr));gap:1rem;border:solid 2px rgb(179, 179, 179);border-radius:15px;padding:15px;place-items:center}div{display:grid;place-items:center;text-align:center;font-size:18px;color:rgb(57, 57, 196);min-width:75%;}div:hover{text-decoration:underline;transition:.04s;cursor:pointer}";
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

const kHubTilesCss = "\r\n\r\n@media(width > 600px){\r\n    :host {\r\n        display: flex; \r\n        flex-direction: column;\r\n        margin: 5% 10%;\r\n    \r\n        div{\r\n            min-width:75%;\r\n            max-width: 75;\r\n        }\r\n    }\r\n}\r\n\r\nsection {\r\n    display: grid;\r\n    /* grid-template-columns: 1fr 1fr 1fr; */\r\n    grid-template-columns: repeat(auto-fill,minmax(450px,1fr));\r\n    gap: 2rem;\r\n    min-height: 30vh;\r\n    /* border: solid 2px; */\r\n    place-items: center;\r\n    \r\n    \r\n\r\n}\r\n\r\ndiv {\r\n    display: grid;\r\n    place-items: center;\r\n    text-align: center;\r\n    border: solid 2px rgb(179, 179, 179);\r\n    font-size: 20px;\r\n    min-width:60%;\r\n    max-width: 60%;\r\n    min-height: 75%;\r\n    border-radius: 15px;\r\n    \r\n}\r\n\r\ndiv:hover {\r\n    background-color: rgb(212, 208, 208);\r\n    /* color: white; */\r\n    /* font-weight: bolder; */\r\n    /* border-color: black; */\r\n    box-shadow: 8px 8px 5px rgb(94, 92, 92);\r\n    transition: .04s;\r\n    \r\n}\r\n\r\n";
const KHubTilesStyle0 = kHubTilesCss;

const kHubTiles = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tList = undefined;
        this.tiles = [];
        this.tilesClean = [];
        this.maincontent = [];
    }
    componentWillLoad() {
        Array.from(this.tList.split(",")).map(async (item) => {
            const response = await fetch(item);
            this.tiles.push(Array.from(await response.json()));
            this.tilesClean = this.tiles.flat(Infinity);
            this.maincontent = this.tilesClean.map(tile => (h("div", { onClick: this.launch.bind(this, tile.url) }, tile.title)));
        });
    }
    launch(url) {
        window.location.href = url;
    }
    render() {
        return [h("section", { key: 'b5f78e7dcc9fbd2202ec950a8b8470ba9ec78020' }, this.maincontent)
        ];
    }
};
kHubTiles.style = KHubTilesStyle0;

export { kHubLinks as k_hub_links, kHubTiles as k_hub_tiles };

//# sourceMappingURL=k-hub-links_2.entry.js.map