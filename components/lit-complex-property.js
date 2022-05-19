/**
 * 复杂数据类型
 */
 import { html, LitElement } from 'lit';
 import './lit-person';
 import './lit-line';

 class LitComplex extends LitElement {

  constructor() {
    super();
    this.person= {'name':'cai'};
    this.friends = [{'name':'zheng'},{'name':'yun'}];
  }

   render() {
     return html`
     <!-- <div>复杂数据类型</div> -->
     <!-- <lit-person .person=${this.person} .friends=${this.friends} .date=${new Date()}></lit-person> -->
     <lit-line></lit-line>
     `
   }
 }

 customElements.define('lit-complex', LitComplex);

 export default LitComplex;