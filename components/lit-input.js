/**
 * 数据绑定
 */
 import { html, LitElement } from 'lit';

 class LitInput extends LitElement {
   static properties = {
     value: {
       type: String,
       reflect: true,
     }
   }

   change = (e) => {
     this.value = e.target.value;
   }


   render() {
     return html`
     <div>输入：<input value=${this.value} @input=${this.change}/></div>
     `
   }
 }

 customElements.define('lit-input', LitInput);

 export default LitInput;