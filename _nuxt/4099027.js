/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{287:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"c",(function(){return r.a})),n.d(t,"b",(function(){return L}));var r=n(1);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function f(e,t){v(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(n){v(e.prototype,t.prototype,n)})),Object.getOwnPropertyNames(t).forEach((function(n){v(e,t,n)}))}function v(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach((function(r){var c=n?Reflect.getOwnMetadata(r,t,n):Reflect.getOwnMetadata(r,t);n?Reflect.defineMetadata(r,c,e,n):Reflect.defineMetadata(r,c,e)}))}var m={__proto__:[]}instanceof Array;function h(e){return function(t,n,r){var c="function"==typeof t?t:t.constructor;c.__decorators__||(c.__decorators__=[]),"number"!=typeof r&&(r=void 0),c.__decorators__.push((function(t){return e(t,n,r)}))}}function y(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var r in e.$options.props)e.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var data=new t;t.prototype._init=n;var r={};return Object.keys(data).forEach((function(e){void 0!==data[e]&&(r[e]=data[e])})),r}var _=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var n=e.prototype;Object.getOwnPropertyNames(n).forEach((function(e){if("constructor"!==e)if(_.indexOf(e)>-1)t[e]=n[e];else{var r=Object.getOwnPropertyDescriptor(n,e);void 0!==r.value?"function"==typeof r.value?(t.methods||(t.methods={}))[e]=r.value:(t.mixins||(t.mixins=[])).push({data:function(){return o({},e,r.value)}}):(r.get||r.set)&&((t.computed||(t.computed={}))[e]={get:r.get,set:r.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return y(this,e)}});var c=e.__decorators__;c&&(c.forEach((function(e){return e(t)})),delete e.__decorators__);var l=Object.getPrototypeOf(e.prototype),v=l instanceof r.a?l.constructor:r.a,m=v.extend(t);return O(m,e,v),d()&&f(m,e),m}var w={prototype:!0,arguments:!0,callee:!0,caller:!0};function O(e,t,n){Object.getOwnPropertyNames(t).forEach((function(r){if(!w[r]){var o=Object.getOwnPropertyDescriptor(e,r);if(!o||o.configurable){var l,d,f=Object.getOwnPropertyDescriptor(t,r);if(!m){if("cid"===r)return;var v=Object.getOwnPropertyDescriptor(n,r);if(l=f.value,d=c(l),null!=l&&("object"===d||"function"===d)&&v&&v.value===f.value)return}0,Object.defineProperty(e,r,f)}}}))}function C(e){return"function"==typeof e?k(e):function(t){return k(t,e)}}C.registerHooks=function(e){_.push.apply(_,l(e))};var N=C;var j="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function x(e,t,n){if(j&&!Array.isArray(e)&&"function"!=typeof e&&!e.hasOwnProperty("type")&&void 0===e.type){var r=Reflect.getMetadata("design:type",t,n);r!==Object&&(e.type=r)}}function L(e){return void 0===e&&(e={}),function(t,n){x(e,t,n),h((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}},317:function(e,t,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(67).default)("455e5e94",content,!0,{sourceMap:!1})},330:function(e,t,n){"use strict";n(317)},331:function(e,t,n){var r=n(66)(!1);r.push([e.i,"div.card-header-icon.blocked[data-v-1bbb530d]:hover{cursor:not-allowed}.first-letter[data-v-1bbb530d]{text-transform:capitalize}.block[data-v-1bbb530d]:hover{cursor:not-allowed}.mouse[data-v-1bbb530d]:hover{cursor:pointer}.invisible[data-v-1bbb530d]{visibility:hidden}",""]),e.exports=r},337:function(e,t,n){"use strict";n.r(t);n(285);var r=n(145),c=n(146),o=n(288),l=n(289),d=n(286),f=n(22),v=(n(65),n(10),n(23),n(29),n(53),n(71),n(54),n(24),n(25),n(328),n(205),n(287));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(e,t,n,desc){var r,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(c<3?r(o):c>3?r(t,n,o):r(t,n))||o);return c>3&&o&&Object.defineProperty(t,n,o),o},y=function(e){Object(o.a)(n,e);var t=m(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).editName=!1,e.newName=e.chat.name,e.editLink=!1,e.newLink=e.chat.inviteUrl||"",e.isDeleting=!1,e.open=!1,e}return Object(c.a)(n,[{key:"messengerIcon",get:function(){switch(this.chat.messenger){case"matrix":case"signal":return{pack:"fas",icon:"lock",invisible:!0};default:return{pack:"fab",icon:this.chat.messenger}}}},{key:"users",get:function(){var e=this;return this.$store.state.users.all.filter((function(u){return!e.chat.members.map((function(e){return e.id})).includes(u.id)}))}},{key:"isUrl",value:function(e){try{return new URL(e)}catch(e){return!1}}},{key:"cancelNameEdit",value:function(){this.newName=this.chat.name,this.editName=!1}},{key:"cancelLinkEdit",value:function(){this.newLink=this.chat.inviteUrl||"",this.editLink=!1}},{key:"saveNewName",value:function(){var e=this;""!==this.newName&&(this.newName===this.chat.name?this.editName=!1:this.$store.dispatch("chats/update",{id:this.chat.id,name:this.newName}).then((function(){e.editName=!1,e.newName=e.chat.name})))}},{key:"saveNewLink",value:function(){var e=this;""!==this.newLink&&(this.newLink===this.chat.inviteUrl?this.editLink=!1:this.$store.dispatch("chats/update",{id:this.chat.id,inviteUrl:this.newLink}).then((function(){e.editLink=!1,e.newLink=e.chat.inviteUrl})))}},{key:"deleteChat",value:function(){this.$store.dispatch("chats/delete",this.chat.id)}},{key:"addUser",value:function(e){this.$store.dispatch("chats/addUser",{chatId:this.chat.id,userId:e})}},{key:"removeUser",value:function(e){this.$store.dispatch("chats/removeUser",{chatId:this.chat.id,userId:e})}}]),n}(v.c);h([Object(v.b)({required:!0})],y.prototype,"chat",void 0);var _=y=h([v.a],y),k=(n(330),n(51)),component=Object(k.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card mb-2"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-header-icon",on:{click:function(t){e.open=!e.open}}},[n("b-icon",{attrs:{size:"is-small",icon:e.open?"chevron-up":"chevron-down"}})],1),e._v(" "),e.editName?n("b-input",{staticClass:"card-header-title p-0 pl-1",attrs:{placeholder:"Der Name des Chats...",expanded:""},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}}):n("div",{staticClass:"card-header-title mouse",on:{click:function(t){e.open=!e.open}}},[e._v("\n      "+e._s(e.chat.name)+"\n    ")]),e._v(" "),e.editName?e._e():n("div",{staticClass:"card-header-icon",on:{click:function(t){e.editName=!0}}},[n("b-icon",{attrs:{icon:"edit",size:"is-small"}})],1),e._v(" "),e.editName?n("div",{staticClass:"card-header-icon pr-0 mr-1",on:{click:function(t){return e.cancelNameEdit()}}},[n("b-icon",{attrs:{icon:"ban",type:"is-danger",size:"is-small"}})],1):e._e(),e._v(" "),e.editName?n("div",{staticClass:"card-header-icon pl-0",class:{blocked:""===e.newName},on:{click:function(t){return e.saveNewName()}}},[n("b-icon",{attrs:{icon:"check",type:"is-success",size:"is-small"}})],1):e._e()],1),e._v(" "),n("b-collapse",{attrs:{animation:"slide",open:e.open}},[n("div",{staticClass:"card-content p-2 px-5"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"first-letter is-flex is-align-items-center"},[n("b-icon",{staticClass:"mr-2",class:{invisible:!1},attrs:{pack:e.messengerIcon.pack,icon:e.messengerIcon.icon,size:"is-small"}}),e._v("\n            "+e._s(e.chat.messenger)+"\n          ")],1),e._v(" "),!e.editLink&&e.chat.inviteUrl?n("div",[e.isUrl(e.chat.inviteUrl)?n("div",{staticClass:"is-flex is-align-items-center"},[n("b-icon",{staticClass:"mr-1",attrs:{size:"is-small",icon:"link"}}),e._v(" "),n("a",{staticClass:"mr-1 ml-1",attrs:{href:e.chat.inviteUrl,target:"_blank"}},[e._v(e._s(e.isUrl(e.chat.inviteUrl).hostname))]),e._v("\n              ("),n("a",{on:{click:function(t){e.editLink=!0}}},[e._v("bearbeiten")]),e._v(")\n            ")],1):n("div",{staticClass:"is-flex is-align-items-center"},[n("b-icon",{staticClass:"mr-2",attrs:{size:"is-small",icon:"link"}}),e._v("\n              "+e._s(e.chat.inviteUrl)+" ("),n("a",{on:{click:function(t){e.editLink=!0}}},[e._v("bearbeiten")]),e._v(")\n            ")],1)]):e.editLink?n("div",{staticClass:"is-flex is-justify-content-space-between mt-1"},[n("div",{staticClass:"mr-3",staticStyle:{width:"100%"}},[n("b-input",{attrs:{placeholder:"Einladungslink oder Text...",expanded:"",size:"is-small"},model:{value:e.newLink,callback:function(t){e.newLink=t},expression:"newLink"}})],1),e._v(" "),n("div",{staticClass:"is-flex is-align-items-center"},[n("div",{staticClass:"mr-2 mouse",on:{click:function(t){return e.cancelLinkEdit()}}},[n("b-icon",{attrs:{icon:"ban",type:"is-danger",size:"is-small"}})],1),e._v(" "),n("div",{class:{mouse:""!==e.newLink,block:""===e.newLink},on:{click:function(t){return e.saveNewLink()}}},[n("b-icon",{attrs:{icon:"check",type:"is-success",size:"is-small"}})],1)])]):n("div",{staticClass:"is-flex is-align-items-center"},[n("b-icon",{staticClass:"mr-2",attrs:{size:"is-small",icon:"link"}}),e._v(" "),n("a",{on:{click:function(t){e.editLink=!0}}},[n("em",[e._v("Link hinzufügen")])])],1)]),e._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"title is-6 mb-1"},[e._v("Moderation")]),e._v(" "),n("div",{staticClass:"pl-2"},[e._l(e.chat.members,(function(t){return n("div",{key:t.id,staticClass:"is-flex is-justify-content-space-between is-align-items-center"},[n("div",[e._v("\n                "+e._s(t.displayName?t.displayName:t.userName)+"\n              ")]),e._v(" "),n("div",{staticClass:"mouse",on:{click:function(n){return e.removeUser(t.id)}}},[n("b-icon",{attrs:{icon:"trash",type:"is-danger",size:"is-small"}})],1)])})),e._v(" "),0==e.chat.members.length?n("div",{staticClass:"has-text-centered"},[e._v("\n              Keine Moderator:innen :(\n            ")]):e._e(),e._v(" "),n("div",{staticClass:"mt-3"},[n("b-select",{attrs:{size:"is-small",placeholder:"Moderator:in hinzufügen",expanded:""},on:{input:function(t){return e.addUser(t)}}},[e._l(e.users,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n                  "+e._s(t.displayName?t.displayName:t.userName)+"\n                ")])})),e._v(" "),0===e.users.length?n("option",{attrs:{disabled:""}},[e._v("\n                  Keine weiteren Moderator:innen\n                ")]):e._e()],2)],1)],2)])]),e._v(" "),n("div",{staticClass:"is-flex is-justify-content-center mt-3 mb-0"},[e.isDeleting?e._e():n("div",{staticClass:"mouse",on:{click:function(t){e.isDeleting=!0}}},[n("b-icon",{attrs:{icon:"trash",size:"is-small",type:"is-danger"}})],1),e._v(" "),e.isDeleting?n("div",{staticClass:"mouse mr-1",on:{click:function(t){e.isDeleting=!1}}},[n("b-icon",{attrs:{icon:"ban",size:"is-small",type:"is-danger"}})],1):e._e(),e._v(" "),e.isDeleting?n("div",{staticClass:"mouse ml-1",on:{click:function(t){return e.deleteChat()}}},[n("b-icon",{attrs:{icon:"check",size:"is-small",type:"is-success"}})],1):e._e()])])])],1)}),[],!1,null,"1bbb530d",null);t.default=component.exports}}]);