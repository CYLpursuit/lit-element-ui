/**
 * 数据绑定-father
 */
 import { html, LitElement } from 'lit';
 import './lit-input';

class LitInputFather extends LitElement {
  static properties = {
    data: {
      type: String
    },
  }

  constructor() {
    super();
    this.data = 'default';
  }

  render() {
    return html`
    <lit-input value=${this.data}></lit-input>
    `;
  }
}

customElements.define('lit-input-father', LitInputFather);

 export default LitInputFather;