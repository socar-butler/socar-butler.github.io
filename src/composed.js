customElements.define(
  "butler-button",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>
          button {
            color: white;
          }
          button#quite {
            background-color: skyblue;
          }
          button#loud {
            background-color: red;
          }
        </style>

        <button id="quite">조용한 버튼</button>
        <button id="loud">씨끄러운 버튼</button>
      `;
    }

    connectedCallback() {
      const quiteButton = this.shadowRoot.querySelector("button#quite");
      const loudButton = this.shadowRoot.querySelector("button#loud");

      quiteButton.onclick = () => {
        console.log("hello world from quite button");
        quiteButton.dispatchEvent(
          new CustomEvent("whisper", {
            detail: {
              message: "hello world",
            },
            composed: false,
            bubbles: true,
          })
        );
      };

      loudButton.onclick = () => {
        console.log("HELLO WORLD! from loud button");
        loudButton.dispatchEvent(
          new CustomEvent("yell", {
            detail: {
              message: "HELLO WORLD!",
            },
            composed: true,
            bubbles: true,
          })
        );
      };
    }
  }
);
