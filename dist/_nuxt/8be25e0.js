(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{642:function(t,e,n){var content=n(705);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("7e2d8746",content,!0,{sourceMap:!1})},704:function(t,e,n){"use strict";n(642)},705:function(t,e,n){var o=n(16)(!1);o.push([t.i,".loan-application__card[data-v-532fab95],.loan-form__buttons[data-v-532fab95]{width:60rem;max-width:100%}.loan-form__buttons[data-v-532fab95]{text-align:right}.loan-submit__button[data-v-532fab95]{background-color:#01d167!important;color:#fff!important}.cancel-button[data-v-532fab95],.loan-submit__button[data-v-532fab95]{width:15rem;border-radius:2rem}",""]),t.exports=o},750:function(t,e,n){"use strict";n.r(e);n(11),n(6),n(8),n(14),n(10),n(15);var o=n(2),r=n(118),l=n(78),c=n(636),d=n(638);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=[{text:"Home loan",value:"home"},{text:"Education loan",value:"education"},{text:"Personal loan",value:"personal"},{text:"Auto loan",value:"auto"}],f={name:"apply",mixins:[c.validationMixin],data:function(){return{snackbar:!1}},computed:v({},Object(r.b)("loan",["tenure","amount","type"])),created:function(){this.MIN_LOAN_AMOUNT=100,this.MAX_LOAN_AMOUNT=5e3,this.MIN_TENURE_WEEKS=1,this.MAX_TENURE_WEEKS=10,this.LOAN_TYPE_LIST=_},validations:{type:{required:d.required},amount:{between:Object(d.between)(100,5e3)},tenure:{between:Object(d.between)(1,10)}},methods:v(v({},Object(l.b)("loan",["submit"])),{},{dispatchLoanApplication:function(){try{this.submit({tenure:this.tenure,amount:this.amount,type:this.type}),this.$router.push({path:"/loans"})}catch(t){this.snackbar=!0}}})},h=(n(704),n(64)),y=n(73),O=n.n(y),x=n(749),w=n(601),E=n(633),k=n(617),A=n(746),N=n(630),j=n(747),T=n(740),M=n(644),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"ma-auto pa-8 loan-application__card"},[n("v-card-title",[t._v("New loan application")]),t._v(" "),n("v-card-text",[n("v-form",{ref:"loanForm"},[n("v-label",[t._v("Loan Amount($)")]),t._v(" "),n("v-slider",{staticClass:"align-center",attrs:{color:"#01d167",max:t.MAX_LOAN_AMOUNT,min:t.MIN_LOAN_AMOUNT,"hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{color:"#01d167","hide-details":"","single-line":"",type:"number"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})]},proxy:!0}]),model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),t._v(" "),n("v-label",[t._v("Tenure(weeks)")]),t._v(" "),n("v-slider",{staticClass:"align-center",attrs:{color:"#01d167",max:t.MAX_TENURE_WEEKS,min:t.MIN_TENURE_WEEKS,"hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{color:"#01d167","hide-details":"","single-line":"",type:"number"},model:{value:t.tenure,callback:function(e){t.tenure=e},expression:"tenure"}})]},proxy:!0}]),model:{value:t.tenure,callback:function(e){t.tenure=e},expression:"tenure"}}),t._v(" "),n("v-autocomplete",{staticClass:"mt-4",attrs:{color:"#01d167",items:t.LOAN_TYPE_LIST,"item-text":"text","item-value":"value",dense:"",label:"Loan Type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),n("v-snackbar",{attrs:{timeout:1e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          Something went wrong. Please try again later.\n        ")])],1)],1)],1),t._v(" "),n("div",{staticClass:"loan-form__buttons mx-auto mt-6"},[n("v-btn",{staticClass:"pa-6 cancel-button",attrs:{to:{name:"loans"}}},[t._v("\n      Cancel\n    ")]),t._v(" "),n("v-btn",{staticClass:"pa-6 loan-submit__button",attrs:{disabled:t.$v.$invalid},on:{click:function(e){return e.preventDefault(),t.dispatchLoanApplication.apply(null,arguments)}}},[t._v("\n      Apply\n    ")])],1)],1)}),[],!1,null,"532fab95",null),S=component.exports;O()(component,{VAutocomplete:x.a,VBtn:w.a,VCard:E.a,VCardText:k.a,VCardTitle:k.b,VForm:A.a,VLabel:N.a,VSlider:j.a,VSnackbar:T.a,VTextField:M.a});var C={components:{Apply:S}},L=Object(h.a)(C,(function(){var t=this.$createElement;return(this._self._c||t)("apply")}),[],!1,null,null,null);e.default=L.exports}}]);