import { h } from "@stencil/core";
export class kHubTiles {
    constructor() {
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
            "tilesList": {}
        };
    }
}
//# sourceMappingURL=k-hub-tiles.js.map
