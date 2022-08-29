class CustomForm extends HTMLFormElement {
  serialize() {
    const elements = Array.from(this.querySelectorAll("input,select,textarea"));
    if (elements.some((element) => !element.name)) {
      throw new Error("Failed to find field name");
    }

    let result = {};

    elements.forEach(({ name, type, value, checked }) => {
      switch (type) {
        case "number":
          result[name] = Number(value);
          break;

        case "checkbox":
          result[name] = checked;
          break;

        default:
          result[name] = value;
      }
    });

    return result;
  }
}

window.customElements.define("custom-form", CustomForm, { extends: "form" });
