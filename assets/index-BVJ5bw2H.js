(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function n_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var G0={exports:{}},mu={},W0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),i_=Symbol.for("react.portal"),r_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),o_=Symbol.for("react.profiler"),a_=Symbol.for("react.provider"),l_=Symbol.for("react.context"),u_=Symbol.for("react.forward_ref"),c_=Symbol.for("react.suspense"),f_=Symbol.for("react.memo"),h_=Symbol.for("react.lazy"),cp=Symbol.iterator;function d_(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var j0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X0=Object.assign,Y0={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=Y0,this.updater=n||j0}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q0(){}q0.prototype=Ks.prototype;function Vh(t,e,n){this.props=t,this.context=e,this.refs=Y0,this.updater=n||j0}var Hh=Vh.prototype=new q0;Hh.constructor=Vh;X0(Hh,Ks.prototype);Hh.isPureReactComponent=!0;var fp=Array.isArray,$0=Object.prototype.hasOwnProperty,Gh={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function Z0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$0.call(e,i)&&!K0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ua,type:t,key:s,ref:o,props:r,_owner:Gh.current}}function p_(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function m_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m_(""+t.key):e.toString(36)}function cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case i_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bu(o,0):i,fp(r)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),cl(r,e,n,"",function(u){return u})):r!=null&&(Wh(r)&&(r=p_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bu(s,a);o+=cl(s,e,n,l,r)}else if(l=d_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bu(s,a++),o+=cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function va(t,e,n){if(t==null)return t;var i=[],r=0;return cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function g_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},fl={transition:null},v_={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:fl,ReactCurrentOwner:Gh};function J0(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!Wh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Ks;je.Fragment=r_;je.Profiler=o_;je.PureComponent=Vh;je.StrictMode=s_;je.Suspense=c_;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v_;je.act=J0;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=X0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$0.call(e,l)&&!K0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ua,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:l_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a_,_context:t},t.Consumer=t};je.createElement=Z0;je.createFactory=function(t){var e=Z0.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:u_,render:t}};je.isValidElement=Wh;je.lazy=function(t){return{$$typeof:h_,_payload:{_status:-1,_result:t},_init:g_}};je.memo=function(t,e){return{$$typeof:f_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};je.unstable_act=J0;je.useCallback=function(t,e){return nn.current.useCallback(t,e)};je.useContext=function(t){return nn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};je.useEffect=function(t,e){return nn.current.useEffect(t,e)};je.useId=function(){return nn.current.useId()};je.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return nn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};je.useRef=function(t){return nn.current.useRef(t)};je.useState=function(t){return nn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return nn.current.useTransition()};je.version="18.3.1";W0.exports=je;var Ge=W0.exports;const x_=n_(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=Ge,y_=Symbol.for("react.element"),S_=Symbol.for("react.fragment"),M_=Object.prototype.hasOwnProperty,w_=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E_={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)M_.call(e,i)&&!E_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:y_,type:t,key:s,ref:o,props:r,_owner:w_.current}}mu.Fragment=S_;mu.jsx=Q0;mu.jsxs=Q0;G0.exports=mu;var E=G0.exports,eg={exports:{}},An={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,J){var Q=L.length;L.push(J);e:for(;0<Q;){var ae=Q-1>>>1,ge=L[ae];if(0<r(ge,J))L[ae]=J,L[Q]=ge,Q=ae;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var J=L[0],Q=L.pop();if(Q!==J){L[0]=Q;e:for(var ae=0,ge=L.length,Oe=ge>>>1;ae<Oe;){var q=2*(ae+1)-1,ne=L[q],de=q+1,fe=L[de];if(0>r(ne,Q))de<ge&&0>r(fe,ne)?(L[ae]=fe,L[de]=Q,ae=de):(L[ae]=ne,L[q]=Q,ae=q);else if(de<ge&&0>r(fe,Q))L[ae]=fe,L[de]=Q,ae=de;else break e}}return J}function r(L,J){var Q=L.sortIndex-J.sortIndex;return Q!==0?Q:L.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var J=n(u);J!==null;){if(J.callback===null)i(u);else if(J.startTime<=L)i(u),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(u)}}function S(L){if(y=!1,v(L),!g)if(n(l)!==null)g=!0,V(R);else{var J=n(u);J!==null&&ee(S,J.startTime-L)}}function R(L,J){g=!1,y&&(y=!1,h(P),P=-1),p=!0;var Q=d;try{for(v(J),f=n(l);f!==null&&(!(f.expirationTime>J)||L&&!w());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,d=f.priorityLevel;var ge=ae(f.expirationTime<=J);J=t.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(l)&&i(l),v(J)}else i(l);f=n(l)}if(f!==null)var Oe=!0;else{var q=n(u);q!==null&&ee(S,q.startTime-J),Oe=!1}return Oe}finally{f=null,d=Q,p=!1}}var b=!1,T=null,P=-1,k=5,_=-1;function w(){return!(t.unstable_now()-_<k)}function z(){if(T!==null){var L=t.unstable_now();_=L;var J=!0;try{J=T(!0,L)}finally{J?I():(b=!1,T=null)}}else b=!1}var I;if(typeof x=="function")I=function(){x(z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,$=j.port2;j.port1.onmessage=z,I=function(){$.postMessage(null)}}else I=function(){m(z,0)};function V(L){T=L,b||(b=!0,I())}function ee(L,J){P=m(function(){L(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,V(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var J=3;break;default:J=d}var Q=d;d=J;try{return L()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,J){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=d;d=L;try{return J()}finally{d=Q}},t.unstable_scheduleCallback=function(L,J,Q){var ae=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,L){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Q+ge,L={id:c++,callback:J,priorityLevel:L,startTime:Q,expirationTime:ge,sortIndex:-1},Q>ae?(L.sortIndex=Q,e(u,L),n(l)===null&&L===n(u)&&(y?(h(P),P=-1):y=!0,ee(S,Q-ae))):(L.sortIndex=ge,e(l,L),g||p||(g=!0,V(R))),L},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(L){var J=d;return function(){var Q=d;d=J;try{return L.apply(this,arguments)}finally{d=Q}}}})(ng);tg.exports=ng;var T_=tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_=Ge,Tn=T_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig=new Set,Bo={};function Gr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Bo[t]=e,t=0;t<e.length;t++)ig.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,C_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},pp={};function b_(t){return ef.call(pp,t)?!0:ef.call(dp,t)?!1:C_.test(t)?pp[t]=!0:(dp[t]=!0,!1)}function R_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P_(t,e,n,i){if(e===null||typeof e>"u"||R_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var jh=/[\-:]([a-z])/g;function Xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jh,Xh);zt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jh,Xh);zt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jh,Xh);zt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P_(e,n,r,i)&&(n=null),i||r===null?b_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=A_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),sg=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),Kh=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),og=Symbol.for("react.offscreen"),mp=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Vu;function wo(t){if(Vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+t}var Hu=!1;function Gu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function L_(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case tf:return"Profiler";case qh:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sg:return(t.displayName||"Context")+".Consumer";case rg:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kh:return e=t.displayName||null,e!==null?e:sf(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return sf(t(e))}catch{}}return null}function N_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D_(t){var e=ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=D_(t))}function lg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ug(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function af(t,e){ug(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Eo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function cg(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,hg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I_=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(t){I_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bo[e]=bo[t]})});function dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bo.hasOwnProperty(t)&&bo[t]?(""+e).trim():e+"px"}function pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var U_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ff(t,e){if(e){if(U_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=null;function Zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,As=null,Cs=null;function yp(t){if(t=ha(t)){if(typeof pf!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=yu(e),pf(t.stateNode,t.type,e))}}function mg(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function gg(){if(As){var t=As,e=Cs;if(Cs=As=null,yp(t),e)for(t=0;t<e.length;t++)yp(e[t])}}function vg(t,e){return t(e)}function xg(){}var Wu=!1;function _g(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return vg(t,e,n)}finally{Wu=!1,(As!==null||Cs!==null)&&(xg(),gg())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var i=yu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var mf=!1;if(bi)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){mf=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{mf=!1}function F_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ro=!1,Il=null,Ul=!1,gf=null,k_={onError:function(t){Ro=!0,Il=t}};function O_(t,e,n,i,r,s,o,a,l){Ro=!1,Il=null,F_.apply(k_,arguments)}function z_(t,e,n,i,r,s,o,a,l){if(O_.apply(this,arguments),Ro){if(Ro){var u=Il;Ro=!1,Il=null}else throw Error(oe(198));Ul||(Ul=!0,gf=u)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(Wr(t)!==t)throw Error(oe(188))}function B_(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sp(r),t;if(s===i)return Sp(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Sg(t){return t=B_(t),t!==null?Mg(t):null}function Mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mg(t);if(e!==null)return e;t=t.sibling}return null}var wg=Tn.unstable_scheduleCallback,Mp=Tn.unstable_cancelCallback,V_=Tn.unstable_shouldYield,H_=Tn.unstable_requestPaint,Mt=Tn.unstable_now,G_=Tn.unstable_getCurrentPriorityLevel,Jh=Tn.unstable_ImmediatePriority,Eg=Tn.unstable_UserBlockingPriority,Fl=Tn.unstable_NormalPriority,W_=Tn.unstable_LowPriority,Tg=Tn.unstable_IdlePriority,gu=null,li=null;function j_(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:q_,X_=Math.log,Y_=Math.LN2;function q_(t){return t>>>=0,t===0?32:31-(X_(t)/Y_|0)|0}var Sa=64,Ma=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=n&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function $_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=$_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ag(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function Z_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Cg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bg,ed,Rg,Pg,Lg,xf=!1,wa=[],Ji=null,Qi=null,er=null,Go=new Map,Wo=new Map,Xi=[],J_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wp(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&ed(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Q_(t,e,n,i,r){switch(e){case"focusin":return Ji=ao(Ji,t,e,n,i,r),!0;case"dragenter":return Qi=ao(Qi,t,e,n,i,r),!0;case"mouseover":return er=ao(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,ao(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wo.set(s,ao(Wo.get(s)||null,t,e,n,i,r)),!0}return!1}function Ng(t){var e=Rr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){Rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);df=i,n.target.dispatchEvent(i),df=null}else return e=ha(n),e!==null&&ed(e),t.blockedOn=n,!1;e.shift()}return!0}function Ep(t,e,n){hl(t)&&n.delete(e)}function ey(){xf=!1,Ji!==null&&hl(Ji)&&(Ji=null),Qi!==null&&hl(Qi)&&(Qi=null),er!==null&&hl(er)&&(er=null),Go.forEach(Ep),Wo.forEach(Ep)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,xf||(xf=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,ey)))}function jo(t){function e(r){return lo(r,t)}if(0<wa.length){lo(wa[0],t);for(var n=1;n<wa.length;n++){var i=wa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&lo(Ji,t),Qi!==null&&lo(Qi,t),er!==null&&lo(er,t),Go.forEach(e),Wo.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)Ng(n),n.blockedOn===null&&Xi.shift()}var bs=Di.ReactCurrentBatchConfig,Ol=!0;function ty(t,e,n,i){var r=it,s=bs.transition;bs.transition=null;try{it=1,td(t,e,n,i)}finally{it=r,bs.transition=s}}function ny(t,e,n,i){var r=it,s=bs.transition;bs.transition=null;try{it=4,td(t,e,n,i)}finally{it=r,bs.transition=s}}function td(t,e,n,i){if(Ol){var r=_f(t,e,n,i);if(r===null)tc(t,e,i,zl,n),wp(t,i);else if(Q_(r,t,e,n,i))i.stopPropagation();else if(wp(t,i),e&4&&-1<J_.indexOf(t)){for(;r!==null;){var s=ha(r);if(s!==null&&bg(s),s=_f(t,e,n,i),s===null&&tc(t,e,i,zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tc(t,e,i,null,n)}}var zl=null;function _f(t,e,n,i){if(zl=null,t=Zh(i),t=Rr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function Dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G_()){case Jh:return 1;case Eg:return 4;case Fl:case W_:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var $i=null,nd=null,dl=null;function Ig(){if(dl)return dl;var t,e=nd,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function Tp(){return!1}function Cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:Tp,this.isPropagationStopped=Tp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},id=Cn(Zs),fa=xt({},Zs,{view:0,detail:0}),iy=Cn(fa),Xu,Yu,uo,vu=xt({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Xu=t.screenX-uo.screenX,Yu=t.screenY-uo.screenY):Yu=Xu=0,uo=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),Ap=Cn(vu),ry=xt({},vu,{dataTransfer:0}),sy=Cn(ry),oy=xt({},fa,{relatedTarget:0}),qu=Cn(oy),ay=xt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),ly=Cn(ay),uy=xt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cy=Cn(uy),fy=xt({},Zs,{data:0}),Cp=Cn(fy),hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=py[t])?!!e[t]:!1}function rd(){return my}var gy=xt({},fa,{key:function(t){if(t.key){var e=hy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vy=Cn(gy),xy=xt({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=Cn(xy),_y=xt({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),yy=Cn(_y),Sy=xt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),My=Cn(Sy),wy=xt({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=Cn(wy),Ty=[9,13,27,32],sd=bi&&"CompositionEvent"in window,Po=null;bi&&"documentMode"in document&&(Po=document.documentMode);var Ay=bi&&"TextEvent"in window&&!Po,Ug=bi&&(!sd||Po&&8<Po&&11>=Po),Rp=" ",Pp=!1;function Fg(t,e){switch(t){case"keyup":return Ty.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Cy(t,e){switch(t){case"compositionend":return kg(e);case"keypress":return e.which!==32?null:(Pp=!0,Rp);case"textInput":return t=e.data,t===Rp&&Pp?null:t;default:return null}}function by(t,e){if(ds)return t==="compositionend"||!sd&&Fg(t,e)?(t=Ig(),dl=nd=$i=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ug&&e.locale!=="ko"?null:e.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ry[t.type]:e==="textarea"}function Og(t,e,n,i){mg(i),e=Bl(e,"onChange"),0<e.length&&(n=new id("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,Xo=null;function Py(t){$g(t,0)}function xu(t){var e=gs(t);if(lg(e))return t}function Ly(t,e){if(t==="change")return e}var zg=!1;if(bi){var $u;if(bi){var Ku="oninput"in document;if(!Ku){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),Ku=typeof Np.oninput=="function"}$u=Ku}else $u=!1;zg=$u&&(!document.documentMode||9<document.documentMode)}function Dp(){Lo&&(Lo.detachEvent("onpropertychange",Bg),Xo=Lo=null)}function Bg(t){if(t.propertyName==="value"&&xu(Xo)){var e=[];Og(e,Xo,t,Zh(t)),_g(Py,e)}}function Ny(t,e,n){t==="focusin"?(Dp(),Lo=e,Xo=n,Lo.attachEvent("onpropertychange",Bg)):t==="focusout"&&Dp()}function Dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(Xo)}function Iy(t,e){if(t==="click")return xu(e)}function Uy(t,e){if(t==="input"||t==="change")return xu(e)}function Fy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:Fy;function Yo(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ef.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,e){var n=Ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ip(n)}}function Vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hg(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ky(t){var e=Hg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vg(n.ownerDocument.documentElement,n)){if(i!==null&&od(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Up(n,s);var o=Up(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Oy=bi&&"documentMode"in document&&11>=document.documentMode,ps=null,yf=null,No=null,Sf=!1;function Fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sf||ps==null||ps!==Dl(i)||(i=ps,"selectionStart"in i&&od(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&Yo(No,i)||(No=i,i=Bl(yf,"onSelect"),0<i.length&&(e=new id("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Zu={},Gg={};bi&&(Gg=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function _u(t){if(Zu[t])return Zu[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gg)return Zu[t]=e[n];return t}var Wg=_u("animationend"),jg=_u("animationiteration"),Xg=_u("animationstart"),Yg=_u("transitionend"),qg=new Map,kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){qg.set(t,e),Gr(e,[t])}for(var Ju=0;Ju<kp.length;Ju++){var Qu=kp[Ju],zy=Qu.toLowerCase(),By=Qu[0].toUpperCase()+Qu.slice(1);hr(zy,"on"+By)}hr(Wg,"onAnimationEnd");hr(jg,"onAnimationIteration");hr(Xg,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(Yg,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Op(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,z_(i,e,void 0,t),t.currentTarget=null}function $g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Op(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Op(r,a,u),s=l}}}if(Ul)throw t=gf,Ul=!1,gf=null,t}function ut(t,e){var n=e[Af];n===void 0&&(n=e[Af]=new Set);var i=t+"__bubble";n.has(i)||(Kg(e,t,2,!1),n.add(i))}function ec(t,e,n){var i=0;e&&(i|=4),Kg(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Aa]){t[Aa]=!0,ig.forEach(function(n){n!=="selectionchange"&&(Vy.has(n)||ec(n,!1,t),ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,ec("selectionchange",!1,e))}}function Kg(t,e,n,i){switch(Dg(e)){case 1:var r=ty;break;case 4:r=ny;break;default:r=td}n=r.bind(null,e,n,t),r=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_g(function(){var u=s,c=Zh(n),f=[];e:{var d=qg.get(t);if(d!==void 0){var p=id,g=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":p=vy;break;case"focusin":g="focus",p=qu;break;case"focusout":g="blur",p=qu;break;case"beforeblur":case"afterblur":p=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=yy;break;case Wg:case jg:case Xg:p=ly;break;case Yg:p=My;break;case"scroll":p=iy;break;case"wheel":p=Ey;break;case"copy":case"cut":case"paste":p=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bp}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Ho(x,h),S!=null&&y.push($o(x,S,v)))),m)break;x=x.return}0<y.length&&(d=new p(d,g,null,n,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==df&&(g=n.relatedTarget||n.fromElement)&&(Rr(g)||g[Ri]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Rr(g):null,g!==null&&(m=Wr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Ap,S="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=bp,S="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?d:gs(p),v=g==null?d:gs(g),d=new y(S,x+"leave",p,n,c),d.target=m,d.relatedTarget=v,S=null,Rr(c)===u&&(y=new y(h,x+"enter",g,n,c),y.target=v,y.relatedTarget=m,S=y),m=S,p&&g)t:{for(y=p,h=g,x=0,v=y;v;v=qr(v))x++;for(v=0,S=h;S;S=qr(S))v++;for(;0<x-v;)y=qr(y),x--;for(;0<v-x;)h=qr(h),v--;for(;x--;){if(y===h||h!==null&&y===h.alternate)break t;y=qr(y),h=qr(h)}y=null}else y=null;p!==null&&zp(f,d,p,y,!1),g!==null&&m!==null&&zp(f,m,g,y,!0)}}e:{if(d=u?gs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=Ly;else if(Lp(d))if(zg)R=Uy;else{R=Dy;var b=Ny}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=Iy);if(R&&(R=R(t,u))){Og(f,R,n,c);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&lf(d,"number",d.value)}switch(b=u?gs(u):window,t){case"focusin":(Lp(b)||b.contentEditable==="true")&&(ps=b,yf=u,No=null);break;case"focusout":No=yf=ps=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,Fp(f,n,c);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":Fp(f,n,c)}var T;if(sd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ds?Fg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ug&&n.locale!=="ko"&&(ds||P!=="onCompositionStart"?P==="onCompositionEnd"&&ds&&(T=Ig()):($i=c,nd="value"in $i?$i.value:$i.textContent,ds=!0)),b=Bl(u,P),0<b.length&&(P=new Cp(P,t,null,n,c),f.push({event:P,listeners:b}),T?P.data=T:(T=kg(n),T!==null&&(P.data=T)))),(T=Ay?Cy(t,n):by(t,n))&&(u=Bl(u,"onBeforeInput"),0<u.length&&(c=new Cp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}$g(f,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ho(t,n),s!=null&&i.unshift($o(t,s,r)),s=Ho(t,e),s!=null&&i.push($o(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ho(n,s),l!=null&&o.unshift($o(n,l,a))):r||(l=Ho(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Hy=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function Bp(t){return(typeof t=="string"?t:""+t).replace(Hy,`
`).replace(Gy,"")}function Ca(t,e,n){if(e=Bp(e),Bp(t)!==e&&n)throw Error(oe(425))}function Vl(){}var Mf=null,wf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(t){return Vp.resolve(null).then(t).catch(Xy)}:Tf;function Xy(t){setTimeout(function(){throw t})}function nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);jo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),oi="__reactFiber$"+Js,Ko="__reactProps$"+Js,Ri="__reactContainer$"+Js,Af="__reactEvents$"+Js,Yy="__reactListeners$"+Js,qy="__reactHandles$"+Js;function Rr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[oi])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[oi]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function yu(t){return t[Ko]||null}var Cf=[],vs=-1;function dr(t){return{current:t}}function ft(t){0>vs||(t.current=Cf[vs],Cf[vs]=null,vs--)}function at(t,e){vs++,Cf[vs]=t.current,t.current=e}var ur={},qt=dr(ur),dn=dr(!1),kr=ur;function ks(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Hl(){ft(dn),ft(qt)}function Gp(t,e,n){if(qt.current!==ur)throw Error(oe(168));at(qt,e),at(dn,n)}function Zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,N_(t)||"Unknown",r));return xt({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,kr=qt.current,at(qt,t),at(dn,dn.current),!0}function Wp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Zg(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,ft(dn),ft(qt),at(qt,t)):ft(dn),at(dn,n)}var Si=null,Su=!1,ic=!1;function Jg(t){Si===null?Si=[t]:Si.push(t)}function $y(t){Su=!0,Jg(t)}function pr(){if(!ic&&Si!==null){ic=!0;var t=0,e=it;try{var n=Si;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,Su=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),wg(Jh,pr),r}finally{it=e,ic=!1}}return null}var xs=[],_s=0,Wl=null,jl=0,Pn=[],Ln=0,Or=null,Mi=1,wi="";function Er(t,e){xs[_s++]=jl,xs[_s++]=Wl,Wl=t,jl=e}function Qg(t,e,n){Pn[Ln++]=Mi,Pn[Ln++]=wi,Pn[Ln++]=Or,Or=t;var i=Mi;t=wi;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-Jn(e)+r|n<<r|i,wi=s+t}else Mi=1<<s|n<<r|i,wi=t}function ad(t){t.return!==null&&(Er(t,1),Qg(t,1,0))}function ld(t){for(;t===Wl;)Wl=xs[--_s],xs[_s]=null,jl=xs[--_s],xs[_s]=null;for(;t===Or;)Or=Pn[--Ln],Pn[Ln]=null,wi=Pn[--Ln],Pn[Ln]=null,Mi=Pn[--Ln],Pn[Ln]=null}var En=null,wn=null,ht=!1,Yn=null;function ev(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,wn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Mi,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,wn=null,!0):!1;default:return!1}}function bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rf(t){if(ht){var e=wn;if(e){var n=e;if(!jp(t,e)){if(bf(t))throw Error(oe(418));e=tr(n.nextSibling);var i=En;e&&jp(t,e)?ev(i,n):(t.flags=t.flags&-4097|2,ht=!1,En=t)}}else{if(bf(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ht=!1,En=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function ba(t){if(t!==En)return!1;if(!ht)return Xp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=wn)){if(bf(t))throw tv(),Error(oe(418));for(;e;)ev(t,e),e=tr(e.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=En?tr(t.stateNode.nextSibling):null;return!0}function tv(){for(var t=wn;t;)t=tr(t.nextSibling)}function Os(){wn=En=null,ht=!1}function ud(t){Yn===null?Yn=[t]:Yn.push(t)}var Ky=Di.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yp(t){var e=t._init;return e(t._payload)}function nv(t){function e(h,x){if(t){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=sr(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,x,v,S){return x===null||x.tag!==6?(x=cc(v,h.mode,S),x.return=h,x):(x=r(x,v),x.return=h,x)}function l(h,x,v,S){var R=v.type;return R===hs?c(h,x,v.props.children,S,v.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Wi&&Yp(R)===x.type)?(S=r(x,v.props),S.ref=co(h,x,v),S.return=h,S):(S=Sl(v.type,v.key,v.props,null,h.mode,S),S.ref=co(h,x,v),S.return=h,S)}function u(h,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=fc(v,h.mode,S),x.return=h,x):(x=r(x,v.children||[]),x.return=h,x)}function c(h,x,v,S,R){return x===null||x.tag!==7?(x=Ur(v,h.mode,S,R),x.return=h,x):(x=r(x,v),x.return=h,x)}function f(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=cc(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xa:return v=Sl(x.type,x.key,x.props,null,h.mode,v),v.ref=co(h,null,x),v.return=h,v;case fs:return x=fc(x,h.mode,v),x.return=h,x;case Wi:var S=x._init;return f(h,S(x._payload),v)}if(Eo(x)||so(x))return x=Ur(x,h.mode,v,null),x.return=h,x;Ra(h,x)}return null}function d(h,x,v,S){var R=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(h,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:return v.key===R?l(h,x,v,S):null;case fs:return v.key===R?u(h,x,v,S):null;case Wi:return R=v._init,d(h,x,R(v._payload),S)}if(Eo(v)||so(v))return R!==null?null:c(h,x,v,S,null);Ra(h,v)}return null}function p(h,x,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(x,h,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xa:return h=h.get(S.key===null?v:S.key)||null,l(x,h,S,R);case fs:return h=h.get(S.key===null?v:S.key)||null,u(x,h,S,R);case Wi:var b=S._init;return p(h,x,v,b(S._payload),R)}if(Eo(S)||so(S))return h=h.get(v)||null,c(x,h,S,R,null);Ra(x,S)}return null}function g(h,x,v,S){for(var R=null,b=null,T=x,P=x=0,k=null;T!==null&&P<v.length;P++){T.index>P?(k=T,T=null):k=T.sibling;var _=d(h,T,v[P],S);if(_===null){T===null&&(T=k);break}t&&T&&_.alternate===null&&e(h,T),x=s(_,x,P),b===null?R=_:b.sibling=_,b=_,T=k}if(P===v.length)return n(h,T),ht&&Er(h,P),R;if(T===null){for(;P<v.length;P++)T=f(h,v[P],S),T!==null&&(x=s(T,x,P),b===null?R=T:b.sibling=T,b=T);return ht&&Er(h,P),R}for(T=i(h,T);P<v.length;P++)k=p(T,h,P,v[P],S),k!==null&&(t&&k.alternate!==null&&T.delete(k.key===null?P:k.key),x=s(k,x,P),b===null?R=k:b.sibling=k,b=k);return t&&T.forEach(function(w){return e(h,w)}),ht&&Er(h,P),R}function y(h,x,v,S){var R=so(v);if(typeof R!="function")throw Error(oe(150));if(v=R.call(v),v==null)throw Error(oe(151));for(var b=R=null,T=x,P=x=0,k=null,_=v.next();T!==null&&!_.done;P++,_=v.next()){T.index>P?(k=T,T=null):k=T.sibling;var w=d(h,T,_.value,S);if(w===null){T===null&&(T=k);break}t&&T&&w.alternate===null&&e(h,T),x=s(w,x,P),b===null?R=w:b.sibling=w,b=w,T=k}if(_.done)return n(h,T),ht&&Er(h,P),R;if(T===null){for(;!_.done;P++,_=v.next())_=f(h,_.value,S),_!==null&&(x=s(_,x,P),b===null?R=_:b.sibling=_,b=_);return ht&&Er(h,P),R}for(T=i(h,T);!_.done;P++,_=v.next())_=p(T,h,P,_.value,S),_!==null&&(t&&_.alternate!==null&&T.delete(_.key===null?P:_.key),x=s(_,x,P),b===null?R=_:b.sibling=_,b=_);return t&&T.forEach(function(z){return e(h,z)}),ht&&Er(h,P),R}function m(h,x,v,S){if(typeof v=="object"&&v!==null&&v.type===hs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:e:{for(var R=v.key,b=x;b!==null;){if(b.key===R){if(R=v.type,R===hs){if(b.tag===7){n(h,b.sibling),x=r(b,v.props.children),x.return=h,h=x;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Wi&&Yp(R)===b.type){n(h,b.sibling),x=r(b,v.props),x.ref=co(h,b,v),x.return=h,h=x;break e}n(h,b);break}else e(h,b);b=b.sibling}v.type===hs?(x=Ur(v.props.children,h.mode,S,v.key),x.return=h,h=x):(S=Sl(v.type,v.key,v.props,null,h.mode,S),S.ref=co(h,x,v),S.return=h,h=S)}return o(h);case fs:e:{for(b=v.key;x!==null;){if(x.key===b)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(h,x.sibling),x=r(x,v.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=fc(v,h.mode,S),x.return=h,h=x}return o(h);case Wi:return b=v._init,m(h,x,b(v._payload),S)}if(Eo(v))return g(h,x,v,S);if(so(v))return y(h,x,v,S);Ra(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,v),x.return=h,h=x):(n(h,x),x=cc(v,h.mode,S),x.return=h,h=x),o(h)):n(h,x)}return m}var zs=nv(!0),iv=nv(!1),Xl=dr(null),Yl=null,ys=null,cd=null;function fd(){cd=ys=Yl=null}function hd(t){var e=Xl.current;ft(Xl),t._currentValue=e}function Pf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Yl=t,cd=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(cd!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Yl===null)throw Error(oe(308));ys=t,Yl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Pr=null;function dd(t){Pr===null?Pr=[t]:Pr.push(t)}function rv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qh(t,n)}}function qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=xt({},f,d);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=f}}function $p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var da={},ui=dr(da),Zo=dr(da),Jo=dr(da);function Lr(t){if(t===da)throw Error(oe(174));return t}function md(t,e){switch(at(Jo,e),at(Zo,t),at(ui,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cf(e,t)}ft(ui),at(ui,e)}function Bs(){ft(ui),ft(Zo),ft(Jo)}function ov(t){Lr(Jo.current);var e=Lr(ui.current),n=cf(e,t.type);e!==n&&(at(Zo,t),at(ui,n))}function gd(t){Zo.current===t&&(ft(ui),ft(Zo))}var dt=dr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rc=[];function vd(){for(var t=0;t<rc.length;t++)rc[t]._workInProgressVersionPrimary=null;rc.length=0}var gl=Di.ReactCurrentDispatcher,sc=Di.ReactCurrentBatchConfig,zr=0,gt=null,Ct=null,Nt=null,Kl=!1,Do=!1,Qo=0,Zy=0;function Vt(){throw Error(oe(321))}function xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function _d(t,e,n,i,r,s){if(zr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?tS:nS,t=n(i,r),Do){s=0;do{if(Do=!1,Qo=0,25<=s)throw Error(oe(301));s+=1,Nt=Ct=null,e.updateQueue=null,gl.current=iS,t=n(i,r)}while(Do)}if(gl.current=Zl,e=Ct!==null&&Ct.next!==null,zr=0,Nt=Ct=gt=null,Kl=!1,e)throw Error(oe(300));return t}function yd(){var t=Qo!==0;return Qo=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function On(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Nt===null?gt.memoizedState:Nt.next;if(e!==null)Nt=e,Ct=t;else{if(t===null)throw Error(oe(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function ea(t,e){return typeof e=="function"?e(t):e}function oc(t){var e=On(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=c,Br|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ac(t){var e=On(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function av(){}function lv(t,e){var n=gt,i=On(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Sd(fv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,ta(9,cv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(oe(349));zr&30||uv(n,e,r)}return r}function uv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cv(t,e,n,i){e.value=n,e.getSnapshot=i,hv(e)&&dv(t)}function fv(t,e,n){return n(function(){hv(e)&&dv(t)})}function hv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function dv(t){var e=Pi(t,1);e!==null&&Qn(e,t,1,-1)}function Kp(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=eS.bind(null,gt,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function pv(){return On().memoizedState}function vl(t,e,n,i){var r=ni();gt.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function Mu(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&xd(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}gt.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function Zp(t,e){return vl(8390656,8,t,e)}function Sd(t,e){return Mu(2048,8,t,e)}function mv(t,e){return Mu(4,2,t,e)}function gv(t,e){return Mu(4,4,t,e)}function vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xv(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,vv.bind(null,e,t),n)}function Md(){}function _v(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yv(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Sv(t,e,n){return zr&21?(ei(n,e)||(n=Ag(),gt.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function Jy(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=sc.transition;sc.transition={};try{t(!1),e()}finally{it=n,sc.transition=i}}function Mv(){return On().memoizedState}function Qy(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},wv(t))Ev(e,n);else if(n=rv(t,e,n,i),n!==null){var r=Qt();Qn(n,t,i,r),Tv(n,e,i)}}function eS(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(wv(t))Ev(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,dd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=rv(t,e,r,i),n!==null&&(r=Qt(),Qn(n,t,i,r),Tv(n,e,i))}}function wv(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Ev(t,e){Do=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qh(t,n)}}var Zl={readContext:kn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},tS={readContext:kn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Qy.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Kp,useDebugValue:Md,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Kp(!1),e=t[0];return t=Jy.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ni();if(ht){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Dt===null)throw Error(oe(349));zr&30||uv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zp(fv.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,cv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Dt.identifierPrefix;if(ht){var n=wi,i=Mi;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Zy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nS={readContext:kn,useCallback:_v,useContext:kn,useEffect:Sd,useImperativeHandle:xv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:yv,useReducer:oc,useRef:pv,useState:function(){return oc(ea)},useDebugValue:Md,useDeferredValue:function(t){var e=On();return Sv(e,Ct.memoizedState,t)},useTransition:function(){var t=oc(ea)[0],e=On().memoizedState;return[t,e]},useMutableSource:av,useSyncExternalStore:lv,useId:Mv,unstable_isNewReconciler:!1},iS={readContext:kn,useCallback:_v,useContext:kn,useEffect:Sd,useImperativeHandle:xv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:yv,useReducer:ac,useRef:pv,useState:function(){return ac(ea)},useDebugValue:Md,useDeferredValue:function(t){var e=On();return Ct===null?e.memoizedState=t:Sv(e,Ct.memoizedState,t)},useTransition:function(){var t=ac(ea)[0],e=On().memoizedState;return[t,e]},useMutableSource:av,useSyncExternalStore:lv,useId:Mv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=rr(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Qn(e,t,r,i),ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=rr(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Qn(e,t,r,i),ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=rr(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Qn(e,t,i,n),ml(e,t,i))}};function Jp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,i)||!Yo(r,s):!0}function Av(t,e,n){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=pn(e)?kr:qt.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},pd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=pn(e)?kr:qt.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wu.enqueueReplaceState(r,r.state,null),ql(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",i=e;do n+=L_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rS=typeof WeakMap=="function"?WeakMap:Map;function Cv(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,Gf=i),Df(t,e)},n}function bv(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function em(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new rS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=xS.bind(null,t,e,n),e.then(t,t))}function tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var sS=Di.ReactCurrentOwner,fn=!1;function Kt(t,e,n,i){e.child=t===null?iv(e,null,n,i):zs(e,t.child,n,i)}function im(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=_d(t,e,n,i,s,r),n=yd(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ht&&n&&ad(e),e.flags|=1,Kt(t,e,i,r),e.child)}function rm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Rv(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Rv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Yo(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return If(t,e,n,i,r)}function Pv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Ms,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Ms,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(Ms,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(Ms,Sn),Sn|=i;return Kt(t,e,r,n),e.child}function Lv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function If(t,e,n,i,r){var s=pn(n)?kr:qt.current;return s=ks(e,s),Rs(e,r),n=_d(t,e,n,i,s,r),i=yd(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ht&&i&&ad(e),e.flags|=1,Kt(t,e,n,r),e.child)}function sm(t,e,n,i,r){if(pn(n)){var s=!0;Gl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)xl(t,e),Av(e,n,i),Nf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kn(u):(u=pn(n)?kr:qt.current,u=ks(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Qp(e,o,i,u),ji=!1;var d=e.memoizedState;o.state=d,ql(e,i,o,r),l=e.memoizedState,a!==i||d!==l||dn.current||ji?(typeof c=="function"&&(Lf(e,n,c,i),l=e.memoizedState),(a=ji||Jp(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:jn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=pn(n)?kr:qt.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Qp(e,o,i,l),ji=!1,d=e.memoizedState,o.state=d,ql(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||dn.current||ji?(typeof p=="function"&&(Lf(e,n,p,i),g=e.memoizedState),(u=ji||Jp(e,n,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Uf(t,e,n,i,s,r)}function Uf(t,e,n,i,r,s){Lv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wp(e,n,!1),Li(t,e,s);i=e.stateNode,sS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&Wp(e,n,!0),e.child}function Nv(t){var e=t.stateNode;e.pendingContext?Gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(t,e.context,!1),md(t,e.containerInfo)}function om(t,e,n,i,r){return Os(),ud(r),e.flags|=256,Kt(t,e,n,i),e.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function kf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(dt,r&1),t===null)return Rf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Au(o,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kf(n),e.memoizedState=Ff,t):wd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return oS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?kf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ff,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wd(t,e){return e=Au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&ud(i),zs(e,t.child,null,n),t=wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=lc(Error(oe(422))),Pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Au({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=kf(o),e.memoizedState=Ff,s);if(!(e.mode&1))return Pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=lc(s,i,void 0),Pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Qn(i,t,r,-1))}return Rd(),i=lc(Error(oe(421))),Pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_S.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=tr(r.nextSibling),En=e,ht=!0,Yn=null,t!==null&&(Pn[Ln++]=Mi,Pn[Ln++]=wi,Pn[Ln++]=Or,Mi=t.id,wi=t.overflow,Or=e),e=wd(e,i.children),e.flags|=4096,e)}function am(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pf(t.return,e,n)}function uc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Iv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&am(t,n,e);else if(t.tag===19)am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}uc(e,!0,n,null,s);break;case"together":uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aS(t,e,n){switch(e.tag){case 3:Nv(e),Os();break;case 5:ov(e);break;case 1:pn(e.type)&&Gl(e);break;case 4:md(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Dv(t,e,n):(at(dt,dt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);at(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Iv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Pv(t,e,n)}return Li(t,e,n)}var Uv,Of,Fv,kv;Uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Of=function(){};Fv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(ui.current);var s=null;switch(n){case"input":r=of(t,r),i=of(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=uf(t,r),i=uf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vl)}ff(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};kv=function(t,e,n,i){n!==i&&(e.flags|=4)};function fo(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function lS(t,e,n){var i=e.pendingProps;switch(ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return pn(e.type)&&Hl(),Ht(e),null;case 3:return i=e.stateNode,Bs(),ft(dn),ft(qt),vd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Xf(Yn),Yn=null))),Of(t,e),Ht(e),null;case 5:gd(e);var r=Lr(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Fv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Ht(e),null}if(t=Lr(ui.current),ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)ut(Ao[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":gp(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":xp(i,s),ut("invalid",i)}ff(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":_a(i),vp(i,s,!0);break;case"textarea":_a(i),_p(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[Ko]=i,Uv(t,e,!1,!1),e.stateNode=t;e:{switch(o=hf(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)ut(Ao[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":gp(t,i),r=of(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":xp(t,i),r=uf(t,i),ut("invalid",t);break;default:r=i}ff(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Yh(t,s,l,o))}switch(n){case"input":_a(t),vp(t,i,!1);break;case"textarea":_a(t),_p(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)kv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Lr(Jo.current),Lr(ui.current),ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Ht(e),null;case 13:if(ft(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&wn!==null&&e.mode&1&&!(e.flags&128))tv(),Os(),e.flags|=98560,s=!1;else if(s=ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[oi]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Yn!==null&&(Xf(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?bt===0&&(bt=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Bs(),Of(t,e),t===null&&qo(e.stateNode.containerInfo),Ht(e),null;case 10:return hd(e.type._context),Ht(e),null;case 17:return pn(e.type)&&Hl(),Ht(e),null;case 19:if(ft(dt),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fo(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Hs&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=$l(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Ht(e),null}else 2*Mt()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=dt.current,at(dt,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return bd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function uS(t,e){switch(ld(e),e.tag){case 1:return pn(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),ft(dn),ft(qt),vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gd(e),null;case 13:if(ft(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(dt),null;case 4:return Bs(),null;case 10:return hd(e.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var La=!1,Xt=!1,cS=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function zf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var lm=!1;function fS(t,e){if(Mf=Ol,t=Hg(),od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:t,selectionRange:n},Ol=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return g=lm,lm=!1,g}function Io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zf(e,n,s)}r=r.next}while(r!==i)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ov(t){var e=t.alternate;e!==null&&(t.alternate=null,Ov(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[Ko],delete e[Af],delete e[Yy],delete e[qy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zv(t){return t.tag===5||t.tag===3||t.tag===4}function um(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(i!==4&&(t=t.child,t!==null))for(Vf(t,e,n),t=t.sibling;t!==null;)Vf(t,e,n),t=t.sibling}function Hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}var Ut=null,Xn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)Bv(t,e,n),n=n.sibling}function Bv(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:Xt||Ss(n,e);case 6:var i=Ut,r=Xn;Ut=null,Fi(t,e,n),Ut=i,Xn=r,Ut!==null&&(Xn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Xn?(t=Ut,n=n.stateNode,t.nodeType===8?nc(t.parentNode,n):t.nodeType===1&&nc(t,n),jo(t)):nc(Ut,n.stateNode));break;case 4:i=Ut,r=Xn,Ut=n.stateNode.containerInfo,Xn=!0,Fi(t,e,n),Ut=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zf(n,e,o),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!Xt&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Fi(t,e,n),Xt=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function cm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cS),e.forEach(function(i){var r=yS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Xn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Xn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Ut===null)throw Error(oe(160));Bv(s,o,r),Ut=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vv(e,t),e=e.sibling}function Vv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ti(t),i&4){try{Io(3,t,t.return),Eu(3,t)}catch(y){yt(t,t.return,y)}try{Io(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Bn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(Bn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{Vo(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ug(r,s),hf(a,o);var u=hf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?pg(r,f):c==="dangerouslySetInnerHTML"?hg(r,f):c==="children"?Vo(r,f):Yh(r,c,f,u)}switch(a){case"input":af(r,s);break;case"textarea":cg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(Bn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(Bn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Bn(e,t),ti(t);break;case 13:Bn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ad=Mt())),i&4&&cm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(u=Xt)||c,Bn(e,t),Xt=u):Bn(e,t),ti(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(_e=t,c=t.child;c!==null;){for(f=_e=c;_e!==null;){switch(d=_e,p=d.child,d.tag){case 0:case 11:case 14:case 15:Io(4,d,d.return);break;case 1:Ss(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:Ss(d,d.return);break;case 22:if(d.memoizedState!==null){hm(f);continue}}p!==null?(p.return=d,_e=p):hm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dg("display",o))}catch(y){yt(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){yt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Bn(e,t),ti(t),i&4&&cm(t);break;case 21:break;default:Bn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zv(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vo(r,""),i.flags&=-33);var s=um(t);Hf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=um(t);Vf(t,a,o);break;default:throw Error(oe(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hS(t,e,n){_e=t,Hv(t)}function Hv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||La;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=La;var u=Xt;if(La=o,(Xt=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?dm(r):l!==null?(l.return=o,_e=l):dm(r);for(;s!==null;)_e=s,Hv(s),s=s.sibling;_e=r,La=a,Xt=u}fm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):fm(t)}}function fm(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$p(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$p(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&jo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Xt||e.flags&512&&Bf(e)}catch(d){yt(e,e.return,d)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function hm(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function dm(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Bf(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Bf(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var dS=Math.ceil,Jl=Di.ReactCurrentDispatcher,Ed=Di.ReactCurrentOwner,Fn=Di.ReactCurrentBatchConfig,qe=0,Dt=null,At=null,kt=0,Sn=0,Ms=dr(0),bt=0,na=null,Br=0,Tu=0,Td=0,Uo=null,ln=null,Ad=0,Hs=1/0,yi=null,Ql=!1,Gf=null,ir=null,Na=!1,Ki=null,eu=0,Fo=0,Wf=null,_l=-1,yl=0;function Qt(){return qe&6?Mt():_l!==-1?_l:_l=Mt()}function rr(t){return t.mode&1?qe&2&&kt!==0?kt&-kt:Ky.transition!==null?(yl===0&&(yl=Ag()),yl):(t=it,t!==0||(t=window.event,t=t===void 0?16:Dg(t.type)),t):1}function Qn(t,e,n,i){if(50<Fo)throw Fo=0,Wf=null,Error(oe(185));ca(t,n,i),(!(qe&2)||t!==Dt)&&(t===Dt&&(!(qe&2)&&(Tu|=n),bt===4&&Yi(t,kt)),mn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Hs=Mt()+500,Su&&pr()))}function mn(t,e){var n=t.callbackNode;K_(t,e);var i=kl(t,t===Dt?kt:0);if(i===0)n!==null&&Mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mp(n),e===1)t.tag===0?$y(pm.bind(null,t)):Jg(pm.bind(null,t)),jy(function(){!(qe&6)&&pr()}),n=null;else{switch(Cg(i)){case 1:n=Jh;break;case 4:n=Eg;break;case 16:n=Fl;break;case 536870912:n=Tg;break;default:n=Fl}n=Kv(n,Gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gv(t,e){if(_l=-1,yl=0,qe&6)throw Error(oe(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=kl(t,t===Dt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tu(t,i);else{e=i;var r=qe;qe|=2;var s=jv();(Dt!==t||kt!==e)&&(yi=null,Hs=Mt()+500,Ir(t,e));do try{gS();break}catch(a){Wv(t,a)}while(!0);fd(),Jl.current=s,qe=r,At!==null?e=0:(Dt=null,kt=0,e=bt)}if(e!==0){if(e===2&&(r=vf(t),r!==0&&(i=r,e=jf(t,r))),e===1)throw n=na,Ir(t,0),Yi(t,i),mn(t,Mt()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!pS(r)&&(e=tu(t,i),e===2&&(s=vf(t),s!==0&&(i=s,e=jf(t,s))),e===1))throw n=na,Ir(t,0),Yi(t,i),mn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Tr(t,ln,yi);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=Ad+500-Mt(),10<e)){if(kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tf(Tr.bind(null,t,ln,yi),e);break}Tr(t,ln,yi);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dS(i/1960))-i,10<i){t.timeoutHandle=Tf(Tr.bind(null,t,ln,yi),i);break}Tr(t,ln,yi);break;case 5:Tr(t,ln,yi);break;default:throw Error(oe(329))}}}return mn(t,Mt()),t.callbackNode===n?Gv.bind(null,t):null}function jf(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=tu(t,e),t!==2&&(e=ln,ln=n,e!==null&&Xf(e)),t}function Xf(t){ln===null?ln=t:ln.push.apply(ln,t)}function pS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~Td,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function pm(t){if(qe&6)throw Error(oe(327));Ps();var e=kl(t,0);if(!(e&1))return mn(t,Mt()),null;var n=tu(t,e);if(t.tag!==0&&n===2){var i=vf(t);i!==0&&(e=i,n=jf(t,i))}if(n===1)throw n=na,Ir(t,0),Yi(t,e),mn(t,Mt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,ln,yi),mn(t,Mt()),null}function Cd(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Hs=Mt()+500,Su&&pr())}}function Vr(t){Ki!==null&&Ki.tag===0&&!(qe&6)&&Ps();var e=qe;qe|=1;var n=Fn.transition,i=it;try{if(Fn.transition=null,it=1,t)return t()}finally{it=i,Fn.transition=n,qe=e,!(qe&6)&&pr()}}function bd(){Sn=Ms.current,ft(Ms)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wy(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(ld(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:Bs(),ft(dn),ft(qt),vd();break;case 5:gd(i);break;case 4:Bs();break;case 13:ft(dt);break;case 19:ft(dt);break;case 10:hd(i.type._context);break;case 22:case 23:bd()}n=n.return}if(Dt=t,At=t=sr(t.current,null),kt=Sn=e,bt=0,na=null,Td=Tu=Br=0,ln=Uo=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Pr=null}return t}function Wv(t,e){do{var n=At;try{if(fd(),gl.current=Zl,Kl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kl=!1}if(zr=0,Nt=Ct=gt=null,Do=!1,Qo=0,Ed.current=null,n===null||n.return===null){bt=1,na=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=tm(o);if(p!==null){p.flags&=-257,nm(p,o,a,s,e),p.mode&1&&em(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){em(s,u,e),Rd();break e}l=Error(oe(426))}}else if(ht&&a.mode&1){var m=tm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),nm(m,o,a,s,e),ud(Vs(l,a));break e}}s=l=Vs(l,a),bt!==4&&(bt=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Cv(s,l,e);qp(s,h);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=bv(s,a,e);qp(s,S);break e}}s=s.return}while(s!==null)}Yv(n)}catch(R){e=R,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function jv(){var t=Jl.current;return Jl.current=Zl,t===null?Zl:t}function Rd(){(bt===0||bt===3||bt===2)&&(bt=4),Dt===null||!(Br&268435455)&&!(Tu&268435455)||Yi(Dt,kt)}function tu(t,e){var n=qe;qe|=2;var i=jv();(Dt!==t||kt!==e)&&(yi=null,Ir(t,e));do try{mS();break}catch(r){Wv(t,r)}while(!0);if(fd(),qe=n,Jl.current=i,At!==null)throw Error(oe(261));return Dt=null,kt=0,bt}function mS(){for(;At!==null;)Xv(At)}function gS(){for(;At!==null&&!V_();)Xv(At)}function Xv(t){var e=$v(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?Yv(t):At=e,Ed.current=null}function Yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uS(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,At=null;return}}else if(n=lS(n,e,Sn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);bt===0&&(bt=5)}function Tr(t,e,n){var i=it,r=Fn.transition;try{Fn.transition=null,it=1,vS(t,e,n,i)}finally{Fn.transition=r,it=i}return null}function vS(t,e,n,i){do Ps();while(Ki!==null);if(qe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Z_(t,s),t===Dt&&(At=Dt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,Kv(Fl,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var o=it;it=1;var a=qe;qe|=4,Ed.current=null,fS(t,n),Vv(n,t),ky(wf),Ol=!!Mf,wf=Mf=null,t.current=n,hS(n),H_(),qe=a,it=o,Fn.transition=s}else t.current=n;if(Na&&(Na=!1,Ki=t,eu=r),s=t.pendingLanes,s===0&&(ir=null),j_(n.stateNode),mn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=Gf,Gf=null,t;return eu&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===Wf?Fo++:(Fo=0,Wf=t):Fo=0,pr(),null}function Ps(){if(Ki!==null){var t=Cg(eu),e=Fn.transition,n=it;try{if(Fn.transition=null,it=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,eu=0,qe&6)throw Error(oe(331));var r=qe;for(qe|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:Io(8,c,s)}var f=c.child;if(f!==null)f.return=c,_e=f;else for(;_e!==null;){c=_e;var d=c.sibling,p=c.return;if(Ov(c),c===u){_e=null;break}if(d!==null){d.return=p,_e=d;break}_e=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,_e=h;break e}_e=s.return}}var x=t.current;for(_e=x;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=x;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eu(9,a)}}catch(R){yt(a,a.return,R)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(qe=r,pr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(gu,t)}catch{}i=!0}return i}finally{it=n,Fn.transition=e}}return!1}function mm(t,e,n){e=Vs(n,e),e=Cv(t,e,1),t=nr(t,e,1),e=Qt(),t!==null&&(ca(t,1,e),mn(t,e))}function yt(t,e,n){if(t.tag===3)mm(t,t,n);else for(;e!==null;){if(e.tag===3){mm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Vs(n,t),t=bv(e,t,1),e=nr(e,t,1),t=Qt(),e!==null&&(ca(e,1,t),mn(e,t));break}}e=e.return}}function xS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(kt&n)===n&&(bt===4||bt===3&&(kt&130023424)===kt&&500>Mt()-Ad?Ir(t,0):Td|=n),mn(t,e)}function qv(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=Qt();t=Pi(t,e),t!==null&&(ca(t,e,n),mn(t,n))}function _S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qv(t,n)}function yS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),qv(t,n)}var $v;$v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,aS(t,e,n);fn=!!(t.flags&131072)}else fn=!1,ht&&e.flags&1048576&&Qg(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xl(t,e),t=e.pendingProps;var r=ks(e,qt.current);Rs(e,n),r=_d(null,e,i,t,r,n);var s=yd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pd(e),r.updater=wu,e.stateNode=r,r._reactInternals=e,Nf(e,i,t,n),e=Uf(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&ad(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=MS(i),t=jn(i,t),r){case 0:e=If(null,e,i,t,n);break e;case 1:e=sm(null,e,i,t,n);break e;case 11:e=im(null,e,i,t,n);break e;case 14:e=rm(null,e,i,jn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),If(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),sm(t,e,i,r,n);case 3:e:{if(Nv(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sv(t,e),ql(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(oe(423)),e),e=om(t,e,i,n,r);break e}else if(i!==r){r=Vs(Error(oe(424)),e),e=om(t,e,i,n,r);break e}else for(wn=tr(e.stateNode.containerInfo.firstChild),En=e,ht=!0,Yn=null,n=iv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=Li(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return ov(e),t===null&&Rf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ef(i,r)?o=null:s!==null&&Ef(i,s)&&(e.flags|=32),Lv(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&Rf(e),null;case 13:return Dv(t,e,n);case 4:return md(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),im(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(Xl,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!dn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=kn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),rm(t,e,i,r,n);case 15:return Rv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),xl(t,e),e.tag=1,pn(i)?(t=!0,Gl(e)):t=!1,Rs(e,n),Av(e,i,r),Nf(e,i,r,n),Uf(null,e,i,!0,t,n);case 19:return Iv(t,e,n);case 22:return Pv(t,e,n)}throw Error(oe(156,e.tag))};function Kv(t,e){return wg(t,e)}function SS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new SS(t,e,n,i)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MS(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===Kh)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Ur(n.children,r,s,e);case qh:o=8,r|=8;break;case tf:return t=Un(12,n,e,r|2),t.elementType=tf,t.lanes=s,t;case nf:return t=Un(13,n,e,r),t.elementType=nf,t.lanes=s,t;case rf:return t=Un(19,n,e,r),t.elementType=rf,t.lanes=s,t;case og:return Au(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rg:o=10;break e;case sg:o=9;break e;case $h:o=11;break e;case Kh:o=14;break e;case Wi:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function Au(t,e,n,i){return t=Un(22,t,i,e),t.elementType=og,t.lanes=n,t.stateNode={isHidden:!1},t}function cc(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ld(t,e,n,i,r,s,o,a,l){return t=new wS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pd(s),t}function ES(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Zv(t){if(!t)return ur;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(pn(n))return Zg(t,n,e)}return e}function Jv(t,e,n,i,r,s,o,a,l){return t=Ld(n,i,!0,t,r,s,o,a,l),t.context=Zv(null),n=t.current,i=Qt(),r=rr(n),s=Ai(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,ca(t,r,i),mn(t,i),t}function Cu(t,e,n,i){var r=e.current,s=Qt(),o=rr(r);return n=Zv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(Qn(t,r,o,s),ml(t,r,o)),o}function nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){gm(t,e),(t=t.alternate)&&gm(t,e)}function TS(){return null}var Qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dd(t){this._internalRoot=t}bu.prototype.render=Dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Cu(t,e,null,null)};bu.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Cu(null,t,null,null)}),e[Ri]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&Ng(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vm(){}function AS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=nu(o);s.call(u)}}var o=Jv(e,i,t,0,null,!1,!1,"",vm);return t._reactRootContainer=o,t[Ri]=o.current,qo(t.nodeType===8?t.parentNode:t),Vr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=nu(l);a.call(u)}}var l=Ld(t,0,!1,null,null,!1,!1,"",vm);return t._reactRootContainer=l,t[Ri]=l.current,qo(t.nodeType===8?t.parentNode:t),Vr(function(){Cu(e,l,n,i)}),l}function Pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nu(o);a.call(l)}}Cu(e,o,t,r)}else o=AS(n,e,t,r,i);return nu(o)}bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(Qh(e,n|1),mn(e,Mt()),!(qe&6)&&(Hs=Mt()+500,pr()))}break;case 13:Vr(function(){var i=Pi(t,1);if(i!==null){var r=Qt();Qn(i,t,1,r)}}),Nd(t,1)}};ed=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=Qt();Qn(e,t,134217728,n)}Nd(t,134217728)}};Rg=function(t){if(t.tag===13){var e=rr(t),n=Pi(t,e);if(n!==null){var i=Qt();Qn(n,t,e,i)}Nd(t,e)}};Pg=function(){return it};Lg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};pf=function(t,e,n){switch(e){case"input":if(af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yu(i);if(!r)throw Error(oe(90));lg(i),af(i,r)}}}break;case"textarea":cg(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};vg=Cd;xg=Vr;var CS={usingClientEntryPoint:!1,Events:[ha,gs,yu,mg,gg,Cd]},ho={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bS={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sg(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||TS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{gu=Da.inject(bS),li=Da}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(oe(200));return ES(t,e,null,n)};An.createRoot=function(t,e){if(!Id(t))throw Error(oe(299));var n=!1,i="",r=Qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ld(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,qo(t.nodeType===8?t.parentNode:t),new Dd(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Sg(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Vr(t)};An.hydrate=function(t,e,n){if(!Ru(e))throw Error(oe(200));return Pu(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Id(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Qv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jv(e,null,t,1,n??null,r,!1,s,o),t[Ri]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bu(e)};An.render=function(t,e,n){if(!Ru(e))throw Error(oe(200));return Pu(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(oe(40));return t._reactRootContainer?(Vr(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};An.unstable_batchedUpdates=Cd;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ru(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Pu(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function ex(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ex)}catch(t){console.error(t)}}ex(),eg.exports=An;var RS=eg.exports,tx,xm=RS;tx=xm.createRoot,xm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="169",PS=0,_m=1,LS=2,nx=1,NS=2,_i=3,cr=0,en=1,Dn=2,or=0,Ls=1,iu=2,ym=3,Sm=4,ix=5,qi=100,DS=101,IS=102,US=103,FS=104,rx=200,kS=201,sx=202,OS=203,Yf=204,qf=205,zS=206,BS=207,VS=208,HS=209,GS=210,WS=211,jS=212,XS=213,YS=214,$f=0,ia=1,Kf=2,Gs=3,Zf=4,Jf=5,Qf=6,eh=7,ox=0,qS=1,$S=2,Ci=0,KS=1,ZS=2,JS=3,QS=4,e1=5,t1=6,n1=7,ax=300,Ws=301,js=302,th=303,nh=304,Lu=306,ru=1e3,Nr=1001,ih=1002,hn=1003,i1=1004,Ia=1005,Jt=1006,hc=1007,Zi=1008,Ni=1009,lx=1010,ux=1011,ra=1012,Fd=1013,fr=1014,Kn=1015,Qs=1016,kd=1017,Od=1018,Xs=1020,cx=35902,fx=1021,hx=1022,Zn=1023,dx=1024,px=1025,Ns=1026,Ys=1027,zd=1028,Bd=1029,mx=1030,Vd=1031,Hd=1033,Ml=33776,wl=33777,El=33778,Tl=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,uh=37492,ch=37496,fh=37808,hh=37809,dh=37810,ph=37811,mh=37812,gh=37813,vh=37814,xh=37815,_h=37816,yh=37817,Sh=37818,Mh=37819,wh=37820,Eh=37821,Al=36492,Th=36494,Ah=36495,gx=36283,Ch=36284,bh=36285,Rh=36286,r1=3200,s1=3201,o1=0,a1=1,cn="",ii="srgb",Ii="srgb-linear",Gd="display-p3",Nu="display-p3-linear",su="linear",ct="srgb",ou="rec709",au="p3",$r=7680,Mm=519,l1=512,u1=513,c1=514,vx=515,f1=516,h1=517,d1=518,p1=519,wm=35044,Em="300 es",Ei=2e3,lu=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,Ph=180/Math.PI;function to(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function m1(t,e){return(t%e+e)%e}function pc(t,e,n){return(1-n)*t+n*e}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,n=0){Me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],h=r[6],x=r[1],v=r[4],S=r[7],R=r[2],b=r[5],T=r[8];return s[0]=o*y+a*x+l*R,s[3]=o*m+a*v+l*b,s[6]=o*h+a*S+l*T,s[1]=u*y+c*x+f*R,s[4]=u*m+c*v+f*b,s[7]=u*h+c*S+f*T,s[2]=d*y+p*x+g*R,s[5]=d*m+p*v+g*b,s[8]=d*h+p*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new Be;function xx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function g1(){const t=sa("canvas");return t.style.display="block",t}const Tm={};function Cl(t){t in Tm||(Tm[t]=!0,console.warn(t))}function v1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function x1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Am=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cm=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[Ii]:{transfer:su,primaries:ou,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ii]:{transfer:ct,primaries:ou,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Nu]:{transfer:su,primaries:au,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Cm),fromReference:t=>t.applyMatrix3(Am)},[Gd]:{transfer:ct,primaries:au,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Cm),fromReference:t=>t.applyMatrix3(Am).convertLinearToSRGB()}},y1=new Set([Ii,Nu]),tt={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!y1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=mo[e].toReference,r=mo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return mo[t].primaries},getTransfer:function(t){return t===cn?su:mo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(mo[e].luminanceCoefficients)}};function Ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class S1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=sa("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ds(n[i]/255)*255):n[i]=Ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M1=0;class _x{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vc(r[o].image)):s.push(vc(r[o]))}else s=vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?S1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w1=0;class Ot extends eo{constructor(e=Ot.DEFAULT_IMAGE,n=Ot.DEFAULT_MAPPING,i=Nr,r=Nr,s=Jt,o=Zi,a=Zn,l=Ni,u=Ot.DEFAULT_ANISOTROPY,c=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=to(),this.name="",this.source=new _x(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ru:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ru:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ax;Ot.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(p+1)/2,R=(h+1)/2,b=(c+d)/4,T=(f+y)/4,P=(g+m)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=T/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-y)/x,this.z=(d-c)/x,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E1 extends eo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new _x(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends E1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class yx extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T1 extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(f!==y||l!==d||u!==p||c!==g){let m=1-a;const h=l*d+u*p+c*g+f*y,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,h*x);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}const S=a*x;if(l=l*m+d*S,u=u*m+p*S,c=c*m+g*S,f=f*m+y*S,m===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*p-u*d,e[n+1]=l*g+c*d+u*f-a*p,e[n+2]=u*g+c*p+a*d-l*f,e[n+3]=c*g-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"YXZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"ZXY":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"ZYX":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"YZX":this._x=d*c*f+u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f-d*p*g;break;case"XZY":this._x=d*c*f-u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new D,bm=new no;class jr{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),Fa.subVectors(this.max,go),Zr.subVectors(e.a,go),Jr.subVectors(e.b,go),Qr.subVectors(e.c,go),ki.subVectors(Jr,Zr),Oi.subVectors(Qr,Jr),vr.subVectors(Zr,Qr);let n=[0,-ki.z,ki.y,0,-Oi.z,Oi.y,0,-vr.z,vr.y,ki.z,0,-ki.x,Oi.z,0,-Oi.x,vr.z,0,-vr.x,-ki.y,ki.x,0,-Oi.y,Oi.x,0,-vr.y,vr.x,0];return!_c(n,Zr,Jr,Qr,Fa)||(n=[1,0,0,0,1,0,0,0,1],!_c(n,Zr,Jr,Qr,Fa))?!1:(ka.crossVectors(ki,Oi),n=[ka.x,ka.y,ka.z],_c(n,Zr,Jr,Qr,Fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new D,new D,new D,new D,new D,new D,new D,new D],Vn=new D,Ua=new jr,Zr=new D,Jr=new D,Qr=new D,ki=new D,Oi=new D,vr=new D,go=new D,Fa=new D,ka=new D,xr=new D;function _c(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){xr.fromArray(t,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),u=n.dot(xr),c=i.dot(xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const A1=new jr,vo=new D,yc=new D;class Xr{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):A1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const n=vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(yc)),this.expandByPoint(vo.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new D,Sc=new D,Oa=new D,zi=new D,Mc=new D,za=new D,wc=new D;class Wd{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Sc.copy(e).add(n).multiplyScalar(.5),Oa.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(Sc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Oa),a=zi.dot(this.direction),l=-zi.dot(Oa),u=zi.lengthSq(),c=Math.abs(1-o*o);let f,d,p,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const y=1/c;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sc).addScaledVector(Oa,d),p}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){Mc.subVectors(n,e),za.subVectors(i,e),wc.crossVectors(Mc,za);let o=this.direction.dot(wc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(za.crossVectors(zi,za));if(l<0)return null;const u=a*this.direction.dot(Mc.cross(zi));if(u<0||l+u>o)return null;const c=-a*zi.dot(wc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,n,i,r,s,o,a,l,u,c,f,d,p,g,y,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,p,g,y,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,p,g,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,g=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,g=u*c,y=u*f;n[0]=d+y*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-g,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,g=u*c,y=u*f;n[0]=d-y*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*c,n[9]=y-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,g=a*c,y=a*f;n[0]=l*c,n[4]=g*u-p,n[8]=d*u+y,n[1]=l*f,n[5]=y*u+d,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,y=a*u;n[0]=l*c,n[4]=y-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+g,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+y,n[5]=o*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*c,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C1,e,b1)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(i,xn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(i,xn)),Bi.normalize(),Ba.crossVectors(xn,Bi),r[0]=Bi.x,r[4]=Ba.x,r[8]=xn.x,r[1]=Bi.y,r[5]=Ba.y,r[9]=xn.y,r[2]=Bi.z,r[6]=Ba.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],h=i[14],x=i[3],v=i[7],S=i[11],R=i[15],b=r[0],T=r[4],P=r[8],k=r[12],_=r[1],w=r[5],z=r[9],I=r[13],j=r[2],$=r[6],V=r[10],ee=r[14],L=r[3],J=r[7],Q=r[11],ae=r[15];return s[0]=o*b+a*_+l*j+u*L,s[4]=o*T+a*w+l*$+u*J,s[8]=o*P+a*z+l*V+u*Q,s[12]=o*k+a*I+l*ee+u*ae,s[1]=c*b+f*_+d*j+p*L,s[5]=c*T+f*w+d*$+p*J,s[9]=c*P+f*z+d*V+p*Q,s[13]=c*k+f*I+d*ee+p*ae,s[2]=g*b+y*_+m*j+h*L,s[6]=g*T+y*w+m*$+h*J,s[10]=g*P+y*z+m*V+h*Q,s[14]=g*k+y*I+m*ee+h*ae,s[3]=x*b+v*_+S*j+R*L,s[7]=x*T+v*w+S*$+R*J,s[11]=x*P+v*z+S*V+R*Q,s[15]=x*k+v*I+S*ee+R*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],x=f*m*u-y*d*u+y*l*p-a*m*p-f*l*h+a*d*h,v=g*d*u-c*m*u-g*l*p+o*m*p+c*l*h-o*d*h,S=c*y*u-g*f*u+g*a*p-o*y*p-c*a*h+o*f*h,R=g*f*l-c*y*l-g*a*d+o*y*d+c*a*m-o*f*m,b=n*x+i*v+r*S+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=x*T,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*T,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*m*s-g*d*s+g*r*p-n*m*p-c*r*h+n*d*h)*T,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*h-n*l*h)*T,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(g*f*s-c*y*s-g*i*p+n*y*p+c*i*h-n*f*h)*T,e[10]=(o*y*s-g*a*s+g*i*u-n*y*u-o*i*h+n*a*h)*T,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*T,e[12]=R*T,e[13]=(c*y*r-g*f*r+g*i*d-n*y*d-c*i*m+n*f*m)*T,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,g=s*f,y=o*c,m=o*f,h=a*f,x=l*u,v=l*c,S=l*f,R=i.x,b=i.y,T=i.z;return r[0]=(1-(y+h))*R,r[1]=(p+S)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(d+h))*b,r[6]=(m+x)*b,r[7]=0,r[8]=(g+v)*T,r[9]=(m-x)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=es.set(r[0],r[1],r[2]).length();const o=es.set(r[4],r[5],r[6]).length(),a=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const u=1/s,c=1/o,f=1/a;return Hn.elements[0]*=u,Hn.elements[1]*=u,Hn.elements[2]*=u,Hn.elements[4]*=c,Hn.elements[5]*=c,Hn.elements[6]*=c,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Ei)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===lu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*c;let g,y;if(a===Ei)g=(o+s)*f,y=-2*f;else if(a===lu)g=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const es=new D,Hn=new We,C1=new D(0,0,0),b1=new D(1,1,1),Bi=new D,Ba=new D,xn=new D,Rm=new We,Pm=new no;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Pm.setFromEuler(this),this.setFromQuaternion(Pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Sx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R1=0;const Lm=new D,ts=new no,mi=new We,Va=new D,xo=new D,P1=new D,L1=new no,Nm=new D(1,0,0),Dm=new D(0,1,0),Im=new D(0,0,1),Um={type:"added"},N1={type:"removed"},ns={type:"childadded",child:null},Ec={type:"childremoved",child:null};class tn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new D,n=new ci,i=new no,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new Be}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Dm,e)}rotateZ(e){return this.rotateOnAxis(Im,e)}translateOnAxis(e,n){return Lm.copy(e).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Dm,e)}translateZ(e){return this.translateOnAxis(Im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Va.copy(e):Va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(xo,Va,this.up):mi.lookAt(Va,xo,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(mi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Um),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(N1),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Um),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,P1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,L1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new D(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new D,gi=new D,Tc=new D,vi=new D,is=new D,rs=new D,Fm=new D,Ac=new D,Cc=new D,bc=new D,Rc=new pt,Pc=new pt,Lc=new pt;class qn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),gi.subVectors(i,n),Tc.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(gi),l=Gn.dot(Tc),u=gi.dot(gi),c=gi.dot(Tc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Rc.setScalar(0),Pc.setScalar(0),Lc.setScalar(0),Rc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,i),Lc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rc,s.x),o.addScaledVector(Pc,s.y),o.addScaledVector(Lc,s.z),o}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),gi.subVectors(e,n),Gn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Gn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;is.subVectors(r,i),rs.subVectors(s,i),Ac.subVectors(e,i);const l=is.dot(Ac),u=rs.dot(Ac);if(l<=0&&u<=0)return n.copy(i);Cc.subVectors(e,r);const c=is.dot(Cc),f=rs.dot(Cc);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(is,o);bc.subVectors(e,s);const p=is.dot(bc),g=rs.dot(bc);if(g>=0&&p<=g)return n.copy(s);const y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(rs,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return Fm.subVectors(s,r),a=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(Fm,a);const h=1/(m+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Nc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=m1(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Nc(o,s,e+1/3),this.g=Nc(o,s,e),this.b=Nc(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=Mx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return tt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Yt(Wt.r*255,0,255))*65536+Math.round(Yt(Wt.g*255,0,255))*256+Math.round(Yt(Wt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ii){tt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(Ha);const i=pc(Vi.h,Ha.h,n),r=pc(Vi.s,Ha.s,n),s=pc(Vi.l,Ha.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new $e;$e.NAMES=Mx;let D1=0;class io extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Ls,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=qf,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jd extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new D,Ga=new Me;class Ft{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wm,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ga.fromBufferAttribute(this,n),Ga.applyMatrix3(e),this.setXY(n,Ga.x,Ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}}class wx extends Ft{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ex extends Ft{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vt extends Ft{constructor(e,n,i){super(new Float32Array(e),n,i)}}let I1=0;const Rn=new We,Dc=new tn,ss=new D,_n=new jr,_o=new jr,Lt=new D;class Bt extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?Ex:wx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(_n.min,_o.min),_n.expandByPoint(Lt),Lt.addVectors(_n.max,_o.max),_n.expandByPoint(Lt)):(_n.expandByPoint(_o.min),_n.expandByPoint(_o.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Lt.fromBufferAttribute(a,u),l&&(ss.fromBufferAttribute(e,u),Lt.add(ss)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new D,l[P]=new D;const u=new D,c=new D,f=new D,d=new Me,p=new Me,g=new Me,y=new D,m=new D;function h(P,k,_){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,k),f.fromBufferAttribute(i,_),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,k),g.fromBufferAttribute(s,_),c.sub(u),f.sub(u),p.sub(d),g.sub(d);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(w),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(w),a[P].add(y),a[k].add(y),a[_].add(y),l[P].add(m),l[k].add(m),l[_].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,k=x.length;P<k;++P){const _=x[P],w=_.start,z=_.count;for(let I=w,j=w+z;I<j;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new D,S=new D,R=new D,b=new D;function T(P){R.fromBufferAttribute(r,P),b.copy(R);const k=a[P];v.copy(k),v.sub(R.multiplyScalar(R.dot(k))).normalize(),S.crossVectors(b,k);const w=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,w)}for(let P=0,k=x.length;P<k;++P){const _=x[P],w=_.start,z=_.count;for(let I=w,j=w+z;I<j;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ft(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)d[g++]=u[p++]}return new Ft(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const km=new We,_r=new Wd,Wa=new Xr,Om=new D,ja=new D,Xa=new D,Ya=new D,Ic=new D,qa=new D,zm=new D,$a=new D;class rt extends tn{constructor(e=new Bt,n=new jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Ic.fromBufferAttribute(f,e),o?qa.addScaledVector(Ic,c):qa.addScaledVector(Ic.sub(n),c))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Wa.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Wa,Om)===null||_r.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(km.copy(s).invert(),_r.copy(e.ray).applyMatrix4(km),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=v;S<R;S+=3){const b=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=Ka(this,h,e,i,u,c,f,b,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Ka(this,o,e,i,u,c,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=v;S<R;S+=3){const b=S,T=S+1,P=S+2;r=Ka(this,h,e,i,u,c,f,b,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const x=m,v=m+1,S=m+2;r=Ka(this,o,e,i,u,c,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function U1(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo($a);return u<n.near||u>n.far?null:{distance:u,point:$a.clone(),object:t}}function Ka(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ja),t.getVertexPosition(l,Xa),t.getVertexPosition(u,Ya);const c=U1(t,e,n,i,ja,Xa,Ya,zm);if(c){const f=new D;qn.getBarycoord(zm,ja,Xa,Ya,f),r&&(c.uv=qn.getInterpolatedAttribute(r,a,l,u,f,new Me)),s&&(c.uv1=qn.getInterpolatedAttribute(s,a,l,u,f,new Me)),o&&(c.normal=qn.getInterpolatedAttribute(o,a,l,u,f,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new D,materialIndex:0};qn.getNormal(ja,Xa,Ya,d.normal),c.face=d,c.barycoord=f}return c}class pa extends Bt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(f,2));function g(y,m,h,x,v,S,R,b,T,P,k){const _=S/T,w=R/P,z=S/2,I=R/2,j=b/2,$=T+1,V=P+1;let ee=0,L=0;const J=new D;for(let Q=0;Q<V;Q++){const ae=Q*w-I;for(let ge=0;ge<$;ge++){const Oe=ge*_-z;J[y]=Oe*x,J[m]=ae*v,J[h]=j,u.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[h]=b>0?1:-1,c.push(J.x,J.y,J.z),f.push(ge/T),f.push(1-Q/P),ee+=1}}for(let Q=0;Q<P;Q++)for(let ae=0;ae<T;ae++){const ge=d+ae+$*Q,Oe=d+ae+$*(Q+1),q=d+(ae+1)+$*(Q+1),ne=d+(ae+1)+$*Q;l.push(ge,Oe,ne),l.push(Oe,q,ne),L+=6}a.addGroup(p,L,k),p+=L,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function F1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Tx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const k1={clone:qs,merge:$t};var O1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O1,this.fragmentShader=z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=F1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ax extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new D,Bm=new Me,Vm=new Me;class Mn extends Ax{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,Bm,Vm),n.subVectors(Vm,Bm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const os=-90,as=1;class B1 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(os,as,e,n);r.layers=this.layers,this.add(r);const s=new Mn(os,as,e,n);s.layers=this.layers,this.add(s);const o=new Mn(os,as,e,n);o.layers=this.layers,this.add(o);const a=new Mn(os,as,e,n);a.layers=this.layers,this.add(a);const l=new Mn(os,as,e,n);l.layers=this.layers,this.add(l);const u=new Mn(os,as,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cx extends Ot{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V1 extends In{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pa(5,5,5),s=new wt({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:or});s.uniforms.tEquirect.value=n;const o=new rt(r,s),a=n.minFilter;return n.minFilter===Zi&&(n.minFilter=Jt),new B1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Uc=new D,H1=new D,G1=new Be;class Ar{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uc.subVectors(i,n).cross(H1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||G1.getNormalMatrix(e),r=this.coplanarPoint(Uc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Xr,Za=new D;class bx{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],h=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-h).normalize(),i[1].setComponents(l+s,d+u,m+p,S+h).normalize(),i[2].setComponents(l+o,d+c,m+g,S+x).normalize(),i[3].setComponents(l-o,d-c,m-g,S-x).normalize(),i[4].setComponents(l-a,d-f,m-y,S-v).normalize(),n===Ei)i[5].setComponents(l+a,d+f,m+y,S+v).normalize();else if(n===lu)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function W1(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const y=f[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Nn extends Bt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],g=[],y=[],m=[];for(let h=0;h<c;h++){const x=h*d-o;for(let v=0;v<u;v++){const S=v*f-s;g.push(S,-x,0),y.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+u*h,S=x+u*(h+1),R=x+1+u*(h+1),b=x+1+u*h;p.push(v,S,b),p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.widthSegments,e.heightSegments)}}var j1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SM="gl_FragColor = linearToOutputTexel( gl_FragColor );",MM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ew=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ow=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ww=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ow=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ME=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:j1,alphahash_pars_fragment:X1,alphamap_fragment:Y1,alphamap_pars_fragment:q1,alphatest_fragment:$1,alphatest_pars_fragment:K1,aomap_fragment:Z1,aomap_pars_fragment:J1,batching_pars_vertex:Q1,batching_vertex:eM,begin_vertex:tM,beginnormal_vertex:nM,bsdfs:iM,iridescence_fragment:rM,bumpmap_pars_fragment:sM,clipping_planes_fragment:oM,clipping_planes_pars_fragment:aM,clipping_planes_pars_vertex:lM,clipping_planes_vertex:uM,color_fragment:cM,color_pars_fragment:fM,color_pars_vertex:hM,color_vertex:dM,common:pM,cube_uv_reflection_fragment:mM,defaultnormal_vertex:gM,displacementmap_pars_vertex:vM,displacementmap_vertex:xM,emissivemap_fragment:_M,emissivemap_pars_fragment:yM,colorspace_fragment:SM,colorspace_pars_fragment:MM,envmap_fragment:wM,envmap_common_pars_fragment:EM,envmap_pars_fragment:TM,envmap_pars_vertex:AM,envmap_physical_pars_fragment:kM,envmap_vertex:CM,fog_vertex:bM,fog_pars_vertex:RM,fog_fragment:PM,fog_pars_fragment:LM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:DM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:UM,lights_pars_begin:FM,lights_toon_fragment:OM,lights_toon_pars_fragment:zM,lights_phong_fragment:BM,lights_phong_pars_fragment:VM,lights_physical_fragment:HM,lights_physical_pars_fragment:GM,lights_fragment_begin:WM,lights_fragment_maps:jM,lights_fragment_end:XM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:KM,map_fragment:ZM,map_pars_fragment:JM,map_particle_fragment:QM,map_particle_pars_fragment:ew,metalnessmap_fragment:tw,metalnessmap_pars_fragment:nw,morphinstance_vertex:iw,morphcolor_vertex:rw,morphnormal_vertex:sw,morphtarget_pars_vertex:ow,morphtarget_vertex:aw,normal_fragment_begin:lw,normal_fragment_maps:uw,normal_pars_fragment:cw,normal_pars_vertex:fw,normal_vertex:hw,normalmap_pars_fragment:dw,clearcoat_normal_fragment_begin:pw,clearcoat_normal_fragment_maps:mw,clearcoat_pars_fragment:gw,iridescence_pars_fragment:vw,opaque_fragment:xw,packing:_w,premultiplied_alpha_fragment:yw,project_vertex:Sw,dithering_fragment:Mw,dithering_pars_fragment:ww,roughnessmap_fragment:Ew,roughnessmap_pars_fragment:Tw,shadowmap_pars_fragment:Aw,shadowmap_pars_vertex:Cw,shadowmap_vertex:bw,shadowmask_pars_fragment:Rw,skinbase_vertex:Pw,skinning_pars_vertex:Lw,skinning_vertex:Nw,skinnormal_vertex:Dw,specularmap_fragment:Iw,specularmap_pars_fragment:Uw,tonemapping_fragment:Fw,tonemapping_pars_fragment:kw,transmission_fragment:Ow,transmission_pars_fragment:zw,uv_pars_fragment:Bw,uv_pars_vertex:Vw,uv_vertex:Hw,worldpos_vertex:Gw,background_vert:Ww,background_frag:jw,backgroundCube_vert:Xw,backgroundCube_frag:Yw,cube_vert:qw,cube_frag:$w,depth_vert:Kw,depth_frag:Zw,distanceRGBA_vert:Jw,distanceRGBA_frag:Qw,equirect_vert:eE,equirect_frag:tE,linedashed_vert:nE,linedashed_frag:iE,meshbasic_vert:rE,meshbasic_frag:sE,meshlambert_vert:oE,meshlambert_frag:aE,meshmatcap_vert:lE,meshmatcap_frag:uE,meshnormal_vert:cE,meshnormal_frag:fE,meshphong_vert:hE,meshphong_frag:dE,meshphysical_vert:pE,meshphysical_frag:mE,meshtoon_vert:gE,meshtoon_frag:vE,points_vert:xE,points_frag:_E,shadow_vert:yE,shadow_frag:SE,sprite_vert:ME,sprite_frag:wE},ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ri={basic:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:$t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:$t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:$t([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:$t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:$t([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:$t([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:$t([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:$t([ce.lights,ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ri.physical={uniforms:$t([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ja={r:0,b:0,g:0},Sr=new ci,EE=new We;function TE(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function y(x){let v=!1;const S=g(x);S===null?h(a,l):S&&S.isColor&&(h(S,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Lu)?(c===void 0&&(c=new rt(new pa(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:qs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Sr.copy(v.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(Sr)),c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,(f!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new rt(new Nn(2,2),new wt({name:"BackgroundMaterial",uniforms:qs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function h(x,v){x.getRGB(Ja,Tx(t)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:y,addToRenderList:m}}function AE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,w,z,I,j){let $=!1;const V=f(I,z,w);s!==V&&(s=V,u(s.object)),$=p(_,I,z,j),$&&g(_,I,z,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(_,w,z,I),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(_){return t.bindVertexArray(_)}function c(_){return t.deleteVertexArray(_)}function f(_,w,z){const I=z.wireframe===!0;let j=i[_.id];j===void 0&&(j={},i[_.id]=j);let $=j[w.id];$===void 0&&($={},j[w.id]=$);let V=$[I];return V===void 0&&(V=d(l()),$[I]=V),V}function d(_){const w=[],z=[],I=[];for(let j=0;j<n;j++)w[j]=0,z[j]=0,I[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:I,object:_,attributes:{},index:null}}function p(_,w,z,I){const j=s.attributes,$=w.attributes;let V=0;const ee=z.getAttributes();for(const L in ee)if(ee[L].location>=0){const Q=j[L];let ae=$[L];if(ae===void 0&&(L==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),L==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function g(_,w,z,I){const j={},$=w.attributes;let V=0;const ee=z.getAttributes();for(const L in ee)if(ee[L].location>=0){let Q=$[L];Q===void 0&&(L==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),L==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),j[L]=ae,V++}s.attributes=j,s.attributesNum=V,s.index=I}function y(){const _=s.newAttributes;for(let w=0,z=_.length;w<z;w++)_[w]=0}function m(_){h(_,0)}function h(_,w){const z=s.newAttributes,I=s.enabledAttributes,j=s.attributeDivisors;z[_]=1,I[_]===0&&(t.enableVertexAttribArray(_),I[_]=1),j[_]!==w&&(t.vertexAttribDivisor(_,w),j[_]=w)}function x(){const _=s.newAttributes,w=s.enabledAttributes;for(let z=0,I=w.length;z<I;z++)w[z]!==_[z]&&(t.disableVertexAttribArray(z),w[z]=0)}function v(_,w,z,I,j,$,V){V===!0?t.vertexAttribIPointer(_,w,z,j,$):t.vertexAttribPointer(_,w,z,I,j,$)}function S(_,w,z,I){y();const j=I.attributes,$=z.getAttributes(),V=w.defaultAttributeValues;for(const ee in $){const L=$[ee];if(L.location>=0){let J=j[ee];if(J===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),J!==void 0){const Q=J.normalized,ae=J.itemSize,ge=e.get(J);if(ge===void 0)continue;const Oe=ge.buffer,q=ge.type,ne=ge.bytesPerElement,de=q===t.INT||q===t.UNSIGNED_INT||J.gpuType===Fd;if(J.isInterleavedBufferAttribute){const fe=J.data,Le=fe.stride,X=J.offset;if(fe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<L.locationSize;Ee++)h(L.location+Ee,fe.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ee=0;Ee<L.locationSize;Ee++)m(L.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Ee=0;Ee<L.locationSize;Ee++)v(L.location+Ee,ae/L.locationSize,q,Q,Le*ne,(X+ae/L.locationSize*Ee)*ne,de)}else{if(J.isInstancedBufferAttribute){for(let fe=0;fe<L.locationSize;fe++)h(L.location+fe,J.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let fe=0;fe<L.locationSize;fe++)m(L.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let fe=0;fe<L.locationSize;fe++)v(L.location+fe,ae/L.locationSize,q,Q,ae*ne,ae/L.locationSize*fe*ne,de)}}else if(V!==void 0){const Q=V[ee];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(L.location,Q);break;case 3:t.vertexAttrib3fv(L.location,Q);break;case 4:t.vertexAttrib4fv(L.location,Q);break;default:t.vertexAttrib1fv(L.location,Q)}}}}x()}function R(){P();for(const _ in i){const w=i[_];for(const z in w){const I=w[z];for(const j in I)c(I[j].object),delete I[j];delete w[z]}delete i[_]}}function b(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const z in w){const I=w[z];for(const j in I)c(I[j].object),delete I[j];delete w[z]}delete i[_.id]}function T(_){for(const w in i){const z=i[w];if(z[_.id]===void 0)continue;const I=z[_.id];for(const j in I)c(I[j].object),delete I[j];delete z[_.id]}}function P(){k(),o=!0,s!==r&&(s=r,u(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:k,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function CE(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];n.update(p,i,1)}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let y=0;y<f;y++)g+=c[y];for(let y=0;y<d.length;y++)n.update(g,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Zn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ni&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Kn&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:R,maxSamples:b}}function RE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ar,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,v=x*4;let S=h.clippingState||null;l.value=S,S=c(g,d,v,p);for(let R=0;R!==v;++R)S[R]=n[R];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const h=p+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==y;++v,S+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function PE(t){let e=new WeakMap;function n(o,a){return a===th?o.mapping=Ws:a===nh&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===th||a===nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new V1(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Lh extends Ax{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,Hm=[.125,.215,.35,.446,.526,.582],br=20,Fc=new Lh,Gm=new $e;let kc=null,Oc=0,zc=0,Bc=!1;const Cr=(1+Math.sqrt(5))/2,ls=1/Cr,Wm=[new D(-Cr,ls,0),new D(Cr,ls,0),new D(-ls,0,Cr),new D(ls,0,Cr),new D(0,Cr,-ls),new D(0,Cr,ls),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){kc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,Oc,zc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Qs,format:Zn,colorSpace:Ii,depthBuffer:!1},r=Xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LE(s)),this._blurMaterial=NE(s,e,n)}return r}_compileMaterial(e){const n=new rt(this._lodPlanes[0],e);this._renderer.compile(n,Fc)}_sceneToCubeUV(e,n,i,r){const a=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Gm),c.toneMapping=Ci,c.autoClear=!1;const p=new jd({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new rt(new pa,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Gm),y=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;Qa(r,x*v,h>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ym());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wm[(r-s-1)%Wm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new rt(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*br-1),y=s/g,m=isFinite(s)?1+Math.floor(c*y):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const h=[];let x=0;for(let T=0;T<br;++T){const P=T/y,k=Math.exp(-P*P/2);h.push(k),T===0?x+=k:T<m&&(x+=2*k)}for(let T=0;T<h.length;T++)h[T]=h[T]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-ws?r-v+ws:0),b=4*(this._cubeSize-S);Qa(n,R,b,3*S,2*S),l.setRenderTarget(n),l.render(f,Fc)}}function LE(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+Hm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ws?l=Hm[o-t+ws-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,y=3,m=2,h=1,x=new Float32Array(y*g*p),v=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,P=b>2?0:-1,k=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(k,y*g*b),v.set(d,m*g*b);const _=[b,b,b,b,b,b];S.set(_,h*g*b)}const R=new Bt;R.setAttribute("position",new Ft(x,y)),R.setAttribute("uv",new Ft(v,m)),R.setAttribute("faceIndex",new Ft(S,h)),e.push(R),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xm(t,e,n){const i=new In(t,e,n);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function NE(t,e,n){const i=new Float32Array(br),r=new D(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ym(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function qm(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===th||l===nh,c=l===Ws||l===js;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new jm(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new jm(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function IE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Cl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function UE(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let v=0,S=x.length;v<S;v+=3){const R=x[v+0],b=x[v+1],T=x[v+2];d.push(R,b,b,T,T,R)}}else if(g!==void 0){const x=g.array;y=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const R=v+0,b=v+1,T=v+2;d.push(R,b,b,T,T,R)}}else return;const m=new(xx(d)?Ex:wx)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function FE(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function c(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,g);let h=0;for(let x=0;x<g;x++)h+=p[x];for(let x=0;x<y.length;x++)n.update(h,i,y[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function kE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function OE(t,e,n){const i=new WeakMap,r=new pt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let _=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*b*4*f),P=new yx(T,R,b,f);P.type=Kn,P.needsUpdate=!0;const k=S*4;for(let w=0;w<f;w++){const z=h[w],I=x[w],j=v[w],$=R*b*4*w;for(let V=0;V<z.count;V++){const ee=V*k;g===!0&&(r.fromBufferAttribute(z,V),T[$+ee+0]=r.x,T[$+ee+1]=r.y,T[$+ee+2]=r.z,T[$+ee+3]=0),y===!0&&(r.fromBufferAttribute(I,V),T[$+ee+4]=r.x,T[$+ee+5]=r.y,T[$+ee+6]=r.z,T[$+ee+7]=0),m===!0&&(r.fromBufferAttribute(j,V),T[$+ee+8]=r.x,T[$+ee+9]=r.y,T[$+ee+10]=r.z,T[$+ee+11]=j.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new Me(R,b)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function zE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Yd extends Ot{constructor(e,n,i,r,s,o,a,l,u,c=Ns){if(c!==Ns&&c!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ns&&(i=fr),i===void 0&&c===Ys&&(i=Xs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Px=new Ot,$m=new Yd(1,1),Lx=new yx,Nx=new T1,Dx=new Cx,Km=[],Zm=[],Jm=new Float32Array(16),Qm=new Float32Array(9),e0=new Float32Array(4);function ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Km[r];if(s===void 0&&(s=new Float32Array(r),Km[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Du(t,e){let n=Zm[e];n===void 0&&(n=new Int32Array(e),Zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function WE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;e0.set(i),t.uniformMatrix2fv(this.addr,!1,e0),Pt(n,i)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Qm.set(i),t.uniformMatrix3fv(this.addr,!1,Qm),Pt(n,i)}}function XE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Jm.set(i),t.uniformMatrix4fv(this.addr,!1,Jm),Pt(n,i)}}function YE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function ZE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?($m.compareFunction=vx,s=$m):s=Px,n.setTexture2D(e||s,r)}function nT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Nx,r)}function iT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dx,r)}function rT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lx,r)}function sT(t){switch(t){case 5126:return BE;case 35664:return VE;case 35665:return HE;case 35666:return GE;case 35674:return WE;case 35675:return jE;case 35676:return XE;case 5124:case 35670:return YE;case 35667:case 35671:return qE;case 35668:case 35672:return $E;case 35669:case 35673:return KE;case 5125:return ZE;case 36294:return JE;case 36295:return QE;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(t,e){t.uniform1fv(this.addr,e)}function aT(t,e){const n=ro(e,this.size,2);t.uniform2fv(this.addr,n)}function lT(t,e){const n=ro(e,this.size,3);t.uniform3fv(this.addr,n)}function uT(t,e){const n=ro(e,this.size,4);t.uniform4fv(this.addr,n)}function cT(t,e){const n=ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fT(t,e){const n=ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hT(t,e){const n=ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dT(t,e){t.uniform1iv(this.addr,e)}function pT(t,e){t.uniform2iv(this.addr,e)}function mT(t,e){t.uniform3iv(this.addr,e)}function gT(t,e){t.uniform4iv(this.addr,e)}function vT(t,e){t.uniform1uiv(this.addr,e)}function xT(t,e){t.uniform2uiv(this.addr,e)}function _T(t,e){t.uniform3uiv(this.addr,e)}function yT(t,e){t.uniform4uiv(this.addr,e)}function ST(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Px,s[o])}function MT(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Nx,s[o])}function wT(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Dx,s[o])}function ET(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Lx,s[o])}function TT(t){switch(t){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return uT;case 35674:return cT;case 35675:return fT;case 35676:return hT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return xT;case 36295:return _T;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return ET}}class AT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sT(n.type)}}class CT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TT(n.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function t0(t,e){t.seq.push(e),t.map[e.id]=e}function RT(t,e,n){const i=t.name,r=i.length;for(Vc.lastIndex=0;;){const s=Vc.exec(i),o=Vc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){t0(n,u===void 0?new AT(a,t,e):new CT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new bT(a),t0(n,f)),n=f}}}class bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);RT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function n0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const PT=37297;let LT=0;function NT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function DT(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===au&&n===ou?i="LinearDisplayP3ToLinearSRGB":e===ou&&n===au&&(i="LinearSRGBToLinearDisplayP3"),t){case Ii:case Nu:return[i,"LinearTransferOETF"];case ii:case Gd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function i0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+NT(t.getShaderSource(e),o)}else return r}function IT(t,e){const n=DT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function UT(t,e){let n;switch(e){case KS:n="Linear";break;case ZS:n="Reinhard";break;case JS:n="Cineon";break;case QS:n="ACESFilmic";break;case t1:n="AgX";break;case n1:n="Neutral";break;case e1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new D;function FT(){tt.getLuminanceCoefficients(el);const t=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function OT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function r0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(t){return t.replace(BT,HT)}const VT=new Map;function HT(t,e){let n=He[e];if(n===void 0){const i=VT.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nh(n)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(t){return t.replace(GT,WT)}function WT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function a0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===NS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function XT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case js:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function qT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ox:e="ENVMAP_BLENDING_MULTIPLY";break;case qS:e="ENVMAP_BLENDING_MIX";break;case $S:e="ENVMAP_BLENDING_ADD";break}return e}function $T(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function KT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jT(n),u=XT(n),c=YT(n),f=qT(n),d=$T(n),p=kT(n),g=OT(s),y=r.createProgram();let m,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),h.length>0&&(h+=`
`)):(m=[a0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),h=[a0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?He.tonemapping_pars_fragment:"",n.toneMapping!==Ci?UT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,IT("linearToOutputTexel",n.outputColorSpace),FT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=Nh(o),o=r0(o,n),o=s0(o,n),a=Nh(a),a=r0(a,n),a=s0(a,n),o=o0(o),a=o0(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+o,S=x+h+a,R=n0(r,r.VERTEX_SHADER,v),b=n0(r,r.FRAGMENT_SHADER,S);r.attachShader(y,R),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(w){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),I=r.getShaderInfoLog(R).trim(),j=r.getShaderInfoLog(b).trim();let $=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,b);else{const ee=i0(r,R,"vertex"),L=i0(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+ee+`
`+L)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||j==="")&&(V=!1);V&&(w.diagnostics={runnable:$,programLog:z,vertexShader:{log:I,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(R),r.deleteShader(b),P=new bl(r,y),k=zT(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let k;this.getAttributes=function(){return k===void 0&&T(this),k};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,PT)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=b,this}let ZT=0;class JT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new QT(e),n.set(e,i)),i}}class QT{constructor(e){this.id=ZT++,this.code=e,this.usedTimes=0}}function e2(t,e,n,i,r,s,o){const a=new Sx,l=new JT,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return u.add(_),_===0?"uv":`uv${_}`}function h(_,w,z,I,j){const $=I.fog,V=j.geometry,ee=_.isMeshStandardMaterial?I.environment:null,L=(_.isMeshStandardMaterial?n:e).get(_.envMap||ee),J=L&&L.mapping===Lu?L.image.height:null,Q=y[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ge=ae!==void 0?ae.length:0;let Oe=0;V.morphAttributes.position!==void 0&&(Oe=1),V.morphAttributes.normal!==void 0&&(Oe=2),V.morphAttributes.color!==void 0&&(Oe=3);let q,ne,de,fe;if(Q){const on=ri[Q];q=on.vertexShader,ne=on.fragmentShader}else q=_.vertexShader,ne=_.fragmentShader,l.update(_),de=l.getVertexShaderID(_),fe=l.getFragmentShaderID(_);const Le=t.getRenderTarget(),X=j.isInstancedMesh===!0,Ee=j.isBatchedMesh===!0,Re=!!_.map,Fe=!!_.matcap,N=!!L,Ze=!!_.aoMap,De=!!_.lightMap,Ve=!!_.bumpMap,Ne=!!_.normalMap,Je=!!_.displacementMap,W=!!_.emissiveMap,C=!!_.metalnessMap,M=!!_.roughnessMap,B=_.anisotropy>0,Z=_.clearcoat>0,ie=_.dispersion>0,K=_.iridescence>0,ye=_.sheen>0,ue=_.transmission>0,re=B&&!!_.anisotropyMap,Ae=Z&&!!_.clearcoatMap,se=Z&&!!_.clearcoatNormalMap,he=Z&&!!_.clearcoatRoughnessMap,Pe=K&&!!_.iridescenceMap,ke=K&&!!_.iridescenceThicknessMap,Se=ye&&!!_.sheenColorMap,Xe=ye&&!!_.sheenRoughnessMap,ze=!!_.specularMap,st=!!_.specularColorMap,U=!!_.specularIntensityMap,ve=ue&&!!_.transmissionMap,Y=ue&&!!_.thicknessMap,te=!!_.gradientMap,pe=!!_.alphaMap,xe=_.alphaTest>0,Ye=!!_.alphaHash,Et=!!_.extensions;let sn=Ci;_.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(sn=t.toneMapping);const Ke={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:ne,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ee,batchingColor:Ee&&j._colorsTexture!==null,instancing:X,instancingColor:X&&j.instanceColor!==null,instancingMorph:X&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Ii,alphaToCoverage:!!_.alphaToCoverage,map:Re,matcap:Fe,envMap:N,envMapMode:N&&L.mapping,envMapCubeUVHeight:J,aoMap:Ze,lightMap:De,bumpMap:Ve,normalMap:Ne,displacementMap:p&&Je,emissiveMap:W,normalMapObjectSpace:Ne&&_.normalMapType===a1,normalMapTangentSpace:Ne&&_.normalMapType===o1,metalnessMap:C,roughnessMap:M,anisotropy:B,anisotropyMap:re,clearcoat:Z,clearcoatMap:Ae,clearcoatNormalMap:se,clearcoatRoughnessMap:he,dispersion:ie,iridescence:K,iridescenceMap:Pe,iridescenceThicknessMap:ke,sheen:ye,sheenColorMap:Se,sheenRoughnessMap:Xe,specularMap:ze,specularColorMap:st,specularIntensityMap:U,transmission:ue,transmissionMap:ve,thicknessMap:Y,gradientMap:te,opaque:_.transparent===!1&&_.blending===Ls&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:xe,alphaHash:Ye,combine:_.combine,mapUv:Re&&m(_.map.channel),aoMapUv:Ze&&m(_.aoMap.channel),lightMapUv:De&&m(_.lightMap.channel),bumpMapUv:Ve&&m(_.bumpMap.channel),normalMapUv:Ne&&m(_.normalMap.channel),displacementMapUv:Je&&m(_.displacementMap.channel),emissiveMapUv:W&&m(_.emissiveMap.channel),metalnessMapUv:C&&m(_.metalnessMap.channel),roughnessMapUv:M&&m(_.roughnessMap.channel),anisotropyMapUv:re&&m(_.anisotropyMap.channel),clearcoatMapUv:Ae&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(_.sheenRoughnessMap.channel),specularMapUv:ze&&m(_.specularMap.channel),specularColorMapUv:st&&m(_.specularColorMap.channel),specularIntensityMapUv:U&&m(_.specularIntensityMap.channel),transmissionMapUv:ve&&m(_.transmissionMap.channel),thicknessMapUv:Y&&m(_.thicknessMap.channel),alphaMapUv:pe&&m(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ne||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(Re||pe),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:sn,decodeVideoTexture:Re&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Et&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&_.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function x(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)w.push(z),w.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(v(w,_),S(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function R(_){const w=y[_.type];let z;if(w){const I=ri[w];z=k1.clone(I.uniforms)}else z=_.uniforms;return z}function b(_,w){let z;for(let I=0,j=c.length;I<j;I++){const $=c[I];if($.cacheKey===w){z=$,++z.usedTimes;break}}return z===void 0&&(z=new KT(t,w,_,s),c.push(z)),z}function T(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),_.destroy()}}function P(_){l.remove(_)}function k(){l.dispose()}return{getParameters:h,getProgramCacheKey:x,getUniforms:R,acquireProgram:b,releaseProgram:T,releaseShaderCache:P,programs:c,dispose:k}}function t2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function n2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function l0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function u0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,g,y,m){const h=o(f,d,p,g,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,y,m){const h=o(f,d,p,g,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||n2),i.length>1&&i.sort(d||l0),r.length>1&&r.sort(d||l0)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function i2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new u0,t.set(i,[o])):r>=s.length?(o=new u0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function r2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new $e};break;case"SpotLight":n={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function s2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let o2=0;function a2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function l2(t){const e=new r2,n=s2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,s=new We,o=new We;function a(u){let c=0,f=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,g=0,y=0,m=0,h=0,x=0,v=0,S=0,R=0,b=0,T=0;u.sort(a2);for(let k=0,_=u.length;k<_;k++){const w=u[k],z=w.color,I=w.intensity,j=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=z.r*I,f+=z.g*I,d+=z.b*I;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],I);T++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ee=w.shadow,L=n.get(w);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=w.shadow.matrix,x++}i.directional[p]=V,p++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(z).multiplyScalar(I),V.distance=j,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[y]=V;const ee=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,ee.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[y]=ee.matrix,w.castShadow){const L=n.get(w);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=$,S++}y++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(z).multiplyScalar(I),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=V,m++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const ee=w.shadow,L=n.get(w);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,L.shadowCameraNear=ee.camera.near,L.shadowCameraFar=ee.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=V,g++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(I),V.groundColor.copy(w.groundColor).multiplyScalar(I),i.hemi[h]=V,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=T,i.version=o2++)}function l(u,c){let f=0,d=0,p=0,g=0,y=0;const m=c.matrixWorldInverse;for(let h=0,x=u.length;h<x;h++){const v=u[h];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function c0(t){const e=new l2(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function u2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new c0(t),e.set(r,[a])):s>=o.length?(a=new c0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class c2 extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f2 extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p2(t,e,n){let i=new bx;const r=new Me,s=new Me,o=new pt,a=new c2({depthPacking:s1}),l=new f2,u={},c=n.maxTextureSize,f={[cr]:en,[en]:cr,[Dn]:Dn},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:h2,fragmentShader:d2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nx;let h=this.type;this.render=function(b,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const k=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),z=t.state;z.setBlending(or),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=h!==_i&&this.type===_i,j=h===_i&&this.type!==_i;for(let $=0,V=b.length;$<V;$++){const ee=b[$],L=ee.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const J=L.getFrameExtents();if(r.multiply(J),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/J.x),r.x=s.x*J.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/J.y),r.y=s.y*J.y,L.mapSize.y=s.y)),L.map===null||I===!0||j===!0){const ae=this.type!==_i?{minFilter:hn,magFilter:hn}:{};L.map!==null&&L.map.dispose(),L.map=new In(r.x,r.y,ae),L.map.texture.name=ee.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Q=L.getViewportCount();for(let ae=0;ae<Q;ae++){const ge=L.getViewport(ae);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),z.viewport(o),L.updateMatrices(ee,ae),i=L.getFrustum(),S(T,P,L.camera,ee,this.type)}L.isPointLightShadow!==!0&&this.type===_i&&x(L,P),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(k,_,w)};function x(b,T){const P=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new In(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,P,d,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,P,p,y,null)}function v(b,T,P,k){let _=null;const w=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=_.uuid,I=T.uuid;let j=u[z];j===void 0&&(j={},u[z]=j);let $=j[I];$===void 0&&($=_.clone(),j[I]=$,T.addEventListener("dispose",R)),_=$}if(_.visible=T.visible,_.wireframe=T.wireframe,k===_i?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:f[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const z=t.properties.get(_);z.light=P}return _}function S(b,T,P,k,_){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===_i)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const I=e.update(b),j=b.material;if(Array.isArray(j)){const $=I.groups;for(let V=0,ee=$.length;V<ee;V++){const L=$[V],J=j[L.materialIndex];if(J&&J.visible){const Q=v(b,J,k,_);b.onBeforeShadow(t,b,T,P,I,Q,L),t.renderBufferDirect(P,null,I,Q,b,L),b.onAfterShadow(t,b,T,P,I,Q,L)}}}else if(j.visible){const $=v(b,j,k,_);b.onBeforeShadow(t,b,T,P,I,$,null),t.renderBufferDirect(P,null,I,$,b,null),b.onAfterShadow(t,b,T,P,I,$,null)}}const z=b.children;for(let I=0,j=z.length;I<j;I++)S(z[I],T,P,k,_)}function R(b){b.target.removeEventListener("dispose",R);for(const P in u){const k=u[P],_=b.target.uuid;_ in k&&(k[_].dispose(),delete k[_])}}}const m2={[$f]:ia,[Kf]:Qf,[Zf]:eh,[Gs]:Jf,[ia]:$f,[Qf]:Kf,[eh]:Zf,[Jf]:Gs};function g2(t){function e(){let U=!1;const ve=new pt;let Y=null;const te=new pt(0,0,0,0);return{setMask:function(pe){Y!==pe&&!U&&(t.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){U=pe},setClear:function(pe,xe,Ye,Et,sn){sn===!0&&(pe*=Et,xe*=Et,Ye*=Et),ve.set(pe,xe,Ye,Et),te.equals(ve)===!1&&(t.clearColor(pe,xe,Ye,Et),te.copy(ve))},reset:function(){U=!1,Y=null,te.set(-1,0,0,0)}}}function n(){let U=!1,ve=!1,Y=null,te=null,pe=null;return{setReversed:function(xe){ve=xe},setTest:function(xe){xe?de(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(xe){Y!==xe&&!U&&(t.depthMask(xe),Y=xe)},setFunc:function(xe){if(ve&&(xe=m2[xe]),te!==xe){switch(xe){case $f:t.depthFunc(t.NEVER);break;case ia:t.depthFunc(t.ALWAYS);break;case Kf:t.depthFunc(t.LESS);break;case Gs:t.depthFunc(t.LEQUAL);break;case Zf:t.depthFunc(t.EQUAL);break;case Jf:t.depthFunc(t.GEQUAL);break;case Qf:t.depthFunc(t.GREATER);break;case eh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=xe}},setLocked:function(xe){U=xe},setClear:function(xe){pe!==xe&&(t.clearDepth(xe),pe=xe)},reset:function(){U=!1,Y=null,te=null,pe=null}}}function i(){let U=!1,ve=null,Y=null,te=null,pe=null,xe=null,Ye=null,Et=null,sn=null;return{setTest:function(Ke){U||(Ke?de(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(Ke){ve!==Ke&&!U&&(t.stencilMask(Ke),ve=Ke)},setFunc:function(Ke,on,hi){(Y!==Ke||te!==on||pe!==hi)&&(t.stencilFunc(Ke,on,hi),Y=Ke,te=on,pe=hi)},setOp:function(Ke,on,hi){(xe!==Ke||Ye!==on||Et!==hi)&&(t.stencilOp(Ke,on,hi),xe=Ke,Ye=on,Et=hi)},setLocked:function(Ke){U=Ke},setClear:function(Ke){sn!==Ke&&(t.clearStencil(Ke),sn=Ke)},reset:function(){U=!1,ve=null,Y=null,te=null,pe=null,xe=null,Ye=null,Et=null,sn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],p=null,g=!1,y=null,m=null,h=null,x=null,v=null,S=null,R=null,b=new $e(0,0,0),T=0,P=!1,k=null,_=null,w=null,z=null,I=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),$=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),$=V>=2);let L=null,J={};const Q=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),ge=new pt().fromArray(Q),Oe=new pt().fromArray(ae);function q(U,ve,Y,te){const pe=new Uint8Array(4),xe=t.createTexture();t.bindTexture(U,xe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<Y;Ye++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ve+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return xe}const ne={};ne[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(Gs),De(!1),Ve(_m),de(t.CULL_FACE),N(or);function de(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function fe(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Le(U,ve){return c[U]!==ve?(t.bindFramebuffer(U,ve),c[U]=ve,U===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=ve),U===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function X(U,ve){let Y=d,te=!1;if(U){Y=f.get(ve),Y===void 0&&(Y=[],f.set(ve,Y));const pe=U.textures;if(Y.length!==pe.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,Ye=pe.length;xe<Ye;xe++)Y[xe]=t.COLOR_ATTACHMENT0+xe;Y.length=pe.length,te=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,te=!0);te&&t.drawBuffers(Y)}function Ee(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const Re={[qi]:t.FUNC_ADD,[DS]:t.FUNC_SUBTRACT,[IS]:t.FUNC_REVERSE_SUBTRACT};Re[US]=t.MIN,Re[FS]=t.MAX;const Fe={[rx]:t.ZERO,[kS]:t.ONE,[sx]:t.SRC_COLOR,[Yf]:t.SRC_ALPHA,[GS]:t.SRC_ALPHA_SATURATE,[VS]:t.DST_COLOR,[zS]:t.DST_ALPHA,[OS]:t.ONE_MINUS_SRC_COLOR,[qf]:t.ONE_MINUS_SRC_ALPHA,[HS]:t.ONE_MINUS_DST_COLOR,[BS]:t.ONE_MINUS_DST_ALPHA,[WS]:t.CONSTANT_COLOR,[jS]:t.ONE_MINUS_CONSTANT_COLOR,[XS]:t.CONSTANT_ALPHA,[YS]:t.ONE_MINUS_CONSTANT_ALPHA};function N(U,ve,Y,te,pe,xe,Ye,Et,sn,Ke){if(U===or){g===!0&&(fe(t.BLEND),g=!1);return}if(g===!1&&(de(t.BLEND),g=!0),U!==ix){if(U!==y||Ke!==P){if((m!==qi||v!==qi)&&(t.blendEquation(t.FUNC_ADD),m=qi,v=qi),Ke)switch(U){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iu:t.blendFunc(t.ONE,t.ONE);break;case ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,x=null,S=null,R=null,b.set(0,0,0),T=0,y=U,P=Ke}return}pe=pe||ve,xe=xe||Y,Ye=Ye||te,(ve!==m||pe!==v)&&(t.blendEquationSeparate(Re[ve],Re[pe]),m=ve,v=pe),(Y!==h||te!==x||xe!==S||Ye!==R)&&(t.blendFuncSeparate(Fe[Y],Fe[te],Fe[xe],Fe[Ye]),h=Y,x=te,S=xe,R=Ye),(Et.equals(b)===!1||sn!==T)&&(t.blendColor(Et.r,Et.g,Et.b,sn),b.copy(Et),T=sn),y=U,P=!1}function Ze(U,ve){U.side===Dn?fe(t.CULL_FACE):de(t.CULL_FACE);let Y=U.side===en;ve&&(Y=!Y),De(Y),U.blending===Ls&&U.transparent===!1?N(or):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const te=U.stencilWrite;o.setTest(te),te&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Je(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){k!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),k=U)}function Ve(U){U!==PS?(de(t.CULL_FACE),U!==_&&(U===_m?t.cullFace(t.BACK):U===LS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),_=U}function Ne(U){U!==w&&($&&t.lineWidth(U),w=U)}function Je(U,ve,Y){U?(de(t.POLYGON_OFFSET_FILL),(z!==ve||I!==Y)&&(t.polygonOffset(ve,Y),z=ve,I=Y)):fe(t.POLYGON_OFFSET_FILL)}function W(U){U?de(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function C(U){U===void 0&&(U=t.TEXTURE0+j-1),L!==U&&(t.activeTexture(U),L=U)}function M(U,ve,Y){Y===void 0&&(L===null?Y=t.TEXTURE0+j-1:Y=L);let te=J[Y];te===void 0&&(te={type:void 0,texture:void 0},J[Y]=te),(te.type!==U||te.texture!==ve)&&(L!==Y&&(t.activeTexture(Y),L=Y),t.bindTexture(U,ve||ne[U]),te.type=U,te.texture=ve)}function B(){const U=J[L];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){ge.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ge.copy(U))}function Se(U){Oe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Oe.copy(U))}function Xe(U,ve){let Y=l.get(ve);Y===void 0&&(Y=new WeakMap,l.set(ve,Y));let te=Y.get(U);te===void 0&&(te=t.getUniformBlockIndex(ve,U.name),Y.set(U,te))}function ze(U,ve){const te=l.get(ve).get(U);a.get(ve)!==te&&(t.uniformBlockBinding(ve,te,U.__bindingPointIndex),a.set(ve,te))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,J={},c={},f=new WeakMap,d=[],p=null,g=!1,y=null,m=null,h=null,x=null,v=null,S=null,R=null,b=new $e(0,0,0),T=0,P=!1,k=null,_=null,w=null,z=null,I=null,ge.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:fe,bindFramebuffer:Le,drawBuffers:X,useProgram:Ee,setBlending:N,setMaterial:Ze,setFlipSided:De,setCullFace:Ve,setLineWidth:Ne,setPolygonOffset:Je,setScissorTest:W,activeTexture:C,bindTexture:M,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:he,texImage3D:Pe,updateUBOMapping:Xe,uniformBlockBinding:ze,texStorage2D:Ae,texStorage3D:se,texSubImage2D:K,texSubImage3D:ye,compressedTexSubImage2D:ue,compressedTexSubImage3D:re,scissor:ke,viewport:Se,reset:st}}function f0(t,e,n,i){const r=v2(i);switch(n){case fx:return t*e;case dx:return t*e;case px:return t*e*2;case zd:return t*e/r.components*r.byteLength;case Bd:return t*e/r.components*r.byteLength;case mx:return t*e*2/r.components*r.byteLength;case Vd:return t*e*2/r.components*r.byteLength;case hx:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case Hd:return t*e*4/r.components*r.byteLength;case Ml:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case El:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(t,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(t,8)*Math.max(e,8)/2;case lh:case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Al:case Th:case Ah:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gx:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bh:case Rh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function v2(t){switch(t){case Ni:case lx:return{byteLength:1,components:1};case ra:case ux:case Qs:return{byteLength:2,components:1};case kd:case Od:return{byteLength:2,components:4};case fr:case Fd:case Kn:return{byteLength:4,components:1};case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function x2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Me,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):sa("canvas")}function y(C,M,B){let Z=1;const ie=W(C);if((ie.width>B||ie.height>B)&&(Z=B/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(Z*ie.width),ye=Math.floor(Z*ie.height);f===void 0&&(f=g(K,ye));const ue=M?g(K,ye):f;return ue.width=K,ue.height=ye,ue.getContext("2d").drawImage(C,0,0,K,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+K+"x"+ye+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==hn&&C.minFilter!==Jt}function h(C){t.generateMipmap(C)}function x(C,M,B,Z,ie=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=M;if(M===t.RED&&(B===t.FLOAT&&(K=t.R32F),B===t.HALF_FLOAT&&(K=t.R16F),B===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.R8UI),B===t.UNSIGNED_SHORT&&(K=t.R16UI),B===t.UNSIGNED_INT&&(K=t.R32UI),B===t.BYTE&&(K=t.R8I),B===t.SHORT&&(K=t.R16I),B===t.INT&&(K=t.R32I)),M===t.RG&&(B===t.FLOAT&&(K=t.RG32F),B===t.HALF_FLOAT&&(K=t.RG16F),B===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RG8UI),B===t.UNSIGNED_SHORT&&(K=t.RG16UI),B===t.UNSIGNED_INT&&(K=t.RG32UI),B===t.BYTE&&(K=t.RG8I),B===t.SHORT&&(K=t.RG16I),B===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGB8UI),B===t.UNSIGNED_SHORT&&(K=t.RGB16UI),B===t.UNSIGNED_INT&&(K=t.RGB32UI),B===t.BYTE&&(K=t.RGB8I),B===t.SHORT&&(K=t.RGB16I),B===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),B===t.UNSIGNED_INT&&(K=t.RGBA32UI),B===t.BYTE&&(K=t.RGBA8I),B===t.SHORT&&(K=t.RGBA16I),B===t.INT&&(K=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),M===t.RGBA){const ye=ie?su:tt.getTransfer(Z);B===t.FLOAT&&(K=t.RGBA32F),B===t.HALF_FLOAT&&(K=t.RGBA16F),B===t.UNSIGNED_BYTE&&(K=ye===ct?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(C,M){let B;return C?M===null||M===fr||M===Xs?B=t.DEPTH24_STENCIL8:M===Kn?B=t.DEPTH32F_STENCIL8:M===ra&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fr||M===Xs?B=t.DEPTH_COMPONENT24:M===Kn?B=t.DEPTH_COMPONENT32F:M===ra&&(B=t.DEPTH_COMPONENT16),B}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&c.delete(M)}function b(C){const M=C.target;M.removeEventListener("dispose",b),k(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const B=C.source,Z=d.get(B);if(Z){const ie=Z[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(C),Object.keys(Z).length===0&&d.delete(B)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const B=C.source,Z=d.get(B);delete Z[M.__cacheKey],o.memory.textures--}function k(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ie=0;ie<M.__webglFramebuffer[Z].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=C.textures;for(let Z=0,ie=B.length;Z<ie;Z++){const K=i.get(B[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(C)}let _=0;function w(){_=0}function z(){const C=_;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),_+=1,C}function I(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function j(C,M){const B=i.get(C);if(C.isVideoTexture&&Ne(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,C,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function $(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Oe(B,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function V(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Oe(B,C,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function ee(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){q(B,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const L={[ru]:t.REPEAT,[Nr]:t.CLAMP_TO_EDGE,[ih]:t.MIRRORED_REPEAT},J={[hn]:t.NEAREST,[i1]:t.NEAREST_MIPMAP_NEAREST,[Ia]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[hc]:t.LINEAR_MIPMAP_NEAREST,[Zi]:t.LINEAR_MIPMAP_LINEAR},Q={[l1]:t.NEVER,[p1]:t.ALWAYS,[u1]:t.LESS,[vx]:t.LEQUAL,[c1]:t.EQUAL,[d1]:t.GEQUAL,[f1]:t.GREATER,[h1]:t.NOTEQUAL};function ae(C,M){if(M.type===Kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===hc||M.magFilter===Ia||M.magFilter===Zi||M.minFilter===Jt||M.minFilter===hc||M.minFilter===Ia||M.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,J[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,J[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==Ia&&M.minFilter!==Zi||M.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const Z=M.source;let ie=d.get(Z);ie===void 0&&(ie={},d.set(Z,ie));const K=I(M);if(K!==C.__cacheKey){ie[K]===void 0&&(ie[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[K].usedTimes++;const ye=ie[C.__cacheKey];ye!==void 0&&(ie[C.__cacheKey].usedTimes--,ye.usedTimes===0&&P(M)),C.__cacheKey=K,C.__webglTexture=ie[K].texture}return B}function Oe(C,M,B){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ie=ge(C,M),K=M.source;n.bindTexture(Z,C.__webglTexture,t.TEXTURE0+B);const ye=i.get(K);if(K.version!==ye.__version||ie===!0){n.activeTexture(t.TEXTURE0+B);const ue=tt.getPrimaries(tt.workingColorSpace),re=M.colorSpace===cn?null:tt.getPrimaries(M.colorSpace),Ae=M.colorSpace===cn||ue===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let se=y(M.image,!1,r.maxTextureSize);se=Je(M,se);const he=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let ke=x(M.internalFormat,he,Pe,M.colorSpace,M.isVideoTexture);ae(Z,M);let Se;const Xe=M.mipmaps,ze=M.isVideoTexture!==!0,st=ye.__version===void 0||ie===!0,U=K.dataReady,ve=S(M,se);if(M.isDepthTexture)ke=v(M.format===Ys,M.type),st&&(ze?n.texStorage2D(t.TEXTURE_2D,1,ke,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,ke,se.width,se.height,0,he,Pe,null));else if(M.isDataTexture)if(Xe.length>0){ze&&st&&n.texStorage2D(t.TEXTURE_2D,ve,ke,Xe[0].width,Xe[0].height);for(let Y=0,te=Xe.length;Y<te;Y++)Se=Xe[Y],ze?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Se.width,Se.height,he,Pe,Se.data):n.texImage2D(t.TEXTURE_2D,Y,ke,Se.width,Se.height,0,he,Pe,Se.data);M.generateMipmaps=!1}else ze?(st&&n.texStorage2D(t.TEXTURE_2D,ve,ke,se.width,se.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,he,Pe,se.data)):n.texImage2D(t.TEXTURE_2D,0,ke,se.width,se.height,0,he,Pe,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,ke,Xe[0].width,Xe[0].height,se.depth);for(let Y=0,te=Xe.length;Y<te;Y++)if(Se=Xe[Y],M.format!==Zn)if(he!==null)if(ze){if(U)if(M.layerUpdates.size>0){const pe=f0(Se.width,Se.height,M.format,M.type);for(const xe of M.layerUpdates){const Ye=Se.data.subarray(xe*pe/Se.data.BYTES_PER_ELEMENT,(xe+1)*pe/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,xe,Se.width,Se.height,1,he,Ye,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Se.width,Se.height,se.depth,he,Se.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ke,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Se.width,Se.height,se.depth,he,Pe,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ke,Se.width,Se.height,se.depth,0,he,Pe,Se.data)}else{ze&&st&&n.texStorage2D(t.TEXTURE_2D,ve,ke,Xe[0].width,Xe[0].height);for(let Y=0,te=Xe.length;Y<te;Y++)Se=Xe[Y],M.format!==Zn?he!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,Se.width,Se.height,he,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ke,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Se.width,Se.height,he,Pe,Se.data):n.texImage2D(t.TEXTURE_2D,Y,ke,Se.width,Se.height,0,he,Pe,Se.data)}else if(M.isDataArrayTexture)if(ze){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,ke,se.width,se.height,se.depth),U)if(M.layerUpdates.size>0){const Y=f0(se.width,se.height,M.format,M.type);for(const te of M.layerUpdates){const pe=se.data.subarray(te*Y/se.data.BYTES_PER_ELEMENT,(te+1)*Y/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,he,Pe,pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,Pe,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,he,Pe,se.data);else if(M.isData3DTexture)ze?(st&&n.texStorage3D(t.TEXTURE_3D,ve,ke,se.width,se.height,se.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,Pe,se.data)):n.texImage3D(t.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,he,Pe,se.data);else if(M.isFramebufferTexture){if(st)if(ze)n.texStorage2D(t.TEXTURE_2D,ve,ke,se.width,se.height);else{let Y=se.width,te=se.height;for(let pe=0;pe<ve;pe++)n.texImage2D(t.TEXTURE_2D,pe,ke,Y,te,0,he,Pe,null),Y>>=1,te>>=1}}else if(Xe.length>0){if(ze&&st){const Y=W(Xe[0]);n.texStorage2D(t.TEXTURE_2D,ve,ke,Y.width,Y.height)}for(let Y=0,te=Xe.length;Y<te;Y++)Se=Xe[Y],ze?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,he,Pe,Se):n.texImage2D(t.TEXTURE_2D,Y,ke,he,Pe,Se);M.generateMipmaps=!1}else if(ze){if(st){const Y=W(se);n.texStorage2D(t.TEXTURE_2D,ve,ke,Y.width,Y.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Pe,se)}else n.texImage2D(t.TEXTURE_2D,0,ke,he,Pe,se);m(M)&&h(Z),ye.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function q(C,M,B){if(M.image.length!==6)return;const Z=ge(C,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const K=i.get(ie);if(ie.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+B);const ye=tt.getPrimaries(tt.workingColorSpace),ue=M.colorSpace===cn?null:tt.getPrimaries(M.colorSpace),re=M.colorSpace===cn||ye===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!Ae&&!se?he[te]=y(M.image[te],!0,r.maxCubemapSize):he[te]=se?M.image[te].image:M.image[te],he[te]=Je(M,he[te]);const Pe=he[0],ke=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),Xe=x(M.internalFormat,ke,Se,M.colorSpace),ze=M.isVideoTexture!==!0,st=K.__version===void 0||Z===!0,U=ie.dataReady;let ve=S(M,Pe);ae(t.TEXTURE_CUBE_MAP,M);let Y;if(Ae){ze&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Xe,Pe.width,Pe.height);for(let te=0;te<6;te++){Y=he[te].mipmaps;for(let pe=0;pe<Y.length;pe++){const xe=Y[pe];M.format!==Zn?ke!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,xe.width,xe.height,ke,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Xe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,xe.width,xe.height,ke,Se,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Xe,xe.width,xe.height,0,ke,Se,xe.data)}}}else{if(Y=M.mipmaps,ze&&st){Y.length>0&&ve++;const te=W(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Xe,te.width,te.height)}for(let te=0;te<6;te++)if(se){ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,ke,Se,he[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,he[te].width,he[te].height,0,ke,Se,he[te].data);for(let pe=0;pe<Y.length;pe++){const Ye=Y[pe].image[te].image;ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ye.width,Ye.height,ke,Se,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Xe,Ye.width,Ye.height,0,ke,Se,Ye.data)}}else{ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ke,Se,he[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,ke,Se,he[te]);for(let pe=0;pe<Y.length;pe++){const xe=Y[pe];ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,ke,Se,xe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Xe,ke,Se,xe.image[te])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),K.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,B,Z,ie,K){const ye=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),re=x(B.internalFormat,ye,ue,B.colorSpace);if(!i.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>K),he=Math.max(1,M.height>>K);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,K,re,se,he,M.depth,0,ye,ue,null):n.texImage2D(ie,K,re,se,he,0,ye,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ie,i.get(B).__webglTexture,0,De(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ie,i.get(B).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(C,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const Z=M.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,K=v(M.stencilBuffer,ie),ye=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=De(M);Ve(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,K,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,C)}else{const Z=M.textures;for(let ie=0;ie<Z.length;ie++){const K=Z[ie],ye=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),re=x(K.internalFormat,ye,ue,K.colorSpace),Ae=De(M);B&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,re,M.width,M.height):Ve(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,ie=De(M);if(M.depthTexture.format===Ns)Ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Ys)Ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Le(C){const M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=Z}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");fe(M.__webglFramebuffer,C)}else if(B){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),de(M.__webglDepthbuffer[Z],C,!1);else{const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function X(C,M,B){const Z=i.get(C);M!==void 0&&ne(Z.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Le(C)}function Ee(C){const M=C.texture,B=i.get(C),Z=i.get(M);C.addEventListener("dispose",b);const ie=C.textures,K=C.isWebGLCubeRenderTarget===!0,ye=ie.length>1;if(ye||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let re=0;re<M.mipmaps.length;re++)B.__webglFramebuffer[ue][re]=t.createFramebuffer()}else B.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)B.__webglFramebuffer[ue]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ye)for(let ue=0,re=ie.length;ue<re;ue++){const Ae=i.get(ie[ue]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ve(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const re=ie[ue];B.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const Ae=s.convert(re.format,re.colorSpace),se=s.convert(re.type),he=x(re.internalFormat,Ae,se,re.colorSpace,C.isXRRenderTarget===!0),Pe=De(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,he,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),de(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)ne(B.__webglFramebuffer[ue][re],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,re);else ne(B.__webglFramebuffer[ue],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let ue=0,re=ie.length;ue<re;ue++){const Ae=ie[ue],se=i.get(Ae);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ae(t.TEXTURE_2D,Ae),ne(B.__webglFramebuffer,C,Ae,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Ae)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Z.__webglTexture),ae(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)ne(B.__webglFramebuffer[re],C,M,t.COLOR_ATTACHMENT0,ue,re);else ne(B.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,ue,0);m(M)&&h(ue),n.unbindTexture()}C.depthBuffer&&Le(C)}function Re(C){const M=C.textures;for(let B=0,Z=M.length;B<Z;B++){const ie=M[B];if(m(ie)){const K=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(ie).__webglTexture;n.bindTexture(K,ye),h(K),n.unbindTexture()}}}const Fe=[],N=[];function Ze(C){if(C.samples>0){if(Ve(C)===!1){const M=C.textures,B=C.width,Z=C.height;let ie=t.COLOR_BUFFER_BIT;const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(C),ue=M.length>1;if(ue)for(let re=0;re<M.length;re++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let re=0;re<M.length;re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[re]);const Ae=i.get(M[re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,B,Z,0,0,B,Z,ie,t.NEAREST),l===!0&&(Fe.length=0,N.length=0,Fe.push(t.COLOR_ATTACHMENT0+re),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Fe.push(K),N.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let re=0;re<M.length;re++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,ye.__webglColorRenderbuffer[re]);const Ae=i.get(M[re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function De(C){return Math.min(r.maxSamples,C.samples)}function Ve(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ne(C){const M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function Je(C,M){const B=C.colorSpace,Z=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Ii&&B!==cn&&(tt.getTransfer(B)===ct?(Z!==Zn||ie!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function W(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=w,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=X,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ve}function _2(t,e){function n(i,r=cn){let s;const o=tt.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===kd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Od)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===lx)return t.BYTE;if(i===ux)return t.SHORT;if(i===ra)return t.UNSIGNED_SHORT;if(i===Fd)return t.INT;if(i===fr)return t.UNSIGNED_INT;if(i===Kn)return t.FLOAT;if(i===Qs)return t.HALF_FLOAT;if(i===fx)return t.ALPHA;if(i===hx)return t.RGB;if(i===Zn)return t.RGBA;if(i===dx)return t.LUMINANCE;if(i===px)return t.LUMINANCE_ALPHA;if(i===Ns)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===zd)return t.RED;if(i===Bd)return t.RED_INTEGER;if(i===mx)return t.RG;if(i===Vd)return t.RG_INTEGER;if(i===Hd)return t.RGBA_INTEGER;if(i===Ml||i===wl||i===El||i===Tl)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===uh||i===ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===uh)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ch)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fh||i===hh||i===dh||i===ph||i===mh||i===gh||i===vh||i===xh||i===_h||i===yh||i===Sh||i===Mh||i===wh||i===Eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ph)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_h)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===Th||i===Ah)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gx||i===Ch||i===bh||i===Rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class y2 extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S2={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const M2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class E2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new wt({vertexShader:M2,fragmentShader:w2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rt(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T2 extends eo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,g=null;const y=new E2,m=n.getContextAttributes();let h=null,x=null;const v=[],S=[],R=new Me;let b=null;const T=new Mn;T.layers.enable(1),T.viewport=new pt;const P=new Mn;P.layers.enable(2),P.viewport=new pt;const k=[T,P],_=new y2;_.layers.enable(1),_.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=v[q];return ne===void 0&&(ne=new Hc,v[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=v[q];return ne===void 0&&(ne=new Hc,v[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=v[q];return ne===void 0&&(ne=new Hc,v[q]=ne),ne.getHandSpace()};function I(q){const ne=S.indexOf(q.inputSource);if(ne===-1)return;const de=v[ne];de!==void 0&&(de.update(q.inputSource,q.frame,u||o),de.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",$);for(let q=0;q<v.length;q++){const ne=S[q];ne!==null&&(S[q]=null,v[q].disconnect(ne))}w=null,z=null,y.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,x=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",j),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new In(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,fe=null;m.depth&&(fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Ys:Ns,de=m.stencil?Xs:fr);const Le={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new In(d.textureWidth,d.textureHeight,{format:Zn,type:Ni,depthTexture:new Yd(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(q){for(let ne=0;ne<q.removed.length;ne++){const de=q.removed[ne],fe=S.indexOf(de);fe>=0&&(S[fe]=null,v[fe].disconnect(de))}for(let ne=0;ne<q.added.length;ne++){const de=q.added[ne];let fe=S.indexOf(de);if(fe===-1){for(let X=0;X<v.length;X++)if(X>=S.length){S.push(de),fe=X;break}else if(S[X]===null){S[X]=de,fe=X;break}if(fe===-1)break}const Le=v[fe];Le&&Le.connect(de)}}const V=new D,ee=new D;function L(q,ne,de){V.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(de.matrixWorld);const fe=V.distanceTo(ee),Le=ne.projectionMatrix.elements,X=de.projectionMatrix.elements,Ee=Le[14]/(Le[10]-1),Re=Le[14]/(Le[10]+1),Fe=(Le[9]+1)/Le[5],N=(Le[9]-1)/Le[5],Ze=(Le[8]-1)/Le[0],De=(X[8]+1)/X[0],Ve=Ee*Ze,Ne=Ee*De,Je=fe/(-Ze+De),W=Je*-Ze;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(W),q.translateZ(Je),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Le[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const C=Ee+Je,M=Re+Je,B=Ve-W,Z=Ne+(fe-W),ie=Fe*Re/M*C,K=N*Re/M*C;q.projectionMatrix.makePerspective(B,Z,ie,K,C,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ne=q.near,de=q.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(de=y.depthFar)),_.near=P.near=T.near=ne,_.far=P.far=T.far=de,(w!==_.near||z!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,z=_.far);const fe=q.parent,Le=_.cameras;J(_,fe);for(let X=0;X<Le.length;X++)J(Le[X],fe);Le.length===2?L(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),Q(q,_,fe)};function Q(q,ne,de){de===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ph*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let ae=null;function ge(q,ne){if(c=ne.getViewerPose(u||o),g=ne,c!==null){const de=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let fe=!1;de.length!==_.cameras.length&&(_.cameras.length=0,fe=!0);for(let X=0;X<de.length;X++){const Ee=de[X];let Re=null;if(p!==null)Re=p.getViewport(Ee);else{const N=f.getViewSubImage(d,Ee);Re=N.viewport,X===0&&(e.setRenderTargetTextures(x,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(x))}let Fe=k[X];Fe===void 0&&(Fe=new Mn,Fe.layers.enable(X),Fe.viewport=new pt,k[X]=Fe),Fe.matrix.fromArray(Ee.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ee.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Re.x,Re.y,Re.width,Re.height),X===0&&(_.matrix.copy(Fe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),fe===!0&&_.cameras.push(Fe)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const X=f.getDepthInformation(de[0]);X&&X.isValid&&X.texture&&y.init(e,X,r.renderState)}}for(let de=0;de<v.length;de++){const fe=S[de],Le=v[de];fe!==null&&Le!==void 0&&Le.update(fe,ne,u||o)}ae&&ae(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Oe=new Rx;Oe.setAnimationLoop(ge),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const Mr=new ci,A2=new We;function C2(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Tx(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===en&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===en&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,Mr.copy(S),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(A2.makeRotationFromEuler(Mr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function b2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(g(x),S=c(x),r[x.id]=S,x.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(x,R);const b=e.render.frame;s[x.id]!==b&&(d(x),s[x.id]=b)}function c(x){const v=f();x.__bindingPointIndex=v;const S=t.createBuffer(),R=x.__size,b=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],S=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,T=S.length;b<T;b++){const P=Array.isArray(S[b])?S[b]:[S[b]];for(let k=0,_=P.length;k<_;k++){const w=P[k];if(p(w,b,k,R)===!0){const z=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let j=0;for(let $=0;$<I.length;$++){const V=I[$],ee=y(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,z+j,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,S,R){const b=x.value,T=v+"_"+S;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{const P=R[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(x){const v=x.uniforms;let S=0;const R=16;for(let T=0,P=v.length;T<P;T++){const k=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,w=k.length;_<w;_++){const z=k[_],I=Array.isArray(z.value)?z.value:[z.value];for(let j=0,$=I.length;j<$;j++){const V=I[j],ee=y(V),L=S%R,J=L%ee.boundary,Q=L+J;S+=J,Q!==0&&R-Q<ee.storage&&(S+=R-Q),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=ee.storage}}}const b=S%R;return b>0&&(S+=R-b),x.__size=S,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class R2{constructor(e={}){const{canvas:n=g1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const h=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Ci,this.toneMappingExposure=1;const v=this;let S=!1,R=0,b=0,T=null,P=-1,k=null;const _=new pt,w=new pt;let z=null;const I=new $e(0);let j=0,$=n.width,V=n.height,ee=1,L=null,J=null;const Q=new pt(0,0,$,V),ae=new pt(0,0,$,V);let ge=!1;const Oe=new bx;let q=!1,ne=!1;const de=new We,fe=new We,Le=new D,X=new pt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Fe(){return T===null?ee:1}let N=i;function Ze(A,F){return n.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ud}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",xe,!1),N===null){const F="webgl2";if(N=Ze(F,A),N===null)throw Ze(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let De,Ve,Ne,Je,W,C,M,B,Z,ie,K,ye,ue,re,Ae,se,he,Pe,ke,Se,Xe,ze,st,U;function ve(){De=new IE(N),De.init(),ze=new _2(N,De),Ve=new bE(N,De,e,ze),Ne=new g2(N),Ve.reverseDepthBuffer&&Ne.buffers.depth.setReversed(!0),Je=new kE(N),W=new t2,C=new x2(N,De,Ne,W,Ve,ze,Je),M=new PE(v),B=new DE(v),Z=new W1(N),st=new AE(N,Z),ie=new UE(N,Z,Je,st),K=new zE(N,ie,Z,Je),ke=new OE(N,Ve,C),se=new RE(W),ye=new e2(v,M,B,De,Ve,st,se),ue=new C2(v,W),re=new i2,Ae=new u2(De),Pe=new TE(v,M,B,Ne,K,d,l),he=new p2(v,K,Ve),U=new b2(N,Je,Ve,Ne),Se=new CE(N,De,Je),Xe=new FE(N,De,Je),Je.programs=ye.programs,v.capabilities=Ve,v.extensions=De,v.properties=W,v.renderLists=re,v.shadowMap=he,v.state=Ne,v.info=Je}ve();const Y=new T2(v,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize($,V,!1))},this.getSize=function(A){return A.set($,V)},this.setSize=function(A,F,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,V=F,n.width=Math.floor(A*ee),n.height=Math.floor(F*ee),H===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set($*ee,V*ee).floor()},this.setDrawingBufferSize=function(A,F,H){$=A,V=F,ee=H,n.width=Math.floor(A*H),n.height=Math.floor(F*H),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(_)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,F,H,G){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,F,H,G),Ne.viewport(_.copy(Q).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,F,H,G){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,F,H,G),Ne.scissor(w.copy(ae).multiplyScalar(ee).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){Ne.setScissorTest(ge=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(A=!0,F=!0,H=!0){let G=0;if(A){let O=!1;if(T!==null){const le=T.texture.format;O=le===Hd||le===Vd||le===Bd}if(O){const le=T.texture.type,me=le===Ni||le===fr||le===ra||le===Xs||le===kd||le===Od,we=Pe.getClearColor(),Te=Pe.getClearAlpha(),Ie=we.r,Ue=we.g,Ce=we.b;me?(p[0]=Ie,p[1]=Ue,p[2]=Ce,p[3]=Te,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Ie,g[1]=Ue,g[2]=Ce,g[3]=Te,N.clearBufferiv(N.COLOR,0,g))}else G|=N.COLOR_BUFFER_BIT}F&&(G|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),re.dispose(),Ae.dispose(),W.dispose(),M.dispose(),B.dispose(),K.dispose(),st.dispose(),U.dispose(),ye.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",np),Y.removeEventListener("sessionend",ip),gr.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Je.autoReset,F=he.enabled,H=he.autoUpdate,G=he.needsUpdate,O=he.type;ve(),Je.autoReset=A,he.enabled=F,he.autoUpdate=H,he.needsUpdate=G,he.type=O}function xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const F=A.target;F.removeEventListener("dispose",Ye),Et(F)}function Et(A){sn(A),W.remove(A)}function sn(A){const F=W.get(A).programs;F!==void 0&&(F.forEach(function(H){ye.releaseProgram(H)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,H,G,O,le){F===null&&(F=Ee);const me=O.isMesh&&O.matrixWorld.determinant()<0,we=Jx(A,F,H,G,O);Ne.setMaterial(G,me);let Te=H.index,Ie=1;if(G.wireframe===!0){if(Te=ie.getWireframeAttribute(H),Te===void 0)return;Ie=2}const Ue=H.drawRange,Ce=H.attributes.position;let nt=Ue.start*Ie,lt=(Ue.start+Ue.count)*Ie;le!==null&&(nt=Math.max(nt,le.start*Ie),lt=Math.min(lt,(le.start+le.count)*Ie)),Te!==null?(nt=Math.max(nt,0),lt=Math.min(lt,Te.count)):Ce!=null&&(nt=Math.max(nt,0),lt=Math.min(lt,Ce.count));const _t=lt-nt;if(_t<0||_t===1/0)return;st.setup(O,G,we,H,Te);let gn,Qe=Se;if(Te!==null&&(gn=Z.get(Te),Qe=Xe,Qe.setIndex(gn)),O.isMesh)G.wireframe===!0?(Ne.setLineWidth(G.wireframeLinewidth*Fe()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(O.isLine){let be=G.linewidth;be===void 0&&(be=1),Ne.setLineWidth(be*Fe()),O.isLineSegments?Qe.setMode(N.LINES):O.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else O.isPoints?Qe.setMode(N.POINTS):O.isSprite&&Qe.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const be=O._multiDrawStarts,It=O._multiDrawCounts,et=O._multiDrawCount,zn=Te?Z.get(Te).bytesPerElement:1,Yr=W.get(G).currentProgram.getUniforms();for(let vn=0;vn<et;vn++)Yr.setValue(N,"_gl_DrawID",vn),Qe.render(be[vn]/zn,It[vn])}else if(O.isInstancedMesh)Qe.renderInstances(nt,_t,O.count);else if(H.isInstancedBufferGeometry){const be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,It=Math.min(H.instanceCount,be);Qe.renderInstances(nt,_t,It)}else Qe.render(nt,_t)};function Ke(A,F,H){A.transparent===!0&&A.side===Dn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,ga(A,F,H),A.side=cr,A.needsUpdate=!0,ga(A,F,H),A.side=Dn):ga(A,F,H)}this.compile=function(A,F,H=null){H===null&&(H=A),m=Ae.get(H),m.init(F),x.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),A!==H&&A.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const G=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const le=O.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const we=le[me];Ke(we,H,O),G.add(we)}else Ke(le,H,O),G.add(le)}),x.pop(),m=null,G},this.compileAsync=function(A,F,H=null){const G=this.compile(A,F,H);return new Promise(O=>{function le(){if(G.forEach(function(me){W.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){O(A);return}setTimeout(le,10)}De.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let on=null;function hi(A){on&&on(A)}function np(){gr.stop()}function ip(){gr.start()}const gr=new Rx;gr.setAnimationLoop(hi),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(A){on=A,Y.setAnimationLoop(A),A===null?gr.stop():gr.start()},Y.addEventListener("sessionstart",np),Y.addEventListener("sessionend",ip),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,T),m=Ae.get(A,x.length),m.init(F),x.push(m),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(fe),ne=this.localClippingEnabled,q=se.init(this.clippingPlanes,ne),y=re.get(A,h.length),y.init(),h.push(y),Y.enabled===!0&&Y.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&Fu(le,F,-1/0,v.sortObjects)}Fu(A,F,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,J),Re=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Re&&Pe.addToRenderList(y,A),this.info.render.frame++,q===!0&&se.beginShadows();const H=m.state.shadowsArray;he.render(H,A,F),q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,O=y.transmissive;if(m.setupLights(),F.isArrayCamera){const le=F.cameras;if(O.length>0)for(let me=0,we=le.length;me<we;me++){const Te=le[me];sp(G,O,A,Te)}Re&&Pe.render(A);for(let me=0,we=le.length;me<we;me++){const Te=le[me];rp(y,A,Te,Te.viewport)}}else O.length>0&&sp(G,O,A,F),Re&&Pe.render(A),rp(y,A,F);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,F),st.resetDefaultState(),P=-1,k=null,x.pop(),x.length>0?(m=x[x.length-1],q===!0&&se.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Fu(A,F,H,G){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){G&&X.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const me=K.update(A),we=A.material;we.visible&&y.push(A,me,we,H,X.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const me=K.update(A),we=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),X.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),X.copy(me.boundingSphere.center)),X.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(we)){const Te=me.groups;for(let Ie=0,Ue=Te.length;Ie<Ue;Ie++){const Ce=Te[Ie],nt=we[Ce.materialIndex];nt&&nt.visible&&y.push(A,me,nt,H,X.z,Ce)}}else we.visible&&y.push(A,me,we,H,X.z,null)}}const le=A.children;for(let me=0,we=le.length;me<we;me++)Fu(le[me],F,H,G)}function rp(A,F,H,G){const O=A.opaque,le=A.transmissive,me=A.transparent;m.setupLightsView(H),q===!0&&se.setGlobalState(v.clippingPlanes,H),G&&Ne.viewport(_.copy(G)),O.length>0&&ma(O,F,H),le.length>0&&ma(le,F,H),me.length>0&&ma(me,F,H),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function sp(A,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new In(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Qs:Ni,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const le=m.state.transmissionRenderTarget[G.id],me=G.viewport||_;le.setSize(me.z,me.w);const we=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(I),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),Re&&Pe.render(H);const Te=v.toneMapping;v.toneMapping=Ci;const Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),q===!0&&se.setGlobalState(v.clippingPlanes,G),ma(A,H,G),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ce=0,nt=F.length;Ce<nt;Ce++){const lt=F[Ce],_t=lt.object,gn=lt.geometry,Qe=lt.material,be=lt.group;if(Qe.side===Dn&&_t.layers.test(G.layers)){const It=Qe.side;Qe.side=en,Qe.needsUpdate=!0,op(_t,H,G,gn,Qe,be),Qe.side=It,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le))}v.setRenderTarget(we),v.setClearColor(I,j),Ie!==void 0&&(G.viewport=Ie),v.toneMapping=Te}function ma(A,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,le=A.length;O<le;O++){const me=A[O],we=me.object,Te=me.geometry,Ie=G===null?me.material:G,Ue=me.group;we.layers.test(H.layers)&&op(we,F,H,Te,Ie,Ue)}}function op(A,F,H,G,O,le){A.onBeforeRender(v,F,H,G,O,le),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(v,F,H,G,A,le),O.transparent===!0&&O.side===Dn&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,v.renderBufferDirect(H,F,G,O,A,le),O.side=cr,O.needsUpdate=!0,v.renderBufferDirect(H,F,G,O,A,le),O.side=Dn):v.renderBufferDirect(H,F,G,O,A,le),A.onAfterRender(v,F,H,G,O,le)}function ga(A,F,H){F.isScene!==!0&&(F=Ee);const G=W.get(A),O=m.state.lights,le=m.state.shadowsArray,me=O.state.version,we=ye.getParameters(A,O.state,le,F,H),Te=ye.getProgramCacheKey(we);let Ie=G.programs;G.environment=A.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(A.isMeshStandardMaterial?B:M).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",Ye),Ie=new Map,G.programs=Ie);let Ue=Ie.get(Te);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===me)return lp(A,we),Ue}else we.uniforms=ye.getUniforms(A),A.onBeforeCompile(we,v),Ue=ye.acquireProgram(we,Te),Ie.set(Te,Ue),G.uniforms=we.uniforms;const Ce=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=se.uniform),lp(A,we),G.needsLights=e_(A),G.lightsStateVersion=me,G.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function ap(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=bl.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function lp(A,F){const H=W.get(A);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Jx(A,F,H,G,O){F.isScene!==!0&&(F=Ee),C.resetTextureUnits();const le=F.fog,me=G.isMeshStandardMaterial?F.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ii,Te=(G.isMeshStandardMaterial?B:M).get(G.envMap||me),Ie=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color;let _t=Ci;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_t=v.toneMapping);const gn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=gn!==void 0?gn.length:0,be=W.get(G),It=m.state.lights;if(q===!0&&(ne===!0||A!==k)){const bn=A===k&&G.id===P;se.setState(G,A,bn)}let et=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==It.state.version||be.outputColorSpace!==we||O.isBatchedMesh&&be.batching===!1||!O.isBatchedMesh&&be.batching===!0||O.isBatchedMesh&&be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&be.instancing===!1||!O.isInstancedMesh&&be.instancing===!0||O.isSkinnedMesh&&be.skinning===!1||!O.isSkinnedMesh&&be.skinning===!0||O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null||be.envMap!==Te||G.fog===!0&&be.fog!==le||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==se.numPlanes||be.numIntersection!==se.numIntersection)||be.vertexAlphas!==Ie||be.vertexTangents!==Ue||be.morphTargets!==Ce||be.morphNormals!==nt||be.morphColors!==lt||be.toneMapping!==_t||be.morphTargetsCount!==Qe)&&(et=!0):(et=!0,be.__version=G.version);let zn=be.currentProgram;et===!0&&(zn=ga(G,F,O));let Yr=!1,vn=!1,ku=!1;const St=zn.getUniforms(),Ui=be.uniforms;if(Ne.useProgram(zn.program)&&(Yr=!0,vn=!0,ku=!0),G.id!==P&&(P=G.id,vn=!0),Yr||k!==A){Ve.reverseDepthBuffer?(de.copy(A.projectionMatrix),x1(de),_1(de),St.setValue(N,"projectionMatrix",de)):St.setValue(N,"projectionMatrix",A.projectionMatrix),St.setValue(N,"viewMatrix",A.matrixWorldInverse);const bn=St.map.cameraPosition;bn!==void 0&&bn.setValue(N,Le.setFromMatrixPosition(A.matrixWorld)),Ve.logarithmicDepthBuffer&&St.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&St.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,vn=!0,ku=!0)}if(O.isSkinnedMesh){St.setOptional(N,O,"bindMatrix"),St.setOptional(N,O,"bindMatrixInverse");const bn=O.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),St.setValue(N,"boneTexture",bn.boneTexture,C))}O.isBatchedMesh&&(St.setOptional(N,O,"batchingTexture"),St.setValue(N,"batchingTexture",O._matricesTexture,C),St.setOptional(N,O,"batchingIdTexture"),St.setValue(N,"batchingIdTexture",O._indirectTexture,C),St.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&St.setValue(N,"batchingColorTexture",O._colorsTexture,C));const Ou=H.morphAttributes;if((Ou.position!==void 0||Ou.normal!==void 0||Ou.color!==void 0)&&ke.update(O,H,zn),(vn||be.receiveShadow!==O.receiveShadow)&&(be.receiveShadow=O.receiveShadow,St.setValue(N,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ui.envMap.value=Te,Ui.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Ui.envMapIntensity.value=F.environmentIntensity),vn&&(St.setValue(N,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&Qx(Ui,ku),le&&G.fog===!0&&ue.refreshFogUniforms(Ui,le),ue.refreshMaterialUniforms(Ui,G,ee,V,m.state.transmissionRenderTarget[A.id]),bl.upload(N,ap(be),Ui,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(bl.upload(N,ap(be),Ui,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&St.setValue(N,"center",O.center),St.setValue(N,"modelViewMatrix",O.modelViewMatrix),St.setValue(N,"normalMatrix",O.normalMatrix),St.setValue(N,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const bn=G.uniformsGroups;for(let zu=0,t_=bn.length;zu<t_;zu++){const up=bn[zu];U.update(up,zn),U.bind(up,zn)}}return zn}function Qx(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function e_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,F,H){W.get(A.texture).__webglTexture=F,W.get(A.depthTexture).__webglTexture=H;const G=W.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const H=W.get(A);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,H=0){T=A,R=F,b=H;let G=!0,O=null,le=!1,me=!1;if(A){const Te=W.get(A);if(Te.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(Te.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Te.__hasExternalTextures)C.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ce=A.depthTexture;if(Te.__boundDepthTexture!==Ce){if(Ce!==null&&W.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);const Ue=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?O=Ue[F][H]:O=Ue[F],le=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?O=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[H]:O=Ue,_.copy(A.viewport),w.copy(A.scissor),z=A.scissorTest}else _.copy(Q).multiplyScalar(ee).floor(),w.copy(ae).multiplyScalar(ee).floor(),z=ge;if(Ne.bindFramebuffer(N.FRAMEBUFFER,O)&&G&&Ne.drawBuffers(A,O),Ne.viewport(_),Ne.scissor(w),Ne.setScissorTest(z),le){const Te=W.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,H)}else if(me){const Te=W.get(A.texture),Ie=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,H||0,Ie)}P=-1},this.readRenderTargetPixels=function(A,F,H,G,O,le,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){Ne.bindFramebuffer(N.FRAMEBUFFER,we);try{const Te=A.texture,Ie=Te.format,Ue=Te.type;if(!Ve.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-G&&H>=0&&H<=A.height-O&&N.readPixels(F,H,G,O,ze.convert(Ie),ze.convert(Ue),le)}finally{const Te=T!==null?W.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(A,F,H,G,O,le,me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){const Te=A.texture,Ie=Te.format,Ue=Te.type;if(!Ve.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-G&&H>=0&&H<=A.height-O){Ne.bindFramebuffer(N.FRAMEBUFFER,we);const Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,le.byteLength,N.STREAM_READ),N.readPixels(F,H,G,O,ze.convert(Ie),ze.convert(Ue),0);const nt=T!==null?W.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(N.FRAMEBUFFER,nt);const lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await v1(N,lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,le),N.deleteBuffer(Ce),N.deleteSync(lt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,H=0){A.isTexture!==!0&&(Cl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(A.image.width*G),le=Math.floor(A.image.height*G),me=F!==null?F.x:0,we=F!==null?F.y:0;C.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,me,we,O,le),Ne.unbindTexture()},this.copyTextureToTexture=function(A,F,H=null,G=null,O=0){A.isTexture!==!0&&(Cl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],F=arguments[2],O=arguments[3]||0,H=null);let le,me,we,Te,Ie,Ue;H!==null?(le=H.max.x-H.min.x,me=H.max.y-H.min.y,we=H.min.x,Te=H.min.y):(le=A.image.width,me=A.image.height,we=0,Te=0),G!==null?(Ie=G.x,Ue=G.y):(Ie=0,Ue=0);const Ce=ze.convert(F.format),nt=ze.convert(F.type);C.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const lt=N.getParameter(N.UNPACK_ROW_LENGTH),_t=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gn=N.getParameter(N.UNPACK_SKIP_PIXELS),Qe=N.getParameter(N.UNPACK_SKIP_ROWS),be=N.getParameter(N.UNPACK_SKIP_IMAGES),It=A.isCompressedTexture?A.mipmaps[O]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,It.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,It.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,Te),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,Ie,Ue,le,me,Ce,nt,It.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,Ie,Ue,It.width,It.height,Ce,It.data):N.texSubImage2D(N.TEXTURE_2D,O,Ie,Ue,le,me,Ce,nt,It),N.pixelStorei(N.UNPACK_ROW_LENGTH,lt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,be),O===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(A,F,H=null,G=null,O=0){A.isTexture!==!0&&(Cl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,A=arguments[2],F=arguments[3],O=arguments[4]||0);let le,me,we,Te,Ie,Ue,Ce,nt,lt;const _t=A.isCompressedTexture?A.mipmaps[O]:A.image;H!==null?(le=H.max.x-H.min.x,me=H.max.y-H.min.y,we=H.max.z-H.min.z,Te=H.min.x,Ie=H.min.y,Ue=H.min.z):(le=_t.width,me=_t.height,we=_t.depth,Te=0,Ie=0,Ue=0),G!==null?(Ce=G.x,nt=G.y,lt=G.z):(Ce=0,nt=0,lt=0);const gn=ze.convert(F.format),Qe=ze.convert(F.type);let be;if(F.isData3DTexture)C.setTexture3D(F,0),be=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),be=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const It=N.getParameter(N.UNPACK_ROW_LENGTH),et=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zn=N.getParameter(N.UNPACK_SKIP_PIXELS),Yr=N.getParameter(N.UNPACK_SKIP_ROWS),vn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ue),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(be,O,Ce,nt,lt,le,me,we,gn,Qe,_t.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(be,O,Ce,nt,lt,le,me,we,gn,_t.data):N.texSubImage3D(be,O,Ce,nt,lt,le,me,we,gn,Qe,_t),N.pixelStorei(N.UNPACK_ROW_LENGTH,It),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Yr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,vn),O===0&&F.generateMipmaps&&N.generateMipmap(be),Ne.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Ne.unbindTexture()},this.resetState=function(){R=0,b=0,T=null,Ne.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gd?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Nu?"display-p3":"srgb"}}class Gc extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class P2 extends Ot{constructor(e=null,n=1,i=1,r,s,o,a,l,u=hn,c=hn,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class h0 extends Ft{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new We,d0=new We,tl=[],p0=new jr,L2=new We,yo=new rt,So=new Xr;class m0 extends rt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new h0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,L2)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new jr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,us),p0.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(p0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,us),So.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(So)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),e.ray.intersectsSphere(So)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,us),d0.multiplyMatrices(i,us),yo.matrixWorld=d0,yo.raycast(e,tl);for(let o=0,a=tl.length;o<a;o++){const l=tl[o];l.instanceId=s,l.object=this,n.push(l)}tl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new h0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new P2(new Float32Array(r*this.count),r,this.count,zd,Kn));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class N2 extends io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new D,cu=new D,g0=new We,Mo=new Wd,nl=new Xr,Wc=new D,v0=new D;class D2 extends tn{constructor(e=new Bt,n=new N2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)uu.fromBufferAttribute(n,r-1),cu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=uu.distanceTo(cu);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(r),nl.radius+=s,e.ray.intersectsSphere(nl)===!1)return;g0.copy(r).invert(),Mo.copy(e.ray).applyMatrix4(g0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=u){const h=c.getX(y),x=c.getX(y+1),v=il(this,e,Mo,l,h,x);v&&n.push(v)}if(this.isLineLoop){const y=c.getX(g-1),m=c.getX(p),h=il(this,e,Mo,l,y,m);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=u){const h=il(this,e,Mo,l,y,y+1);h&&n.push(h)}if(this.isLineLoop){const y=il(this,e,Mo,l,g-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function il(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(uu.fromBufferAttribute(o,r),cu.fromBufferAttribute(o,s),n.distanceSqToSegment(uu,cu,Wc,v0)>i)return;Wc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Wc);if(!(l<e.near||l>e.far))return{distance:l,point:v0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const x0=new D,_0=new D;class I2 extends D2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)x0.fromBufferAttribute(n,r),_0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+x0.distanceTo(_0);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class U2 extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const y0=new We,Dh=new Wd,rl=new Xr,sl=new D;class S0 extends tn{constructor(e=new Bt,n=new U2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;y0.copy(r).invert(),Dh.copy(e.ray).applyMatrix4(y0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++){const m=u.getX(g);sl.fromBufferAttribute(f,m),M0(sl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,y=p;g<y;g++)sl.fromBufferAttribute(f,g),M0(sl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function M0(t,e,n,i,r,s,o){const a=Dh.distanceSqToPoint(t);if(a<n){const l=new D;Dh.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class F2 extends Ot{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,p=(o-c)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Me:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],o=[],a=new D,l=new We;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Yt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qd extends fi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Me){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*f+this.aX,u=d*f+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class k2 extends qd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $d(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;d*=c,p*=c,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ol=new D,jc=new $d,Xc=new $d,Yc=new $d;class O2 extends fi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(ol.subVectors(r[0],r[1]).add(r[0]),u=ol);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(ol.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=ol),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),jc.initNonuniformCatmullRom(u.x,f.x,d.x,c.x,g,y,m),Xc.initNonuniformCatmullRom(u.y,f.y,d.y,c.y,g,y,m),Yc.initNonuniformCatmullRom(u.z,f.z,d.z,c.z,g,y,m)}else this.curveType==="catmullrom"&&(jc.initCatmullRom(u.x,f.x,d.x,c.x,this.tension),Xc.initCatmullRom(u.y,f.y,d.y,c.y,this.tension),Yc.initCatmullRom(u.z,f.z,d.z,c.z,this.tension));return i.set(jc.calc(l),Xc.calc(l),Yc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function w0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function z2(t,e){const n=1-t;return n*n*e}function B2(t,e){return 2*(1-t)*t*e}function V2(t,e){return t*t*e}function ko(t,e,n,i){return z2(t,e)+B2(t,n)+V2(t,i)}function H2(t,e){const n=1-t;return n*n*n*e}function G2(t,e){const n=1-t;return 3*n*n*t*e}function W2(t,e){return 3*(1-t)*t*t*e}function j2(t,e){return t*t*t*e}function Oo(t,e,n,i,r){return H2(t,e)+G2(t,n)+W2(t,i)+j2(t,r)}class Ix extends fi{constructor(e=new Me,n=new Me,i=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X2 extends fi{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y),Oo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ux extends fi{constructor(e=new Me,n=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y2 extends fi{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fx extends fi{constructor(e=new Me,n=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q2 extends fi{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y),ko(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kx extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(w0(a,l.x,u.x,c.x,f.x),w0(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Me().fromArray(r))}return this}}var E0=Object.freeze({__proto__:null,ArcCurve:k2,CatmullRomCurve3:O2,CubicBezierCurve:Ix,CubicBezierCurve3:X2,EllipseCurve:qd,LineCurve:Ux,LineCurve3:Y2,QuadraticBezierCurve:Fx,QuadraticBezierCurve3:q2,SplineCurve:kx});class $2 extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new E0[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new E0[r.type]().fromJSON(r))}return this}}class T0 extends $2{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Ux(this.currentPoint.clone(),new Me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Fx(this.currentPoint.clone(),new Me(e,n),new Me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Ix(this.currentPoint.clone(),new Me(e,n),new Me(i,r),new Me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new kx(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new qd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $n extends Bt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],p=[];let g=0;const y=[],m=i/2;let h=0;x(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(p,2));function x(){const S=new D,R=new D;let b=0;const T=(n-e)/i;for(let P=0;P<=s;P++){const k=[],_=P/s,w=_*(n-e)+e;for(let z=0;z<=r;z++){const I=z/r,j=I*l+a,$=Math.sin(j),V=Math.cos(j);R.x=w*$,R.y=-_*i+m,R.z=w*V,f.push(R.x,R.y,R.z),S.set($,T,V).normalize(),d.push(S.x,S.y,S.z),p.push(I,1-_),k.push(g++)}y.push(k)}for(let P=0;P<r;P++)for(let k=0;k<s;k++){const _=y[k][P],w=y[k+1][P],z=y[k+1][P+1],I=y[k][P+1];e>0&&(c.push(_,w,I),b+=3),n>0&&(c.push(w,z,I),b+=3)}u.addGroup(h,b,0),h+=b}function v(S){const R=g,b=new Me,T=new D;let P=0;const k=S===!0?e:n,_=S===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*_,0),d.push(0,_,0),p.push(.5,.5),g++;const w=g;for(let z=0;z<=r;z++){const j=z/r*l+a,$=Math.cos(j),V=Math.sin(j);T.x=k*V,T.y=m*_,T.z=k*$,f.push(T.x,T.y,T.z),d.push(0,_,0),b.x=$*.5+.5,b.y=V*.5*_+.5,p.push(b.x,b.y),g++}for(let z=0;z<r;z++){const I=R+z,j=w+z;S===!0?c.push(j,j+1,I):c.push(j+1,j,I),P+=3}u.addGroup(h,P,S===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kd extends $n{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Kd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zd extends Bt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(s.slice(),3)),this.setAttribute("uv",new vt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new D,S=new D,R=new D;for(let b=0;b<n.length;b+=3)p(n[b+0],v),p(n[b+1],S),p(n[b+2],R),l(v,S,R,x)}function l(x,v,S,R){const b=R+1,T=[];for(let P=0;P<=b;P++){T[P]=[];const k=x.clone().lerp(S,P/b),_=v.clone().lerp(S,P/b),w=b-P;for(let z=0;z<=w;z++)z===0&&P===b?T[P][z]=k:T[P][z]=k.clone().lerp(_,z/w)}for(let P=0;P<b;P++)for(let k=0;k<2*(b-P)-1;k++){const _=Math.floor(k/2);k%2===0?(d(T[P][_+1]),d(T[P+1][_]),d(T[P][_])):(d(T[P][_+1]),d(T[P+1][_+1]),d(T[P+1][_]))}}function u(x){const v=new D;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function c(){const x=new D;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=m(x)/2/Math.PI+.5,R=h(x)/Math.PI+.5;o.push(S,1-R)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],R=o[x+4],b=Math.max(v,S,R),T=Math.min(v,S,R);b>.9&&T<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function p(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const x=new D,v=new D,S=new D,R=new D,b=new Me,T=new Me,P=new Me;for(let k=0,_=0;k<s.length;k+=9,_+=6){x.set(s[k+0],s[k+1],s[k+2]),v.set(s[k+3],s[k+4],s[k+5]),S.set(s[k+6],s[k+7],s[k+8]),b.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),R.copy(x).add(v).add(S).divideScalar(3);const w=m(R);y(b,_+0,x,w),y(T,_+2,v,w),y(P,_+4,S,w)}}function y(x,v,S,R){R<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.vertices,e.indices,e.radius,e.details)}}class Ox extends T0{constructor(e){super(e),this.uuid=to(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new T0().fromJSON(r))}return this}}const K2={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=zx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,d,p;if(i&&(s=tA(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let g=n;g<r;g+=n)f=t[g],d=t[g+1],f<a&&(a=f),d<l&&(l=d),f>u&&(u=f),d>c&&(c=d);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return oa(s,o,n,a,l,p,0),o}};function zx(t,e,n,i,r){let s,o;if(r===hA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=A0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=A0(s,t[s],t[s+1],o);return o&&Iu(o,o.next)&&(la(o),o=o.next),o}function Hr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Iu(n,n.next)||mt(n.prev,n,n.next)===0)){if(la(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function oa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&oA(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?J2(t,i,r,s):Z2(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),la(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=Q2(Hr(t),e,n),oa(t,e,n,i,r,s,2)):o===2&&eA(t,e,n,i,r,s):oa(Hr(t),e,n,i,r,s,1);break}}}function Z2(t){const e=t.prev,n=t,i=t.next;if(mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=d&&g.y>=f&&g.y<=p&&Es(r,a,s,l,o,u,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function J2(t,e,n,i){const r=t.prev,s=t,o=t.next;if(mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,d=o.y,p=a<l?a<u?a:u:l<u?l:u,g=c<f?c<d?c:d:f<d?f:d,y=a>l?a>u?a:u:l>u?l:u,m=c>f?c>d?c:d:f>d?f:d,h=Ih(p,g,e,n,i),x=Ih(y,m,e,n,i);let v=t.prevZ,S=t.nextZ;for(;v&&v.z>=h&&S&&S.z<=x;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Es(a,c,l,f,u,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Es(a,c,l,f,u,d,S.x,S.y)&&mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=h;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Es(a,c,l,f,u,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Es(a,c,l,f,u,d,S.x,S.y)&&mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Q2(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Iu(r,s)&&Bx(r,i,i.next,s)&&aa(r,s)&&aa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),la(i),la(i.next),i=t=s),i=i.next}while(i!==t);return Hr(i)}function eA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uA(o,a)){let l=Vx(o,a);o=Hr(o,o.next),l=Hr(l,l.next),oa(o,e,n,i,r,s,0),oa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function tA(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=zx(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(lA(u));for(r.sort(nA),s=0;s<r.length;s++)n=iA(r[s],n);return n}function nA(t,e){return t.x-e.x}function iA(t,e){const n=rA(t,e);if(!n)return e;const i=Vx(n,t);return Hr(i,i.next),Hr(n,n.next)}function rA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Es(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),aa(n,t)&&(f<c||f===c&&(n.x>r.x||n.x===r.x&&sA(r,n)))&&(r=n,c=f)),n=n.next;while(n!==a);return r}function sA(t,e){return mt(t.prev,t,e.prev)<0&&mt(e.next,t,t.next)<0}function oA(t,e,n,i){let r=t;do r.z===0&&(r.z=Ih(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,aA(r)}function aA(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function Ih(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function lA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Es(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function uA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!cA(t,e)&&(aa(t,e)&&aa(e,t)&&fA(t,e)&&(mt(t.prev,t,e.prev)||mt(t,e.prev,e))||Iu(t,e)&&mt(t.prev,t,t.next)>0&&mt(e.prev,e,e.next)>0)}function mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Iu(t,e){return t.x===e.x&&t.y===e.y}function Bx(t,e,n,i){const r=ll(mt(t,e,n)),s=ll(mt(t,e,i)),o=ll(mt(n,i,t)),a=ll(mt(n,i,e));return!!(r!==s&&o!==a||r===0&&al(t,n,e)||s===0&&al(t,i,e)||o===0&&al(n,t,i)||a===0&&al(n,e,i))}function al(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ll(t){return t>0?1:t<0?-1:0}function cA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Bx(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function aa(t,e){return mt(t.prev,t,t.next)<0?mt(t,e,t.next)>=0&&mt(t,t.prev,e)>=0:mt(t,e,t.prev)<0||mt(t,t.next,e)<0}function fA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Vx(t,e){const n=new Uh(t.i,t.x,t.y),i=new Uh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function A0(t,e,n,i){const r=new Uh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function la(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Uh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class zo{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return zo.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];C0(e),b0(i,e);let o=e.length;n.forEach(C0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,b0(i,n[l]);const a=K2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function C0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function b0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class fu extends Zd{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new fu(e.radius,e.detail)}}class Jd extends Bt{constructor(e=new Ox([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(s,3)),this.setAttribute("uv",new vt(o,2));function u(c){const f=r.length/3,d=c.extractPoints(n);let p=d.shape;const g=d.holes;zo.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=g.length;m<h;m++){const x=g[m];zo.isClockWise(x)===!0&&(g[m]=x.reverse())}const y=zo.triangulateShape(p,g);for(let m=0,h=g.length;m<h;m++){const x=g[m];p=p.concat(x)}for(let m=0,h=p.length;m<h;m++){const x=p[m];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,h=y.length;m<h;m++){const x=y[m],v=x[0]+f,S=x[1]+f,R=x[2]+f;i.push(v,S,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return dA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new Jd(i,e.curveSegments)}}function dA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Uu extends Bt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new D,d=new D,p=[],g=[],y=[],m=[];for(let h=0;h<=i;h++){const x=[],v=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const b=R/n;f.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),m.push(b+S,1-v),x.push(u++)}c.push(x)}for(let h=0;h<i;h++)for(let x=0;x<n;x++){const v=c[h][x+1],S=c[h][x],R=c[h+1][x],b=c[h+1][x+1];(h!==0||o>0)&&p.push(v,S,b),(h!==i-1||l<Math.PI)&&p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const R0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class pA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const mA=new pA;class Qd{constructor(e){this.manager=e!==void 0?e:mA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qd.DEFAULT_MATERIAL_NAME="__DEFAULT";class gA extends Qd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=R0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=sa("img");function l(){c(),R0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vA extends Qd{constructor(e){super(e)}load(e,n,i,r){const s=new Ot,o=new gA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);const Rl=12,mr=`
#define MAXL ${Rl}
#define PI 3.14159265
uniform int uLN;
uniform vec3 uLPos[MAXL];
uniform vec3 uLFwd[MAXL];
uniform vec3 uLRight[MAXL];
uniform vec3 uLUp[MAXL];
uniform vec3 uLCol[MAXL];
uniform vec4 uLBeam[MAXL];   // as bs af bf (rad)
uniform vec4 uLI[MAXL];      // Ispot Iflood type glare
uniform float uSigma;        // extinction 1/m
uniform float uAmbient;      // ambient illuminance / PI

// Luminous intensity (cd) of a lamp toward L = P - lampPos (generic form). Returns distance in d.
float beamCore(vec3 L, vec3 F, vec3 R, vec3 U, vec4 b, vec4 I, out float d) {
  d = max(length(L), 0.05);
  vec3 dir = L / d;
  float z = dot(dir, F);
  if (z < 0.03) return 0.0;
  float x = dot(dir, R);
  float y = dot(dir, U);
  float h = atan(x, z);
  float v = atan(y, length(vec2(x, z)));
  if (I.z > 0.5) {
    // ECE-like asymmetric low beam: cut-off at -0.57°, 15° kick on the right side
    float cut = -0.010 + clamp(h * 0.268, 0.0, 0.0125);
    float hz = 0.78 * exp(-pow((h - 0.035) / 0.16, 2.0)) + 0.22 * exp(-pow(h / 0.62, 2.0));
    float dv = v - cut;
    float vert = dv < 0.0
      ? (exp(-pow(max(-dv - 0.012, 0.0) / 0.038, 2.0)) * 0.86 + 0.14 * exp(-pow(dv / 0.16, 2.0)))
      : (exp(-pow(dv / 0.0035, 2.0)) * 0.98 + 0.02 * exp(-pow(dv / 0.12, 2.0)));
    return I.x * hz * vert * smoothstep(0.03, 0.2, z);
  }
  float hs = h / b.x, vs = v / b.y;
  float hf = h / b.z, vf = v / b.w;
  float spot = exp(-(hs * hs + vs * vs));
  float hf2 = hf * hf, vf2 = vf * vf;
  float flood = exp(-(hf2 * hf2 + vf2 * vf2));
  float spill = 0.006 * exp(-(h * h / 0.7 + v * v / 0.05)) * (v > 0.0 ? exp(-v / 0.04) : 1.0);
  return I.x * spot + I.y * (flood + spill);
}
float beamI(int i, vec3 L, out float d) { return beamCore(L, uLFwd[i], uLRight[i], uLUp[i], uLBeam[i], uLI[i], d); }
`,$s=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y); }
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
`,Hx=`
varying vec3 vW; varying vec3 vN; varying vec2 vUv;
void main() {
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
  m = m * instanceMatrix;
  #endif
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(m) * normal); vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;function yn(t,e){return new wt({side:Dn,uniforms:{...t,uAlbedo:{value:new $e(e.albedo)},uRetro:{value:e.retro??0},uMap:{value:e.map??null},uHasMap:{value:e.map?1:0},uEmit:{value:new $e(e.emit??0)},uSnowy:{value:e.snowy??0},uGloss:{value:e.gloss??0},uNoise:{value:e.noise??0},uFringe:{value:e.fringe??0}},vertexShader:Hx,fragmentShader:`
${mr}
uniform vec3 uAlbedo; uniform float uRetro; uniform sampler2D uMap; uniform float uHasMap; uniform vec3 uEmit;
uniform float uSnowy; uniform float uSnowAmt; uniform float uGloss; uniform vec3 uEye; uniform float uTop; uniform float uNoise; uniform float uFringe;
${$s}
varying vec3 vW; varying vec3 vN; varying vec2 vUv;
void main() {
  vec3 alb = uAlbedo;
  float retro = uRetro;
  if (uHasMap > 0.5) { vec4 t = texture2D(uMap, vUv); if (t.a < 0.5) discard; alb = pow(t.rgb, vec3(2.2)); }
  vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
  if (uFringe > 0.5 && uFringe < 1.5) {           // serrated spruce branch tips from the cone uv
    float tips = vnoise(vec2(vUv.x * 70.0, vUv.y * 3.0 + vUv.x * 9.0));
    if (vUv.y < 0.42 * tips + 0.02) discard;
    if (vUv.y < 0.6 && hash12(floor(vec2(vUv.x * 90.0, vUv.y * 14.0))) < 0.18) discard;
  } else if (uFringe > 1.5) {                        // airy pine / birch crowns from world-space noise
    if (fbm(vW.xy * 1.7 + vW.z * 1.3) < 0.42) discard;
  }
  if (uNoise > 0.0) {
    float nz = fbm(vW.xz * 2.7 + vW.y * 3.1) ;
    float nb = vnoise(vW.xy * 9.0 + vW.z * 4.0);
    alb *= mix(1.0, 0.35 + 1.1 * nz * (0.6 + 0.6 * nb), uNoise);
  }
  alb = mix(alb, vec3(0.72), uSnowy * uSnowAmt * smoothstep(0.2, 0.8, N.y) * (uNoise > 0.0 ? smoothstep(0.35, 0.6, fbm(vW.xz * 1.3 + vW.y)) : 1.0));
  vec3 V = normalize(uEye - vW);
  vec3 col = vec3(0.0);
  for (int i = 0; i < MAXL; i++) {
    if (i >= uLN) break;
    vec3 L = vW - uLPos[i]; float d;
    float I = beamI(i, L, d);
    if (I <= 0.0) continue;
    vec3 ld = L / d;
    float E = I / (d * d) * exp(-uSigma * d);
    float ci = max(dot(N, -ld), 0.0);
    vec3 c = uLCol[i] * E;
    col += c * alb * ci / PI;
    if (retro > 0.0) {
      float a = acos(clamp(dot(-ld, V), -1.0, 1.0));       // observation angle
      col += c * alb * retro * (exp(-a / 0.008) + 0.05) * smoothstep(0.0, 0.35, ci);
    }
    if (uGloss > 0.0) { vec3 H = normalize(-ld + V); col += c * uGloss * pow(max(dot(N, H), 0.0), 60.0) * ci; }
  }
  col += alb * uAmbient + uEmit;
  gl_FragColor = vec4(col, 1.0);
}`})}function xA(t,e){return new wt({uniforms:{...t,uReflTex:{value:null},uReflMat:{value:new We},uWet:{value:0},tAsphalt:{value:e.asphalt},tGravel:{value:e.gravel},tSnow:{value:e.snow},uEdgeLines:{value:1}},vertexShader:`
uniform float uSnowAmt;
varying vec3 vW; varying vec3 vN; varying vec2 vUv;
float bump(float x, float c, float w) { float t = clamp(1.0 - abs(x - c) / w, 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  float ax = abs(w.x);
  // plough banks along the edges + snow-filled ditch
  float h = uSnowAmt * (0.62 * bump(ax, 4.75, 1.05) + 0.35 * bump(ax, 6.0, 1.8) + 0.18 * smoothstep(7.0, 12.0, ax));
  float e = 0.05;
  float h1 = uSnowAmt * (0.62 * bump(ax + e, 4.75, 1.05) + 0.35 * bump(ax + e, 6.0, 1.8) + 0.18 * smoothstep(7.0, 12.0, ax + e));
  w.y += h;
  vec3 n = normalize(mat3(modelMatrix) * normal);
  n = normalize(n + vec3(-sign(w.x) * (h1 - h) / e, 0.0, 0.0));
  vW = w.xyz; vN = n; vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,fragmentShader:`
${mr}
${$s}
uniform vec3 uEye; uniform float uSnowAmt; uniform float uWet; uniform sampler2D uReflTex; uniform mat4 uReflMat;
uniform float uTop; uniform float uTopH; uniform sampler2D tAsphalt, tGravel, tSnow; uniform float uEdgeLines;
varying vec3 vW; varying vec3 vN; varying vec2 vUv;

vec3 heat(float t) {
  t = clamp(t, 0.0, 1.0);
  vec3 a = vec3(0.03, 0.05, 0.16), b = vec3(0.06, 0.32, 0.62), c = vec3(0.18, 0.78, 0.72), d = vec3(0.98, 0.86, 0.36), e = vec3(1.0, 0.98, 0.92);
  if (t < 0.25) return mix(a, b, t / 0.25);
  if (t < 0.55) return mix(b, c, (t - 0.25) / 0.3);
  if (t < 0.85) return mix(c, d, (t - 0.55) / 0.3);
  return mix(d, e, (t - 0.85) / 0.15);
}
float band(float x, float c, float w) { float f = fwidth(x) * 1.2; return smoothstep(c - w - f, c - w + f, x) - smoothstep(c + w - f, c + w + f, x); }
vec3 lin(vec3 c) { return pow(c, vec3(2.2)); }

void main() {
  vec2 p = vW.xz;
  float ax = abs(p.x);
  float road = 1.0 - smoothstep(3.36, 3.46, ax + (vnoise(p * vec2(3.0, 0.7)) - 0.5) * 0.08);
  float shoulder = (1.0 - smoothstep(4.0, 4.5, ax)) * (1.0 - road);
  float n1 = fbm(p * vec2(0.6, 0.15)), n2 = vnoise(p * 7.0);
  // textures (ambientCG, CC0) normalised to their mean, then scaled to realistic albedo
  vec3 ta = lin(texture2D(tAsphalt, p * 0.35).rgb) / 0.025;
  vec3 tg = lin(texture2D(tGravel, p * 0.5).rgb) / 0.2;
  vec3 ts = lin(texture2D(tSnow, p * 0.3).rgb) / 0.58;
  // worn grey Norrland asphalt: lighter, patched, polished wheel paths
  vec3 asphalt = vec3(0.095, 0.094, 0.09) * ta * (0.8 + 0.35 * n1);
  asphalt *= 1.0 - 0.3 * smoothstep(0.6, 0.68, fbm(p * vec2(0.22, 0.035) + 7.0));               // darker patches
  float crack = smoothstep(0.015, 0.0, abs(fbm(p * vec2(1.4, 0.35) + 2.0) - 0.5)) * 0.5;
  asphalt *= 1.0 - crack;
  float tr = band(p.x, 0.85, 0.32) + band(p.x, 2.55, 0.32) + band(p.x, -0.85, 0.32) + band(p.x, -2.55, 0.32);
  asphalt *= 1.0 - 0.12 * tr;
  vec3 gravel = vec3(0.16, 0.15, 0.13) * tg;
  vec3 floorc = mix(vec3(0.03, 0.035, 0.022), vec3(0.055, 0.05, 0.03), n2) * (0.6 + 0.6 * n1);   // moss, needles, lingon
  floorc = mix(floorc, vec3(0.09, 0.08, 0.05), smoothstep(0.55, 0.8, fbm(p * 0.3)) * smoothstep(5.0, 7.5, ax) * 0.6); // dry grass in ditch
  vec3 alb = mix(floorc, gravel, shoulder);
  alb = mix(alb, asphalt, road);
  // markings: dashed centre 3 m / 9 m, dashed edge lines 1 m / 2 m (typical narrower rural road)
  float dash = step(fract(-p.y / 12.0), 0.25);
  float centre = band(p.x, 0.0, 0.05) * dash;
  float edge = band(ax, 3.2, 0.05) * step(fract(-p.y / 3.0), 0.333) * uEdgeLines;
  float wear = 0.55 + 0.45 * smoothstep(0.25, 0.6, fbm(p * vec2(4.0, 0.8)));
  float mark = clamp(centre + edge, 0.0, 1.0) * wear * road;
  // snow: banks/ditch/forest white, road packed snow with icy ruts
  float snowOff = uSnowAmt * (1.0 - road);
  float packed = uSnowAmt * road * (0.55 + 0.4 * fbm(p * vec2(0.8, 0.2))) * (1.0 - 0.75 * clamp(tr, 0.0, 1.0));
  alb = mix(alb, vec3(0.78, 0.8, 0.84) * ts, clamp(snowOff * (0.85 + 0.3 * fbm(p * 0.7)), 0.0, 1.0));
  alb = mix(alb, vec3(0.42, 0.43, 0.45) * ts, clamp(packed, 0.0, 1.0));
  mark *= 1.0 - clamp(packed * 1.6, 0.0, 1.0);
  alb = mix(alb, vec3(0.6), mark);
  float ice = uSnowAmt * road * clamp(tr, 0.0, 1.0);
  float wet = max(uWet * road * (0.65 + 0.35 * smoothstep(0.35, 0.7, fbm(p * vec2(0.5, 0.2) + 3.0) + tr * 0.4)), ice * 0.5);
  alb *= 1.0 - 0.5 * uWet * road;

  vec3 N = normalize(vN);
  vec3 V = normalize(uEye - vW);
  vec3 col = vec3(0.0);
  float Etop = 0.0;
  for (int i = 0; i < MAXL; i++) {
    if (i >= uLN) break;
    float d;
    if (uTop > 0.5) {
      float It = beamI(i, vec3(vW.x, vW.y + uTopH, vW.z) - uLPos[i], d);
      Etop += It / (d * d) * exp(-uSigma * d);
      continue;
    }
    vec3 L = vW - uLPos[i];
    float I = beamI(i, L, d);
    if (I <= 0.0) continue;
    vec3 ld = L / d;
    float E = I / (d * d) * exp(-uSigma * d);
    float ci = max(dot(N, -ld), 0.0);
    vec3 c = uLCol[i] * E;
    float a = acos(clamp(dot(-ld, V), -1.0, 1.0));
    float rough = (1.0 + 0.7 * exp(-a / 0.05) * road) * (1.0 - 0.6 * wet);
    col += c * alb * ci / PI * rough;
    col += c * mark * (0.15 - 0.12 * uWet) * (0.3 + 0.7 * exp(-a / 0.03));
    if (uSnowAmt > 0.0) { vec3 H = normalize(-ld + V); col += c * snowOff * 0.04 * pow(max(dot(N, H), 0.0), 30.0) * step(0.93, hash12(floor(p * 60.0))); } // sparkle
  }
  if (uTop > 0.5) {
    if (vW.z > -2.0) Etop = 0.0;    // behind the lamps / under the car: no beam (avoids a blown-out strip behind the car)
    float lg = log2(max(Etop, 1e-4)) / 3.3219;
    float t = (lg + 0.6) / 3.0;
    vec3 base = mix(vec3(0.015), vec3(0.05), road) + mark * 0.06;
    vec3 hc = heat(t) * smoothstep(-1.1, -0.55, lg);
    vec3 outc = mix(base, hc, 0.78);
    float f = max(fwidth(lg), 1e-4);   // flat regions: avoid smoothstep(0, 0, x) (undefined → white)
    float c1 = 1.0 - smoothstep(0.0, f * 1.6, abs(lg));
    float c025 = 1.0 - smoothstep(0.0, f * 1.2, abs(lg + 0.602));
    float c10 = 1.0 - smoothstep(0.0, f * 1.0, abs(lg - 1.0));
    float c3 = 1.0 - smoothstep(0.0, f * 1.0, abs(lg - 0.477));
    float c50 = 1.0 - smoothstep(0.0, f * 1.0, abs(lg - 1.699));
    outc = mix(outc, vec3(1.0), c1);
    outc = mix(outc, vec3(0.55, 0.85, 1.0), c025 * step(0.5, fract(vW.z / 6.0)));
    outc = mix(outc, vec3(0.9), (c10 + c3 + c50) * 0.45);
    float gz = 1.0 - smoothstep(0.0, fwidth(vW.z) * 1.0, abs(fract(vW.z / 50.0 + 0.5) - 0.5) * 50.0);
    float gx = 1.0 - smoothstep(0.0, fwidth(vW.x) * 1.0, abs(fract(vW.x / 10.0 + 0.5) - 0.5) * 10.0);
    outc = mix(outc, vec3(1.0), (gz * 0.18 + gx * 0.08));
    gl_FragColor = vec4(outc * 1.6, 1.0);
    return;
  }
  if (wet > 0.01) {
    vec4 rp = uReflMat * vec4(vW.x, -vW.y, vW.z, 1.0);
    vec4 rp0 = uReflMat * vec4(vW, 1.0);
    vec2 ruv = rp0.xy / rp0.w;
    ruv.x += (vnoise(p * vec2(3.0, 0.6)) - 0.5) * 0.006;
    vec3 r = vec3(0.0);
    for (int k = -3; k <= 3; k++) r += texture2D(uReflTex, ruv + vec2(0.0, float(k) * 0.006)).rgb;
    r /= 7.0;
    float cv = clamp(dot(V, N), 0.0, 1.0);
    float fres = 0.02 + 0.98 * pow(1.0 - cv, 5.0);
    col += r * fres * wet * 0.9;
  }
  col += alb * uAmbient;
  gl_FragColor = vec4(col, 1.0);
}`})}function _A(t){return new wt({depthTest:!0,depthWrite:!0,depthFunc:ia,uniforms:{...t,tPhoto:{value:null},tMask:{value:null},uPRot:{value:new Be},uPTan:{value:new Me(.3,.3)},uInvProj:{value:new We},uCamWorld:{value:new We},uViewProj:{value:new We},uCam:{value:new D},uWallL:{value:-6},uWallR:{value:6},uBlack:{value:.2},uAlbK:{value:1},uTreeK:{value:1},uWet:{value:0},uWinter:{value:0},uOvercast:{value:0},uReady:{value:0},uCrest:{value:1e5},uSat:{value:.75}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
${mr}
${$s}
uniform sampler2D tPhoto, tMask; uniform mat3 uPRot; uniform vec2 uPTan;
uniform mat4 uInvProj, uCamWorld, uViewProj; uniform vec3 uCam;
uniform float uWallL, uWallR, uBlack, uAlbK, uTreeK, uWet, uWinter, uOvercast, uReady, uCrest, uSat;
varying vec2 vUv;

vec3 skyCol(vec3 rd) {
  float e = max(rd.y, 0.0);
  vec3 c = mix(vec3(0.00045, 0.00042, 0.0005), vec3(0.00004, 0.00006, 0.00014), pow(e, 0.45));
  vec2 sp = rd.xz / (rd.y + 0.25) * 260.0;
  float st = step(0.9965, hash12(floor(sp))) * smoothstep(0.03, 0.2, e);
  c += st * vec3(0.012, 0.013, 0.016) * pow(hash12(floor(sp) + 3.1), 3.0) * (1.0 - uOvercast);
  return mix(c, vec3(0.0009), uOvercast);
}

void main() {
  vec4 v = uInvProj * vec4(vUv * 2.0 - 1.0, 1.0, 1.0); v /= v.w;
  vec3 rd = normalize(mat3(uCamWorld) * v.xyz);
  vec3 pc = uPRot * rd;
  vec2 puv = vec2(0.5 + 0.5 * (pc.x / -pc.z) / uPTan.x, 0.5 + 0.5 * (pc.y / -pc.z) / uPTan.y);
  float inside = step(0.0, puv.x) * step(puv.x, 1.0) * step(0.0, puv.y) * step(puv.y, 1.0) * step(pc.z, 0.0) * uReady;
  vec3 mk = texture2D(tMask, puv).rgb * inside;
  float road = mk.r, gnd = mk.r + mk.g, tree = mk.b;
  float sky = clamp(1.0 - gnd - tree, 0.0, 1.0);
  if (sky > 0.97 || inside < 0.5) { gl_FragColor = vec4(skyCol(rd) * (inside > 0.5 ? 1.0 : 0.3), 1.0); gl_FragDepth = 1.0; return; }

  // --- geometry from the calibration
  float tg = rd.y < -1e-5 ? -uCam.y / rd.y : 1e6;
  float wx = rd.x < 0.0 ? uWallL : uWallR;
  float tw = abs(rd.x) > 1e-5 ? (wx - uCam.x) / rd.x : 1e6; if (tw < 0.0) tw = 1e6;
  bool isG = gnd >= tree;
  if (tg > 1e5) tg = 160.0;                       // ground seen above the road horizon: beyond a crest, far away
  tg = min(tg, tw);                               // banks/fields can't lie behind the forest edge in the same direction
  float t = isG ? tg : tw;
  if (!isG && uCam.y + rd.y * tw < 0.0) { t = tg; }
  if (!isG) t *= mix(1.0, 3.0, smoothstep(uCrest * 0.7, uCrest * 1.6, -rd.z * t));   // forest beyond a crest/dip sits further away
  t = min(t, 1600.0);
  vec3 P = uCam + rd * t;
  // road: flat; shoulders/banks/ditch slopes lean toward the road and the viewer; forest: wall facing road + viewer
  vec3 toV = normalize(vec3(-rd.x, 0.0, -rd.z));
  float bank = mk.g / max(gnd, 1e-3);
  vec3 N = isG ? normalize(vec3(0.0, 1.0, 0.0) + toV * (0.75 * bank)) : normalize(mix(vec3(-sign(wx), 0.0, 0.0), -rd, 0.55) + vec3(0.0, 0.15, 0.0));

  // --- albedo estimate from the daylight photo
  vec3 ph = texture2D(tPhoto, puv).rgb;
  vec3 s = max(ph - uBlack, 0.0) / (1.0 - uBlack);
  vec3 lin = pow(s, vec3(2.2));
  // remove the sun: divide out the large-scale daylight shading (sun patches, hard shadows), keep the texture
  vec3 lowP = pow(max(textureLod(tPhoto, puv, 5.0).rgb - uBlack, 0.0) / (1.0 - uBlack), vec3(2.2));
  vec3 coarse = pow(max(textureLod(tPhoto, puv, 8.0).rgb - uBlack, 0.0) / (1.0 - uBlack), vec3(2.2));
  float fl = dot(coarse, vec3(0.333)) / max(dot(lowP, vec3(0.333)), 1e-3);
  lin *= mix(1.0, clamp(fl, 0.25, 4.0), 0.75);
  float lum = dot(lin, vec3(0.2126, 0.7152, 0.0722));
  // yellow centre dashes → Swedish white paint
  float yel = road * smoothstep(0.08, 0.2, ph.r - ph.b) * smoothstep(0.02, 0.1, ph.g - ph.b) * (1.0 - uWinter);
  lin = mix(lin, vec3(max(lin.r, lin.g) * 1.15), yel);
  vec3 alb = uAlbK * pow(lin, vec3(0.82));
  alb = mix(vec3(dot(alb, vec3(0.2126, 0.7152, 0.0722))), alb, uSat);   // daylight-graded colours → natural
  alb *= mix(1.0, uTreeK, tree / max(gnd + tree, 1e-3));
  // daylight shading in the photo is baked in; soften extremes a bit
  alb = min(alb, vec3(0.88));
  float mark = yel;

  // wet road: darker, specular
  float wet = uWet * road * (0.7 + 0.3 * vnoise(P.xz * vec2(0.6, 0.15)));
  alb *= 1.0 - 0.5 * wet;

  vec3 V = normalize(uCam - P);
  vec3 col = vec3(0.0);
  for (int i = 0; i < MAXL; i++) {
    if (i >= uLN) break;
    vec3 L = P - uLPos[i]; float d;
    float I = beamI(i, L, d);
    if (I <= 0.0) continue;
    vec3 ld = L / d;
    float E = I / (d * d) * exp(-uSigma * d);
    float ci = max(dot(N, -ld), 0.0);
    vec3 c = uLCol[i] * E;
    float a = acos(clamp(dot(-ld, V), -1.0, 1.0));
    float rough = isG ? (1.0 + 0.7 * exp(-a / 0.05) * road) * (1.0 - 0.6 * wet) : 1.0;
    col += c * alb * ci / PI * rough;
    col += c * mark * (0.12 - 0.09 * uWet) * (0.3 + 0.7 * exp(-a / 0.03));
    if (wet > 0.0) { vec3 H = normalize(-ld + V); col += c * wet * 0.35 * pow(max(dot(N, H), 0.0), 90.0); }
    if (uWinter > 0.5 && isG) { vec3 H = normalize(-ld + V); col += c * 0.03 * pow(max(dot(N, H), 0.0), 30.0) * step(0.94, hash12(floor(puv * vec2(1600.0, 1200.0)))); }
  }
  // starlight / sky glow ambient (scotopic, nearly colourless)
  vec3 amb = vec3(lum) * vec3(0.7, 0.82, 1.05) * uAlbK;   // cold, colourless moonlight (Purkinje)
  col += amb * uAmbient * (isG ? 1.0 : 0.7);
  // blend toward the sky colour at soft mask edges
  col = mix(col, skyCol(rd), sky);
  gl_FragColor = vec4(col, 1.0);
  vec4 clip = uViewProj * vec4(P, 1.0);
  gl_FragDepth = clamp(clip.z / clip.w * 0.5 + 0.5, 0.0, 0.999999);
}`})}const Is=8;function yA(t){const e=()=>Array.from({length:Is},()=>new D),n=()=>Array.from({length:Is},()=>new pt);return new wt({depthTest:!0,depthWrite:!0,depthFunc:ia,uniforms:{...t,tR0:{value:null},tR1:{value:null},tR2:{value:null},tMask:{value:null},uPRot:{value:new Be},uPTan:{value:new Me(.3,.3)},uInvProj:{value:new We},uCamWorld:{value:new We},uViewProj:{value:new We},uCam:{value:new D},uWallL:{value:-6},uWallR:{value:6},uK:{value:.2},uWet:{value:0},uReady:{value:0},uTexel:{value:new Me(1/800,1/532)},uRN:{value:0},uRPos:{value:e()},uRFwd:{value:e()},uRRight:{value:e()},uRUp:{value:e()},uRBeam:{value:n()},uRI:{value:n()},uRSet:{value:e()},uCarRef:{value:new D(0,0,-12)},uRefCol:{value:new D(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
${mr}
${$s}
#define MAXR ${Is}
uniform sampler2D tR0, tR1, tR2, tMask; uniform mat3 uPRot; uniform vec2 uPTan, uTexel;
uniform mat4 uInvProj, uCamWorld, uViewProj; uniform vec3 uCam;
uniform float uWallL, uWallR, uK, uWet, uReady;
uniform int uRN; uniform vec3 uRPos[MAXR]; uniform vec3 uRFwd[MAXR]; uniform vec3 uRRight[MAXR]; uniform vec3 uRUp[MAXR];
uniform vec4 uRBeam[MAXR]; uniform vec4 uRI[MAXR]; uniform vec3 uRSet[MAXR]; uniform vec3 uCarRef; uniform vec3 uRefCol;
varying vec2 vUv;

vec3 lin(vec3 c) { return pow(max(c, 0.0), vec3(2.2)); }
// mild unsharp mask: the source is only 800 px wide
vec3 samp(sampler2D t, vec2 uv) {
  vec3 c = texture2D(t, uv).rgb;
  vec3 b = (texture2D(t, uv + vec2(uTexel.x, 0.0)).rgb + texture2D(t, uv - vec2(uTexel.x, 0.0)).rgb + texture2D(t, uv + vec2(0.0, uTexel.y)).rgb + texture2D(t, uv - vec2(0.0, uTexel.y)).rgb) * 0.25;
  return lin(clamp(c + (c - b) * 0.45, 0.0, 1.0));
}

// modelled shading (cd/m² for albedo 1) of the reference sets at P
vec3 refShade(vec3 P, vec3 N, vec3 V, float roadW, bool isG) {
  vec3 S = vec3(0.0);
  for (int i = 0; i < MAXR; i++) {
    if (i >= uRN) break;
    vec3 L = P - uRPos[i]; float d;
    float I = beamCore(L, uRFwd[i], uRRight[i], uRUp[i], uRBeam[i], uRI[i], d);
    if (I <= 0.0) continue;
    vec3 ld = L / d;
    float ci = max(dot(N, -ld), 0.0);
    float a = acos(clamp(dot(-ld, V), -1.0, 1.0));
    float rough = isG ? (1.0 + 0.7 * exp(-a / 0.05) * roadW) : 1.0;
    S += uRSet[i] * (I / (d * d) * ci * rough / PI);
  }
  return S;
}
vec3 userShade(vec3 P, vec3 N, vec3 V, float roadW, bool isG, float wet, out vec3 spec) {
  vec3 S = vec3(0.0); spec = vec3(0.0);
  for (int i = 0; i < MAXL; i++) {
    if (i >= uLN) break;
    vec3 L = P - uLPos[i]; float d;
    float I = beamI(i, L, d);
    if (I <= 0.0) continue;
    vec3 ld = L / d;
    float E = I / (d * d) * exp(-uSigma * d);
    float ci = max(dot(N, -ld), 0.0);
    float a = acos(clamp(dot(-ld, V), -1.0, 1.0));
    float rough = isG ? (1.0 + 0.7 * exp(-a / 0.05) * roadW) * (1.0 - 0.5 * wet) : 1.0;
    S += uLCol[i] * (E * ci * rough / PI);
    if (isG && roadW > 0.0) { vec3 H = normalize(-ld + V); spec += uLCol[i] * E * roadW * (0.012 + wet * 0.3) * pow(max(dot(N, H), 0.0), mix(25.0, 120.0, wet)); }
  }
  return S;
}

void main() {
  vec4 v = uInvProj * vec4(vUv * 2.0 - 1.0, 1.0, 1.0); v /= v.w;
  vec3 rd = normalize(mat3(uCamWorld) * v.xyz);
  vec3 pc = uPRot * rd;
  vec2 puv = vec2(0.5 + 0.5 * (pc.x / -pc.z) / uPTan.x, 0.5 + 0.5 * (pc.y / -pc.z) / uPTan.y);
  float inside = step(0.0, puv.x) * step(puv.x, 1.0) * step(0.0, puv.y) * step(puv.y, 1.0) * step(pc.z, 0.0) * uReady;
  vec3 mk = texture2D(tMask, puv).rgb * inside;
  float car = smoothstep(0.25, 0.42, min(mk.r, min(mk.g, mk.b)));
  float road = mk.r * (1.0 - car), gnd = (mk.r + mk.g) * (1.0 - car), tree = mk.b * (1.0 - car);
  float sky = clamp(1.0 - gnd - tree - car, 0.0, 1.0);
  vec3 skyC = vec3(0.00035, 0.0004, 0.00055);
  if (inside < 0.5 || sky > 0.97) { gl_FragColor = vec4(skyC * inside, 1.0); gl_FragDepth = 1.0; return; }

  // geometry
  float tg = rd.y < -1e-5 ? -uCam.y / rd.y : 1e6;
  float wx = rd.x < 0.0 ? uWallL : uWallR;
  float tw = abs(rd.x) > 1e-5 ? (wx - uCam.x) / rd.x : 1e6; if (tw < 0.0) tw = 1e6;
  if (tg > 1e5) tg = 250.0;
  tg = min(tg, tw);
  bool isG = gnd >= tree;
  float t = isG ? tg : tw;
  if (!isG && uCam.y + rd.y * tw < 0.0) t = tg;
  t = min(t, 1600.0);
  vec3 P = uCam + rd * t;
  vec3 toV = normalize(vec3(-rd.x, 0.0, -rd.z));
  float bank = mk.g / max(mk.r + mk.g, 1e-3);
  vec3 N = isG ? normalize(vec3(0.0, 1.0, 0.0) + toV * (0.75 * bank)) : normalize(mix(vec3(-sign(wx), 0.0, 0.0), -rd, 0.55) + vec3(0.0, 0.15, 0.0));
  vec3 V = normalize(uCam - P);
  float roadW = road / max(gnd, 1e-3);
  if (car > 0.5) { P = uCarRef; N = vec3(0.0, 1.0, 0.0); V = normalize(uCam - P); isG = true; roadW = 1.0; }

  float wet = uWet * road * (0.7 + 0.3 * vnoise(P.xz * vec2(0.6, 0.15)));
  vec3 spec;
  vec3 Su = userShade(P, N, V, roadW, isG, wet, spec);
  float su = dot(Su, vec3(0.2126, 0.7152, 0.0722));
  vec3 Sk = refShade(P, N, V, roadW, isG);

  vec3 p0 = samp(tR0, puv) / uK, p1 = samp(tR1, puv) / uK, p2 = samp(tR2, puv) / uK;
  float l0 = dot(p0, vec3(0.2126, 0.7152, 0.0722)), l1 = dot(p1, vec3(0.2126, 0.7152, 0.0722)), l2 = dot(p2, vec3(0.2126, 0.7152, 0.0722));
  // confidence: pixel well above the noise floor AND the model says that reference really lit it
  vec3 c = vec3(l0, l1, l2) / (vec3(l0, l1, l2) + 0.02) * Sk / (Sk + 0.004);
  vec3 sim = exp(-0.8 * abs(log(max(vec3(su), 1e-6) / max(Sk, 1e-6))));
  vec3 w = c * (0.15 + sim) + 1e-6;
  vec3 r = min(vec3(su) / max(Sk, 1e-5), 40.0);   // luminance ratio per reference (lamp colour applied below)
  vec3 colN = Su / max(su, 1e-9) / uRefCol;
  vec3 est = (w.x * p0 * r.x + w.y * p1 * r.y + w.z * p2 * r.z);
  float ws = w.x + w.y + w.z;
  // prior albedo where no reference saw anything (snowy forest road)
  vec3 prior = vec3(0.65, 0.68, 0.72) * (road > 0.5 ? 1.0 : (isG ? 0.95 : 0.16 + 0.12 * fbm(puv * vec2(60.0, 40.0))));
  float wp = 0.02 * (1.0 - max(c.x, max(c.y, c.z)));
  vec3 col = (est + wp * prior * su) / (ws + wp);
  // keep the photo's colour, tint it by the user's lamp colour relative to neutral
  col *= mix(vec3(1.0), colN, 0.85);
  if (wet > 0.0) col *= 1.0 - 0.45 * wet;
  col += spec;
  // very low cold moonlight / sky glow (Purkinje: blue-grey, colourless)
  col += prior * uAmbient * vec3(0.7, 0.82, 1.05) * (isG ? 1.0 : 0.6);
  col = mix(col, skyC, sky);
  gl_FragColor = vec4(col, 1.0);
  vec4 clip = uViewProj * vec4(car > 0.5 ? uCam + rd * 1.2 : P, 1.0);
  gl_FragDepth = clamp(clip.z / clip.w * 0.5 + 0.5, 0.0, 0.999999);
}`})}function SA(t,e,n,i){return new wt({side:Dn,uniforms:{...t,tMap:{value:e},uAlbK:{value:n},uSat:{value:i},uGain:{value:1}},vertexShader:Hx,fragmentShader:`
${mr}
uniform sampler2D tMap; uniform float uAlbK, uSat, uSnowAmt, uGain;
varying vec3 vW; varying vec3 vN; varying vec2 vUv;
void main() {
  vec4 t = texture2D(tMap, vUv);
  if (t.a < 0.5) discard;
  vec3 lin = pow(t.rgb, vec3(2.2));
  float l = dot(lin, vec3(0.2126, 0.7152, 0.0722));
  vec3 alb = mix(vec3(l), lin, uSat) * uAlbK;
  // snow settling on the back in a snowstorm
  alb = mix(alb, vec3(0.6), uSnowAmt * 0.25 * smoothstep(0.82, 0.97, vUv.y));
  vec3 col = vec3(0.0);
  for (int i = 0; i < MAXL; i++) {
    if (i >= uLN) break;
    vec3 L = vW - uLPos[i]; float d;
    float I = beamI(i, L, d);
    if (I <= 0.0) continue;
    // the animal's flank is turned slightly away (fur: broad lobe), ~0.8 of a facing Lambertian surface
    col += uLCol[i] * (I / (d * d) * exp(-uSigma * d)) * alb * 0.8 / PI;
  }
  col += alb * uAmbient * vec3(0.7, 0.82, 1.05);
  gl_FragColor = vec4(col * uGain, 1.0);
}`})}function MA(){return new wt({transparent:!0,depthWrite:!1,depthTest:!0,blending:ix,blendSrc:rx,blendDst:sx,blendEquation:qi,uniforms:{uK:{value:.65}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uK; varying vec2 vUv;
      void main(){ vec2 q = (vUv - 0.5) * 2.0; float r = dot(q, q); float s = exp(-r * 3.2) * uK; gl_FragColor = vec4(vec3(1.0 - s), 1.0); }`})}function wA(t){return new wt({transparent:!0,depthWrite:!1,depthTest:!0,blending:iu,uniforms:{...t,uPxRad:{value:5e-4},uCIL:{value:.005},uGain:{value:1}},vertexShader:`
${mr}
attribute float aK;
uniform float uPxRad, uCIL, uGain; uniform vec3 uEye;
varying vec3 vCol;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vec3 V = normalize(uEye - w.xyz);
  float dc = length(uEye - w.xyz);
  vec3 I = vec3(0.0);
  for (int i = 0; i < MAXL; i++) {
    if (i >= uLN) break;
    vec3 L = w.xyz - uLPos[i]; float d;
    float Ii = beamI(i, L, d);
    if (Ii <= 0.0) continue;
    float E = Ii / (d * d) * exp(-uSigma * d);
    float a = acos(clamp(dot(-L / d, V), -1.0, 1.0));          // observation angle lamp–eye–camera
    I += uLCol[i] * E * uCIL * aK * exp(-a / 0.035);              // returned intensity (cd)
  }
  I *= exp(-uSigma * dc) * uGain;
  float S = 2.0;                                                   // sprite size (px)
  vCol = I / (dc * dc) / (S * S * uPxRad * uPxRad);                // luminance that integrates to the right illuminance
  gl_PointSize = S;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,fragmentShader:"varying vec3 vCol; void main(){ vec2 q = gl_PointCoord - 0.5; float a = exp(-dot(q, q) * 9.0) * 2.4; gl_FragColor = vec4(vCol * a, 1.0); }"})}const Us={moose:{id:"moose",label:"Älg",kind:"moose",src:"./animals/moose.png",W:1013,H:640,groundPx:635,shoulderPx:589,shoulderM:1.9,eyes:[[934,111,.55]],albedo:.05,meanLin:.0582,sat:.6,centerM:1.5,credit:"“Moose mother and calf on road” (beskuren, frilagd)",author:"Veronika Ronkos (Wikimedia Commons)",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0",url:"https://commons.wikimedia.org/wiki/File:Moose_mother_and_calf_on_road.jpg"},deer1:{id:"deer1",label:"Rådjur 1",kind:"deer",src:"./animals/deer1.png",W:676,H:640,groundPx:621,shoulderPx:371,shoulderM:.7,eyes:[[55,200,1],[122,197,1]],albedo:.1,meanLin:.0583,sat:.4,centerM:.6,credit:"“Roe deer buck on a summer night in Tuntorp, Brastad 1” (frilagd)",author:"W.carter (Wikimedia Commons)",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0",url:"https://commons.wikimedia.org/wiki/File:Roe_deer_buck_on_a_summer_night_in_Tuntorp,_Brastad_1.jpg"},deer2:{id:"deer2",label:"Rådjur 2",kind:"deer",src:"./animals/deer2.png",W:644,H:640,groundPx:637,shoulderPx:451,shoulderM:.7,eyes:[[580,107,.7]],albedo:.11,meanLin:.2938,sat:.5,centerM:.6,credit:"“Roe deer (Capreolus capreolus) female Cumnor” (frilagd)",author:"Charles J. Sharp, Sharp Photography (sharpphotography.co.uk)",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0",url:"https://commons.wikimedia.org/wiki/File:Roe_deer_(Capreolus_capreolus)_female_Cumnor.jpg"}},EA=["moose","deer1","deer2"];let TA=0;const AA=()=>Math.random().toString(36).slice(2,7)+(TA++).toString(36),Wn=t=>({on:!0,pair:!1,pairSpacing:1.1,specMode:"lumen",lumen:8e3,efficiency:.7,cd:1e5,lux1:300,kelvin:5700,beam:"combo",hAngle:10,vAngle:5,floodH:50,floodV:12,spotShare:.45,tilt:0,yaw:0,mount:"grille",height:.75,heated:!1,posLight:"off",...t}),CA="Valostore.se – Extraljus PURELUX Panther Heat S540 (uppmätt av Valostore), valostore.se/sv/produkt/extraljus_purelux_panther_heat_s540; vilkur.eu",Gx={purelux:{label:"PURELUX Panther Heat S540 – Rak / 55 cm / 260W",group:"Dina ljus",note:"HS18593-15813 · justerbar hållare, XBB Dongle & PowerUnit",make:()=>Wn({preset:"purelux",name:"Panther Heat S540",specMode:"lumen",lumen:17795,efficiency:1,kelvin:5e3,beam:"combo",hAngle:9,vAngle:6,floodH:40,floodV:14,spotShare:.55,mount:"plate",height:.5,heated:!0,mode:"boost",posLight:"white"})},lowbeam:{label:"Halvljus (bilens)",group:"Bilens ljus",make:()=>Wn({preset:"lowbeam",name:"Halvljus",pair:!0,pairSpacing:1.4,specMode:"cd",cd:22e3,kelvin:4300,beam:"lowbeam",hAngle:30,vAngle:4,floodH:60,floodV:8,spotShare:.6,mount:"grille",height:.68,tilt:0})},highbeam:{label:"Helljus (bilens)",group:"Bilens ljus",make:()=>Wn({preset:"highbeam",name:"Helljus",on:!1,pair:!0,pairSpacing:1.4,specMode:"cd",cd:5e4,kelvin:4300,beam:"driving",hAngle:9,vAngle:5,floodH:34,floodV:9,spotShare:.5,mount:"grille",height:.68})},bar20:{label:'LED-ramp 20" combo',group:"Ramper",make:()=>Wn({preset:"bar20",name:'LED-ramp 20"',lumen:9e3,beam:"combo",mount:"grille",height:.6})},bar30:{label:'LED-ramp 30" combo',group:"Ramper",make:()=>Wn({preset:"bar30",name:'LED-ramp 30"',lumen:14e3,beam:"combo",mount:"grille",height:.6})},bar40:{label:'LED-ramp 40" combo (tak)',group:"Ramper",make:()=>Wn({preset:"bar40",name:'LED-ramp 40"',lumen:19e3,beam:"combo",mount:"roof",height:1.75,tilt:-.3})},round7:{label:'Runda spotlights 7" (par)',group:"Runda",make:()=>Wn({preset:"round7",name:'Rund 7" par',pair:!0,pairSpacing:.9,lumen:4500,efficiency:.75,beam:"spot",hAngle:8,vAngle:6,floodH:30,floodV:12,spotShare:.9,mount:"bumper",height:.55})},round9:{label:'Runda spotlights 9" (par)',group:"Runda",make:()=>Wn({preset:"round9",name:'Rund 9" par',pair:!0,pairSpacing:1,lumen:7500,efficiency:.75,beam:"spot",hAngle:8,vAngle:6,floodH:30,floodV:12,spotShare:.9,mount:"bumper",height:.55})},pods:{label:"Driving pods (par)",group:"Runda",make:()=>Wn({preset:"pods",name:"Driving pods",pair:!0,pairSpacing:1.2,lumen:3e3,efficiency:.75,beam:"driving",hAngle:20,vAngle:8,floodH:45,floodV:12,spotShare:.5,mount:"bumper",height:.5})},laser:{label:"Laserspot",group:"Övrigt",make:()=>Wn({preset:"laser",name:"Laserspot",lumen:2200,efficiency:.8,kelvin:6e3,beam:"laser",hAngle:3,vAngle:3,floodH:12,floodV:6,spotShare:.92,mount:"grille",height:.7})},flood:{label:"Bred flood / arbetsljus",group:"Övrigt",make:()=>Wn({preset:"flood",name:"Bred flood",lumen:6e3,efficiency:.75,kelvin:5e3,beam:"flood",hAngle:40,vAngle:20,floodH:80,floodV:30,spotShare:.1,mount:"roof",height:1.75,tilt:-6})}};function si(t){return{id:AA(),...Gx[t].make()}}const bA={bumper:.5,plate:.5,grille:.75,roof:1.75},RA={bumper:"Stötfångare",plate:"Reg.skylt",grille:"Grill",roof:"Tak"},PA={bumper:-2.35,plate:-2.4,grille:-2.2,roof:-.35},hu={night:{id:"night",kind:"night",label:"Natt · snöig skogsväg (riktigt nattfoto)",src:"./photos/night_x.jpg",mask:"./photos/night_mask.png",aspect:800/532,refs:["./photos/night_d.jpg","./photos/night_f.jpg","./photos/night_x.jpg"],vp:[.5,.44],vfov:16.6,camH:1.12,camDx:.45,wallL:-6,wallR:5.3,K:.2,black:0,albK:1,treeK:1,crest:1e5,sat:1,credit:"“2005 winter road” (halvljus / helljus / helljus + extraljus)",author:"Scoo (Wikimedia Commons)",license:"CC BY-SA 2.5",url:"https://commons.wikimedia.org/wiki/File:2005_winter_road_full_beam_and_extra_lights.jpg"},summer:{id:"summer",label:"Sommar · tallskog",src:"./photos/summer.jpg",mask:"./photos/summer_mask.png",aspect:2048/1367,vp:[.497,.535],vfov:31,camH:1.25,wallL:-5.4,wallR:5.4,black:.25,albK:.95,treeK:1.6,crest:1e5,sat:.6,credit:"“Infinite road”",author:"Sébastien Marchand (Unsplash)",license:"CC0",url:"https://commons.wikimedia.org/wiki/File:Infinite_road_(Unsplash).jpg"},winter:{id:"winter",label:"Vinter · snöig skogsväg",src:"./photos/winter.jpg",mask:"./photos/winter_mask.png",aspect:1600/1200,vp:[.578,.525],vfov:38,camH:1.2,wallL:-11,wallR:12,black:.2,albK:1.45,treeK:1.3,crest:60,sat:.8,credit:"“Joukokyläntie Vaatovaaralla”",author:"Hoogberg (Wikimedia Commons)",license:"CC BY-SA 3.0",url:"https://commons.wikimedia.org/wiki/File:Joukokylantie_Vaatovaaralla.jpg"}},LA=Math.PI/180;function NA(t){const e=Math.tan(t.vfov*LA/2),n=e*t.aspect,i=(2*t.vp[0]-1)*n,r=(1-2*t.vp[1])*e,s=-Math.atan(r);return{yaw:Math.atan(i*Math.cos(s)),pitch:s,tV:e,tH:n}}function Wx(t,e){return e==="summer"||e==="winter"?hu[e]:hu.night}function DA(){const t={...si("lowbeam"),cd:15e3,kelvin:3300,pairSpacing:1.3,height:.65},e={...si("highbeam"),on:!0,cd:32e3,kelvin:3300,pairSpacing:1.3,height:.65},n={...si("pods"),specMode:"cd",cd:45e3,kelvin:3300,beam:"driving",hAngle:14,vAngle:5,floodH:40,floodV:10,spotShare:.55,height:.5,pairSpacing:1};return[[t],[e],[e,n]]}const jx=Math.PI/180,Xx=Math.log(2),P0=t=>Math.max(.2,t)*jx*.5/Math.sqrt(Xx),L0=t=>Math.max(.5,t)*jx*.5/Math.pow(Xx,.25),IA=Math.pow(2*.9064024771,2);function du(t,e=0,n=0){const i=P0(t.hAngle),r=P0(t.vAngle),s=L0(t.floodH),o=L0(t.floodV),a=t.beam==="spot"||t.beam==="laser"?Math.max(t.spotShare,.85):t.beam==="flood"?Math.min(t.spotShare,.15):t.spotShare,l=a*(1-n),u=Math.PI*i*r,c=IA*s*o,f=a/u+(1-a)/c;let d;t.specMode==="lumen"?d=t.lumen*t.efficiency:t.specMode==="cd"?d=t.cd/f:d=t.lux1*t.lux1/f,d*=t.mode==="emark"?3103/17795:1;const p=1-e,g=d*l/u*p,y=d*(1-l)/c*p,m=g+y;return{as:i,bs:r,af:s,bf:o,Is:g,If:y,peak:m,flux:d*p,lux1:Math.sqrt(m),lux025:Math.sqrt(m/.25)}}function ep(t){let e=2e4;return t.weather==="rain"&&(e=6e3-5200*Math.pow(t.rain,.7)),t.weather==="snow"&&(e=2500-2380*Math.pow(t.snow,.6)),t.weather==="fog"&&(e=1200-1160*Math.pow(t.fog,.5)),3.912/Math.max(e,20)}function UA(t){return 3.912/ep(t)}function tp(t){const e=t/100;let n,i,r;e<=66?(n=255,i=99.4708025861*Math.log(e)-161.1195681661):(n=329.698727446*Math.pow(e-60,-.1332047592),i=288.1221695283*Math.pow(e-60,-.0755148492)),e>=66?r=255:e<=19?r=0:r=138.5177312231*Math.log(e-10)-305.0447927307;const s=c=>Math.pow(Math.min(255,Math.max(0,c))/255,2.2),o=s(n),a=s(i),l=s(r),u=.2126*o+.7152*a+.0722*l;return[o/u,a/u,l/u]}const FA=t=>.62+.75*Math.min(1,Math.max(0,(t-2700)/3800)),jt=t=>t>=1e3?`${(t/1e3).toFixed(2).replace(".",",")} km`:`${Math.round(t)} m`,cs=t=>Math.round(t).toLocaleString("sv-SE"),Fh=3.4,Pl=4.15,wr=(t,e,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)},ul=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function kA(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,s=e-i,o=r*r*(3-2*r),a=s*s*(3-2*s),l=ul(n,i),u=ul(n+1,i),c=ul(n,i+1),f=ul(n+1,i+1);return l+(u-l)*o+(c-l)*a+(l-u-c+f)*o*a}function OA(t){let e=0;return t>180&&t<700&&(e-=2.4*Math.sin(Math.PI*(t-180)/520)**2),t>=700&&t<1500&&(e+=4.2*Math.sin(Math.PI*(t-700)/800)**2),t>=1500&&(e+=.6*Math.sin((t-1500)/90)),e}function zA(t,e){return t<=Fh?0:t<=Pl?-.09*wr(Fh,Pl,t):t<=7.9?-.09-.62*(t<5.9?wr(Pl,5.9,t):1-wr(5.9,7.9,t))+(t>5.9?.09*wr(5.9,7.9,t):0):.15*wr(7.9,12,t)+.7*(kA(t*.15,e*.05)-.5)*wr(9,18,t)+.04*t*wr(10,60,t)}const Ti=(t,e)=>OA(-e)+zA(Math.abs(t),e);function BA(){const t=[0,.85,1.7,2.55,Fh,3.8,Pl,4.7,5.3,5.9,6.6,7.2,7.9,9,10.5,12,14,17,21,26,33,42,55,75,110],e=[...t.slice(1).reverse().map(a=>-a),...t],n=[];for(let a=120;a>40;a-=8)n.push(a);for(let a=40;a>-320;a-=2)n.push(a);for(let a=-320;a>=-2600;a-=5)n.push(a);const i=[],r=[];for(const a of n)for(const l of e)i.push(l,Ti(l,a),a);const s=e.length;for(let a=0;a<n.length-1;a++)for(let l=0;l<s-1;l++){const u=a*s+l,c=u+1,f=u+s,d=f+1;r.push(u,c,f,c,d,f)}const o=new Bt;return o.setAttribute("position",new vt(i,3)),o.setAttribute("uv",new vt(new Array(i.length/3*2).fill(0),2)),o.setIndex(r),o.computeVertexNormals(),o}function kh(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},o={},a=t[0].morphTargetsRelative,l=new Bt;let u=0;for(let c=0;c<t.length;++c){const f=t[c];let d=0;if(n!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(n)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(n){let c=0;const f=[];for(let d=0;d<t.length;++d){const p=t[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+c);c+=t[d].attributes.position.count}l.setIndex(f)}for(const c in s){const f=N0(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in o){const f=o[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<f;++d){const p=[];for(let y=0;y<o[c].length;++y)p.push(o[c][y][d]);const g=N0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function N0(t){let e,n,i,r=-1,s=0;for(let u=0;u<t.length;++u){const c=t[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=c.itemSize),n!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*n}const o=new e(s),a=new Ft(o,n,i);let l=0;for(let u=0;u<t.length;++u){const c=t[u];if(c.isInterleavedBufferAttribute){const f=l/n;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<n;g++){const y=c.getComponent(d,g);a.setComponent(d+f,g,y)}}else o.set(c.array,l);l+=c.count*n}return r!==void 0&&(a.gpuType=r),a}function D0(t,e=1e-4){e=Math.max(e,Number.EPSILON);const n={},i=t.getIndex(),r=t.getAttribute("position"),s=i?i.count:r.count;let o=0;const a=Object.keys(t.attributes),l={},u={},c=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,v=a.length;x<v;x++){const S=a[x],R=t.attributes[S];l[S]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const b=t.morphAttributes[S];b&&(u[S]||(u[S]=[]),b.forEach((T,P)=>{const k=new T.array.constructor(T.count*T.itemSize);u[S][P]=new T.constructor(k,T.itemSize,T.normalized)}))}const p=e*.5,g=Math.log10(1/e),y=Math.pow(10,g),m=p*y;for(let x=0;x<s;x++){const v=i?i.getX(x):x;let S="";for(let R=0,b=a.length;R<b;R++){const T=a[R],P=t.getAttribute(T),k=P.itemSize;for(let _=0;_<k;_++)S+=`${~~(P[f[_]](v)*y+m)},`}if(S in n)c.push(n[S]);else{for(let R=0,b=a.length;R<b;R++){const T=a[R],P=t.getAttribute(T),k=t.morphAttributes[T],_=P.itemSize,w=l[T],z=u[T];for(let I=0;I<_;I++){const j=f[I],$=d[I];if(w[$](o,P[j](v)),k)for(let V=0,ee=k.length;V<ee;V++)z[V][$](o,k[V][j](v))}}n[S]=o,c.push(o),o++}}const h=t.clone();for(const x in t.attributes){const v=l[x];if(h.setAttribute(x,new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),x in u)for(let S=0;S<u[x].length;S++){const R=u[x][S];h.morphAttributes[x][S]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return h.setIndex(c),h}function VA(t){return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function I0(t,e=256,n=256){const i=document.createElement("canvas");i.width=e,i.height=n;const r=i.getContext("2d");t(r,e,n);const s=new F2(i);return s.colorSpace=cn,s.anisotropy=8,s}function HA(t,e,n,i,r,s,o=14){const a=[];for(let l=0;l<t;l++){const u=l/(t-1),c=e+(n-e)*Math.pow(u,.9),f=new Kd(c,s*(1-.35*u),o,3,!0),d=f.attributes.position;for(let p=0;p<d.count;p++){const g=d.getX(p),y=d.getY(p),m=d.getZ(p),h=Math.hypot(g,m);if(h>.02){const x=Math.atan2(m,g),v=.8+.28*Math.sin(x*4+l*2.1)*Math.sin(x*7+l*.7+1.3);d.setXYZ(p,g*v,y-h/Math.max(c,.01)*.35*s*(v-.6),m*v)}}f.computeVertexNormals(),f.translate(0,i+l*r,0),a.push(f.toNonIndexed())}return kh(a)}function GA(t,e){const n=new ai,i=VA(7),r=1700,s=new We,o=new no,a=new D,l=new D,u=new D(0,1,0);let c=0;const f=new $n(.016,.02,2,6);f.translate(0,1,0);const d=Math.floor(r/25)*2,p=new m0(f,yn(t,{albedo:14702618}),d);c=0;for(let X=12;X<r;X+=25)for(const Ee of[-1,1]){const Re=Ee*(4.05+i()*.3);o.setFromAxisAngle(new D(0,0,1),(i()-.5)*.12),a.set(1,1,1),l.set(Re,Ti(Re,-X),-X),s.compose(l,o,a),p.setMatrixAt(c,s),c++}const g=new ai;g.add(p),n.add(g);const y=1,m=HA(11,2.4,.35,1.6,1.45,2.6),h=new $n(.1,.22,17,6);h.translate(0,8.5,0);const x=kh([0,1,2,3].map(X=>{const Ee=new fu(1.6-X*.2,2);Ee.scale(1.3,.55,1.2),Ee.translate(Math.sin(X*2.3)*.9,14.5+X*1.3,Math.cos(X*1.7)*.8);const Re=D0(Ee);return Re.computeVertexNormals(),Re.toNonIndexed()})),v=new $n(.13,.25,17,7);v.translate(0,8.5,0);const S=kh([0,1,2].map(X=>{const Ee=new fu(1.7-X*.3,2);Ee.scale(.9,1.3,.9),Ee.translate(Math.sin(X*2)*.5,8.5+X*1.6,Math.cos(X*2)*.5);const Re=D0(Ee);return Re.computeVertexNormals(),Re.toNonIndexed()})),R=new $n(.08,.15,11,6);R.translate(0,5.5,0);const b=Math.round(5200*y),T=Math.round(1700*y),P=Math.round(700*y),k=(X,Ee,Re)=>new m0(X,Ee,Re),_=k(m,yn(t,{albedo:2504234,snowy:.55,noise:1,fringe:1}),b),w=k(h,yn(t,{albedo:2300436}),b),z=k(x,yn(t,{albedo:2766370,snowy:.5,noise:1,fringe:2}),T),I=k(v,yn(t,{albedo:5912098,noise:.6}),T),j=k(S,yn(t,{albedo:2894356,snowy:.3,noise:1,fringe:2}),P),$=k(R,yn(t,{albedo:12104872,noise:.9}),P),V=(X,Ee,Re,Fe,N,Ze=1)=>{for(let De=0;De<Re;De++){const Ve=i()<.5?-1:1,Ne=Fe+Math.pow(i(),1.9)*60*Ze,Je=-(i()*(r+150)-30),W=Ve*Ne,C=N[0]+i()*(N[1]-N[0]);l.set(W,Ti(W,Je)-.2,Je),o.setFromAxisAngle(u,i()*6.28);const M=C*(.8+i()*.35);a.set(M,C,M),s.compose(l,o,a),X.setMatrixAt(De,s),Ee.setMatrixAt(De,s)}};V(_,w,b,8.6,[.75,1.35]),V(z,I,T,9.5,[.9,1.35]),V(j,$,P,8.2,[.7,1.1],.4);const ee=new ai;ee.add(_,w,z,I,j,$),n.add(ee);const L=new ai,J=new $n(.035,.035,2.2,6);J.translate(0,1.1,0);const Q=yn(t,{albedo:4473924,gloss:.02});for(const X of[100,200,300,500,750]){const Ee=I0((Ze,De,Ve)=>{Ze.fillStyle="rgba(14,64,150,1)",Ze.fillRect(0,0,De,Ve),Ze.strokeStyle="#ffffff",Ze.lineWidth=14,Ze.strokeRect(16,16,De-32,Ve-32),Ze.fillStyle="#ffffff",Ze.font="700 120px Arial",Ze.textAlign="center",Ze.textBaseline="middle",Ze.fillText(String(X),De/2,Ve/2-8),Ze.font="600 46px Arial",Ze.fillText("meter",De/2,Ve/2+76)},256,256),Re=Ti(5,-X),Fe=new rt(new Nn(.7,.7),yn(t,{albedo:16777215,map:Ee}));Fe.position.set(5,Re+2,-X),Fe.rotation.y=.12;const N=new rt(J,Q);N.position.set(5,Re,-X-.03),L.add(Fe,N)}n.add(L);const ae=I0((X,Ee,Re)=>{X.clearRect(0,0,Ee,Re);const Fe=N=>{X.beginPath(),X.moveTo(Ee/2,10+N*1.9),X.lineTo(Ee-8-N*1.6,Re-30-N),X.lineTo(8+N*1.6,Re-30-N),X.closePath()};X.lineJoin="round",Fe(0),X.fillStyle="#ffffff",X.fill(),Fe(6),X.fillStyle="#d0101a",X.fill(),Fe(34),X.fillStyle="#f7c600",X.fill(),X.save(),X.translate(Ee/2-70,Re-170),X.scale(1.4,1.4),X.fillStyle="#111",X.beginPath(),X.moveTo(10,40),X.bezierCurveTo(14,26,40,20,62,24),X.lineTo(76,18),X.lineTo(84,22),X.lineTo(98,30),X.lineTo(100,38),X.lineTo(90,38),X.lineTo(82,34),X.lineTo(78,46),X.lineTo(78,68),X.lineTo(73,68),X.lineTo(72,50),X.lineTo(66,50),X.lineTo(66,68),X.lineTo(61,68),X.lineTo(60,50),X.lineTo(30,50),X.lineTo(28,68),X.lineTo(23,68),X.lineTo(22,52),X.lineTo(18,52),X.lineTo(17,68),X.lineTo(12,68),X.lineTo(11,50),X.closePath(),X.fill(),X.beginPath(),X.moveTo(78,18),X.lineTo(72,6),X.lineTo(76,10),X.lineTo(78,3),X.lineTo(80,10),X.lineTo(84,4),X.lineTo(83,16),X.closePath(),X.fill(),X.restore()}),ge=Ti(5.2,-300),Oe=new rt(new Nn(1.25,1.25),yn(t,{albedo:16777215,map:ae}));Oe.position.set(5.2,ge+2.1,-300),Oe.rotation.y=.1;const q=new rt(J,Q);q.position.set(5.2,ge,-300.03),n.add(Oe,q);const ne=new Ox;ne.moveTo(-.95,0),ne.quadraticCurveTo(0,.1,.95,0),ne.lineTo(.9,1.9),ne.lineTo(-.9,1.9),ne.closePath();const de=new Jd(ne,12);de.rotateX(-Math.PI/2);const fe=new wt({uniforms:{uGlow:{value:.01}},side:Dn,vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform float uGlow; varying vec2 vP;
      void main(){
        // dark glossy paint reflecting a hint of the lit scene ahead; brighter toward the front edge and the centre crease
        float front = smoothstep(1.9, 0.0, vP.y);
        float crease = exp(-pow(vP.x / 0.22, 2.0)) * 0.35 + exp(-pow((abs(vP.x) - 0.62) / 0.05, 2.0)) * 0.5;
        float edge = smoothstep(0.08, 0.0, vP.y - 0.05 * (1.0 - vP.x * vP.x));
        float l = uGlow * (0.04 + 0.5 * pow(1.0 - front, 2.5) + crease * (1.0 - front) * 0.6 + edge * 1.4);
        gl_FragColor = vec4(vec3(l) * vec3(0.92, 0.95, 1.0), 1.0);
      }`}),Le=new rt(de,fe);return Le.position.set(1.75,.88,-.3),Le.name="hood",n.add(Le),{group:n,snowPoles:g,forest:ee,hood:Le,signs:L}}function WA(t){const e=(i,r,s,o,a,l)=>{const u=new rt(new $n(i,i*.85,r,8),l);return u.position.set(s,o,a),u},n=i=>{const r=new ai,s=yn(t,{albedo:855570}),o=yn(t,{albedo:4864560});r.add(e(.17,.62,0,1.15,0,s)),r.add(e(.07,.85,-.09,.43,0,s)),r.add(e(.07,.85,.09,.43,0,s)),r.add(e(.05,.6,-.23,1.15,0,s)),r.add(e(.05,.6,.23,1.15,0,s));const a=new rt(new Uu(.11,10,8),o);if(a.position.y=1.62,r.add(a),i){const l=yn(t,{albedo:12118064}),u=new rt(new $n(.18,.18,.05,10),l);u.position.y=1.05,r.add(u);const c=u.clone();c.position.y=1.25,r.add(c);const f=new rt(new $n(.075,.075,.05,8),l);f.position.set(-.09,.25,0),r.add(f)}return r};return{pedestrian:n(!1),pedestrianVest:n(!0)}}const pu=1.75,U0=Math.PI/180,qc=t=>{const e=Math.hypot(...t);return[t[0]/e,t[1]/e,t[2]/e]},F0=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],$c=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];function Oh(t,e,n=12){const i=[];for(const r of t){if(!r.on)continue;const s=e[r.id]??0,o=du(r,.85*s,.7*s),a=r.tilt*U0,l=r.yaw*U0,u=qc([Math.sin(l)*Math.cos(a),Math.sin(a),-Math.cos(l)*Math.cos(a)]),c=qc(F0(u,[0,1,0])),f=qc(F0(c,u)),d=tp(r.kelvin),p=FA(r.kelvin)*(r.mount==="roof"?1.25:1),g=r.beam==="lowbeam";for(const y of r.pair?[-r.pairSpacing/2,r.pairSpacing/2]:[0]){if(i.length>=n)return i;i.push({pos:[pu+y,r.height,PA[r.mount]??-2.2],fwd:u,right:c,up:f,rgb:d,as:o.as,bs:o.bs,af:o.af,bf:o.bf,Is:g?r.cd*(1-.85*s):o.Is,If:g?0:o.If,low:g,glare:p})}}return i}function jA(t,e){const n=[e[0]-t.pos[0],e[1]-t.pos[1],e[2]-t.pos[2]],i=Math.max(Math.hypot(...n),.05),r=[n[0]/i,n[1]/i,n[2]/i],s=$c(r,t.fwd);if(s<.03)return{I:0,d:i};const o=$c(r,t.right),a=$c(r,t.up),l=Math.atan2(o,s),u=Math.atan2(a,Math.hypot(o,s));if(t.low){const p=-.01+Math.min(Math.max(l*.268,0),.0125),g=.78*Math.exp(-(((l-.035)/.16)**2))+.22*Math.exp(-((l/.62)**2)),y=u-p,m=y<0?Math.exp(-((Math.max(-y-.012,0)/.038)**2))*.86+.14*Math.exp(-((y/.16)**2)):Math.exp(-((y/.0035)**2))*.98+.02*Math.exp(-((y/.12)**2));return{I:t.Is*g*m,d:i}}const c=Math.exp(-((l/t.as)**2+(u/t.bs)**2)),f=Math.exp(-((l/t.af)**4+(u/t.bf)**4)),d=.006*Math.exp(-(l*l/.7+u*u/.05))*(u>0?Math.exp(-u/.04):1);return{I:t.Is*c+t.If*(f+d),d:i}}function Ll(t,e,n){let i=0;for(const r of t){const{I:s,d:o}=jA(r,e);i+=s/(o*o)*Math.exp(-n*o)}return i}function Kc(t,e,n){for(let i=3e3;i>=2;i-=i>400?5:1){const r=Ti(pu,-i);for(const s of[.3,.6,1])if(Ll(t,[pu,r+s,-i],n)>=e)return i}return 0}const Gi=1.75,xi=Gi-.37,k0=Math.PI/180,Zc="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";class XA{constructor(e){this.canvas=e,this.scene=new Gc,this.partScene=new Gc,this.cam=new Mn(42,1,.1,4e3),this.top=new Lh(-1,1,1,-1,1,2e3),this.mirror=new Mn(42,1,.1,4e3),this.lumBuf=new Float32Array(48*27*4),this.autoK=1,this.lavg=.1,this.frameN=0,this.dynScale=1,this.slowCount=0,this.snap=3,this.fsqScene=new Gc,this.fsqCam=new Lh(-1,1,1,-1,0,1),this.cfg=null,this.cover={},this.look={yaw:0,pitch:0},this.topZoom=900,this.w=1,this.h=1,this.pr=1,this.raf=0,this.last=performance.now(),this.frames=0,this.fpsT=performance.now(),this.fps=60,this.msAvg=16,this.t0=performance.now(),this.disposed=!1,this.quality="high",this.nightTex=[],this.nightReady=0,this.photoTex={},this.photo=null,this.animals={},this.panelInset=0,this.maxDpr=1.5,this.paused=!1,this.bottomInset=0,this.renderer=new R2({canvas:e,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.outputColorSpace=Ii,this.renderer.toneMapping=Ci,this.renderer.autoClear=!0;const n=()=>Array.from({length:Rl},()=>new D),i=()=>Array.from({length:Rl},()=>new pt);this.shared={uLN:{value:0},uLPos:{value:n()},uLFwd:{value:n()},uLRight:{value:n()},uLUp:{value:n()},uLCol:{value:n()},uLBeam:{value:i()},uLI:{value:i()},uSigma:{value:0},uAmbient:{value:.004/Math.PI},uEye:{value:new D},uSnowAmt:{value:0},uTop:{value:0},uTopH:{value:1}};const r=new vA,s=a=>{const l=r.load(`./tex/${a}.jpg`);return l.wrapS=l.wrapT=ru,l.anisotropy=8,l.colorSpace=cn,l};this.groundMat=xA(this.shared,{asphalt:s("asphalt"),gravel:s("gravel"),snow:s("snow")}),this.ground=new rt(BA(),this.groundMat),this.ground.frustumCulled=!1,this.scene.add(this.ground),this.world=GA(this.shared),this.scene.add(this.world.group),this.targets=WA(this.shared);for(const a of Object.values(this.targets))a.visible=!1,this.scene.add(a);this.eyeMat=wA(this.shared);for(const a of EA){const l=Us[a],u=r.load(l.src,()=>{this.snap=2});u.colorSpace=cn,u.anisotropy=4;const c=l.shoulderM/l.shoulderPx,f=l.W*c,d=l.H*c,p=(l.H-l.groundPx)*c,g=new Nn(f,d).translate(0,d/2-p,0),y=new ai;y.add(new rt(g,SA(this.shared,u,l.albedo/l.meanLin,l.sat)));const m=new rt(new Nn(f*.85,f*.32).rotateX(-Math.PI/2),MA());m.position.y=.015,m.renderOrder=1,y.add(m);const h=new Float32Array(l.eyes.length*3),x=new Float32Array(l.eyes.length);l.eyes.forEach(([R,b,T],P)=>{h.set([(R/l.W-.5)*f,(1-b/l.H)*d-p,.06],P*3),x[P]=T});const v=new Bt;v.setAttribute("position",new Ft(h,3)),v.setAttribute("aK",new Ft(x,1));const S=new S0(v,this.eyeMat);S.frustumCulled=!1,S.renderOrder=2,y.add(S),y.visible=!1,this.scene.add(y),this.animals[a]={g:y,eyes:S}}this.carTop=new rt(new Nn(1.85,4.6).rotateX(-Math.PI/2),new jd({color:16777215})),this.carTop.position.set(Gi,.05,-0),this.carTop.visible=!1,this.scene.add(this.carTop),this.sky=new rt(new Uu(3e3,32,16),new wt({side:en,depthWrite:!1,uniforms:{uOvercast:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_Position = p.xyww; }",fragmentShader:`${$s}
        uniform float uOvercast; varying vec3 vD;
        void main(){
          float e = max(vD.y, 0.0);
          vec3 zen = vec3(0.00004, 0.00006, 0.00014), hor = vec3(0.00045, 0.00042, 0.0005);
          vec3 c = mix(hor, zen, pow(e, 0.45));
          vec2 sp = vD.xz / (vD.y + 0.25) * 260.0;
          float st = step(0.9965, hash12(floor(sp))) * smoothstep(0.03, 0.2, e);
          c += st * vec3(0.012, 0.013, 0.016) * pow(hash12(floor(sp) + 3.1), 3.0) * (1.0 - uOvercast);
          c = mix(c, vec3(0.0009), uOvercast);
          gl_FragColor = vec4(c, 1.0);
        }`})),this.sky.renderOrder=-10,this.scene.add(this.sky),this.photoMat=_A(this.shared),this.photoMesh=new rt(new Nn(2,2),this.photoMat),this.photoMesh.frustumCulled=!1,this.photoMesh.renderOrder=-20,this.photoMesh.visible=!1,this.scene.add(this.photoMesh),this.nightMat=yA(this.shared),this.nightMesh=new rt(new Nn(2,2),this.nightMat),this.nightMesh.frustumCulled=!1,this.nightMesh.renderOrder=-20,this.nightMesh.visible=!1,this.scene.add(this.nightMesh);{const a=hu.night,l=(g,y=!0)=>{const m=r.load(g,()=>{this.nightReady++,this.snap=3});return m.colorSpace=cn,m.generateMipmaps=y,m.minFilter=Jt,m};this.nightTex=[...a.refs.map(g=>l(g)),l(a.mask,!1)];const u=this.nightMat.uniforms;u.tR0.value=this.nightTex[0],u.tR1.value=this.nightTex[1],u.tR2.value=this.nightTex[2],u.tMask.value=this.nightTex[3];const[c,f,d]=DA().map(g=>Oh(g,{},Is)),p=[...c.map(g=>[g,[1,0,0]]),...f.map(g=>[g,[0,1,1]]),...d.slice(f.length).map(g=>[g,[0,0,1]])];p.slice(0,Is).forEach(([g,y],m)=>{u.uRPos.value[m].set(...g.pos),u.uRFwd.value[m].set(...g.fwd),u.uRRight.value[m].set(...g.right),u.uRUp.value[m].set(...g.up),u.uRBeam.value[m].set(g.as,g.bs,g.af,g.bf),u.uRI.value[m].set(g.Is,g.If,g.low?1:0,1),u.uRSet.value[m].set(...y)}),u.uRN.value=Math.min(Is,p.length),u.uRefCol.value.set(...tp(4300)),u.uK.value=a.K??.2}for(const a of Object.values(hu)){if(a.kind==="night")continue;const l={img:null,mask:null,ready:0},u=()=>{l.ready++,this.snap=3};l.img=r.load(a.src,u),l.img.colorSpace=cn,l.img.anisotropy=4,l.mask=r.load(a.mask,u),l.mask.colorSpace=cn,l.mask.generateMipmaps=!1,l.mask.minFilter=Jt,this.photoTex[a.id]=l}const o=YA(this.shared);this.partMat=o(!1),this.rainMat=o(!0),this.fogMat=new wt({uniforms:{...this.shared,uDepth:{value:null},uInvProj:{value:new We},uCamWorld:{value:new We},uCam:{value:new D},uSteps:{value:24},uScatter:{value:1},uFrame:{value:0},uSkyAmb:{value:6e-4}},vertexShader:Zc,fragmentShader:`${mr}
        uniform sampler2D uDepth; uniform mat4 uInvProj; uniform mat4 uCamWorld; uniform vec3 uCam; uniform int uSteps; uniform float uScatter; uniform float uFrame; uniform float uSkyAmb;
        varying vec2 vUv;
        void main(){
          float z = texture2D(uDepth, vUv).x;
          vec4 ndc = vec4(vUv * 2.0 - 1.0, z * 2.0 - 1.0, 1.0);
          vec4 vp = uInvProj * ndc; vp /= vp.w;
          vec3 wp = (uCamWorld * vec4(vp.xyz, 1.0)).xyz;
          vec3 rd = normalize(wp - uCam);
          float tS = z >= 0.99999 ? 1e5 : length(wp - uCam);
          float T = min(tS, 420.0);
          float jit = fract(52.9829189 * fract(dot(gl_FragCoord.xy + uFrame * 5.588, vec2(0.06711056, 0.00583715))));
          vec3 acc = vec3(0.0);
          float N = float(uSteps);
          for (int k = 0; k < 64; k++) {
            if (k >= uSteps) break;
            float s = (float(k) + jit) / N;
            float t = T * s * s;
            float dt = T * 2.0 * s / N;
            vec3 P = uCam + rd * t;
            vec3 e = vec3(0.0);
            for (int i = 0; i < MAXL; i++) {
              if (i >= uLN) break;
              float d; float I = beamI(i, P - uLPos[i], d);
              if (I <= 0.0) continue;
              d = max(d, 0.35);
              e += uLCol[i] * (I / (d * d) * exp(-uSigma * d) * uLI[i].w);
            }
            acc += e * exp(-uSigma * t) * dt;
          }
          vec3 ins = acc * uSigma * uScatter / (4.0 * PI);
          float trans = exp(-uSigma * min(tS, 1800.0));
          ins += uSkyAmb * (1.0 - trans);
          gl_FragColor = vec4(ins, trans);
        }`,depthTest:!1,depthWrite:!1}),this.compMat=new wt({uniforms:{tScene:{value:null},tFog:{value:null},tPart:{value:null},uExposure:{value:1},uFogOn:{value:1},uRaw:{value:0},uTime:{value:0},uRes:{value:new Me},uSoft:{value:0}},vertexShader:Zc,fragmentShader:`${$s}
        uniform sampler2D tScene, tFog, tPart; uniform float uExposure, uFogOn, uRaw, uTime, uSoft; uniform vec2 uRes; varying vec2 vUv;
        vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
        void main(){
          vec3 c = texture2D(tScene, vUv).rgb;
          if (uRaw > 0.5) { gl_FragColor = vec4(pow(clamp(c,0.,1.), vec3(1.0/2.2)), 1.0); return; }
          // lens: lateral chromatic aberration toward the edges
          vec2 qc = vUv - 0.5; float ca = 0.0035 * dot(qc, qc) * 4.0;
          c.r = texture2D(tScene, 0.5 + qc * (1.0 + ca)).r; c.b = texture2D(tScene, 0.5 + qc * (1.0 - ca)).b;
          // optical softness matching the (upscaled) photo so rendered objects don't look pasted in
          if (uSoft > 0.0) c = mix(c, textureLod(tScene, vUv, 1.0).rgb, uSoft);
          // cheap glow for very bright retro-reflectors
          // bloom / eye glare from the mip chain (bright reflectors, signs)
          vec3 b1 = textureLod(tScene, vUv, 2.5).rgb, b2 = textureLod(tScene, vUv, 4.0).rgb, b3 = textureLod(tScene, vUv, 5.5).rgb;
          float thr = 1.5 / max(uExposure, 0.05);
          c += max(b1 - thr, 0.0) * 0.1 + max(b2 - thr * 0.6, 0.0) * 0.05 + max(b3 - thr * 0.4, 0.0) * 0.035;
          c += (b2 * 0.012 + b3 * 0.02);   // veiling glare of the lens
          if (uFogOn > 0.5) { vec4 f = texture2D(tFog, vUv); c = c * f.a + f.rgb; }
          c += texture2D(tPart, vUv).rgb;
          c *= uExposure;
          // mild perceptual compression (scotopic → mesopic dynamic range) before filmic curve
          c = c / (1.0 + 0.04 * c);
          // mesopic vision: colours fade and shift slightly blue at low luminance
          float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
          float sat = smoothstep(0.02, 0.6, lum);
          c = mix(vec3(lum) * vec3(0.9, 0.97, 1.12), c, 0.35 + 0.65 * sat);
          vec3 o = aces(c);
          o = pow(o, vec3(1.0 / 2.2));
          vec2 q = vUv - 0.5; o *= 1.0 - dot(q, q) * 0.5;
          // sensor noise: luminance grain strongest in the shadows + a little chroma noise
          float ol = dot(o, vec3(0.299, 0.587, 0.114));
          vec2 gp = gl_FragCoord.xy + fract(uTime * 7.31) * vec2(91.7, 37.3);
          float g1 = hash12(gp) + hash12(gp + 17.0) - 1.0;
          vec3 chroma = vec3(hash12(gp + 5.1), hash12(gp + 9.7), hash12(gp + 13.3)) - 0.5;
          float amp = 0.045 * pow(1.0 - ol, 3.0) + 0.008;
          o += g1 * amp + chroma * amp * 0.35;
          o = max(o, 0.0) + 0.006;   // a camera never renders pure black
          gl_FragColor = vec4(o, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.lumMat=new wt({uniforms:{tScene:{value:null},tFog:{value:null},tPart:{value:null},uFogOn:{value:0}},vertexShader:Zc,fragmentShader:`uniform sampler2D tScene, tFog, tPart; uniform float uFogOn; varying vec2 vUv;
        void main(){ vec3 c = texture2D(tScene, vUv).rgb; if (uFogOn > 0.5) { vec4 f = texture2D(tFog, vUv); c = c * f.a + f.rgb; }
          c += texture2D(tPart, vUv).rgb; float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); gl_FragColor = vec4(min(l, 50.0), 0., 0., 1.); }`,depthTest:!1,depthWrite:!1}),this.lumRT=new In(48,27,{type:Kn,depthBuffer:!1}),this.fsq=new rt(new Nn(2,2),this.fogMat),this.fsq.frustumCulled=!1,this.fsqScene.add(this.fsq),this.buildParticles("high"),this.allocTargets(),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}buildParticles(e){for(const r of[this.snowNear,this.snowFar,this.snowStreak,this.rainNear,this.rainFar])r&&(this.partScene.remove(r),r.geometry.dispose());const n=e==="high"?1:.35,i=(r,s,o,a)=>{const l=new Bt,u=a?r*2:r,c=new Float32Array(u*3),f=new Float32Array(u),d=new Float32Array(u);for(let y=0;y<r;y++){const m=[Math.random(),Math.random(),Math.random()],h=Math.random();for(let x=0;x<(a?2:1);x++){const v=a?y*2+x:y;c.set(m,v*3),f[v]=x,d[v]=h}}l.setAttribute("position",new Ft(c,3)),l.setAttribute("aEnd",new Ft(f,1)),l.setAttribute("aRnd",new Ft(d,1));const p=(a?this.rainMat:this.partMat).clone();for(const y of Object.keys(this.shared))p.uniforms[y]=this.shared[y];p.uniforms.uBox.value=new D(...s),p.uniforms.uOrigin.value=new D(...o);const g=a?new I2(l,p):new S0(l,p);return g.frustumCulled=!1,g.userData.n=u,this.partScene.add(g),g};this.snowNear=i(Math.round(26e3*n),[14,6,22],[xi-7,0,-23],!1),this.snowFar=i(Math.round(3e4*n),[40,10,90],[xi-20,0,-110],!1),this.snowStreak=i(Math.round(22e3*n),[16,6,30],[xi-8,0,-31],!0),this.snowStreak.material.uniforms.uSnowLine.value=1,this.rainNear=i(Math.round(9e3*n),[14,6,22],[xi-7,0,-23],!0),this.rainFar=i(Math.round(12e3*n),[40,10,90],[xi-20,0,-110],!0)}allocTargets(){const e=Math.max(2,Math.floor(this.w*this.pr)),n=Math.max(2,Math.floor(this.h*this.pr));for(const s of[this.sceneRT,this.reflRT,this.fogRT,this.partRT])s==null||s.dispose();const i={type:Qs,minFilter:Jt,magFilter:Jt};this.sceneRT=new In(e,n,{...i,minFilter:Zi,generateMipmaps:!0,depthTexture:new Yd(e,n,fr)});const r=this.quality==="high"?2:4;this.fogRT=new In(Math.ceil(e/r),Math.ceil(n/r),{...i,depthBuffer:!1}),this.reflRT=new In(Math.ceil(e/2),Math.ceil(n/2),i),this.partRT=new In(e,n,{...i,depthBuffer:!1})}resize(e,n){this.w=e,this.h=n,this.pr=(this.quality==="high"?Math.min(window.devicePixelRatio||1,this.maxDpr):Math.min(.75,this.maxDpr))*this.dynScale,this.renderer.setPixelRatio(1),this.renderer.setSize(Math.floor(e*this.pr),Math.floor(n*this.pr),!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.cam.aspect=e/n,this.cam.fov=e/n<1?58:36,this.cam.updateProjectionMatrix(),this.allocTargets()}setConfig(e){const n=this.quality;this.cfg&&(this.cfg.scene.weather!==e.scene.weather||this.cfg.scene.view!==e.scene.view)&&(this.snap=2),this.cfg=e,this.quality=e.scene.quality,n!==this.quality&&(this.dynScale=1,this.buildParticles(this.quality),this.resize(this.w,this.h))}resetSnow(){this.cover={}}panelW(){return this.panelInset}topPortrait(){return this.h>this.w}topCarPx(){return this.bottomInset+48}topUpp(){return this.topPortrait()?this.topZoom/Math.max(200,this.h-this.topCarPx()-110):this.topZoom/Math.max(200,this.w-this.panelW()-90)}topScreenX(e){return 60+e/this.topUpp()}topScreenY(e){return this.h-this.topCarPx()-e/this.topUpp()}topLat(){return Math.max(12,this.topZoom*.075)}setupPhotoCam(e){const{yaw:n,pitch:i,tV:r,tH:s}=NA(e),o=this.w/this.h,a=Math.min(r,s/o)*.93,l=Math.max(0,Math.atan(r)-Math.atan(a))*.9,u=Math.max(0,Math.atan(s)-Math.atan(a*o))*.9,c=Math.max(-u,Math.min(u,-n));this.look.yaw=Math.max(-u-c,Math.min(u-c,this.look.yaw)),this.look.pitch=Math.max(-l,Math.min(l,this.look.pitch));const f=this.cam;f.fov=2*Math.atan(a)*180/Math.PI,f.aspect=o,f.updateProjectionMatrix(),f.position.set(e.camDx!==void 0?Gi+e.camDx:xi,e.camH,0),f.rotation.set(i+this.look.pitch,n+c+this.look.yaw,0,"YXZ"),f.updateMatrixWorld();const d=new We().makeRotationFromEuler(new ci(i,n,0,"YXZ")),p=e.kind==="night",g=(p?this.nightMat:this.photoMat).uniforms;if(g.uPRot.value.setFromMatrix4(d).transpose(),g.uPTan.value.set(s,r),g.uInvProj.value.copy(f.projectionMatrixInverse),g.uCamWorld.value.copy(f.matrixWorld),g.uViewProj.value.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),g.uCam.value.copy(f.position),g.uWallL.value=f.position.x+e.wallL,g.uWallR.value=f.position.x+e.wallR,p){g.uReady.value=this.nightReady>=4?1:0,g.uCarRef.value.set(Gi,0,-12),g.uTexel.value.set(1/800,1/532);return}g.uBlack.value=e.black,g.uAlbK.value=e.albK,g.uTreeK.value=e.treeK,g.uCrest.value=e.crest,g.uSat.value=e.sat,g.uWinter.value=e.id==="winter"?1:0;const y=this.photoTex[e.id];g.tPhoto.value=y.img,g.tMask.value=y.mask,g.uReady.value=y.ready>=2?1:0}updateLights(e){const n=this.cfg,i=n.scene,r=this.shared,s=i.weather==="snow"?i.snow:0;for(const a of n.lights){let l=this.cover[a.id]??0;a.on&&s>0&&!a.heated?l+=e*(s*(.25+i.speed/110)*(.6+i.wind/25))/70:l-=e*(a.heated&&a.on?.08:.004),l=Math.min(.92,Math.max(0,l)),this.cover[a.id]=l}const o=Oh(n.lights,this.cover,Rl);o.forEach((a,l)=>{r.uLPos.value[l].set(...a.pos),r.uLFwd.value[l].set(...a.fwd),r.uLRight.value[l].set(...a.right),r.uLUp.value[l].set(...a.up),r.uLCol.value[l].set(...a.rgb),r.uLBeam.value[l].set(a.as,a.bs,a.af,a.bf),r.uLI.value[l].set(a.Is,a.If,a.low?1:0,a.glare)}),r.uLN.value=o.length,r.uSigma.value=ep(i)}loop(e){var r;if(this.disposed)return;if(this.raf=requestAnimationFrame(this.loop),document.hidden){this.last=e;return}const n=Math.min(.1,(e-this.last)/1e3);if(this.last=e,this.frames++,e-this.fpsT>500&&(this.fps=this.frames*1e3/(e-this.fpsT),this.frames=0,this.fpsT=e,(r=this.onStats)==null||r.call(this,{fps:this.fps,cover:{...this.cover},ms:this.msAvg,scale:this.dynScale}),this.cfg&&!document.hidden&&!location.search.includes("fixedres")&&(this.fps<30?this.slowCount++:this.slowCount=0,this.slowCount>=2&&this.dynScale>.5?(this.dynScale=Math.max(.5,this.dynScale*.82),this.slowCount=0,this.resize(this.w,this.h)):this.fps>58&&this.dynScale<1&&(this.dynScale=Math.min(1,this.dynScale*1.08),this.resize(this.w,this.h)))),!this.cfg)return;const i=performance.now();this.render(n,(e-this.t0)/1e3),this.msAvg=this.msAvg*.9+(performance.now()-i)*.1}render(e,n){var b,T,P,k;const i=this.cfg,r=i.scene,s=this.shared,o=this.renderer;this.updateLights(e);const a=r.view==="top",l=r.view==="photo";this.photo=l?Wx(r.weather,r.photo):null;const u=r.weather==="snow"?.35+.65*r.snow:0;s.uSnowAmt.value=u,this.groundMat.uniforms.uWet.value=r.weather==="rain"?.45+.55*r.rain:r.weather==="fog"?.25:0,this.sky.material.uniforms.uOvercast.value=r.weather==="clear"?0:1,this.world.snowPoles.visible=r.snowPoles,this.world.signs.visible=r.distSigns,this.world.forest.visible=!a,this.world.hood.visible=!a,this.world.group.visible=!l,this.ground.visible=!l,this.photoMesh.visible=l&&((b=this.photo)==null?void 0:b.kind)!=="night",this.nightMesh.visible=l&&((T=this.photo)==null?void 0:T.kind)==="night",this.carTop.visible=a,this.sky.visible=!a&&!l;for(const[_,w]of Object.entries(this.targets))w.visible=r.target===_,w.position.set(r.targetSide,l?0:Ti(r.targetSide,-r.targetDist),-r.targetDist);s.uTop.value=a?1:0;for(const _ of r.animals??[]){const w=this.animals[_.id];w&&(w.g.visible=_.on&&!a,w.g.position.set(_.side,l?0:Ti(_.side,-_.dist),-_.dist))}if(a){const _=this.topUpp(),w=this.topLat();if(this.topPortrait()){const z=this.topCarPx();this.top.left=-w,this.top.right=w,this.top.top=(this.h-z)*_,this.top.bottom=-z*_,this.top.position.set(Gi,600,0),this.top.up.set(0,0,-1),this.top.lookAt(Gi,0,0),this.top.updateProjectionMatrix()}else this.top.left=-60*_,this.top.right=(this.w-60)*_,this.top.top=w,this.top.bottom=-w,this.top.position.set(Gi,600,0),this.top.up.set(-1,0,0),this.top.lookAt(Gi,0,0),this.top.updateProjectionMatrix();s.uEye.value.set(0,600,0),o.setRenderTarget(this.sceneRT),o.setClearColor(0,1),o.clear(),o.render(this.scene,this.top),this.compMat.uniforms.uRaw.value=1,this.compMat.uniforms.tScene.value=this.sceneRT.texture,this.fsq.material=this.compMat,o.setRenderTarget(null),o.render(this.fsqScene,this.fsqCam);return}this.compMat.uniforms.uRaw.value=0;const c=this.cam,f=this.look.yaw,d=this.look.pitch-.03;this.photo?(this.setupPhotoCam(this.photo),this.photoMat.uniforms.uWet.value=r.weather==="rain"?.45+.55*r.rain:r.weather==="fog"?.25:0,this.nightMat.uniforms.uWet.value=r.weather==="rain"?.35+.5*r.rain:0,this.photoMat.uniforms.uOvercast.value=r.weather==="clear"?0:1):(c.fov=this.w/this.h<1?58:36,c.aspect=this.w/this.h,c.updateProjectionMatrix(),c.rotation.order="XYZ",c.position.set(xi,r.eye,0),c.lookAt(xi+Math.sin(f)*100,r.eye+Math.tan(d)*100,-Math.cos(f)*100),c.updateMatrixWorld()),s.uEye.value.copy(c.position);for(const _ of Object.values(this.animals))_.g.rotation.y=Math.atan2(c.position.x-_.g.position.x,c.position.z-_.g.position.z);const p=((P=this.photo)==null?void 0:P.kind)==="night"?.45:1;for(const _ of Object.values(this.animals))_.g.children[0].material.uniforms.uGain.value=p;if(this.eyeMat.uniforms.uGain.value=p,this.eyeMat.uniforms.uPxRad.value=2*Math.tan(c.fov*k0/2)/(this.h*this.pr),this.world.hood.position.y=Math.min(r.eye-.32,.86+(r.eye-1.2)*.8),this.world.hood.material.uniforms.uGlow.value=Math.min(.03,this.lavg*.035),this.groundMat.uniforms.uWet.value>0&&!l){const _=this.mirror;_.copy(c),_.position.set(c.position.x,-c.position.y,c.position.z),_.lookAt(xi+Math.sin(f)*100,-(r.eye+Math.tan(d)*100),-Math.cos(f)*100),_.updateMatrixWorld(),_.updateProjectionMatrix(),this.ground.visible=!1,this.world.hood.visible=!1,this.sky.visible=!1,this.quality==="low"&&(this.world.forest.visible=!1),s.uEye.value.copy(_.position),o.setRenderTarget(this.reflRT),o.setClearColor(0,1),o.clear(),o.render(this.scene,_),s.uEye.value.copy(c.position),this.ground.visible=!0,this.world.hood.visible=!0,this.sky.visible=!0,this.world.forest.visible=!0;const w=this.groundMat.uniforms.uReflMat.value;w.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),w.multiply(_.projectionMatrix).multiply(_.matrixWorldInverse),this.groundMat.uniforms.uReflTex.value=this.reflRT.texture}o.setRenderTarget(this.sceneRT),o.setClearColor(0,1),o.clear(),o.render(this.scene,c);const y=s.uSigma.value>4e-4;if(y){const _=this.fogMat.uniforms;_.uDepth.value=this.sceneRT.depthTexture,_.uInvProj.value.copy(c.projectionMatrixInverse),_.uCamWorld.value.copy(c.matrixWorld),_.uCam.value.copy(c.position),_.uSteps.value=this.quality==="high"?28:12,_.uScatter.value=r.weather==="snow"?.28:r.weather==="rain"?.13:.22,_.uFrame.value=(_.uFrame.value+1)%64,_.uSkyAmb.value=7e-4,this.fsq.material=this.fogMat,o.setRenderTarget(this.fogRT),o.render(this.fsqScene,this.fsqCam)}o.setRenderTarget(this.partRT),o.setClearColor(0,1),o.clear();const m=r.weather==="rain",h=r.weather==="snow",x=r.speed/3.6,v=this.h*this.pr/2/Math.tan(c.fov*k0/2);for(const _ of[this.snowNear,this.snowFar,this.snowStreak,this.rainNear,this.rainFar]){const w=_===this.rainNear||_===this.rainFar,z=w||_===this.snowStreak,I=w?m:h;if(_.visible=I,!I)continue;const j=w?r.rain:r.snow,$=_.userData.n;_.geometry.setDrawRange(0,Math.floor($*(.15+.85*j)/(z?2:1))*(z?2:1));const V=_.material.uniforms;V.uTime.value=n,V.uVel.value.set(w?r.wind*.35:r.wind,w?-8.5:-1.1,x),V.uShutter.value=w?.022:.012,V.uDepth.value=this.sceneRT.depthTexture,V.uRes.value.set(this.w*this.pr,this.h*this.pr),V.uFocal.value=v,V.uNear.value=c.near,V.uFar.value=c.far,V.uGain.value=w?.08:1}if((m||h)&&o.render(this.partScene,c),this.frameN++,this.frameN%15===1||this.snap>0){const _=this.lumMat.uniforms;_.tScene.value=this.sceneRT.texture,_.tFog.value=this.fogRT.texture,_.tPart.value=this.partRT.texture,_.uFogOn.value=y?1:0,this.fsq.material=this.lumMat,o.setRenderTarget(this.lumRT),o.render(this.fsqScene,this.fsqCam);try{o.readRenderTargetPixels(this.lumRT,0,0,48,27,this.lumBuf);let w=0,z=0;for(let I=0;I<27;I++)for(let j=0;j<48;j++){const $=Math.exp(-(((j-24)/18)**2+((I-15)/9)**2));w+=this.lumBuf[(I*48+j)*4]*$,z+=$}this.lavg=w/z}catch{}}const S=r.autoExposure?Math.min(2.5,Math.max(.06,Math.pow(.12/Math.max(this.lavg,1e-4),.6))):1;this.snap>0?(this.snap--,this.autoK=S):this.autoK+=(S-this.autoK)*Math.min(1,e*2.5);const R=this.compMat.uniforms;R.tScene.value=this.sceneRT.texture,R.tFog.value=this.fogRT.texture,R.tPart.value=this.partRT.texture,R.uFogOn.value=y?1:0,R.uExposure.value=1.1*this.autoK*Math.pow(2,r.exposure),R.uTime.value=n,R.uSoft.value=((k=this.photo)==null?void 0:k.kind)==="night"?.45:this.photo?.2:0,R.uRes.value.set(this.w*this.pr,this.h*this.pr),this.fsq.material=this.compMat,o.setRenderTarget(null),o.render(this.fsqScene,this.fsqCam)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.renderer.dispose()}}function YA(t){return e=>new wt({uniforms:{...t,uTime:{value:0},uBox:{value:new D},uOrigin:{value:new D},uVel:{value:new D},uDepth:{value:null},uRes:{value:new Me},uFocal:{value:800},uNear:{value:.1},uFar:{value:4e3},uGain:{value:1},uShutter:{value:.02},uSnowLine:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,blending:iu,vertexShader:`${mr}
      attribute float aEnd; attribute float aRnd;
      uniform float uTime; uniform vec3 uBox; uniform vec3 uOrigin; uniform vec3 uVel; uniform float uFocal; uniform float uGain; uniform float uShutter; uniform float uSnowLine;
      varying vec3 vCol; varying float vVZ; varying float vA;
      void main(){
        vec3 v = uVel * (0.8 + 0.4 * aRnd);
        vec3 p = position * uBox + v * uTime;
        ${e?"":"p.x += sin(uTime * (0.7 + aRnd) + aRnd * 30.0) * 0.25; p.y += cos(uTime * 0.9 + aRnd * 17.0) * 0.12;"}
        p = uOrigin + mod(p, uBox);
        ${e?"p -= v * uShutter * aEnd;":""}
        vec3 e = vec3(0.0);
        for (int i = 0; i < MAXL; i++) {
          if (i >= uLN) break;
          float d; float I = beamI(i, p - uLPos[i], d);
          if (I <= 0.0) continue;
          d = max(d, 0.2);
          e += uLCol[i] * (I / (d * d) * exp(-uSigma * d) * uLI[i].w);
        }
        vec4 mv = viewMatrix * vec4(p, 1.0);
        float dist = -mv.z;
        vVZ = dist;
        float r = ${e?"mix(0.0011, 0.004, uSnowLine)":"0.0035 + 0.003 * aRnd"};
        float px = 2.0 * r * uFocal / max(dist, 0.1);
        float cover = ${e?"min(px, 1.0)":"min(1.0, (px * px) / (1.6 * 1.6))"};
        float refl = ${e?"mix(0.55, 0.8, uSnowLine)":"0.8"};
        vCol = e * refl / PI * cover * exp(-uSigma * dist) * uGain * ${e?"mix(exp(-dist / 35.0), 1.0, uSnowLine)":"1.0"};
        vA = 1.0;
        gl_Position = projectionMatrix * mv;
        ${e?"":"gl_PointSize = clamp(px, 1.6, 48.0);"}
      }`,fragmentShader:`
      uniform sampler2D uDepth; uniform vec2 uRes; uniform float uNear; uniform float uFar;
      varying vec3 vCol; varying float vVZ; varying float vA;
      void main(){
        float z = texture2D(uDepth, gl_FragCoord.xy / uRes).x;
        float sceneZ = (uNear * uFar) / (uFar - z * (uFar - uNear));
        if (vVZ > sceneZ) discard;
        ${e?"float a = 1.0;":"vec2 q = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.15, length(q)) * 1.6;"}
        gl_FragColor = vec4(vCol * a, 1.0);
      }`})}const Yx=()=>{var t;return typeof window<"u"&&((t=window.matchMedia)==null?void 0:t.call(window,"(pointer: coarse)").matches)&&Math.min(screen.width,screen.height)<820},qx=()=>[{id:"moose",on:!0,dist:150,side:1.4},{id:"deer1",on:!0,dist:82,side:4.2},{id:"deer2",on:!0,dist:100,side:7}],$x=()=>({weather:"clear",rain:.6,snow:.7,wind:6,fog:.45,eye:1.2,target:"none",targetDist:120,targetSide:3,animals:qx(),snowPoles:!0,distSigns:!1,exposure:0,quality:Yx()?"low":"high",speed:80,view:"photo",photo:"auto",autoExposure:!0});function Kx(){return{A:[si("purelux"),si("lowbeam"),si("highbeam")],B:[si("lowbeam"),si("bar30"),si("highbeam")],scene:$x(),slot:"A"}}const qA=t=>btoa(unescape(encodeURIComponent(t))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),$A=t=>decodeURIComponent(escape(atob(t.replace(/-/g,"+").replace(/_/g,"/"))));function O0(t){return"#c="+qA(JSON.stringify(t))}function KA(t){const e=/c=([^&]+)/.exec(t);if(!e)return null;try{const n=JSON.parse($A(e[1]));if(!n.A||!n.scene)return null;const i={...$x(),...n.scene};return["pedestrian","pedestrianVest","none"].includes(i.target)||(i.target="none"),(!Array.isArray(i.animals)||i.animals.length!==3)&&(i.animals=qx()),{...Kx(),...n,scene:i}}catch{return null}}let z0=0;function ar(t=8){var n;const e=performance.now();if(!(e-z0<35)){z0=e;try{(n=navigator.vibrate)==null||n.call(navigator,t)}catch{}}}function Zt({title:t,children:e,right:n}){return E.jsxs("div",{className:"py-4 border-b border-white/[0.06] last:border-0",children:[E.jsxs("div",{className:"flex items-center justify-between mb-3",children:[E.jsx("div",{className:"text-[11px] font-semibold tracking-[0.08em] uppercase text-white/45",children:t}),n]}),E.jsx("div",{className:"space-y-3",children:e})]})}function ot({label:t,value:e,min:n,max:i,step:r=1,onChange:s,fmt:o,className:a,hint:l}){const u=Math.max(r,(i-n)/20),c=Ge.useRef(Math.round(e/u)),f=(e-n)/(i-n)*100;return E.jsxs("label",{className:"block",title:l,children:[E.jsxs("div",{className:"flex justify-between text-[13px] mb-0.5",children:[E.jsx("span",{className:"text-white/75",children:t}),E.jsx("span",{className:"tnum text-white/95 font-medium",children:o?o(e):e})]}),E.jsx("input",{type:"range",className:`rng ${a??""}`,style:{"--p":f+"%"},min:n,max:i,step:r,value:e,onPointerDown:d=>d.stopPropagation(),onTouchStart:d=>d.stopPropagation(),onChange:d=>{const p=parseFloat(d.target.value),g=Math.round(p/u);g!==c.current&&(c.current=g,ar(p<=n||p>=i?14:5)),s(p)}})]})}function un({value:t,options:e,onChange:n,size:i="md"}){return E.jsx("div",{className:"flex p-[3px] rounded-[10px] bg-white/[0.06] gap-[2px]",children:e.map(r=>E.jsx("button",{title:r.t,onClick:()=>{r.v!==t&&ar(10),n(r.v)},className:`tap flex-1 rounded-[8px] ${i==="sm"?"text-[12px] py-1 px-1.5":"text-[13px] py-1.5 px-2"} font-medium transition-all whitespace-nowrap ${t===r.v?"bg-white/[0.16] text-white shadow-[0_1px_3px_rgba(0,0,0,.4)]":"text-white/55 hover:text-white/80"}`,children:r.l},r.v))})}function Dr({on:t,onChange:e,label:n,hint:i}){const r=E.jsx("button",{onClick:s=>{s.stopPropagation(),ar(12),e(!t)},title:i,"aria-pressed":t,role:"switch","aria-checked":t,className:`sw relative shrink-0 rounded-full transition-colors ${t?"bg-[#30d158] on":"bg-white/[0.16]"}`,children:E.jsx("span",{className:"knob absolute rounded-full bg-white shadow transition-transform"})});return n?E.jsxs("div",{className:"flex items-center justify-between gap-3 text-[13px] text-white/75 min-h-[32px]",title:i,children:[E.jsx("span",{children:n}),r]}):r}function Fr({children:t,wide:e}){const[n,i]=Ge.useState(!1);return E.jsxs("span",{className:"relative inline-block align-middle",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[E.jsx("button",{onClick:()=>i(!n),"aria-label":"Mer information",className:"hit w-[16px] h-[16px] rounded-full bg-white/10 text-[10px] leading-[16px] text-white/70 font-semibold hover:bg-white/20",children:"i"}),n&&E.jsx("span",{className:`absolute z-50 right-0 top-6 ${e?"w-[min(300px,80vw)]":"w-[min(240px,75vw)]"} glass-strong rounded-xl p-3 text-[12px] leading-[1.45] text-white/80 shadow-2xl normal-case tracking-normal font-normal`,children:t})]})}function Jc({k:t,v:e,sub:n}){return E.jsxs("div",{className:"rounded-xl bg-white/[0.04] px-3 py-2",children:[E.jsx("div",{className:"text-[11px] text-white/45",children:t}),E.jsx("div",{className:"text-[15px] font-semibold tnum text-white",children:e}),n&&E.jsx("div",{className:"text-[10.5px] text-white/40",children:n})]})}const ZA=[{v:"spot",l:"Spot"},{v:"combo",l:"Combo"},{v:"driving",l:"Driving"},{v:"flood",l:"Flood"},{v:"laser",l:"Laser"},{v:"lowbeam",l:"Halvljus"}],zh=t=>{const[e,n,i]=tp(t),r=Math.max(e,n,i),s=o=>Math.round(255*Math.pow(o/r,1/2.2));return`rgb(${s(e)},${s(n)},${s(i)})`};function JA({lights:t,setLights:e,sel:n,setSel:i,cover:r,scene:s,onWipe:o,slot:a}){const[l,u]=Ge.useState(!1),c=t.find(p=>p.id===n)??t[0],f=(p,g)=>e(y=>y.map(m=>m.id===p?{...m,...g}:m)),d=Object.entries(Gx).reduce((p,g)=>{var y;return(p[y=g[1].group]??(p[y]=[])).push(g),p},{});return E.jsxs("div",{children:[E.jsxs(Zt,{title:`Ljusuppsättning ${a}`,right:E.jsx("button",{onClick:()=>u(!l),className:"hit text-[13px] font-medium text-[#0a84ff] hover:text-[#409cff]",children:l?"Stäng":"+ Lägg till"}),children:[l&&E.jsx("div",{className:"rounded-xl bg-white/[0.04] p-2 space-y-2",children:Object.entries(d).map(([p,g])=>E.jsxs("div",{children:[E.jsx("div",{className:"text-[10.5px] uppercase tracking-wider text-white/35 px-1.5 mb-1",children:p}),g.map(([y,m])=>E.jsx("button",{onClick:()=>{const h=si(y);h.on=!0,e(x=>[...x,h]),i(h.id),u(!1)},className:"tap w-full text-left px-2 py-1.5 rounded-lg text-[13px] text-white/85 hover:bg-white/[0.07]",children:m.label},y))]},p))}),E.jsx("div",{className:"space-y-1.5",children:t.map(p=>{const g=du(p),y=(c==null?void 0:c.id)===p.id,m=r[p.id]??0;return E.jsxs("div",{onClick:()=>i(p.id),className:`flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer transition-colors ${y?"bg-white/[0.10] ring-1 ring-white/[0.12]":"bg-white/[0.035] hover:bg-white/[0.06]"}`,children:[E.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:p.on?zh(p.kelvin):"rgba(255,255,255,.15)",boxShadow:p.on?`0 0 10px ${zh(p.kelvin)}`:"none"}}),E.jsxs("div",{className:"flex-1 min-w-0",children:[E.jsxs("div",{className:"text-[13.5px] font-medium truncate",children:[p.name,p.pair?" ×2":""]}),E.jsxs("div",{className:"text-[11.5px] text-white/45 tnum truncate",children:[p.beam==="lowbeam"?`${cs(p.cd)} cd · halvljus`:`${jt(g.lux1)} @ 1 lux · ${p.kelvin} K`,p.heated&&" · värmd lins",m>.05&&E.jsxs("span",{className:"text-[#ffd60a]",children:[" · snö ",Math.round(m*100)," %"]})]})]}),E.jsx(Dr,{on:p.on,onChange:h=>f(p.id,{on:h})})]},p.id)})})]}),c&&E.jsx(QA,{l:c,upd:p=>f(c.id,p),cover:r[c.id]??0,scene:s,onWipe:o,onDelete:()=>{var p;e(g=>g.filter(y=>y.id!==c.id)),i(((p=t.find(g=>g.id!==c.id))==null?void 0:p.id)??"")}})]})}function QA({l:t,upd:e,cover:n,scene:i,onWipe:r,onDelete:s}){const o=du(t),a=du(t,.85*n,.7*n),l=t.preset==="purelux",u=t.beam==="lowbeam";return E.jsxs(E.Fragment,{children:[E.jsxs(Zt,{title:"Valt ljus",right:E.jsx("button",{onClick:s,className:"hit text-[13px] text-[#ff453a]/80 hover:text-[#ff453a]",children:"Ta bort"}),children:[E.jsx("input",{value:t.name,onChange:c=>e({name:c.target.value}),className:"w-full bg-white/[0.06] rounded-lg px-3 py-2 text-[16px] md:text-[14px] font-medium outline-none focus:ring-1 ring-white/20"}),l&&E.jsx(eC,{l:t}),l&&E.jsxs("div",{children:[E.jsx("div",{className:"text-[12px] text-white/50 mb-1.5",children:"Effektläge (knapp på armaturen)"}),E.jsx(un,{value:t.mode??"boost",onChange:c=>e({mode:c}),options:[{v:"boost",l:"PowerBoost®",t:"17 795 lm, 750 m @ 1 lux (uppmätt). Ej vägtrafikgodkänt läge."},{v:"emark",l:"E-märkt",t:"3 103 lm, 319 m @ 1 lux (uppmätt). Vägtrafikgodkänt."}]})]}),E.jsxs("div",{className:"grid grid-cols-3 gap-1.5",children:[E.jsx(Jc,{k:"Topp",v:cs(a.peak/1e3)+" kcd",sub:"candela"}),E.jsx(Jc,{k:"1 lux",v:jt(a.lux1),sub:n>.05?`ren lins ${jt(o.lux1)}`:"avstånd"}),E.jsx(Jc,{k:"0,25 lux",v:jt(a.lux025),sub:"avstånd"})]}),E.jsx("div",{className:"text-[10.5px] text-white/35 leading-snug -mt-1",children:u?"Halvljus: asymmetrisk ECE-ljusbild med skarp ljusgräns, toppvärde i candela.":`Effektivt ljusflöde ${cs(o.flux)} lm. Uppskattning: I ≈ Φ / Ω (strålens rymdvinkel), avstånd = √(I / E).`})]}),!u&&E.jsxs(Zt,{title:"Ljusstyrka",right:E.jsx(Fr,{children:"Välj hur du anger ljuset: rått lumen (som på kartongen) och verkningsgrad, toppvärde i candela, eller tillverkarens 1 lux-avstånd. Övriga värden räknas fram ungefärligt."}),children:[E.jsx(un,{size:"sm",value:t.specMode,onChange:c=>e({specMode:c}),options:[{v:"lumen",l:"Lumen"},{v:"cd",l:"Candela"},{v:"lux1",l:"1 lux-avstånd"}]}),t.specMode==="lumen"&&E.jsxs(E.Fragment,{children:[E.jsx(ot,{label:l?"Lumen (uppmätt)":"Lumen (rått)",value:t.lumen,min:500,max:4e4,step:100,onChange:c=>e({lumen:c}),fmt:c=>cs(c)+" lm"}),E.jsx(ot,{label:"Verklig andel ut ur linsen",value:t.efficiency,min:.3,max:1,step:.01,onChange:c=>e({efficiency:c}),fmt:c=>Math.round(c*100)+" %",hint:"Rått/teoretiskt lumen är ofta 20–40 % högre än uppmätt. 100 % för uppmätta värden."})]}),t.specMode==="cd"&&E.jsx(ot,{label:"Toppvärde",value:t.cd,min:5e3,max:2e6,step:5e3,onChange:c=>e({cd:c}),fmt:c=>cs(c)+" cd"}),t.specMode==="lux1"&&E.jsx(ot,{label:"1 lux-avstånd",value:t.lux1,min:50,max:2e3,step:5,onChange:c=>e({lux1:c}),fmt:c=>c+" m"})]}),u&&E.jsx(Zt,{title:"Ljusstyrka",children:E.jsx(ot,{label:"Toppvärde per lykta",value:t.cd,min:5e3,max:6e4,step:1e3,onChange:c=>e({cd:c}),fmt:c=>cs(c)+" cd"})}),E.jsxs(Zt,{title:"Färg",children:[E.jsx(ot,{className:"kelvin-track",label:E.jsxs("span",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-3 h-3 rounded-full",style:{background:zh(t.kelvin)}}),"Färgtemperatur"]}),value:t.kelvin,min:2700,max:6500,step:100,onChange:c=>e({kelvin:c}),fmt:c=>c+" K"}),E.jsx("div",{className:"text-[10.5px] text-white/35 leading-snug -mt-1",children:"Kallare ljus (6000 K+) ger mer upplevt återsken i dimma och snö, varmare (3000 K) mindre. Kvalitativ effekt."})]}),!u&&E.jsxs(Zt,{title:"Ljusbild",right:l?E.jsxs(Fr,{children:["Purelux anger ”bred rektangulär ljusbild med fokuserad spot i mitten, mjukt avgränsad vertikalt”. Vinklarna är inte publicerade och är ",E.jsx("b",{children:"uppskattade"})," så att 17 795 lm ger ≈ 750 m @ 1 lux."]}):void 0,children:[E.jsx("div",{className:"grid grid-cols-3 gap-1",children:ZA.filter(c=>c.v!=="lowbeam").map(c=>E.jsx("button",{onClick:()=>e({beam:c.v}),className:`tap text-[12.5px] py-1.5 rounded-lg ${t.beam===c.v?"bg-white/[0.16] text-white":"bg-white/[0.04] text-white/55 hover:text-white/80"}`,children:c.l},c.v))}),E.jsx(ot,{label:"Spot · bredd",value:t.hAngle,min:2,max:60,step:.5,onChange:c=>e({hAngle:c}),fmt:c=>c+"°"}),E.jsx(ot,{label:"Spot · höjd",value:t.vAngle,min:2,max:30,step:.1,onChange:c=>e({vAngle:c}),fmt:c=>c.toFixed(1)+"°"}),t.beam!=="spot"&&t.beam!=="laser"&&E.jsxs(E.Fragment,{children:[E.jsx(ot,{label:"Flood · bredd",value:t.floodH,min:10,max:120,step:1,onChange:c=>e({floodH:c}),fmt:c=>c+"°"}),E.jsx(ot,{label:"Flood · höjd",value:t.floodV,min:3,max:50,step:.5,onChange:c=>e({floodV:c}),fmt:c=>c+"°"}),t.beam!=="flood"&&E.jsx(ot,{label:"Andel i spot",value:t.spotShare,min:.05,max:.95,step:.01,onChange:c=>e({spotShare:c}),fmt:c=>Math.round(c*100)+" %"})]}),l&&E.jsx("div",{className:"text-[10.5px] text-[#ffd60a]/70",children:"Vinklar: uppskattat"})]}),E.jsxs(Zt,{title:"Riktning & montering",children:[E.jsx(ot,{label:"Lutning (upp/ner)",value:t.tilt,min:-5,max:3,step:.05,onChange:c=>e({tilt:c}),fmt:c=>(c>0?"+":"")+c.toFixed(2)+"°",hint:"Extraljus riktas normalt rakt fram eller strax under horisonten."}),E.jsx(ot,{label:"Sidled",value:t.yaw,min:-15,max:15,step:.25,onChange:c=>e({yaw:c}),fmt:c=>(c>0?"+":"")+c+"°"}),E.jsx(un,{size:"sm",value:t.mount,onChange:c=>e({mount:c,height:bA[c]}),options:["plate","bumper","grille","roof"].map(c=>({v:c,l:RA[c]}))}),E.jsx(ot,{label:"Monteringshöjd",value:t.height,min:.3,max:2.4,step:.01,onChange:c=>e({height:c}),fmt:c=>c.toFixed(2).replace(".",",")+" m"}),E.jsx(Dr,{label:"Par (vänster + höger)",on:t.pair,onChange:c=>e({pair:c})}),t.pair&&E.jsx(ot,{label:"Avstånd mellan lamporna",value:t.pairSpacing,min:.3,max:1.8,step:.05,onChange:c=>e({pairSpacing:c}),fmt:c=>c.toFixed(2).replace(".",",")+" m"})]}),E.jsxs(Zt,{title:"Lins & vinter",right:E.jsx(Fr,{children:"I snöstorm fastnar snö på kalla linser (LED värmer knappt). Snön dämpar och sprider ljuset. En uppvärmd lins smälter bort den. Tiden är förkortad ungefär 10× i simulatorn."}),children:[E.jsx(Dr,{label:"Uppvärmd lins",on:t.heated,onChange:c=>e({heated:c}),hint:l?"Panther Heat: automatisk linsvärme, 46 W @ 24 V (uppmätt av Valostore)":void 0}),E.jsxs("div",{children:[E.jsxs("div",{className:"flex justify-between text-[12px] mb-1",children:[E.jsx("span",{className:"text-white/60",children:"Snö på linsen"}),E.jsxs("span",{className:"tnum",children:[Math.round(n*100)," %"]})]}),E.jsx("div",{className:"h-1.5 rounded-full bg-white/[0.08] overflow-hidden",children:E.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[#64d2ff] to-white transition-all",style:{width:`${n*100}%`}})}),n>.02&&E.jsxs("div",{className:"flex justify-between items-center mt-1.5 text-[11.5px] text-white/50",children:[E.jsxs("span",{children:["Ljusflöde −",Math.round(85*n)," %, mer spritt"]}),E.jsx("button",{onClick:r,className:"text-[#0a84ff]",children:"Torka av alla"})]}),i.weather!=="snow"&&n<.02&&E.jsx("div",{className:"text-[11px] text-white/35 mt-1",children:"Välj Snöstorm för att se skillnaden."})]})]})]})}function eC({l:t}){const e=[["Ljusflöde",t.mode==="emark"?"3 103 lm (E-märkt)":"17 795 lm (PowerBoost®)"],["Räckvidd 1 lux",t.mode==="emark"?"319 m":"750 m"],["Räckvidd 0,25 lux",t.mode==="emark"?"638 m":"1 500 m"],["Färgtemperatur","5000 K (uppmätt 5001 K)"],["Ljusbild","Combo: bred rektangulär + spot"],["Referenstal","Ref. 30"],["Effekt","259 W @ 24 V (varav linsvärme 46 W)"],["Mått / vikt","546 × 66 × 77 mm · 2 860 g"],["Täthet","IP69K · 5 mm härdat glas"],["Spänning","9–36 V DC"],["Strålvinklar","uppskattat (ej publicerat)",!0]];return E.jsxs("div",{className:"rounded-xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] ring-1 ring-white/[0.08] p-3",children:[E.jsxs("div",{className:"flex items-start justify-between gap-2",children:[E.jsxs("div",{children:[E.jsx("div",{className:"text-[13px] font-semibold leading-tight",children:"PURELUX Panther Heat S540"}),E.jsx("div",{className:"text-[11px] text-white/45",children:"Rak · 55 cm · 260 W · uppvärmd lins"})]}),E.jsxs(Fr,{wide:!0,children:[E.jsx("b",{children:"Källa:"})," ",CA,". Ljusflöde och räckvidd är uppmätta av Valostore (hämtat 17 okt 2026). Strålvinklarna publiceras inte och är ",E.jsx("b",{children:"uppskattade"})," för att modellen ska ge 750 m @ 1 lux. Artikelnummer HS18593-15813 och paketet (justerbar hållare, XBB Dongle & PowerUnit) kommer från din beställning och har inte kontrollerats mot butiken."]})]}),E.jsx("div",{className:"mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[11.5px]",children:e.map(([n,i,r])=>E.jsxs(Ge.Fragment,{children:[E.jsx("span",{className:"text-white/45",children:n}),E.jsx("span",{className:`tnum ${r?"text-[#ffd60a]/80":"text-white/85"}`,children:i})]},n))}),E.jsx("div",{className:"text-[10.5px] text-white/35 mt-2",children:"HS18593-15813 · justerbar hållare, XBB Dongle & PowerUnit · källa: Valostore.se"})]})}const Qc=t=>Math.round(t*100)+" %";function tC({scene:t,setScene:e,vis:n}){return E.jsxs("div",{children:[E.jsxs(Zt,{title:"Väder",right:E.jsx(Fr,{children:"Sikten modelleras med exponentiell dämpning (Koschmieder: σ = 3,912 / sikt). Ljuset dämpas både på väg ut och tillbaka till ögat, och partiklar nära lampan lyser upp och bländar."}),children:[E.jsx(un,{value:t.weather,onChange:i=>e({weather:i}),options:[{v:"clear",l:"Klart"},{v:"rain",l:"Regn"},{v:"snow",l:"Snöstorm"},{v:"fog",l:"Dimma"}]}),t.weather==="rain"&&E.jsx(ot,{label:"Regnmängd",value:t.rain,min:.05,max:1,step:.01,onChange:i=>e({rain:i}),fmt:Qc}),t.weather==="snow"&&E.jsx(ot,{label:"Snöfall",value:t.snow,min:.05,max:1,step:.01,onChange:i=>e({snow:i}),fmt:Qc}),t.weather==="fog"&&E.jsx(ot,{label:"Dimmans täthet",value:t.fog,min:.02,max:1,step:.01,onChange:i=>e({fog:i}),fmt:Qc}),(t.weather==="snow"||t.weather==="rain")&&E.jsx(ot,{label:"Vind (sidled)",value:t.wind,min:-15,max:15,step:.5,onChange:i=>e({wind:i}),fmt:i=>i+" m/s"}),E.jsx(ot,{label:"Hastighet (fartvind)",value:t.speed,min:0,max:130,step:5,onChange:i=>e({speed:i}),fmt:i=>i+" km/h",hint:"Påverkar hur partiklarna rör sig mot bilen och hur snabbt snö fastnar på linserna."}),E.jsxs("div",{className:"flex justify-between text-[12.5px] text-white/60",children:[E.jsx("span",{children:"Meteorologisk sikt"}),E.jsx("span",{className:"tnum text-white",children:n>15e3?"> 15 km":jt(n)})]})]}),E.jsx(Zt,{title:"Så tolkar du bilden",children:E.jsxs("ul",{className:"text-[12px] text-white/55 leading-relaxed list-disc pl-4 space-y-1",children:[E.jsx("li",{children:"Tak­monterat ljus lyser upp luften precis framför ögonen och ger mest återsken i snö och dimma."}),E.jsx("li",{children:"Lågt monterade ljus (reg.skylt/stötfångare) och varmare färg ger mindre bländning."}),E.jsx("li",{children:"Blöt asfalt speglar bort ljuset: vägen blir mörkare och glansig."})]})})]})}const B0=t=>(t>4.3?"vägkant h. ":t<-1.3?"vägkant v. ":"på vägen ")+t.toFixed(1).replace(".",",")+" m";function nC({scene:t,setScene:e,fps:n,scale:i,compact:r,figs:s}){const o=(a,l)=>e({animals:t.animals.map(u=>u.id===a?{...u,...l}:u)});return E.jsxs("div",{children:[r&&E.jsx(Zt,{title:"Vy",children:E.jsx(un,{value:t.view,onChange:a=>e({view:a}),options:[{v:"photo",l:"Förarvy"},{v:"driver",l:"3D"},{v:"top",l:"Ovanifrån"}]})}),E.jsx(Zt,{title:"Djur vid vägen",right:E.jsx(Fr,{children:"Riktiga fotografier av en älg och två rådjur, frilagda och skalade efter verklig mankhöjd (älg ≈ 1,9 m, rådjur ≈ 0,7 m). De belyses av dina lampor (mörka utanför ljuset), får ögonglimt när ljuset träffar ögonen och dämpas av dimma och snö. ”Syns från” är ett ungefärligt avstånd där djuret blir svagt synligt rakt fram i vädret."}),children:t.animals.map(a=>{const l=Us[a.id],u=s.find(c=>c.id===a.id);return E.jsxs("div",{className:`rounded-xl px-3 py-2.5 ${a.on?"bg-white/[0.05]":"bg-white/[0.025]"}`,children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:l.src,alt:"",className:`w-11 h-8 object-contain ${a.on?"":"opacity-40"}`,draggable:!1}),E.jsxs("div",{className:"flex-1 min-w-0",children:[E.jsx("div",{className:"text-[14px] font-medium",children:l.label}),E.jsx("div",{className:"text-[11.5px] text-white/45 tnum truncate",children:a.on&&u?E.jsxs(E.Fragment,{children:[E.jsx("span",{style:{color:u.state[1]},children:"●"})," ",u.state[0]," · syns från ≈ ",jt(u.seen)]}):`mankhöjd ${String(l.shoulderM).replace(".",",")} m`})]}),E.jsx(Dr,{on:a.on,onChange:c=>o(a.id,{on:c})})]}),a.on&&E.jsxs("div",{className:"mt-1",children:[E.jsx(ot,{label:"Avstånd",value:a.dist,min:20,max:400,step:5,onChange:c=>o(a.id,{dist:c}),fmt:c=>c+" m"}),E.jsx(ot,{label:"Sidled",value:a.side,min:-3,max:7.5,step:.1,onChange:c=>o(a.id,{side:c}),fmt:B0})]})]},a.id)})}),E.jsxs(Zt,{title:"Fotgängare (3D-figur)",right:E.jsx(Fr,{children:"Mörkt klädda fotgängare har låg reflektans (≈ 5 %). En fluorescerande varselväst syns betydligt bättre (inga reflexer simuleras)."}),children:[E.jsx(un,{size:"sm",value:t.target,onChange:a=>e({target:a}),options:[{v:"none",l:"Ingen"},{v:"pedestrian",l:"Mörkklädd"},{v:"pedestrianVest",l:"Varselväst"}]}),t.target!=="none"&&E.jsxs(E.Fragment,{children:[E.jsx(ot,{label:"Avstånd",value:t.targetDist,min:20,max:600,step:5,onChange:a=>e({targetDist:a}),fmt:a=>a+" m"}),E.jsx(ot,{label:"Sidled",value:t.targetSide,min:-3,max:7,step:.1,onChange:a=>e({targetSide:a}),fmt:B0})]})]}),E.jsxs(Zt,{title:"Förare & vy",children:[t.view==="photo"&&E.jsxs(E.Fragment,{children:[E.jsx(un,{size:"sm",value:t.photo??"auto",onChange:a=>e({photo:a}),options:[{v:"auto",l:"Nattfoto"},{v:"summer",l:"Sommar*"},{v:"winter",l:"Vinter*"}]}),E.jsx("div",{className:"text-[11px] text-white/40 -mt-1",children:"Nattfoto: en riktig fotoserie tagen på natten på samma plats med halvljus, helljus och helljus + extraljus. Bilden ljussätts om pixel för pixel med dina lampor. *Sommar och vinter är dagfoton som görs om till natt (mindre verklighetstroget). Ögonhöjden följer fotots kamerahöjd."})]}),t.view!=="photo"&&E.jsx(ot,{label:"Ögonhöjd",value:t.eye,min:1,max:2.4,step:.01,onChange:a=>e({eye:a}),fmt:a=>a.toFixed(2).replace(".",",")+" m",hint:"Personbil ≈ 1,2 m, SUV ≈ 1,45 m, lastbil ≈ 2,3 m"}),E.jsx(ot,{label:"Ögats anpassning (exponering)",value:t.exposure,min:-3,max:3,step:.1,onChange:a=>e({exposure:a}),fmt:a=>(a>0?"+":"")+a.toFixed(1).replace(".",",")+" EV",hint:"Bildens ljusstyrka är kopplad till verklig luminans (lux → cd/m²). Ändra för att simulera mörkeranpassade ögon."}),E.jsx(Dr,{label:"Automatisk ögonanpassning",on:t.autoExposure,onChange:a=>e({autoExposure:a}),hint:"Bilden anpassar sig delvis efter hur ljus scenen är, som ögat. Stäng av för helt fast exponering vid A/B-jämförelse."}),t.view==="driver"&&E.jsxs(E.Fragment,{children:[E.jsx(Dr,{label:"Avståndsskyltar (mäthjälp)",on:t.distSigns,onChange:a=>e({distSigns:a})}),E.jsx(Dr,{label:"Snöpinnar",on:t.snowPoles,onChange:a=>e({snowPoles:a})})]}),E.jsx("div",{className:"text-[11px] text-white/35",children:t.view==="photo"?"Dra i bilden för att panorera lite (begränsat så att fotot alltid passar).":"Dra i bilden för att titta runt."})]}),E.jsxs(Zt,{title:"Prestanda",children:[E.jsx(un,{value:t.quality,onChange:a=>e({quality:a}),options:[{v:"low",l:"Snabb"},{v:"high",l:"Hög kvalitet"}]}),E.jsxs("div",{className:"flex justify-between text-[12px] text-white/50 tnum",children:[E.jsxs("span",{children:[Math.round(n)," bilder/s"]}),E.jsxs("span",{children:["upplösning ",Math.round(i*100)," %"]})]}),E.jsx("div",{className:"text-[11px] text-white/35",children:"Upplösningen sänks automatiskt om bildfrekvensen blir låg."})]})]})}function iC({header:t,children:e,snap:n,setSnap:i,peekH:r,halfH:s,fullH:o,width:a,onHeight:l}){const u={peek:r,half:s,full:o},[c,f]=Ge.useState(null),d=Ge.useRef(null),p=Ge.useRef(null),g=Ge.useRef(!1),y=c??u[n];Ge.useEffect(()=>{l==null||l(y)},[y,l]);const m=v=>{d.current={y:v.clientY,h:y,t:performance.now(),lastY:v.clientY,lastT:performance.now(),id:v.pointerId,on:!1}},h=v=>{const S=d.current;if(!S)return;const R=v.clientY-S.y;if(!S.on&&Math.abs(R)>7){S.on=!0;try{v.currentTarget.setPointerCapture(S.id)}catch{}}if(!S.on)return;v.preventDefault();const b=Math.max(r*.7,Math.min(o+20,S.h-R));S.lastY=v.clientY,S.lastT=performance.now(),f(b)},x=v=>{const S=d.current;if(d.current=null,!S||!S.on)return;v.preventDefault(),g.current=!0,setTimeout(()=>{g.current=!1},60);const R=S.h-(v.clientY-S.y),b=-(v.clientY-S.lastY)/Math.max(1,performance.now()-S.lastT),T=R+b*180,P=["peek","half","full"];let k="peek",_=1e9;for(const w of P){const z=Math.abs(u[w]-T);z<_&&(_=z,k=w)}f(null),k!==n&&ar(10),i(k)};return E.jsxs("div",{ref:p,className:"absolute bottom-0 right-0 glass-strong rounded-t-[24px] shadow-[0_-10px_40px_rgba(0,0,0,.45)] flex flex-col z-20",style:{height:y,width:a??"100%",transition:c==null?"height .32s cubic-bezier(.2,.9,.25,1)":"none",right:a?"max(8px, env(safe-area-inset-right))":0},children:[E.jsxs("div",{className:"shrink-0 touch-none select-none",onPointerDown:m,onPointerMove:h,onPointerUp:x,onPointerCancel:x,onClickCapture:v=>{g.current&&(v.stopPropagation(),v.preventDefault())},children:[E.jsx("button",{"aria-label":"Dra för att ändra panelens storlek",onClick:()=>{ar(8),i(n==="peek"?"half":n==="half"?"full":"peek")},className:"w-full h-[22px] flex items-center justify-center",children:E.jsx("span",{className:"w-10 h-[5px] rounded-full bg-white/30"})}),t]}),E.jsx("div",{className:`sheet-body flex-1 min-h-0 overflow-y-auto no-scrollbar px-4 ${n==="peek"&&c==null?"invisible":""}`,style:{paddingBottom:"calc(16px + env(safe-area-inset-bottom))"},children:e})]})}const rC={pedestrian:"Fotgängare",pedestrianVest:"Fotgängare m. varselväst",none:""},sC={pedestrian:.05,pedestrianVest:.05,none:0},Zx="#30d158",Bh="#ffd60a",Nl="#ff453a",V0=t=>t>.05?["Syns tydligt",Zx]:t>.012?["Syns svagt",Bh]:["Syns knappt / inte",Nl],oC=[{v:"clear",l:"Klart"},{v:"rain",l:"Regn"},{v:"snow",l:"Snö"},{v:"fog",l:"Dimma"}],H0=t=>t<10?t.toFixed(1).replace(".",","):String(Math.round(t));function aC(){const t=()=>({w:window.innerWidth,h:window.innerHeight}),[e,n]=Ge.useState(t);return Ge.useEffect(()=>{var r;const i=()=>n(t());return window.addEventListener("resize",i),window.addEventListener("orientationchange",i),(r=window.visualViewport)==null||r.addEventListener("resize",i),()=>{var s;window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i),(s=window.visualViewport)==null||s.removeEventListener("resize",i)}},[]),e}function lC(t){const e=Ge.useRef(null),[n,i]=Ge.useState({t:0,b:0,l:0,r:0});return Ge.useEffect(()=>{const s=e.current;if(!s)return;const o=getComputedStyle(s);i({t:parseFloat(o.paddingTop)||0,b:parseFloat(o.paddingBottom)||0,l:parseFloat(o.paddingLeft)||0,r:parseFloat(o.paddingRight)||0})},[t]),[n,E.jsx("div",{ref:e,"aria-hidden":!0,className:"fixed invisible pointer-events-none",style:{padding:"env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)"}})]}function uC(){const t=Ge.useRef(null),e=Ge.useRef(null),[n,i]=Ge.useState(()=>KA(location.hash)??Kx()),[r,s]=Ge.useState(()=>{var W;return((W=n.A[0])==null?void 0:W.id)??""}),[o,a]=Ge.useState({fps:0,cover:{},ms:0}),[l,u]=Ge.useState("ljus"),[c,f]=Ge.useState("peek"),[d,p]=Ge.useState(0),[g,y]=Ge.useState(!1),[m,h]=Ge.useState(!1),[x,v]=Ge.useState(""),[,S]=Ge.useState(0),R=aC(),b=Ge.useCallback(W=>p(W),[]),[T,P]=lC(R),k=R.w<768||R.h<500,_=k&&R.w>R.h,w=_?Math.min(400,Math.round(R.w*.48)):void 0,z=n.slot==="A"?n.A:n.B,I=n.scene;Ge.useEffect(()=>{const W=new XA(t.current);return W.maxDpr=Yx()?1.25:1.5,e.current=W,W.onStats=C=>a(C),window.__engine=W,()=>{W.dispose()}},[]),Ge.useEffect(()=>{const W=e.current;W.panelInset=k?0:396,W.resize(R.w,R.h),S(C=>C+1)},[R.w,R.h,k]),Ge.useEffect(()=>{var W;(W=e.current)==null||W.setConfig({lights:z,scene:I})},[z,I]),Ge.useEffect(()=>{const W=setTimeout(()=>history.replaceState(null,"",O0(n)),250);return()=>clearTimeout(W)},[n]),Ge.useEffect(()=>{const W=t.current;let C=null;const M=new Map;let B=null;const Z=()=>{const[re,Ae]=[...M.values()];return Math.hypot(re.x-Ae.x,re.y-Ae.y)},ie=re=>{const Ae=e.current;if(M.set(re.pointerId,{x:re.clientX,y:re.clientY}),W.setPointerCapture(re.pointerId),M.size===2){B={d:Z(),z:Ae.topZoom},C=null;return}C={x:re.clientX,y:re.clientY,yaw:Ae.look.yaw,pitch:Ae.look.pitch}},K=re=>{var se;const Ae=e.current;if(M.has(re.pointerId)&&M.set(re.pointerId,{x:re.clientX,y:re.clientY}),B&&M.size===2){((se=Ae.cfg)==null?void 0:se.scene.view)==="top"&&(Ae.topZoom=Math.max(120,Math.min(2e3,B.z*B.d/Math.max(20,Z()))),S(he=>he+1));return}C&&(Ae.look.yaw=Math.max(-.6,Math.min(.6,C.yaw+(re.clientX-C.x)*.0016)),Ae.look.pitch=Math.max(-.25,Math.min(.2,C.pitch-(re.clientY-C.y)*.0016)))},ye=re=>{M.delete(re.pointerId),M.size<2&&(B=null),C=null},ue=re=>{var se;const Ae=e.current;((se=Ae.cfg)==null?void 0:se.scene.view)==="top"&&(re.preventDefault(),Ae.topZoom=Math.max(120,Math.min(2e3,Ae.topZoom*Math.exp(re.deltaY*.001))),S(he=>he+1))};return W.addEventListener("pointerdown",ie),W.addEventListener("pointermove",K),window.addEventListener("pointerup",ye),window.addEventListener("pointercancel",ye),W.addEventListener("wheel",ue,{passive:!1}),()=>{W.removeEventListener("pointerdown",ie),W.removeEventListener("pointermove",K),window.removeEventListener("pointerup",ye),window.removeEventListener("pointercancel",ye),W.removeEventListener("wheel",ue)}},[]),Ge.useEffect(()=>{const W=C=>C.preventDefault();return document.addEventListener("gesturestart",W),document.addEventListener("dblclick",W),()=>{document.removeEventListener("gesturestart",W),document.removeEventListener("dblclick",W)}},[]);const j=W=>i(C=>({...C,[C.slot]:W(C.slot==="A"?C.A:C.B)})),$=W=>i(C=>({...C,scene:{...C.scene,...W}})),V=W=>{var M;i(B=>({...B,slot:W}));const C=W==="A"?n.A:n.B;s(((M=C[0])==null?void 0:M.id)??"")},ee=Object.entries(o.cover).map(([W,C])=>W+(C*20|0)).join(),L=Ge.useMemo(()=>{const W=Oh(z,o.cover),C=ep(I),M=Kc(W,1,0),B=Kc(W,.25,0),Z=Kc(W,1,C),ie=(re,Ae)=>I.view==="photo"?0:Ti(re,-Ae),K=(re,Ae,se,he)=>Ll(W,[Ae,se+ie(Ae,he),-he],C)*re/Math.PI*Math.exp(-C*he),ye=I.animals.filter(re=>re.on).map(re=>{const Ae=Us[re.id],se=Ll(W,[re.side,Ae.centerM+ie(re.side,re.dist),-re.dist],C);let he=0;for(let Pe=10;Pe<=1e3;Pe+=Pe<200?5:10)K(Ae.albedo,re.side,Ae.centerM,Pe)>.012&&(he=Pe);return{id:re.id,E:se,state:V0(se*Ae.albedo/Math.PI*Math.exp(-C*re.dist)),seen:he}});let ue=0;return I.target!=="none"&&(ue=Ll(W,[I.targetSide,1+ie(I.targetSide,I.targetDist),-I.targetDist],C)),{r1:M,r025:B,rw:Z,tE:ue,sig:C,vis:UA(I),animals:ye}},[z,I,ee]),J=L.tE*sC[I.target]/Math.PI*Math.exp(-L.sig*I.targetDist),Q=I.target==="none"?null:V0(J),ae=async()=>{const W=location.origin+location.pathname+O0(n);ar(10);try{if(k&&navigator.share){await navigator.share({title:"Extraljus Simulator",url:W});return}await navigator.clipboard.writeText(W),v("Länk kopierad")}catch{v("Kopiera länken från adressfältet")}setTimeout(()=>v(""),2200)},ge=e.current,Oe=I.view==="top",q=Ge.useMemo(()=>{const W=(ge==null?void 0:ge.topZoom)??900,C=W>1200?200:W>500?100:50,M=[];for(let B=0;B<=W;B+=C)M.push(B);return M},[ge==null?void 0:ge.topZoom,Oe,o.fps>0,R.w,R.h]),ne=Wx(I.weather,I.photo),de=(W=!1)=>L.animals.map(C=>{const M=I.animals.find(B=>B.id===C.id);return E.jsxs("div",{className:`flex items-center justify-between gap-2 ${W?"text-[13.5px] py-1":"text-[12.5px]"}`,children:[E.jsxs("span",{className:"text-white/70 truncate",children:[Us[C.id].label," · ",M.dist," m · ",H0(C.E)," lux"]}),E.jsxs("span",{className:"flex items-center gap-1.5 font-medium shrink-0",style:{color:C.state[1]},children:[E.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:C.state[1]}}),W?C.state[0].replace("Syns ","").replace("knappt / inte","Syns inte").replace(/^./,B=>B.toUpperCase()):C.state[0]]})]},C.id)}),fe=(W=!1)=>E.jsxs(E.Fragment,{children:[(L.animals.length>0||Q)&&E.jsxs("div",{className:"mt-2.5 pt-2.5 border-t border-white/[0.07] space-y-1",children:[de(W),L.animals.length>0&&E.jsxs("div",{className:"text-[11px] text-white/40 tnum",children:["Syns från ≈ ",L.animals.map(C=>`${Us[C.id].label.replace("Rådjur ","R")} ${jt(C.seen)}`).join(" · ")]}),Q&&E.jsxs("div",{className:"flex items-center justify-between text-[12.5px]",children:[E.jsxs("span",{className:"text-white/70",children:[rC[I.target]," · ",I.targetDist," m · ",H0(L.tE)," lux"]}),E.jsxs("span",{className:"flex items-center gap-1.5 font-medium",style:{color:Q[1]},children:[E.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:Q[1]}}),Q[0]]})]})]}),E.jsx("div",{className:"text-[10px] text-white/35 mt-2 leading-snug",children:"Ungefärlig fotometrisk modell (I ≈ Φ/Ω, E = I·e^(−σd)/d²). Inte en mätning."})]}),Le=E.jsxs(E.Fragment,{children:[l==="ljus"&&E.jsx(JA,{lights:z,setLights:j,sel:r,setSel:s,cover:o.cover,scene:I,onWipe:()=>{var W;return(W=e.current)==null?void 0:W.resetSnow()},slot:n.slot}),l==="vader"&&E.jsx(tC,{scene:I,setScene:$,vis:L.vis}),l==="scen"&&E.jsx(nC,{scene:I,setScene:$,fps:o.fps,ms:o.ms,scale:o.scale??1,compact:k,figs:L.animals})]}),X=E.jsx(un,{value:l,onChange:W=>{u(W),k&&c==="peek"&&f("half")},options:[{v:"ljus",l:"Ljus"},{v:"vader",l:"Väder"},{v:"scen",l:"Scen"}]}),Ee=136+T.b,Re=_?R.h-T.t-8:R.h-T.t-70,Fe=Math.min(Re,Math.max(Ee+160,Math.round(R.h*(_?.62:.52)))),N=k?_?0:d||Ee:0,Ze="calc(env(safe-area-inset-top) + 8px)",De="calc(env(safe-area-inset-left) + 8px)",Ve=_?`${(w??0)+16}px`:"calc(env(safe-area-inset-right) + 8px)",Ne=L.animals.length?L.animals.reduce((W,C)=>C.state[1]===Nl?Nl:W===Nl?W:C.state[1]===Bh?Bh:W,Zx):null,Je=k?_?12:N+12:24;return ge&&(ge.bottomInset=k&&!_?Math.min(N,Ee+4)+150:0),E.jsxs("div",{className:"fixed inset-0 select-none overflow-hidden",children:[P,E.jsx("canvas",{ref:t,className:"absolute inset-0 touch-none cursor-grab active:cursor-grabbing"}),Oe&&ge&&E.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[ge.topPortrait()?q.map(W=>E.jsx("div",{className:"absolute left-0 right-0",style:{top:ge.topScreenY(W)},children:E.jsxs("div",{className:"absolute -translate-y-1/2 text-[11px] tnum text-white/75 font-medium whitespace-nowrap px-1.5 rounded bg-black/40",style:{left:De},children:[W," m"]})},W)):q.map(W=>E.jsx("div",{className:"absolute top-0 bottom-0",style:{left:ge.topScreenX(W)},children:E.jsxs("div",{className:"absolute -translate-x-1/2 text-[11px] tnum text-white/70 font-medium whitespace-nowrap",style:{top:k?"calc(env(safe-area-inset-top) + 64px)":72},children:[W," m"]})},W)),E.jsxs("div",{className:"absolute glass rounded-2xl px-4 py-3 text-[12px] text-white/80",style:{left:k?De:24,bottom:Je,width:k?`min(290px, calc(100vw - ${_?(w??0)+40:16}px))`:290},children:[E.jsx("div",{className:"font-semibold text-white mb-1.5",children:"Isolux · belysning på 1 m höjd"}),E.jsx("div",{className:"h-2 rounded-full mb-1",style:{background:"linear-gradient(90deg,#080d29 0%,#10529e 20%,#2ec7b8 50%,#fadb5c 85%,#fffaeb 100%)"}}),E.jsxs("div",{className:"flex justify-between text-[10.5px] text-white/50 tnum mb-2",children:[E.jsx("span",{children:"0,25"}),E.jsx("span",{children:"1"}),E.jsx("span",{children:"10"}),E.jsx("span",{children:"100"}),E.jsx("span",{children:"lux"})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-5 h-[2px] bg-white"}),"1 lux-gräns"]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-5 h-[2px] border-t-2 border-dashed border-sky-300"}),"0,25 lux-gräns"]}),!k&&E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-5 h-[1px] bg-white/50"}),"3 / 10 / 50 lux"]}),E.jsxs("div",{className:"text-[10.5px] text-white/40 mt-1.5",children:["Sidled förstorad (±",Math.round(ge.topLat())," m). Inkluderar vädrets dämpning.",k?" Nyp för att zooma.":" Scrolla för att zooma."]})]})]}),k?E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"absolute flex items-start gap-2 z-10",style:{top:Ze,left:De,right:Ve},children:[E.jsxs("div",{className:"flex-1 min-w-0 flex flex-col items-center",children:[E.jsxs("button",{onClick:()=>{ar(8),y(!g)},"aria-expanded":g,"aria-label":"Räckvidd – visa detaljer",className:"glass rounded-full h-11 pl-4 pr-3 flex items-center gap-2.5 max-w-full shadow-lg",children:[E.jsx("span",{className:"text-[16px] font-semibold tnum tracking-tight whitespace-nowrap",children:jt(L.r1)}),E.jsx("span",{className:"text-[10.5px] text-white/45 -ml-1.5 leading-none",children:"1 lux"}),E.jsx("span",{className:"w-px h-4 bg-white/15"}),I.weather!=="clear"?E.jsxs(E.Fragment,{children:[E.jsx("span",{className:"text-[15px] font-semibold tnum text-[#64d2ff] whitespace-nowrap",children:jt(L.rw)}),E.jsx("span",{className:"text-[10.5px] text-white/45 -ml-1.5 leading-none whitespace-nowrap",children:"i vädret"})]}):E.jsxs(E.Fragment,{children:[E.jsx("span",{className:"text-[15px] font-semibold tnum text-white/80 whitespace-nowrap",children:jt(L.r025)}),R.w>=380&&E.jsx("span",{className:"text-[10.5px] text-white/45 -ml-1.5 leading-none",children:"0,25"})]}),Ne&&E.jsx("span",{className:"flex gap-1 ml-0.5",children:L.animals.map(W=>E.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:W.state[1]}},W.id))}),R.w>=380&&E.jsx("span",{className:"text-white/40 text-[11px] font-semibold",children:n.slot}),E.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",className:`text-white/40 transition-transform ${g?"rotate-180":""}`,children:E.jsx("path",{d:"M1.5 3.5 5 7l3.5-3.5",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"})})]}),g&&E.jsxs("div",{className:"glass-strong rounded-2xl px-4 py-3 mt-2 w-full max-w-[380px] shadow-2xl",children:[E.jsxs("div",{className:"flex items-baseline justify-between",children:[E.jsxs("div",{className:"text-[11px] uppercase tracking-[0.08em] text-white/45 font-semibold",children:["Räckvidd rakt fram · ",n.slot]}),E.jsxs("div",{className:"text-[10.5px] text-white/35 tnum",children:[Math.round(o.fps)," fps"]})]}),E.jsxs("div",{className:"flex gap-5 mt-1.5",children:[E.jsxs("div",{children:[E.jsx("div",{className:"text-[22px] font-semibold tnum tracking-tight",children:jt(L.r1)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux (klart)"})]}),E.jsxs("div",{children:[E.jsx("div",{className:"text-[22px] font-semibold tnum tracking-tight text-white/80",children:jt(L.r025)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"0,25 lux"})]}),I.weather!=="clear"&&E.jsxs("div",{children:[E.jsx("div",{className:"text-[22px] font-semibold tnum tracking-tight text-[#64d2ff]",children:jt(L.rw)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux i vädret"})]})]}),fe(!0)]})]}),E.jsx("button",{onClick:ae,"aria-label":"Dela länk",className:"glass rounded-full w-11 h-11 shrink-0 flex items-center justify-center text-white/85",children:E.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[E.jsx("path",{d:"M12 3v12"}),E.jsx("path",{d:"m7.5 7.5 4.5-4.5 4.5 4.5"}),E.jsx("path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"})]})}),E.jsx("button",{onClick:()=>{ar(8),h(!0)},"aria-label":"Om bilden, källor och licenser",className:"glass rounded-full w-11 h-11 shrink-0 flex items-center justify-center text-[17px] font-semibold text-white/85 font-serif italic",children:"i"})]}),E.jsx(iC,{snap:c,setSnap:f,peekH:Ee,halfH:Fe,fullH:Re,width:w,onHeight:b,header:E.jsxs("div",{className:"px-3 pb-2.5 space-y-2",children:[E.jsxs("div",{className:"flex gap-2",children:[E.jsx("div",{className:"flex-1 min-w-0",children:E.jsx(un,{value:I.weather,onChange:W=>$({weather:W}),options:oC.map(W=>({v:W.v,l:W.l}))})}),E.jsx("div",{className:"w-[92px] shrink-0",children:E.jsx(un,{value:n.slot,onChange:V,options:[{v:"A",l:"A"},{v:"B",l:"B"}]})})]}),X]}),children:Le})]}):E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"absolute top-3 left-3 right-[392px] flex items-center gap-3 flex-wrap",children:[E.jsxs("div",{className:"glass rounded-2xl pl-3.5 pr-4 py-2 flex items-center gap-2.5",children:[E.jsx("div",{className:"w-6 h-6 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.7)]"}),E.jsxs("div",{className:"leading-tight",children:[E.jsx("div",{className:"text-[14px] font-semibold tracking-tight",children:"Extraljus"}),E.jsx("div",{className:"text-[10.5px] text-white/45 -mt-0.5",children:"Simulator · beta"})]})]}),E.jsx("div",{className:"glass rounded-2xl p-1 w-[260px]",children:E.jsx(un,{size:"sm",value:I.view,onChange:W=>$({view:W}),options:[{v:"photo",l:"Förarvy"},{v:"driver",l:"3D"},{v:"top",l:"Ovanifrån"}]})}),E.jsx("div",{className:"glass rounded-2xl p-1 w-[120px]",title:"Jämför två ljusuppsättningar i samma väder",children:E.jsx(un,{size:"sm",value:n.slot,onChange:V,options:[{v:"A",l:"A"},{v:"B",l:"B"}]})}),E.jsx("div",{className:"glass rounded-2xl p-1 w-[300px]",children:E.jsx(un,{size:"sm",value:I.weather,onChange:W=>$({weather:W}),options:[{v:"clear",l:"Klart"},{v:"rain",l:"Regn"},{v:"snow",l:"Snöstorm"},{v:"fog",l:"Dimma"}]})}),E.jsx("button",{onClick:ae,className:"glass rounded-2xl px-3.5 py-2 text-[13px] font-medium text-white/85 hover:text-white",children:"Dela"}),E.jsx("button",{onClick:()=>h(!0),"aria-label":"Om bilden, källor och licenser",className:"glass rounded-full w-9 h-9 text-[15px] font-semibold text-white/80 hover:text-white font-serif italic",children:"i"})]}),E.jsx("div",{className:`absolute left-6 bottom-6 flex flex-col gap-2 pointer-events-none ${Oe?"hidden":""}`,children:E.jsxs("div",{className:"glass rounded-2xl px-4 py-3 w-[330px] pointer-events-auto",children:[E.jsxs("div",{className:"flex items-baseline justify-between",children:[E.jsxs("div",{className:"text-[11px] uppercase tracking-[0.08em] text-white/45 font-semibold",children:["Räckvidd rakt fram · ",n.slot]}),E.jsxs("div",{className:"text-[10.5px] text-white/35 tnum",children:[Math.round(o.fps)," fps"]})]}),E.jsxs("div",{className:"flex gap-5 mt-1.5",children:[E.jsxs("div",{children:[E.jsx("div",{className:"text-[24px] font-semibold tnum tracking-tight",children:jt(L.r1)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux (klart)"})]}),E.jsxs("div",{children:[E.jsx("div",{className:"text-[24px] font-semibold tnum tracking-tight text-white/80",children:jt(L.r025)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"0,25 lux"})]}),I.weather!=="clear"&&E.jsxs("div",{children:[E.jsx("div",{className:"text-[24px] font-semibold tnum tracking-tight text-[#64d2ff]",children:jt(L.rw)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux i vädret"})]})]}),fe()]})}),E.jsxs("div",{className:"absolute glass-strong flex flex-col shadow-2xl top-3 right-3 bottom-3 w-[372px] rounded-[22px]",children:[E.jsx("div",{className:"px-4 pt-4 pb-2",children:X}),E.jsx("div",{className:"flex-1 overflow-y-auto scroll-thin px-4 pb-4",children:Le})]}),I.view==="photo"&&E.jsxs("button",{onClick:()=>h(!0),className:"absolute right-[396px] bottom-3 max-w-[40vw] truncate text-[10px] text-white/30 hover:text-white/60 px-2 py-1",children:["Foto: ",ne.credit," · ",ne.author," · ",ne.license," · djur: Ronkos, W.carter, Sharp (CC) · källor"]})]}),m&&E.jsx(cC,{onClose:()=>h(!1),photo:ne}),x&&E.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 text-[13px] z-30",style:{top:"calc(env(safe-area-inset-top) + 64px)"},children:x}),E.jsx("span",{className:"hidden",children:pu})]})}function cC({onClose:t,photo:e}){const n=({t:i,a:r,l:s,u:o})=>E.jsxs("a",{href:o,target:"_blank",rel:"noreferrer",className:"block rounded-xl bg-white/[0.05] hover:bg-white/[0.08] px-3.5 py-2.5",children:[E.jsx("div",{className:"text-[13px] text-white/90 leading-snug",children:i}),E.jsxs("div",{className:"text-[11.5px] text-white/50 mt-0.5",children:[r," · ",E.jsx("span",{className:"text-[#64d2ff]",children:s})]})]});return E.jsx("div",{className:"absolute inset-0 z-40 flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm",onClick:t,role:"dialog","aria-modal":"true","aria-label":"Källor och licenser",children:E.jsxs("div",{className:"glass-strong w-full md:w-[480px] max-h-[85dvh] overflow-y-auto no-scrollbar rounded-t-[24px] md:rounded-[22px] p-5 shadow-2xl",style:{paddingBottom:"calc(20px + env(safe-area-inset-bottom))"},onClick:i=>i.stopPropagation(),children:[E.jsxs("div",{className:"flex items-center justify-between mb-3",children:[E.jsx("div",{className:"text-[17px] font-semibold",children:"Om bilden"}),E.jsx("button",{onClick:t,className:"tap w-11 h-11 -mr-2 rounded-full text-white/60 hover:text-white text-[22px] leading-none","aria-label":"Stäng",children:"×"})]}),E.jsx("div",{className:"text-[11px] uppercase tracking-[0.08em] text-white/45 font-semibold mb-1.5",children:"Foto i förarvyn"}),E.jsx(n,{t:`${e.credit} – ${e.kind==="night"?"omljust efter dina lampor":"dagfoto omgjort till natt"}`,a:e.author,l:e.license,u:e.url}),E.jsx("div",{className:"text-[11px] uppercase tracking-[0.08em] text-white/45 font-semibold mt-4 mb-1.5",children:"Djur (riktiga foton, frilagda)"}),E.jsx("div",{className:"space-y-1.5",children:Object.values(Us).map(i=>E.jsx(n,{t:`${i.label}: ${i.credit}`,a:i.author,l:i.license,u:i.url},i.id))}),E.jsxs("div",{className:"text-[11.5px] text-white/45 mt-4 leading-relaxed",children:["Bearbetning: foton är skalade, beskurna och frilagda och ljussätts om i realtid. Bearbetade versioner delas under samma licens (CC BY-SA där originalet är CC BY-SA). Ljusmodellen är en ungefärlig fotometrisk modell – inte en mätning. Fullständig lista: ",E.jsx("a",{className:"text-[#64d2ff]",href:"./CREDITS.md",target:"_blank",rel:"noreferrer",children:"CREDITS.md"})]})]})})}tx(document.getElementById("root")).render(E.jsx(x_.StrictMode,{children:E.jsx(uC,{})}));
