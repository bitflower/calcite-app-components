import{r as t,c as s,h as i,H as e,g as n}from"./p-dde25702.js";import{g as a,a as o}from"./p-f4073644.js";import{x as h}from"./p-8acc28e8.js";function c(t,s,i,e=20,n=0){let a=[];if(n>=e)return a;const o=t=>{const a=t.assignedNodes().filter(t=>1===t.nodeType);return a.length>0?c(a[0].parentElement,s,i,e,n+1):[]},h=Array.from(t.children||[]);for(const r of h)s(r)||(i(r)&&a.push(r),null!=r.shadowRoot?a.push(...c(r.shadowRoot,s,i,e,n+1)):"SLOT"===r.tagName?a.push(...o(r)):a.push(...c(r,s,i,e,n+1)));return a}function r(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&"false"!==t.getAttribute("aria-hidden")||"none"===t.style.display||"0"===t.style.opacity||"hidden"===t.style.visibility||"collapse"===t.style.visibility}function l(t){return"-1"!==t.getAttribute("tabindex")&&!r(t)&&!function(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&"false"!==t.getAttribute("aria-disabled")}(t)&&(t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLIFrameElement)}let d=new Map;const u=document.createElement("template");u.innerHTML='\n\t<div id="start"></div>\n\t<slot></slot>\n\t<div id="backup"></div>\n\t<div id="end"></div>\n';class m extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1,this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0)),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(t){t?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$backup=this.shadowRoot.querySelector("#backup"),this.$start=this.shadowRoot.querySelector("#start"),this.$end=this.shadowRoot.querySelector("#end"),this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return c(this,r,l)}trapFocus(t){if(this.inactive)return;let s=this.getFocusableElements();s.length>0?(t?s[s.length-1].focus():s[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(t){!function(t,s,i){const e=d.get(i);null!=e&&window.clearTimeout(e),d.set(i,window.setTimeout(()=>{t(),d.delete(i)},0))}(()=>{this.focused!==t&&(this._focused=t,this.render())},0,this.debounceId)}render(){this.isConnected&&(this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused"))}}window&&window.customElements&&window.customElements.define("focus-trap",m);const f=class{constructor(i){t(this,i),this.beforeClose=()=>Promise.resolve(),this.closeLabel="Close",this.size="small",this.theme="light",this.calciteModalOpen=s(this,"calciteModalOpen",7),this.calciteModalClose=s(this,"calciteModalClose",7)}render(){const t=a(this.el),s=o(this.el);return i(e,{role:"dialog","aria-modal":"true",class:{"is-active":this.isActive},dir:t,theme:s},i("div",{class:"modal"},i("div",{"data-focus-fence":"true",tabindex:"0",onFocus:this.focusLastElement.bind(this)}),i("div",{class:"modal__header"},i("button",{class:"modal__close","aria-label":this.closeLabel,ref:t=>this.closeButton=t,onClick:()=>this.close()},i("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24",fill:"currentColor"},i("path",{d:h}))),i("header",{class:"modal__title"},i("slot",{name:"header"}))),i("div",{class:{modal__content:!0,"modal__content--spaced":!this.noPadding},ref:t=>this.modalContent=t},i("slot",{name:"content"})),i("div",{class:"modal__footer"},i("span",{class:"modal__back"},i("slot",{name:"back"})),i("span",{class:"modal__secondary"},i("slot",{name:"secondary"})),i("span",{class:"modal__primary"},i("slot",{name:"primary"}))),i("div",{"data-focus-fence":"true",tabindex:"0",onFocus:this.focusFirstElement.bind(this)})))}handleEscape(t){this.isActive&&!this.disableEscape&&"Escape"===t.key&&this.close()}async open(){return this.previousActiveElement=document.activeElement,this.isActive=!0,new Promise(t=>{setTimeout(()=>{this.focusElement(this.firstFocus),t(this.el)},300),document.documentElement.classList.add("overflow-hidden"),this.calciteModalOpen.emit()})}async close(){return this.beforeClose(this.el).then(()=>(this.isActive=!1,this.previousActiveElement.focus(),document.documentElement.classList.remove("overflow-hidden"),this.calciteModalClose.emit(),new Promise(t=>{setTimeout(()=>t(this.el),300)})))}async focusElement(t){if(t)return void t.focus();const s=c(this.el,r,l);s.length>0?s[0].focus():this.closeButton&&this.closeButton.focus()}async scrollContent(t=0,s=0){this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:t,left:s,behavior:"smooth"}):(this.modalContent.scrollTop=t,this.modalContent.scrollLeft=s))}focusFirstElement(){this.closeButton&&this.closeButton.focus()}focusLastElement(){const t=c(this.el,r,l).filter(t=>!t.getAttribute("data-focus-fence"));t.length>0?t[t.length-1].focus():this.closeButton&&this.closeButton.focus()}get el(){return n(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host{--calcite-modal-scrim:rgba(0,0,0,0.75);position:fixed;top:0;right:0;bottom:0;left:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-ui-text-2);visibility:hidden!important;background:var(--calcite-modal-scrim);-webkit-transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88);transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88);z-index:101}.modal,:host{display:-ms-flexbox;display:flex;opacity:0}.modal{-webkit-box-sizing:border-box;box-sizing:border-box;z-index:102;float:none;text-align:left;-webkit-overflow-scrolling:touch;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:row-wrap;flex-wrap:row-wrap;visibility:hidden;-webkit-transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);background-color:var(--calcite-ui-foreground);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.32);box-shadow:0 0 16px 0 rgba(0,0,0,.32);border-radius:var(--calcite-border-radius);margin:1.5rem;width:100%}:host(.is-active){visibility:visible!important;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms}:host(.is-active) .modal{visibility:visible;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88)}:host([dir=rtl]) .modal{text-align:right}.modal__header{background-color:var(--calcite-ui-foreground);-ms-flex:0;flex:0;display:-ms-flexbox;display:flex;max-width:100%;min-width:0;z-index:2;border-bottom:1px solid var(--calcite-ui-border-3);border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.modal__close{padding:1.125rem;margin:0;-ms-flex-order:2;order:2;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;color:var(--calcite-ui-text-1);outline:none;cursor:pointer;border-radius:0 var(--calcite-border-radius) 0 0}.modal__close svg{pointer-events:none}.modal__close:focus,.modal__close:hover{background-color:var(--calcite-ui-foreground-hover)}.modal__close:active{background-color:var(--calcite-ui-foreground-press)}:host([dir=rtl]) .modal__close{border-radius:var(--calcite-border-radius) 0 0 0}.modal__title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.75rem 1.5rem;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-order:1;order:1;min-width:0}::slotted([slot=header]),slot[name=header]::slotted(*){margin:0;font-weight:400;font-size:1.414rem;line-height:1.5;color:var(--calcite-ui-text-1)}\@media screen and (max-width:859px){::slotted([slot=header]),slot[name=header]::slotted(*){font-size:1.33rem}}\@media screen and (max-width:479px){::slotted([slot=header]),slot[name=header]::slotted(*){font-size:1.25rem}}.modal__content{position:relative;padding:0;height:100%;overflow:auto;max-height:calc(100vh - 12rem);overflow-y:auto;display:block;background-color:var(--calcite-ui-foreground);z-index:1}.modal__content--spaced{padding:1.5rem}::slotted([slot=content]),slot[name=content]::slotted(*){font-size:1rem;line-height:1.5}.modal__footer{display:-ms-flexbox;display:flex;-ms-flex:0;flex:0;-ms-flex-pack:end;justify-content:flex-end;padding:1.2rem 1.125rem;margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0 0 var(--calcite-border-radius) var(--calcite-border-radius);width:100%;background-color:var(--calcite-ui-foreground);border-top:1px solid var(--calcite-ui-border-3);z-index:2}.modal__footer--hide-back .modal__back,.modal__footer--hide-secondary .modal__secondary{display:none}.modal__back{display:block;margin-right:auto}:host([dir=rtl]) .modal__back{margin-left:auto;margin-right:unset}.modal__secondary{display:block;margin:0 .375rem}slot[name=primary]{display:block}:host([size=small]) .modal{width:auto;max-width:32rem}\@media screen and (max-width:35rem){:host([size=small]) .modal{height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0;border-radius:0}:host([size=small]) .modal__content{-ms-flex:1 1 0px;flex:1 1 0;max-height:unset}:host([size=small]) .modal__footer,:host([size=small]) .modal__header{-ms-flex:inherit;flex:inherit}:host([size=small][docked]){-ms-flex-align:end;align-items:flex-end}}:host([size=medium]) .modal{max-width:48rem}\@media screen and (max-width:51rem){:host([size=medium]) .modal{height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0;border-radius:0}:host([size=medium]) .modal__content{-ms-flex:1 1 0px;flex:1 1 0;max-height:unset}:host([size=medium]) .modal__footer,:host([size=medium]) .modal__header{-ms-flex:inherit;flex:inherit}:host([size=medium][docked]){-ms-flex-align:end;align-items:flex-end}}:host([size=large]) .modal{max-width:94rem}\@media screen and (max-width:97rem){:host([size=large]) .modal{height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0;border-radius:0}:host([size=large]) .modal__content{-ms-flex:1 1 0px;flex:1 1 0;max-height:unset}:host([size=large]) .modal__footer,:host([size=large]) .modal__header{-ms-flex:inherit;flex:inherit}:host([size=large][docked]){-ms-flex-align:end;align-items:flex-end}}:host([size=fullscreen]){background-color:transparent}:host([size=fullscreen]) .modal{-webkit-transform:translate3D(0,20px,0) scale(.95);transform:translate3D(0,20px,0) scale(.95);height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0}:host([size=fullscreen]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto}:host([size=fullscreen]) .modal__footer,:host([size=fullscreen]) .modal__header{-ms-flex:inherit;flex:inherit}:host(.is-active[size=fullscreen]) .modal{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host(.is-active[size=fullscreen]) .modal__footer,:host(.is-active[size=fullscreen]) .modal__header{border-radius:0}:host([docked]) .modal{height:auto!important}:host([docked]) .modal__content{height:auto;-ms-flex:1;flex:1}\@media screen and (max-width:860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .modal__close{border-radius:0 var(--calcite-border-radius) 0 0}}\@media screen and (max-width:860px){:host([docked][dir=rtl]) .modal__close{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host([color=red]) .modal{border-top:4px solid var(--calcite-ui-red)}:host([color=blue]) .modal{border-top:4px solid var(--calcite-ui-blue)}:host([color=blue]) .modal__header,:host([color=red]) .modal__header{border-radius:var(--calcite-border-radius)}\@media screen and (max-width:860px){::slotted([slot=header]),slot[name=header]::slotted(*){font-size:1.2019rem;line-height:1.5}}\@media screen and (max-width:860px) and (max-width:859px){::slotted([slot=header]),slot[name=header]::slotted(*){font-size:1.1305rem}}\@media screen and (max-width:860px) and (max-width:479px){::slotted([slot=header]),slot[name=header]::slotted(*){font-size:1.0625rem}}\@media screen and (max-width:860px){.modal__title{padding:.375rem 1.0125rem}}\@media screen and (max-width:860px){.modal__close,.modal__content--spaced{padding:1.0125rem}}\@media screen and (max-width:860px){.modal__footer{position:-webkit-sticky;position:sticky;bottom:0}}\@media screen and (max-width:480px){.modal__footer{-ms-flex-direction:column;flex-direction:column}.modal__back,.modal__secondary{margin:0;margin-bottom:.375rem}}"}};export{f as calcite_modal};