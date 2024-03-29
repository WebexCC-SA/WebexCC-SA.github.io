import { h } from "@stencil/core";
export class kHubLinks {
    constructor() {
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
    static get is() { return "k-hub-links"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["k-hub-links.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["k-hub-links.css"]
        };
    }
    static get properties() {
        return {
            "lList": {
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
                "attribute": "l-list",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "linksList": {}
        };
    }
}
//# sourceMappingURL=k-hub-links.js.map
