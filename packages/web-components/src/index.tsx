class BoxElement extends HTMLElement {
  static observedAttributes = [
    "g",
    "m",
    "p",
    "inline",
    "wrap",
    "shrink",
    "align",
    "justify",
    "fullWidth",
    "fullHeight",
    "debug",
  ];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  attributeChangedCallback(
    name: string,
    _: string | null,
    newValue: string | null
  ) {
    if (newValue !== null) {
      this.style.setProperty(`--${name}`, newValue);
    }
    this.updateStyles();
  }

  connectedCallback() {
    this.updateStyles();
    this.render();
  }

  updateStyles() {
    this.style.display = this.hasAttribute("inline") ? "inline-flex" : "flex";
    this.style.flexWrap = this.hasAttribute("wrap") ? "wrap" : "nowrap";
    this.style.flexShrink = this.hasAttribute("shrink") ? "0" : "";
    this.style.width = this.hasAttribute("fullWidth") ? "100%" : "";
    this.style.height = this.hasAttribute("fullHeight") ? "100%" : "";
    this.style.outline = this.hasAttribute("debug") ? "1px solid red" : "";
    this.style.gap = this.getAttribute("g") || "";
    this.style.margin = this.getAttribute("m") || "";
    this.style.padding = this.getAttribute("p") || "";
    this.style.justifyContent = this.getAttribute("justify") || "";
    this.style.alignItems = this.getAttribute("align") || "";
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<slot></slot>`;
    }
  }
}

export class XElement extends BoxElement {
  connectedCallback() {
    super.connectedCallback();
    this.style.flexDirection = "row";
  }
}

export class YElement extends BoxElement {
  connectedCallback() {
    super.connectedCallback();
    this.style.flexDirection = "column";
  }
}

customElements.define("x-box", XElement);
customElements.define("y-box", YElement);
