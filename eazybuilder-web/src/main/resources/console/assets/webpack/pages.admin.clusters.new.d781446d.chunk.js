(this.webpackJsonp=this.webpackJsonp||[]).push([[182],{"/GZH":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d}));var r=40,i=35,s=13,o=27,a=36,c=37,l=39,u=32,d=38},11:function(t,e,n){n("HVBj"),n("iooJ"),n("doab"),t.exports=n("m/CJ")},"4lAS":function(t,e,n){"use strict";var r=n("ofGl"),i=n("XBTk"),s=n("g3So"),o=n("s1D3"),a=n("FkSe"),c=n("Pyw5"),l=n.n(c);const u={components:{BButton:r.a,GlIcon:o.a,GlLoadingIcon:a.a},mixins:[s.a],props:{category:{type:String,required:!1,default:i.u.primary,validator:function(t){return Object.keys(i.u).includes(t)}},variant:{type:String,required:!1,default:i.x.default,validator:function(t){return Object.keys(i.x).includes(t)}},size:{type:String,required:!1,default:i.v.medium,validator:function(t){return Object.keys(i.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},buttonTextClasses:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){var t=["gl-button"];return[i.x.dashed,i.x.link].includes(this.variant)||this.category===i.u.primary||t.push("btn-".concat(this.variant,"-").concat(this.category)),t.push({"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,selected:this.selected}),this.label&&t.push("btn","btn-label","btn-".concat(this.buttonSize)),t},buttonSize:function(){return i.w[this.size]}}};const d=l()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.label?"span":"b-button",t._g(t._b({directives:[{name:"safe-link",rawName:"v-safe-link:[safeLinkConfig]",arg:t.safeLinkConfig}],tag:"component",class:t.buttonClasses,attrs:{target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"component",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-icon gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),!t.hasIcon||t.hasIconOnly&&t.loading?t._e():n("gl-icon",{staticClass:"gl-button-icon",attrs:{name:t.icon}}),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text",class:t.buttonTextClasses},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},CFlc:function(t,e,n){"use strict";var r=n("jB52"),i=n("MV2A"),s=n("30su"),o=n("yi8e"),a=n("/lV4");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={i18n:{title:Object(a.e)("ClusterIntegration|Enter the details for your Kubernetes cluster"),information:Object(a.e)("ClusterIntegration|Please enter access information for your Kubernetes cluster. If you need help, you can read our %{linkStart}documentation%{linkEnd} on Kubernetes")},components:{GlLink:i.a,GlSprintf:s.a},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(o.f)(["clusterConnectHelpPath"]))},d=n("tBpV"),f=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v(t._s(t.$options.i18n.title))]),t._v(" "),n("p",[n("gl-sprintf",{attrs:{message:t.$options.i18n.information},scopedSlots:t._u([{key:"link",fn:function(e){var r=e.content;return[n("gl-link",{attrs:{href:t.clusterConnectHelpPath,target:"_blank"}},[t._v(t._s(r))])]}}])})],1)])}),[],!1,null,null,null).exports,b=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{clusterConnectHelpPath:t.clusterConnectHelpPath}};r.default.use(o.b);const p=function(t){return new o.b.Store({state:b(t)})};e.a=function(){const t=document.querySelector("#js-cluster-new");return t?new r.default({el:"#js-cluster-new",store:p(t.dataset),render:t=>t(f)}):null}},FkSe:function(t,e,n){"use strict";var r=n("Pyw5"),i=["sm","md","lg","xl"],s={dark:"dark",light:"light"};const o={props:{label:{type:String,required:!1,default:"Loading"},size:{type:String,required:!1,default:"sm",validator:function(t){return-1!==i.indexOf(t)}},color:{type:String,required:!1,default:s.dark,validator:function(t){return Object.keys(s).includes(t)}},inline:{type:Boolean,required:!1,default:!1}},computed:{rootElementType:function(){return this.inline?"span":"div"},cssClasses:function(){return["gl-spinner","".concat("gl-spinner","-").concat(s[this.color]),"".concat("gl-spinner","-").concat(this.size)]}}};const a=n.n(r)()({render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.rootElementType,{tag:"component",staticClass:"gl-spinner-container"},[e("span",{staticClass:"align-text-bottom",class:this.cssClasses,attrs:{"aria-label":this.label}})])},staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=a},"Ge+5":function(t,e,n){"use strict";var r=n("4lAS"),i=n("Pyw5"),s=n.n(i);const o={name:"CloseButton",components:{GlButton:r.a},props:{label:{type:String,required:!1,default:"Close"}}};const a=s()({render:function(){var t=this.$createElement;return(this._self._c||t)("gl-button",this._g(this._b({attrs:{category:"tertiary",size:"small",icon:"close","aria-label":this.label}},"gl-button",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=a},doab:function(t,e,n){"use strict";n.r(e);var r=n("vtCS");document.addEventListener("DOMContentLoaded",(function(){Object(r.a)(document,gon)}))},dsWN:function(t,e,n){"use strict";var r=n("XBTk"),i=n("Ge+5"),s=n("4lAS"),o=n("s1D3"),a=n("Pyw5"),c=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const f={components:{GlIcon:o.a,CloseButton:i.a,GlButton:s.a},props:{title:{type:String,required:!1,default:""},dismissible:{type:Boolean,required:!1,default:!0},dismissLabel:{type:String,required:!1,default:"Dismiss"},variant:{type:String,required:!1,default:r.c.info,validator:function(t){return Object.keys(r.c).includes(t)}},primaryButtonLink:{type:String,required:!1,default:""},primaryButtonText:{type:String,required:!1,default:""},secondaryButtonLink:{type:String,required:!1,default:""},secondaryButtonText:{type:String,required:!1,default:""},contained:{type:Boolean,required:!1,default:!1},sticky:{type:Boolean,required:!1,default:!1}},computed:{iconName:function(){return r.b[this.variant]},shouldRenderActions:function(){return Boolean(this.$slots.actions||this.actionButtons.length)},actionButtons:function(){return[{text:this.primaryButtonText,attrs:{href:this.primaryButtonLink,variant:"confirm",category:r.u.primary},listeners:{click:this.primaryButtonClicked}},{text:this.secondaryButtonText,attrs:{href:this.secondaryButtonLink,variant:"default",category:r.u.secondary},listeners:{click:this.secondaryButtonClicked}}].reduce((function(t,e){if(!e.text)return t;var n=d({},e.attrs);return n.href||delete n.href,t.push(d(d({},e),{},{attrs:n})),t}),[])},variantClass:function(){return"gl-alert-".concat(this.variant)}},methods:{primaryButtonClicked:function(t){this.$emit("primaryAction",t)},secondaryButtonClicked:function(t){this.$emit("secondaryAction",t)},onDismiss:function(){this.$emit("dismiss")}}};const b=c()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["gl-alert",{"gl-alert-max-content":t.contained},{"gl-alert-sticky":t.sticky},{"gl-alert-not-dismissible":!t.dismissible},t.variantClass]},[n("div",{staticClass:"gl-alert-container"},[n("gl-icon",{class:{"gl-alert-icon":!0,"gl-alert-icon-no-title":!t.title},attrs:{name:t.iconName}}),t._v(" "),t.dismissible?n("close-button",{ref:"dismiss",staticClass:"gl-dismiss-btn",attrs:{label:t.dismissLabel},on:{click:t.onDismiss}}):t._e(),t._v(" "),n("div",{staticClass:"gl-alert-content",attrs:{role:"alert"}},[t.title?n("h4",{staticClass:"gl-alert-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"gl-alert-body"},[t._t("default")],2),t._v(" "),t.shouldRenderActions?n("div",{staticClass:"gl-alert-actions"},[t._t("actions",t._l(t.actionButtons,(function(e,r){return n("gl-button",t._g(t._b({key:r,staticClass:"gl-alert-action"},"gl-button",e.attrs,!1),e.listeners),[t._v("\n            "+t._s(e.text)+"\n          ")])})))],2):t._e()])],1)])},staticRenderFns:[]},void 0,f,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=b},iooJ:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"requestStatistics",(function(){return O})),n.d(r,"fetchStatistics",(function(){return h})),n.d(r,"receiveStatisticsSuccess",(function(){return j})),n.d(r,"receiveStatisticsError",(function(){return S}));var i={};n.r(i),n.d(i,"getStatistics",(function(){return _}));var s=n("jB52"),o=n("FkSe"),a=n("yi8e"),c=n("/lV4");var l={forks:Object(c.e)("AdminStatistics|Forks"),issues:Object(c.e)("AdminStatistics|Issues"),mergeRequests:Object(c.e)("AdminStatistics|Merge requests"),notes:Object(c.e)("AdminStatistics|Notes"),snippets:Object(c.e)("AdminStatistics|Snippets"),sshKeys:Object(c.e)("AdminStatistics|SSH Keys"),milestones:Object(c.e)("AdminStatistics|Milestones"),activeUsers:Object(c.e)("AdminStatistics|Active Users")};function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b={components:{GlLoadingIcon:o.a},data:()=>({statisticsLabels:l}),computed:d(d({},Object(a.f)(["isLoading","statistics"])),Object(a.d)(["getStatistics"])),mounted(){this.fetchStatistics()},methods:d({},Object(a.c)(["fetchStatistics"]))},p=n("tBpV"),g=Object(p.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gl-card"},[n("div",{staticClass:"gl-card-body"},[n("h4",[t._v(t._s(t.__("Statistics")))]),t._v(" "),t.isLoading?n("gl-loading-icon",{staticClass:"my-3",attrs:{size:"md"}}):t._l(t.getStatistics(t.statisticsLabels),(function(e){return n("p",{key:e.key,staticClass:"js-stats"},[t._v("\n        "+t._s(e.label)+"\n        "),n("span",{staticClass:"light float-right"},[t._v(t._s(e.value))])])}))],2)])}),[],!1,null,null,null).exports,y=n("qPgm"),v=n("XRO8"),m=n("NmEs");const O=function(t){let{commit:e}=t;return e("REQUEST_STATISTICS")},h=function(t){let{dispatch:e}=t;e("requestStatistics"),y.a.adminStatistics().then((function(t){let{data:n}=t;e("receiveStatisticsSuccess",Object(m.h)(n,{deep:!0}))})).catch((function(t){return e("receiveStatisticsError",t)}))},j=function(t,e){let{commit:n}=t;return n("RECEIVE_STATISTICS_SUCCESS",e)},S=function(t,e){let{commit:n}=t;n("RECEIVE_STATISTICS_ERROR",e),Object(v.c)(Object(c.e)("AdminDashboard|Error loading the statistics. Please try again"))},_=function(t){return function(e){return Object.keys(e).map((function(n){return{key:n,label:e[n],value:t.statistics&&t.statistics[n]?t.statistics[n]:null}}))}};var k={REQUEST_STATISTICS(t){t.isLoading=!0},RECEIVE_STATISTICS_SUCCESS(t,e){t.isLoading=!1,t.error=null,t.statistics=e},RECEIVE_STATISTICS_ERROR(t,e){t.isLoading=!1,t.error=e}};s.default.use(a.b);var C=function(){return new a.b.Store({actions:r,getters:i,mutations:k,state:{error:null,isLoading:!1,statistics:null}})};n("orcL");var P={components:{GlAlert:n("dsWN").a},props:{html:{type:String,required:!1,default:""}},data:()=>({isDismissed:!1}),methods:{dismiss(){this.isDismissed=!0}}},w=Object(p.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDismissed?t._e():n("gl-alert",t._g(t._b({on:{dismiss:t.dismiss}},"gl-alert",t.$attrs,!1),t.$listeners),[n("div",{domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null).exports;function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){q(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const T=function(t){const e={html:t.innerHTML},n=B(B({},t.dataset),{},{dismissible:Object(m.K)(t.dataset.dismissible)});return new s.default({el:t,render:t=>t(w,{props:e,attrs:n})})};var D=n("EmJ/"),I=n.n(D),x=n("3twG");[...document.querySelectorAll(".js-vue-alert")].map(T);const A=document.getElementById("js-admin-statistics-container");I()("input#user_force_random_password").on("change",(function(){const t=I()("#user_password, #user_password_confirmation");I()(this).attr("checked")?t.val("").prop("disabled",!0):t.prop("disabled",!1)})),I()("body").on("click",".js-toggle-colors-link",(function(t){t.preventDefault(),I()(".js-toggle-colors-container").toggleClass("hide")})),I()("li.project_member, li.group_member").on("ajax:success",x.u),function(t){if(!t)return!1;const e=C();new s.default({el:t,store:e,components:{StatisticsPanelApp:g},render:t=>t(g)})}(A)},"m/CJ":function(t,e,n){"use strict";n.r(e);var r=n("CFlc");document.addEventListener("DOMContentLoaded",(function(){Object(r.a)()}))},ofGl:function(t,e,n){"use strict";n.d(e,"a",(function(){return B}));var r=n("0zRR"),i=n("/GZH"),s=n("/Szx"),o=n("lgrP"),a=n("TjC/"),c=n("t8l0"),l=n("o/E4"),u=n("QXXq"),d=n("BrvI"),f=n("7bmO"),b=n("ua/H"),p=n("U9NU"),g=n("1m+M");function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=Object(f.k)(g.b,["event","routerTag"]);delete O.href.default,delete O.to.default;var h=v(v({},{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return Object(c.b)(r.g,"size")}},variant:{type:String,default:function(){return Object(c.b)(r.g,"variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}}),O),j=function(t){"focusin"===t.type?Object(l.b)(t.target,"focus"):"focusout"===t.type&&Object(l.y)(t.target,"focus")},S=function(t){return Object(p.d)(t)||Object(l.t)(t.tag,"a")},_=function(t){return Object(d.b)(t.pressed)},k=function(t){return!(S(t)||t.tag&&!Object(l.t)(t.tag,"button"))},C=function(t){return!S(t)&&!k(t)},P=function(t){var e;return["btn-".concat(t.variant||Object(c.b)(r.g,"variant")),(e={},m(e,"btn-".concat(t.size),t.size),m(e,"btn-block",t.block),m(e,"rounded-pill",t.pill),m(e,"rounded-0",t.squared&&!t.pill),m(e,"disabled",t.disabled),m(e,"active",t.pressed),e)]},w=function(t){return S(t)?Object(b.a)(O,t):{}},E=function(t,e){var n=k(t),r=S(t),i=_(t),s=C(t),o=r&&"#"===t.href,a=e.attrs&&e.attrs.role?e.attrs.role:null,c=e.attrs?e.attrs.tabindex:null;return(s||o)&&(c="0"),{type:n&&!r?t.type:null,disabled:n?t.disabled:null,role:s||o?"button":a,"aria-disabled":s?String(t.disabled):null,"aria-pressed":i?String(t.pressed):null,autocomplete:i?"off":null,tabindex:t.disabled&&!n?"-1":c}},B=s.a.extend({name:r.g,functional:!0,props:h,render:function(t,e){var n=e.props,r=e.data,s=e.listeners,c=e.children,l=_(n),f=S(n),b=C(n),p=f&&"#"===n.href,y={keydown:function(t){if(!n.disabled&&(b||p)){var e=t.keyCode;if(e===i.h||e===i.c&&b){var r=t.currentTarget||t.target;Object(u.d)(t,{propagation:!1}),r.click()}}},click:function(t){n.disabled&&Object(d.d)(t)?Object(u.d)(t):l&&s&&s["update:pressed"]&&Object(a.b)(s["update:pressed"]).forEach((function(t){Object(d.e)(t)&&t(!n.pressed)}))}};l&&(y.focusin=j,y.focusout=j);var v={staticClass:"btn",class:P(n),props:w(n),attrs:E(n,r),on:y};return t(f?g.a:n.tag,Object(o.a)(r,v),c)}})}},[[11,1,0,2,19]]]);
//# sourceMappingURL=pages.admin.clusters.new.d781446d.chunk.js.map