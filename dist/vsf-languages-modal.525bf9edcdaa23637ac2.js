(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1174:function(t,n,e){var o=e(1313);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(105).default)("785f24f6",o,!0,{})},1312:function(t,n,e){"use strict";var o=e(1174);e.n(o).a},1313:function(t,n,e){(t.exports=e(104)(!1)).push([t.i,"h3[data-v-1c4f0d0e]{margin-top:0;margin-bottom:0.5em}.columns[data-v-1c4f0d0e]{-moz-column-count:2;-webkit-column-count:2;column-count:2;-webkit-column-gap:15px;-moz-column-gap:15px;column-gap:15px}.columns .country[data-v-1c4f0d0e]{-webkit-column-break-inside:avoid;page-break-inside:avoid;-moz-column-break-inside:avoid;break-inside:avoid}.country[data-v-1c4f0d0e]{margin-bottom:2em;color:#4f4f4f}ul[data-v-1c4f0d0e]{margin:0;padding:0;list-style-type:none;margin-left:-1em}ul li[data-v-1c4f0d0e]{display:inline-block;margin-left:1em}ul li a[data-v-1c4f0d0e]{font-size:0.9em}\n",""])},1339:function(t,n,e){"use strict";e.r(n);var o=e(1109),a=e(5);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u={components:{Modal:o.a},data:function(){return{minCountryPerColumn:3,componentLoaded:!1}},computed:{fullCountryName:function(){return a.i18n.fullCountryName},fullLanguageName:function(){return a.i18n.fullLanguageName},enableColumns:function(){return Object.keys(this.storeViews).length>this.minCountryPerColumn},storeViews:function(){var t=this;return Object.keys(a.storeViews).reduce((function(n,e){return t.isValidStoreCode(e)&&(n[e]=a.storeViews[e]),n}),{})}},mounted:function(){var t=this;this.$nextTick((function(){t.componentLoaded=!0,t.$bus.$emit("modal-show","modal-switcher")}))},methods:{close:function(){this.$bus.$emit("modal-hide","modal-switcher")},isValidStoreCode:function(t){var n=a.storeViews[t];return!(!n||"object"!==i(n)||!n.i18n)}}},r=(e(1312),e(34)),l=Object(r.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("modal",{attrs:{name:"modal-switcher",width:650}},[e("p",{attrs:{slot:"header"},slot:"header"},[t._v("\n    "+t._s(t.$t("Choose your country"))+"\n  ")]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("div",{class:{columns:t.enableColumns}},[e("div",{staticClass:"country country-current"},[e("h3",[t._v(t._s(t.$t(t.fullCountryName)))]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/"}},[t._v(t._s(t.$t(t.fullLanguageName)))])])])]),t._v(" "),t._l(t.storeViews,(function(n,o){return e("div",{key:o,staticClass:"country country-available"},[e("h3",[t._v(t._s(t.$t(n.i18n.fullCountryName)))]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:n.url}},[t._v(t._s(t.$t(n.i18n.fullLanguageName)))])])])])}))],2)])])}),[],!1,null,"1c4f0d0e",null);n.default=l.exports}}]);
//# sourceMappingURL=vsf-languages-modal.525bf9edcdaa23637ac2.js.map