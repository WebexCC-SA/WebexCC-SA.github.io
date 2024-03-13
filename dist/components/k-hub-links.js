import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const kHubLinksCss = ":host{display:flex;flex-direction:column;margin:0 10%}h1{text-align:center}section{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;border:solid 2px rgb(179, 179, 179);border-radius:15px;padding:15px}div{display:grid;place-items:center;text-align:center;font-size:18px;color:rgb(57, 57, 196);min-width:75%;overflow-wrap:anywhere}div:hover{text-decoration:underline;transition:.04s;cursor:pointer}";
const KHubLinksStyle0 = kHubLinksCss;

const kHubLinks = /*@__PURE__*/ proxyCustomElement(class kHubLinks extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return KHubLinksStyle0; }
}, [1, "k-hub-links", {
        "lList": [1, "l-list"],
        "linksList": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["k-hub-links"];
    components.forEach(tagName => { switch (tagName) {
        case "k-hub-links":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, kHubLinks);
            }
            break;
    } });
}

const KHubLinks = kHubLinks;
const defineCustomElement = defineCustomElement$1;

export { KHubLinks, defineCustomElement };

//# sourceMappingURL=k-hub-links.js.map