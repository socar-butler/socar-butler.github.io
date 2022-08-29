class ButlerCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        span {
          font-size: 20px;
        }
      </style>

      <span id="display">0</span>
      <button id="button">+</button>
    `;
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector("#button");
    button.addEventListener("click", () => {
      this.buttonClickHandler();
    });
  }

  buttonClickHandler() {
    const display = this.shadowRoot.querySelector("#display");
    const count = display.textContent ? Number(display.textContent) : 0;
    display.textContent = count + 1;
  }
}

window.customElements.define("butler-counter", ButlerCounter);
