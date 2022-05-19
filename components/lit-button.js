/**
 * 基本属性使用
 */
import {LitElement, html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';

class LitButton extends LitElement {
  // 在静态属性类字段中声明属性，Lit会处理为响应式属性
  static properties = {
    type: {type: String, reflect: true},
    classes: {},
    styles: {},
    other: {
      type: Object
    }
  };

  // 使用纯CSS为组件定义scoped样式
  static styles = css`
    .lit-button {
      display: inline-block;
      padding: 4px 20px;
      font-size: 14px;
      line-height: 1.5715;
      font-weight: 400;
      border: 1px solid #1890ff;
      border-radius: 2px;
      background-color: #1890ff;
      color: #fff;
      box-shadow: 0 2px #00000004;
      cursor: pointer;
    }
    .lit-button-warning {
      border: 1px solid #faad14;
      background-color: #faad14;
    }
    .lit-button-danger {
      border: 1px solid #ff4d4f;
      background-color: #ff4d4f;
    }
    .someclass {
      color: #000;
    }
    .anotherclass {
      font-size: 16px;
    }
  `;

  constructor() {
    super();

    this.classes = {'lit-button': true, someclass: true, anotherclass: true};
    this.styles = {fontFamily: 'Roboto'};

    this._type = {
      primary: 'lit-button',
      warning: 'lit-button lit-button-warning',
      danger: 'lit-button lit-button-danger',
    }
  }


  changeType = () => {
    this.type = 'warning';
  }

  // 将UI渲染为有状态组件的函数
  render() {
    // 使用模板字符串，可以包含表达式
    return html`
      <div class=${this._type[this.type]} @click=${this.changeType}><slot name="btnText"></slot> </div>
      <div class=${classMap(this.classes)} style=${styleMap(this.styles)}> 按钮 </div>
    `;
  }
}
customElements.define('lit-button', LitButton);

export default LitButton;
