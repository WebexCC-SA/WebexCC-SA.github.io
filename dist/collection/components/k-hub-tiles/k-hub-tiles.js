import { h } from "@stencil/core";
export class kHubTiles {
    constructor() {
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
    static get is() { return "k-hub-tiles"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["k-hub-tiles.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["k-hub-tiles.css"]
        };
    }
    static get properties() {
        return {
            "tList": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "t-list",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "tiles": {},
            "tilesClean": {},
            "maincontent": {}
        };
    }
}
//# sourceMappingURL=k-hub-tiles.js.map
