import{r as t,c as e,h as i,H as s,g as c}from"./p-77206582.js";import{S as h,E as r,L as a,R as l,U as o,D as n,H as d,b as m}from"./p-031cbc0f.js";import{a as u,g as f,n as p,c as g}from"./p-d60a3994.js";import{c as b}from"./p-7b73833d.js";var k;!function(t){t.Single="single",t.Multi="multi",t.Children="children",t.MultiChildren="multi-children"}(k||(k={}));const v=class{constructor(i){t(this,i),this.lines=!1,this.root=!0,this.theme="light",this.size="m",this.selectionMode=k.Single,this.calciteTreeSelect=e(this,"calciteTreeSelect",7)}componentWillUpdate(){}componentWillRender(){const t=this.el.parentElement.closest("calcite-tree");this.theme=u(this.el),this.lines=t?t.lines:this.lines,this.size=t?t.size:this.size,this.selectionMode=t?t.selectionMode:this.selectionMode,this.root=!t}render(){const t=f(this.el);return i(s,{tabindex:this.root?"1":void 0,dir:t,"aria-role":this.root?"tree":void 0,"aria-multiselectable":this.selectionMode===k.Multi||this.selectionMode===k.MultiChildren},i("slot",null))}onFocus(){if(this.root){const t=this.el.querySelector("calcite-tree-item[selected]"),e=this.el.querySelector("calcite-tree-item");(t||e).focus()}}onClick(t){const e=t.target,i=p(e.querySelectorAll("calcite-tree-item")),s=t.detail.modifyCurrentSelection&&(this.selectionMode===k.Multi||this.selectionMode===k.MultiChildren),c=this.selectionMode===k.MultiChildren||this.selectionMode===k.Children,h=!s&&((this.selectionMode===k.Single||this.selectionMode===k.Multi)&&i.length<=0||this.selectionMode===k.Children||this.selectionMode===k.MultiChildren),r=this.selectionMode===k.Children||this.selectionMode===k.MultiChildren;if(this.root){const a=[];null!==this.selectionMode&&(!e.hasChildren||e.hasChildren&&(this.selectionMode===k.Children||this.selectionMode===k.MultiChildren))&&a.push(e),c&&i.forEach(t=>{a.push(t)}),h&&p(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach(t=>{a.includes(t)||(t.selected=!1)}),r&&!t.detail.forceToggle&&(e.expanded=!0),s&&window.getSelection().removeAllRanges(),a.forEach(s&&e.selected||c&&t.detail.forceToggle?t=>{t.selected=!1}:t=>{t.selected=!0})}this.root&&(t.preventDefault(),t.stopPropagation()),this.calciteTreeSelect.emit({selected:p(this.el.querySelectorAll("calcite-tree-item")).filter(t=>t.selected)})}get el(){return c(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:block;outline:none;--calcite-tree-text:#404040;--calcite-tree-text-hover:#151515;--calcite-tree-text-active:#0b0b0b;--calcite-tree-chevron:#bfbfbf;--calcite-tree-chevron-hover:#6a6a6a;--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:#bfbfbf;--calcite-tree-indicator-active:var(--calcite-ui-blue);--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:auto;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:auto;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}:host([theme=dark]){--calcite-tree-text:#d4d4d4;--calcite-tree-text-hover:#eaeaea;--calcite-tree-text-active:#f3f3f3;--calcite-tree-chevron:#555;--calcite-tree-chevron-hover:#959595;--calcite-tree-indicator:#555;--calcite-tree-indicator-active:var(--calcite-ui-blue)}:host([lines]){--calcite-tree-line:#eaeaea;--calcite-tree-line-hover:#cacaca;--calcite-tree-line-active:var(--calcite-ui-blue)}:host([lines][theme=dark]){--calcite-tree-line:#555;--calcite-tree-line-hover:grey;--calcite-tree-line-active:var(--calcite-ui-blue)}:host([size=s]){--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}:host([dir=rtl]){--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:auto;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:auto;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}:host([dir=rtl][size=s]){--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}"}},w=class{constructor(i){t(this,i),this.selected=!1,this.depth=-1,this.hasChildren=null,this.expanded=!1,this.parentExpanded=!1,this.iconClickHandler=t=>{t.stopPropagation(),this.expanded=!this.expanded,this.calciteTreeItemSelect.emit({modifyCurrentSelection:t.shiftKey,forceToggle:!0})},this.childrenClickHandler=t=>t.stopPropagation(),this.calciteTreeItemSelect=e(this,"calciteTreeItemSelect",7)}expandedHandler(t){if(this.childrenSlotWrapper){const[e]=g(this.childrenSlotWrapper,"calcite-tree");e&&g(e,"calcite-tree-item").forEach(e=>e.parentExpanded=t)}}componentWillRender(){this.hasChildren=!!this.el.querySelector("calcite-tree");let t,e=this.el.closest("calcite-tree");for(this.selectionMode=e.selectionMode,this.depth=0;e&&(t=e.parentElement.closest("calcite-tree"))!==e;)e=t,this.depth=this.depth+1}render(){const t=f(this.el),e=this.hasChildren?i("svg",{class:"calcite-tree-chevron",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 16 16",onClick:this.iconClickHandler,"data-test-id":"icon"},i("path",{d:b})):null;return i(s,{tabindex:this.parentExpanded||1===this.depth?"0":"-1",dir:t,"aria-role":"treeitem","aria-hidden":this.parentExpanded||1===this.depth?void 0:"true","aria-selected":this.selected?"true":this.selectionMode===k.Multi||this.selectionMode===k.MultiChildren?"false":void 0,"aria-expanded":this.hasChildren?this.expanded.toString():void 0},i("div",{class:"calcite-tree-node",ref:t=>this.defaultSlotWrapper=t},e,i("slot",null)),i("div",{class:"calcite-tree-children","data-test-id":"calcite-tree-children",role:this.hasChildren?"group":void 0,ref:t=>this.childrenSlotWrapper=t,onClick:this.childrenClickHandler},i("slot",{name:"children"})))}onClick(t){const[e]=g(this.defaultSlotWrapper,"a");e&&"a"!==t.composedPath()[0].tagName.toLowerCase()&&window.open(e.href,""===e.target?"_self":e.target),this.expanded=!this.expanded,this.calciteTreeItemSelect.emit({modifyCurrentSelection:t.shiftKey,forceToggle:!1})}keyDownHandler(t){let e;switch(t.keyCode){case h:this.selected=!this.selected,t.preventDefault(),t.stopPropagation();break;case r:const i=p(this.el.children).find(t=>t.matches("a"));i?(i.click(),this.selected=!0):this.selected=!this.selected,t.preventDefault(),t.stopPropagation();break;case a:if(this.hasChildren&&this.expanded){this.expanded=!1,t.preventDefault(),t.stopPropagation();break}const s=this.el.parentElement.closest("calcite-tree-item");if(s&&(!this.hasChildren||!1===this.expanded)){s.focus(),t.preventDefault(),t.stopPropagation();break}break;case l:if(this.hasChildren&&!1===this.expanded){this.expanded=!0,t.preventDefault(),t.stopPropagation();break}if(this.hasChildren&&this.expanded){this.el.querySelector("calcite-tree-item").focus();break}break;case o:const c=this.el.previousElementSibling;c&&c.matches("calcite-tree-item")&&c.focus();break;case n:const u=this.el.nextElementSibling;u&&u.matches("calcite-tree-item")&&u.focus();break;case d:(e=this.el.closest("calcite-tree[root]")).querySelector("calcite-tree-item").focus();break;case m:let f=(e=this.el.closest("calcite-tree[root]")).children[e.children.length-1],g=p(f.children).find(t=>t.matches("calcite-tree"));for(;g;)g=p((f=g.children[e.children.length-1]).children).find(t=>t.matches("calcite-tree"));f.focus()}}get el(){return c(this)}static get watchers(){return{expanded:["expandedHandler"]}}static get style(){return"\@charset \"UTF-8\";:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none}::slotted(*),:host{font-size:.875rem;line-height:1.5;max-width:100%}::slotted(*){color:var(--calcite-tree-text)!important;word-wrap:break-word}::slotted(*),::slotted(*):hover{text-decoration:none!important}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:focus:after,:host([has-children]) .calcite-tree-children:hover:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:\"•\";left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator)}.calcite-tree-node:after,.calcite-tree-node:before{position:absolute;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.calcite-tree-node:after{content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0}:host([depth=\"1\"])>.calcite-tree-node:after{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth=\"1\"])>.calcite-tree-children:before,:host([depth=\"1\"])>.calcite-tree-node:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before,:host([selected]) .calcite-tree-node:hover:before{opacity:1}.calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after,:host([selected]) .calcite-tree-node:hover:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-tree-line-active)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:focus) .calcite-tree-chevron,:host(:hover) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-ui-blue);stroke-width:.75;stroke:var(--calcite-ui-blue)}"}};export{v as calcite_tree,w as calcite_tree_item};