(window.webpackJsonp=window.webpackJsonp||[]).push([[19,12],{290:function(e,t,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(67).default)("0eeec1c0",content,!0,{sourceMap:!1})},292:function(e,t,n){"use strict";n(290)},293:function(e,t,n){var r=n(66)(!1);r.push([e.i,".datepicker-header>.pagination>a.pagination-next>.icon,.datepicker-header>.pagination>a.pagination-previous>.icon{height:.9rem;width:.9rem}",""]),e.exports=r},294:function(e,t,n){"use strict";n.r(t);n(23);var r=n(1).a.extend({props:{title:{type:String,required:!0}},methods:{back:function(){switch(this.$route.name){case"cases-edit":case"cases-delete":case"cases-new":return void this.$router.push("/cases");default:this.$router.push("/")}}}}),c=(n(292),n(51)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-header-icon",on:{click:function(t){return e.back()}}},[n("b-icon",{attrs:{size:"is-small",icon:"arrow-left"}})],1),e._v(" "),n("div",{staticClass:"card-header-title"},[e._v(e._s(e.title))]),e._v(" "),e._t("end")],2),e._v(" "),n("div",{staticClass:"card-content"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},295:function(e,t,n){"use strict";var r=n(8),c=n(4),l=n(68),o=n(34),d=n(43),f=n(14),v=n(6),h=n(204),m=n(147),_=n(299),y=n(300),k=n(88),x=n(301),O=[],C=c(O.sort),j=c(O.push),w=v((function(){O.sort(void 0)})),F=v((function(){O.sort(null)})),R=m("sort"),$=!v((function(){if(k)return k<70;if(!(_&&_>3)){if(y)return!0;if(x)return x<603;var code,e,t,n,r="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)O.push({k:e+n,v:t})}for(O.sort((function(a,b){return b.v-a.v})),n=0;n<O.length;n++)e=O[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:w||!F||!R||!$},{sort:function(e){void 0!==e&&l(e);var t=o(this);if($)return void 0===e?C(t):C(t,e);var n,r,c=[],v=d(t);for(r=0;r<v;r++)r in t&&j(c,t[r]);for(h(c,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:f(t)>f(n)?1:-1}}(e)),n=c.length,r=0;r<n;)t[r]=c[r++];for(;r<v;)delete t[r++];return t}})},299:function(e,t,n){var r=n(69).match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},300:function(e,t,n){var r=n(69);e.exports=/MSIE|Trident/.test(r)},301:function(e,t,n){var r=n(69).match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},314:function(e,t,n){"use strict";n.r(t);var r=n(146),c=n(145),l=n(288),o=n(289),d=n(286),f=n(22),v=(n(65),n(10),n(285),n(287));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var m=function(e,t,n,desc){var r,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(c<3?r(l):c>3?r(t,n,l):r(t,n))||l);return c>3&&l&&Object.defineProperty(t,n,l),l},_=function(e){Object(l.a)(n,e);var t=h(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n)}(v.c);m([Object(v.b)({required:!0})],_.prototype,"value",void 0);var y=_=m([v.a],_),k=n(51),component=Object(k.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-select",{attrs:{size:"is-small",expanded:""},on:{input:function(t){return e.$emit("input",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("option",{attrs:{value:"whatsapp"}},[e._v("WhatsApp")]),e._v(" "),n("option",{attrs:{value:"matrix"}},[e._v("Matrix")]),e._v(" "),n("option",{attrs:{value:"telegram"}},[e._v("Telegram")]),e._v(" "),n("option",{attrs:{value:"discord"}},[e._v("Discord")]),e._v(" "),n("option",{attrs:{value:"signal"}},[e._v("Signal")])])}),[],!1,null,null,null);t.default=component.exports},316:function(e,t,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(67).default)("66d498f2",content,!0,{sourceMap:!1})},326:function(e,t,n){"use strict";n(316)},327:function(e,t,n){var r=n(66)(!1);r.push([e.i,".mouse[data-v-0dcfd6ca]:hover{cursor:pointer}.invisible[data-v-0dcfd6ca]{visibility:hidden}",""]),e.exports=r},339:function(e,t,n){"use strict";n.r(t);n(285);var r=n(145),c=n(146),l=n(288),o=n(289),d=n(286),f=n(22),v=(n(65),n(10),n(23),n(295),n(29),n(53),n(71),n(287));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var m=function(e,t,n,desc){var r,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(c<3?r(l):c>3?r(t,n,l):r(t,n))||l);return c>3&&l&&Object.defineProperty(t,n,l),l},_=function(e){Object(l.a)(n,e);var t=h(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).add=!1,e.name="",e.messenger="whatsapp",e.inviteUrl="",e.addAutomatic=!0,e.filterOpen=!1,e.nameFilter="",e.messengerFilter="",e}return Object(c.a)(n,[{key:"chats",get:function(){var e=this;return this.$store.state.chats.all.filter((function(t){return t.name.toLowerCase().includes(e.nameFilter.toLowerCase())&&(!e.messengerFilter||t.messenger===e.messengerFilter)})).sort((function(a,b){return a.name>b.name?1:a.name<b.name?-1:0}))}},{key:"users",get:function(){return this.$store.state.users.all}},{key:"filtered",get:function(){return this.$store.state.chats.all.length-this.chats.length}},{key:"content",get:function(){return{name:this.name,messenger:this.messenger,inviteUrl:""===this.inviteUrl?void 0:this.inviteUrl}}},{key:"created",value:function(){this.$store.dispatch("chats/loadAll"),this.$store.dispatch("users/loadAll")}},{key:"reset",value:function(){this.add=!1,this.name="",this.messenger="whatsapp",this.inviteUrl="",this.addAutomatic=!0}},{key:"resetFilters",value:function(){this.nameFilter="",this.messengerFilter=""}},{key:"create",value:function(){var e=this;""!==this.name&&this.$store.dispatch("chats/create",this.content).then((function(t){e.addAutomatic&&e.$store.dispatch("chats/addUser",{chatId:t.id,userId:e.$auth.user.id}),e.reset()}))}}]),n}(v.c),y=_=m([v.a],_),k=(n(326),n(51)),component=Object(k.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Page",{attrs:{title:"Chats"},scopedSlots:e._u([{key:"end",fn:function(){return[n("div",{staticClass:"card-header-icon mr-0 pr-1",on:{click:function(t){e.add?e.reset():e.add=!e.add}}},[n("b-icon",{attrs:{icon:e.add?"ban":"plus",size:"is-small"}})],1),e._v(" "),n("div",{staticClass:"card-header-icon",on:{click:function(t){e.filterOpen=!e.filterOpen}}},[n("b-icon",{attrs:{icon:"filter",size:"is-small",type:0===e.filtered?"is-dark":"is-success"}})],1)]},proxy:!0}])},[e._v(" "),n("b-collapse",{attrs:{animation:"fade",open:e.add}},[n("div",{staticClass:"box is-flex is-justify-content-space-between is-align-items-end mb-3"},[n("div",{staticClass:"mr-6",staticStyle:{width:"100%"}},[n("div",{staticClass:"title is-6 mb-2"},[e._v("Chat eintragen")]),e._v(" "),n("b-field",{attrs:{label:"Gruppenname*","label-position":"on-border"}},[n("b-input",{attrs:{size:"is-small",placeholder:"Der Gruppenname..."},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),n("b-field",{attrs:{label:"Plattform*","label-position":"on-border"}},[n("MessengerSelector",{model:{value:e.messenger,callback:function(t){e.messenger=t},expression:"messenger"}})],1),e._v(" "),n("b-field",{attrs:{label:"Einladungslink","label-position":"on-border"}},[n("b-input",{attrs:{size:"is-small",placeholder:"Der Einladungslink..."},model:{value:e.inviteUrl,callback:function(t){e.inviteUrl=t},expression:"inviteUrl"}})],1),e._v(" "),n("b-field",[n("b-checkbox",{attrs:{size:"is-small"},model:{value:e.addAutomatic,callback:function(t){e.addAutomatic=t},expression:"addAutomatic"}},[e._v("Mich automatisch als Moderator:in hinzufügen")])],1)],1),e._v(" "),n("div",{staticClass:"is-flex"},[n("div",{staticClass:"mouse",on:{click:function(t){return e.reset()}}},[n("b-icon",{attrs:{icon:"ban",type:"is-danger",size:"is-small"}})],1),e._v(" "),n("div",{class:{mouse:""!==e.name},on:{click:function(t){return e.create()}}},[n("b-icon",{staticClass:"ml-2",attrs:{icon:"check",type:""!==e.name?"is-success":"is-dark",size:"is-small"}})],1)])])]),e._v(" "),n("b-collapse",{attrs:{animation:"slide",open:e.filterOpen}},[n("b-message",{staticClass:"mb-2"},[n("div",{staticClass:"is-flex is-justify-content-space-between mb-3"},[n("div",{staticClass:"title is-6"},[e._v("Filter-Optionen")]),e._v(" "),n("a",{staticClass:"help mb-0",class:{invisible:0===e.filtered},on:{click:function(t){return e.resetFilters()}}},[e._v("Filter zurücksetzen")])]),e._v(" "),n("b-field",{attrs:{label:"Name","label-position":"on-border"}},[n("b-input",{attrs:{expanded:"",size:"is-small"},model:{value:e.nameFilter,callback:function(t){e.nameFilter=t},expression:"nameFilter"}})],1),e._v(" "),n("messenger-selector",{model:{value:e.messengerFilter,callback:function(t){e.messengerFilter=t},expression:"messengerFilter"}}),e._v(" "),0!==e.filtered?n("div",{staticClass:"has-text-centered"},[e._v("\n          "+e._s(e.chats.length)+" / "+e._s(e.chats.length+e.filtered)+"\n        ")]):e._e()],1)],1),e._v(" "),e._l(e.chats,(function(e){return n("chat",{key:e.id,attrs:{chat:e}})})),e._v(" "),0===e.chats.length?n("div",{staticClass:"has-text-centered p-6"},[0===e.filtered?n("div",[e._v("Es wurde noch kein Chat eingetragen :(")]):n("div",[e._v("Keine Chats gefunden :(")])]):e._e()],2)],1)}),[],!1,null,"0dcfd6ca",null);t.default=component.exports;installComponents(component,{MessengerSelector:n(314).default,MessengerSelector:n(314).default,Chat:n(337).default,Page:n(294).default})}}]);