"use strict";

class HinzufuegenPage {

    constructor(app){
        this.app = app;
    }

    async onShow() {
        let hinzuPage = await this._importStartPageHtml();

        hinzuPage.querySelector('.klickMich').addEventListener('click', () => {
            console.log("KLICKMICH!!")
        });

        return this._createContentObject(hinzuPage);
    }

    async _importStartPageHtml() {
        const template = await import('./hinzufuegen.html');
        let container = document.createElement('div');
        container.innerHTML = template.trim();
        return container;
    }

    _createContentObject(html) {
      let content = {
          className: "overview",
          main: html.querySelectorAll('div > *')
      };
      return content;
  }

    get title() {
        return "hinzufügen";
    }
}

export default HinzufuegenPage;
