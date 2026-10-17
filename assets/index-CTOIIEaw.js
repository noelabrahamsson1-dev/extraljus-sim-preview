(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function i_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y0={exports:{}},mu={},q0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),r_=Symbol.for("react.portal"),s_=Symbol.for("react.fragment"),o_=Symbol.for("react.strict_mode"),a_=Symbol.for("react.profiler"),l_=Symbol.for("react.provider"),u_=Symbol.for("react.context"),c_=Symbol.for("react.forward_ref"),f_=Symbol.for("react.suspense"),h_=Symbol.for("react.memo"),d_=Symbol.for("react.lazy"),pp=Symbol.iterator;function p_(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var $0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K0=Object.assign,Z0={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=Z0,this.updater=n||$0}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function J0(){}J0.prototype=Ks.prototype;function Vh(t,e,n){this.props=t,this.context=e,this.refs=Z0,this.updater=n||$0}var Gh=Vh.prototype=new J0;Gh.constructor=Vh;K0(Gh,Ks.prototype);Gh.isPureReactComponent=!0;var mp=Array.isArray,Q0=Object.prototype.hasOwnProperty,Wh={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Q0.call(e,i)&&!eg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ua,type:t,key:s,ref:o,props:r,_owner:Wh.current}}function m_(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function g_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gp=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g_(""+t.key):e.toString(36)}function cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case r_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bu(o,0):i,mp(r)?(n="",t!=null&&(n=t.replace(gp,"$&/")+"/"),cl(r,e,n,"",function(u){return u})):r!=null&&(jh(r)&&(r=m_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",mp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bu(s,a);o+=cl(s,e,n,l,r)}else if(l=p_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bu(s,a++),o+=cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function va(t,e,n){if(t==null)return t;var i=[],r=0;return cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function v_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},fl={transition:null},x_={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:fl,ReactCurrentOwner:Wh};function ng(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Ks;je.Fragment=s_;je.Profiler=a_;je.PureComponent=Vh;je.StrictMode=o_;je.Suspense=f_;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x_;je.act=ng;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=K0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Q0.call(e,l)&&!eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ua,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:u_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l_,_context:t},t.Consumer=t};je.createElement=tg;je.createFactory=function(t){var e=tg.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:c_,render:t}};je.isValidElement=jh;je.lazy=function(t){return{$$typeof:d_,_payload:{_status:-1,_result:t},_init:v_}};je.memo=function(t,e){return{$$typeof:h_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};je.unstable_act=ng;je.useCallback=function(t,e){return nn.current.useCallback(t,e)};je.useContext=function(t){return nn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};je.useEffect=function(t,e){return nn.current.useEffect(t,e)};je.useId=function(){return nn.current.useId()};je.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return nn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};je.useRef=function(t){return nn.current.useRef(t)};je.useState=function(t){return nn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return nn.current.useTransition()};je.version="18.3.1";q0.exports=je;var Ge=q0.exports;const __=i_(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_=Ge,S_=Symbol.for("react.element"),M_=Symbol.for("react.fragment"),w_=Object.prototype.hasOwnProperty,E_=y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T_={key:!0,ref:!0,__self:!0,__source:!0};function ig(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)w_.call(e,i)&&!T_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:S_,type:t,key:s,ref:o,props:r,_owner:E_.current}}mu.Fragment=M_;mu.jsx=ig;mu.jsxs=ig;Y0.exports=mu;var E=Y0.exports,rg={exports:{}},Cn={},sg={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Z){var K=L.length;L.push(Z);e:for(;0<K;){var oe=K-1>>>1,ue=L[oe];if(0<r(ue,Z))L[oe]=Z,L[K]=ue,K=oe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Z=L[0],K=L.pop();if(K!==Z){L[0]=K;e:for(var oe=0,ue=L.length,Oe=ue>>>1;oe<Oe;){var $=2*(oe+1)-1,ne=L[$],pe=$+1,he=L[pe];if(0>r(ne,K))pe<ue&&0>r(he,ne)?(L[oe]=he,L[pe]=K,oe=pe):(L[oe]=ne,L[$]=K,oe=$);else if(pe<ue&&0>r(he,K))L[oe]=he,L[pe]=K,oe=pe;else break e}}return Z}function r(L,Z){var K=L.sortIndex-Z.sortIndex;return K!==0?K:L.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var Z=n(u);Z!==null;){if(Z.callback===null)i(u);else if(Z.startTime<=L)i(u),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(u)}}function S(L){if(_=!1,v(L),!g)if(n(l)!==null)g=!0,N(R);else{var Z=n(u);Z!==null&&G(S,Z.startTime-L)}}function R(L,Z){g=!1,_&&(_=!1,h(P),P=-1),p=!0;var K=d;try{for(v(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||L&&!w());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var ue=oe(f.expirationTime<=Z);Z=t.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&i(l),v(Z)}else i(l);f=n(l)}if(f!==null)var Oe=!0;else{var $=n(u);$!==null&&G(S,$.startTime-Z),Oe=!1}return Oe}finally{f=null,d=K,p=!1}}var b=!1,T=null,P=-1,O=5,y=-1;function w(){return!(t.unstable_now()-y<O)}function H(){if(T!==null){var L=t.unstable_now();y=L;var Z=!0;try{Z=T(!0,L)}finally{Z?U():(b=!1,T=null)}}else b=!1}var U;if(typeof x=="function")U=function(){x(H)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,J=X.port2;X.port1.onmessage=H,U=function(){J.postMessage(null)}}else U=function(){m(H,0)};function N(L){T=L,b||(b=!0,U())}function G(L,Z){P=m(function(){L(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,N(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var Z=3;break;default:Z=d}var K=d;d=Z;try{return L()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=d;d=L;try{return Z()}finally{d=K}},t.unstable_scheduleCallback=function(L,Z,K){var oe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,L){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=K+ue,L={id:c++,callback:Z,priorityLevel:L,startTime:K,expirationTime:ue,sortIndex:-1},K>oe?(L.sortIndex=K,e(u,L),n(l)===null&&L===n(u)&&(_?(h(P),P=-1):_=!0,G(S,K-oe))):(L.sortIndex=ue,e(l,L),g||p||(g=!0,N(R))),L},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(L){var Z=d;return function(){var K=d;d=Z;try{return L.apply(this,arguments)}finally{d=K}}}})(og);sg.exports=og;var A_=sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_=Ge,An=A_;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,Bo={};function Gr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Bo[t]=e,t=0;t<e.length;t++)ag.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=Object.prototype.hasOwnProperty,b_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vp={},xp={};function R_(t){return tf.call(xp,t)?!0:tf.call(vp,t)?!1:b_.test(t)?xp[t]=!0:(vp[t]=!0,!1)}function P_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L_(t,e,n,i){if(e===null||typeof e>"u"||P_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xh=/[\-:]([a-z])/g;function Yh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xh,Yh);zt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xh,Yh);zt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xh,Yh);zt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function qh(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L_(e,n,r,i)&&(n=null),i||r===null?R_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=C_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),$h=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),Kh=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),_p=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=_p&&t[_p]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Hu;function wo(t){if(Hu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hu=e&&e[1]||""}return`
`+Hu+t}var Vu=!1;function Gu(t,e){if(!t||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function N_(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case nf:return"Profiler";case $h:return"StrictMode";case rf:return"Suspense";case sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ug:return(t.displayName||"Context")+".Consumer";case lg:return(t._context.displayName||"Context")+".Provider";case Kh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:of(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return of(t(e))}catch{}}return null}function D_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return of(e);case 8:return e===$h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I_(t){var e=fg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=I_(t))}function hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dg(t,e){e=e.checked,e!=null&&qh(t,"checked",e,!1)}function lf(t,e){dg(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Eo(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function pg(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U_=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(t){U_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bo[e]=bo[t]})});function vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bo.hasOwnProperty(t)&&bo[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=vg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var k_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(k_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pf=null;function Jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mf=null,As=null,Cs=null;function Ep(t){if(t=ha(t)){if(typeof mf!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=yu(e),mf(t.stateNode,t.type,e))}}function _g(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function yg(){if(As){var t=As,e=Cs;if(Cs=As=null,Ep(t),e)for(t=0;t<e.length;t++)Ep(e[t])}}function Sg(t,e){return t(e)}function Mg(){}var Wu=!1;function wg(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return Sg(t,e,n)}finally{Wu=!1,(As!==null||Cs!==null)&&(Mg(),yg())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var i=yu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var gf=!1;if(Li)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){gf=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{gf=!1}function F_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ro=!1,Il=null,Ul=!1,vf=null,O_={onError:function(t){Ro=!0,Il=t}};function z_(t,e,n,i,r,s,o,a,l){Ro=!1,Il=null,F_.apply(O_,arguments)}function B_(t,e,n,i,r,s,o,a,l){if(z_.apply(this,arguments),Ro){if(Ro){var u=Il;Ro=!1,Il=null}else throw Error(ae(198));Ul||(Ul=!0,vf=u)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Eg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tp(t){if(Wr(t)!==t)throw Error(ae(188))}function H_(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Tp(r),t;if(s===i)return Tp(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Tg(t){return t=H_(t),t!==null?Ag(t):null}function Ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ag(t);if(e!==null)return e;t=t.sibling}return null}var Cg=An.unstable_scheduleCallback,Ap=An.unstable_cancelCallback,V_=An.unstable_shouldYield,G_=An.unstable_requestPaint,wt=An.unstable_now,W_=An.unstable_getCurrentPriorityLevel,Qh=An.unstable_ImmediatePriority,bg=An.unstable_UserBlockingPriority,kl=An.unstable_NormalPriority,j_=An.unstable_LowPriority,Rg=An.unstable_IdlePriority,gu=null,li=null;function X_(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:$_,Y_=Math.log,q_=Math.LN2;function $_(t){return t>>>=0,t===0?32:31-(Y_(t)/q_|0)|0}var Sa=64,Ma=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=n&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function K_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=K_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pg(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function J_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Lg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ng,td,Dg,Ig,Ug,_f=!1,wa=[],Ji=null,Qi=null,er=null,Go=new Map,Wo=new Map,qi=[],Q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ey(t,e,n,i,r){switch(e){case"focusin":return Ji=ao(Ji,t,e,n,i,r),!0;case"dragenter":return Qi=ao(Qi,t,e,n,i,r),!0;case"mouseover":return er=ao(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,ao(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wo.set(s,ao(Wo.get(s)||null,t,e,n,i,r)),!0}return!1}function kg(t){var e=Rr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Eg(n),e!==null){t.blockedOn=e,Ug(t.priority,function(){Dg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);pf=i,n.target.dispatchEvent(i),pf=null}else return e=ha(n),e!==null&&td(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){hl(t)&&n.delete(e)}function ty(){_f=!1,Ji!==null&&hl(Ji)&&(Ji=null),Qi!==null&&hl(Qi)&&(Qi=null),er!==null&&hl(er)&&(er=null),Go.forEach(bp),Wo.forEach(bp)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,_f||(_f=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,ty)))}function jo(t){function e(r){return lo(r,t)}if(0<wa.length){lo(wa[0],t);for(var n=1;n<wa.length;n++){var i=wa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&lo(Ji,t),Qi!==null&&lo(Qi,t),er!==null&&lo(er,t),Go.forEach(e),Wo.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)kg(n),n.blockedOn===null&&qi.shift()}var bs=ki.ReactCurrentBatchConfig,Ol=!0;function ny(t,e,n,i){var r=rt,s=bs.transition;bs.transition=null;try{rt=1,nd(t,e,n,i)}finally{rt=r,bs.transition=s}}function iy(t,e,n,i){var r=rt,s=bs.transition;bs.transition=null;try{rt=4,nd(t,e,n,i)}finally{rt=r,bs.transition=s}}function nd(t,e,n,i){if(Ol){var r=yf(t,e,n,i);if(r===null)tc(t,e,i,zl,n),Cp(t,i);else if(ey(r,t,e,n,i))i.stopPropagation();else if(Cp(t,i),e&4&&-1<Q_.indexOf(t)){for(;r!==null;){var s=ha(r);if(s!==null&&Ng(s),s=yf(t,e,n,i),s===null&&tc(t,e,i,zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tc(t,e,i,null,n)}}var zl=null;function yf(t,e,n,i){if(zl=null,t=Jh(i),t=Rr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Eg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function Fg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W_()){case Qh:return 1;case bg:return 4;case kl:case j_:return 16;case Rg:return 536870912;default:return 16}default:return 16}}var Ki=null,id=null,dl=null;function Og(){if(dl)return dl;var t,e=id,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function Rp(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:Rp,this.isPropagationStopped=Rp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=bn(Zs),fa=xt({},Zs,{view:0,detail:0}),ry=bn(fa),Xu,Yu,uo,vu=xt({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Xu=t.screenX-uo.screenX,Yu=t.screenY-uo.screenY):Yu=Xu=0,uo=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),Pp=bn(vu),sy=xt({},vu,{dataTransfer:0}),oy=bn(sy),ay=xt({},fa,{relatedTarget:0}),qu=bn(ay),ly=xt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=bn(ly),cy=xt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fy=bn(cy),hy=xt({},Zs,{data:0}),Lp=bn(hy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=my[t])?!!e[t]:!1}function sd(){return gy}var vy=xt({},fa,{key:function(t){if(t.key){var e=dy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?py[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xy=bn(vy),_y=xt({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=bn(_y),yy=xt({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),Sy=bn(yy),My=xt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=bn(My),Ey=xt({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=bn(Ey),Ay=[9,13,27,32],od=Li&&"CompositionEvent"in window,Po=null;Li&&"documentMode"in document&&(Po=document.documentMode);var Cy=Li&&"TextEvent"in window&&!Po,zg=Li&&(!od||Po&&8<Po&&11>=Po),Dp=" ",Ip=!1;function Bg(t,e){switch(t){case"keyup":return Ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function by(t,e){switch(t){case"compositionend":return Hg(e);case"keypress":return e.which!==32?null:(Ip=!0,Dp);case"textInput":return t=e.data,t===Dp&&Ip?null:t;default:return null}}function Ry(t,e){if(ds)return t==="compositionend"||!od&&Bg(t,e)?(t=Og(),dl=id=Ki=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zg&&e.locale!=="ko"?null:e.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Py[t.type]:e==="textarea"}function Vg(t,e,n,i){_g(i),e=Bl(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,Xo=null;function Ly(t){Qg(t,0)}function xu(t){var e=gs(t);if(hg(e))return t}function Ny(t,e){if(t==="change")return e}var Gg=!1;if(Li){var $u;if(Li){var Ku="oninput"in document;if(!Ku){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Ku=typeof kp.oninput=="function"}$u=Ku}else $u=!1;Gg=$u&&(!document.documentMode||9<document.documentMode)}function Fp(){Lo&&(Lo.detachEvent("onpropertychange",Wg),Xo=Lo=null)}function Wg(t){if(t.propertyName==="value"&&xu(Xo)){var e=[];Vg(e,Xo,t,Jh(t)),wg(Ly,e)}}function Dy(t,e,n){t==="focusin"?(Fp(),Lo=e,Xo=n,Lo.attachEvent("onpropertychange",Wg)):t==="focusout"&&Fp()}function Iy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(Xo)}function Uy(t,e){if(t==="click")return xu(e)}function ky(t,e){if(t==="input"||t==="change")return xu(e)}function Fy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:Fy;function Yo(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tf.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var n=Op(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Op(n)}}function jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xg(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Oy(t){var e=Xg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jg(n.ownerDocument.documentElement,n)){if(i!==null&&ad(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zp(n,s);var o=zp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zy=Li&&"documentMode"in document&&11>=document.documentMode,ps=null,Sf=null,No=null,Mf=!1;function Bp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mf||ps==null||ps!==Dl(i)||(i=ps,"selectionStart"in i&&ad(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&Yo(No,i)||(No=i,i=Bl(Sf,"onSelect"),0<i.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Zu={},Yg={};Li&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function _u(t){if(Zu[t])return Zu[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yg)return Zu[t]=e[n];return t}var qg=_u("animationend"),$g=_u("animationiteration"),Kg=_u("animationstart"),Zg=_u("transitionend"),Jg=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){Jg.set(t,e),Gr(e,[t])}for(var Ju=0;Ju<Hp.length;Ju++){var Qu=Hp[Ju],By=Qu.toLowerCase(),Hy=Qu[0].toUpperCase()+Qu.slice(1);hr(By,"on"+Hy)}hr(qg,"onAnimationEnd");hr($g,"onAnimationIteration");hr(Kg,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(Zg,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Vp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,B_(i,e,void 0,t),t.currentTarget=null}function Qg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Vp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Vp(r,a,u),s=l}}}if(Ul)throw t=vf,Ul=!1,vf=null,t}function ut(t,e){var n=e[Cf];n===void 0&&(n=e[Cf]=new Set);var i=t+"__bubble";n.has(i)||(ev(e,t,2,!1),n.add(i))}function ec(t,e,n){var i=0;e&&(i|=4),ev(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Aa]){t[Aa]=!0,ag.forEach(function(n){n!=="selectionchange"&&(Vy.has(n)||ec(n,!1,t),ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,ec("selectionchange",!1,e))}}function ev(t,e,n,i){switch(Fg(e)){case 1:var r=ny;break;case 4:r=iy;break;default:r=nd}n=r.bind(null,e,n,t),r=void 0,!gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wg(function(){var u=s,c=Jh(n),f=[];e:{var d=Jg.get(t);if(d!==void 0){var p=rd,g=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":p=xy;break;case"focusin":g="focus",p=qu;break;case"focusout":g="blur",p=qu;break;case"beforeblur":case"afterblur":p=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Sy;break;case qg:case $g:case Kg:p=uy;break;case Zg:p=wy;break;case"scroll":p=ry;break;case"wheel":p=Ty;break;case"copy":case"cut":case"paste":p=fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Np}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?d!==null?d+"Capture":null:d;_=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Vo(x,h),S!=null&&_.push($o(x,S,v)))),m)break;x=x.return}0<_.length&&(d=new p(d,g,null,n,c),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==pf&&(g=n.relatedTarget||n.fromElement)&&(Rr(g)||g[Ni]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Rr(g):null,g!==null&&(m=Wr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Pp,S="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=Np,S="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?d:gs(p),v=g==null?d:gs(g),d=new _(S,x+"leave",p,n,c),d.target=m,d.relatedTarget=v,S=null,Rr(c)===u&&(_=new _(h,x+"enter",g,n,c),_.target=v,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,h=g,x=0,v=_;v;v=qr(v))x++;for(v=0,S=h;S;S=qr(S))v++;for(;0<x-v;)_=qr(_),x--;for(;0<v-x;)h=qr(h),v--;for(;x--;){if(_===h||h!==null&&_===h.alternate)break t;_=qr(_),h=qr(h)}_=null}else _=null;p!==null&&Gp(f,d,p,_,!1),g!==null&&m!==null&&Gp(f,m,g,_,!0)}}e:{if(d=u?gs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=Ny;else if(Up(d))if(Gg)R=ky;else{R=Iy;var b=Dy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=Uy);if(R&&(R=R(t,u))){Vg(f,R,n,c);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&uf(d,"number",d.value)}switch(b=u?gs(u):window,t){case"focusin":(Up(b)||b.contentEditable==="true")&&(ps=b,Sf=u,No=null);break;case"focusout":No=Sf=ps=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,Bp(f,n,c);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":Bp(f,n,c)}var T;if(od)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ds?Bg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(zg&&n.locale!=="ko"&&(ds||P!=="onCompositionStart"?P==="onCompositionEnd"&&ds&&(T=Og()):(Ki=c,id="value"in Ki?Ki.value:Ki.textContent,ds=!0)),b=Bl(u,P),0<b.length&&(P=new Lp(P,t,null,n,c),f.push({event:P,listeners:b}),T?P.data=T:(T=Hg(n),T!==null&&(P.data=T)))),(T=Cy?by(t,n):Ry(t,n))&&(u=Bl(u,"onBeforeInput"),0<u.length&&(c=new Lp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}Qg(f,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Vo(t,n),s!=null&&i.unshift($o(t,s,r)),s=Vo(t,e),s!=null&&i.push($o(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Vo(n,s),l!=null&&o.unshift($o(n,l,a))):r||(l=Vo(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Gy=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function Wp(t){return(typeof t=="string"?t:""+t).replace(Gy,`
`).replace(Wy,"")}function Ca(t,e,n){if(e=Wp(e),Wp(t)!==e&&n)throw Error(ae(425))}function Hl(){}var wf=null,Ef=null;function Tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(t){return jp.resolve(null).then(t).catch(Yy)}:Af;function Yy(t){setTimeout(function(){throw t})}function nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);jo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),oi="__reactFiber$"+Js,Ko="__reactProps$"+Js,Ni="__reactContainer$"+Js,Cf="__reactEvents$"+Js,qy="__reactListeners$"+Js,$y="__reactHandles$"+Js;function Rr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xp(t);t!==null;){if(n=t[oi])return n;t=Xp(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[oi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function yu(t){return t[Ko]||null}var bf=[],vs=-1;function dr(t){return{current:t}}function ft(t){0>vs||(t.current=bf[vs],bf[vs]=null,vs--)}function at(t,e){vs++,bf[vs]=t.current,t.current=e}var ur={},qt=dr(ur),dn=dr(!1),Fr=ur;function Fs(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Vl(){ft(dn),ft(qt)}function Yp(t,e,n){if(qt.current!==ur)throw Error(ae(168));at(qt,e),at(dn,n)}function tv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,D_(t)||"Unknown",r));return xt({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Fr=qt.current,at(qt,t),at(dn,dn.current),!0}function qp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=tv(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,ft(dn),ft(qt),at(qt,t)):ft(dn),at(dn,n)}var Mi=null,Su=!1,ic=!1;function nv(t){Mi===null?Mi=[t]:Mi.push(t)}function Ky(t){Su=!0,nv(t)}function pr(){if(!ic&&Mi!==null){ic=!0;var t=0,e=rt;try{var n=Mi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,Su=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),Cg(Qh,pr),r}finally{rt=e,ic=!1}}return null}var xs=[],_s=0,Wl=null,jl=0,Ln=[],Nn=0,Or=null,Ei=1,Ti="";function Er(t,e){xs[_s++]=jl,xs[_s++]=Wl,Wl=t,jl=e}function iv(t,e,n){Ln[Nn++]=Ei,Ln[Nn++]=Ti,Ln[Nn++]=Or,Or=t;var i=Ei;t=Ti;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-Jn(e)+r|n<<r|i,Ti=s+t}else Ei=1<<s|n<<r|i,Ti=t}function ld(t){t.return!==null&&(Er(t,1),iv(t,1,0))}function ud(t){for(;t===Wl;)Wl=xs[--_s],xs[_s]=null,jl=xs[--_s],xs[_s]=null;for(;t===Or;)Or=Ln[--Nn],Ln[Nn]=null,Ti=Ln[--Nn],Ln[Nn]=null,Ei=Ln[--Nn],Ln[Nn]=null}var Tn=null,En=null,ht=!1,Yn=null;function rv(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function Rf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pf(t){if(ht){var e=En;if(e){var n=e;if(!$p(t,e)){if(Rf(t))throw Error(ae(418));e=tr(n.nextSibling);var i=Tn;e&&$p(t,e)?rv(i,n):(t.flags=t.flags&-4097|2,ht=!1,Tn=t)}}else{if(Rf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,ht=!1,Tn=t}}}function Kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function ba(t){if(t!==Tn)return!1;if(!ht)return Kp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tf(t.type,t.memoizedProps)),e&&(e=En)){if(Rf(t))throw sv(),Error(ae(418));for(;e;)rv(t,e),e=tr(e.nextSibling)}if(Kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?tr(t.stateNode.nextSibling):null;return!0}function sv(){for(var t=En;t;)t=tr(t.nextSibling)}function Os(){En=Tn=null,ht=!1}function cd(t){Yn===null?Yn=[t]:Yn.push(t)}var Zy=ki.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zp(t){var e=t._init;return e(t._payload)}function ov(t){function e(h,x){if(t){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=sr(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,x,v,S){return x===null||x.tag!==6?(x=cc(v,h.mode,S),x.return=h,x):(x=r(x,v),x.return=h,x)}function l(h,x,v,S){var R=v.type;return R===hs?c(h,x,v.props.children,S,v.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xi&&Zp(R)===x.type)?(S=r(x,v.props),S.ref=co(h,x,v),S.return=h,S):(S=Sl(v.type,v.key,v.props,null,h.mode,S),S.ref=co(h,x,v),S.return=h,S)}function u(h,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=fc(v,h.mode,S),x.return=h,x):(x=r(x,v.children||[]),x.return=h,x)}function c(h,x,v,S,R){return x===null||x.tag!==7?(x=Ur(v,h.mode,S,R),x.return=h,x):(x=r(x,v),x.return=h,x)}function f(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=cc(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xa:return v=Sl(x.type,x.key,x.props,null,h.mode,v),v.ref=co(h,null,x),v.return=h,v;case fs:return x=fc(x,h.mode,v),x.return=h,x;case Xi:var S=x._init;return f(h,S(x._payload),v)}if(Eo(x)||so(x))return x=Ur(x,h.mode,v,null),x.return=h,x;Ra(h,x)}return null}function d(h,x,v,S){var R=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(h,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:return v.key===R?l(h,x,v,S):null;case fs:return v.key===R?u(h,x,v,S):null;case Xi:return R=v._init,d(h,x,R(v._payload),S)}if(Eo(v)||so(v))return R!==null?null:c(h,x,v,S,null);Ra(h,v)}return null}function p(h,x,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(x,h,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xa:return h=h.get(S.key===null?v:S.key)||null,l(x,h,S,R);case fs:return h=h.get(S.key===null?v:S.key)||null,u(x,h,S,R);case Xi:var b=S._init;return p(h,x,v,b(S._payload),R)}if(Eo(S)||so(S))return h=h.get(v)||null,c(x,h,S,R,null);Ra(x,S)}return null}function g(h,x,v,S){for(var R=null,b=null,T=x,P=x=0,O=null;T!==null&&P<v.length;P++){T.index>P?(O=T,T=null):O=T.sibling;var y=d(h,T,v[P],S);if(y===null){T===null&&(T=O);break}t&&T&&y.alternate===null&&e(h,T),x=s(y,x,P),b===null?R=y:b.sibling=y,b=y,T=O}if(P===v.length)return n(h,T),ht&&Er(h,P),R;if(T===null){for(;P<v.length;P++)T=f(h,v[P],S),T!==null&&(x=s(T,x,P),b===null?R=T:b.sibling=T,b=T);return ht&&Er(h,P),R}for(T=i(h,T);P<v.length;P++)O=p(T,h,P,v[P],S),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?P:O.key),x=s(O,x,P),b===null?R=O:b.sibling=O,b=O);return t&&T.forEach(function(w){return e(h,w)}),ht&&Er(h,P),R}function _(h,x,v,S){var R=so(v);if(typeof R!="function")throw Error(ae(150));if(v=R.call(v),v==null)throw Error(ae(151));for(var b=R=null,T=x,P=x=0,O=null,y=v.next();T!==null&&!y.done;P++,y=v.next()){T.index>P?(O=T,T=null):O=T.sibling;var w=d(h,T,y.value,S);if(w===null){T===null&&(T=O);break}t&&T&&w.alternate===null&&e(h,T),x=s(w,x,P),b===null?R=w:b.sibling=w,b=w,T=O}if(y.done)return n(h,T),ht&&Er(h,P),R;if(T===null){for(;!y.done;P++,y=v.next())y=f(h,y.value,S),y!==null&&(x=s(y,x,P),b===null?R=y:b.sibling=y,b=y);return ht&&Er(h,P),R}for(T=i(h,T);!y.done;P++,y=v.next())y=p(T,h,P,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?P:y.key),x=s(y,x,P),b===null?R=y:b.sibling=y,b=y);return t&&T.forEach(function(H){return e(h,H)}),ht&&Er(h,P),R}function m(h,x,v,S){if(typeof v=="object"&&v!==null&&v.type===hs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:e:{for(var R=v.key,b=x;b!==null;){if(b.key===R){if(R=v.type,R===hs){if(b.tag===7){n(h,b.sibling),x=r(b,v.props.children),x.return=h,h=x;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xi&&Zp(R)===b.type){n(h,b.sibling),x=r(b,v.props),x.ref=co(h,b,v),x.return=h,h=x;break e}n(h,b);break}else e(h,b);b=b.sibling}v.type===hs?(x=Ur(v.props.children,h.mode,S,v.key),x.return=h,h=x):(S=Sl(v.type,v.key,v.props,null,h.mode,S),S.ref=co(h,x,v),S.return=h,h=S)}return o(h);case fs:e:{for(b=v.key;x!==null;){if(x.key===b)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(h,x.sibling),x=r(x,v.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=fc(v,h.mode,S),x.return=h,h=x}return o(h);case Xi:return b=v._init,m(h,x,b(v._payload),S)}if(Eo(v))return g(h,x,v,S);if(so(v))return _(h,x,v,S);Ra(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,v),x.return=h,h=x):(n(h,x),x=cc(v,h.mode,S),x.return=h,h=x),o(h)):n(h,x)}return m}var zs=ov(!0),av=ov(!1),Xl=dr(null),Yl=null,ys=null,fd=null;function hd(){fd=ys=Yl=null}function dd(t){var e=Xl.current;ft(Xl),t._currentValue=e}function Lf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Yl=t,fd=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(fd!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Yl===null)throw Error(ae(308));ys=t,Yl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Pr=null;function pd(t){Pr===null?Pr=[t]:Pr.push(t)}function lv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}function Jp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(d=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=xt({},f,d);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=f}}function Qp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var da={},ui=dr(da),Zo=dr(da),Jo=dr(da);function Lr(t){if(t===da)throw Error(ae(174));return t}function gd(t,e){switch(at(Jo,e),at(Zo,t),at(ui,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ff(e,t)}ft(ui),at(ui,e)}function Bs(){ft(ui),ft(Zo),ft(Jo)}function cv(t){Lr(Jo.current);var e=Lr(ui.current),n=ff(e,t.type);e!==n&&(at(Zo,t),at(ui,n))}function vd(t){Zo.current===t&&(ft(ui),ft(Zo))}var dt=dr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rc=[];function xd(){for(var t=0;t<rc.length;t++)rc[t]._workInProgressVersionPrimary=null;rc.length=0}var gl=ki.ReactCurrentDispatcher,sc=ki.ReactCurrentBatchConfig,zr=0,gt=null,Ct=null,Nt=null,Kl=!1,Do=!1,Qo=0,Jy=0;function Ht(){throw Error(ae(321))}function _d(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function yd(t,e,n,i,r,s){if(zr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?nS:iS,t=n(i,r),Do){s=0;do{if(Do=!1,Qo=0,25<=s)throw Error(ae(301));s+=1,Nt=Ct=null,e.updateQueue=null,gl.current=rS,t=n(i,r)}while(Do)}if(gl.current=Zl,e=Ct!==null&&Ct.next!==null,zr=0,Nt=Ct=gt=null,Kl=!1,e)throw Error(ae(300));return t}function Sd(){var t=Qo!==0;return Qo=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function On(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Nt===null?gt.memoizedState:Nt.next;if(e!==null)Nt=e,Ct=t;else{if(t===null)throw Error(ae(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function ea(t,e){return typeof e=="function"?e(t):e}function oc(t){var e=On(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=c,Br|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ac(t){var e=On(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fv(){}function hv(t,e){var n=gt,i=On(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Md(mv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,ta(9,pv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ae(349));zr&30||dv(n,e,r)}return r}function dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pv(t,e,n,i){e.value=n,e.getSnapshot=i,gv(e)&&vv(t)}function mv(t,e,n){return n(function(){gv(e)&&vv(t)})}function gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function vv(t){var e=Di(t,1);e!==null&&Qn(e,t,1,-1)}function em(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=tS.bind(null,gt,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function xv(){return On().memoizedState}function vl(t,e,n,i){var r=ni();gt.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function Mu(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&_d(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}gt.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function tm(t,e){return vl(8390656,8,t,e)}function Md(t,e){return Mu(2048,8,t,e)}function _v(t,e){return Mu(4,2,t,e)}function yv(t,e){return Mu(4,4,t,e)}function Sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mv(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,Sv.bind(null,e,t),n)}function wd(){}function wv(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_d(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ev(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_d(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Tv(t,e,n){return zr&21?(ei(n,e)||(n=Pg(),gt.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function Qy(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=sc.transition;sc.transition={};try{t(!1),e()}finally{rt=n,sc.transition=i}}function Av(){return On().memoizedState}function eS(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cv(t))bv(e,n);else if(n=lv(t,e,n,i),n!==null){var r=Qt();Qn(n,t,i,r),Rv(n,e,i)}}function tS(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cv(t))bv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,pd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=lv(t,e,r,i),n!==null&&(r=Qt(),Qn(n,t,i,r),Rv(n,e,i))}}function Cv(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function bv(t,e){Do=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}var Zl={readContext:Fn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},nS={readContext:Fn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:tm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,Sv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=eS.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:em,useDebugValue:wd,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=em(!1),e=t[0];return t=Qy.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ni();if(ht){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Dt===null)throw Error(ae(349));zr&30||dv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,tm(mv.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,pv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Dt.identifierPrefix;if(ht){var n=Ti,i=Ei;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iS={readContext:Fn,useCallback:wv,useContext:Fn,useEffect:Md,useImperativeHandle:Mv,useInsertionEffect:_v,useLayoutEffect:yv,useMemo:Ev,useReducer:oc,useRef:xv,useState:function(){return oc(ea)},useDebugValue:wd,useDeferredValue:function(t){var e=On();return Tv(e,Ct.memoizedState,t)},useTransition:function(){var t=oc(ea)[0],e=On().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:hv,useId:Av,unstable_isNewReconciler:!1},rS={readContext:Fn,useCallback:wv,useContext:Fn,useEffect:Md,useImperativeHandle:Mv,useInsertionEffect:_v,useLayoutEffect:yv,useMemo:Ev,useReducer:ac,useRef:xv,useState:function(){return ac(ea)},useDebugValue:wd,useDeferredValue:function(t){var e=On();return Ct===null?e.memoizedState=t:Tv(e,Ct.memoizedState,t)},useTransition:function(){var t=ac(ea)[0],e=On().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:hv,useId:Av,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=rr(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Qn(e,t,r,i),ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=rr(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Qn(e,t,r,i),ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=rr(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Qn(e,t,i,n),ml(e,t,i))}};function nm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,i)||!Yo(r,s):!0}function Pv(t,e,n){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=pn(e)?Fr:qt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function im(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Df(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},md(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=pn(e)?Fr:qt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wu.enqueueReplaceState(r,r.state,null),ql(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=N_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function If(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sS=typeof WeakMap=="function"?WeakMap:Map;function Lv(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,Wf=i),If(t,e)},n}function Nv(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){If(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){If(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new sS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_S.bind(null,t,e,n),e.then(t,t))}function sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function om(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var oS=ki.ReactCurrentOwner,fn=!1;function Kt(t,e,n,i){e.child=t===null?av(e,null,n,i):zs(e,t.child,n,i)}function am(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=yd(t,e,n,i,s,r),n=Sd(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ht&&n&&ld(e),e.flags|=1,Kt(t,e,i,r),e.child)}function lm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ld(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dv(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Dv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Yo(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return Uf(t,e,n,i,r)}function Iv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Ms,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Ms,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(Ms,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(Ms,Sn),Sn|=i;return Kt(t,e,r,n),e.child}function Uv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uf(t,e,n,i,r){var s=pn(n)?Fr:qt.current;return s=Fs(e,s),Rs(e,r),n=yd(t,e,n,i,s,r),i=Sd(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ht&&i&&ld(e),e.flags|=1,Kt(t,e,n,r),e.child)}function um(t,e,n,i,r){if(pn(n)){var s=!0;Gl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)xl(t,e),Pv(e,n,i),Df(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fn(u):(u=pn(n)?Fr:qt.current,u=Fs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&im(e,o,i,u),Yi=!1;var d=e.memoizedState;o.state=d,ql(e,i,o,r),l=e.memoizedState,a!==i||d!==l||dn.current||Yi?(typeof c=="function"&&(Nf(e,n,c,i),l=e.memoizedState),(a=Yi||nm(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,uv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:jn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=pn(n)?Fr:qt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&im(e,o,i,l),Yi=!1,d=e.memoizedState,o.state=d,ql(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||dn.current||Yi?(typeof p=="function"&&(Nf(e,n,p,i),g=e.memoizedState),(u=Yi||nm(e,n,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return kf(t,e,n,i,s,r)}function kf(t,e,n,i,r,s){Uv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&qp(e,n,!1),Ii(t,e,s);i=e.stateNode,oS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&qp(e,n,!0),e.child}function kv(t){var e=t.stateNode;e.pendingContext?Yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yp(t,e.context,!1),gd(t,e.containerInfo)}function cm(t,e,n,i,r){return Os(),cd(r),e.flags|=256,Kt(t,e,n,i),e.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function Of(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(dt,r&1),t===null)return Pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Au(o,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Of(n),e.memoizedState=Ff,t):Ed(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return aS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ff,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ed(t,e){return e=Au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&cd(i),zs(e,t.child,null,n),t=Ed(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=lc(Error(ae(422))),Pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Au({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=Ff,s);if(!(e.mode&1))return Pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=lc(s,i,void 0),Pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),Qn(i,t,r,-1))}return Pd(),i=lc(Error(ae(421))),Pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=yS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=tr(r.nextSibling),Tn=e,ht=!0,Yn=null,t!==null&&(Ln[Nn++]=Ei,Ln[Nn++]=Ti,Ln[Nn++]=Or,Ei=t.id,Ti=t.overflow,Or=e),e=Ed(e,i.children),e.flags|=4096,e)}function fm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Lf(t.return,e,n)}function uc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fm(t,n,e);else if(t.tag===19)fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}uc(e,!0,n,null,s);break;case"together":uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lS(t,e,n){switch(e.tag){case 3:kv(e),Os();break;case 5:cv(e);break;case 1:pn(e.type)&&Gl(e);break;case 4:gd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Fv(t,e,n):(at(dt,dt.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);at(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Iv(t,e,n)}return Ii(t,e,n)}var zv,zf,Bv,Hv;zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zf=function(){};Bv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(ui.current);var s=null;switch(n){case"input":r=af(t,r),i=af(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=cf(t,r),i=cf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hl)}hf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Hv=function(t,e,n,i){n!==i&&(e.flags|=4)};function fo(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function uS(t,e,n){var i=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return pn(e.type)&&Vl(),Vt(e),null;case 3:return i=e.stateNode,Bs(),ft(dn),ft(qt),xd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Yf(Yn),Yn=null))),zf(t,e),Vt(e),null;case 5:vd(e);var r=Lr(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Bv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Vt(e),null}if(t=Lr(ui.current),ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)ut(Ao[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":yp(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Mp(i,s),ut("invalid",i)}hf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":_a(i),Sp(i,s,!0);break;case"textarea":_a(i),wp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[Ko]=i,zv(t,e,!1,!1),e.stateNode=t;e:{switch(o=df(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)ut(Ao[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":yp(t,i),r=af(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Mp(t,i),r=cf(t,i),ut("invalid",t);break;default:r=i}hf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&qh(t,s,l,o))}switch(n){case"input":_a(t),Sp(t,i,!1);break;case"textarea":_a(t),wp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Hv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Lr(Jo.current),Lr(ui.current),ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Vt(e),null;case 13:if(ft(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&En!==null&&e.mode&1&&!(e.flags&128))sv(),Os(),e.flags|=98560,s=!1;else if(s=ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[oi]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Yn!==null&&(Yf(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?bt===0&&(bt=3):Pd())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Bs(),zf(t,e),t===null&&qo(e.stateNode.containerInfo),Vt(e),null;case 10:return dd(e.type._context),Vt(e),null;case 17:return pn(e.type)&&Vl(),Vt(e),null;case 19:if(ft(dt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fo(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Vs&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=$l(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Vt(e),null}else 2*wt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=dt.current,at(dt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Rd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function cS(t,e){switch(ud(e),e.tag){case 1:return pn(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),ft(dn),ft(qt),xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(ft(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(dt),null;case 4:return Bs(),null;case 10:return dd(e.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var La=!1,Xt=!1,fS=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Bf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var hm=!1;function hS(t,e){if(wf=Ol,t=Xg(),ad(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ef={focusedElem:t,selectionRange:n},Ol=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:jn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return g=hm,hm=!1,g}function Io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Bf(e,n,s)}r=r.next}while(r!==i)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vv(t){var e=t.alternate;e!==null&&(t.alternate=null,Vv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[Ko],delete e[Cf],delete e[qy],delete e[$y])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gv(t){return t.tag===5||t.tag===3||t.tag===4}function dm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(t=t.child,t!==null))for(Vf(t,e,n),t=t.sibling;t!==null;)Vf(t,e,n),t=t.sibling}function Gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}var Ut=null,Xn=!1;function zi(t,e,n){for(n=n.child;n!==null;)Wv(t,e,n),n=n.sibling}function Wv(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:Xt||Ss(n,e);case 6:var i=Ut,r=Xn;Ut=null,zi(t,e,n),Ut=i,Xn=r,Ut!==null&&(Xn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Xn?(t=Ut,n=n.stateNode,t.nodeType===8?nc(t.parentNode,n):t.nodeType===1&&nc(t,n),jo(t)):nc(Ut,n.stateNode));break;case 4:i=Ut,r=Xn,Ut=n.stateNode.containerInfo,Xn=!0,zi(t,e,n),Ut=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bf(n,e,o),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!Xt&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,zi(t,e,n),Xt=i):zi(t,e,n);break;default:zi(t,e,n)}}function pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fS),e.forEach(function(i){var r=SS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Xn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Xn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Ut===null)throw Error(ae(160));Wv(s,o,r),Ut=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jv(e,t),e=e.sibling}function jv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ti(t),i&4){try{Io(3,t,t.return),Eu(3,t)}catch(_){yt(t,t.return,_)}try{Io(5,t,t.return)}catch(_){yt(t,t.return,_)}}break;case 1:Bn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(Bn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{Ho(r,"")}catch(_){yt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dg(r,s),df(a,o);var u=df(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?xg(r,f):c==="dangerouslySetInnerHTML"?gg(r,f):c==="children"?Ho(r,f):qh(r,c,f,u)}switch(a){case"input":lf(r,s);break;case"textarea":pg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(_){yt(t,t.return,_)}}break;case 6:if(Bn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){yt(t,t.return,_)}}break;case 3:if(Bn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(_){yt(t,t.return,_)}break;case 4:Bn(e,t),ti(t);break;case 13:Bn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cd=wt())),i&4&&pm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(u=Xt)||c,Bn(e,t),Xt=u):Bn(e,t),ti(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(_e=t,c=t.child;c!==null;){for(f=_e=c;_e!==null;){switch(d=_e,p=d.child,d.tag){case 0:case 11:case 14:case 15:Io(4,d,d.return);break;case 1:Ss(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){yt(i,n,_)}}break;case 5:Ss(d,d.return);break;case 22:if(d.memoizedState!==null){gm(f);continue}}p!==null?(p.return=d,_e=p):gm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vg("display",o))}catch(_){yt(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){yt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Bn(e,t),ti(t),i&4&&pm(t);break;case 21:break;default:Bn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gv(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=dm(t);Gf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dm(t);Vf(t,a,o);break;default:throw Error(ae(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dS(t,e,n){_e=t,Xv(t)}function Xv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||La;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=La;var u=Xt;if(La=o,(Xt=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?vm(r):l!==null?(l.return=o,_e=l):vm(r);for(;s!==null;)_e=s,Xv(s),s=s.sibling;_e=r,La=a,Xt=u}mm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):mm(t)}}function mm(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&jo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Xt||e.flags&512&&Hf(e)}catch(d){yt(e,e.return,d)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function gm(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function vm(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Hf(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Hf(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var pS=Math.ceil,Jl=ki.ReactCurrentDispatcher,Td=ki.ReactCurrentOwner,kn=ki.ReactCurrentBatchConfig,qe=0,Dt=null,At=null,Ft=0,Sn=0,Ms=dr(0),bt=0,na=null,Br=0,Tu=0,Ad=0,Uo=null,ln=null,Cd=0,Vs=1/0,Si=null,Ql=!1,Wf=null,ir=null,Na=!1,Zi=null,eu=0,ko=0,jf=null,_l=-1,yl=0;function Qt(){return qe&6?wt():_l!==-1?_l:_l=wt()}function rr(t){return t.mode&1?qe&2&&Ft!==0?Ft&-Ft:Zy.transition!==null?(yl===0&&(yl=Pg()),yl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Fg(t.type)),t):1}function Qn(t,e,n,i){if(50<ko)throw ko=0,jf=null,Error(ae(185));ca(t,n,i),(!(qe&2)||t!==Dt)&&(t===Dt&&(!(qe&2)&&(Tu|=n),bt===4&&$i(t,Ft)),mn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Vs=wt()+500,Su&&pr()))}function mn(t,e){var n=t.callbackNode;Z_(t,e);var i=Fl(t,t===Dt?Ft:0);if(i===0)n!==null&&Ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ap(n),e===1)t.tag===0?Ky(xm.bind(null,t)):nv(xm.bind(null,t)),Xy(function(){!(qe&6)&&pr()}),n=null;else{switch(Lg(i)){case 1:n=Qh;break;case 4:n=bg;break;case 16:n=kl;break;case 536870912:n=Rg;break;default:n=kl}n=ex(n,Yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yv(t,e){if(_l=-1,yl=0,qe&6)throw Error(ae(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=Fl(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tu(t,i);else{e=i;var r=qe;qe|=2;var s=$v();(Dt!==t||Ft!==e)&&(Si=null,Vs=wt()+500,Ir(t,e));do try{vS();break}catch(a){qv(t,a)}while(!0);hd(),Jl.current=s,qe=r,At!==null?e=0:(Dt=null,Ft=0,e=bt)}if(e!==0){if(e===2&&(r=xf(t),r!==0&&(i=r,e=Xf(t,r))),e===1)throw n=na,Ir(t,0),$i(t,i),mn(t,wt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!mS(r)&&(e=tu(t,i),e===2&&(s=xf(t),s!==0&&(i=s,e=Xf(t,s))),e===1))throw n=na,Ir(t,0),$i(t,i),mn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Tr(t,ln,Si);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Cd+500-wt(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Af(Tr.bind(null,t,ln,Si),e);break}Tr(t,ln,Si);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*pS(i/1960))-i,10<i){t.timeoutHandle=Af(Tr.bind(null,t,ln,Si),i);break}Tr(t,ln,Si);break;case 5:Tr(t,ln,Si);break;default:throw Error(ae(329))}}}return mn(t,wt()),t.callbackNode===n?Yv.bind(null,t):null}function Xf(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=tu(t,e),t!==2&&(e=ln,ln=n,e!==null&&Yf(e)),t}function Yf(t){ln===null?ln=t:ln.push.apply(ln,t)}function mS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Ad,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function xm(t){if(qe&6)throw Error(ae(327));Ps();var e=Fl(t,0);if(!(e&1))return mn(t,wt()),null;var n=tu(t,e);if(t.tag!==0&&n===2){var i=xf(t);i!==0&&(e=i,n=Xf(t,i))}if(n===1)throw n=na,Ir(t,0),$i(t,e),mn(t,wt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,ln,Si),mn(t,wt()),null}function bd(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Vs=wt()+500,Su&&pr())}}function Hr(t){Zi!==null&&Zi.tag===0&&!(qe&6)&&Ps();var e=qe;qe|=1;var n=kn.transition,i=rt;try{if(kn.transition=null,rt=1,t)return t()}finally{rt=i,kn.transition=n,qe=e,!(qe&6)&&pr()}}function Rd(){Sn=Ms.current,ft(Ms)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jy(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(ud(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vl();break;case 3:Bs(),ft(dn),ft(qt),xd();break;case 5:vd(i);break;case 4:Bs();break;case 13:ft(dt);break;case 19:ft(dt);break;case 10:dd(i.type._context);break;case 22:case 23:Rd()}n=n.return}if(Dt=t,At=t=sr(t.current,null),Ft=Sn=e,bt=0,na=null,Ad=Tu=Br=0,ln=Uo=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Pr=null}return t}function qv(t,e){do{var n=At;try{if(hd(),gl.current=Zl,Kl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kl=!1}if(zr=0,Nt=Ct=gt=null,Do=!1,Qo=0,Td.current=null,n===null||n.return===null){bt=1,na=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=sm(o);if(p!==null){p.flags&=-257,om(p,o,a,s,e),p.mode&1&&rm(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){rm(s,u,e),Pd();break e}l=Error(ae(426))}}else if(ht&&a.mode&1){var m=sm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),om(m,o,a,s,e),cd(Hs(l,a));break e}}s=l=Hs(l,a),bt!==4&&(bt=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Lv(s,l,e);Jp(s,h);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Nv(s,a,e);Jp(s,S);break e}}s=s.return}while(s!==null)}Zv(n)}catch(R){e=R,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function $v(){var t=Jl.current;return Jl.current=Zl,t===null?Zl:t}function Pd(){(bt===0||bt===3||bt===2)&&(bt=4),Dt===null||!(Br&268435455)&&!(Tu&268435455)||$i(Dt,Ft)}function tu(t,e){var n=qe;qe|=2;var i=$v();(Dt!==t||Ft!==e)&&(Si=null,Ir(t,e));do try{gS();break}catch(r){qv(t,r)}while(!0);if(hd(),qe=n,Jl.current=i,At!==null)throw Error(ae(261));return Dt=null,Ft=0,bt}function gS(){for(;At!==null;)Kv(At)}function vS(){for(;At!==null&&!V_();)Kv(At)}function Kv(t){var e=Qv(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?Zv(t):At=e,Td.current=null}function Zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cS(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,At=null;return}}else if(n=uS(n,e,Sn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);bt===0&&(bt=5)}function Tr(t,e,n){var i=rt,r=kn.transition;try{kn.transition=null,rt=1,xS(t,e,n,i)}finally{kn.transition=r,rt=i}return null}function xS(t,e,n,i){do Ps();while(Zi!==null);if(qe&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(J_(t,s),t===Dt&&(At=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,ex(kl,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=rt;rt=1;var a=qe;qe|=4,Td.current=null,hS(t,n),jv(n,t),Oy(Ef),Ol=!!wf,Ef=wf=null,t.current=n,dS(n),G_(),qe=a,rt=o,kn.transition=s}else t.current=n;if(Na&&(Na=!1,Zi=t,eu=r),s=t.pendingLanes,s===0&&(ir=null),X_(n.stateNode),mn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=Wf,Wf=null,t;return eu&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===jf?ko++:(ko=0,jf=t):ko=0,pr(),null}function Ps(){if(Zi!==null){var t=Lg(eu),e=kn.transition,n=rt;try{if(kn.transition=null,rt=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,eu=0,qe&6)throw Error(ae(331));var r=qe;for(qe|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:Io(8,c,s)}var f=c.child;if(f!==null)f.return=c,_e=f;else for(;_e!==null;){c=_e;var d=c.sibling,p=c.return;if(Vv(c),c===u){_e=null;break}if(d!==null){d.return=p,_e=d;break}_e=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,_e=h;break e}_e=s.return}}var x=t.current;for(_e=x;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=x;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eu(9,a)}}catch(R){yt(a,a.return,R)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(qe=r,pr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(gu,t)}catch{}i=!0}return i}finally{rt=n,kn.transition=e}}return!1}function _m(t,e,n){e=Hs(n,e),e=Lv(t,e,1),t=nr(t,e,1),e=Qt(),t!==null&&(ca(t,1,e),mn(t,e))}function yt(t,e,n){if(t.tag===3)_m(t,t,n);else for(;e!==null;){if(e.tag===3){_m(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Hs(n,t),t=Nv(e,t,1),e=nr(e,t,1),t=Qt(),e!==null&&(ca(e,1,t),mn(e,t));break}}e=e.return}}function _S(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(bt===4||bt===3&&(Ft&130023424)===Ft&&500>wt()-Cd?Ir(t,0):Ad|=n),mn(t,e)}function Jv(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=Qt();t=Di(t,e),t!==null&&(ca(t,e,n),mn(t,n))}function yS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jv(t,n)}function SS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),Jv(t,n)}var Qv;Qv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,lS(t,e,n);fn=!!(t.flags&131072)}else fn=!1,ht&&e.flags&1048576&&iv(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xl(t,e),t=e.pendingProps;var r=Fs(e,qt.current);Rs(e,n),r=yd(null,e,i,t,r,n);var s=Sd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,md(e),r.updater=wu,e.stateNode=r,r._reactInternals=e,Df(e,i,t,n),e=kf(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&ld(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wS(i),t=jn(i,t),r){case 0:e=Uf(null,e,i,t,n);break e;case 1:e=um(null,e,i,t,n);break e;case 11:e=am(null,e,i,t,n);break e;case 14:e=lm(null,e,i,jn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Uf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),um(t,e,i,r,n);case 3:e:{if(kv(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,uv(t,e),ql(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(ae(423)),e),e=cm(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(ae(424)),e),e=cm(t,e,i,n,r);break e}else for(En=tr(e.stateNode.containerInfo.firstChild),Tn=e,ht=!0,Yn=null,n=av(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=Ii(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return cv(e),t===null&&Pf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Tf(i,r)?o=null:s!==null&&Tf(i,s)&&(e.flags|=32),Uv(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&Pf(e),null;case 13:return Fv(t,e,n);case 4:return gd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),am(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(Xl,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!dn.current){e=Ii(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=Fn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),lm(t,e,i,r,n);case 15:return Dv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),xl(t,e),e.tag=1,pn(i)?(t=!0,Gl(e)):t=!1,Rs(e,n),Pv(e,i,r),Df(e,i,r,n),kf(null,e,i,!0,t,n);case 19:return Ov(t,e,n);case 22:return Iv(t,e,n)}throw Error(ae(156,e.tag))};function ex(t,e){return Cg(t,e)}function MS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new MS(t,e,n,i)}function Ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wS(t){if(typeof t=="function")return Ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kh)return 11;if(t===Zh)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ld(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Ur(n.children,r,s,e);case $h:o=8,r|=8;break;case nf:return t=Un(12,n,e,r|2),t.elementType=nf,t.lanes=s,t;case rf:return t=Un(13,n,e,r),t.elementType=rf,t.lanes=s,t;case sf:return t=Un(19,n,e,r),t.elementType=sf,t.lanes=s,t;case cg:return Au(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lg:o=10;break e;case ug:o=9;break e;case Kh:o=11;break e;case Zh:o=14;break e;case Xi:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function Au(t,e,n,i){return t=Un(22,t,i,e),t.elementType=cg,t.lanes=n,t.stateNode={isHidden:!1},t}function cc(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ES(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nd(t,e,n,i,r,s,o,a,l){return t=new ES(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(s),t}function TS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function tx(t){if(!t)return ur;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(pn(n))return tv(t,n,e)}return e}function nx(t,e,n,i,r,s,o,a,l){return t=Nd(n,i,!0,t,r,s,o,a,l),t.context=tx(null),n=t.current,i=Qt(),r=rr(n),s=Ri(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,ca(t,r,i),mn(t,i),t}function Cu(t,e,n,i){var r=e.current,s=Qt(),o=rr(r);return n=tx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(Qn(t,r,o,s),ml(t,r,o)),o}function nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ym(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dd(t,e){ym(t,e),(t=t.alternate)&&ym(t,e)}function AS(){return null}var ix=typeof reportError=="function"?reportError:function(t){console.error(t)};function Id(t){this._internalRoot=t}bu.prototype.render=Id.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Cu(t,e,null,null)};bu.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){Cu(null,t,null,null)}),e[Ni]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&kg(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sm(){}function CS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=nu(o);s.call(u)}}var o=nx(e,i,t,0,null,!1,!1,"",Sm);return t._reactRootContainer=o,t[Ni]=o.current,qo(t.nodeType===8?t.parentNode:t),Hr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=nu(l);a.call(u)}}var l=Nd(t,0,!1,null,null,!1,!1,"",Sm);return t._reactRootContainer=l,t[Ni]=l.current,qo(t.nodeType===8?t.parentNode:t),Hr(function(){Cu(e,l,n,i)}),l}function Pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nu(o);a.call(l)}}Cu(e,o,t,r)}else o=CS(n,e,t,r,i);return nu(o)}Ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(ed(e,n|1),mn(e,wt()),!(qe&6)&&(Vs=wt()+500,pr()))}break;case 13:Hr(function(){var i=Di(t,1);if(i!==null){var r=Qt();Qn(i,t,1,r)}}),Dd(t,1)}};td=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=Qt();Qn(e,t,134217728,n)}Dd(t,134217728)}};Dg=function(t){if(t.tag===13){var e=rr(t),n=Di(t,e);if(n!==null){var i=Qt();Qn(n,t,e,i)}Dd(t,e)}};Ig=function(){return rt};Ug=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};mf=function(t,e,n){switch(e){case"input":if(lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yu(i);if(!r)throw Error(ae(90));hg(i),lf(i,r)}}}break;case"textarea":pg(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Sg=bd;Mg=Hr;var bS={usingClientEntryPoint:!1,Events:[ha,gs,yu,_g,yg,bd]},ho={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RS={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tg(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||AS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{gu=Da.inject(RS),li=Da}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(e))throw Error(ae(200));return TS(t,e,null,n)};Cn.createRoot=function(t,e){if(!Ud(t))throw Error(ae(299));var n=!1,i="",r=ix;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nd(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,qo(t.nodeType===8?t.parentNode:t),new Id(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Tg(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Hr(t)};Cn.hydrate=function(t,e,n){if(!Ru(e))throw Error(ae(200));return Pu(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Ud(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ix;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=nx(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bu(e)};Cn.render=function(t,e,n){if(!Ru(e))throw Error(ae(200));return Pu(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(ae(40));return t._reactRootContainer?(Hr(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Cn.unstable_batchedUpdates=bd;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ru(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Pu(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(t){console.error(t)}}rx(),rg.exports=Cn;var PS=rg.exports,sx,Mm=PS;sx=Mm.createRoot,Mm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="169",LS=0,wm=1,NS=2,ox=1,DS=2,_i=3,cr=0,en=1,Dn=2,or=0,Ls=1,iu=2,Em=3,Tm=4,Fd=5,wi=100,IS=101,US=102,kS=103,FS=104,Od=200,OS=201,zd=202,zS=203,qf=204,$f=205,BS=206,HS=207,VS=208,GS=209,WS=210,jS=211,XS=212,YS=213,qS=214,Kf=0,ia=1,Zf=2,Gs=3,Jf=4,Qf=5,eh=6,th=7,ax=0,$S=1,KS=2,Pi=0,ZS=1,JS=2,QS=3,e1=4,t1=5,n1=6,i1=7,lx=300,Ws=301,js=302,nh=303,ih=304,Lu=306,ru=1e3,Nr=1001,rh=1002,hn=1003,r1=1004,Ia=1005,Jt=1006,hc=1007,Ai=1008,Ui=1009,ux=1010,cx=1011,ra=1012,Bd=1013,fr=1014,Kn=1015,Qs=1016,Hd=1017,Vd=1018,Xs=1020,fx=35902,hx=1021,dx=1022,Zn=1023,px=1024,mx=1025,Ns=1026,Ys=1027,Gd=1028,Wd=1029,gx=1030,jd=1031,Xd=1033,Ml=33776,wl=33777,El=33778,Tl=33779,sh=35840,oh=35841,ah=35842,lh=35843,uh=36196,ch=37492,fh=37496,hh=37808,dh=37809,ph=37810,mh=37811,gh=37812,vh=37813,xh=37814,_h=37815,yh=37816,Sh=37817,Mh=37818,wh=37819,Eh=37820,Th=37821,Al=36492,Ah=36494,Ch=36495,vx=36283,bh=36284,Rh=36285,Ph=36286,s1=3200,o1=3201,a1=0,l1=1,cn="",ii="srgb",Fi="srgb-linear",Yd="display-p3",Nu="display-p3-linear",su="linear",ct="srgb",ou="rec709",au="p3",$r=7680,Am=519,u1=512,c1=513,f1=514,xx=515,h1=516,d1=517,p1=518,m1=519,Cm=35044,bm="300 es",Ci=2e3,lu=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,Lh=180/Math.PI;function to(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function g1(t,e){return(t%e+e)%e}function pc(t,e,n){return(1-n)*t+n*e}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,n=0){ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],x=r[1],v=r[4],S=r[7],R=r[2],b=r[5],T=r[8];return s[0]=o*_+a*x+l*R,s[3]=o*m+a*v+l*b,s[6]=o*h+a*S+l*T,s[1]=u*_+c*x+f*R,s[4]=u*m+c*v+f*b,s[7]=u*h+c*S+f*T,s[2]=d*_+p*x+g*R,s[5]=d*m+p*v+g*b,s[8]=d*h+p*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new Be;function _x(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function v1(){const t=sa("canvas");return t.style.display="block",t}const Rm={};function Cl(t){t in Rm||(Rm[t]=!0,console.warn(t))}function x1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function _1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function y1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pm=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lm=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[Fi]:{transfer:su,primaries:ou,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ii]:{transfer:ct,primaries:ou,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Nu]:{transfer:su,primaries:au,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Lm),fromReference:t=>t.applyMatrix3(Pm)},[Yd]:{transfer:ct,primaries:au,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Lm),fromReference:t=>t.applyMatrix3(Pm).convertLinearToSRGB()}},S1=new Set([Fi,Nu]),tt={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!S1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=mo[e].toReference,r=mo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return mo[t].primaries},getTransfer:function(t){return t===cn?su:mo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(mo[e].luminanceCoefficients)}};function Ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class M1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=sa("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ds(n[i]/255)*255):n[i]=Ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w1=0;class yx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vc(r[o].image)):s.push(vc(r[o]))}else s=vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?M1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E1=0;class Ot extends eo{constructor(e=Ot.DEFAULT_IMAGE,n=Ot.DEFAULT_MAPPING,i=Nr,r=Nr,s=Jt,o=Ai,a=Zn,l=Ui,u=Ot.DEFAULT_ANISOTROPY,c=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=to(),this.name="",this.source=new yx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ru:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ru:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=lx;Ot.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(p+1)/2,R=(h+1)/2,b=(c+d)/4,T=(f+_)/4,P=(g+m)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=T/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(d-c)/x,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T1 extends eo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new yx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends T1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sx extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A1 extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||u!==p||c!==g){let m=1-a;const h=l*d+u*p+c*g+f*_,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,h*x);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}const S=a*x;if(l=l*m+d*S,u=u*m+p*S,c=c*m+g*S,f=f*m+_*S,m===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*p-u*d,e[n+1]=l*g+c*d+u*f-a*p,e[n+2]=u*g+c*p+a*d-l*f,e[n+3]=c*g-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"YXZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"ZXY":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"ZYX":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"YZX":this._x=d*c*f+u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f-d*p*g;break;case"XZY":this._x=d*c*f-u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new I,Nm=new no;class jr{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),ka.subVectors(this.max,go),Zr.subVectors(e.a,go),Jr.subVectors(e.b,go),Qr.subVectors(e.c,go),Bi.subVectors(Jr,Zr),Hi.subVectors(Qr,Jr),vr.subVectors(Zr,Qr);let n=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-vr.z,vr.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,vr.z,0,-vr.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-vr.y,vr.x,0];return!_c(n,Zr,Jr,Qr,ka)||(n=[1,0,0,0,1,0,0,0,1],!_c(n,Zr,Jr,Qr,ka))?!1:(Fa.crossVectors(Bi,Hi),n=[Fa.x,Fa.y,Fa.z],_c(n,Zr,Jr,Qr,ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new I,new I,new I,new I,new I,new I,new I,new I],Hn=new I,Ua=new jr,Zr=new I,Jr=new I,Qr=new I,Bi=new I,Hi=new I,vr=new I,go=new I,ka=new I,Fa=new I,xr=new I;function _c(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){xr.fromArray(t,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),u=n.dot(xr),c=i.dot(xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const C1=new jr,vo=new I,yc=new I;class Xr{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):C1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const n=vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(yc)),this.expandByPoint(vo.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new I,Sc=new I,Oa=new I,Vi=new I,Mc=new I,za=new I,wc=new I;class qd{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Sc.copy(e).add(n).multiplyScalar(.5),Oa.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(Sc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Oa),a=Vi.dot(this.direction),l=-Vi.dot(Oa),u=Vi.lengthSq(),c=Math.abs(1-o*o);let f,d,p,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const _=1/c;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sc).addScaledVector(Oa,d),p}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){Mc.subVectors(n,e),za.subVectors(i,e),wc.crossVectors(Mc,za);let o=this.direction.dot(wc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(za.crossVectors(Vi,za));if(l<0)return null;const u=a*this.direction.dot(Mc.cross(Vi));if(u<0||l+u>o)return null;const c=-a*Vi.dot(wc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,n,i,r,s,o,a,l,u,c,f,d,p,g,_,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,p,g,_,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,g=a*c,_=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=d-_*u,n[9]=-a*l,n[2]=_-d*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,g=u*c,_=u*f;n[0]=d+_*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,g=u*c,_=u*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*c,n[9]=_-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,g=a*c,_=a*f;n[0]=l*c,n[4]=g*u-p,n[8]=d*u+_,n[1]=l*f,n[5]=_*u+d,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=_-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+_,n[5]=o*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*c,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b1,e,R1)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Gi.crossVectors(i,xn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Gi.crossVectors(i,xn)),Gi.normalize(),Ba.crossVectors(xn,Gi),r[0]=Gi.x,r[4]=Ba.x,r[8]=xn.x,r[1]=Gi.y,r[5]=Ba.y,r[9]=xn.y,r[2]=Gi.z,r[6]=Ba.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],x=i[3],v=i[7],S=i[11],R=i[15],b=r[0],T=r[4],P=r[8],O=r[12],y=r[1],w=r[5],H=r[9],U=r[13],X=r[2],J=r[6],N=r[10],G=r[14],L=r[3],Z=r[7],K=r[11],oe=r[15];return s[0]=o*b+a*y+l*X+u*L,s[4]=o*T+a*w+l*J+u*Z,s[8]=o*P+a*H+l*N+u*K,s[12]=o*O+a*U+l*G+u*oe,s[1]=c*b+f*y+d*X+p*L,s[5]=c*T+f*w+d*J+p*Z,s[9]=c*P+f*H+d*N+p*K,s[13]=c*O+f*U+d*G+p*oe,s[2]=g*b+_*y+m*X+h*L,s[6]=g*T+_*w+m*J+h*Z,s[10]=g*P+_*H+m*N+h*K,s[14]=g*O+_*U+m*G+h*oe,s[3]=x*b+v*y+S*X+R*L,s[7]=x*T+v*w+S*J+R*Z,s[11]=x*P+v*H+S*N+R*K,s[15]=x*O+v*U+S*G+R*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+_*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],x=f*m*u-_*d*u+_*l*p-a*m*p-f*l*h+a*d*h,v=g*d*u-c*m*u-g*l*p+o*m*p+c*l*h-o*d*h,S=c*_*u-g*f*u+g*a*p-o*_*p-c*a*h+o*f*h,R=g*f*l-c*_*l-g*a*d+o*_*d+c*a*m-o*f*m,b=n*x+i*v+r*S+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=x*T,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*T,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*m*s-g*d*s+g*r*p-n*m*p-c*r*h+n*d*h)*T,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*h-n*l*h)*T,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(g*f*s-c*_*s-g*i*p+n*_*p+c*i*h-n*f*h)*T,e[10]=(o*_*s-g*a*s+g*i*u-n*_*u-o*i*h+n*a*h)*T,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*T,e[12]=R*T,e[13]=(c*_*r-g*f*r+g*i*d-n*_*d-c*i*m+n*f*m)*T,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,g=s*f,_=o*c,m=o*f,h=a*f,x=l*u,v=l*c,S=l*f,R=i.x,b=i.y,T=i.z;return r[0]=(1-(_+h))*R,r[1]=(p+S)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(d+h))*b,r[6]=(m+x)*b,r[7]=0,r[8]=(g+v)*T,r[9]=(m-x)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=es.set(r[0],r[1],r[2]).length();const o=es.set(r[4],r[5],r[6]).length(),a=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const u=1/s,c=1/o,f=1/a;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,n.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ci){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Ci)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===lu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*c;let g,_;if(a===Ci)g=(o+s)*f,_=-2*f;else if(a===lu)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const es=new I,Vn=new We,b1=new I(0,0,0),R1=new I(1,1,1),Gi=new I,Ba=new I,xn=new I,Dm=new We,Im=new no;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P1=0;const Um=new I,ts=new no,mi=new We,Ha=new I,xo=new I,L1=new I,N1=new no,km=new I(1,0,0),Fm=new I(0,1,0),Om=new I(0,0,1),zm={type:"added"},D1={type:"removed"},ns={type:"childadded",child:null},Ec={type:"childremoved",child:null};class tn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new I,n=new ci,i=new no,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new Be}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Fm,e)}rotateZ(e){return this.rotateOnAxis(Om,e)}translateOnAxis(e,n){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Fm,e)}translateZ(e){return this.translateOnAxis(Om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ha.copy(e):Ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(xo,Ha,this.up):mi.lookAt(Ha,xo,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(mi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(D1),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,L1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,N1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new I(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new I,gi=new I,Tc=new I,vi=new I,is=new I,rs=new I,Bm=new I,Ac=new I,Cc=new I,bc=new I,Rc=new pt,Pc=new pt,Lc=new pt;class qn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),gi.subVectors(i,n),Tc.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(gi),l=Gn.dot(Tc),u=gi.dot(gi),c=gi.dot(Tc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Rc.setScalar(0),Pc.setScalar(0),Lc.setScalar(0),Rc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,i),Lc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rc,s.x),o.addScaledVector(Pc,s.y),o.addScaledVector(Lc,s.z),o}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),gi.subVectors(e,n),Gn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Gn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;is.subVectors(r,i),rs.subVectors(s,i),Ac.subVectors(e,i);const l=is.dot(Ac),u=rs.dot(Ac);if(l<=0&&u<=0)return n.copy(i);Cc.subVectors(e,r);const c=is.dot(Cc),f=rs.dot(Cc);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(is,o);bc.subVectors(e,s);const p=is.dot(bc),g=rs.dot(bc);if(g>=0&&p<=g)return n.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(rs,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return Bm.subVectors(s,r),a=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(Bm,a);const h=1/(m+_+d);return o=_*h,a=d*h,n.copy(i).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Nc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=g1(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Nc(o,s,e+1/3),this.g=Nc(o,s,e),this.b=Nc(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=wx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return tt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Yt(Wt.r*255,0,255))*65536+Math.round(Yt(Wt.g*255,0,255))*256+Math.round(Yt(Wt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ii){tt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(Va);const i=pc(Wi.h,Va.h,n),r=pc(Wi.s,Va.s,n),s=pc(Wi.l,Va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new $e;$e.NAMES=wx;let I1=0;class io extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Ls,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=$f,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qf&&(i.blendSrc=this.blendSrc),this.blendDst!==$f&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $d extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new I,Ga=new ye;class kt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cm,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ga.fromBufferAttribute(this,n),Ga.applyMatrix3(e),this.setXY(n,Ga.x,Ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}}class Ex extends kt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Tx extends kt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vt extends kt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let U1=0;const Pn=new We,Dc=new tn,ss=new I,_n=new jr,_o=new jr,Lt=new I;class Bt extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?Tx:Ex)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(_n.min,_o.min),_n.expandByPoint(Lt),Lt.addVectors(_n.max,_o.max),_n.expandByPoint(Lt)):(_n.expandByPoint(_o.min),_n.expandByPoint(_o.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Lt.fromBufferAttribute(a,u),l&&(ss.fromBufferAttribute(e,u),Lt.add(ss)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;const u=new I,c=new I,f=new I,d=new ye,p=new ye,g=new ye,_=new I,m=new I;function h(P,O,y){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,O),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,O),g.fromBufferAttribute(s,y),c.sub(u),f.sub(u),p.sub(d),g.sub(d);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(w),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(w),a[P].add(_),a[O].add(_),a[y].add(_),l[P].add(m),l[O].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,O=x.length;P<O;++P){const y=x[P],w=y.start,H=y.count;for(let U=w,X=w+H;U<X;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new I,S=new I,R=new I,b=new I;function T(P){R.fromBufferAttribute(r,P),b.copy(R);const O=a[P];v.copy(O),v.sub(R.multiplyScalar(R.dot(O))).normalize(),S.crossVectors(b,O);const w=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,w)}for(let P=0,O=x.length;P<O;++P){const y=x[P],w=y.start,H=y.count;for(let U=w,X=w+H;U<X;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,c=new I,f=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let h=0;h<c;h++)d[g++]=u[p++]}return new kt(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hm=new We,_r=new qd,Wa=new Xr,Vm=new I,ja=new I,Xa=new I,Ya=new I,Ic=new I,qa=new I,Gm=new I,$a=new I;class it extends tn{constructor(e=new Bt,n=new $d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Ic.fromBufferAttribute(f,e),o?qa.addScaledVector(Ic,c):qa.addScaledVector(Ic.sub(n),c))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Wa.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Wa,Vm)===null||_r.origin.distanceToSquared(Vm)>(e.far-e.near)**2))&&(Hm.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Hm),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=v;S<R;S+=3){const b=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=Ka(this,h,e,i,u,c,f,b,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Ka(this,o,e,i,u,c,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=v;S<R;S+=3){const b=S,T=S+1,P=S+2;r=Ka(this,h,e,i,u,c,f,b,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=m,v=m+1,S=m+2;r=Ka(this,o,e,i,u,c,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function k1(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo($a);return u<n.near||u>n.far?null:{distance:u,point:$a.clone(),object:t}}function Ka(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ja),t.getVertexPosition(l,Xa),t.getVertexPosition(u,Ya);const c=k1(t,e,n,i,ja,Xa,Ya,Gm);if(c){const f=new I;qn.getBarycoord(Gm,ja,Xa,Ya,f),r&&(c.uv=qn.getInterpolatedAttribute(r,a,l,u,f,new ye)),s&&(c.uv1=qn.getInterpolatedAttribute(s,a,l,u,f,new ye)),o&&(c.normal=qn.getInterpolatedAttribute(o,a,l,u,f,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new I,materialIndex:0};qn.getNormal(ja,Xa,Ya,d.normal),c.face=d,c.barycoord=f}return c}class pa extends Bt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(f,2));function g(_,m,h,x,v,S,R,b,T,P,O){const y=S/T,w=R/P,H=S/2,U=R/2,X=b/2,J=T+1,N=P+1;let G=0,L=0;const Z=new I;for(let K=0;K<N;K++){const oe=K*w-U;for(let ue=0;ue<J;ue++){const Oe=ue*y-H;Z[_]=Oe*x,Z[m]=oe*v,Z[h]=X,u.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[h]=b>0?1:-1,c.push(Z.x,Z.y,Z.z),f.push(ue/T),f.push(1-K/P),G+=1}}for(let K=0;K<P;K++)for(let oe=0;oe<T;oe++){const ue=d+oe+J*K,Oe=d+oe+J*(K+1),$=d+(oe+1)+J*(K+1),ne=d+(oe+1)+J*K;l.push(ue,Oe,ne),l.push(Oe,$,ne),L+=6}a.addGroup(p,L,O),p+=L,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function F1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ax(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const O1={clone:qs,merge:$t};var z1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z1,this.fragmentShader=B1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=F1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Cx extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new I,Wm=new ye,jm=new ye;class wn extends Cx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,Wm,jm),n.subVectors(jm,Wm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const os=-90,as=1;class H1 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(os,as,e,n);r.layers=this.layers,this.add(r);const s=new wn(os,as,e,n);s.layers=this.layers,this.add(s);const o=new wn(os,as,e,n);o.layers=this.layers,this.add(o);const a=new wn(os,as,e,n);a.layers=this.layers,this.add(a);const l=new wn(os,as,e,n);l.layers=this.layers,this.add(l);const u=new wn(os,as,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bx extends Ot{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V1 extends In{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pa(5,5,5),s=new St({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:or});s.uniforms.tEquirect.value=n;const o=new it(r,s),a=n.minFilter;return n.minFilter===Ai&&(n.minFilter=Jt),new H1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Uc=new I,G1=new I,W1=new Be;class Ar{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uc.subVectors(i,n).cross(G1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||W1.getNormalMatrix(e),r=this.coplanarPoint(Uc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Xr,Za=new I;class Rx{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-h).normalize(),i[1].setComponents(l+s,d+u,m+p,S+h).normalize(),i[2].setComponents(l+o,d+c,m+g,S+x).normalize(),i[3].setComponents(l-o,d-c,m-g,S-x).normalize(),i[4].setComponents(l-a,d-f,m-_,S-v).normalize(),n===Ci)i[5].setComponents(l+a,d+f,m+_,S+v).normalize();else if(n===lu)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Px(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function j1(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Mn extends Bt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<c;h++){const x=h*d-o;for(let v=0;v<u;v++){const S=v*f-s;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+u*h,S=x+u*(h+1),R=x+1+u*(h+1),b=x+1+u*h;p.push(v,S,b),p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.widthSegments,e.heightSegments)}}var X1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y1=`#ifdef USE_ALPHAHASH
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
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J1=`#ifdef USE_AOMAP
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
#endif`,Q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM=`#ifdef USE_BATCHING
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
#endif`,tM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sM=`#ifdef USE_IRIDESCENCE
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
#endif`,oM=`#ifdef USE_BUMPMAP
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
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mM=`#define PI 3.141592653589793
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
} // validated`,gM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vM=`vec3 transformedNormal = objectNormal;
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
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`
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
}`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DM=`#ifdef USE_GRADIENTMAP
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
}`,IM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HM=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GM=`PhysicalMaterial material;
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
#endif`,WM=`struct PhysicalMaterial {
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
}`,jM=`
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
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
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ew=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tw=`#if defined( USE_POINTS_UV )
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
#endif`,nw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`#ifdef USE_MORPHTARGETS
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
#endif`,lw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pw=`#ifdef USE_NORMALMAP
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
#endif`,mw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_w=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pw=`float getShadowMask() {
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
}`,Lw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nw=`#ifdef USE_SKINNING
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
#endif`,Dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iw=`#ifdef USE_SKINNING
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
#endif`,Uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ow=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zw=`#ifdef USE_TRANSMISSION
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
#endif`,Bw=`#ifdef USE_TRANSMISSION
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
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xw=`uniform sampler2D t2D;
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
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`#include <common>
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
}`,Jw=`#if DEPTH_PACKING == 3200
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
}`,Qw=`#define DISTANCE
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
}`,eE=`#define DISTANCE
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
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`uniform float scale;
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
}`,rE=`uniform vec3 diffuse;
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
}`,sE=`#include <common>
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
}`,oE=`uniform vec3 diffuse;
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
}`,aE=`#define LAMBERT
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
}`,lE=`#define LAMBERT
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
}`,uE=`#define MATCAP
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
}`,cE=`#define MATCAP
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
}`,fE=`#define NORMAL
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
}`,hE=`#define NORMAL
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
}`,dE=`#define PHONG
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
}`,pE=`#define PHONG
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
}`,mE=`#define STANDARD
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
}`,gE=`#define STANDARD
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
}`,vE=`#define TOON
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
}`,xE=`#define TOON
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
}`,_E=`uniform float size;
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
}`,yE=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,ME=`uniform vec3 color;
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
}`,wE=`uniform float rotation;
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
}`,EE=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:X1,alphahash_pars_fragment:Y1,alphamap_fragment:q1,alphamap_pars_fragment:$1,alphatest_fragment:K1,alphatest_pars_fragment:Z1,aomap_fragment:J1,aomap_pars_fragment:Q1,batching_pars_vertex:eM,batching_vertex:tM,begin_vertex:nM,beginnormal_vertex:iM,bsdfs:rM,iridescence_fragment:sM,bumpmap_pars_fragment:oM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:lM,clipping_planes_pars_vertex:uM,clipping_planes_vertex:cM,color_fragment:fM,color_pars_fragment:hM,color_pars_vertex:dM,color_vertex:pM,common:mM,cube_uv_reflection_fragment:gM,defaultnormal_vertex:vM,displacementmap_pars_vertex:xM,displacementmap_vertex:_M,emissivemap_fragment:yM,emissivemap_pars_fragment:SM,colorspace_fragment:MM,colorspace_pars_fragment:wM,envmap_fragment:EM,envmap_common_pars_fragment:TM,envmap_pars_fragment:AM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:OM,envmap_vertex:bM,fog_vertex:RM,fog_pars_vertex:PM,fog_fragment:LM,fog_pars_fragment:NM,gradientmap_pars_fragment:DM,lightmap_pars_fragment:IM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:kM,lights_pars_begin:FM,lights_toon_fragment:zM,lights_toon_pars_fragment:BM,lights_phong_fragment:HM,lights_phong_pars_fragment:VM,lights_physical_fragment:GM,lights_physical_pars_fragment:WM,lights_fragment_begin:jM,lights_fragment_maps:XM,lights_fragment_end:YM,logdepthbuf_fragment:qM,logdepthbuf_pars_fragment:$M,logdepthbuf_pars_vertex:KM,logdepthbuf_vertex:ZM,map_fragment:JM,map_pars_fragment:QM,map_particle_fragment:ew,map_particle_pars_fragment:tw,metalnessmap_fragment:nw,metalnessmap_pars_fragment:iw,morphinstance_vertex:rw,morphcolor_vertex:sw,morphnormal_vertex:ow,morphtarget_pars_vertex:aw,morphtarget_vertex:lw,normal_fragment_begin:uw,normal_fragment_maps:cw,normal_pars_fragment:fw,normal_pars_vertex:hw,normal_vertex:dw,normalmap_pars_fragment:pw,clearcoat_normal_fragment_begin:mw,clearcoat_normal_fragment_maps:gw,clearcoat_pars_fragment:vw,iridescence_pars_fragment:xw,opaque_fragment:_w,packing:yw,premultiplied_alpha_fragment:Sw,project_vertex:Mw,dithering_fragment:ww,dithering_pars_fragment:Ew,roughnessmap_fragment:Tw,roughnessmap_pars_fragment:Aw,shadowmap_pars_fragment:Cw,shadowmap_pars_vertex:bw,shadowmap_vertex:Rw,shadowmask_pars_fragment:Pw,skinbase_vertex:Lw,skinning_pars_vertex:Nw,skinning_vertex:Dw,skinnormal_vertex:Iw,specularmap_fragment:Uw,specularmap_pars_fragment:kw,tonemapping_fragment:Fw,tonemapping_pars_fragment:Ow,transmission_fragment:zw,transmission_pars_fragment:Bw,uv_pars_fragment:Hw,uv_pars_vertex:Vw,uv_vertex:Gw,worldpos_vertex:Ww,background_vert:jw,background_frag:Xw,backgroundCube_vert:Yw,backgroundCube_frag:qw,cube_vert:$w,cube_frag:Kw,depth_vert:Zw,depth_frag:Jw,distanceRGBA_vert:Qw,distanceRGBA_frag:eE,equirect_vert:tE,equirect_frag:nE,linedashed_vert:iE,linedashed_frag:rE,meshbasic_vert:sE,meshbasic_frag:oE,meshlambert_vert:aE,meshlambert_frag:lE,meshmatcap_vert:uE,meshmatcap_frag:cE,meshnormal_vert:fE,meshnormal_frag:hE,meshphong_vert:dE,meshphong_frag:pE,meshphysical_vert:mE,meshphysical_frag:gE,meshtoon_vert:vE,meshtoon_frag:xE,points_vert:_E,points_frag:yE,shadow_vert:SE,shadow_frag:ME,sprite_vert:wE,sprite_frag:EE},fe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ri={basic:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:$t([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:$t([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:$t([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:$t([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:$t([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:$t([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:$t([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:$t([fe.lights,fe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ri.physical={uniforms:$t([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ja={r:0,b:0,g:0},Sr=new ci,TE=new We;function AE(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?h(a,l):S&&S.isColor&&(h(S,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Lu)?(c===void 0&&(c=new it(new pa(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:qs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Sr.copy(v.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TE.makeRotationFromEuler(Sr)),c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,(f!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new it(new Mn(2,2),new St({name:"BackgroundMaterial",uniforms:qs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function h(x,v){x.getRGB(Ja,Ax(t)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:_,addToRenderList:m}}function CE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,w,H,U,X){let J=!1;const N=f(U,H,w);s!==N&&(s=N,u(s.object)),J=p(y,U,H,X),J&&g(y,U,H,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(y,w,H,U),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function c(y){return t.deleteVertexArray(y)}function f(y,w,H){const U=H.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let J=X[w.id];J===void 0&&(J={},X[w.id]=J);let N=J[U];return N===void 0&&(N=d(l()),J[U]=N),N}function d(y){const w=[],H=[],U=[];for(let X=0;X<n;X++)w[X]=0,H[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:H,attributeDivisors:U,object:y,attributes:{},index:null}}function p(y,w,H,U){const X=s.attributes,J=w.attributes;let N=0;const G=H.getAttributes();for(const L in G)if(G[L].location>=0){const K=X[L];let oe=J[L];if(oe===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;N++}return s.attributesNum!==N||s.index!==U}function g(y,w,H,U){const X={},J=w.attributes;let N=0;const G=H.getAttributes();for(const L in G)if(G[L].location>=0){let K=J[L];K===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),X[L]=oe,N++}s.attributes=X,s.attributesNum=N,s.index=U}function _(){const y=s.newAttributes;for(let w=0,H=y.length;w<H;w++)y[w]=0}function m(y){h(y,0)}function h(y,w){const H=s.newAttributes,U=s.enabledAttributes,X=s.attributeDivisors;H[y]=1,U[y]===0&&(t.enableVertexAttribArray(y),U[y]=1),X[y]!==w&&(t.vertexAttribDivisor(y,w),X[y]=w)}function x(){const y=s.newAttributes,w=s.enabledAttributes;for(let H=0,U=w.length;H<U;H++)w[H]!==y[H]&&(t.disableVertexAttribArray(H),w[H]=0)}function v(y,w,H,U,X,J,N){N===!0?t.vertexAttribIPointer(y,w,H,X,J):t.vertexAttribPointer(y,w,H,U,X,J)}function S(y,w,H,U){_();const X=U.attributes,J=H.getAttributes(),N=w.defaultAttributeValues;for(const G in J){const L=J[G];if(L.location>=0){let Z=X[G];if(Z===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const K=Z.normalized,oe=Z.itemSize,ue=e.get(Z);if(ue===void 0)continue;const Oe=ue.buffer,$=ue.type,ne=ue.bytesPerElement,pe=$===t.INT||$===t.UNSIGNED_INT||Z.gpuType===Bd;if(Z.isInterleavedBufferAttribute){const he=Z.data,Le=he.stride,Y=Z.offset;if(he.isInstancedInterleavedBuffer){for(let Ee=0;Ee<L.locationSize;Ee++)h(L.location+Ee,he.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ee=0;Ee<L.locationSize;Ee++)m(L.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Ee=0;Ee<L.locationSize;Ee++)v(L.location+Ee,oe/L.locationSize,$,K,Le*ne,(Y+oe/L.locationSize*Ee)*ne,pe)}else{if(Z.isInstancedBufferAttribute){for(let he=0;he<L.locationSize;he++)h(L.location+he,Z.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let he=0;he<L.locationSize;he++)m(L.location+he);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let he=0;he<L.locationSize;he++)v(L.location+he,oe/L.locationSize,$,K,oe*ne,oe/L.locationSize*he*ne,pe)}}else if(N!==void 0){const K=N[G];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}x()}function R(){P();for(const y in i){const w=i[y];for(const H in w){const U=w[H];for(const X in U)c(U[X].object),delete U[X];delete w[H]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const H in w){const U=w[H];for(const X in U)c(U[X].object),delete U[X];delete w[H]}delete i[y.id]}function T(y){for(const w in i){const H=i[w];if(H[y.id]===void 0)continue;const U=H[y.id];for(const X in U)c(U[X].object),delete U[X];delete H[y.id]}}function P(){O(),o=!0,s!==r&&(s=r,u(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:O,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function bE(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];n.update(p,i,1)}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_];for(let _=0;_<d.length;_++)n.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Zn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ui&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Kn&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:R,maxSamples:b}}function PE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ar,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,v=x*4;let S=h.clippingState||null;l.value=S,S=c(g,d,v,p);for(let R=0;R!==v;++R)S[R]=n[R];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function LE(t){let e=new WeakMap;function n(o,a){return a===nh?o.mapping=Ws:a===ih&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nh||a===ih)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new V1(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Nh extends Cx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,Xm=[.125,.215,.35,.446,.526,.582],br=20,kc=new Nh,Ym=new $e;let Fc=null,Oc=0,zc=0,Bc=!1;const Cr=(1+Math.sqrt(5))/2,ls=1/Cr,qm=[new I(-Cr,ls,0),new I(Cr,ls,0),new I(-ls,0,Cr),new I(ls,0,Cr),new I(0,Cr,-ls),new I(0,Cr,ls),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class $m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Oc,zc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Qs,format:Zn,colorSpace:Fi,depthBuffer:!1},r=Km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NE(s)),this._blurMaterial=DE(s,e,n)}return r}_compileMaterial(e){const n=new it(this._lodPlanes[0],e);this._renderer.compile(n,kc)}_sceneToCubeUV(e,n,i,r){const a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Ym),c.toneMapping=Pi,c.autoClear=!1;const p=new $d({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new it(new pa,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ym),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;Qa(r,x*v,h>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,kc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qm[(r-s-1)%qm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new it(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*br-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const h=[];let x=0;for(let T=0;T<br;++T){const P=T/_,O=Math.exp(-P*P/2);h.push(O),T===0?x+=O:T<m&&(x+=2*O)}for(let T=0;T<h.length;T++)h[T]=h[T]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-ws?r-v+ws:0),b=4*(this._cubeSize-S);Qa(n,R,b,3*S,2*S),l.setRenderTarget(n),l.render(f,kc)}}function NE(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+Xm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ws?l=Xm[o-t+ws-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,h=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,P=b>2?0:-1,O=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(O,_*g*b),v.set(d,m*g*b);const y=[b,b,b,b,b,b];S.set(y,h*g*b)}const R=new Bt;R.setAttribute("position",new kt(x,_)),R.setAttribute("uv",new kt(v,m)),R.setAttribute("faceIndex",new kt(S,h)),e.push(R),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Km(t,e,n){const i=new In(t,e,n);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function DE(t,e,n){const i=new Float32Array(br),r=new I(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Zm(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Jm(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Kd(){return`

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
	`}function IE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===nh||l===ih,c=l===Ws||l===js;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new $m(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new $m(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function UE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Cl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kE(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const R=x[v+0],b=x[v+1],T=x[v+2];d.push(R,b,b,T,T,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const R=v+0,b=v+1,T=v+2;d.push(R,b,b,T,T,R)}}else return;const m=new(_x(d)?Tx:Ex)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function FE(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function c(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let h=0;for(let x=0;x<g;x++)h+=p[x];for(let x=0;x<_.length;x++)n.update(h,i,_[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function OE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zE(t,e,n){const i=new WeakMap,r=new pt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*b*4*f),P=new Sx(T,R,b,f);P.type=Kn,P.needsUpdate=!0;const O=S*4;for(let w=0;w<f;w++){const H=h[w],U=x[w],X=v[w],J=R*b*4*w;for(let N=0;N<H.count;N++){const G=N*O;g===!0&&(r.fromBufferAttribute(H,N),T[J+G+0]=r.x,T[J+G+1]=r.y,T[J+G+2]=r.z,T[J+G+3]=0),_===!0&&(r.fromBufferAttribute(U,N),T[J+G+4]=r.x,T[J+G+5]=r.y,T[J+G+6]=r.z,T[J+G+7]=0),m===!0&&(r.fromBufferAttribute(X,N),T[J+G+8]=r.x,T[J+G+9]=r.y,T[J+G+10]=r.z,T[J+G+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new ye(R,b)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function BE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Zd extends Ot{constructor(e,n,i,r,s,o,a,l,u,c=Ns){if(c!==Ns&&c!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ns&&(i=fr),i===void 0&&c===Ys&&(i=Xs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Lx=new Ot,Qm=new Zd(1,1),Nx=new Sx,Dx=new A1,Ix=new bx,e0=[],t0=[],n0=new Float32Array(16),i0=new Float32Array(9),r0=new Float32Array(4);function ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=e0[r];if(s===void 0&&(s=new Float32Array(r),e0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Du(t,e){let n=t0[e];n===void 0&&(n=new Int32Array(e),t0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;r0.set(i),t.uniformMatrix2fv(this.addr,!1,r0),Pt(n,i)}}function XE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;i0.set(i),t.uniformMatrix3fv(this.addr,!1,i0),Pt(n,i)}}function YE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;n0.set(i),t.uniformMatrix4fv(this.addr,!1,n0),Pt(n,i)}}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function JE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function nT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qm.compareFunction=xx,s=Qm):s=Lx,n.setTexture2D(e||s,r)}function iT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dx,r)}function rT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ix,r)}function sT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Nx,r)}function oT(t){switch(t){case 5126:return HE;case 35664:return VE;case 35665:return GE;case 35666:return WE;case 35674:return jE;case 35675:return XE;case 35676:return YE;case 5124:case 35670:return qE;case 35667:case 35671:return $E;case 35668:case 35672:return KE;case 35669:case 35673:return ZE;case 5125:return JE;case 36294:return QE;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return sT}}function aT(t,e){t.uniform1fv(this.addr,e)}function lT(t,e){const n=ro(e,this.size,2);t.uniform2fv(this.addr,n)}function uT(t,e){const n=ro(e,this.size,3);t.uniform3fv(this.addr,n)}function cT(t,e){const n=ro(e,this.size,4);t.uniform4fv(this.addr,n)}function fT(t,e){const n=ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hT(t,e){const n=ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dT(t,e){const n=ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pT(t,e){t.uniform1iv(this.addr,e)}function mT(t,e){t.uniform2iv(this.addr,e)}function gT(t,e){t.uniform3iv(this.addr,e)}function vT(t,e){t.uniform4iv(this.addr,e)}function xT(t,e){t.uniform1uiv(this.addr,e)}function _T(t,e){t.uniform2uiv(this.addr,e)}function yT(t,e){t.uniform3uiv(this.addr,e)}function ST(t,e){t.uniform4uiv(this.addr,e)}function MT(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Lx,s[o])}function wT(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Dx,s[o])}function ET(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ix,s[o])}function TT(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Nx,s[o])}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return _T;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}class CT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oT(n.type)}}class bT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AT(n.type)}}class RT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function s0(t,e){t.seq.push(e),t.map[e.id]=e}function PT(t,e,n){const i=t.name,r=i.length;for(Hc.lastIndex=0;;){const s=Hc.exec(i),o=Hc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){s0(n,u===void 0?new CT(a,t,e):new bT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new RT(a),s0(n,f)),n=f}}}class bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);PT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function o0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const LT=37297;let NT=0;function DT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function IT(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===au&&n===ou?i="LinearDisplayP3ToLinearSRGB":e===ou&&n===au&&(i="LinearSRGBToLinearDisplayP3"),t){case Fi:case Nu:return[i,"LinearTransferOETF"];case ii:case Yd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function a0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+DT(t.getShaderSource(e),o)}else return r}function UT(t,e){const n=IT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kT(t,e){let n;switch(e){case ZS:n="Linear";break;case JS:n="Reinhard";break;case QS:n="Cineon";break;case e1:n="ACESFilmic";break;case n1:n="AgX";break;case i1:n="Neutral";break;case t1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new I;function FT(){tt.getLuminanceCoefficients(el);const t=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function zT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function BT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function l0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(t){return t.replace(HT,GT)}const VT=new Map;function GT(t,e){let n=Ve[e];if(n===void 0){const i=VT.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dh(n)}const WT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(t){return t.replace(WT,jT)}function jT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function f0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function XT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===DS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function YT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case js:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ax:e="ENVMAP_BLENDING_MULTIPLY";break;case $S:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function KT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=XT(n),u=YT(n),c=qT(n),f=$T(n),d=KT(n),p=OT(n),g=zT(s),_=r.createProgram();let m,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),h.length>0&&(h+=`
`)):(m=[f0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),h=[f0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Pi?kT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,UT("linearToOutputTexel",n.outputColorSpace),FT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=Dh(o),o=l0(o,n),o=u0(o,n),a=Dh(a),a=l0(a,n),a=u0(a,n),o=c0(o),a=c0(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+o,S=x+h+a,R=o0(r,r.VERTEX_SHADER,v),b=o0(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,b),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(w){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(R).trim(),X=r.getShaderInfoLog(b).trim();let J=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,b);else{const G=a0(r,R,"vertex"),L=a0(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+H+`
`+G+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(U===""||X==="")&&(N=!1);N&&(w.diagnostics={runnable:J,programLog:H,vertexShader:{log:U,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(R),r.deleteShader(b),P=new bl(r,_),O=BT(r,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let O;this.getAttributes=function(){return O===void 0&&T(this),O};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,LT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}let JT=0;class QT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new e2(e),n.set(e,i)),i}}class e2{constructor(e){this.id=JT++,this.code=e,this.usedTimes=0}}function t2(t,e,n,i,r,s,o){const a=new Mx,l=new QT,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function h(y,w,H,U,X){const J=U.fog,N=X.geometry,G=y.isMeshStandardMaterial?U.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||G),Z=L&&L.mapping===Lu?L.image.height:null,K=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ue=oe!==void 0?oe.length:0;let Oe=0;N.morphAttributes.position!==void 0&&(Oe=1),N.morphAttributes.normal!==void 0&&(Oe=2),N.morphAttributes.color!==void 0&&(Oe=3);let $,ne,pe,he;if(K){const on=ri[K];$=on.vertexShader,ne=on.fragmentShader}else $=y.vertexShader,ne=y.fragmentShader,l.update(y),pe=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const Le=t.getRenderTarget(),Y=X.isInstancedMesh===!0,Ee=X.isBatchedMesh===!0,Re=!!y.map,ke=!!y.matcap,D=!!L,Ze=!!y.aoMap,De=!!y.lightMap,He=!!y.bumpMap,Ne=!!y.normalMap,Je=!!y.displacementMap,j=!!y.emissiveMap,C=!!y.metalnessMap,M=!!y.roughnessMap,B=y.anisotropy>0,ee=y.clearcoat>0,ie=y.dispersion>0,Q=y.iridescence>0,Se=y.sheen>0,ce=y.transmission>0,re=B&&!!y.anisotropyMap,Ae=ee&&!!y.clearcoatMap,se=ee&&!!y.clearcoatNormalMap,de=ee&&!!y.clearcoatRoughnessMap,Pe=Q&&!!y.iridescenceMap,Fe=Q&&!!y.iridescenceThicknessMap,Me=Se&&!!y.sheenColorMap,Xe=Se&&!!y.sheenRoughnessMap,ze=!!y.specularMap,st=!!y.specularColorMap,k=!!y.specularIntensityMap,ve=ce&&!!y.transmissionMap,q=ce&&!!y.thicknessMap,te=!!y.gradientMap,me=!!y.alphaMap,xe=y.alphaTest>0,Ye=!!y.alphaHash,Et=!!y.extensions;let sn=Pi;y.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(sn=t.toneMapping);const Ke={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:ne,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ee,batchingColor:Ee&&X._colorsTexture!==null,instancing:Y,instancingColor:Y&&X.instanceColor!==null,instancingMorph:Y&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Fi,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:ke,envMap:D,envMapMode:D&&L.mapping,envMapCubeUVHeight:Z,aoMap:Ze,lightMap:De,bumpMap:He,normalMap:Ne,displacementMap:p&&Je,emissiveMap:j,normalMapObjectSpace:Ne&&y.normalMapType===l1,normalMapTangentSpace:Ne&&y.normalMapType===a1,metalnessMap:C,roughnessMap:M,anisotropy:B,anisotropyMap:re,clearcoat:ee,clearcoatMap:Ae,clearcoatNormalMap:se,clearcoatRoughnessMap:de,dispersion:ie,iridescence:Q,iridescenceMap:Pe,iridescenceThicknessMap:Fe,sheen:Se,sheenColorMap:Me,sheenRoughnessMap:Xe,specularMap:ze,specularColorMap:st,specularIntensityMap:k,transmission:ce,transmissionMap:ve,thicknessMap:q,gradientMap:te,opaque:y.transparent===!1&&y.blending===Ls&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:xe,alphaHash:Ye,combine:y.combine,mapUv:Re&&m(y.map.channel),aoMapUv:Ze&&m(y.aoMap.channel),lightMapUv:De&&m(y.lightMap.channel),bumpMapUv:He&&m(y.bumpMap.channel),normalMapUv:Ne&&m(y.normalMap.channel),displacementMapUv:Je&&m(y.displacementMap.channel),emissiveMapUv:j&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:re&&m(y.anisotropyMap.channel),clearcoatMapUv:Ae&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(y.sheenRoughnessMap.channel),specularMapUv:ze&&m(y.specularMap.channel),specularColorMapUv:st&&m(y.specularColorMap.channel),specularIntensityMapUv:k&&m(y.specularIntensityMap.channel),transmissionMapUv:ve&&m(y.transmissionMap.channel),thicknessMapUv:q&&m(y.thicknessMap.channel),alphaMapUv:me&&m(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ne||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!N.attributes.uv&&(Re||me),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:sn,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function x(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)w.push(H),w.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(v(w,y),S(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const w=_[y.type];let H;if(w){const U=ri[w];H=O1.clone(U.uniforms)}else H=y.uniforms;return H}function b(y,w){let H;for(let U=0,X=c.length;U<X;U++){const J=c[U];if(J.cacheKey===w){H=J,++H.usedTimes;break}}return H===void 0&&(H=new ZT(t,w,y,s),c.push(H)),H}function T(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function P(y){l.remove(y)}function O(){l.dispose()}return{getParameters:h,getProgramCacheKey:x,getUniforms:R,acquireProgram:b,releaseProgram:T,releaseShaderCache:P,programs:c,dispose:O}}function n2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function i2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function h0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function d0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||i2),i.length>1&&i.sort(d||h0),r.length>1&&r.sort(d||h0)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function r2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new d0,t.set(i,[o])):r>=s.length?(o=new d0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function s2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new $e};break;case"SpotLight":n={position:new I,direction:new I,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function o2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let a2=0;function l2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function u2(t){const e=new s2,n=o2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,s=new We,o=new We;function a(u){let c=0,f=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,x=0,v=0,S=0,R=0,b=0,T=0;u.sort(l2);for(let O=0,y=u.length;O<y;O++){const w=u[O],H=w.color,U=w.intensity,X=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=H.r*U,f+=H.g*U,d+=H.b*U;else if(w.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(w.sh.coefficients[N],U);T++}else if(w.isDirectionalLight){const N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,L=n.get(w);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=w.shadow.matrix,x++}i.directional[p]=N,p++}else if(w.isSpotLight){const N=e.get(w);N.position.setFromMatrixPosition(w.matrixWorld),N.color.copy(H).multiplyScalar(U),N.distance=X,N.coneCos=Math.cos(w.angle),N.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),N.decay=w.decay,i.spot[_]=N;const G=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,G.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[_]=G.matrix,w.castShadow){const L=n.get(w);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=J,S++}_++}else if(w.isRectAreaLight){const N=e.get(w);N.color.copy(H).multiplyScalar(U),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=N,m++}else if(w.isPointLight){const N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),N.distance=w.distance,N.decay=w.decay,w.castShadow){const G=w.shadow,L=n.get(w);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,L.shadowCameraNear=G.camera.near,L.shadowCameraFar=G.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=N,g++}else if(w.isHemisphereLight){const N=e.get(w);N.skyColor.copy(w.color).multiplyScalar(U),N.groundColor.copy(w.groundColor).multiplyScalar(U),i.hemi[h]=N,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=T,i.version=a2++)}function l(u,c){let f=0,d=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let h=0,x=u.length;h<x;h++){const v=u[h];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function p0(t){const e=new u2(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function c2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new p0(t),e.set(r,[a])):s>=o.length?(a=new p0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class f2 extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h2 extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p2=`uniform sampler2D shadow_pass;
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
}`;function m2(t,e,n){let i=new Rx;const r=new ye,s=new ye,o=new pt,a=new f2({depthPacking:o1}),l=new h2,u={},c=n.maxTextureSize,f={[cr]:en,[en]:cr,[Dn]:Dn},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:d2,fragmentShader:p2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ox;let h=this.type;this.render=function(b,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const O=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),H=t.state;H.setBlending(or),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const U=h!==_i&&this.type===_i,X=h===_i&&this.type!==_i;for(let J=0,N=b.length;J<N;J++){const G=b[J],L=G.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Z=L.getFrameExtents();if(r.multiply(Z),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Z.x),r.x=s.x*Z.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Z.y),r.y=s.y*Z.y,L.mapSize.y=s.y)),L.map===null||U===!0||X===!0){const oe=this.type!==_i?{minFilter:hn,magFilter:hn}:{};L.map!==null&&L.map.dispose(),L.map=new In(r.x,r.y,oe),L.map.texture.name=G.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const K=L.getViewportCount();for(let oe=0;oe<K;oe++){const ue=L.getViewport(oe);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),H.viewport(o),L.updateMatrices(G,oe),i=L.getFrustum(),S(T,P,L.camera,G,this.type)}L.isPointLightShadow!==!0&&this.type===_i&&x(L,P),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(O,y,w)};function x(b,T){const P=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new In(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,P,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,P,p,_,null)}function v(b,T,P,O){let y=null;const w=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)y=w;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=y.uuid,U=T.uuid;let X=u[H];X===void 0&&(X={},u[H]=X);let J=X[U];J===void 0&&(J=y.clone(),X[U]=J,T.addEventListener("dispose",R)),y=J}if(y.visible=T.visible,y.wireframe=T.wireframe,O===_i?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=t.properties.get(y);H.light=P}return y}function S(b,T,P,O,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===_i)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const U=e.update(b),X=b.material;if(Array.isArray(X)){const J=U.groups;for(let N=0,G=J.length;N<G;N++){const L=J[N],Z=X[L.materialIndex];if(Z&&Z.visible){const K=v(b,Z,O,y);b.onBeforeShadow(t,b,T,P,U,K,L),t.renderBufferDirect(P,null,U,K,b,L),b.onAfterShadow(t,b,T,P,U,K,L)}}}else if(X.visible){const J=v(b,X,O,y);b.onBeforeShadow(t,b,T,P,U,J,null),t.renderBufferDirect(P,null,U,J,b,null),b.onAfterShadow(t,b,T,P,U,J,null)}}const H=b.children;for(let U=0,X=H.length;U<X;U++)S(H[U],T,P,O,y)}function R(b){b.target.removeEventListener("dispose",R);for(const P in u){const O=u[P],y=b.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}const g2={[Kf]:ia,[Zf]:eh,[Jf]:th,[Gs]:Qf,[ia]:Kf,[eh]:Zf,[th]:Jf,[Qf]:Gs};function v2(t){function e(){let k=!1;const ve=new pt;let q=null;const te=new pt(0,0,0,0);return{setMask:function(me){q!==me&&!k&&(t.colorMask(me,me,me,me),q=me)},setLocked:function(me){k=me},setClear:function(me,xe,Ye,Et,sn){sn===!0&&(me*=Et,xe*=Et,Ye*=Et),ve.set(me,xe,Ye,Et),te.equals(ve)===!1&&(t.clearColor(me,xe,Ye,Et),te.copy(ve))},reset:function(){k=!1,q=null,te.set(-1,0,0,0)}}}function n(){let k=!1,ve=!1,q=null,te=null,me=null;return{setReversed:function(xe){ve=xe},setTest:function(xe){xe?pe(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(xe){q!==xe&&!k&&(t.depthMask(xe),q=xe)},setFunc:function(xe){if(ve&&(xe=g2[xe]),te!==xe){switch(xe){case Kf:t.depthFunc(t.NEVER);break;case ia:t.depthFunc(t.ALWAYS);break;case Zf:t.depthFunc(t.LESS);break;case Gs:t.depthFunc(t.LEQUAL);break;case Jf:t.depthFunc(t.EQUAL);break;case Qf:t.depthFunc(t.GEQUAL);break;case eh:t.depthFunc(t.GREATER);break;case th:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=xe}},setLocked:function(xe){k=xe},setClear:function(xe){me!==xe&&(t.clearDepth(xe),me=xe)},reset:function(){k=!1,q=null,te=null,me=null}}}function i(){let k=!1,ve=null,q=null,te=null,me=null,xe=null,Ye=null,Et=null,sn=null;return{setTest:function(Ke){k||(Ke?pe(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(Ke){ve!==Ke&&!k&&(t.stencilMask(Ke),ve=Ke)},setFunc:function(Ke,on,hi){(q!==Ke||te!==on||me!==hi)&&(t.stencilFunc(Ke,on,hi),q=Ke,te=on,me=hi)},setOp:function(Ke,on,hi){(xe!==Ke||Ye!==on||Et!==hi)&&(t.stencilOp(Ke,on,hi),xe=Ke,Ye=on,Et=hi)},setLocked:function(Ke){k=Ke},setClear:function(Ke){sn!==Ke&&(t.clearStencil(Ke),sn=Ke)},reset:function(){k=!1,ve=null,q=null,te=null,me=null,xe=null,Ye=null,Et=null,sn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,h=null,x=null,v=null,S=null,R=null,b=new $e(0,0,0),T=0,P=!1,O=null,y=null,w=null,H=null,U=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,N=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=N>=1):G.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=N>=2);let L=null,Z={};const K=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ue=new pt().fromArray(K),Oe=new pt().fromArray(oe);function $(k,ve,q,te){const me=new Uint8Array(4),xe=t.createTexture();t.bindTexture(k,xe),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<q;Ye++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(ve+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return xe}const ne={};ne[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),s.setFunc(Gs),De(!1),He(wm),pe(t.CULL_FACE),D(or);function pe(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function he(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function Le(k,ve){return c[k]!==ve?(t.bindFramebuffer(k,ve),c[k]=ve,k===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=ve),k===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function Y(k,ve){let q=d,te=!1;if(k){q=f.get(ve),q===void 0&&(q=[],f.set(ve,q));const me=k.textures;if(q.length!==me.length||q[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,Ye=me.length;xe<Ye;xe++)q[xe]=t.COLOR_ATTACHMENT0+xe;q.length=me.length,te=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,te=!0);te&&t.drawBuffers(q)}function Ee(k){return p!==k?(t.useProgram(k),p=k,!0):!1}const Re={[wi]:t.FUNC_ADD,[IS]:t.FUNC_SUBTRACT,[US]:t.FUNC_REVERSE_SUBTRACT};Re[kS]=t.MIN,Re[FS]=t.MAX;const ke={[Od]:t.ZERO,[OS]:t.ONE,[zd]:t.SRC_COLOR,[qf]:t.SRC_ALPHA,[WS]:t.SRC_ALPHA_SATURATE,[VS]:t.DST_COLOR,[BS]:t.DST_ALPHA,[zS]:t.ONE_MINUS_SRC_COLOR,[$f]:t.ONE_MINUS_SRC_ALPHA,[GS]:t.ONE_MINUS_DST_COLOR,[HS]:t.ONE_MINUS_DST_ALPHA,[jS]:t.CONSTANT_COLOR,[XS]:t.ONE_MINUS_CONSTANT_COLOR,[YS]:t.CONSTANT_ALPHA,[qS]:t.ONE_MINUS_CONSTANT_ALPHA};function D(k,ve,q,te,me,xe,Ye,Et,sn,Ke){if(k===or){g===!0&&(he(t.BLEND),g=!1);return}if(g===!1&&(pe(t.BLEND),g=!0),k!==Fd){if(k!==_||Ke!==P){if((m!==wi||v!==wi)&&(t.blendEquation(t.FUNC_ADD),m=wi,v=wi),Ke)switch(k){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iu:t.blendFunc(t.ONE,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}h=null,x=null,S=null,R=null,b.set(0,0,0),T=0,_=k,P=Ke}return}me=me||ve,xe=xe||q,Ye=Ye||te,(ve!==m||me!==v)&&(t.blendEquationSeparate(Re[ve],Re[me]),m=ve,v=me),(q!==h||te!==x||xe!==S||Ye!==R)&&(t.blendFuncSeparate(ke[q],ke[te],ke[xe],ke[Ye]),h=q,x=te,S=xe,R=Ye),(Et.equals(b)===!1||sn!==T)&&(t.blendColor(Et.r,Et.g,Et.b,sn),b.copy(Et),T=sn),_=k,P=!1}function Ze(k,ve){k.side===Dn?he(t.CULL_FACE):pe(t.CULL_FACE);let q=k.side===en;ve&&(q=!q),De(q),k.blending===Ls&&k.transparent===!1?D(or):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const te=k.stencilWrite;o.setTest(te),te&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Je(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(k){O!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),O=k)}function He(k){k!==LS?(pe(t.CULL_FACE),k!==y&&(k===wm?t.cullFace(t.BACK):k===NS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),y=k}function Ne(k){k!==w&&(J&&t.lineWidth(k),w=k)}function Je(k,ve,q){k?(pe(t.POLYGON_OFFSET_FILL),(H!==ve||U!==q)&&(t.polygonOffset(ve,q),H=ve,U=q)):he(t.POLYGON_OFFSET_FILL)}function j(k){k?pe(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function C(k){k===void 0&&(k=t.TEXTURE0+X-1),L!==k&&(t.activeTexture(k),L=k)}function M(k,ve,q){q===void 0&&(L===null?q=t.TEXTURE0+X-1:q=L);let te=Z[q];te===void 0&&(te={type:void 0,texture:void 0},Z[q]=te),(te.type!==k||te.texture!==ve)&&(L!==q&&(t.activeTexture(q),L=q),t.bindTexture(k,ve||ne[k]),te.type=k,te.texture=ve)}function B(){const k=Z[L];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(k){ue.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ue.copy(k))}function Me(k){Oe.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Oe.copy(k))}function Xe(k,ve){let q=l.get(ve);q===void 0&&(q=new WeakMap,l.set(ve,q));let te=q.get(k);te===void 0&&(te=t.getUniformBlockIndex(ve,k.name),q.set(k,te))}function ze(k,ve){const te=l.get(ve).get(k);a.get(ve)!==te&&(t.uniformBlockBinding(ve,te,k.__bindingPointIndex),a.set(ve,te))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,Z={},c={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,h=null,x=null,v=null,S=null,R=null,b=new $e(0,0,0),T=0,P=!1,O=null,y=null,w=null,H=null,U=null,ue.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:he,bindFramebuffer:Le,drawBuffers:Y,useProgram:Ee,setBlending:D,setMaterial:Ze,setFlipSided:De,setCullFace:He,setLineWidth:Ne,setPolygonOffset:Je,setScissorTest:j,activeTexture:C,bindTexture:M,unbindTexture:B,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:de,texImage3D:Pe,updateUBOMapping:Xe,uniformBlockBinding:ze,texStorage2D:Ae,texStorage3D:se,texSubImage2D:Q,texSubImage3D:Se,compressedTexSubImage2D:ce,compressedTexSubImage3D:re,scissor:Fe,viewport:Me,reset:st}}function m0(t,e,n,i){const r=x2(i);switch(n){case hx:return t*e;case px:return t*e;case mx:return t*e*2;case Gd:return t*e/r.components*r.byteLength;case Wd:return t*e/r.components*r.byteLength;case gx:return t*e*2/r.components*r.byteLength;case jd:return t*e*2/r.components*r.byteLength;case dx:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case Xd:return t*e*4/r.components*r.byteLength;case Ml:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case El:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oh:case lh:return Math.max(t,16)*Math.max(e,8)/4;case sh:case ah:return Math.max(t,8)*Math.max(e,8)/2;case uh:case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Al:case Ah:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vx:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Rh:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function x2(t){switch(t){case Ui:case ux:return{byteLength:1,components:1};case ra:case cx:case Qs:return{byteLength:2,components:1};case Hd:case Vd:return{byteLength:2,components:4};case fr:case Bd:case Kn:return{byteLength:4,components:1};case fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function _2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ye,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):sa("canvas")}function _(C,M,B){let ee=1;const ie=j(C);if((ie.width>B||ie.height>B)&&(ee=B/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(ee*ie.width),Se=Math.floor(ee*ie.height);f===void 0&&(f=g(Q,Se));const ce=M?g(Q,Se):f;return ce.width=Q,ce.height=Se,ce.getContext("2d").drawImage(C,0,0,Q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Se+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==hn&&C.minFilter!==Jt}function h(C){t.generateMipmap(C)}function x(C,M,B,ee,ie=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=M;if(M===t.RED&&(B===t.FLOAT&&(Q=t.R32F),B===t.HALF_FLOAT&&(Q=t.R16F),B===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.R8UI),B===t.UNSIGNED_SHORT&&(Q=t.R16UI),B===t.UNSIGNED_INT&&(Q=t.R32UI),B===t.BYTE&&(Q=t.R8I),B===t.SHORT&&(Q=t.R16I),B===t.INT&&(Q=t.R32I)),M===t.RG&&(B===t.FLOAT&&(Q=t.RG32F),B===t.HALF_FLOAT&&(Q=t.RG16F),B===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RG8UI),B===t.UNSIGNED_SHORT&&(Q=t.RG16UI),B===t.UNSIGNED_INT&&(Q=t.RG32UI),B===t.BYTE&&(Q=t.RG8I),B===t.SHORT&&(Q=t.RG16I),B===t.INT&&(Q=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),B===t.UNSIGNED_INT&&(Q=t.RGB32UI),B===t.BYTE&&(Q=t.RGB8I),B===t.SHORT&&(Q=t.RGB16I),B===t.INT&&(Q=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),B===t.UNSIGNED_INT&&(Q=t.RGBA32UI),B===t.BYTE&&(Q=t.RGBA8I),B===t.SHORT&&(Q=t.RGBA16I),B===t.INT&&(Q=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),M===t.RGBA){const Se=ie?su:tt.getTransfer(ee);B===t.FLOAT&&(Q=t.RGBA32F),B===t.HALF_FLOAT&&(Q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Q=Se===ct?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(C,M){let B;return C?M===null||M===fr||M===Xs?B=t.DEPTH24_STENCIL8:M===Kn?B=t.DEPTH32F_STENCIL8:M===ra&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fr||M===Xs?B=t.DEPTH_COMPONENT24:M===Kn?B=t.DEPTH_COMPONENT32F:M===ra&&(B=t.DEPTH_COMPONENT16),B}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&c.delete(M)}function b(C){const M=C.target;M.removeEventListener("dispose",b),O(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const B=C.source,ee=d.get(B);if(ee){const ie=ee[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(C),Object.keys(ee).length===0&&d.delete(B)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const B=C.source,ee=d.get(B);delete ee[M.__cacheKey],o.memory.textures--}function O(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ie=0;ie<M.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=C.textures;for(let ee=0,ie=B.length;ee<ie;ee++){const Q=i.get(B[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(C)}let y=0;function w(){y=0}function H(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function U(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function X(C,M){const B=i.get(C);if(C.isVideoTexture&&Ne(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,C,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function J(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Oe(B,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function N(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Oe(B,C,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function G(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){$(B,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const L={[ru]:t.REPEAT,[Nr]:t.CLAMP_TO_EDGE,[rh]:t.MIRRORED_REPEAT},Z={[hn]:t.NEAREST,[r1]:t.NEAREST_MIPMAP_NEAREST,[Ia]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[hc]:t.LINEAR_MIPMAP_NEAREST,[Ai]:t.LINEAR_MIPMAP_LINEAR},K={[u1]:t.NEVER,[m1]:t.ALWAYS,[c1]:t.LESS,[xx]:t.LEQUAL,[f1]:t.EQUAL,[p1]:t.GEQUAL,[h1]:t.GREATER,[d1]:t.NOTEQUAL};function oe(C,M){if(M.type===Kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===hc||M.magFilter===Ia||M.magFilter===Ai||M.minFilter===Jt||M.minFilter===hc||M.minFilter===Ia||M.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==Ia&&M.minFilter!==Ai||M.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ue(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const ee=M.source;let ie=d.get(ee);ie===void 0&&(ie={},d.set(ee,ie));const Q=U(M);if(Q!==C.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[Q].usedTimes++;const Se=ie[C.__cacheKey];Se!==void 0&&(ie[C.__cacheKey].usedTimes--,Se.usedTimes===0&&P(M)),C.__cacheKey=Q,C.__webglTexture=ie[Q].texture}return B}function Oe(C,M,B){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=ue(C,M),Q=M.source;n.bindTexture(ee,C.__webglTexture,t.TEXTURE0+B);const Se=i.get(Q);if(Q.version!==Se.__version||ie===!0){n.activeTexture(t.TEXTURE0+B);const ce=tt.getPrimaries(tt.workingColorSpace),re=M.colorSpace===cn?null:tt.getPrimaries(M.colorSpace),Ae=M.colorSpace===cn||ce===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let se=_(M.image,!1,r.maxTextureSize);se=Je(M,se);const de=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let Fe=x(M.internalFormat,de,Pe,M.colorSpace,M.isVideoTexture);oe(ee,M);let Me;const Xe=M.mipmaps,ze=M.isVideoTexture!==!0,st=Se.__version===void 0||ie===!0,k=Q.dataReady,ve=S(M,se);if(M.isDepthTexture)Fe=v(M.format===Ys,M.type),st&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Fe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Fe,se.width,se.height,0,de,Pe,null));else if(M.isDataTexture)if(Xe.length>0){ze&&st&&n.texStorage2D(t.TEXTURE_2D,ve,Fe,Xe[0].width,Xe[0].height);for(let q=0,te=Xe.length;q<te;q++)Me=Xe[q],ze?k&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Me.width,Me.height,de,Pe,Me.data):n.texImage2D(t.TEXTURE_2D,q,Fe,Me.width,Me.height,0,de,Pe,Me.data);M.generateMipmaps=!1}else ze?(st&&n.texStorage2D(t.TEXTURE_2D,ve,Fe,se.width,se.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,de,Pe,se.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,se.width,se.height,0,de,Pe,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Fe,Xe[0].width,Xe[0].height,se.depth);for(let q=0,te=Xe.length;q<te;q++)if(Me=Xe[q],M.format!==Zn)if(de!==null)if(ze){if(k)if(M.layerUpdates.size>0){const me=m0(Me.width,Me.height,M.format,M.type);for(const xe of M.layerUpdates){const Ye=Me.data.subarray(xe*me/Me.data.BYTES_PER_ELEMENT,(xe+1)*me/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,xe,Me.width,Me.height,1,de,Ye,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,se.depth,de,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,Fe,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,se.depth,de,Pe,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,Fe,Me.width,Me.height,se.depth,0,de,Pe,Me.data)}else{ze&&st&&n.texStorage2D(t.TEXTURE_2D,ve,Fe,Xe[0].width,Xe[0].height);for(let q=0,te=Xe.length;q<te;q++)Me=Xe[q],M.format!==Zn?de!==null?ze?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,Me.width,Me.height,de,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,q,Fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?k&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Me.width,Me.height,de,Pe,Me.data):n.texImage2D(t.TEXTURE_2D,q,Fe,Me.width,Me.height,0,de,Pe,Me.data)}else if(M.isDataArrayTexture)if(ze){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Fe,se.width,se.height,se.depth),k)if(M.layerUpdates.size>0){const q=m0(se.width,se.height,M.format,M.type);for(const te of M.layerUpdates){const me=se.data.subarray(te*q/se.data.BYTES_PER_ELEMENT,(te+1)*q/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,de,Pe,me)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Pe,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,se.width,se.height,se.depth,0,de,Pe,se.data);else if(M.isData3DTexture)ze?(st&&n.texStorage3D(t.TEXTURE_3D,ve,Fe,se.width,se.height,se.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Pe,se.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,se.width,se.height,se.depth,0,de,Pe,se.data);else if(M.isFramebufferTexture){if(st)if(ze)n.texStorage2D(t.TEXTURE_2D,ve,Fe,se.width,se.height);else{let q=se.width,te=se.height;for(let me=0;me<ve;me++)n.texImage2D(t.TEXTURE_2D,me,Fe,q,te,0,de,Pe,null),q>>=1,te>>=1}}else if(Xe.length>0){if(ze&&st){const q=j(Xe[0]);n.texStorage2D(t.TEXTURE_2D,ve,Fe,q.width,q.height)}for(let q=0,te=Xe.length;q<te;q++)Me=Xe[q],ze?k&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,de,Pe,Me):n.texImage2D(t.TEXTURE_2D,q,Fe,de,Pe,Me);M.generateMipmaps=!1}else if(ze){if(st){const q=j(se);n.texStorage2D(t.TEXTURE_2D,ve,Fe,q.width,q.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Pe,se)}else n.texImage2D(t.TEXTURE_2D,0,Fe,de,Pe,se);m(M)&&h(ee),Se.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $(C,M,B){if(M.image.length!==6)return;const ee=ue(C,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const Q=i.get(ie);if(ie.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const Se=tt.getPrimaries(tt.workingColorSpace),ce=M.colorSpace===cn?null:tt.getPrimaries(M.colorSpace),re=M.colorSpace===cn||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!Ae&&!se?de[te]=_(M.image[te],!0,r.maxCubemapSize):de[te]=se?M.image[te].image:M.image[te],de[te]=Je(M,de[te]);const Pe=de[0],Fe=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),Xe=x(M.internalFormat,Fe,Me,M.colorSpace),ze=M.isVideoTexture!==!0,st=Q.__version===void 0||ee===!0,k=ie.dataReady;let ve=S(M,Pe);oe(t.TEXTURE_CUBE_MAP,M);let q;if(Ae){ze&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Xe,Pe.width,Pe.height);for(let te=0;te<6;te++){q=de[te].mipmaps;for(let me=0;me<q.length;me++){const xe=q[me];M.format!==Zn?Fe!==null?ze?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,xe.width,xe.height,Fe,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,Xe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,xe.width,xe.height,Fe,Me,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,Xe,xe.width,xe.height,0,Fe,Me,xe.data)}}}else{if(q=M.mipmaps,ze&&st){q.length>0&&ve++;const te=j(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Xe,te.width,te.height)}for(let te=0;te<6;te++)if(se){ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,Fe,Me,de[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,de[te].width,de[te].height,0,Fe,Me,de[te].data);for(let me=0;me<q.length;me++){const Ye=q[me].image[te].image;ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ye.width,Ye.height,Fe,Me,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,Xe,Ye.width,Ye.height,0,Fe,Me,Ye.data)}}else{ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,Me,de[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,Fe,Me,de[te]);for(let me=0;me<q.length;me++){const xe=q[me];ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Fe,Me,xe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,Xe,Fe,Me,xe.image[te])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,B,ee,ie,Q){const Se=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),re=x(B.internalFormat,Se,ce,B.colorSpace);if(!i.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>Q),de=Math.max(1,M.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Q,re,se,de,M.depth,0,Se,ce,null):n.texImage2D(ie,Q,re,se,de,0,Se,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),He(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get(B).__webglTexture,0,De(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get(B).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(C,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const ee=M.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Q=v(M.stencilBuffer,ie),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=De(M);He(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Q,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,C)}else{const ee=M.textures;for(let ie=0;ie<ee.length;ie++){const Q=ee[ie],Se=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),re=x(Q.internalFormat,Se,ce,Q.colorSpace),Ae=De(M);B&&He(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,re,M.width,M.height):He(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,ie=De(M);if(M.depthTexture.format===Ns)He(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Ys)He(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Le(C){const M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=ee}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,C)}else if(B){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),pe(M.__webglDepthbuffer[ee],C,!1);else{const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),pe(M.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Y(C,M,B){const ee=i.get(C);M!==void 0&&ne(ee.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Le(C)}function Ee(C){const M=C.texture,B=i.get(C),ee=i.get(M);C.addEventListener("dispose",b);const ie=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Se=ie.length>1;if(Se||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let re=0;re<M.mipmaps.length;re++)B.__webglFramebuffer[ce][re]=t.createFramebuffer()}else B.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)B.__webglFramebuffer[ce]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,re=ie.length;ce<re;ce++){const Ae=i.get(ie[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&He(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const re=ie[ce];B.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ae=s.convert(re.format,re.colorSpace),se=s.convert(re.type),de=x(re.internalFormat,Ae,se,re.colorSpace,C.isXRRenderTarget===!0),Pe=De(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,de,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(t.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)ne(B.__webglFramebuffer[ce][re],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,re);else ne(B.__webglFramebuffer[ce],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ce=0,re=ie.length;ce<re;ce++){const Ae=ie[ce],se=i.get(Ae);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),oe(t.TEXTURE_2D,Ae),ne(B.__webglFramebuffer,C,Ae,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ae)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ee.__webglTexture),oe(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)ne(B.__webglFramebuffer[re],C,M,t.COLOR_ATTACHMENT0,ce,re);else ne(B.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,ce,0);m(M)&&h(ce),n.unbindTexture()}C.depthBuffer&&Le(C)}function Re(C){const M=C.textures;for(let B=0,ee=M.length;B<ee;B++){const ie=M[B];if(m(ie)){const Q=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(ie).__webglTexture;n.bindTexture(Q,Se),h(Q),n.unbindTexture()}}}const ke=[],D=[];function Ze(C){if(C.samples>0){if(He(C)===!1){const M=C.textures,B=C.width,ee=C.height;let ie=t.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(C),ce=M.length>1;if(ce)for(let re=0;re<M.length;re++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let re=0;re<M.length;re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[re]);const Ae=i.get(M[re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,B,ee,0,0,B,ee,ie,t.NEAREST),l===!0&&(ke.length=0,D.length=0,ke.push(t.COLOR_ATTACHMENT0+re),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ke.push(Q),D.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let re=0;re<M.length;re++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,Se.__webglColorRenderbuffer[re]);const Ae=i.get(M[re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function De(C){return Math.min(r.maxSamples,C.samples)}function He(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ne(C){const M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function Je(C,M){const B=C.colorSpace,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Fi&&B!==cn&&(tt.getTransfer(B)===ct?(ee!==Zn||ie!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function j(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=w,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=N,this.setTextureCube=G,this.rebindTextures=Y,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=He}function y2(t,e){function n(i,r=cn){let s;const o=tt.getTransfer(r);if(i===Ui)return t.UNSIGNED_BYTE;if(i===Hd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===fx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ux)return t.BYTE;if(i===cx)return t.SHORT;if(i===ra)return t.UNSIGNED_SHORT;if(i===Bd)return t.INT;if(i===fr)return t.UNSIGNED_INT;if(i===Kn)return t.FLOAT;if(i===Qs)return t.HALF_FLOAT;if(i===hx)return t.ALPHA;if(i===dx)return t.RGB;if(i===Zn)return t.RGBA;if(i===px)return t.LUMINANCE;if(i===mx)return t.LUMINANCE_ALPHA;if(i===Ns)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===Gd)return t.RED;if(i===Wd)return t.RED_INTEGER;if(i===gx)return t.RG;if(i===jd)return t.RG_INTEGER;if(i===Xd)return t.RGBA_INTEGER;if(i===Ml||i===wl||i===El||i===Tl)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sh||i===oh||i===ah||i===lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uh||i===ch||i===fh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uh||i===ch)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hh||i===dh||i===ph||i===mh||i===gh||i===vh||i===xh||i===_h||i===yh||i===Sh||i===Mh||i===wh||i===Eh||i===Th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_h)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Th)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===Ah||i===Ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vx||i===bh||i===Rh||i===Ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class S2 extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M2={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const w2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E2=`
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

}`;class T2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new St({vertexShader:w2,fragmentShader:E2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new it(new Mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A2 extends eo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,g=null;const _=new T2,m=n.getContextAttributes();let h=null,x=null;const v=[],S=[],R=new ye;let b=null;const T=new wn;T.layers.enable(1),T.viewport=new pt;const P=new wn;P.layers.enable(2),P.viewport=new pt;const O=[T,P],y=new S2;y.layers.enable(1),y.layers.enable(2);let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=v[$];return ne===void 0&&(ne=new Vc,v[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=v[$];return ne===void 0&&(ne=new Vc,v[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=v[$];return ne===void 0&&(ne=new Vc,v[$]=ne),ne.getHandSpace()};function U($){const ne=S.indexOf($.inputSource);if(ne===-1)return;const pe=v[ne];pe!==void 0&&(pe.update($.inputSource,$.frame,u||o),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let $=0;$<v.length;$++){const ne=S[$];ne!==null&&(S[$]=null,v[$].disconnect(ne))}w=null,H=null,_.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,x=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new In(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,pe=null,he=null;m.depth&&(he=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Ys:Ns,pe=m.stencil?Xs:fr);const Le={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new In(d.textureWidth,d.textureHeight,{format:Zn,type:Ui,depthTexture:new Zd(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J($){for(let ne=0;ne<$.removed.length;ne++){const pe=$.removed[ne],he=S.indexOf(pe);he>=0&&(S[he]=null,v[he].disconnect(pe))}for(let ne=0;ne<$.added.length;ne++){const pe=$.added[ne];let he=S.indexOf(pe);if(he===-1){for(let Y=0;Y<v.length;Y++)if(Y>=S.length){S.push(pe),he=Y;break}else if(S[Y]===null){S[Y]=pe,he=Y;break}if(he===-1)break}const Le=v[he];Le&&Le.connect(pe)}}const N=new I,G=new I;function L($,ne,pe){N.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(pe.matrixWorld);const he=N.distanceTo(G),Le=ne.projectionMatrix.elements,Y=pe.projectionMatrix.elements,Ee=Le[14]/(Le[10]-1),Re=Le[14]/(Le[10]+1),ke=(Le[9]+1)/Le[5],D=(Le[9]-1)/Le[5],Ze=(Le[8]-1)/Le[0],De=(Y[8]+1)/Y[0],He=Ee*Ze,Ne=Ee*De,Je=he/(-Ze+De),j=Je*-Ze;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(j),$.translateZ(Je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Le[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const C=Ee+Je,M=Re+Je,B=He-j,ee=Ne+(he-j),ie=ke*Re/M*C,Q=D*Re/M*C;$.projectionMatrix.makePerspective(B,ee,ie,Q,C,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,pe=$.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),y.near=P.near=T.near=ne,y.far=P.far=T.far=pe,(w!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,H=y.far);const he=$.parent,Le=y.cameras;Z(y,he);for(let Y=0;Y<Le.length;Y++)Z(Le[Y],he);Le.length===2?L(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),K($,y,he)};function K($,ne,pe){pe===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Lh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let oe=null;function ue($,ne){if(c=ne.getViewerPose(u||o),g=ne,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let he=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let Y=0;Y<pe.length;Y++){const Ee=pe[Y];let Re=null;if(p!==null)Re=p.getViewport(Ee);else{const D=f.getViewSubImage(d,Ee);Re=D.viewport,Y===0&&(e.setRenderTargetTextures(x,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(x))}let ke=O[Y];ke===void 0&&(ke=new wn,ke.layers.enable(Y),ke.viewport=new pt,O[Y]=ke),ke.matrix.fromArray(Ee.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ee.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Re.x,Re.y,Re.width,Re.height),Y===0&&(y.matrix.copy(ke.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(ke)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Y=f.getDepthInformation(pe[0]);Y&&Y.isValid&&Y.texture&&_.init(e,Y,r.renderState)}}for(let pe=0;pe<v.length;pe++){const he=S[pe],Le=v[pe];he!==null&&Le!==void 0&&Le.update(he,ne,u||o)}oe&&oe($,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Oe=new Px;Oe.setAnimationLoop(ue),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const Mr=new ci,C2=new We;function b2(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Ax(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===en&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===en&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,Mr.copy(S),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(C2.makeRotationFromEuler(Mr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(g(x),S=c(x),r[x.id]=S,x.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(x,R);const b=e.render.frame;s[x.id]!==b&&(d(x),s[x.id]=b)}function c(x){const v=f();x.__bindingPointIndex=v;const S=t.createBuffer(),R=x.__size,b=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],S=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,T=S.length;b<T;b++){const P=Array.isArray(S[b])?S[b]:[S[b]];for(let O=0,y=P.length;O<y;O++){const w=P[O];if(p(w,b,O,R)===!0){const H=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let J=0;J<U.length;J++){const N=U[J],G=_(N);typeof N=="number"||typeof N=="boolean"?(w.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,H+X,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=0,w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=0,w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=0):(N.toArray(w.__data,X),X+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,S,R){const b=x.value,T=v+"_"+S;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{const P=R[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(x){const v=x.uniforms;let S=0;const R=16;for(let T=0,P=v.length;T<P;T++){const O=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,w=O.length;y<w;y++){const H=O[y],U=Array.isArray(H.value)?H.value:[H.value];for(let X=0,J=U.length;X<J;X++){const N=U[X],G=_(N),L=S%R,Z=L%G.boundary,K=L+Z;S+=Z,K!==0&&R-K<G.storage&&(S+=R-K),H.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=G.storage}}}const b=S%R;return b>0&&(S+=R-b),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class P2{constructor(e={}){const{canvas:n=v1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Pi,this.toneMappingExposure=1;const v=this;let S=!1,R=0,b=0,T=null,P=-1,O=null;const y=new pt,w=new pt;let H=null;const U=new $e(0);let X=0,J=n.width,N=n.height,G=1,L=null,Z=null;const K=new pt(0,0,J,N),oe=new pt(0,0,J,N);let ue=!1;const Oe=new Rx;let $=!1,ne=!1;const pe=new We,he=new We,Le=new I,Y=new pt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function ke(){return T===null?G:1}let D=i;function Ze(A,F){return n.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kd}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",xe,!1),D===null){const F="webgl2";if(D=Ze(F,A),D===null)throw Ze(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let De,He,Ne,Je,j,C,M,B,ee,ie,Q,Se,ce,re,Ae,se,de,Pe,Fe,Me,Xe,ze,st,k;function ve(){De=new UE(D),De.init(),ze=new y2(D,De),He=new RE(D,De,e,ze),Ne=new v2(D),He.reverseDepthBuffer&&Ne.buffers.depth.setReversed(!0),Je=new OE(D),j=new n2,C=new _2(D,De,Ne,j,He,ze,Je),M=new LE(v),B=new IE(v),ee=new j1(D),st=new CE(D,ee),ie=new kE(D,ee,Je,st),Q=new BE(D,ie,ee,Je),Fe=new zE(D,He,C),se=new PE(j),Se=new t2(v,M,B,De,He,st,se),ce=new b2(v,j),re=new r2,Ae=new c2(De),Pe=new AE(v,M,B,Ne,Q,d,l),de=new m2(v,Q,He),k=new R2(D,Je,He,Ne),Me=new bE(D,De,Je),Xe=new FE(D,De,Je),Je.programs=Se.programs,v.capabilities=He,v.extensions=De,v.properties=j,v.renderLists=re,v.shadowMap=de,v.state=Ne,v.info=Je}ve();const q=new A2(v,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(J,N,!1))},this.getSize=function(A){return A.set(J,N)},this.setSize=function(A,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,N=F,n.width=Math.floor(A*G),n.height=Math.floor(F*G),V===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(J*G,N*G).floor()},this.setDrawingBufferSize=function(A,F,V){J=A,N=F,G=V,n.width=Math.floor(A*V),n.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,F,V,W){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,F,V,W),Ne.viewport(y.copy(K).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,F,V,W){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,F,V,W),Ne.scissor(w.copy(oe).multiplyScalar(G).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(A){Ne.setScissorTest(ue=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(A=!0,F=!0,V=!0){let W=0;if(A){let z=!1;if(T!==null){const le=T.texture.format;z=le===Xd||le===jd||le===Wd}if(z){const le=T.texture.type,ge=le===Ui||le===fr||le===ra||le===Xs||le===Hd||le===Vd,we=Pe.getClearColor(),Te=Pe.getClearAlpha(),Ie=we.r,Ue=we.g,Ce=we.b;ge?(p[0]=Ie,p[1]=Ue,p[2]=Ce,p[3]=Te,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Ie,g[1]=Ue,g[2]=Ce,g[3]=Te,D.clearBufferiv(D.COLOR,0,g))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),re.dispose(),Ae.dispose(),j.dispose(),M.dispose(),B.dispose(),Q.dispose(),st.dispose(),k.dispose(),Se.dispose(),q.dispose(),q.removeEventListener("sessionstart",op),q.removeEventListener("sessionend",ap),gr.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Je.autoReset,F=de.enabled,V=de.autoUpdate,W=de.needsUpdate,z=de.type;ve(),Je.autoReset=A,de.enabled=F,de.autoUpdate=V,de.needsUpdate=W,de.type=z}function xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const F=A.target;F.removeEventListener("dispose",Ye),Et(F)}function Et(A){sn(A),j.remove(A)}function sn(A){const F=j.get(A).programs;F!==void 0&&(F.forEach(function(V){Se.releaseProgram(V)}),A.isShaderMaterial&&Se.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,W,z,le){F===null&&(F=Ee);const ge=z.isMesh&&z.matrixWorld.determinant()<0,we=Qx(A,F,V,W,z);Ne.setMaterial(W,ge);let Te=V.index,Ie=1;if(W.wireframe===!0){if(Te=ie.getWireframeAttribute(V),Te===void 0)return;Ie=2}const Ue=V.drawRange,Ce=V.attributes.position;let nt=Ue.start*Ie,lt=(Ue.start+Ue.count)*Ie;le!==null&&(nt=Math.max(nt,le.start*Ie),lt=Math.min(lt,(le.start+le.count)*Ie)),Te!==null?(nt=Math.max(nt,0),lt=Math.min(lt,Te.count)):Ce!=null&&(nt=Math.max(nt,0),lt=Math.min(lt,Ce.count));const _t=lt-nt;if(_t<0||_t===1/0)return;st.setup(z,W,we,V,Te);let gn,Qe=Me;if(Te!==null&&(gn=ee.get(Te),Qe=Xe,Qe.setIndex(gn)),z.isMesh)W.wireframe===!0?(Ne.setLineWidth(W.wireframeLinewidth*ke()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(z.isLine){let be=W.linewidth;be===void 0&&(be=1),Ne.setLineWidth(be*ke()),z.isLineSegments?Qe.setMode(D.LINES):z.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else z.isPoints?Qe.setMode(D.POINTS):z.isSprite&&Qe.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Qe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const be=z._multiDrawStarts,It=z._multiDrawCounts,et=z._multiDrawCount,zn=Te?ee.get(Te).bytesPerElement:1,Yr=j.get(W).currentProgram.getUniforms();for(let vn=0;vn<et;vn++)Yr.setValue(D,"_gl_DrawID",vn),Qe.render(be[vn]/zn,It[vn])}else if(z.isInstancedMesh)Qe.renderInstances(nt,_t,z.count);else if(V.isInstancedBufferGeometry){const be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,It=Math.min(V.instanceCount,be);Qe.renderInstances(nt,_t,It)}else Qe.render(nt,_t)};function Ke(A,F,V){A.transparent===!0&&A.side===Dn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,ga(A,F,V),A.side=cr,A.needsUpdate=!0,ga(A,F,V),A.side=Dn):ga(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),m=Ae.get(V),m.init(F),x.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),A!==V&&A.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const W=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const we=le[ge];Ke(we,V,z),W.add(we)}else Ke(le,V,z),W.add(le)}),x.pop(),m=null,W},this.compileAsync=function(A,F,V=null){const W=this.compile(A,F,V);return new Promise(z=>{function le(){if(W.forEach(function(ge){j.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){z(A);return}setTimeout(le,10)}De.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let on=null;function hi(A){on&&on(A)}function op(){gr.stop()}function ap(){gr.start()}const gr=new Px;gr.setAnimationLoop(hi),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(A){on=A,q.setAnimationLoop(A),A===null?gr.stop():gr.start()},q.addEventListener("sessionstart",op),q.addEventListener("sessionend",ap),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,T),m=Ae.get(A,x.length),m.init(F),x.push(m),he.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(he),ne=this.localClippingEnabled,$=se.init(this.clippingPlanes,ne),_=re.get(A,h.length),_.init(),h.push(_),q.enabled===!0&&q.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&ku(le,F,-1/0,v.sortObjects)}ku(A,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(L,Z),Re=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Re&&Pe.addToRenderList(_,A),this.info.render.frame++,$===!0&&se.beginShadows();const V=m.state.shadowsArray;de.render(V,A,F),$===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,z=_.transmissive;if(m.setupLights(),F.isArrayCamera){const le=F.cameras;if(z.length>0)for(let ge=0,we=le.length;ge<we;ge++){const Te=le[ge];up(W,z,A,Te)}Re&&Pe.render(A);for(let ge=0,we=le.length;ge<we;ge++){const Te=le[ge];lp(_,A,Te,Te.viewport)}}else z.length>0&&up(W,z,A,F),Re&&Pe.render(A),lp(_,A,F);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,F),st.resetDefaultState(),P=-1,O=null,x.pop(),x.length>0?(m=x[x.length-1],$===!0&&se.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ku(A,F,V,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){W&&Y.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const ge=Q.update(A),we=A.material;we.visible&&_.push(A,ge,we,V,Y.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const ge=Q.update(A),we=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Y.copy(A.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Y.copy(ge.boundingSphere.center)),Y.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(we)){const Te=ge.groups;for(let Ie=0,Ue=Te.length;Ie<Ue;Ie++){const Ce=Te[Ie],nt=we[Ce.materialIndex];nt&&nt.visible&&_.push(A,ge,nt,V,Y.z,Ce)}}else we.visible&&_.push(A,ge,we,V,Y.z,null)}}const le=A.children;for(let ge=0,we=le.length;ge<we;ge++)ku(le[ge],F,V,W)}function lp(A,F,V,W){const z=A.opaque,le=A.transmissive,ge=A.transparent;m.setupLightsView(V),$===!0&&se.setGlobalState(v.clippingPlanes,V),W&&Ne.viewport(y.copy(W)),z.length>0&&ma(z,F,V),le.length>0&&ma(le,F,V),ge.length>0&&ma(ge,F,V),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function up(A,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new In(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Qs:Ui,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const le=m.state.transmissionRenderTarget[W.id],ge=W.viewport||y;le.setSize(ge.z,ge.w);const we=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(U),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Re&&Pe.render(V);const Te=v.toneMapping;v.toneMapping=Pi;const Ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),$===!0&&se.setGlobalState(v.clippingPlanes,W),ma(A,V,W),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ce=0,nt=F.length;Ce<nt;Ce++){const lt=F[Ce],_t=lt.object,gn=lt.geometry,Qe=lt.material,be=lt.group;if(Qe.side===Dn&&_t.layers.test(W.layers)){const It=Qe.side;Qe.side=en,Qe.needsUpdate=!0,cp(_t,V,W,gn,Qe,be),Qe.side=It,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le))}v.setRenderTarget(we),v.setClearColor(U,X),Ie!==void 0&&(W.viewport=Ie),v.toneMapping=Te}function ma(A,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let z=0,le=A.length;z<le;z++){const ge=A[z],we=ge.object,Te=ge.geometry,Ie=W===null?ge.material:W,Ue=ge.group;we.layers.test(V.layers)&&cp(we,F,V,Te,Ie,Ue)}}function cp(A,F,V,W,z,le){A.onBeforeRender(v,F,V,W,z,le),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(v,F,V,W,A,le),z.transparent===!0&&z.side===Dn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,v.renderBufferDirect(V,F,W,z,A,le),z.side=cr,z.needsUpdate=!0,v.renderBufferDirect(V,F,W,z,A,le),z.side=Dn):v.renderBufferDirect(V,F,W,z,A,le),A.onAfterRender(v,F,V,W,z,le)}function ga(A,F,V){F.isScene!==!0&&(F=Ee);const W=j.get(A),z=m.state.lights,le=m.state.shadowsArray,ge=z.state.version,we=Se.getParameters(A,z.state,le,F,V),Te=Se.getProgramCacheKey(we);let Ie=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?B:M).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",Ye),Ie=new Map,W.programs=Ie);let Ue=Ie.get(Te);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===ge)return hp(A,we),Ue}else we.uniforms=Se.getUniforms(A),A.onBeforeCompile(we,v),Ue=Se.acquireProgram(we,Te),Ie.set(Te,Ue),W.uniforms=we.uniforms;const Ce=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=se.uniform),hp(A,we),W.needsLights=t_(A),W.lightsStateVersion=ge,W.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMap.value=z.state.directionalShadowMap,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotShadowMap.value=z.state.spotShadowMap,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMap.value=z.state.pointShadowMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function fp(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=bl.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function hp(A,F){const V=j.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Qx(A,F,V,W,z){F.isScene!==!0&&(F=Ee),C.resetTextureUnits();const le=F.fog,ge=W.isMeshStandardMaterial?F.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Fi,Te=(W.isMeshStandardMaterial?B:M).get(W.envMap||ge),Ie=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let _t=Pi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_t=v.toneMapping);const gn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=gn!==void 0?gn.length:0,be=j.get(W),It=m.state.lights;if($===!0&&(ne===!0||A!==O)){const Rn=A===O&&W.id===P;se.setState(W,A,Rn)}let et=!1;W.version===be.__version?(be.needsLights&&be.lightsStateVersion!==It.state.version||be.outputColorSpace!==we||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==Te||W.fog===!0&&be.fog!==le||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==se.numPlanes||be.numIntersection!==se.numIntersection)||be.vertexAlphas!==Ie||be.vertexTangents!==Ue||be.morphTargets!==Ce||be.morphNormals!==nt||be.morphColors!==lt||be.toneMapping!==_t||be.morphTargetsCount!==Qe)&&(et=!0):(et=!0,be.__version=W.version);let zn=be.currentProgram;et===!0&&(zn=ga(W,F,z));let Yr=!1,vn=!1,Fu=!1;const Mt=zn.getUniforms(),Oi=be.uniforms;if(Ne.useProgram(zn.program)&&(Yr=!0,vn=!0,Fu=!0),W.id!==P&&(P=W.id,vn=!0),Yr||O!==A){He.reverseDepthBuffer?(pe.copy(A.projectionMatrix),_1(pe),y1(pe),Mt.setValue(D,"projectionMatrix",pe)):Mt.setValue(D,"projectionMatrix",A.projectionMatrix),Mt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Rn=Mt.map.cameraPosition;Rn!==void 0&&Rn.setValue(D,Le.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,vn=!0,Fu=!0)}if(z.isSkinnedMesh){Mt.setOptional(D,z,"bindMatrix"),Mt.setOptional(D,z,"bindMatrixInverse");const Rn=z.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Mt.setValue(D,"boneTexture",Rn.boneTexture,C))}z.isBatchedMesh&&(Mt.setOptional(D,z,"batchingTexture"),Mt.setValue(D,"batchingTexture",z._matricesTexture,C),Mt.setOptional(D,z,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",z._indirectTexture,C),Mt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",z._colorsTexture,C));const Ou=V.morphAttributes;if((Ou.position!==void 0||Ou.normal!==void 0||Ou.color!==void 0)&&Fe.update(z,V,zn),(vn||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,Mt.setValue(D,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Oi.envMap.value=Te,Oi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Oi.envMapIntensity.value=F.environmentIntensity),vn&&(Mt.setValue(D,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&e_(Oi,Fu),le&&W.fog===!0&&ce.refreshFogUniforms(Oi,le),ce.refreshMaterialUniforms(Oi,W,G,N,m.state.transmissionRenderTarget[A.id]),bl.upload(D,fp(be),Oi,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(bl.upload(D,fp(be),Oi,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Mt.setValue(D,"center",z.center),Mt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Mt.setValue(D,"normalMatrix",z.normalMatrix),Mt.setValue(D,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Rn=W.uniformsGroups;for(let zu=0,n_=Rn.length;zu<n_;zu++){const dp=Rn[zu];k.update(dp,zn),k.bind(dp,zn)}}return zn}function e_(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function t_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,F,V){j.get(A.texture).__webglTexture=F,j.get(A.depthTexture).__webglTexture=V;const W=j.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const V=j.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,V=0){T=A,R=F,b=V;let W=!0,z=null,le=!1,ge=!1;if(A){const Te=j.get(A);if(Te.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Te.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Te.__hasExternalTextures)C.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ce=A.depthTexture;if(Te.__boundDepthTexture!==Ce){if(Ce!==null&&j.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ge=!0);const Ue=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?z=Ue[F][V]:z=Ue[F],le=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?z=j.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?z=Ue[V]:z=Ue,y.copy(A.viewport),w.copy(A.scissor),H=A.scissorTest}else y.copy(K).multiplyScalar(G).floor(),w.copy(oe).multiplyScalar(G).floor(),H=ue;if(Ne.bindFramebuffer(D.FRAMEBUFFER,z)&&W&&Ne.drawBuffers(A,z),Ne.viewport(y),Ne.scissor(w),Ne.setScissorTest(H),le){const Te=j.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,V)}else if(ge){const Te=j.get(A.texture),Ie=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,V||0,Ie)}P=-1},this.readRenderTargetPixels=function(A,F,V,W,z,le,ge){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Ne.bindFramebuffer(D.FRAMEBUFFER,we);try{const Te=A.texture,Ie=Te.format,Ue=Te.type;if(!He.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&V>=0&&V<=A.height-z&&D.readPixels(F,V,W,z,ze.convert(Ie),ze.convert(Ue),le)}finally{const Te=T!==null?j.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(A,F,V,W,z,le,ge){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){const Te=A.texture,Ie=Te.format,Ue=Te.type;if(!He.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-W&&V>=0&&V<=A.height-z){Ne.bindFramebuffer(D.FRAMEBUFFER,we);const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(F,V,W,z,ze.convert(Ie),ze.convert(Ue),0);const nt=T!==null?j.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(D.FRAMEBUFFER,nt);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await x1(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(Ce),D.deleteSync(lt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,V=0){A.isTexture!==!0&&(Cl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-V),z=Math.floor(A.image.width*W),le=Math.floor(A.image.height*W),ge=F!==null?F.x:0,we=F!==null?F.y:0;C.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ge,we,z,le),Ne.unbindTexture()},this.copyTextureToTexture=function(A,F,V=null,W=null,z=0){A.isTexture!==!0&&(Cl("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],F=arguments[2],z=arguments[3]||0,V=null);let le,ge,we,Te,Ie,Ue;V!==null?(le=V.max.x-V.min.x,ge=V.max.y-V.min.y,we=V.min.x,Te=V.min.y):(le=A.image.width,ge=A.image.height,we=0,Te=0),W!==null?(Ie=W.x,Ue=W.y):(Ie=0,Ue=0);const Ce=ze.convert(F.format),nt=ze.convert(F.type);C.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const lt=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=D.getParameter(D.UNPACK_SKIP_PIXELS),Qe=D.getParameter(D.UNPACK_SKIP_ROWS),be=D.getParameter(D.UNPACK_SKIP_IMAGES),It=A.isCompressedTexture?A.mipmaps[z]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,It.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,It.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Ie,Ue,le,ge,Ce,nt,It.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Ie,Ue,It.width,It.height,Ce,It.data):D.texSubImage2D(D.TEXTURE_2D,z,Ie,Ue,le,ge,Ce,nt,It),D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be),z===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(A,F,V=null,W=null,z=0){A.isTexture!==!0&&(Cl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,A=arguments[2],F=arguments[3],z=arguments[4]||0);let le,ge,we,Te,Ie,Ue,Ce,nt,lt;const _t=A.isCompressedTexture?A.mipmaps[z]:A.image;V!==null?(le=V.max.x-V.min.x,ge=V.max.y-V.min.y,we=V.max.z-V.min.z,Te=V.min.x,Ie=V.min.y,Ue=V.min.z):(le=_t.width,ge=_t.height,we=_t.depth,Te=0,Ie=0,Ue=0),W!==null?(Ce=W.x,nt=W.y,lt=W.z):(Ce=0,nt=0,lt=0);const gn=ze.convert(F.format),Qe=ze.convert(F.type);let be;if(F.isData3DTexture)C.setTexture3D(F,0),be=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),be=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const It=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),zn=D.getParameter(D.UNPACK_SKIP_PIXELS),Yr=D.getParameter(D.UNPACK_SKIP_ROWS),vn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(be,z,Ce,nt,lt,le,ge,we,gn,Qe,_t.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(be,z,Ce,nt,lt,le,ge,we,gn,_t.data):D.texSubImage3D(be,z,Ce,nt,lt,le,ge,we,gn,Qe,_t),D.pixelStorei(D.UNPACK_ROW_LENGTH,It),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,vn),z===0&&F.generateMipmaps&&D.generateMipmap(be),Ne.unbindTexture()},this.initRenderTarget=function(A){j.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Ne.unbindTexture()},this.resetState=function(){R=0,b=0,T=null,Ne.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Yd?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Nu?"display-p3":"srgb"}}class Gc extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class L2 extends Ot{constructor(e=null,n=1,i=1,r,s,o,a,l,u=hn,c=hn,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g0 extends kt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new We,v0=new We,tl=[],x0=new jr,N2=new We,yo=new it,So=new Xr;class _0 extends it{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new g0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,N2)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new jr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,us),x0.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(x0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,us),So.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(So)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),e.ray.intersectsSphere(So)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,us),v0.multiplyMatrices(i,us),yo.matrixWorld=v0,yo.raycast(e,tl);for(let o=0,a=tl.length;o<a;o++){const l=tl[o];l.instanceId=s,l.object=this,n.push(l)}tl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new g0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new L2(new Float32Array(r*this.count),r,this.count,Gd,Kn));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class D2 extends io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new I,cu=new I,y0=new We,Mo=new qd,nl=new Xr,Wc=new I,S0=new I;class I2 extends tn{constructor(e=new Bt,n=new D2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)uu.fromBufferAttribute(n,r-1),cu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=uu.distanceTo(cu);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(r),nl.radius+=s,e.ray.intersectsSphere(nl)===!1)return;y0.copy(r).invert(),Mo.copy(e.ray).applyMatrix4(y0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const h=c.getX(_),x=c.getX(_+1),v=il(this,e,Mo,l,h,x);v&&n.push(v)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(p),h=il(this,e,Mo,l,_,m);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const h=il(this,e,Mo,l,_,_+1);h&&n.push(h)}if(this.isLineLoop){const _=il(this,e,Mo,l,g-1,p);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function il(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(uu.fromBufferAttribute(o,r),cu.fromBufferAttribute(o,s),n.distanceSqToSegment(uu,cu,Wc,S0)>i)return;Wc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Wc);if(!(l<e.near||l>e.far))return{distance:l,point:S0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const M0=new I,w0=new I;class U2 extends I2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)M0.fromBufferAttribute(n,r),w0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+M0.distanceTo(w0);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k2 extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const E0=new We,Ih=new qd,rl=new Xr,sl=new I;class T0 extends tn{constructor(e=new Bt,n=new k2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;E0.copy(r).invert(),Ih.copy(e.ray).applyMatrix4(E0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=u.getX(g);sl.fromBufferAttribute(f,m),A0(sl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p;g<_;g++)sl.fromBufferAttribute(f,g),A0(sl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function A0(t,e,n,i,r,s,o){const a=Ih.distanceSqToPoint(t);if(a<n){const l=new I;Ih.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class F2 extends Ot{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,p=(o-c)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ye:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new We;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Yt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jd extends fi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ye){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*f+this.aX,u=d*f+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class O2 extends Jd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;d*=c,p*=c,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ol=new I,jc=new Qd,Xc=new Qd,Yc=new Qd;class z2 extends fi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(ol.subVectors(r[0],r[1]).add(r[0]),u=ol);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(ol.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=ol),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),jc.initNonuniformCatmullRom(u.x,f.x,d.x,c.x,g,_,m),Xc.initNonuniformCatmullRom(u.y,f.y,d.y,c.y,g,_,m),Yc.initNonuniformCatmullRom(u.z,f.z,d.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(jc.initCatmullRom(u.x,f.x,d.x,c.x,this.tension),Xc.initCatmullRom(u.y,f.y,d.y,c.y,this.tension),Yc.initCatmullRom(u.z,f.z,d.z,c.z,this.tension));return i.set(jc.calc(l),Xc.calc(l),Yc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function C0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function B2(t,e){const n=1-t;return n*n*e}function H2(t,e){return 2*(1-t)*t*e}function V2(t,e){return t*t*e}function Fo(t,e,n,i){return B2(t,e)+H2(t,n)+V2(t,i)}function G2(t,e){const n=1-t;return n*n*n*e}function W2(t,e){const n=1-t;return 3*n*n*t*e}function j2(t,e){return 3*(1-t)*t*t*e}function X2(t,e){return t*t*t*e}function Oo(t,e,n,i,r){return G2(t,e)+W2(t,n)+j2(t,i)+X2(t,r)}class Ux extends fi{constructor(e=new ye,n=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Y2 extends fi{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y),Oo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kx extends fi{constructor(e=new ye,n=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q2 extends fi{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fx extends fi{constructor(e=new ye,n=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Fo(e,r.x,s.x,o.x),Fo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $2 extends fi{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Fo(e,r.x,s.x,o.x),Fo(e,r.y,s.y,o.y),Fo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ox extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(C0(a,l.x,u.x,c.x,f.x),C0(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ye().fromArray(r))}return this}}var b0=Object.freeze({__proto__:null,ArcCurve:O2,CatmullRomCurve3:z2,CubicBezierCurve:Ux,CubicBezierCurve3:Y2,EllipseCurve:Jd,LineCurve:kx,LineCurve3:q2,QuadraticBezierCurve:Fx,QuadraticBezierCurve3:$2,SplineCurve:Ox});class K2 extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new b0[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new b0[r.type]().fromJSON(r))}return this}}class R0 extends K2{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new kx(this.currentPoint.clone(),new ye(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Fx(this.currentPoint.clone(),new ye(e,n),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Ux(this.currentPoint.clone(),new ye(e,n),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Ox(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new Jd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $n extends Bt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let h=0;x(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(p,2));function x(){const S=new I,R=new I;let b=0;const T=(n-e)/i;for(let P=0;P<=s;P++){const O=[],y=P/s,w=y*(n-e)+e;for(let H=0;H<=r;H++){const U=H/r,X=U*l+a,J=Math.sin(X),N=Math.cos(X);R.x=w*J,R.y=-y*i+m,R.z=w*N,f.push(R.x,R.y,R.z),S.set(J,T,N).normalize(),d.push(S.x,S.y,S.z),p.push(U,1-y),O.push(g++)}_.push(O)}for(let P=0;P<r;P++)for(let O=0;O<s;O++){const y=_[O][P],w=_[O+1][P],H=_[O+1][P+1],U=_[O][P+1];e>0&&(c.push(y,w,U),b+=3),n>0&&(c.push(w,H,U),b+=3)}u.addGroup(h,b,0),h+=b}function v(S){const R=g,b=new ye,T=new I;let P=0;const O=S===!0?e:n,y=S===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const w=g;for(let H=0;H<=r;H++){const X=H/r*l+a,J=Math.cos(X),N=Math.sin(X);T.x=O*N,T.y=m*y,T.z=O*J,f.push(T.x,T.y,T.z),d.push(0,y,0),b.x=J*.5+.5,b.y=N*.5*y+.5,p.push(b.x,b.y),g++}for(let H=0;H<r;H++){const U=R+H,X=w+H;S===!0?c.push(X,X+1,U):c.push(X+1,X,U),P+=3}u.addGroup(h,P,S===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ep extends $n{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ep(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tp extends Bt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(s.slice(),3)),this.setAttribute("uv",new vt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new I,S=new I,R=new I;for(let b=0;b<n.length;b+=3)p(n[b+0],v),p(n[b+1],S),p(n[b+2],R),l(v,S,R,x)}function l(x,v,S,R){const b=R+1,T=[];for(let P=0;P<=b;P++){T[P]=[];const O=x.clone().lerp(S,P/b),y=v.clone().lerp(S,P/b),w=b-P;for(let H=0;H<=w;H++)H===0&&P===b?T[P][H]=O:T[P][H]=O.clone().lerp(y,H/w)}for(let P=0;P<b;P++)for(let O=0;O<2*(b-P)-1;O++){const y=Math.floor(O/2);O%2===0?(d(T[P][y+1]),d(T[P+1][y]),d(T[P][y])):(d(T[P][y+1]),d(T[P+1][y+1]),d(T[P+1][y]))}}function u(x){const v=new I;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function c(){const x=new I;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=m(x)/2/Math.PI+.5,R=h(x)/Math.PI+.5;o.push(S,1-R)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],R=o[x+4],b=Math.max(v,S,R),T=Math.min(v,S,R);b>.9&&T<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function p(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const x=new I,v=new I,S=new I,R=new I,b=new ye,T=new ye,P=new ye;for(let O=0,y=0;O<s.length;O+=9,y+=6){x.set(s[O+0],s[O+1],s[O+2]),v.set(s[O+3],s[O+4],s[O+5]),S.set(s[O+6],s[O+7],s[O+8]),b.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),R.copy(x).add(v).add(S).divideScalar(3);const w=m(R);_(b,y+0,x,w),_(T,y+2,v,w),_(P,y+4,S,w)}}function _(x,v,S,R){R<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.vertices,e.indices,e.radius,e.details)}}class zx extends R0{constructor(e){super(e),this.uuid=to(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new R0().fromJSON(r))}return this}}const Z2={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Bx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,d,p;if(i&&(s=nA(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let g=n;g<r;g+=n)f=t[g],d=t[g+1],f<a&&(a=f),d<l&&(l=d),f>u&&(u=f),d>c&&(c=d);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return oa(s,o,n,a,l,p,0),o}};function Bx(t,e,n,i,r){let s,o;if(r===dA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=P0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=P0(s,t[s],t[s+1],o);return o&&Iu(o,o.next)&&(la(o),o=o.next),o}function Vr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Iu(n,n.next)||mt(n.prev,n,n.next)===0)){if(la(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function oa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&aA(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?Q2(t,i,r,s):J2(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),la(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=eA(Vr(t),e,n),oa(t,e,n,i,r,s,2)):o===2&&tA(t,e,n,i,r,s):oa(Vr(t),e,n,i,r,s,1);break}}}function J2(t){const e=t.prev,n=t,i=t.next;if(mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=d&&g.y>=f&&g.y<=p&&Es(r,a,s,l,o,u,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Q2(t,e,n,i){const r=t.prev,s=t,o=t.next;if(mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,d=o.y,p=a<l?a<u?a:u:l<u?l:u,g=c<f?c<d?c:d:f<d?f:d,_=a>l?a>u?a:u:l>u?l:u,m=c>f?c>d?c:d:f>d?f:d,h=Uh(p,g,e,n,i),x=Uh(_,m,e,n,i);let v=t.prevZ,S=t.nextZ;for(;v&&v.z>=h&&S&&S.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Es(a,c,l,f,u,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Es(a,c,l,f,u,d,S.x,S.y)&&mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=h;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Es(a,c,l,f,u,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Es(a,c,l,f,u,d,S.x,S.y)&&mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function eA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Iu(r,s)&&Hx(r,i,i.next,s)&&aa(r,s)&&aa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),la(i),la(i.next),i=t=s),i=i.next}while(i!==t);return Vr(i)}function tA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cA(o,a)){let l=Vx(o,a);o=Vr(o,o.next),l=Vr(l,l.next),oa(o,e,n,i,r,s,0),oa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function nA(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=Bx(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(uA(u));for(r.sort(iA),s=0;s<r.length;s++)n=rA(r[s],n);return n}function iA(t,e){return t.x-e.x}function rA(t,e){const n=sA(t,e);if(!n)return e;const i=Vx(n,t);return Vr(i,i.next),Vr(n,n.next)}function sA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Es(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),aa(n,t)&&(f<c||f===c&&(n.x>r.x||n.x===r.x&&oA(r,n)))&&(r=n,c=f)),n=n.next;while(n!==a);return r}function oA(t,e){return mt(t.prev,t,e.prev)<0&&mt(e.next,t,t.next)<0}function aA(t,e,n,i){let r=t;do r.z===0&&(r.z=Uh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,lA(r)}function lA(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function Uh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function uA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Es(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function cA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!fA(t,e)&&(aa(t,e)&&aa(e,t)&&hA(t,e)&&(mt(t.prev,t,e.prev)||mt(t,e.prev,e))||Iu(t,e)&&mt(t.prev,t,t.next)>0&&mt(e.prev,e,e.next)>0)}function mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Iu(t,e){return t.x===e.x&&t.y===e.y}function Hx(t,e,n,i){const r=ll(mt(t,e,n)),s=ll(mt(t,e,i)),o=ll(mt(n,i,t)),a=ll(mt(n,i,e));return!!(r!==s&&o!==a||r===0&&al(t,n,e)||s===0&&al(t,i,e)||o===0&&al(n,t,i)||a===0&&al(n,e,i))}function al(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ll(t){return t>0?1:t<0?-1:0}function fA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Hx(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function aa(t,e){return mt(t.prev,t,t.next)<0?mt(t,e,t.next)>=0&&mt(t,t.prev,e)>=0:mt(t,e,t.prev)<0||mt(t,t.next,e)<0}function hA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Vx(t,e){const n=new kh(t.i,t.x,t.y),i=new kh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function P0(t,e,n,i){const r=new kh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function la(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function kh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class zo{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return zo.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];L0(e),N0(i,e);let o=e.length;n.forEach(L0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,N0(i,n[l]);const a=Z2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function L0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function N0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class fu extends tp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new fu(e.radius,e.detail)}}class np extends Bt{constructor(e=new zx([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(s,3)),this.setAttribute("uv",new vt(o,2));function u(c){const f=r.length/3,d=c.extractPoints(n);let p=d.shape;const g=d.holes;zo.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=g.length;m<h;m++){const x=g[m];zo.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=zo.triangulateShape(p,g);for(let m=0,h=g.length;m<h;m++){const x=g[m];p=p.concat(x)}for(let m=0,h=p.length;m<h;m++){const x=p[m];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,h=_.length;m<h;m++){const x=_[m],v=x[0]+f,S=x[1]+f,R=x[2]+f;i.push(v,S,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return pA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new np(i,e.curveSegments)}}function pA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Uu extends Bt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new I,d=new I,p=[],g=[],_=[],m=[];for(let h=0;h<=i;h++){const x=[],v=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const b=R/n;f.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(b+S,1-v),x.push(u++)}c.push(x)}for(let h=0;h<i;h++)for(let x=0;x<n;x++){const v=c[h][x+1],S=c[h][x],R=c[h+1][x],b=c[h+1][x+1];(h!==0||o>0)&&p.push(v,S,b),(h!==i-1||l<Math.PI)&&p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const D0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class mA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const gA=new mA;class ip{constructor(e){this.manager=e!==void 0?e:gA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ip.DEFAULT_MATERIAL_NAME="__DEFAULT";class vA extends ip{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=D0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=sa("img");function l(){c(),D0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xA extends ip{constructor(e){super(e)}load(e,n,i,r){const s=new Ot,o=new vA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);const Rl=12,mr=`
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
`,Gx=`
varying vec3 vW; varying vec3 vN; varying vec2 vUv;
void main() {
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
  m = m * instanceMatrix;
  #endif
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(m) * normal); vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;function yn(t,e){return new St({side:Dn,uniforms:{...t,uAlbedo:{value:new $e(e.albedo)},uRetro:{value:e.retro??0},uMap:{value:e.map??null},uHasMap:{value:e.map?1:0},uEmit:{value:new $e(e.emit??0)},uSnowy:{value:e.snowy??0},uGloss:{value:e.gloss??0},uNoise:{value:e.noise??0},uFringe:{value:e.fringe??0}},vertexShader:Gx,fragmentShader:`
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
}`})}function _A(t,e){return new St({uniforms:{...t,uReflTex:{value:null},uReflMat:{value:new We},uWet:{value:0},tAsphalt:{value:e.asphalt},tGravel:{value:e.gravel},tSnow:{value:e.snow},uEdgeLines:{value:1}},vertexShader:`
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
}`})}function yA(t){return new St({depthTest:!0,depthWrite:!0,depthFunc:ia,uniforms:{...t,tPhoto:{value:null},tMask:{value:null},uPRot:{value:new Be},uPTan:{value:new ye(.3,.3)},uInvProj:{value:new We},uCamWorld:{value:new We},uViewProj:{value:new We},uCam:{value:new I},uWallL:{value:-6},uWallR:{value:6},uBlack:{value:.2},uAlbK:{value:1},uTreeK:{value:1},uWet:{value:0},uWinter:{value:0},uOvercast:{value:0},uReady:{value:0},uCrest:{value:1e5},uSat:{value:.75}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
}`})}const Is=8;function SA(t){const e=()=>Array.from({length:Is},()=>new I),n=()=>Array.from({length:Is},()=>new pt);return new St({depthTest:!0,depthWrite:!0,depthFunc:ia,uniforms:{...t,tR0:{value:null},tR1:{value:null},tR2:{value:null},tMask:{value:null},uPRot:{value:new Be},uPTan:{value:new ye(.3,.3)},uInvProj:{value:new We},uCamWorld:{value:new We},uViewProj:{value:new We},uCam:{value:new I},uWallL:{value:-6},uWallR:{value:6},uK:{value:.2},uWet:{value:0},uReady:{value:0},uTexel:{value:new ye(1/1600,1/1064)},uRN:{value:0},uRPos:{value:e()},uRFwd:{value:e()},uRRight:{value:e()},uRUp:{value:e()},uRBeam:{value:n()},uRI:{value:n()},uRSet:{value:e()},uCarRef:{value:new I(0,0,-12)},uRefCol:{value:new I(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
// very light unsharp mask (source is 4x super-resolved from 800 px)
vec3 samp(sampler2D t, vec2 uv) {
  vec3 c = texture2D(t, uv).rgb;
  vec3 b = (texture2D(t, uv + vec2(uTexel.x, 0.0)).rgb + texture2D(t, uv - vec2(uTexel.x, 0.0)).rgb + texture2D(t, uv + vec2(0.0, uTexel.y)).rgb + texture2D(t, uv - vec2(0.0, uTexel.y)).rgb) * 0.25;
  return lin(clamp(c + (c - b) * 0.25, 0.0, 1.0));
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

vec3 relight(bool isG, vec3 rd, vec2 puv, vec3 mk, float road, float gnd, float car, vec3 p0, vec3 p1, vec3 p2, out vec3 Pout) {
  // geometry
  float tg = rd.y < -1e-5 ? -uCam.y / rd.y : 1e6;
  float wx = rd.x < 0.0 ? uWallL : uWallR;
  float tw = abs(rd.x) > 1e-5 ? (wx - uCam.x) / rd.x : 1e6; if (tw < 0.0) tw = 1e6;
  if (tg > 1e5) tg = 250.0;
  tg = min(tg, tw);
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

  float l0 = dot(p0, vec3(0.2126, 0.7152, 0.0722)), l1 = dot(p1, vec3(0.2126, 0.7152, 0.0722)), l2 = dot(p2, vec3(0.2126, 0.7152, 0.0722));
  // confidence: pixel well above the noise floor AND the model says that reference really lit it
  // A pixel that is dark although the model says that reference lit it is genuinely dark (ditch, shadow) and must stay
  // dark; only where no reference lit the spot at all does the snowy-road prior take over.
  vec3 cm = Sk / (Sk + 0.004);
  vec3 c = cm * (0.3 + 0.7 * vec3(l0, l1, l2) / (vec3(l0, l1, l2) + 0.02));
  vec3 sim = exp(-0.8 * abs(log(max(vec3(su), 1e-6) / max(Sk, 1e-6))));
  vec3 w = c * (0.15 + sim) + 1e-6;
  vec3 r = min(vec3(su) / max(Sk, 1e-5), 40.0);   // luminance ratio per reference (lamp colour applied below)
  vec3 colN = Su / max(su, 1e-9) / uRefCol;
  vec3 est = (w.x * p0 * r.x + w.y * p1 * r.y + w.z * p2 * r.z);
  float ws = w.x + w.y + w.z;
  // prior albedo where no reference saw anything (snowy forest road)
  vec3 prior = vec3(0.65, 0.68, 0.72) * (road > 0.5 ? 1.0 : (isG ? 0.95 : 0.16 + 0.12 * fbm(puv * vec2(60.0, 40.0))));
  float wp = 0.02 * (1.0 - max(cm.x, max(cm.y, cm.z)));
  vec3 col = (est + wp * prior * su) / (ws + wp);
  // keep the photo's colour, tint it by the user's lamp colour relative to neutral
  col *= mix(vec3(1.0), colN, 0.85);
  if (wet > 0.0) col *= 1.0 - 0.45 * wet;
  col += spec;
  // very low cold moonlight / sky glow (Purkinje: blue-grey, colourless)
  col += prior * uAmbient * vec3(0.7, 0.82, 1.05) * (isG ? 1.0 : 0.6);
  Pout = P;
  return col;
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

  vec3 p0 = samp(tR0, puv) / uK, p1 = samp(tR1, puv) / uK, p2 = samp(tR2, puv) / uK;
  // ground vs. tree-wall geometry: blend both near the mask boundary (a hard switch draws dark contours)
  float fg = gnd / max(gnd + tree, 1e-4);
  vec3 P, P2; vec3 col;
  if (fg > 0.8 || fg < 0.2 || car > 0.5) col = relight(fg >= 0.5, rd, puv, mk, road, gnd, car, p0, p1, p2, P);
  else {
    vec3 cg = relight(true, rd, puv, mk, road, gnd, car, p0, p1, p2, P);
    vec3 cw = relight(false, rd, puv, mk, road, gnd, car, p0, p1, p2, P2);
    float k = smoothstep(0.2, 0.8, fg);
    col = mix(cw, cg, k); if (k < 0.5) P = P2;
  }
  col = mix(col, skyC, sky);
  gl_FragColor = vec4(col, 1.0);
  vec4 clip = uViewProj * vec4(car > 0.5 ? uCam + rd * 1.2 : P, 1.0);
  gl_FragDepth = clamp(clip.z / clip.w * 0.5 + 0.5, 0.0, 0.999999);
}`})}function MA(t,e,n,i,r,s,o){return new St({side:Dn,transparent:!0,depthWrite:!0,uniforms:{...t,tMap:{value:e},uAlbK:{value:n},uSat:{value:i},uGain:{value:1},uMean:{value:r},uTexSize:{value:new ye(...s)},uPhotoPx:{value:1},uWB:{value:new I(1,1,1)},uCamPos:{value:new I},uHFrac:{value:new ye(...o)}},vertexShader:Gx,fragmentShader:`
${mr}
uniform sampler2D tMap; uniform float uAlbK, uSat, uSnowAmt, uGain, uMean, uPhotoPx; uniform vec2 uTexSize, uHFrac; uniform vec3 uWB, uCamPos;
varying vec3 vW; varying vec3 vN; varying vec2 vUv;
void main() {
  // match the photo's resolution: never show more texture detail than the background photo has at this spot
  vec2 tc = vUv * uTexSize;
  float lod0 = log2(max(max(length(dFdx(tc)), length(dFdy(tc))), 1e-4));
  float lod = max(lod0 + log2(max(uPhotoPx * 0.55, 1.0)), 0.0);
  vec4 t = textureLod(tMap, vUv, lod);
  // soft, slightly blurred silhouette instead of a hard cut-out edge
  float a = smoothstep(0.08, 0.6, textureLod(tMap, vUv, lod + 0.4).a);
  if (a < 0.02) discard;
  vec3 lin = pow(t.rgb, vec3(2.2));
  // remove the daylight shading baked into the source photo (low-frequency luminance → flat albedo)
  float lowL = dot(pow(textureLod(tMap, vUv, 5.0).rgb, vec3(2.2)), vec3(0.2126, 0.7152, 0.0722));
  lin /= mix(1.0, clamp(lowL / uMean, 0.35, 2.5), 0.65);
  float l = dot(lin, vec3(0.2126, 0.7152, 0.0722));
  vec3 alb = mix(vec3(l), lin, uSat) * uAlbK;
  // snow settling on the back in a snowstorm
  float hf = clamp((vUv.y - uHFrac.x) / (uHFrac.y - uHFrac.x), 0.0, 1.5);
  alb = mix(alb, vec3(0.6), uSnowAmt * 0.25 * smoothstep(0.82, 0.97, hf));
  // body volume from the silhouette: an "inflated" normal from the blurred alpha gradient.
  // The lamps sit almost on the line of sight, so edges (rounded flanks, the back) turn away and darken.
  vec2 e = 3.0 / uTexSize * exp2(max(lod, 2.0));
  float gx = textureLod(tMap, vUv + vec2(e.x, 0.0), lod + 2.5).a - textureLod(tMap, vUv - vec2(e.x, 0.0), lod + 2.5).a;
  float gy = textureLod(tMap, vUv + vec2(0.0, e.y), lod + 2.5).a - textureLod(tMap, vUv - vec2(0.0, e.y), lod + 2.5).a;
  vec3 n = normalize(vec3(-gx * 1.6, -gy * 1.6, 1.0));
  vec3 col = vec3(0.0);
  vec3 toCam = normalize(uCamPos - vW);
  // billboard frame: x = right, y = up, z = toward the camera
  vec3 bx = normalize(cross(vec3(0.0, 1.0, 0.0), toCam)); vec3 by = cross(toCam, bx);
  for (int i = 0; i < MAXL; i++) {
    if (i >= uLN) break;
    vec3 L = vW - uLPos[i]; float d;
    float I = beamI(i, L, d);
    if (I <= 0.0) continue;
    vec3 Ld = -L / d; vec3 Ll = vec3(dot(Ld, bx), dot(Ld, by), dot(Ld, toCam));
    float ndl = max(dot(n, Ll), 0.0);
    // fur: broad wrapped lobe, ~0.8 of a facing Lambertian surface on the flank
    col += uLCol[i] * (I / (d * d) * exp(-uSigma * d)) * alb * (0.8 / PI) * mix(0.35, 1.0, ndl);
  }
  // the back faces the sky, not the lamps (lamps ~0.7 m high): top of the body a bit darker
  col *= mix(1.0, 0.72, smoothstep(0.6, 1.05, hf));
  col += alb * uAmbient * vec3(0.7, 0.82, 1.05) * (0.6 + 0.4 * n.y + 0.4 * smoothstep(0.5, 1.0, hf));
  col *= uWB;
  gl_FragColor = vec4(col * uGain, a);
}`})}function wA(){return new St({transparent:!0,depthWrite:!1,depthTest:!0,blending:Fd,blendSrc:Od,blendDst:zd,blendEquation:wi,uniforms:{uK:{value:.65}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uK; varying vec2 vUv;
      void main(){ vec2 q = (vUv - 0.5) * 2.0; float r = dot(q, q); float s = exp(-r * 3.2) * uK; gl_FragColor = vec4(vec3(1.0 - s), 1.0); }`})}function EA(t,e,n,i){return new St({transparent:!0,depthWrite:!1,depthTest:!0,blending:Fd,blendSrc:Od,blendDst:zd,blendEquation:wi,uniforms:{tMap:{value:t},uLamp:{value:new I(0,.7,100)},uSpread:{value:.5},uK:{value:.8},uWHS:{value:new I(e,n,i)}},vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tMap; uniform vec3 uLamp, uWHS; uniform float uSpread, uK; varying vec3 vL;
      float occ(vec3 Lp){
        float t = Lp.z / (Lp.z - vL.z);              // where the lamp→ground ray crosses the animal's plane (z = 0)
        vec2 hit = Lp.xy + t * (vL.xy - Lp.xy);
        vec2 uv = vec2(hit.x / uWHS.x + 0.5, (hit.y + uWHS.z) / uWHS.y);
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
        return textureLod(tMap, uv, 2.0).a;
      }
      void main(){
        if (vL.z > -0.05) discard;
        float o = (occ(uLamp) * 2.0 + occ(uLamp + vec3(uSpread, 0.0, 0.0)) + occ(uLamp - vec3(uSpread, 0.0, 0.0))) * 0.25;
        float fade = exp(vL.z / 18.0) * smoothstep(-0.05, -0.6, vL.z);
        gl_FragColor = vec4(vec3(1.0 - uK * o * fade), 1.0);
      }`})}function TA(t){return new St({transparent:!0,depthWrite:!1,depthTest:!0,blending:iu,uniforms:{...t,uPxRad:{value:5e-4},uCIL:{value:.0025},uGain:{value:1}},vertexShader:`
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
}`,fragmentShader:"varying vec3 vCol; void main(){ vec2 q = gl_PointCoord - 0.5; float a = exp(-dot(q, q) * 9.0) * 2.4; gl_FragColor = vec4(vCol * a, 1.0); }"})}const Us={moose:{id:"moose",label:"Älg",kind:"moose",src:"./animals/moose.png",W:1013,H:640,groundPx:635,shoulderPx:589,shoulderM:1.9,eyes:[[934,111,.55]],albedo:.07,meanLin:.0582,sat:.6,centerM:1.5,credit:"“Moose mother and calf on road” (beskuren, frilagd)",author:"Veronika Ronkos (Wikimedia Commons)",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0",url:"https://commons.wikimedia.org/wiki/File:Moose_mother_and_calf_on_road.jpg"},deer1:{id:"deer1",label:"Rådjur 1",kind:"deer",src:"./animals/deer1.png",W:1235,H:800,groundPx:796,shoulderPx:676,shoulderM:.7,eyes:[[111,181,.5]],albedo:.15,meanLin:.2628,sat:.35,centerM:.6,credit:"“Roe deer in Brastad 1” (beskuren, frilagd)",author:"W.carter (Wikimedia Commons)",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",url:"https://commons.wikimedia.org/wiki/File:Roe_deer_in_Brastad_1.jpg"},deer2:{id:"deer2",label:"Rådjur 2",kind:"deer",src:"./animals/deer2.png",W:644,H:640,groundPx:637,shoulderPx:451,shoulderM:.7,eyes:[[580,107,.7]],albedo:.14,meanLin:.2938,sat:.5,centerM:.6,credit:"“Roe deer (Capreolus capreolus) female Cumnor” (frilagd)",author:"Charles J. Sharp, Sharp Photography (sharpphotography.co.uk)",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0",url:"https://commons.wikimedia.org/wiki/File:Roe_deer_(Capreolus_capreolus)_female_Cumnor.jpg"}},AA=["moose","deer1","deer2"];let CA=0;const bA=()=>Math.random().toString(36).slice(2,7)+(CA++).toString(36),Wn=t=>({on:!0,pair:!1,pairSpacing:1.1,specMode:"lumen",lumen:8e3,efficiency:.7,cd:1e5,lux1:300,kelvin:5700,beam:"combo",hAngle:10,vAngle:5,floodH:50,floodV:12,spotShare:.45,tilt:0,yaw:0,mount:"grille",height:.75,heated:!1,posLight:"off",...t}),RA="Valostore.se – Extraljus PURELUX Panther Heat S540 (uppmätt av Valostore), valostore.se/sv/produkt/extraljus_purelux_panther_heat_s540; vilkur.eu",Wx={purelux:{label:"PURELUX Panther Heat S540 – Rak / 55 cm / 260W",group:"Dina ljus",note:"HS18593-15813 · justerbar hållare, XBB Dongle & PowerUnit",make:()=>Wn({preset:"purelux",name:"Panther Heat S540",specMode:"lumen",lumen:17795,efficiency:1,kelvin:5e3,beam:"combo",hAngle:9,vAngle:6,floodH:40,floodV:14,spotShare:.55,mount:"plate",height:.5,heated:!0,mode:"boost",posLight:"white"})},lowbeam:{label:"Halvljus (bilens)",group:"Bilens ljus",make:()=>Wn({preset:"lowbeam",name:"Halvljus",pair:!0,pairSpacing:1.4,specMode:"cd",cd:22e3,kelvin:4300,beam:"lowbeam",hAngle:30,vAngle:4,floodH:60,floodV:8,spotShare:.6,mount:"grille",height:.68,tilt:0})},highbeam:{label:"Helljus (bilens)",group:"Bilens ljus",make:()=>Wn({preset:"highbeam",name:"Helljus",on:!1,pair:!0,pairSpacing:1.4,specMode:"cd",cd:5e4,kelvin:4300,beam:"driving",hAngle:9,vAngle:5,floodH:34,floodV:9,spotShare:.5,mount:"grille",height:.68})},bar20:{label:'LED-ramp 20" combo',group:"Ramper",make:()=>Wn({preset:"bar20",name:'LED-ramp 20"',lumen:9e3,beam:"combo",mount:"grille",height:.6})},bar30:{label:'LED-ramp 30" combo',group:"Ramper",make:()=>Wn({preset:"bar30",name:'LED-ramp 30"',lumen:14e3,beam:"combo",mount:"grille",height:.6})},bar40:{label:'LED-ramp 40" combo (tak)',group:"Ramper",make:()=>Wn({preset:"bar40",name:'LED-ramp 40"',lumen:19e3,beam:"combo",mount:"roof",height:1.75,tilt:-.3})},round7:{label:'Runda spotlights 7" (par)',group:"Runda",make:()=>Wn({preset:"round7",name:'Rund 7" par',pair:!0,pairSpacing:.9,lumen:4500,efficiency:.75,beam:"spot",hAngle:8,vAngle:6,floodH:30,floodV:12,spotShare:.9,mount:"bumper",height:.55})},round9:{label:'Runda spotlights 9" (par)',group:"Runda",make:()=>Wn({preset:"round9",name:'Rund 9" par',pair:!0,pairSpacing:1,lumen:7500,efficiency:.75,beam:"spot",hAngle:8,vAngle:6,floodH:30,floodV:12,spotShare:.9,mount:"bumper",height:.55})},pods:{label:"Driving pods (par)",group:"Runda",make:()=>Wn({preset:"pods",name:"Driving pods",pair:!0,pairSpacing:1.2,lumen:3e3,efficiency:.75,beam:"driving",hAngle:20,vAngle:8,floodH:45,floodV:12,spotShare:.5,mount:"bumper",height:.5})},laser:{label:"Laserspot",group:"Övrigt",make:()=>Wn({preset:"laser",name:"Laserspot",lumen:2200,efficiency:.8,kelvin:6e3,beam:"laser",hAngle:3,vAngle:3,floodH:12,floodV:6,spotShare:.92,mount:"grille",height:.7})},flood:{label:"Bred flood / arbetsljus",group:"Övrigt",make:()=>Wn({preset:"flood",name:"Bred flood",lumen:6e3,efficiency:.75,kelvin:5e3,beam:"flood",hAngle:40,vAngle:20,floodH:80,floodV:30,spotShare:.1,mount:"roof",height:1.75,tilt:-6})}};function si(t){return{id:bA(),...Wx[t].make()}}const PA={bumper:.5,plate:.5,grille:.75,roof:1.75},LA={bumper:"Stötfångare",plate:"Reg.skylt",grille:"Grill",roof:"Tak"},NA={bumper:-2.35,plate:-2.4,grille:-2.2,roof:-.35},hu={night:{id:"night",kind:"night",label:"Natt · snöig skogsväg (riktigt nattfoto)",src:"./photos/night_x_4x.jpg",mask:"./photos/night_mask.png",aspect:800/532,refs:["./photos/night_d_4x.jpg","./photos/night_f_4x.jpg","./photos/night_x_4x.jpg"],vp:[.5,.44],vfov:16.6,camH:1.12,camDx:.45,wallL:-6,wallR:5.3,K:.2,black:0,albK:1,treeK:1,crest:1e5,sat:1,credit:"“2005 winter road” (halvljus / helljus / helljus + extraljus)",author:"Scoo (Wikimedia Commons)",license:"CC BY-SA 2.5",url:"https://commons.wikimedia.org/wiki/File:2005_winter_road_full_beam_and_extra_lights.jpg"},summer:{id:"summer",label:"Sommar · tallskog",src:"./photos/summer.jpg",mask:"./photos/summer_mask.png",aspect:2048/1367,vp:[.497,.535],vfov:31,camH:1.25,wallL:-5.4,wallR:5.4,black:.25,albK:.95,treeK:1.6,crest:1e5,sat:.6,credit:"“Infinite road”",author:"Sébastien Marchand (Unsplash)",license:"CC0",url:"https://commons.wikimedia.org/wiki/File:Infinite_road_(Unsplash).jpg"},winter:{id:"winter",label:"Vinter · snöig skogsväg",src:"./photos/winter.jpg",mask:"./photos/winter_mask.png",aspect:1600/1200,vp:[.578,.525],vfov:38,camH:1.2,wallL:-11,wallR:12,black:.2,albK:1.45,treeK:1.3,crest:60,sat:.8,credit:"“Joukokyläntie Vaatovaaralla”",author:"Hoogberg (Wikimedia Commons)",license:"CC BY-SA 3.0",url:"https://commons.wikimedia.org/wiki/File:Joukokylantie_Vaatovaaralla.jpg"}},DA=Math.PI/180;function I0(t){const e=Math.tan(t.vfov*DA/2),n=e*t.aspect,i=(2*t.vp[0]-1)*n,r=(1-2*t.vp[1])*e,s=-Math.atan(r);return{yaw:Math.atan(i*Math.cos(s)),pitch:s,tV:e,tH:n}}function jx(t,e){return e==="summer"||e==="winter"?hu[e]:hu.night}function IA(){const t={...si("lowbeam"),cd:15e3,kelvin:3300,pairSpacing:1.3,height:.65},e={...si("highbeam"),on:!0,cd:32e3,kelvin:3300,pairSpacing:1.3,height:.65},n={...si("pods"),specMode:"cd",cd:45e3,kelvin:3300,beam:"driving",hAngle:14,vAngle:5,floodH:40,floodV:10,spotShare:.55,height:.5,pairSpacing:1};return[[t],[e],[e,n]]}const Xx=Math.PI/180,Yx=Math.log(2),U0=t=>Math.max(.2,t)*Xx*.5/Math.sqrt(Yx),k0=t=>Math.max(.5,t)*Xx*.5/Math.pow(Yx,.25),UA=Math.pow(2*.9064024771,2);function du(t,e=0,n=0){const i=U0(t.hAngle),r=U0(t.vAngle),s=k0(t.floodH),o=k0(t.floodV),a=t.beam==="spot"||t.beam==="laser"?Math.max(t.spotShare,.85):t.beam==="flood"?Math.min(t.spotShare,.15):t.spotShare,l=a*(1-n),u=Math.PI*i*r,c=UA*s*o,f=a/u+(1-a)/c;let d;t.specMode==="lumen"?d=t.lumen*t.efficiency:t.specMode==="cd"?d=t.cd/f:d=t.lux1*t.lux1/f,d*=t.mode==="emark"?3103/17795:1;const p=1-e,g=d*l/u*p,_=d*(1-l)/c*p,m=g+_;return{as:i,bs:r,af:s,bf:o,Is:g,If:_,peak:m,flux:d*p,lux1:Math.sqrt(m),lux025:Math.sqrt(m/.25)}}function rp(t){let e=2e4;return t.weather==="rain"&&(e=6e3-5200*Math.pow(t.rain,.7)),t.weather==="snow"&&(e=2500-2380*Math.pow(t.snow,.6)),t.weather==="fog"&&(e=1200-1160*Math.pow(t.fog,.5)),3.912/Math.max(e,20)}function kA(t){return 3.912/rp(t)}function sp(t){const e=t/100;let n,i,r;e<=66?(n=255,i=99.4708025861*Math.log(e)-161.1195681661):(n=329.698727446*Math.pow(e-60,-.1332047592),i=288.1221695283*Math.pow(e-60,-.0755148492)),e>=66?r=255:e<=19?r=0:r=138.5177312231*Math.log(e-10)-305.0447927307;const s=c=>Math.pow(Math.min(255,Math.max(0,c))/255,2.2),o=s(n),a=s(i),l=s(r),u=.2126*o+.7152*a+.0722*l;return[o/u,a/u,l/u]}const FA=t=>.62+.75*Math.min(1,Math.max(0,(t-2700)/3800)),jt=t=>t>=1e3?`${(t/1e3).toFixed(2).replace(".",",")} km`:`${Math.round(t)} m`,cs=t=>Math.round(t).toLocaleString("sv-SE"),Fh=3.4,Pl=4.15,wr=(t,e,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)},ul=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function OA(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,s=e-i,o=r*r*(3-2*r),a=s*s*(3-2*s),l=ul(n,i),u=ul(n+1,i),c=ul(n,i+1),f=ul(n+1,i+1);return l+(u-l)*o+(c-l)*a+(l-u-c+f)*o*a}function zA(t){let e=0;return t>180&&t<700&&(e-=2.4*Math.sin(Math.PI*(t-180)/520)**2),t>=700&&t<1500&&(e+=4.2*Math.sin(Math.PI*(t-700)/800)**2),t>=1500&&(e+=.6*Math.sin((t-1500)/90)),e}function BA(t,e){return t<=Fh?0:t<=Pl?-.09*wr(Fh,Pl,t):t<=7.9?-.09-.62*(t<5.9?wr(Pl,5.9,t):1-wr(5.9,7.9,t))+(t>5.9?.09*wr(5.9,7.9,t):0):.15*wr(7.9,12,t)+.7*(OA(t*.15,e*.05)-.5)*wr(9,18,t)+.04*t*wr(10,60,t)}const bi=(t,e)=>zA(-e)+BA(Math.abs(t),e);function HA(){const t=[0,.85,1.7,2.55,Fh,3.8,Pl,4.7,5.3,5.9,6.6,7.2,7.9,9,10.5,12,14,17,21,26,33,42,55,75,110],e=[...t.slice(1).reverse().map(a=>-a),...t],n=[];for(let a=120;a>40;a-=8)n.push(a);for(let a=40;a>-320;a-=2)n.push(a);for(let a=-320;a>=-2600;a-=5)n.push(a);const i=[],r=[];for(const a of n)for(const l of e)i.push(l,bi(l,a),a);const s=e.length;for(let a=0;a<n.length-1;a++)for(let l=0;l<s-1;l++){const u=a*s+l,c=u+1,f=u+s,d=f+1;r.push(u,c,f,c,d,f)}const o=new Bt;return o.setAttribute("position",new vt(i,3)),o.setAttribute("uv",new vt(new Array(i.length/3*2).fill(0),2)),o.setIndex(r),o.computeVertexNormals(),o}function Oh(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},o={},a=t[0].morphTargetsRelative,l=new Bt;let u=0;for(let c=0;c<t.length;++c){const f=t[c];let d=0;if(n!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(n)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(n){let c=0;const f=[];for(let d=0;d<t.length;++d){const p=t[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+c);c+=t[d].attributes.position.count}l.setIndex(f)}for(const c in s){const f=F0(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in o){const f=o[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<f;++d){const p=[];for(let _=0;_<o[c].length;++_)p.push(o[c][_][d]);const g=F0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function F0(t){let e,n,i,r=-1,s=0;for(let u=0;u<t.length;++u){const c=t[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=c.itemSize),n!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*n}const o=new e(s),a=new kt(o,n,i);let l=0;for(let u=0;u<t.length;++u){const c=t[u];if(c.isInterleavedBufferAttribute){const f=l/n;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<n;g++){const _=c.getComponent(d,g);a.setComponent(d+f,g,_)}}else o.set(c.array,l);l+=c.count*n}return r!==void 0&&(a.gpuType=r),a}function O0(t,e=1e-4){e=Math.max(e,Number.EPSILON);const n={},i=t.getIndex(),r=t.getAttribute("position"),s=i?i.count:r.count;let o=0;const a=Object.keys(t.attributes),l={},u={},c=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,v=a.length;x<v;x++){const S=a[x],R=t.attributes[S];l[S]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const b=t.morphAttributes[S];b&&(u[S]||(u[S]=[]),b.forEach((T,P)=>{const O=new T.array.constructor(T.count*T.itemSize);u[S][P]=new T.constructor(O,T.itemSize,T.normalized)}))}const p=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=p*_;for(let x=0;x<s;x++){const v=i?i.getX(x):x;let S="";for(let R=0,b=a.length;R<b;R++){const T=a[R],P=t.getAttribute(T),O=P.itemSize;for(let y=0;y<O;y++)S+=`${~~(P[f[y]](v)*_+m)},`}if(S in n)c.push(n[S]);else{for(let R=0,b=a.length;R<b;R++){const T=a[R],P=t.getAttribute(T),O=t.morphAttributes[T],y=P.itemSize,w=l[T],H=u[T];for(let U=0;U<y;U++){const X=f[U],J=d[U];if(w[J](o,P[X](v)),O)for(let N=0,G=O.length;N<G;N++)H[N][J](o,O[N][X](v))}}n[S]=o,c.push(o),o++}}const h=t.clone();for(const x in t.attributes){const v=l[x];if(h.setAttribute(x,new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),x in u)for(let S=0;S<u[x].length;S++){const R=u[x][S];h.morphAttributes[x][S]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return h.setIndex(c),h}function VA(t){return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function z0(t,e=256,n=256){const i=document.createElement("canvas");i.width=e,i.height=n;const r=i.getContext("2d");t(r,e,n);const s=new F2(i);return s.colorSpace=cn,s.anisotropy=8,s}function GA(t,e,n,i,r,s,o=14){const a=[];for(let l=0;l<t;l++){const u=l/(t-1),c=e+(n-e)*Math.pow(u,.9),f=new ep(c,s*(1-.35*u),o,3,!0),d=f.attributes.position;for(let p=0;p<d.count;p++){const g=d.getX(p),_=d.getY(p),m=d.getZ(p),h=Math.hypot(g,m);if(h>.02){const x=Math.atan2(m,g),v=.8+.28*Math.sin(x*4+l*2.1)*Math.sin(x*7+l*.7+1.3);d.setXYZ(p,g*v,_-h/Math.max(c,.01)*.35*s*(v-.6),m*v)}}f.computeVertexNormals(),f.translate(0,i+l*r,0),a.push(f.toNonIndexed())}return Oh(a)}function WA(t,e){const n=new ai,i=VA(7),r=1700,s=new We,o=new no,a=new I,l=new I,u=new I(0,1,0);let c=0;const f=new $n(.016,.02,2,6);f.translate(0,1,0);const d=Math.floor(r/25)*2,p=new _0(f,yn(t,{albedo:14702618}),d);c=0;for(let Y=12;Y<r;Y+=25)for(const Ee of[-1,1]){const Re=Ee*(4.05+i()*.3);o.setFromAxisAngle(new I(0,0,1),(i()-.5)*.12),a.set(1,1,1),l.set(Re,bi(Re,-Y),-Y),s.compose(l,o,a),p.setMatrixAt(c,s),c++}const g=new ai;g.add(p),n.add(g);const _=1,m=GA(11,2.4,.35,1.6,1.45,2.6),h=new $n(.1,.22,17,6);h.translate(0,8.5,0);const x=Oh([0,1,2,3].map(Y=>{const Ee=new fu(1.6-Y*.2,2);Ee.scale(1.3,.55,1.2),Ee.translate(Math.sin(Y*2.3)*.9,14.5+Y*1.3,Math.cos(Y*1.7)*.8);const Re=O0(Ee);return Re.computeVertexNormals(),Re.toNonIndexed()})),v=new $n(.13,.25,17,7);v.translate(0,8.5,0);const S=Oh([0,1,2].map(Y=>{const Ee=new fu(1.7-Y*.3,2);Ee.scale(.9,1.3,.9),Ee.translate(Math.sin(Y*2)*.5,8.5+Y*1.6,Math.cos(Y*2)*.5);const Re=O0(Ee);return Re.computeVertexNormals(),Re.toNonIndexed()})),R=new $n(.08,.15,11,6);R.translate(0,5.5,0);const b=Math.round(5200*_),T=Math.round(1700*_),P=Math.round(700*_),O=(Y,Ee,Re)=>new _0(Y,Ee,Re),y=O(m,yn(t,{albedo:2504234,snowy:.55,noise:1,fringe:1}),b),w=O(h,yn(t,{albedo:2300436}),b),H=O(x,yn(t,{albedo:2766370,snowy:.5,noise:1,fringe:2}),T),U=O(v,yn(t,{albedo:5912098,noise:.6}),T),X=O(S,yn(t,{albedo:2894356,snowy:.3,noise:1,fringe:2}),P),J=O(R,yn(t,{albedo:12104872,noise:.9}),P),N=(Y,Ee,Re,ke,D,Ze=1)=>{for(let De=0;De<Re;De++){const He=i()<.5?-1:1,Ne=ke+Math.pow(i(),1.9)*60*Ze,Je=-(i()*(r+150)-30),j=He*Ne,C=D[0]+i()*(D[1]-D[0]);l.set(j,bi(j,Je)-.2,Je),o.setFromAxisAngle(u,i()*6.28);const M=C*(.8+i()*.35);a.set(M,C,M),s.compose(l,o,a),Y.setMatrixAt(De,s),Ee.setMatrixAt(De,s)}};N(y,w,b,8.6,[.75,1.35]),N(H,U,T,9.5,[.9,1.35]),N(X,J,P,8.2,[.7,1.1],.4);const G=new ai;G.add(y,w,H,U,X,J),n.add(G);const L=new ai,Z=new $n(.035,.035,2.2,6);Z.translate(0,1.1,0);const K=yn(t,{albedo:4473924,gloss:.02});for(const Y of[100,200,300,500,750]){const Ee=z0((Ze,De,He)=>{Ze.fillStyle="rgba(14,64,150,1)",Ze.fillRect(0,0,De,He),Ze.strokeStyle="#ffffff",Ze.lineWidth=14,Ze.strokeRect(16,16,De-32,He-32),Ze.fillStyle="#ffffff",Ze.font="700 120px Arial",Ze.textAlign="center",Ze.textBaseline="middle",Ze.fillText(String(Y),De/2,He/2-8),Ze.font="600 46px Arial",Ze.fillText("meter",De/2,He/2+76)},256,256),Re=bi(5,-Y),ke=new it(new Mn(.7,.7),yn(t,{albedo:16777215,map:Ee}));ke.position.set(5,Re+2,-Y),ke.rotation.y=.12;const D=new it(Z,K);D.position.set(5,Re,-Y-.03),L.add(ke,D)}n.add(L);const oe=z0((Y,Ee,Re)=>{Y.clearRect(0,0,Ee,Re);const ke=D=>{Y.beginPath(),Y.moveTo(Ee/2,10+D*1.9),Y.lineTo(Ee-8-D*1.6,Re-30-D),Y.lineTo(8+D*1.6,Re-30-D),Y.closePath()};Y.lineJoin="round",ke(0),Y.fillStyle="#ffffff",Y.fill(),ke(6),Y.fillStyle="#d0101a",Y.fill(),ke(34),Y.fillStyle="#f7c600",Y.fill(),Y.save(),Y.translate(Ee/2-70,Re-170),Y.scale(1.4,1.4),Y.fillStyle="#111",Y.beginPath(),Y.moveTo(10,40),Y.bezierCurveTo(14,26,40,20,62,24),Y.lineTo(76,18),Y.lineTo(84,22),Y.lineTo(98,30),Y.lineTo(100,38),Y.lineTo(90,38),Y.lineTo(82,34),Y.lineTo(78,46),Y.lineTo(78,68),Y.lineTo(73,68),Y.lineTo(72,50),Y.lineTo(66,50),Y.lineTo(66,68),Y.lineTo(61,68),Y.lineTo(60,50),Y.lineTo(30,50),Y.lineTo(28,68),Y.lineTo(23,68),Y.lineTo(22,52),Y.lineTo(18,52),Y.lineTo(17,68),Y.lineTo(12,68),Y.lineTo(11,50),Y.closePath(),Y.fill(),Y.beginPath(),Y.moveTo(78,18),Y.lineTo(72,6),Y.lineTo(76,10),Y.lineTo(78,3),Y.lineTo(80,10),Y.lineTo(84,4),Y.lineTo(83,16),Y.closePath(),Y.fill(),Y.restore()}),ue=bi(5.2,-300),Oe=new it(new Mn(1.25,1.25),yn(t,{albedo:16777215,map:oe}));Oe.position.set(5.2,ue+2.1,-300),Oe.rotation.y=.1;const $=new it(Z,K);$.position.set(5.2,ue,-300.03),n.add(Oe,$);const ne=new zx;ne.moveTo(-.95,0),ne.quadraticCurveTo(0,.1,.95,0),ne.lineTo(.9,1.9),ne.lineTo(-.9,1.9),ne.closePath();const pe=new np(ne,12);pe.rotateX(-Math.PI/2);const he=new St({uniforms:{uGlow:{value:.01}},side:Dn,vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform float uGlow; varying vec2 vP;
      void main(){
        // dark glossy paint reflecting a hint of the lit scene ahead; brighter toward the front edge and the centre crease
        float front = smoothstep(1.9, 0.0, vP.y);
        float crease = exp(-pow(vP.x / 0.22, 2.0)) * 0.35 + exp(-pow((abs(vP.x) - 0.62) / 0.05, 2.0)) * 0.5;
        float edge = smoothstep(0.08, 0.0, vP.y - 0.05 * (1.0 - vP.x * vP.x));
        float l = uGlow * (0.04 + 0.5 * pow(1.0 - front, 2.5) + crease * (1.0 - front) * 0.6 + edge * 1.4);
        gl_FragColor = vec4(vec3(l) * vec3(0.92, 0.95, 1.0), 1.0);
      }`}),Le=new it(pe,he);return Le.position.set(1.75,.88,-.3),Le.name="hood",n.add(Le),{group:n,snowPoles:g,forest:G,hood:Le,signs:L}}function jA(t){const e=(i,r,s,o,a,l)=>{const u=new it(new $n(i,i*.85,r,8),l);return u.position.set(s,o,a),u},n=i=>{const r=new ai,s=yn(t,{albedo:855570}),o=yn(t,{albedo:4864560});r.add(e(.17,.62,0,1.15,0,s)),r.add(e(.07,.85,-.09,.43,0,s)),r.add(e(.07,.85,.09,.43,0,s)),r.add(e(.05,.6,-.23,1.15,0,s)),r.add(e(.05,.6,.23,1.15,0,s));const a=new it(new Uu(.11,10,8),o);if(a.position.y=1.62,r.add(a),i){const l=yn(t,{albedo:12118064}),u=new it(new $n(.18,.18,.05,10),l);u.position.y=1.05,r.add(u);const c=u.clone();c.position.y=1.25,r.add(c);const f=new it(new $n(.075,.075,.05,8),l);f.position.set(-.09,.25,0),r.add(f)}return r};return{pedestrian:n(!1),pedestrianVest:n(!0)}}const pu=1.75,B0=Math.PI/180,qc=t=>{const e=Math.hypot(...t);return[t[0]/e,t[1]/e,t[2]/e]},H0=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],$c=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];function zh(t,e,n=12){const i=[];for(const r of t){if(!r.on)continue;const s=e[r.id]??0,o=du(r,.85*s,.7*s),a=r.tilt*B0,l=r.yaw*B0,u=qc([Math.sin(l)*Math.cos(a),Math.sin(a),-Math.cos(l)*Math.cos(a)]),c=qc(H0(u,[0,1,0])),f=qc(H0(c,u)),d=sp(r.kelvin),p=FA(r.kelvin)*(r.mount==="roof"?1.25:1),g=r.beam==="lowbeam";for(const _ of r.pair?[-r.pairSpacing/2,r.pairSpacing/2]:[0]){if(i.length>=n)return i;i.push({pos:[pu+_,r.height,NA[r.mount]??-2.2],fwd:u,right:c,up:f,rgb:d,as:o.as,bs:o.bs,af:o.af,bf:o.bf,Is:g?r.cd*(1-.85*s):o.Is,If:g?0:o.If,low:g,glare:p})}}return i}function XA(t,e){const n=[e[0]-t.pos[0],e[1]-t.pos[1],e[2]-t.pos[2]],i=Math.max(Math.hypot(...n),.05),r=[n[0]/i,n[1]/i,n[2]/i],s=$c(r,t.fwd);if(s<.03)return{I:0,d:i};const o=$c(r,t.right),a=$c(r,t.up),l=Math.atan2(o,s),u=Math.atan2(a,Math.hypot(o,s));if(t.low){const p=-.01+Math.min(Math.max(l*.268,0),.0125),g=.78*Math.exp(-(((l-.035)/.16)**2))+.22*Math.exp(-((l/.62)**2)),_=u-p,m=_<0?Math.exp(-((Math.max(-_-.012,0)/.038)**2))*.86+.14*Math.exp(-((_/.16)**2)):Math.exp(-((_/.0035)**2))*.98+.02*Math.exp(-((_/.12)**2));return{I:t.Is*g*m,d:i}}const c=Math.exp(-((l/t.as)**2+(u/t.bs)**2)),f=Math.exp(-((l/t.af)**4+(u/t.bf)**4)),d=.006*Math.exp(-(l*l/.7+u*u/.05))*(u>0?Math.exp(-u/.04):1);return{I:t.Is*c+t.If*(f+d),d:i}}function Ll(t,e,n){let i=0;for(const r of t){const{I:s,d:o}=XA(r,e);i+=s/(o*o)*Math.exp(-n*o)}return i}function Kc(t,e,n){for(let i=3e3;i>=2;i-=i>400?5:1){const r=bi(pu,-i);for(const s of[.3,.6,1])if(Ll(t,[pu,r+s,-i],n)>=e)return i}return 0}const yi=1.75,xi=yi-.37,Zc=Math.PI/180,Jc="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";class YA{constructor(e){this.canvas=e,this.scene=new Gc,this.partScene=new Gc,this.cam=new wn(42,1,.1,4e3),this.top=new Nh(-1,1,1,-1,1,2e3),this.mirror=new wn(42,1,.1,4e3),this.lumBuf=new Float32Array(48*27*4),this.autoK=1,this.lavg=.1,this.lp95=1,this.frameN=0,this.dynScale=1,this.slowCount=0,this.snap=3,this.fsqScene=new Gc,this.fsqCam=new Nh(-1,1,1,-1,0,1),this.cfg=null,this.cover={},this.look={yaw:0,pitch:0},this.topZoom=900,this.w=1,this.h=1,this.pr=1,this.raf=0,this.last=performance.now(),this.frames=0,this.fpsT=performance.now(),this.fps=60,this.msAvg=16,this.t0=performance.now(),this.disposed=!1,this.quality="high",this.nightTex=[],this.nightReady=0,this.photoTex={},this.photo=null,this.animals={},this.panelInset=0,this.maxDpr=1.5,this.paused=!1,this.bottomInset=0,this.renderer=new P2({canvas:e,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.outputColorSpace=Fi,this.renderer.toneMapping=Pi,this.renderer.autoClear=!0;const n=()=>Array.from({length:Rl},()=>new I),i=()=>Array.from({length:Rl},()=>new pt);this.shared={uLN:{value:0},uLPos:{value:n()},uLFwd:{value:n()},uLRight:{value:n()},uLUp:{value:n()},uLCol:{value:n()},uLBeam:{value:i()},uLI:{value:i()},uSigma:{value:0},uAmbient:{value:.004/Math.PI},uEye:{value:new I},uSnowAmt:{value:0},uTop:{value:0},uTopH:{value:1}};const r=new xA,s=a=>{const l=r.load(`./tex/${a}.jpg`);return l.wrapS=l.wrapT=ru,l.anisotropy=8,l.colorSpace=cn,l};this.groundMat=_A(this.shared,{asphalt:s("asphalt"),gravel:s("gravel"),snow:s("snow")}),this.ground=new it(HA(),this.groundMat),this.ground.frustumCulled=!1,this.scene.add(this.ground),this.world=WA(this.shared),this.scene.add(this.world.group),this.targets=jA(this.shared);for(const a of Object.values(this.targets))a.visible=!1,this.scene.add(a);this.eyeMat=TA(this.shared);for(const a of AA){const l=Us[a],u=r.load(l.src,()=>{this.snap=2});u.colorSpace=cn,u.anisotropy=4;const c=l.shoulderM/l.shoulderPx,f=l.W*c,d=l.H*c,p=(l.H-l.groundPx)*c,g=new Mn(f,d).translate(0,d/2-p,0),_=new ai,m=MA(this.shared,u,l.albedo/l.meanLin,l.sat,l.meanLin,[l.W,l.H],[(l.H-l.groundPx)/l.H,(l.H-l.groundPx+l.shoulderPx)/l.H]);_.add(new it(g,m));const h=EA(u,f,d,p),x=new it(new Mn(f*1.3,30).rotateX(-Math.PI/2).translate(0,0,-15),h);x.position.y=.012,x.renderOrder=1,_.add(x);const v=new it(new Mn(f*.85,f*.32).rotateX(-Math.PI/2),wA());v.position.y=.015,v.renderOrder=1,_.add(v);const S=new Float32Array(l.eyes.length*3),R=new Float32Array(l.eyes.length);l.eyes.forEach(([P,O,y],w)=>{S.set([(P/l.W-.5)*f,(1-O/l.H)*d-p,.06],w*3),R[w]=y});const b=new Bt;b.setAttribute("position",new kt(S,3)),b.setAttribute("aK",new kt(R,1));const T=new T0(b,this.eyeMat);T.frustumCulled=!1,T.renderOrder=2,_.add(T),_.visible=!1,this.scene.add(_),this.animals[a]={g:_,eyes:T,mat:m,beam:h,sat:l.sat}}this.carTop=new it(new Mn(1.85,4.6).rotateX(-Math.PI/2),new $d({color:16777215})),this.carTop.position.set(yi,.05,-0),this.carTop.visible=!1,this.scene.add(this.carTop),this.sky=new it(new Uu(3e3,32,16),new St({side:en,depthWrite:!1,uniforms:{uOvercast:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_Position = p.xyww; }",fragmentShader:`${$s}
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
        }`})),this.sky.renderOrder=-10,this.scene.add(this.sky),this.photoMat=yA(this.shared),this.photoMesh=new it(new Mn(2,2),this.photoMat),this.photoMesh.frustumCulled=!1,this.photoMesh.renderOrder=-20,this.photoMesh.visible=!1,this.scene.add(this.photoMesh),this.nightMat=SA(this.shared),this.nightMesh=new it(new Mn(2,2),this.nightMat),this.nightMesh.frustumCulled=!1,this.nightMesh.renderOrder=-20,this.nightMesh.visible=!1,this.scene.add(this.nightMesh);{const a=hu.night,l=(g,_=!0)=>{const m=r.load(g,()=>{this.nightReady++,this.snap=3});return m.colorSpace=cn,m.generateMipmaps=_,m.minFilter=_?Ai:Jt,m.anisotropy=8,m};this.nightTex=[...a.refs.map(g=>l(g)),l(a.mask,!1)];const u=this.nightMat.uniforms;u.tR0.value=this.nightTex[0],u.tR1.value=this.nightTex[1],u.tR2.value=this.nightTex[2],u.tMask.value=this.nightTex[3];const[c,f,d]=IA().map(g=>zh(g,{},Is)),p=[...c.map(g=>[g,[1,0,0]]),...f.map(g=>[g,[0,1,1]]),...d.slice(f.length).map(g=>[g,[0,0,1]])];p.slice(0,Is).forEach(([g,_],m)=>{u.uRPos.value[m].set(...g.pos),u.uRFwd.value[m].set(...g.fwd),u.uRRight.value[m].set(...g.right),u.uRUp.value[m].set(...g.up),u.uRBeam.value[m].set(g.as,g.bs,g.af,g.bf),u.uRI.value[m].set(g.Is,g.If,g.low?1:0,1),u.uRSet.value[m].set(..._)}),u.uRN.value=Math.min(Is,p.length),u.uRefCol.value.set(...sp(4300)),u.uK.value=a.K??.2}for(const a of Object.values(hu)){if(a.kind==="night")continue;const l={img:null,mask:null,ready:0},u=()=>{l.ready++,this.snap=3};l.img=r.load(a.src,u),l.img.colorSpace=cn,l.img.anisotropy=4,l.mask=r.load(a.mask,u),l.mask.colorSpace=cn,l.mask.generateMipmaps=!1,l.mask.minFilter=Jt,this.photoTex[a.id]=l}const o=qA(this.shared);this.partMat=o(!1),this.rainMat=o(!0),this.fogMat=new St({uniforms:{...this.shared,uDepth:{value:null},uInvProj:{value:new We},uCamWorld:{value:new We},uCam:{value:new I},uSteps:{value:24},uScatter:{value:1},uFrame:{value:0},uSkyAmb:{value:6e-4}},vertexShader:Jc,fragmentShader:`${mr}
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
        }`,depthTest:!1,depthWrite:!1}),this.compMat=new St({uniforms:{tScene:{value:null},tFog:{value:null},tPart:{value:null},uExposure:{value:1},uFogOn:{value:1},uRaw:{value:0},uTime:{value:0},uRes:{value:new ye},uSoft:{value:0}},vertexShader:Jc,fragmentShader:`${$s}
        uniform sampler2D tScene, tFog, tPart; uniform float uExposure, uFogOn, uRaw, uTime, uSoft; uniform vec2 uRes; varying vec2 vUv;
        vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
        void main(){
          vec3 c = texture2D(tScene, vUv).rgb;
          if (uRaw > 0.5) { gl_FragColor = vec4(pow(clamp(c,0.,1.), vec3(1.0/2.2)), 1.0); return; }
          // lens: lateral chromatic aberration toward the edges
          vec2 qc = vUv - 0.5; float ca = 0.0012 * dot(qc, qc) * 4.0;
          c.r = texture2D(tScene, 0.5 + qc * (1.0 + ca)).r; c.b = texture2D(tScene, 0.5 + qc * (1.0 - ca)).b;
          // cheap glow for very bright retro-reflectors
          // bloom / eye glare from the mip chain (bright reflectors, signs)
          vec3 b1 = textureLod(tScene, vUv, 2.5).rgb, b2 = textureLod(tScene, vUv, 4.0).rgb, b3 = textureLod(tScene, vUv, 5.5).rgb;
          float thr = 1.5 / max(uExposure, 0.05);
          c += max(b1 - thr, 0.0) * 0.05 + max(b2 - thr * 0.6, 0.0) * 0.022 + max(b3 - thr * 0.4, 0.0) * 0.012;
          c += (b2 * 0.003 + b3 * 0.006);   // veiling glare of the lens (kept low: it washes out the far road)
          if (uFogOn > 0.5) { vec4 f = texture2D(tFog, vUv); c = c * f.a + f.rgb; }
          c += texture2D(tPart, vUv).rgb;
          c *= uExposure;
          // mild perceptual compression (scotopic → mesopic dynamic range) before filmic curve
          c = c / (1.0 + 0.04 * c);
          // mesopic vision: colours fade and shift slightly blue at low luminance
          float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
          float sat = smoothstep(0.02, 0.6, lum);
          c = mix(vec3(lum) * vec3(0.9, 0.97, 1.12), c, 0.35 + 0.65 * sat);
          // ACES with a lifted toe: plain ACES crushes the dim far road (slope 0.21 at black)
          vec3 o = mix(aces(c), c / (1.0 + c), 0.3);
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
        }`,depthTest:!1,depthWrite:!1}),this.lumMat=new St({uniforms:{tScene:{value:null},tFog:{value:null},tPart:{value:null},uFogOn:{value:0}},vertexShader:Jc,fragmentShader:`uniform sampler2D tScene, tFog, tPart; uniform float uFogOn; varying vec2 vUv;
        void main(){ vec3 c = texture2D(tScene, vUv).rgb; if (uFogOn > 0.5) { vec4 f = texture2D(tFog, vUv); c = c * f.a + f.rgb; }
          c += texture2D(tPart, vUv).rgb; float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); gl_FragColor = vec4(min(l, 50.0), 0., 0., 1.); }`,depthTest:!1,depthWrite:!1}),this.lumRT=new In(48,27,{type:Kn,depthBuffer:!1}),this.fsq=new it(new Mn(2,2),this.fogMat),this.fsq.frustumCulled=!1,this.fsqScene.add(this.fsq),this.buildParticles("high"),this.allocTargets(),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}buildParticles(e){for(const r of[this.snowNear,this.snowFar,this.snowStreak,this.rainNear,this.rainFar])r&&(this.partScene.remove(r),r.geometry.dispose());const n=e==="high"?1:.35,i=(r,s,o,a)=>{const l=new Bt,u=a?r*2:r,c=new Float32Array(u*3),f=new Float32Array(u),d=new Float32Array(u);for(let _=0;_<r;_++){const m=[Math.random(),Math.random(),Math.random()],h=Math.random();for(let x=0;x<(a?2:1);x++){const v=a?_*2+x:_;c.set(m,v*3),f[v]=x,d[v]=h}}l.setAttribute("position",new kt(c,3)),l.setAttribute("aEnd",new kt(f,1)),l.setAttribute("aRnd",new kt(d,1));const p=(a?this.rainMat:this.partMat).clone();for(const _ of Object.keys(this.shared))p.uniforms[_]=this.shared[_];p.uniforms.uBox.value=new I(...s),p.uniforms.uOrigin.value=new I(...o);const g=a?new U2(l,p):new T0(l,p);return g.frustumCulled=!1,g.userData.n=u,this.partScene.add(g),g};this.snowNear=i(Math.round(26e3*n),[14,6,22],[xi-7,0,-23],!1),this.snowFar=i(Math.round(3e4*n),[40,10,90],[xi-20,0,-110],!1),this.snowStreak=i(Math.round(22e3*n),[16,6,30],[xi-8,0,-31],!0),this.snowStreak.material.uniforms.uSnowLine.value=1,this.rainNear=i(Math.round(9e3*n),[14,6,22],[xi-7,0,-23],!0),this.rainFar=i(Math.round(12e3*n),[40,10,90],[xi-20,0,-110],!0)}allocTargets(){const e=Math.max(2,Math.floor(this.w*this.pr)),n=Math.max(2,Math.floor(this.h*this.pr));for(const s of[this.sceneRT,this.reflRT,this.fogRT,this.partRT])s==null||s.dispose();const i={type:Qs,minFilter:Jt,magFilter:Jt};this.sceneRT=new In(e,n,{...i,minFilter:Ai,generateMipmaps:!0,depthTexture:new Zd(e,n,fr)});const r=this.quality==="high"?2:4;this.fogRT=new In(Math.ceil(e/r),Math.ceil(n/r),{...i,depthBuffer:!1}),this.reflRT=new In(Math.ceil(e/2),Math.ceil(n/2),i),this.partRT=new In(e,n,{...i,depthBuffer:!1})}resize(e,n){this.w=e,this.h=n;const i=window.devicePixelRatio||1;if(this.photoView()){const r=Math.min(i,2);this.pr=Math.max(Math.min(r,1.5),r*this.dynScale)}else this.pr=(this.quality==="high"?Math.min(i,this.maxDpr):Math.min(1,this.maxDpr))*this.dynScale;this.renderer.setPixelRatio(1),this.renderer.setSize(Math.floor(e*this.pr),Math.floor(n*this.pr),!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.cam.aspect=e/n,this.cam.fov=e/n<1?58:36,this.cam.updateProjectionMatrix(),this.allocTargets()}setConfig(e){var r;const n=this.quality,i=(r=this.cfg)==null?void 0:r.scene.view;this.cfg&&(this.cfg.scene.weather!==e.scene.weather||this.cfg.scene.view!==e.scene.view)&&(this.snap=2),this.cfg=e,this.quality=e.scene.quality,n!==this.quality?(this.dynScale=1,this.buildParticles(this.quality),this.resize(this.w,this.h)):i!==e.scene.view&&this.w&&this.resize(this.w,this.h)}photoView(){var e;return((e=this.cfg)==null?void 0:e.scene.view)==="photo"}resetSnow(){this.cover={}}panelW(){return this.panelInset}topPortrait(){return this.h>this.w}topCarPx(){return this.bottomInset+48}topUpp(){return this.topPortrait()?this.topZoom/Math.max(200,this.h-this.topCarPx()-110):this.topZoom/Math.max(200,this.w-this.panelW()-90)}topScreenX(e){return 60+e/this.topUpp()}topScreenY(e){return this.h-this.topCarPx()-e/this.topUpp()}topLat(){return Math.max(12,this.topZoom*.075)}setupPhotoCam(e){const{yaw:n,pitch:i,tV:r,tH:s}=I0(e),o=this.w/this.h,a=Math.min(r,s/o)*.93,l=Math.max(0,Math.atan(r)-Math.atan(a))*.9,u=Math.max(0,Math.atan(s)-Math.atan(a*o))*.9,c=Math.max(-u,Math.min(u,-n));this.look.yaw=Math.max(-u-c,Math.min(u-c,this.look.yaw)),this.look.pitch=Math.max(-l,Math.min(l,this.look.pitch));const f=this.cam;f.fov=2*Math.atan(a)*180/Math.PI,f.aspect=o,f.updateProjectionMatrix(),f.position.set(e.camDx!==void 0?yi+e.camDx:xi,e.camH,0),f.rotation.set(i+this.look.pitch,n+c+this.look.yaw,0,"YXZ"),f.updateMatrixWorld();const d=new We().makeRotationFromEuler(new ci(i,n,0,"YXZ")),p=e.kind==="night",g=(p?this.nightMat:this.photoMat).uniforms;if(g.uPRot.value.setFromMatrix4(d).transpose(),g.uPTan.value.set(s,r),g.uInvProj.value.copy(f.projectionMatrixInverse),g.uCamWorld.value.copy(f.matrixWorld),g.uViewProj.value.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),g.uCam.value.copy(f.position),g.uWallL.value=f.position.x+e.wallL,g.uWallR.value=f.position.x+e.wallR,p){g.uReady.value=this.nightReady>=4?1:0,g.uCarRef.value.set(yi,0,-12),g.uTexel.value.set(1/1600,1/1064);return}g.uBlack.value=e.black,g.uAlbK.value=e.albK,g.uTreeK.value=e.treeK,g.uCrest.value=e.crest,g.uSat.value=e.sat,g.uWinter.value=e.id==="winter"?1:0;const _=this.photoTex[e.id];g.tPhoto.value=_.img,g.tMask.value=_.mask,g.uReady.value=_.ready>=2?1:0}updateLights(e){const n=this.cfg,i=n.scene,r=this.shared,s=i.weather==="snow"?i.snow:0;for(const a of n.lights){let l=this.cover[a.id]??0;a.on&&s>0&&!a.heated?l+=e*(s*(.25+i.speed/110)*(.6+i.wind/25))/70:l-=e*(a.heated&&a.on?.08:.004),l=Math.min(.92,Math.max(0,l)),this.cover[a.id]=l}const o=zh(n.lights,this.cover,Rl);o.forEach((a,l)=>{r.uLPos.value[l].set(...a.pos),r.uLFwd.value[l].set(...a.fwd),r.uLRight.value[l].set(...a.right),r.uLUp.value[l].set(...a.up),r.uLCol.value[l].set(...a.rgb),r.uLBeam.value[l].set(a.as,a.bs,a.af,a.bf),r.uLI.value[l].set(a.Is,a.If,a.low?1:0,a.glare)}),r.uLN.value=o.length,r.uSigma.value=rp(i)}loop(e){var r;if(this.disposed)return;if(this.raf=requestAnimationFrame(this.loop),document.hidden){this.last=e;return}const n=Math.min(.1,(e-this.last)/1e3);if(this.last=e,this.frames++,e-this.fpsT>500&&(this.fps=this.frames*1e3/(e-this.fpsT),this.frames=0,this.fpsT=e,(r=this.onStats)==null||r.call(this,{fps:this.fps,cover:{...this.cover},ms:this.msAvg,scale:this.dynScale}),this.cfg&&!document.hidden&&!location.search.includes("fixedres")&&(this.fps<30?this.slowCount++:this.slowCount=0,this.slowCount>=2&&this.dynScale>.5?(this.dynScale=Math.max(.5,this.dynScale*.82),this.slowCount=0,this.resize(this.w,this.h)):this.fps>58&&this.dynScale<1&&(this.dynScale=Math.min(1,this.dynScale*1.08),this.resize(this.w,this.h)))),!this.cfg)return;const i=performance.now();this.render(n,(e-this.t0)/1e3),this.msAvg=this.msAvg*.9+(performance.now()-i)*.1}render(e,n){var w,H,U,X,J;const i=this.cfg,r=i.scene,s=this.shared,o=this.renderer;this.updateLights(e);const a=r.view==="top",l=r.view==="photo";this.photo=l?jx(r.weather,r.photo):null;const u=r.weather==="snow"?.35+.65*r.snow:0;s.uSnowAmt.value=u,this.groundMat.uniforms.uWet.value=r.weather==="rain"?.45+.55*r.rain:r.weather==="fog"?.25:0,this.sky.material.uniforms.uOvercast.value=r.weather==="clear"?0:1,this.world.snowPoles.visible=r.snowPoles,this.world.signs.visible=r.distSigns,this.world.forest.visible=!a,this.world.hood.visible=!a,this.world.group.visible=!l,this.ground.visible=!l,this.photoMesh.visible=l&&((w=this.photo)==null?void 0:w.kind)!=="night",this.nightMesh.visible=l&&((H=this.photo)==null?void 0:H.kind)==="night",this.carTop.visible=a,this.sky.visible=!a&&!l;for(const[N,G]of Object.entries(this.targets))G.visible=r.target===N,G.position.set(r.targetSide,l?0:bi(r.targetSide,-r.targetDist),-r.targetDist);s.uTop.value=a?1:0;for(const N of r.animals??[]){const G=this.animals[N.id];G&&(G.g.visible=N.on&&!a,G.g.position.set(N.side,l?0:bi(N.side,-N.dist),-N.dist))}if(a){const N=this.topUpp(),G=this.topLat();if(this.topPortrait()){const L=this.topCarPx();this.top.left=-G,this.top.right=G,this.top.top=(this.h-L)*N,this.top.bottom=-L*N,this.top.position.set(yi,600,0),this.top.up.set(0,0,-1),this.top.lookAt(yi,0,0),this.top.updateProjectionMatrix()}else this.top.left=-60*N,this.top.right=(this.w-60)*N,this.top.top=G,this.top.bottom=-G,this.top.position.set(yi,600,0),this.top.up.set(-1,0,0),this.top.lookAt(yi,0,0),this.top.updateProjectionMatrix();s.uEye.value.set(0,600,0),o.setRenderTarget(this.sceneRT),o.setClearColor(0,1),o.clear(),o.render(this.scene,this.top),this.compMat.uniforms.uRaw.value=1,this.compMat.uniforms.tScene.value=this.sceneRT.texture,this.fsq.material=this.compMat,o.setRenderTarget(null),o.render(this.fsqScene,this.fsqCam);return}this.compMat.uniforms.uRaw.value=0;const c=this.cam,f=this.look.yaw,d=this.look.pitch-.03;this.photo?(this.setupPhotoCam(this.photo),this.photoMat.uniforms.uWet.value=r.weather==="rain"?.45+.55*r.rain:r.weather==="fog"?.25:0,this.nightMat.uniforms.uWet.value=r.weather==="rain"?.35+.5*r.rain:0,this.photoMat.uniforms.uOvercast.value=r.weather==="clear"?0:1):(c.fov=this.w/this.h<1?58:36,c.aspect=this.w/this.h,c.updateProjectionMatrix(),c.rotation.order="XYZ",c.position.set(xi,r.eye,0),c.lookAt(xi+Math.sin(f)*100,r.eye+Math.tan(d)*100,-Math.cos(f)*100),c.updateMatrixWorld()),s.uEye.value.copy(c.position);const p=((U=this.photo)==null?void 0:U.kind)==="night",g=p?.55:1;let _=1;if(this.photo){const{tV:N}=I0(this.photo),G=p?532:((J=(X=this.photoTex[this.photo.id])==null?void 0:X.img.image)==null?void 0:J.height)??1e3;_=this.h*this.pr*N/(G*Math.tan(c.fov*Zc/2))}const m=s.uLN.value,h=new I;for(let N=0;N<m;N++)h.add(s.uLPos.value[N]);m?h.multiplyScalar(1/m):h.set(yi,.7,-2);let x=.2;for(let N=0;N<m;N++)x=Math.max(x,Math.abs(s.uLPos.value[N].x-h.x));for(const N of Object.values(this.animals)){N.g.rotation.y=Math.atan2(c.position.x-N.g.position.x,c.position.z-N.g.position.z),N.g.updateMatrixWorld();const G=N.mat.uniforms;G.uGain.value=g,G.uPhotoPx.value=_,G.uCamPos.value.copy(c.position),G.uSat.value=N.sat*(p?.8:.9),G.uWB.value.set(...p?[.92,.97,1.1]:[1,1,1]),N.beam.uniforms.uLamp.value.copy(N.g.worldToLocal(h.clone())),N.beam.uniforms.uSpread.value=x}if(this.eyeMat.uniforms.uGain.value=g,this.eyeMat.uniforms.uPxRad.value=2*Math.tan(c.fov*Zc/2)/(this.h*this.pr),this.world.hood.position.y=Math.min(r.eye-.32,.86+(r.eye-1.2)*.8),this.world.hood.material.uniforms.uGlow.value=Math.min(.03,this.lavg*.035),this.groundMat.uniforms.uWet.value>0&&!l){const N=this.mirror;N.copy(c),N.position.set(c.position.x,-c.position.y,c.position.z),N.lookAt(xi+Math.sin(f)*100,-(r.eye+Math.tan(d)*100),-Math.cos(f)*100),N.updateMatrixWorld(),N.updateProjectionMatrix(),this.ground.visible=!1,this.world.hood.visible=!1,this.sky.visible=!1,this.quality==="low"&&(this.world.forest.visible=!1),s.uEye.value.copy(N.position),o.setRenderTarget(this.reflRT),o.setClearColor(0,1),o.clear(),o.render(this.scene,N),s.uEye.value.copy(c.position),this.ground.visible=!0,this.world.hood.visible=!0,this.sky.visible=!0,this.world.forest.visible=!0;const G=this.groundMat.uniforms.uReflMat.value;G.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),G.multiply(N.projectionMatrix).multiply(N.matrixWorldInverse),this.groundMat.uniforms.uReflTex.value=this.reflRT.texture}o.setRenderTarget(this.sceneRT),o.setClearColor(0,1),o.clear(),o.render(this.scene,c);const S=s.uSigma.value>4e-4;if(S){const N=this.fogMat.uniforms;N.uDepth.value=this.sceneRT.depthTexture,N.uInvProj.value.copy(c.projectionMatrixInverse),N.uCamWorld.value.copy(c.matrixWorld),N.uCam.value.copy(c.position),N.uSteps.value=this.quality==="high"?28:12,N.uScatter.value=r.weather==="snow"?.28:r.weather==="rain"?.13:.22,N.uFrame.value=(N.uFrame.value+1)%64,N.uSkyAmb.value=7e-4,this.fsq.material=this.fogMat,o.setRenderTarget(this.fogRT),o.render(this.fsqScene,this.fsqCam)}o.setRenderTarget(this.partRT),o.setClearColor(0,1),o.clear();const R=r.weather==="rain",b=r.weather==="snow",T=r.speed/3.6,P=this.h*this.pr/2/Math.tan(c.fov*Zc/2);for(const N of[this.snowNear,this.snowFar,this.snowStreak,this.rainNear,this.rainFar]){const G=N===this.rainNear||N===this.rainFar,L=G||N===this.snowStreak,Z=G?R:b;if(N.visible=Z,!Z)continue;const K=G?r.rain:r.snow,oe=N.userData.n;N.geometry.setDrawRange(0,Math.floor(oe*(.15+.85*K)/(L?2:1))*(L?2:1));const ue=N.material.uniforms;ue.uTime.value=n,ue.uVel.value.set(G?r.wind*.35:r.wind,G?-8.5:-1.1,T),ue.uShutter.value=G?.022:.012,ue.uDepth.value=this.sceneRT.depthTexture,ue.uRes.value.set(this.w*this.pr,this.h*this.pr),ue.uFocal.value=P,ue.uNear.value=c.near,ue.uFar.value=c.far,ue.uGain.value=G?.08:1}if((R||b)&&o.render(this.partScene,c),this.frameN++,this.frameN%15===1||this.snap>0){const N=this.lumMat.uniforms;N.tScene.value=this.sceneRT.texture,N.tFog.value=this.fogRT.texture,N.tPart.value=this.partRT.texture,N.uFogOn.value=S?1:0,this.fsq.material=this.lumMat,o.setRenderTarget(this.lumRT),o.render(this.fsqScene,this.fsqCam);try{o.readRenderTargetPixels(this.lumRT,0,0,48,27,this.lumBuf);let G=0,L=0;for(let K=0;K<27;K++)for(let oe=0;oe<48;oe++){const ue=Math.exp(-(((oe-24)/18)**2+((K-15)/9)**2));G+=this.lumBuf[(K*48+oe)*4]*ue,L+=ue}this.lavg=G/L;const Z=[];for(let K=0;K<48*27;K++)Z.push(this.lumBuf[K*4]);Z.sort((K,oe)=>K-oe),this.lp95=Z[Math.floor(Z.length*.95)]}catch{}}const O=r.autoExposure?Math.min(2.5,Math.max(.06,Math.min(Math.pow(.12/Math.max(this.lavg,1e-4),.6),2/Math.max(this.lp95,1e-4)))):1;this.snap>0?(this.snap--,this.autoK=O):this.autoK+=(O-this.autoK)*Math.min(1,e*2.5);const y=this.compMat.uniforms;y.tScene.value=this.sceneRT.texture,y.tFog.value=this.fogRT.texture,y.tPart.value=this.partRT.texture,y.uFogOn.value=S?1:0,y.uExposure.value=1.1*this.autoK*Math.pow(2,r.exposure),y.uTime.value=n,y.uRes.value.set(this.w*this.pr,this.h*this.pr),this.fsq.material=this.compMat,o.setRenderTarget(null),o.render(this.fsqScene,this.fsqCam)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.renderer.dispose()}}function qA(t){return e=>new St({uniforms:{...t,uTime:{value:0},uBox:{value:new I},uOrigin:{value:new I},uVel:{value:new I},uDepth:{value:null},uRes:{value:new ye},uFocal:{value:800},uNear:{value:.1},uFar:{value:4e3},uGain:{value:1},uShutter:{value:.02},uSnowLine:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,blending:iu,vertexShader:`${mr}
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
      }`})}const qx=()=>{var t;return typeof window<"u"&&((t=window.matchMedia)==null?void 0:t.call(window,"(pointer: coarse)").matches)&&Math.min(screen.width,screen.height)<820},$x=()=>[{id:"moose",on:!0,dist:120,side:1},{id:"deer1",on:!0,dist:62,side:4.3},{id:"deer2",on:!0,dist:78,side:6.4}],Kx=()=>({weather:"clear",rain:.6,snow:.7,wind:6,fog:.45,eye:1.2,target:"none",targetDist:120,targetSide:3,animals:$x(),snowPoles:!0,distSigns:!1,exposure:0,quality:qx()?"low":"high",speed:80,view:"photo",photo:"auto",autoExposure:!0});function Zx(){return{A:[si("purelux"),si("lowbeam"),si("highbeam")],B:[si("lowbeam"),si("bar30"),si("highbeam")],scene:Kx(),slot:"A"}}const $A=t=>btoa(unescape(encodeURIComponent(t))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),KA=t=>decodeURIComponent(escape(atob(t.replace(/-/g,"+").replace(/_/g,"/"))));function V0(t){return"#c="+$A(JSON.stringify(t))}function ZA(t){const e=/c=([^&]+)/.exec(t);if(!e)return null;try{const n=JSON.parse(KA(e[1]));if(!n.A||!n.scene)return null;const i={...Kx(),...n.scene};return["pedestrian","pedestrianVest","none"].includes(i.target)||(i.target="none"),(!Array.isArray(i.animals)||i.animals.length!==3)&&(i.animals=$x()),{...Zx(),...n,scene:i}}catch{return null}}let G0=0;function ar(t=8){var n;const e=performance.now();if(!(e-G0<35)){G0=e;try{(n=navigator.vibrate)==null||n.call(navigator,t)}catch{}}}function Zt({title:t,children:e,right:n}){return E.jsxs("div",{className:"py-4 border-b border-white/[0.06] last:border-0",children:[E.jsxs("div",{className:"flex items-center justify-between mb-3",children:[E.jsx("div",{className:"text-[11px] font-semibold tracking-[0.08em] uppercase text-white/45",children:t}),n]}),E.jsx("div",{className:"space-y-3",children:e})]})}function ot({label:t,value:e,min:n,max:i,step:r=1,onChange:s,fmt:o,className:a,hint:l}){const u=Math.max(r,(i-n)/20),c=Ge.useRef(Math.round(e/u)),f=(e-n)/(i-n)*100;return E.jsxs("label",{className:"block",title:l,children:[E.jsxs("div",{className:"flex justify-between text-[13px] mb-0.5",children:[E.jsx("span",{className:"text-white/75",children:t}),E.jsx("span",{className:"tnum text-white/95 font-medium",children:o?o(e):e})]}),E.jsx("input",{type:"range",className:`rng ${a??""}`,style:{"--p":f+"%"},min:n,max:i,step:r,value:e,onPointerDown:d=>d.stopPropagation(),onTouchStart:d=>d.stopPropagation(),onChange:d=>{const p=parseFloat(d.target.value),g=Math.round(p/u);g!==c.current&&(c.current=g,ar(p<=n||p>=i?14:5)),s(p)}})]})}function un({value:t,options:e,onChange:n,size:i="md"}){return E.jsx("div",{className:"flex p-[3px] rounded-[10px] bg-white/[0.06] gap-[2px]",children:e.map(r=>E.jsx("button",{title:r.t,onClick:()=>{r.v!==t&&ar(10),n(r.v)},className:`tap flex-1 rounded-[8px] ${i==="sm"?"text-[12px] py-1 px-1.5":"text-[13px] py-1.5 px-2"} font-medium transition-all whitespace-nowrap ${t===r.v?"bg-white/[0.16] text-white shadow-[0_1px_3px_rgba(0,0,0,.4)]":"text-white/55 hover:text-white/80"}`,children:r.l},r.v))})}function Dr({on:t,onChange:e,label:n,hint:i}){const r=E.jsx("button",{onClick:s=>{s.stopPropagation(),ar(12),e(!t)},title:i,"aria-pressed":t,role:"switch","aria-checked":t,className:`sw relative shrink-0 rounded-full transition-colors ${t?"bg-[#30d158] on":"bg-white/[0.16]"}`,children:E.jsx("span",{className:"knob absolute rounded-full bg-white shadow transition-transform"})});return n?E.jsxs("div",{className:"flex items-center justify-between gap-3 text-[13px] text-white/75 min-h-[32px]",title:i,children:[E.jsx("span",{children:n}),r]}):r}function kr({children:t,wide:e}){const[n,i]=Ge.useState(!1);return E.jsxs("span",{className:"relative inline-block align-middle",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[E.jsx("button",{onClick:()=>i(!n),"aria-label":"Mer information",className:"hit w-[16px] h-[16px] rounded-full bg-white/10 text-[10px] leading-[16px] text-white/70 font-semibold hover:bg-white/20",children:"i"}),n&&E.jsx("span",{className:`absolute z-50 right-0 top-6 ${e?"w-[min(300px,80vw)]":"w-[min(240px,75vw)]"} glass-strong rounded-xl p-3 text-[12px] leading-[1.45] text-white/80 shadow-2xl normal-case tracking-normal font-normal`,children:t})]})}function Qc({k:t,v:e,sub:n}){return E.jsxs("div",{className:"rounded-xl bg-white/[0.04] px-3 py-2",children:[E.jsx("div",{className:"text-[11px] text-white/45",children:t}),E.jsx("div",{className:"text-[15px] font-semibold tnum text-white",children:e}),n&&E.jsx("div",{className:"text-[10.5px] text-white/40",children:n})]})}const JA=[{v:"spot",l:"Spot"},{v:"combo",l:"Combo"},{v:"driving",l:"Driving"},{v:"flood",l:"Flood"},{v:"laser",l:"Laser"},{v:"lowbeam",l:"Halvljus"}],Bh=t=>{const[e,n,i]=sp(t),r=Math.max(e,n,i),s=o=>Math.round(255*Math.pow(o/r,1/2.2));return`rgb(${s(e)},${s(n)},${s(i)})`};function QA({lights:t,setLights:e,sel:n,setSel:i,cover:r,scene:s,onWipe:o,slot:a}){const[l,u]=Ge.useState(!1),c=t.find(p=>p.id===n)??t[0],f=(p,g)=>e(_=>_.map(m=>m.id===p?{...m,...g}:m)),d=Object.entries(Wx).reduce((p,g)=>{var _;return(p[_=g[1].group]??(p[_]=[])).push(g),p},{});return E.jsxs("div",{children:[E.jsxs(Zt,{title:`Ljusuppsättning ${a}`,right:E.jsx("button",{onClick:()=>u(!l),className:"hit text-[13px] font-medium text-[#0a84ff] hover:text-[#409cff]",children:l?"Stäng":"+ Lägg till"}),children:[l&&E.jsx("div",{className:"rounded-xl bg-white/[0.04] p-2 space-y-2",children:Object.entries(d).map(([p,g])=>E.jsxs("div",{children:[E.jsx("div",{className:"text-[10.5px] uppercase tracking-wider text-white/35 px-1.5 mb-1",children:p}),g.map(([_,m])=>E.jsx("button",{onClick:()=>{const h=si(_);h.on=!0,e(x=>[...x,h]),i(h.id),u(!1)},className:"tap w-full text-left px-2 py-1.5 rounded-lg text-[13px] text-white/85 hover:bg-white/[0.07]",children:m.label},_))]},p))}),E.jsx("div",{className:"space-y-1.5",children:t.map(p=>{const g=du(p),_=(c==null?void 0:c.id)===p.id,m=r[p.id]??0;return E.jsxs("div",{onClick:()=>i(p.id),className:`flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer transition-colors ${_?"bg-white/[0.10] ring-1 ring-white/[0.12]":"bg-white/[0.035] hover:bg-white/[0.06]"}`,children:[E.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:p.on?Bh(p.kelvin):"rgba(255,255,255,.15)",boxShadow:p.on?`0 0 10px ${Bh(p.kelvin)}`:"none"}}),E.jsxs("div",{className:"flex-1 min-w-0",children:[E.jsxs("div",{className:"text-[13.5px] font-medium truncate",children:[p.name,p.pair?" ×2":""]}),E.jsxs("div",{className:"text-[11.5px] text-white/45 tnum truncate",children:[p.beam==="lowbeam"?`${cs(p.cd)} cd · halvljus`:`${jt(g.lux1)} @ 1 lux · ${p.kelvin} K`,p.heated&&" · värmd lins",m>.05&&E.jsxs("span",{className:"text-[#ffd60a]",children:[" · snö ",Math.round(m*100)," %"]})]})]}),E.jsx(Dr,{on:p.on,onChange:h=>f(p.id,{on:h})})]},p.id)})})]}),c&&E.jsx(eC,{l:c,upd:p=>f(c.id,p),cover:r[c.id]??0,scene:s,onWipe:o,onDelete:()=>{var p;e(g=>g.filter(_=>_.id!==c.id)),i(((p=t.find(g=>g.id!==c.id))==null?void 0:p.id)??"")}})]})}function eC({l:t,upd:e,cover:n,scene:i,onWipe:r,onDelete:s}){const o=du(t),a=du(t,.85*n,.7*n),l=t.preset==="purelux",u=t.beam==="lowbeam";return E.jsxs(E.Fragment,{children:[E.jsxs(Zt,{title:"Valt ljus",right:E.jsx("button",{onClick:s,className:"hit text-[13px] text-[#ff453a]/80 hover:text-[#ff453a]",children:"Ta bort"}),children:[E.jsx("input",{value:t.name,onChange:c=>e({name:c.target.value}),className:"w-full bg-white/[0.06] rounded-lg px-3 py-2 text-[16px] md:text-[14px] font-medium outline-none focus:ring-1 ring-white/20"}),l&&E.jsx(tC,{l:t}),l&&E.jsxs("div",{children:[E.jsx("div",{className:"text-[12px] text-white/50 mb-1.5",children:"Effektläge (knapp på armaturen)"}),E.jsx(un,{value:t.mode??"boost",onChange:c=>e({mode:c}),options:[{v:"boost",l:"PowerBoost®",t:"17 795 lm, 750 m @ 1 lux (uppmätt). Ej vägtrafikgodkänt läge."},{v:"emark",l:"E-märkt",t:"3 103 lm, 319 m @ 1 lux (uppmätt). Vägtrafikgodkänt."}]})]}),E.jsxs("div",{className:"grid grid-cols-3 gap-1.5",children:[E.jsx(Qc,{k:"Topp",v:cs(a.peak/1e3)+" kcd",sub:"candela"}),E.jsx(Qc,{k:"1 lux",v:jt(a.lux1),sub:n>.05?`ren lins ${jt(o.lux1)}`:"avstånd"}),E.jsx(Qc,{k:"0,25 lux",v:jt(a.lux025),sub:"avstånd"})]}),E.jsx("div",{className:"text-[10.5px] text-white/35 leading-snug -mt-1",children:u?"Halvljus: asymmetrisk ECE-ljusbild med skarp ljusgräns, toppvärde i candela.":`Effektivt ljusflöde ${cs(o.flux)} lm. Uppskattning: I ≈ Φ / Ω (strålens rymdvinkel), avstånd = √(I / E).`})]}),!u&&E.jsxs(Zt,{title:"Ljusstyrka",right:E.jsx(kr,{children:"Välj hur du anger ljuset: rått lumen (som på kartongen) och verkningsgrad, toppvärde i candela, eller tillverkarens 1 lux-avstånd. Övriga värden räknas fram ungefärligt."}),children:[E.jsx(un,{size:"sm",value:t.specMode,onChange:c=>e({specMode:c}),options:[{v:"lumen",l:"Lumen"},{v:"cd",l:"Candela"},{v:"lux1",l:"1 lux-avstånd"}]}),t.specMode==="lumen"&&E.jsxs(E.Fragment,{children:[E.jsx(ot,{label:l?"Lumen (uppmätt)":"Lumen (rått)",value:t.lumen,min:500,max:4e4,step:100,onChange:c=>e({lumen:c}),fmt:c=>cs(c)+" lm"}),E.jsx(ot,{label:"Verklig andel ut ur linsen",value:t.efficiency,min:.3,max:1,step:.01,onChange:c=>e({efficiency:c}),fmt:c=>Math.round(c*100)+" %",hint:"Rått/teoretiskt lumen är ofta 20–40 % högre än uppmätt. 100 % för uppmätta värden."})]}),t.specMode==="cd"&&E.jsx(ot,{label:"Toppvärde",value:t.cd,min:5e3,max:2e6,step:5e3,onChange:c=>e({cd:c}),fmt:c=>cs(c)+" cd"}),t.specMode==="lux1"&&E.jsx(ot,{label:"1 lux-avstånd",value:t.lux1,min:50,max:2e3,step:5,onChange:c=>e({lux1:c}),fmt:c=>c+" m"})]}),u&&E.jsx(Zt,{title:"Ljusstyrka",children:E.jsx(ot,{label:"Toppvärde per lykta",value:t.cd,min:5e3,max:6e4,step:1e3,onChange:c=>e({cd:c}),fmt:c=>cs(c)+" cd"})}),E.jsxs(Zt,{title:"Färg",children:[E.jsx(ot,{className:"kelvin-track",label:E.jsxs("span",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-3 h-3 rounded-full",style:{background:Bh(t.kelvin)}}),"Färgtemperatur"]}),value:t.kelvin,min:2700,max:6500,step:100,onChange:c=>e({kelvin:c}),fmt:c=>c+" K"}),E.jsx("div",{className:"text-[10.5px] text-white/35 leading-snug -mt-1",children:"Kallare ljus (6000 K+) ger mer upplevt återsken i dimma och snö, varmare (3000 K) mindre. Kvalitativ effekt."})]}),!u&&E.jsxs(Zt,{title:"Ljusbild",right:l?E.jsxs(kr,{children:["Purelux anger ”bred rektangulär ljusbild med fokuserad spot i mitten, mjukt avgränsad vertikalt”. Vinklarna är inte publicerade och är ",E.jsx("b",{children:"uppskattade"})," så att 17 795 lm ger ≈ 750 m @ 1 lux."]}):void 0,children:[E.jsx("div",{className:"grid grid-cols-3 gap-1",children:JA.filter(c=>c.v!=="lowbeam").map(c=>E.jsx("button",{onClick:()=>e({beam:c.v}),className:`tap text-[12.5px] py-1.5 rounded-lg ${t.beam===c.v?"bg-white/[0.16] text-white":"bg-white/[0.04] text-white/55 hover:text-white/80"}`,children:c.l},c.v))}),E.jsx(ot,{label:"Spot · bredd",value:t.hAngle,min:2,max:60,step:.5,onChange:c=>e({hAngle:c}),fmt:c=>c+"°"}),E.jsx(ot,{label:"Spot · höjd",value:t.vAngle,min:2,max:30,step:.1,onChange:c=>e({vAngle:c}),fmt:c=>c.toFixed(1)+"°"}),t.beam!=="spot"&&t.beam!=="laser"&&E.jsxs(E.Fragment,{children:[E.jsx(ot,{label:"Flood · bredd",value:t.floodH,min:10,max:120,step:1,onChange:c=>e({floodH:c}),fmt:c=>c+"°"}),E.jsx(ot,{label:"Flood · höjd",value:t.floodV,min:3,max:50,step:.5,onChange:c=>e({floodV:c}),fmt:c=>c+"°"}),t.beam!=="flood"&&E.jsx(ot,{label:"Andel i spot",value:t.spotShare,min:.05,max:.95,step:.01,onChange:c=>e({spotShare:c}),fmt:c=>Math.round(c*100)+" %"})]}),l&&E.jsx("div",{className:"text-[10.5px] text-[#ffd60a]/70",children:"Vinklar: uppskattat"})]}),E.jsxs(Zt,{title:"Riktning & montering",children:[E.jsx(ot,{label:"Lutning (upp/ner)",value:t.tilt,min:-5,max:3,step:.05,onChange:c=>e({tilt:c}),fmt:c=>(c>0?"+":"")+c.toFixed(2)+"°",hint:"Extraljus riktas normalt rakt fram eller strax under horisonten."}),E.jsx(ot,{label:"Sidled",value:t.yaw,min:-15,max:15,step:.25,onChange:c=>e({yaw:c}),fmt:c=>(c>0?"+":"")+c+"°"}),E.jsx(un,{size:"sm",value:t.mount,onChange:c=>e({mount:c,height:PA[c]}),options:["plate","bumper","grille","roof"].map(c=>({v:c,l:LA[c]}))}),E.jsx(ot,{label:"Monteringshöjd",value:t.height,min:.3,max:2.4,step:.01,onChange:c=>e({height:c}),fmt:c=>c.toFixed(2).replace(".",",")+" m"}),E.jsx(Dr,{label:"Par (vänster + höger)",on:t.pair,onChange:c=>e({pair:c})}),t.pair&&E.jsx(ot,{label:"Avstånd mellan lamporna",value:t.pairSpacing,min:.3,max:1.8,step:.05,onChange:c=>e({pairSpacing:c}),fmt:c=>c.toFixed(2).replace(".",",")+" m"})]}),E.jsxs(Zt,{title:"Lins & vinter",right:E.jsx(kr,{children:"I snöstorm fastnar snö på kalla linser (LED värmer knappt). Snön dämpar och sprider ljuset. En uppvärmd lins smälter bort den. Tiden är förkortad ungefär 10× i simulatorn."}),children:[E.jsx(Dr,{label:"Uppvärmd lins",on:t.heated,onChange:c=>e({heated:c}),hint:l?"Panther Heat: automatisk linsvärme, 46 W @ 24 V (uppmätt av Valostore)":void 0}),E.jsxs("div",{children:[E.jsxs("div",{className:"flex justify-between text-[12px] mb-1",children:[E.jsx("span",{className:"text-white/60",children:"Snö på linsen"}),E.jsxs("span",{className:"tnum",children:[Math.round(n*100)," %"]})]}),E.jsx("div",{className:"h-1.5 rounded-full bg-white/[0.08] overflow-hidden",children:E.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[#64d2ff] to-white transition-all",style:{width:`${n*100}%`}})}),n>.02&&E.jsxs("div",{className:"flex justify-between items-center mt-1.5 text-[11.5px] text-white/50",children:[E.jsxs("span",{children:["Ljusflöde −",Math.round(85*n)," %, mer spritt"]}),E.jsx("button",{onClick:r,className:"text-[#0a84ff]",children:"Torka av alla"})]}),i.weather!=="snow"&&n<.02&&E.jsx("div",{className:"text-[11px] text-white/35 mt-1",children:"Välj Snöstorm för att se skillnaden."})]})]})]})}function tC({l:t}){const e=[["Ljusflöde",t.mode==="emark"?"3 103 lm (E-märkt)":"17 795 lm (PowerBoost®)"],["Räckvidd 1 lux",t.mode==="emark"?"319 m":"750 m"],["Räckvidd 0,25 lux",t.mode==="emark"?"638 m":"1 500 m"],["Färgtemperatur","5000 K (uppmätt 5001 K)"],["Ljusbild","Combo: bred rektangulär + spot"],["Referenstal","Ref. 30"],["Effekt","259 W @ 24 V (varav linsvärme 46 W)"],["Mått / vikt","546 × 66 × 77 mm · 2 860 g"],["Täthet","IP69K · 5 mm härdat glas"],["Spänning","9–36 V DC"],["Strålvinklar","uppskattat (ej publicerat)",!0]];return E.jsxs("div",{className:"rounded-xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] ring-1 ring-white/[0.08] p-3",children:[E.jsxs("div",{className:"flex items-start justify-between gap-2",children:[E.jsxs("div",{children:[E.jsx("div",{className:"text-[13px] font-semibold leading-tight",children:"PURELUX Panther Heat S540"}),E.jsx("div",{className:"text-[11px] text-white/45",children:"Rak · 55 cm · 260 W · uppvärmd lins"})]}),E.jsxs(kr,{wide:!0,children:[E.jsx("b",{children:"Källa:"})," ",RA,". Ljusflöde och räckvidd är uppmätta av Valostore (hämtat 17 okt 2026). Strålvinklarna publiceras inte och är ",E.jsx("b",{children:"uppskattade"})," för att modellen ska ge 750 m @ 1 lux. Artikelnummer HS18593-15813 och paketet (justerbar hållare, XBB Dongle & PowerUnit) kommer från din beställning och har inte kontrollerats mot butiken."]})]}),E.jsx("div",{className:"mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[11.5px]",children:e.map(([n,i,r])=>E.jsxs(Ge.Fragment,{children:[E.jsx("span",{className:"text-white/45",children:n}),E.jsx("span",{className:`tnum ${r?"text-[#ffd60a]/80":"text-white/85"}`,children:i})]},n))}),E.jsx("div",{className:"text-[10.5px] text-white/35 mt-2",children:"HS18593-15813 · justerbar hållare, XBB Dongle & PowerUnit · källa: Valostore.se"})]})}const ef=t=>Math.round(t*100)+" %";function nC({scene:t,setScene:e,vis:n}){return E.jsxs("div",{children:[E.jsxs(Zt,{title:"Väder",right:E.jsx(kr,{children:"Sikten modelleras med exponentiell dämpning (Koschmieder: σ = 3,912 / sikt). Ljuset dämpas både på väg ut och tillbaka till ögat, och partiklar nära lampan lyser upp och bländar."}),children:[E.jsx(un,{value:t.weather,onChange:i=>e({weather:i}),options:[{v:"clear",l:"Klart"},{v:"rain",l:"Regn"},{v:"snow",l:"Snöstorm"},{v:"fog",l:"Dimma"}]}),t.weather==="rain"&&E.jsx(ot,{label:"Regnmängd",value:t.rain,min:.05,max:1,step:.01,onChange:i=>e({rain:i}),fmt:ef}),t.weather==="snow"&&E.jsx(ot,{label:"Snöfall",value:t.snow,min:.05,max:1,step:.01,onChange:i=>e({snow:i}),fmt:ef}),t.weather==="fog"&&E.jsx(ot,{label:"Dimmans täthet",value:t.fog,min:.02,max:1,step:.01,onChange:i=>e({fog:i}),fmt:ef}),(t.weather==="snow"||t.weather==="rain")&&E.jsx(ot,{label:"Vind (sidled)",value:t.wind,min:-15,max:15,step:.5,onChange:i=>e({wind:i}),fmt:i=>i+" m/s"}),E.jsx(ot,{label:"Hastighet (fartvind)",value:t.speed,min:0,max:130,step:5,onChange:i=>e({speed:i}),fmt:i=>i+" km/h",hint:"Påverkar hur partiklarna rör sig mot bilen och hur snabbt snö fastnar på linserna."}),E.jsxs("div",{className:"flex justify-between text-[12.5px] text-white/60",children:[E.jsx("span",{children:"Meteorologisk sikt"}),E.jsx("span",{className:"tnum text-white",children:n>15e3?"> 15 km":jt(n)})]})]}),E.jsx(Zt,{title:"Så tolkar du bilden",children:E.jsxs("ul",{className:"text-[12px] text-white/55 leading-relaxed list-disc pl-4 space-y-1",children:[E.jsx("li",{children:"Tak­monterat ljus lyser upp luften precis framför ögonen och ger mest återsken i snö och dimma."}),E.jsx("li",{children:"Lågt monterade ljus (reg.skylt/stötfångare) och varmare färg ger mindre bländning."}),E.jsx("li",{children:"Blöt asfalt speglar bort ljuset: vägen blir mörkare och glansig."})]})})]})}const W0=t=>(t>4.3?"vägkant h. ":t<-1.3?"vägkant v. ":"på vägen ")+t.toFixed(1).replace(".",",")+" m";function iC({scene:t,setScene:e,fps:n,scale:i,compact:r,figs:s}){const o=(a,l)=>e({animals:t.animals.map(u=>u.id===a?{...u,...l}:u)});return E.jsxs("div",{children:[r&&E.jsx(Zt,{title:"Vy",children:E.jsx(un,{value:t.view,onChange:a=>e({view:a}),options:[{v:"photo",l:"Förarvy"},{v:"driver",l:"3D"},{v:"top",l:"Ovanifrån"}]})}),E.jsx(Zt,{title:"Djur vid vägen",right:E.jsx(kr,{children:"Riktiga fotografier av en älg och två rådjur, frilagda och skalade efter verklig mankhöjd (älg ≈ 1,9 m, rådjur ≈ 0,7 m). De belyses av dina lampor (mörka utanför ljuset), får ögonglimt när ljuset träffar ögonen och dämpas av dimma och snö. ”Syns från” är ett ungefärligt avstånd där djuret blir svagt synligt rakt fram i vädret."}),children:t.animals.map(a=>{const l=Us[a.id],u=s.find(c=>c.id===a.id);return E.jsxs("div",{className:`rounded-xl px-3 py-2.5 ${a.on?"bg-white/[0.05]":"bg-white/[0.025]"}`,children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:l.src,alt:"",className:`w-11 h-8 object-contain ${a.on?"":"opacity-40"}`,draggable:!1}),E.jsxs("div",{className:"flex-1 min-w-0",children:[E.jsx("div",{className:"text-[14px] font-medium",children:l.label}),E.jsx("div",{className:"text-[11.5px] text-white/45 tnum truncate",children:a.on&&u?E.jsxs(E.Fragment,{children:[E.jsx("span",{style:{color:u.state[1]},children:"●"})," ",u.state[0]," · syns från ≈ ",jt(u.seen)]}):`mankhöjd ${String(l.shoulderM).replace(".",",")} m`})]}),E.jsx(Dr,{on:a.on,onChange:c=>o(a.id,{on:c})})]}),a.on&&E.jsxs("div",{className:"mt-1",children:[E.jsx(ot,{label:"Avstånd",value:a.dist,min:20,max:400,step:5,onChange:c=>o(a.id,{dist:c}),fmt:c=>c+" m"}),E.jsx(ot,{label:"Sidled",value:a.side,min:-3,max:7.5,step:.1,onChange:c=>o(a.id,{side:c}),fmt:W0})]})]},a.id)})}),E.jsxs(Zt,{title:"Fotgängare (3D-figur)",right:E.jsx(kr,{children:"Mörkt klädda fotgängare har låg reflektans (≈ 5 %). En fluorescerande varselväst syns betydligt bättre (inga reflexer simuleras)."}),children:[E.jsx(un,{size:"sm",value:t.target,onChange:a=>e({target:a}),options:[{v:"none",l:"Ingen"},{v:"pedestrian",l:"Mörkklädd"},{v:"pedestrianVest",l:"Varselväst"}]}),t.target!=="none"&&E.jsxs(E.Fragment,{children:[E.jsx(ot,{label:"Avstånd",value:t.targetDist,min:20,max:600,step:5,onChange:a=>e({targetDist:a}),fmt:a=>a+" m"}),E.jsx(ot,{label:"Sidled",value:t.targetSide,min:-3,max:7,step:.1,onChange:a=>e({targetSide:a}),fmt:W0})]})]}),E.jsxs(Zt,{title:"Förare & vy",children:[t.view==="photo"&&E.jsxs(E.Fragment,{children:[E.jsx(un,{size:"sm",value:t.photo??"auto",onChange:a=>e({photo:a}),options:[{v:"auto",l:"Nattfoto"},{v:"summer",l:"Sommar*"},{v:"winter",l:"Vinter*"}]}),E.jsx("div",{className:"text-[11px] text-white/40 -mt-1",children:"Nattfoto: en riktig fotoserie tagen på natten på samma plats med halvljus, helljus och helljus + extraljus. Bilden ljussätts om pixel för pixel med dina lampor. *Sommar och vinter är dagfoton som görs om till natt (mindre verklighetstroget). Ögonhöjden följer fotots kamerahöjd."})]}),t.view!=="photo"&&E.jsx(ot,{label:"Ögonhöjd",value:t.eye,min:1,max:2.4,step:.01,onChange:a=>e({eye:a}),fmt:a=>a.toFixed(2).replace(".",",")+" m",hint:"Personbil ≈ 1,2 m, SUV ≈ 1,45 m, lastbil ≈ 2,3 m"}),E.jsx(ot,{label:"Ögats anpassning (exponering)",value:t.exposure,min:-3,max:3,step:.1,onChange:a=>e({exposure:a}),fmt:a=>(a>0?"+":"")+a.toFixed(1).replace(".",",")+" EV",hint:"Bildens ljusstyrka är kopplad till verklig luminans (lux → cd/m²). Ändra för att simulera mörkeranpassade ögon."}),E.jsx(Dr,{label:"Automatisk ögonanpassning",on:t.autoExposure,onChange:a=>e({autoExposure:a}),hint:"Bilden anpassar sig delvis efter hur ljus scenen är, som ögat. Stäng av för helt fast exponering vid A/B-jämförelse."}),t.view==="driver"&&E.jsxs(E.Fragment,{children:[E.jsx(Dr,{label:"Avståndsskyltar (mäthjälp)",on:t.distSigns,onChange:a=>e({distSigns:a})}),E.jsx(Dr,{label:"Snöpinnar",on:t.snowPoles,onChange:a=>e({snowPoles:a})})]}),E.jsx("div",{className:"text-[11px] text-white/35",children:t.view==="photo"?"Dra i bilden för att panorera lite (begränsat så att fotot alltid passar).":"Dra i bilden för att titta runt."})]}),E.jsxs(Zt,{title:"Prestanda",children:[E.jsx(un,{value:t.quality,onChange:a=>e({quality:a}),options:[{v:"low",l:"Snabb"},{v:"high",l:"Hög kvalitet"}]}),E.jsxs("div",{className:"flex justify-between text-[12px] text-white/50 tnum",children:[E.jsxs("span",{children:[Math.round(n)," bilder/s"]}),E.jsxs("span",{children:["upplösning ",Math.round(i*100)," %"]})]}),E.jsx("div",{className:"text-[11px] text-white/35",children:"Upplösningen sänks automatiskt om bildfrekvensen blir låg."})]})]})}function rC({header:t,children:e,snap:n,setSnap:i,peekH:r,halfH:s,fullH:o,width:a,onHeight:l}){const u={peek:r,half:s,full:o},[c,f]=Ge.useState(null),d=Ge.useRef(null),p=Ge.useRef(null),g=Ge.useRef(!1),_=c??u[n];Ge.useEffect(()=>{l==null||l(_)},[_,l]);const m=v=>{d.current={y:v.clientY,h:_,t:performance.now(),lastY:v.clientY,lastT:performance.now(),id:v.pointerId,on:!1}},h=v=>{const S=d.current;if(!S)return;const R=v.clientY-S.y;if(!S.on&&Math.abs(R)>7){S.on=!0;try{v.currentTarget.setPointerCapture(S.id)}catch{}}if(!S.on)return;v.preventDefault();const b=Math.max(r*.7,Math.min(o+20,S.h-R));S.lastY=v.clientY,S.lastT=performance.now(),f(b)},x=v=>{const S=d.current;if(d.current=null,!S||!S.on)return;v.preventDefault(),g.current=!0,setTimeout(()=>{g.current=!1},60);const R=S.h-(v.clientY-S.y),b=-(v.clientY-S.lastY)/Math.max(1,performance.now()-S.lastT),T=R+b*180,P=["peek","half","full"];let O="peek",y=1e9;for(const w of P){const H=Math.abs(u[w]-T);H<y&&(y=H,O=w)}f(null),O!==n&&ar(10),i(O)};return E.jsxs("div",{ref:p,className:"absolute bottom-0 right-0 glass-strong rounded-t-[24px] shadow-[0_-10px_40px_rgba(0,0,0,.45)] flex flex-col z-20",style:{height:_,width:a??"100%",transition:c==null?"height .32s cubic-bezier(.2,.9,.25,1)":"none",right:a?"max(8px, env(safe-area-inset-right))":0},children:[E.jsxs("div",{className:"shrink-0 touch-none select-none",onPointerDown:m,onPointerMove:h,onPointerUp:x,onPointerCancel:x,onClickCapture:v=>{g.current&&(v.stopPropagation(),v.preventDefault())},children:[E.jsx("button",{"aria-label":"Dra för att ändra panelens storlek",onClick:()=>{ar(8),i(n==="peek"?"half":n==="half"?"full":"peek")},className:"w-full h-[22px] flex items-center justify-center",children:E.jsx("span",{className:"w-10 h-[5px] rounded-full bg-white/30"})}),t]}),E.jsx("div",{className:`sheet-body flex-1 min-h-0 overflow-y-auto no-scrollbar px-4 ${n==="peek"&&c==null?"invisible":""}`,style:{paddingBottom:"calc(16px + env(safe-area-inset-bottom))"},children:e})]})}const sC={pedestrian:"Fotgängare",pedestrianVest:"Fotgängare m. varselväst",none:""},oC={pedestrian:.05,pedestrianVest:.05,none:0},Jx="#30d158",Hh="#ffd60a",Nl="#ff453a",j0=t=>t>.05?["Syns tydligt",Jx]:t>.012?["Syns svagt",Hh]:["Syns knappt / inte",Nl],aC=[{v:"clear",l:"Klart"},{v:"rain",l:"Regn"},{v:"snow",l:"Snö"},{v:"fog",l:"Dimma"}],X0=t=>t<10?t.toFixed(1).replace(".",","):String(Math.round(t));function lC(){const t=()=>({w:window.innerWidth,h:window.innerHeight}),[e,n]=Ge.useState(t);return Ge.useEffect(()=>{var r;const i=()=>n(t());return window.addEventListener("resize",i),window.addEventListener("orientationchange",i),(r=window.visualViewport)==null||r.addEventListener("resize",i),()=>{var s;window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i),(s=window.visualViewport)==null||s.removeEventListener("resize",i)}},[]),e}function uC(t){const e=Ge.useRef(null),[n,i]=Ge.useState({t:0,b:0,l:0,r:0});return Ge.useEffect(()=>{const s=e.current;if(!s)return;const o=getComputedStyle(s);i({t:parseFloat(o.paddingTop)||0,b:parseFloat(o.paddingBottom)||0,l:parseFloat(o.paddingLeft)||0,r:parseFloat(o.paddingRight)||0})},[t]),[n,E.jsx("div",{ref:e,"aria-hidden":!0,className:"fixed invisible pointer-events-none",style:{padding:"env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)"}})]}function cC(){const t=Ge.useRef(null),e=Ge.useRef(null),[n,i]=Ge.useState(()=>ZA(location.hash)??Zx()),[r,s]=Ge.useState(()=>{var j;return((j=n.A[0])==null?void 0:j.id)??""}),[o,a]=Ge.useState({fps:0,cover:{},ms:0}),[l,u]=Ge.useState("ljus"),[c,f]=Ge.useState("peek"),[d,p]=Ge.useState(0),[g,_]=Ge.useState(!1),[m,h]=Ge.useState(!1),[x,v]=Ge.useState(""),[,S]=Ge.useState(0),R=lC(),b=Ge.useCallback(j=>p(j),[]),[T,P]=uC(R),O=R.w<768||R.h<500,y=O&&R.w>R.h,w=y?Math.min(400,Math.round(R.w*.48)):void 0,H=n.slot==="A"?n.A:n.B,U=n.scene;Ge.useEffect(()=>{const j=new YA(t.current);return j.maxDpr=qx()?1.25:1.5,e.current=j,j.onStats=C=>a(C),window.__engine=j,()=>{j.dispose()}},[]),Ge.useEffect(()=>{const j=e.current;j.panelInset=O?0:396,j.resize(R.w,R.h),S(C=>C+1)},[R.w,R.h,O]),Ge.useEffect(()=>{var j;(j=e.current)==null||j.setConfig({lights:H,scene:U})},[H,U]),Ge.useEffect(()=>{const j=setTimeout(()=>history.replaceState(null,"",V0(n)),250);return()=>clearTimeout(j)},[n]),Ge.useEffect(()=>{const j=t.current;let C=null;const M=new Map;let B=null;const ee=()=>{const[re,Ae]=[...M.values()];return Math.hypot(re.x-Ae.x,re.y-Ae.y)},ie=re=>{const Ae=e.current;if(M.set(re.pointerId,{x:re.clientX,y:re.clientY}),j.setPointerCapture(re.pointerId),M.size===2){B={d:ee(),z:Ae.topZoom},C=null;return}C={x:re.clientX,y:re.clientY,yaw:Ae.look.yaw,pitch:Ae.look.pitch}},Q=re=>{var se;const Ae=e.current;if(M.has(re.pointerId)&&M.set(re.pointerId,{x:re.clientX,y:re.clientY}),B&&M.size===2){((se=Ae.cfg)==null?void 0:se.scene.view)==="top"&&(Ae.topZoom=Math.max(120,Math.min(2e3,B.z*B.d/Math.max(20,ee()))),S(de=>de+1));return}C&&(Ae.look.yaw=Math.max(-.6,Math.min(.6,C.yaw+(re.clientX-C.x)*.0016)),Ae.look.pitch=Math.max(-.25,Math.min(.2,C.pitch-(re.clientY-C.y)*.0016)))},Se=re=>{M.delete(re.pointerId),M.size<2&&(B=null),C=null},ce=re=>{var se;const Ae=e.current;((se=Ae.cfg)==null?void 0:se.scene.view)==="top"&&(re.preventDefault(),Ae.topZoom=Math.max(120,Math.min(2e3,Ae.topZoom*Math.exp(re.deltaY*.001))),S(de=>de+1))};return j.addEventListener("pointerdown",ie),j.addEventListener("pointermove",Q),window.addEventListener("pointerup",Se),window.addEventListener("pointercancel",Se),j.addEventListener("wheel",ce,{passive:!1}),()=>{j.removeEventListener("pointerdown",ie),j.removeEventListener("pointermove",Q),window.removeEventListener("pointerup",Se),window.removeEventListener("pointercancel",Se),j.removeEventListener("wheel",ce)}},[]),Ge.useEffect(()=>{const j=C=>C.preventDefault();return document.addEventListener("gesturestart",j),document.addEventListener("dblclick",j),()=>{document.removeEventListener("gesturestart",j),document.removeEventListener("dblclick",j)}},[]);const X=j=>i(C=>({...C,[C.slot]:j(C.slot==="A"?C.A:C.B)})),J=j=>i(C=>({...C,scene:{...C.scene,...j}})),N=j=>{var M;i(B=>({...B,slot:j}));const C=j==="A"?n.A:n.B;s(((M=C[0])==null?void 0:M.id)??"")},G=Object.entries(o.cover).map(([j,C])=>j+(C*20|0)).join(),L=Ge.useMemo(()=>{const j=zh(H,o.cover),C=rp(U),M=Kc(j,1,0),B=Kc(j,.25,0),ee=Kc(j,1,C),ie=(re,Ae)=>U.view==="photo"?0:bi(re,-Ae),Q=(re,Ae,se,de)=>Ll(j,[Ae,se+ie(Ae,de),-de],C)*re/Math.PI*Math.exp(-C*de),Se=U.animals.filter(re=>re.on).map(re=>{const Ae=Us[re.id],se=Ll(j,[re.side,Ae.centerM+ie(re.side,re.dist),-re.dist],C);let de=0;for(let Pe=10;Pe<=1e3;Pe+=Pe<200?5:10)Q(Ae.albedo,re.side,Ae.centerM,Pe)>.012&&(de=Pe);return{id:re.id,E:se,state:j0(se*Ae.albedo/Math.PI*Math.exp(-C*re.dist)),seen:de}});let ce=0;return U.target!=="none"&&(ce=Ll(j,[U.targetSide,1+ie(U.targetSide,U.targetDist),-U.targetDist],C)),{r1:M,r025:B,rw:ee,tE:ce,sig:C,vis:kA(U),animals:Se}},[H,U,G]),Z=L.tE*oC[U.target]/Math.PI*Math.exp(-L.sig*U.targetDist),K=U.target==="none"?null:j0(Z),oe=async()=>{const j=location.origin+location.pathname+V0(n);ar(10);try{if(O&&navigator.share){await navigator.share({title:"Extraljus Simulator",url:j});return}await navigator.clipboard.writeText(j),v("Länk kopierad")}catch{v("Kopiera länken från adressfältet")}setTimeout(()=>v(""),2200)},ue=e.current,Oe=U.view==="top",$=Ge.useMemo(()=>{const j=(ue==null?void 0:ue.topZoom)??900,C=j>1200?200:j>500?100:50,M=[];for(let B=0;B<=j;B+=C)M.push(B);return M},[ue==null?void 0:ue.topZoom,Oe,o.fps>0,R.w,R.h]),ne=jx(U.weather,U.photo),pe=(j=!1)=>L.animals.map(C=>{const M=U.animals.find(B=>B.id===C.id);return E.jsxs("div",{className:`flex items-center justify-between gap-2 ${j?"text-[13.5px] py-1":"text-[12.5px]"}`,children:[E.jsxs("span",{className:"text-white/70 truncate",children:[Us[C.id].label," · ",M.dist," m · ",X0(C.E)," lux"]}),E.jsxs("span",{className:"flex items-center gap-1.5 font-medium shrink-0",style:{color:C.state[1]},children:[E.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:C.state[1]}}),j?C.state[0].replace("Syns ","").replace("knappt / inte","Syns inte").replace(/^./,B=>B.toUpperCase()):C.state[0]]})]},C.id)}),he=(j=!1)=>E.jsxs(E.Fragment,{children:[(L.animals.length>0||K)&&E.jsxs("div",{className:"mt-2.5 pt-2.5 border-t border-white/[0.07] space-y-1",children:[pe(j),L.animals.length>0&&E.jsxs("div",{className:"text-[11px] text-white/40 tnum",children:["Syns från ≈ ",L.animals.map(C=>`${Us[C.id].label.replace("Rådjur ","R")} ${jt(C.seen)}`).join(" · ")]}),K&&E.jsxs("div",{className:"flex items-center justify-between text-[12.5px]",children:[E.jsxs("span",{className:"text-white/70",children:[sC[U.target]," · ",U.targetDist," m · ",X0(L.tE)," lux"]}),E.jsxs("span",{className:"flex items-center gap-1.5 font-medium",style:{color:K[1]},children:[E.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:K[1]}}),K[0]]})]})]}),E.jsx("div",{className:"text-[10px] text-white/35 mt-2 leading-snug",children:"Ungefärlig fotometrisk modell (I ≈ Φ/Ω, E = I·e^(−σd)/d²). Inte en mätning."})]}),Le=E.jsxs(E.Fragment,{children:[l==="ljus"&&E.jsx(QA,{lights:H,setLights:X,sel:r,setSel:s,cover:o.cover,scene:U,onWipe:()=>{var j;return(j=e.current)==null?void 0:j.resetSnow()},slot:n.slot}),l==="vader"&&E.jsx(nC,{scene:U,setScene:J,vis:L.vis}),l==="scen"&&E.jsx(iC,{scene:U,setScene:J,fps:o.fps,ms:o.ms,scale:o.scale??1,compact:O,figs:L.animals})]}),Y=E.jsx(un,{value:l,onChange:j=>{u(j),O&&c==="peek"&&f("half")},options:[{v:"ljus",l:"Ljus"},{v:"vader",l:"Väder"},{v:"scen",l:"Scen"}]}),Ee=136+T.b,Re=y?R.h-T.t-8:R.h-T.t-70,ke=Math.min(Re,Math.max(Ee+160,Math.round(R.h*(y?.62:.52)))),D=O?y?0:d||Ee:0,Ze="calc(env(safe-area-inset-top) + 8px)",De="calc(env(safe-area-inset-left) + 8px)",He=y?`${(w??0)+16}px`:"calc(env(safe-area-inset-right) + 8px)",Ne=L.animals.length?L.animals.reduce((j,C)=>C.state[1]===Nl?Nl:j===Nl?j:C.state[1]===Hh?Hh:j,Jx):null,Je=O?y?12:D+12:24;return ue&&(ue.bottomInset=O&&!y?Math.min(D,Ee+4)+150:0),E.jsxs("div",{className:"fixed inset-0 select-none overflow-hidden",children:[P,E.jsx("canvas",{ref:t,className:"absolute inset-0 touch-none cursor-grab active:cursor-grabbing"}),Oe&&ue&&E.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[ue.topPortrait()?$.map(j=>E.jsx("div",{className:"absolute left-0 right-0",style:{top:ue.topScreenY(j)},children:E.jsxs("div",{className:"absolute -translate-y-1/2 text-[11px] tnum text-white/75 font-medium whitespace-nowrap px-1.5 rounded bg-black/40",style:{left:De},children:[j," m"]})},j)):$.map(j=>E.jsx("div",{className:"absolute top-0 bottom-0",style:{left:ue.topScreenX(j)},children:E.jsxs("div",{className:"absolute -translate-x-1/2 text-[11px] tnum text-white/70 font-medium whitespace-nowrap",style:{top:O?"calc(env(safe-area-inset-top) + 64px)":72},children:[j," m"]})},j)),E.jsxs("div",{className:"absolute glass rounded-2xl px-4 py-3 text-[12px] text-white/80",style:{left:O?De:24,bottom:Je,width:O?`min(290px, calc(100vw - ${y?(w??0)+40:16}px))`:290},children:[E.jsx("div",{className:"font-semibold text-white mb-1.5",children:"Isolux · belysning på 1 m höjd"}),E.jsx("div",{className:"h-2 rounded-full mb-1",style:{background:"linear-gradient(90deg,#080d29 0%,#10529e 20%,#2ec7b8 50%,#fadb5c 85%,#fffaeb 100%)"}}),E.jsxs("div",{className:"flex justify-between text-[10.5px] text-white/50 tnum mb-2",children:[E.jsx("span",{children:"0,25"}),E.jsx("span",{children:"1"}),E.jsx("span",{children:"10"}),E.jsx("span",{children:"100"}),E.jsx("span",{children:"lux"})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-5 h-[2px] bg-white"}),"1 lux-gräns"]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-5 h-[2px] border-t-2 border-dashed border-sky-300"}),"0,25 lux-gräns"]}),!O&&E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-5 h-[1px] bg-white/50"}),"3 / 10 / 50 lux"]}),E.jsxs("div",{className:"text-[10.5px] text-white/40 mt-1.5",children:["Sidled förstorad (±",Math.round(ue.topLat())," m). Inkluderar vädrets dämpning.",O?" Nyp för att zooma.":" Scrolla för att zooma."]})]})]}),O?E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"absolute flex items-start gap-2 z-10",style:{top:Ze,left:De,right:He},children:[E.jsxs("div",{className:"flex-1 min-w-0 flex flex-col items-center",children:[E.jsxs("button",{onClick:()=>{ar(8),_(!g)},"aria-expanded":g,"aria-label":"Räckvidd – visa detaljer",className:"glass rounded-full h-11 pl-4 pr-3 flex items-center gap-2.5 max-w-full shadow-lg",children:[E.jsx("span",{className:"text-[16px] font-semibold tnum tracking-tight whitespace-nowrap",children:jt(L.r1)}),E.jsx("span",{className:"text-[10.5px] text-white/45 -ml-1.5 leading-none",children:"1 lux"}),E.jsx("span",{className:"w-px h-4 bg-white/15"}),U.weather!=="clear"?E.jsxs(E.Fragment,{children:[E.jsx("span",{className:"text-[15px] font-semibold tnum text-[#64d2ff] whitespace-nowrap",children:jt(L.rw)}),E.jsx("span",{className:"text-[10.5px] text-white/45 -ml-1.5 leading-none whitespace-nowrap",children:"i vädret"})]}):E.jsxs(E.Fragment,{children:[E.jsx("span",{className:"text-[15px] font-semibold tnum text-white/80 whitespace-nowrap",children:jt(L.r025)}),R.w>=380&&E.jsx("span",{className:"text-[10.5px] text-white/45 -ml-1.5 leading-none",children:"0,25"})]}),Ne&&E.jsx("span",{className:"flex gap-1 ml-0.5",children:L.animals.map(j=>E.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:j.state[1]}},j.id))}),R.w>=380&&E.jsx("span",{className:"text-white/40 text-[11px] font-semibold",children:n.slot}),E.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",className:`text-white/40 transition-transform ${g?"rotate-180":""}`,children:E.jsx("path",{d:"M1.5 3.5 5 7l3.5-3.5",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"})})]}),g&&E.jsxs("div",{className:"glass-strong rounded-2xl px-4 py-3 mt-2 w-full max-w-[380px] shadow-2xl",children:[E.jsxs("div",{className:"flex items-baseline justify-between",children:[E.jsxs("div",{className:"text-[11px] uppercase tracking-[0.08em] text-white/45 font-semibold",children:["Räckvidd rakt fram · ",n.slot]}),E.jsxs("div",{className:"text-[10.5px] text-white/35 tnum",children:[Math.round(o.fps)," fps"]})]}),E.jsxs("div",{className:"flex gap-5 mt-1.5",children:[E.jsxs("div",{children:[E.jsx("div",{className:"text-[22px] font-semibold tnum tracking-tight",children:jt(L.r1)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux (klart)"})]}),E.jsxs("div",{children:[E.jsx("div",{className:"text-[22px] font-semibold tnum tracking-tight text-white/80",children:jt(L.r025)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"0,25 lux"})]}),U.weather!=="clear"&&E.jsxs("div",{children:[E.jsx("div",{className:"text-[22px] font-semibold tnum tracking-tight text-[#64d2ff]",children:jt(L.rw)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux i vädret"})]})]}),he(!0)]})]}),E.jsx("button",{onClick:oe,"aria-label":"Dela länk",className:"glass rounded-full w-11 h-11 shrink-0 flex items-center justify-center text-white/85",children:E.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[E.jsx("path",{d:"M12 3v12"}),E.jsx("path",{d:"m7.5 7.5 4.5-4.5 4.5 4.5"}),E.jsx("path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"})]})}),E.jsx("button",{onClick:()=>{ar(8),h(!0)},"aria-label":"Om bilden, källor och licenser",className:"glass rounded-full w-11 h-11 shrink-0 flex items-center justify-center text-[17px] font-semibold text-white/85 font-serif italic",children:"i"})]}),E.jsx(rC,{snap:c,setSnap:f,peekH:Ee,halfH:ke,fullH:Re,width:w,onHeight:b,header:E.jsxs("div",{className:"px-3 pb-2.5 space-y-2",children:[E.jsxs("div",{className:"flex gap-2",children:[E.jsx("div",{className:"flex-1 min-w-0",children:E.jsx(un,{value:U.weather,onChange:j=>J({weather:j}),options:aC.map(j=>({v:j.v,l:j.l}))})}),E.jsx("div",{className:"w-[92px] shrink-0",children:E.jsx(un,{value:n.slot,onChange:N,options:[{v:"A",l:"A"},{v:"B",l:"B"}]})})]}),Y]}),children:Le})]}):E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"absolute top-3 left-3 right-[392px] flex items-center gap-3 flex-wrap",children:[E.jsxs("div",{className:"glass rounded-2xl pl-3.5 pr-4 py-2 flex items-center gap-2.5",children:[E.jsx("div",{className:"w-6 h-6 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.7)]"}),E.jsxs("div",{className:"leading-tight",children:[E.jsx("div",{className:"text-[14px] font-semibold tracking-tight",children:"Extraljus"}),E.jsx("div",{className:"text-[10.5px] text-white/45 -mt-0.5",children:"Simulator · beta"})]})]}),E.jsx("div",{className:"glass rounded-2xl p-1 w-[260px]",children:E.jsx(un,{size:"sm",value:U.view,onChange:j=>J({view:j}),options:[{v:"photo",l:"Förarvy"},{v:"driver",l:"3D"},{v:"top",l:"Ovanifrån"}]})}),E.jsx("div",{className:"glass rounded-2xl p-1 w-[120px]",title:"Jämför två ljusuppsättningar i samma väder",children:E.jsx(un,{size:"sm",value:n.slot,onChange:N,options:[{v:"A",l:"A"},{v:"B",l:"B"}]})}),E.jsx("div",{className:"glass rounded-2xl p-1 w-[300px]",children:E.jsx(un,{size:"sm",value:U.weather,onChange:j=>J({weather:j}),options:[{v:"clear",l:"Klart"},{v:"rain",l:"Regn"},{v:"snow",l:"Snöstorm"},{v:"fog",l:"Dimma"}]})}),E.jsx("button",{onClick:oe,className:"glass rounded-2xl px-3.5 py-2 text-[13px] font-medium text-white/85 hover:text-white",children:"Dela"}),E.jsx("button",{onClick:()=>h(!0),"aria-label":"Om bilden, källor och licenser",className:"glass rounded-full w-9 h-9 text-[15px] font-semibold text-white/80 hover:text-white font-serif italic",children:"i"})]}),E.jsx("div",{className:`absolute left-6 bottom-6 flex flex-col gap-2 pointer-events-none ${Oe?"hidden":""}`,children:E.jsxs("div",{className:"glass rounded-2xl px-4 py-3 w-[330px] pointer-events-auto",children:[E.jsxs("div",{className:"flex items-baseline justify-between",children:[E.jsxs("div",{className:"text-[11px] uppercase tracking-[0.08em] text-white/45 font-semibold",children:["Räckvidd rakt fram · ",n.slot]}),E.jsxs("div",{className:"text-[10.5px] text-white/35 tnum",children:[Math.round(o.fps)," fps"]})]}),E.jsxs("div",{className:"flex gap-5 mt-1.5",children:[E.jsxs("div",{children:[E.jsx("div",{className:"text-[24px] font-semibold tnum tracking-tight",children:jt(L.r1)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux (klart)"})]}),E.jsxs("div",{children:[E.jsx("div",{className:"text-[24px] font-semibold tnum tracking-tight text-white/80",children:jt(L.r025)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"0,25 lux"})]}),U.weather!=="clear"&&E.jsxs("div",{children:[E.jsx("div",{className:"text-[24px] font-semibold tnum tracking-tight text-[#64d2ff]",children:jt(L.rw)}),E.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux i vädret"})]})]}),he()]})}),E.jsxs("div",{className:"absolute glass-strong flex flex-col shadow-2xl top-3 right-3 bottom-3 w-[372px] rounded-[22px]",children:[E.jsx("div",{className:"px-4 pt-4 pb-2",children:Y}),E.jsx("div",{className:"flex-1 overflow-y-auto scroll-thin px-4 pb-4",children:Le})]}),U.view==="photo"&&E.jsxs("button",{onClick:()=>h(!0),className:"absolute right-[396px] bottom-3 max-w-[40vw] truncate text-[10px] text-white/30 hover:text-white/60 px-2 py-1",children:["Foto: ",ne.credit," · ",ne.author," · ",ne.license," · djur: Ronkos, W.carter, Sharp (CC) · källor"]})]}),m&&E.jsx(fC,{onClose:()=>h(!1),photo:ne}),x&&E.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 text-[13px] z-30",style:{top:"calc(env(safe-area-inset-top) + 64px)"},children:x}),E.jsx("span",{className:"hidden",children:pu})]})}function fC({onClose:t,photo:e}){const n=({t:i,a:r,l:s,u:o})=>E.jsxs("a",{href:o,target:"_blank",rel:"noreferrer",className:"block rounded-xl bg-white/[0.05] hover:bg-white/[0.08] px-3.5 py-2.5",children:[E.jsx("div",{className:"text-[13px] text-white/90 leading-snug",children:i}),E.jsxs("div",{className:"text-[11.5px] text-white/50 mt-0.5",children:[r," · ",E.jsx("span",{className:"text-[#64d2ff]",children:s})]})]});return E.jsx("div",{className:"absolute inset-0 z-40 flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm",onClick:t,role:"dialog","aria-modal":"true","aria-label":"Källor och licenser",children:E.jsxs("div",{className:"glass-strong w-full md:w-[480px] max-h-[85dvh] overflow-y-auto no-scrollbar rounded-t-[24px] md:rounded-[22px] p-5 shadow-2xl",style:{paddingBottom:"calc(20px + env(safe-area-inset-bottom))"},onClick:i=>i.stopPropagation(),children:[E.jsxs("div",{className:"flex items-center justify-between mb-3",children:[E.jsx("div",{className:"text-[17px] font-semibold",children:"Om bilden"}),E.jsx("button",{onClick:t,className:"tap w-11 h-11 -mr-2 rounded-full text-white/60 hover:text-white text-[22px] leading-none","aria-label":"Stäng",children:"×"})]}),E.jsx("div",{className:"text-[11px] uppercase tracking-[0.08em] text-white/45 font-semibold mb-1.5",children:"Foto i förarvyn"}),E.jsx(n,{t:`${e.credit} – ${e.kind==="night"?"omljust efter dina lampor":"dagfoto omgjort till natt"}`,a:e.author,l:e.license,u:e.url}),E.jsx("div",{className:"text-[11px] uppercase tracking-[0.08em] text-white/45 font-semibold mt-4 mb-1.5",children:"Djur (riktiga foton, frilagda)"}),E.jsx("div",{className:"space-y-1.5",children:Object.values(Us).map(i=>E.jsx(n,{t:`${i.label}: ${i.credit}`,a:i.author,l:i.license,u:i.url},i.id))}),E.jsxs("div",{className:"text-[11.5px] text-white/45 mt-4 leading-relaxed",children:["Bearbetning: foton är skalade, beskurna och frilagda och ljussätts om i realtid. Bearbetade versioner delas under samma licens (CC BY-SA där originalet är CC BY-SA). Ljusmodellen är en ungefärlig fotometrisk modell – inte en mätning. Fullständig lista: ",E.jsx("a",{className:"text-[#64d2ff]",href:"./CREDITS.md",target:"_blank",rel:"noreferrer",children:"CREDITS.md"})]})]})})}sx(document.getElementById("root")).render(E.jsx(__.StrictMode,{children:E.jsx(cC,{})}));
