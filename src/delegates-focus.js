document.body.attachShadow({ mode: "open" });

const shadowRoot = document.body.shadowRoot;
shadowRoot.innerHTML = `
  <style>
    div {
      padding: 20px;
      background-color: tomato;
    }
  </style>
  <div></div>
`;
const div = shadowRoot.querySelector("div");
const focusableInput = div.attachShadow({
  mode: "open",
  delegatesFocus: true,
});
focusableInput.innerHTML = `<input placeholder="focusable" />`;
