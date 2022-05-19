/**
 * 基础组件
 */
 import { html, LitElement } from 'lit';

 class LitPerson extends LitElement {
   static properties = {
     person: {
       type: Object
     },
     friends: {
       type: Array,
     },
     date: {
       type: Date,
     }
   }

   firstUpdated() {
    console.log(this.person instanceof Object, this.friends instanceof Array, this.date instanceof Date); // true true true
  }

   render() {
     return html`
     <div>${this.person.name}有${this.friends.length}个朋友</div>
     `
   }
 }

 customElements.define('lit-person', LitPerson);

 export default LitPerson;