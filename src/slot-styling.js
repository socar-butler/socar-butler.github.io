customElements.define(
  "custom-slot",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>
          #container {
            padding: 20px 10px;
            background-color: skyblue;
          }
          ::slotted(*) {
            font-size: 20px;
          }
          ::slotted([slot=first-slot]) {
            color: tomato;
          }
          ::slotted([slot=second-slot]) {
            color: green;
          }
        </style>

        <div id="container">
          <slot name="first-slot"></slot>
          <slot name="second-slot"></slot>
        </div>
      `;
    }
  }
);