(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1335:function(e,t,i){"use strict";i.r(t);var s=i(1188),n=i(1083),a={name:"NewsletterSubscribe",data:function(){return{email:""}},validations:{email:{required:n.required,email:n.email}},methods:{subscribe:function(e,t){if(!this.$v.$invalid)return this.$store.dispatch("newsletter/subscribe",this.email).then((function(t){e&&e(t)})).catch((function(e){t&&t(e)}))}}},o=i(25),l=i(1100),r=i(1109),u=i(1104),c={mounted:function(){var e=this;this.$nextTick((function(){e.$bus.$emit("modal-show","modal-newsletter")}))},beforeDestroy:function(){this.$off("validation-error")},methods:{onSuccesfulSubmission:function(e){e&&this.$store.dispatch("notification/spawnNotification",{type:"success",message:o.a.t("You have been successfully subscribed to our newsletter!"),action1:{label:o.a.t("OK")}}),this.$bus.$emit("modal-hide","modal-newsletter")}},components:{ButtonFull:l.a,Modal:r.a,BaseInput:u.a},mixins:[s.a,a]},d=i(34),m=Object(d.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("modal",{attrs:{name:"modal-newsletter",width:450}},[i("p",{attrs:{slot:"header"},slot:"header"},[e._v("\n    "+e._s(e.$t("Newsletter"))+"\n  ")]),e._v(" "),i("div",{attrs:{slot:"content"},slot:"content"},[i("form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.subscribe(e.onSuccesfulSubmission)}}},[i("div",{staticClass:"mb10"},[i("p",{staticClass:"h4"},[e._v("\n          "+e._s(e.$t("Sign up to our newsletter and receive a coupon for 10% off!"))+"\n        ")]),e._v(" "),i("base-input",{attrs:{focus:"",type:"email",name:"email",autocomplete:"email",placeholder:e.$t("E-mail address *"),validations:[{condition:e.$v.email.$error&&!e.$v.email.required,text:e.$t("Field is required.")},{condition:!e.$v.email.email&&e.$v.email.$error,text:e.$t("Please provide valid e-mail address.")}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),i("button-full",{staticClass:"mb35",attrs:{type:"submit",disabled:this.$v.$invalid},nativeOn:{click:function(t){return e.$v.email.$touch(t)}}},[e._v("\n        "+e._s(e.$t("Subscribe"))+"\n      ")])],1)])])}),[],!1,null,null,null);t.default=m.exports}}]);
//# sourceMappingURL=vsf-newsletter-modal.8806e5096db538a40089.js.map