var __awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function c(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o["throw"](t))}catch(t){r(t)}}function l(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(c,a)}l((o=o.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(t){return function(e){return l([t,e])}}function l(c){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,i&&(r=c[0]&2?i["return"]:c[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,c[1])).done)return r;if(i=0,r)c=[c[0]&2,r.value];switch(c[0]){case 0:case 1:r=c;break;case 4:n.label++;return{value:c[1],done:false};case 5:n.label++;i=c[1];c=[0];continue;case 7:c=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1];r=c;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(c);break}if(r[2])n.ops.pop();n.trys.pop();continue}c=e.call(t,n)}catch(t){c=[6,t];i=0}finally{o=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-9fc8a10d.system.js","./p-36a4d280.system.js","./p-4ca95f56.system.js"],function(t){"use strict";var e,n,o,i,r,c,a;return{setters:[function(t){e=t.h;n=t.r;o=t.H;i=t.c;r=t.g},function(t){c=t.h},function(t){a=t.C}],execute:function(){var l={isActive:"is-active"};var u=[{id:"home",path:"",content:e(a,{size:"16",path:c,title:"Home"})},{id:"calcite-action",path:"demos/calcite-action.html",content:"Action"},{id:"calcite-action-bar",path:"demos/calcite-action-bar.html",content:"Action Bar"},{id:"calcite-action-pad",path:"demos/calcite-action-pad.html",content:"Action Pad"},{id:"calcite-block",path:"demos/calcite-block.html",content:"Block"},{id:"calcite-flow",path:"demos/calcite-flow.html",content:"Flow"},{id:"calcite-flow-item",path:"demos/calcite-flow-item.html",content:"Flow Item"},{id:"calcite-shell",path:"demos/calcite-shell.html",content:"Shell"},{id:"calcite-shell-panel",path:"demos/calcite-shell-panel.html",content:"Shell Panel"},{id:"calcite-tip",path:"demos/calcite-tip.html",content:"Tip"},{id:"calcite-tip-manager",path:"demos/calcite-tip-manager.html",content:"Tip Manager"},{id:"calcite-typography",path:"demos/calcite-typography.html",content:"Typography"}];var s=t("calcite_demo_nav",function(){function t(t){n(this,t);this.root=window.location.origin+window.location.pathname.split("demos").shift()}t.prototype.renderNavItem=function(t){var n=this,o=n.pageId,i=n.root;var r=t.content,c=t.id,a=t.path;return e("li",null,e("a",{class:c===o?l.isActive:null,href:""+i+a},r))};t.prototype.render=function(){var t=this;return e(o,null,e("ul",null,u.map(function(e){return t.renderNavItem(e)})))};Object.defineProperty(t,"style",{get:function(){return":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}:host{width:100%;background-color:#333;color:#fff;fill:#fff}:host,ul{display:-ms-flexbox;display:flex}ul{list-style:none;margin:0;padding:0}li{display:-ms-flexbox;display:flex;border-left:1px solid #fff}li:first-child{border-left:none}li:last-child{border-right:1px solid #fff}a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:12px 24px;color:inherit;text-decoration:none}a:hover{background-color:#000}a.is-active{background-color:#007bc7}svg{fill:inherit}"},enumerable:true,configurable:true});return t}());var p=t("calcite_example",function(){function t(t){n(this,t);this.property="default";this.state="default";this.open=i(this,"open",7)}t.prototype.componentWillUpdate=function(){};t.prototype.render=function(){console.log(this.state);return e(o,null)};t.prototype.onClick=function(t){console.log(t)};t.prototype.doThing=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,Promise.resolve(this.privateMethod())]})})};t.prototype.privateMethod=function(){};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}"},enumerable:true,configurable:true});return t}())}}});