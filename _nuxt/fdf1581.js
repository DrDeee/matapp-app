(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{296:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("04fc1ac2",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return v}));n(19);var r=n(309),o=/^@[A-Z0-9._=-]+:[A-Z0-9.-]+\.[A-Z]{2,}$/i,c=/^@[A-Z0-9]{1}[A-Z0-9_]{3,}[A-Z0-9]{1}$/i,l=/^[1-9]{1}[0-9]{16,17}$/,d={phone:function(data){return""===data||Object(r.phone)(data,{country:"DE"}).isValid},discord:function(data){return""===data||l.test(data)},matrix:function(data){return""===data||o.test(data)},telegram:function(data){return""===data||c.test(data)},localGroup:function(){return!0}},f={phone:function(data){return Object(r.phone)(data,{country:"DE"}).phoneNumber||void 0},discord:function(data){return data||void 0},matrix:function(data){return data||void 0},telegram:function(data){return data||void 0},localGroup:function(data){return data||void 0}},v={phone:"phoneNumber",discord:"discord",matrix:"matrix",telegram:"telegram",localGroup:"localGroup"}},303:function(t,e,n){"use strict";n(296)},304:function(t,e,n){var r=n(66)(!1);r.push([t.i,".mouse[data-v-2175e512]{cursor:pointer}",""]),t.exports=r},307:function(t,e,n){"use strict";n.r(e);n(285);var r=n(37),o=n(145),c=n(146),l=n(288),d=n(289),f=n(286),v=n(22),h=(n(65),n(10),n(53),n(287)),m=n(298);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(l.a)(n,t);var e=y(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).content="",t.edit=!1,t}return Object(c.a)(n,[{key:"isValid",get:function(){return m.c[this.validator](this.content)}},{key:"isValidAndNew",get:function(){if(!this.isValid)return!1;var data=m.a[this.validator](this.content);return!(data===this.value||!data&&!this.value)}},{key:"created",value:function(){this.content=this.value}},{key:"reset",value:function(){this.edit=!1,this.content=this.value}},{key:"update",value:function(){var t=this;if(this.isValidAndNew){var e=m.a[this.validator](this.content);this.$store.dispatch("targets/update",Object(r.a)({id:this.targetId},m.b[this.validator],e||null)).then((function(){t.reset()}))}}}]),n}(h.c);O([Object(h.b)({required:!0})],j.prototype,"label",void 0),O([Object(h.b)({required:!0})],j.prototype,"value",void 0),O([Object(h.b)({required:!0})],j.prototype,"targetId",void 0),O([Object(h.b)({required:!0})],j.prototype,"message",void 0),O([Object(h.b)({required:!0,validator:function(t){return"string"==typeof t&&["phone","discord","matrix","telegram","localGroup"].includes(t)}})],j.prototype,"validator",void 0);var _=j=O([h.a],j),x=(n(303),n(51)),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"is-flex is-align-items-center"},[n("div",{staticStyle:{width:"100%"}},[n("b-field",{attrs:{label:t.label,"label-position":"on-border"}},[n("b-input",{attrs:{expanded:"",size:"is-small",disabled:!t.edit},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),t._v(" "),n("div",{staticClass:"ml-2 is-flex"},[t.edit?t._e():n("div",{staticClass:"mouse",on:{click:function(e){t.edit=!0}}},[n("b-icon",{attrs:{size:"is-small",icon:"edit"}})],1),t._v(" "),t.edit?n("div",{staticClass:"mouse mr-2",on:{click:function(e){return t.reset()}}},[n("b-icon",{attrs:{size:"is-small",type:"is-danger",icon:"ban"}})],1):t._e(),t._v(" "),t.edit?n("div",{class:{mouse:t.isValidAndNew},on:{click:function(e){return t.update()}}},[n("b-icon",{attrs:{size:"is-small",type:t.isValidAndNew?"is-success":"is-dark",icon:"check"}})],1):t._e()])]),t._v(" "),t.content&&!t.isValid?n("div",{staticClass:"has-text-right help mr-6"},[t._v("\n    "+t._s(t.message)+"\n  ")]):t._e()])}),[],!1,null,"2175e512",null);e.default=component.exports}}]);