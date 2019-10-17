import{r as s,c as t,h as i,H as e,g as a}from"./p-e8b78b45.js";import{o as c,C as h,p as l,s as n,q as r,r as o}from"./p-0e8a719c.js";import{g as p}from"./p-c837c813.js";import{c as d}from"./p-840e89a3.js";import{I as m}from"./p-13d9ee89.js";import{C as f}from"./p-ffc077bf.js";const u=class{constructor(i){s(this,i),this.disabled=!1,this.icon=null,this.selected=!1,this.compact=!1,this.isSelected=this.selected,this.pickListClickHandler=s=>{this.disabled||(this.isSelected=!this.isSelected,this.emitChangeEvent(s.shiftKey))},this.pickListKeyDownHandler=s=>{" "===s.key&&(s.preventDefault(),this.isSelected=!this.isSelected,this.emitChangeEvent(s.shiftKey))},this.calciteListItemChange=t(this,"calciteListItemChange",7)}selectedWatchHandler(s){this.isSelected!==s&&(this.isSelected=s,this.emitChangeEvent())}connectedCallback(){this.dir=p(this.el)}async toggleSelected(s,t=!1){this.disabled||(this.isSelected="boolean"==typeof s?s:!this.isSelected,t&&this.emitChangeEvent())}secondaryActionContainerClickHandler(s){s.stopPropagation()}emitChangeEvent(s=!1){this.calciteListItemChange.emit({value:this.value,selected:this.isSelected,shiftPressed:s})}renderIcon(){const{icon:s}=this;return!s||this.compact?null:s===m.grip?i("span",{class:"handle"},i(h,{size:"16",path:c})):i("span",{class:"icon"},i(h,{size:"16",path:s===m.square?this.isSelected?l:n:this.isSelected?r:o}))}render(){const s=this.textDescription?i("span",{class:"description"},this.textDescription):null;return i(e,{class:d({[f.rtl]:"rtl"===this.dir}),onClick:this.pickListClickHandler,onKeydown:this.pickListKeyDownHandler,selected:this.isSelected,role:"checkbox","aria-checked":this.isSelected,tabindex:"0"},this.renderIcon(),i("label",{class:"label"},i("span",{class:"title"},this.textLabel||this.textHeading),s),i("div",{class:"action",onClick:this.secondaryActionContainerClickHandler},i("slot",{name:"secondaryAction"})))}get el(){return a(this)}static get watchers(){return{selected:["selectedWatchHandler"]}}static get style(){return":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-header-min-height:3rem;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#dfeffa;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#dfeffa;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}:host([hidden]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;min-height:var(--calcite-app-header-min-height)}.heading{padding:0;margin:0}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2);font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h2.heading,h3.heading,h4.heading,h5.heading{font-weight:var(--calcite-app-font-weight-demi)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}:host{-ms-flex-align:center;align-items:center;background-color:var(--calcite-app-background);color:var(--calcite-app-foreground);cursor:pointer;display:-ms-flexbox;display:flex;margin:0 var(--calcite-app-side-spacing-half) var(--calcite-app-cap-spacing-minimum);padding:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing-half);-webkit-transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function)}:host(:hover){background-color:var(--calcite-app-background-hover)}:host([compact]){padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}:host(:first-child){border-radius:var(--calcite-app-border-radius) var(--calcite-app-border-radius) 0 0}:host(:last-child){border-radius:0 0 var(--calcite-app-border-radius) var(--calcite-app-border-radius);margin-bottom:0;-webkit-box-shadow:0 1px 0 var(--calcite-app-border);box-shadow:0 1px 0 var(--calcite-app-border)}.icon{color:var(--calcite-app-foreground-link);-ms-flex:0 0 0%;flex:0 0 0%;line-height:0;width:var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-half)}.label{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex:1 0 0%;flex:1 0 0%;padding:0 var(--calcite-app-side-spacing-half);pointer-events:none}.label,.title{overflow:hidden}.title{display:-webkit-box;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.description{color:var(--calcite-app-foreground-subtle);font-family:var(--calcite-app-font-family-monospace);font-size:var(--calcite-app-font-size--1);margin-top:var(--calcite-app-cap-spacing-quarter);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.action{-ms-flex:0 0 0%;flex:0 0 0%;justify-self:flex-end}.handle{-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;color:var(--calcite-app-foreground-subtle);cursor:move;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;line-height:0}"}};export{u as calcite_pick_list_item};