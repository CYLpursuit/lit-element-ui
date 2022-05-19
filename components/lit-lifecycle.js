import { html, LitElement } from 'lit';

 class LitLifeCycle extends LitElement {
   constructor() {
     super();
   }

  //  connectedCallback() {}

  //  disconnectedCallback() {}

  //  attributeChangedCallback() {}

  //  adoptedCallback() {}

  //  haschanged()

   render(){
     return html`
     <div>生命周期流程</div>
     `
   }
 }

 customElements.define('lit-lifecycle', LitLifeCycle);

 export default LitLifeCycle