var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?i(e.value):r(e.value).then(a,s)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(a[0]===6&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}if(o[2])i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(s){a=[6,s];r=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-0bde2a81.system.js","./p-50e11fda.system.js","./p-5559af04.system.js"],(function(e){"use strict";var t,i,n,r,o,a,s;return{setters:[function(e){t=e.r;i=e.c;n=e.h;r=e.H;o=e.g},function(e){a=e.g},function(e){s=e.c}],execute:function(){var c={container:"container",header:"header",heading:"heading",close:"close",imageFrame:"image-frame",content:"content",info:"info"};var l={close:"Close"};var u={close:"x"};var p={thumbnail:"thumbnail"};var h=e("calcite_tip",function(){function e(e){var n=this;t(this,e);this.dismissed=false;this.nonDismissible=false;this.textClose=l.close;this.hideTip=function(){n.dismissed=true;n.calciteTipDismiss.emit()};this.calciteTipDismiss=i(this,"calciteTipDismiss",7)}e.prototype.renderHeader=function(){var e=this,t=e.nonDismissible,i=e.hideTip,r=e.textClose,o=e.heading;var a=!t?n("calcite-action",{text:r,onClick:i,class:c.close},n("calcite-icon",{scale:"s",icon:u.close})):null;var s=o?n("h3",{class:c.heading},o):null;return a||s?n("header",{class:c.header},s,a):null};e.prototype.renderImageFrame=function(){var e=this.el;return e.querySelector("[slot="+p.thumbnail+"]")?n("div",{class:c.imageFrame},n("slot",{name:p.thumbnail})):null};e.prototype.renderInfoNode=function(){return n("div",{class:c.info},n("slot",null))};e.prototype.renderContent=function(){return n("div",{class:c.content},this.renderImageFrame(),this.renderInfoNode())};e.prototype.render=function(){return n(r,null,n("article",{class:c.container,hidden:this.dismissed},this.renderHeader(),this.renderContent()))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background-color:var(--calcite-app-background-clear)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0;font-weight:var(--calcite-app-font-weight-demi)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}.container{background-color:var(--calcite-app-background);padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing) var(--calcite-app-cap-spacing);margin:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing);-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);border-radius:var(--calcite-app-border-radius)}:host([selected]) .container{-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0}.header{-ms-flex-pack:end;justify-content:flex-end}.header .heading{padding-left:0;padding-right:0}.container[hidden]{display:none}.content{display:-ms-flexbox;display:flex;padding-top:var(--calcite-app-cap-spacing-half)}.info{padding:0 var(--calcite-app-side-spacing);width:70%}.info:only-child{width:100%;padding-left:0;padding-right:0}::slotted(p){margin-top:0}::slotted(a){color:var(--calcite-app-foreground-link)}.image-frame{width:25%}.image-frame img{max-width:100%}::slotted(img){max-width:100%}"},enumerable:true,configurable:true});return e}());var d={defaultGroupTitle:"Tips",defaultPaginationLabel:"Tip",close:"Close",previous:"Previous",next:"Next"};var f={header:"header",heading:"heading",close:"close",container:"container",tipContainer:"tip-container",tipContainerAdvancing:"tip-container--advancing",tipContainerRetreating:"tip-container--retreating",pagination:"pagination",pagePosition:"page-position",pageNext:"page-next",pagePrevious:"page-previous"};var g={chevronLeft:"chevron-left",chevronRight:"chevron-right",close:"x"};var v=e("calcite_tip_group",function(){function e(e){t(this,e);this.textGroupTitle=d.defaultGroupTitle}e.prototype.render=function(){return n("slot",null)};Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}::slotted(calcite-tip){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}"},enumerable:true,configurable:true});return e}());var b=e("calcite_tip_manager",function(){function e(e){var n=this;t(this,e);this.closed=false;this.textClose=d.close;this.textDefaultTitle=d.defaultGroupTitle;this.textNext=d.next;this.textPaginationLabel=d.defaultPaginationLabel;this.textPrevious=d.previous;this.groupTitle=this.textDefaultTitle;this.observer=new MutationObserver((function(){return n.setUpTips()}));this.hideTipManager=function(){n.closed=true;n.calciteTipManagerToggle.emit()};this.previousClicked=function(){n.previousTip()};this.nextClicked=function(){n.nextTip()};this.tipManagerKeyUpHandler=function(e){if(e.target!==n.container){return}switch(e.key){case"ArrowRight":e.preventDefault();n.nextTip();break;case"ArrowLeft":e.preventDefault();n.previousTip();break;case"Home":e.preventDefault();n.selectedIndex=0;break;case"End":e.preventDefault();n.selectedIndex=n.total-1;break}};this.storeContainerRef=function(e){n.container=e};this.calciteTipManagerToggle=i(this,"calciteTipManagerToggle",7)}e.prototype.closedChangeHandler=function(){this.direction=null;this.calciteTipManagerToggle.emit()};e.prototype.selectedChangeHandler=function(){this.showSelectedTip();this.updateGroupTitle()};e.prototype.connectedCallback=function(){this.setUpTips()};e.prototype.componentDidLoad=function(){this.observer.observe(this.el,{childList:true,subtree:true})};e.prototype.componentDidUnload=function(){this.observer.disconnect()};e.prototype.nextTip=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){this.direction="advancing";e=this.selectedIndex+1;this.selectedIndex=(e+this.total)%this.total;return[2]}))}))};e.prototype.previousTip=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){this.direction="retreating";e=this.selectedIndex-1;this.selectedIndex=(e+this.total)%this.total;return[2]}))}))};e.prototype.setUpTips=function(){var e=Array.from(this.el.querySelectorAll("calcite-tip"));this.total=e.length;if(this.total===0){return}var t=this.el.querySelector("calcite-tip[selected]");this.tips=e;this.selectedIndex=t?e.indexOf(t):0;e.forEach((function(e){e.nonDismissible=true}));this.showSelectedTip();this.updateGroupTitle()};e.prototype.showSelectedTip=function(){var e=this;this.tips.forEach((function(t,i){var n=e.selectedIndex===i;t.selected=n;t.hidden=!n}))};e.prototype.updateGroupTitle=function(){var e=this.tips[this.selectedIndex];var t=e.closest("calcite-tip-group");this.groupTitle=t&&t.textGroupTitle||this.textDefaultTitle};e.prototype.renderPagination=function(){var e=a(this.el);var t=this,i=t.selectedIndex,r=t.tips,o=t.total;return r.length>1?n("footer",{class:f.pagination},n("calcite-action",{text:this.textPrevious,onClick:this.previousClicked,class:f.pagePrevious},n("calcite-icon",{scale:"s",icon:e==="ltr"?g.chevronLeft:g.chevronRight})),n("span",{class:f.pagePosition},this.textPaginationLabel+" "+(i+1)+"/"+o),n("calcite-action",{text:this.textNext,onClick:this.nextClicked,class:f.pageNext},n("calcite-icon",{scale:"s",icon:e==="ltr"?g.chevronRight:g.chevronLeft}))):null};e.prototype.render=function(){var e;var t=this,i=t.closed,o=t.direction,a=t.groupTitle,c=t.selectedIndex,l=t.textClose,u=t.total;if(u===0){return n(r,null)}return n(r,null,n("div",{class:f.container,hidden:i,"aria-hidden":i.toString(),tabIndex:0,onKeyUp:this.tipManagerKeyUpHandler,ref:this.storeContainerRef},n("header",{class:f.header},n("h2",{key:c,class:f.heading},a),n("calcite-action",{text:l,onClick:this.hideTipManager,class:f.close},n("calcite-icon",{scale:"s",icon:g.close}))),n("div",{tabIndex:0,class:s(f.tipContainer,(e={},e[f.tipContainerAdvancing]=!i&&o==="advancing",e[f.tipContainerRetreating]=!i&&o==="retreating",e)),key:c},n("slot",null)),this.renderPagination()))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{closed:["closedChangeHandler"],selectedIndex:["selectedChangeHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}\@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}\@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}\@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}\@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}:host{display:block}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0;font-weight:var(--calcite-app-font-weight-demi)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}:host([closed]){display:none}.header .heading{padding-left:var(--calcite-app-side-spacing-half);padding-right:var(--calcite-app-side-spacing-half)}.container{overflow:hidden;position:relative;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) 0;min-height:150px}.tip-container{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--calcite-app-animation-time);animation-duration:var(--calcite-app-animation-time);-webkit-animation-timing-function:var(--calcite-app-easing-function);animation-timing-function:var(--calcite-app-easing-function);height:18vh;overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start}::slotted(calcite-tip-group){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}::slotted(calcite-tip){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}.tip-container--advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container--retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:var(--calcite-app-cap-spacing-quarter) 0}.page-position{font-size:var(--calcite-app-font-size--1);margin:0 var(--calcite-app-side-spacing-half)}"},enumerable:true,configurable:true});return e}())}}}));