(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10,12],{315:function(e,t,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("0eeec1c0",content,!0,{sourceMap:!1})},317:function(e,t,n){"use strict";n(315)},318:function(e,t,n){var r=n(71)(!1);r.push([e.i,".datepicker-header>.pagination>a.pagination-next>.icon,.datepicker-header>.pagination>a.pagination-previous>.icon{height:.9rem;width:.9rem}",""]),e.exports=r},319:function(e,t,n){"use strict";n.r(t);var r=n(1).a.extend({props:{title:{type:String,required:!0},navBack:{type:Boolean,required:!1,default:!0}},methods:{back:function(){this.$router.push("/")}}}),o=(n(317),n(52)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[e.navBack?n("div",{staticClass:"card-header-icon",on:{click:function(t){return e.back()}}},[n("b-icon",{attrs:{size:"is-small",icon:"arrow-left"}})],1):e._e(),e._v(" "),n("div",{staticClass:"card-header-title"},[e._v(e._s(e.title))]),e._v(" "),e._t("end")],2),e._v(" "),n("div",{staticClass:"card-content"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},322:function(e,t,n){"use strict";function r(e){return function(a,b){return a[e]>b[e]?1:a[e]<b[e]?-1:0}}n.d(t,"a",(function(){return r}))},333:function(e,t,n){"use strict";n.r(t);n(310),n(38),n(39),n(27),n(20),n(41),n(28);var r=n(2),o=n(148),c=n(149),l=n(313),d=n(314),f=n(311),h=n(24),v=(n(19),n(70),n(11),n(33),n(40),n(320),n(31),n(32),n(48),n(25),n(55),n(56),n(312)),m=n(322);function y(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var _=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c};function C(){var e=new Date,t=e.getMinutes(),n=t>45?60-t:t>30?45-t:t>15?30-t:15-t;return e.setMinutes(t+n),e.setMilliseconds(0),e.setSeconds(0),e}var w=["description","target","type","location","annunciator","executor","reason","startDate"],O=function(e){Object(l.a)(f,e);var t,n,d=k(f);function f(){var e;return Object(o.a)(this,f),(e=d.apply(this,arguments)).target=null,e.type=null,e.description=null,e.location=null,e.annunciator=null,e.executor=null,e.reason=null,e.startDate=C(),e.endDate=null,e.notes=null,e.votePlus=0,e.voteNull=0,e.voteMinus=0,e.saveVoting=!1,e}return Object(c.a)(f,[{key:"targets",get:function(){return this.$store.state.targets.all.filter((function(){return!0})).sort(Object(m.a)("name"))}},{key:"chats",get:function(){var e=this.$store.state.chats.all,t={};e.forEach((function(e){t[e.messenger]||(t[e.messenger]=[]),t[e.messenger].push(e)}));var n=[];return Object.keys(t).sort().forEach((function(e){var r=[];t[e].sort(Object(m.a)("name")).forEach((function(e){return r.push([e.id,e.name])})),n.push([e,r])})),n}},{key:"users",get:function(){return this.$store.state.users.all.map((function(e){return{id:e.id,name:e.displayName||e.userName}})).sort(Object(m.a)("name"))}},{key:"content",get:function(){return JSON.parse(JSON.stringify({target:this.target||void 0,type:this.type||void 0,description:this.description||void 0,location:this.location||void 0,annunciator:this.annunciator||void 0,executor:this.executor||void 0,reason:this.reason||void 0,startDate:this.startDate?this.startDate.getTime():void 0,endDate:this.endDate?this.endDate.getTime():void 0,notes:this.notes||null,voting:this.saveVoting?"".concat(this.votePlus,"/").concat(this.voteNull,"/").concat(this.voteMinus):null}))}},{key:"updateContent",get:function(){var e=this,content={};return Object.keys(this.content).forEach((function(t){var n;switch(t){case"target":n=e.acase.target.id;break;case"startDate":case"endDate":n=e.acase[t].getTime();break;case"voting":n=e.acase[t]?"".concat(e.acase[t]["+"],"/").concat(e.acase[t][0],"/").concat(e.acase[t]["-"]):null;break;default:n=e.acase[t]}e.content[t]!==n&&(content[t]=e.content[t])})),content}},{key:"isReady",get:function(){if(this.saveVoting&&this.usedVotes>10)return!1;var e,t=y(w);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(!this.content[n])return!1}}catch(e){t.e(e)}finally{t.f()}return!0}},{key:"isUpdateReady",get:function(){return this.isReady&&0!==Object.keys(this.updateContent).length}},{key:"usedVotes",get:function(){return this.votePlus+this.voteNull+this.voteMinus}},{key:"created",value:function(){this.$store.dispatch("users/loadAll"),this.$store.dispatch("targets/loadAll"),this.$store.dispatch("chats/loadAll"),this.acase.id&&(Object.assign(this,this.acase,{target:this.acase.target.id,voting:void 0}),this.saveVoting=!(void 0===this.acase.voting||null===this.acase.voting),this.acase.voting&&(this.votePlus=this.acase.voting["+"],this.voteNull=this.acase.voting[0],this.voteMinus=this.acase.voting["-"]))}},{key:"create",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("cases/create",this.content);case 2:this.$router.push("/");case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"update",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("cases/update",Object.assign({id:this.acase.id},this.updateContent));case 2:this.$router.push("/#"+this.acase.id);case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),f}(v.c);_([Object(v.b)({required:!1,default:function(){return{}}})],O.prototype,"acase",void 0);var j=O=_([v.a],O),M=n(52),component=Object(M.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-field",{staticClass:"mb-5",attrs:{label:"Kurze Beschreibung*","label-position":"on-border"},scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"has-text-centered help"},[e._v("\n        Kurze Beschreibung für die Anzeige in der MAT App.\n      ")])]},proxy:!0}])},[n("b-input",{attrs:{size:"is-small",expanded:"","has-counter":"",maxlength:"100"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),e._v(" "),n("b-field",{staticClass:"mb-5",attrs:{label:"Person*","label-position":"on-border"},scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"has-text-centered help"},[e._v("\n        Die Person, gegen diese hier vorgegangen werden muss(te).\n      ")])]},proxy:!0}])},[n("b-select",{attrs:{expanded:"",placeholder:"Wähle die Person aus...",size:"is-small"},model:{value:e.target,callback:function(t){e.target=t},expression:"target"}},e._l(e.targets,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n        "+e._s(t.name+(t.localGroup?" ("+t.localGroup+")":""))+"\n      ")])})),0)],1),e._v(" "),n("b-field",{staticClass:"mb-5",attrs:{label:"Art der Maßnahme*","label-position":"on-border"},scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"has-text-centered help"},[e._v("\n        Die Art der Maßnahme, die gegen die Person ergriffen wurde bzw. wird.\n      ")])]},proxy:!0}])},[n("b-select",{attrs:{expanded:"",placeholder:"Wähle die Art aus...",size:"is-small"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[n("option",{attrs:{value:"warn"}},[e._v("Offizielle Verwarnung")]),e._v(" "),n("option",{attrs:{value:"ban"}},[e._v("Bann")])])],1),e._v(" "),n("b-field",{staticClass:"mb-5",attrs:{label:"Chat*","label-position":"on-border"},scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"has-text-centered help"},[e._v("\n        Gebe an, in welcher Gruppe die Person getan hat, was Eingreifen\n        erfordert (hat).\n      ")])]},proxy:!0}])},[n("b-select",{attrs:{expanded:"",placeholder:"Wähle den Chat aus...",size:"is-small"},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}},e._l(e.chats,(function(t){return n("optgroup",{key:t[0],attrs:{label:t[0].toUpperCase()}},e._l(t[1],(function(t){return n("option",{key:t[0],domProps:{value:t[0]}},[e._v("\n          "+e._s(t[1])+"\n        ")])})),0)})),0)],1),e._v(" "),n("b-field",{staticClass:"mb-5",attrs:{label:"Kommunikator:in*","label-position":"on-border"},scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"has-text-centered help"},[e._v("\n        Mit "),n("em",[e._v("Kommunikator:in")]),e._v(" ist das MAT-Mitglied gemeint, welches die\n        Person von der Maßnahme unterrichtet.\n      ")])]},proxy:!0}])},[n("b-select",{attrs:{expanded:"",placeholder:"Wähle das MAT-Mitglied aus...",size:"is-small"},model:{value:e.annunciator,callback:function(t){e.annunciator=t},expression:"annunciator"}},e._l(e.users,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0)],1),e._v(" "),n("b-field",{staticClass:"mb-5",attrs:{label:"Ausführende:r*","label-position":"on-border"},scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"has-text-centered help"},[e._v("\n        Wähle hier aus, welches MAT-Mitglied die Maßnahme durchführt, also zum\n        Beispiel die Person aus der Gruppe entfernt.\n      ")])]},proxy:!0}])},[n("b-select",{attrs:{expanded:"",placeholder:"Wähle das MAT-Mitglied aus...",size:"is-small"},model:{value:e.executor,callback:function(t){e.executor=t},expression:"executor"}},e._l(e.users,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0)],1),e._v(" "),n("b-field",{staticClass:"mb-5",attrs:{label:"Grund*","label-position":"on-border"},scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"has-text-centered help"},[e._v("\n        Begründe hier, warum du bzw. warum ihr euch für diese Maßnahme\n        entschieden habt, und was der Grund für diese war.\n      ")])]},proxy:!0}])},[n("b-input",{attrs:{type:"textarea",expanded:"",placeholder:"Schreibe hier den Grund für eure Maßnahme...",size:"is-small"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}})],1),e._v(" "),n("b-field",{staticClass:"mb-5",attrs:{label:"Start*","label-position":"on-border"},scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"has-text-centered help"},[e._v("\n        Gebe hier an, zu welchem Zeitpunkt die Maßnahme (ge)startet (hat).\n      ")])]},proxy:!0}])},[n("b-datetimepicker",{attrs:{size:"is-small",expanded:"","first-day-of-week":1,timepicker:{"increment-minutes":15,"default-minutes":0}},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),e._v(" "),n("b-collapse",{attrs:{open:"ban"===e.type}},[n("b-field",{staticClass:"mb-5",attrs:{label:"Ende","label-position":"on-border"},scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"has-text-centered help"},[e._v("\n          Begründe hier, für wie lange die Person aus der Gruppe\n          ausgeschlossen ist.\n        ")])]},proxy:!0}])},[n("b-datetimepicker",{attrs:{size:"is-small",expanded:"","first-day-of-week":1,timepicker:{"increment-minutes":15,"default-minutes":0}},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1),e._v(" "),n("b-field",{attrs:{label:"Notitzen","label-position":"on-border"}},[n("b-input",{attrs:{type:"textarea",expanded:"",placeholder:"Platz für Notitzen...",size:"is-small"},model:{value:e.notes,callback:function(t){e.notes=t},expression:"notes"}})],1),e._v(" "),n("b-field",{attrs:{label:"Abstimmungsergebnis"}},[n("b-checkbox",{attrs:{size:"is-small"},model:{value:e.saveVoting,callback:function(t){e.saveVoting=t},expression:"saveVoting"}},[e._v("\n      Abstimmungsergebnis speichern\n    ")])],1),e._v(" "),n("b-collapse",{staticClass:"mb-5",attrs:{animation:"slide",open:e.saveVoting}},[n("b-field",{scopedSlots:e._u([{key:"message",fn:function(){return[e.usedVotes>10?n("div",{staticClass:"help has-text-centered"},[e._v("\n          Es sind maximal nur 10 Stimmen möglich.\n        ")]):e._e()]},proxy:!0}])},[n("b-numberinput",{staticClass:"mx-1",attrs:{max:10,min:0,size:"is-small"},model:{value:e.votePlus,callback:function(t){e.votePlus=t},expression:"votePlus"}}),e._v(" "),n("b-numberinput",{staticClass:"mx-1",attrs:{size:"is-small",max:10,min:0},model:{value:e.voteNull,callback:function(t){e.voteNull=t},expression:"voteNull"}}),e._v(" "),n("b-numberinput",{staticClass:"mx-1",attrs:{size:"is-small",max:10,min:0},model:{value:e.voteMinus,callback:function(t){e.voteMinus=t},expression:"voteMinus"}})],1)],1),e._v(" "),e.acase.id?n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-button",{attrs:{expanded:"",type:"is-primary",size:"is-small"},on:{click:function(t){return e.$router.push("/cases#"+e.acase.id)}}},[e._v("Abbrechen")])],1),e._v(" "),n("div",{staticClass:"column"},[n("b-button",{attrs:{expanded:"",type:"is-primary",size:"is-small",disabled:!e.isUpdateReady},on:{click:function(t){return e.update()}}},[e._v("Speichern")])],1)]):n("b-button",{attrs:{type:"is-primary",size:"is-small",expanded:"",disabled:!e.isReady},on:{click:function(t){return e.create()}}},[e._v("Erstellen")])],1)}),[],!1,null,null,null);t.default=component.exports},370:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(148),c=n(149),l=n(313),d=n(314),f=n(311),h=n(24),v=(n(19),n(70),n(11),n(310),n(312));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},x=function(e){Object(l.a)(d,e);var t,n=m(d);function d(){var e;return Object(o.a)(this,d),(e=n.apply(this,arguments)).myCase=!1,e.notFound=!1,e}return Object(c.a)(d,[{key:"created",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$route.query.id){e.next=4;break}this.$router.push("/cases"),e.next=15;break;case 4:return this.$store.dispatch("targets/loadAll"),this.$store.dispatch("chats/loadAll"),e.prev=6,e.next=9,this.$store.dispatch("cases/loadOne",this.$route.query.id);case 9:this.myCase=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),this.notFound=!0;case 15:case"end":return e.stop()}}),e,this,[[6,12]])}))),function(){return t.apply(this,arguments)})}]),d}(v.c),k=x=y([v.a],x),_=n(52),component=Object(_.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",{staticStyle:{"min-height":"50vh"},attrs:{title:"Awarenessvorfall bearbeiten"}},[e.myCase?n("div",[n("case-editor",{attrs:{acase:e.myCase}})],1):e.notFound?n("div",[n("div",{staticClass:"p-5 has-text-centered"},[e._v('\n      Es gibt keinen Awarenessfall "'+e._s(e.$route.query.id)+'"\n    ')])]):n("div",[n("b-loading",{attrs:{"is-full-page":!1,active:""}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CaseEditor:n(333).default,Page:n(319).default})}}]);