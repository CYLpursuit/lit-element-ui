/**
 * cache内置指令使用
 */
 import {LitElement, html} from 'lit';
 import {cache} from 'lit/directives/cache.js';

 const detailView = (data) => html`<div>${data.detail}，现在时间是${Date.now()}</div>`;

 const summaryView = (data) => html`<div>${data.sumary}，现在时间是${Date.now()}</div>`

 class LitCache extends LitElement {
  static properties = {
    show: false,
    data: {},
  };

  constructor() {
    super();
    this.data = {
      detail: 'detail',
      sumary: 'sumary'
    };
  }

  changeTab = () => {
    this.show = !this.show;
  }

  render() {
    return html`${cache(this.show
      ? detailView(this.data)
      : summaryView(this.data)
    )}
    <button @click=${this.changeTab}>切换</button>
    `;
  }
}
customElements.define('lit-cache', LitCache);