const deepLinkGenerator = {
  init() {
    this.form = document.querySelector("#form");
    this.resultTextarea = document.querySelector("textarea#result");
    this.copyButton = document.querySelector("button#copy");

    this.form.onsubmit = this.formSubmitHandler.bind(this);
    this.copyButton.onclick = this.copy.bind(this);
  },

  formSubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { "test-env-subdomain": testEnvSubdomain, pathname: pathname } =
      Object.fromEntries(formData);

    this.resultTextarea.value = "";

    if (testEnvSubdomain)
      this.resultTextarea.value += `Test 환경: socar-v2://open-url/internal?url=${encodeURIComponent(
        `https://${testEnvSubdomain}.socar.me/${pathname}`
      )}\n`;
    this.resultTextarea.value += `개발 환경: socar-v2://open-url/internal?url=${encodeURIComponent(
      `https://frontend.socar.me/${pathname.replace(/^\//, "")}`
    )}\n`;
    this.resultTextarea.value += `운영 환경: socar-v2://open-url/internal?url=${encodeURIComponent(
      `https://frontend.socar.kr/${pathname.replace(/^\//, "")}`
    )}`;
  },

  async copy() {
    try {
      if (!this.resultTextarea.value) {
        return alert("클립보드에 저장할 값이 존재하지 않습니다.");
      }

      await window.navigator.clipboard.writeText(this.resultTextarea.value);
      alert("클립보드에 저장 됐습니다.");
    } catch (e) {
      alert(e.message);
    }
  },
};

deepLinkGenerator.init();
