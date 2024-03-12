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
        let maincontent = this.tilesList.map(tile => (h("div", { key: '9c76bee6c54af241f4e5f3960fc8f13fbcca3dc3', onClick: this.launch.bind(this, tile.url) }, h("strong", { key: 'b70ce49de8ea549d8d6cd83215cfeff68223c018' }, tile.title))));
        return [h("section", { key: '8cd985f21d65b3867481b09e16720adbddf51764' }, maincontent)
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
