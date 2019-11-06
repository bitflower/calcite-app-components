System.register(["./p-8faa7bac.system.js","./p-1fd22dea.system.js"],(function(e){"use strict";var t,i,a;return{setters:[function(e){t=e.h;i=e.H},function(e){a=e.C}],execute:function(){function l(e,t){var i=e;if(i){i.set(t.value,t)}else if(i){i.set(t.value,t)}}var n=e("s",{mutationObserverCallback:function(){this.setUpItems();this.setUpFilter()},initialize:function(){this.setUpItems();this.setUpFilter()},initializeObserver:function(){this.observer.observe(this.el,{childList:true,subtree:true})},cleanUpObserver:function(){this.observer.disconnect()},calciteListItemChangeHandler:function(e){var t=this.selectedValues;var i=e.detail,a=i.item,l=i.value,n=i.selected,s=i.shiftPressed;if(n){if(!this.multiple){this.deselectSiblingItems(a)}if(this.multiple&&s){this.selectSiblings(a)}t.set(l,a)}else{t.delete(l)}this.lastSelectedItem=a;this.calciteListChange.emit(t)},setUpItems:function(e){var t=this;this.items=Array.from(this.el.querySelectorAll(e));this.items.forEach((function(e){e.icon=t.getIconType();e.compact=t.compact;if(e.selected){l(t.selectedValues,e)}}))},setUpFilter:function(){if(this.filterEnabled){this.dataForFilter=this.getItemData()}},deselectSiblingItems:function(e){var t=this;this.items.forEach((function(i){if(i!==e){i.toggleSelected(false);if(t.selectedValues.has(i.value)){t.selectedValues.delete(i.value)}}}))},selectSiblings:function(e){var t=this;if(!this.lastSelectedItem){return}var i=this.items;var a=i.findIndex((function(e){return e.value===t.lastSelectedItem.value}));var n=i.findIndex((function(t){return t.value===e.value}));i.slice(Math.min(a,n),Math.max(a,n)).forEach((function(e){e.toggleSelected(true);l(t.selectedValues,e)}))},handleFilter:function(e){var t=e.detail;var i=t.map((function(e){return e.value}));this.items.forEach((function(e){e.hidden=i.indexOf(e.value)===-1}))},getItemData:function(){var e=[];this.items.forEach((function(t){var i={};i.label=t.textLabel||t.textHeading;i.description=t.textDescription;i.metadata=t.metadata;i.value=t.value;e.push(i)}));return e}});var s=undefined&&undefined.__rest||function(e,t){var i={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0)i[a]=e[a];if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++){if(t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l]))i[a[l]]=e[a[l]]}return i};var r=function(e,i){return e||i?t(a,{loading:e}):null};var c=function(e){var a=e.props,l=e.text,n=s(e,["props","text"]);var c=a.disabled,u=a.loading,o=a.filterEnabled,f=a.dataForFilter,d=a.handleFilter;var h=l.filterPlaceholder;return t(i,Object.assign({"aria-disabled":c,"aria-busy":u},n),t("header",null,o?t("calcite-filter",{data:f,textPlaceholder:h,"aria-label":h,onCalciteFilterChange:d}):null,t("slot",{name:"menu-actions"})),t("slot",null),r(u,c))};e("L",c)}}}));