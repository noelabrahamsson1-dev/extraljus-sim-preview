(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function zx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N0={exports:{}},fu={},D0={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),Bx=Symbol.for("react.portal"),Vx=Symbol.for("react.fragment"),Hx=Symbol.for("react.strict_mode"),Gx=Symbol.for("react.profiler"),Wx=Symbol.for("react.provider"),jx=Symbol.for("react.context"),Xx=Symbol.for("react.forward_ref"),qx=Symbol.for("react.suspense"),Yx=Symbol.for("react.memo"),$x=Symbol.for("react.lazy"),sp=Symbol.iterator;function Kx(t){return t===null||typeof t!="object"?null:(t=sp&&t[sp]||t["@@iterator"],typeof t=="function"?t:null)}var I0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,F0={};function $s(t,e,n){this.props=t,this.context=e,this.refs=F0,this.updater=n||I0}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k0(){}k0.prototype=$s.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=F0,this.updater=n||I0}var Oh=kh.prototype=new k0;Oh.constructor=kh;U0(Oh,$s.prototype);Oh.isPureReactComponent=!0;var op=Array.isArray,O0=Object.prototype.hasOwnProperty,zh={current:null},z0={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,i)&&!z0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ua,type:t,key:s,ref:o,props:r,_owner:zh.current}}function Zx(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function Jx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ap=/\/+/g;function Fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jx(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case Bx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Fu(o,0):i,op(r)?(n="",t!=null&&(n=t.replace(ap,"$&/")+"/"),ul(r,e,n,"",function(u){return u})):r!=null&&(Bh(r)&&(r=Zx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ap,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",op(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Fu(s,a);o+=ul(s,e,n,l,r)}else if(l=Kx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Fu(s,a++),o+=ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ga(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Qx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},cl={transition:null},e_={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:cl,ReactCurrentOwner:zh};function V0(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!Bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=$s;Ge.Fragment=Vx;Ge.Profiler=Gx;Ge.PureComponent=kh;Ge.StrictMode=Hx;Ge.Suspense=qx;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_;Ge.act=V0;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=U0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)O0.call(e,l)&&!z0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ua,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:jx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wx,_context:t},t.Consumer=t};Ge.createElement=B0;Ge.createFactory=function(t){var e=B0.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Xx,render:t}};Ge.isValidElement=Bh;Ge.lazy=function(t){return{$$typeof:$x,_payload:{_status:-1,_result:t},_init:Qx}};Ge.memo=function(t,e){return{$$typeof:Yx,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};Ge.unstable_act=V0;Ge.useCallback=function(t,e){return tn.current.useCallback(t,e)};Ge.useContext=function(t){return tn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return tn.current.useEffect(t,e)};Ge.useId=function(){return tn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return tn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Ge.useRef=function(t){return tn.current.useRef(t)};Ge.useState=function(t){return tn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return tn.current.useTransition()};Ge.version="18.3.1";D0.exports=Ge;var St=D0.exports;const t_=zx(St);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_=St,i_=Symbol.for("react.element"),r_=Symbol.for("react.fragment"),s_=Object.prototype.hasOwnProperty,o_=n_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a_={key:!0,ref:!0,__self:!0,__source:!0};function H0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)s_.call(e,i)&&!a_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:i_,type:t,key:s,ref:o,props:r,_owner:o_.current}}fu.Fragment=r_;fu.jsx=H0;fu.jsxs=H0;N0.exports=fu;var P=N0.exports,G0={exports:{}},Tn={},W0={exports:{}},j0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,K){var Q=N.length;N.push(K);e:for(;0<Q;){var oe=Q-1>>>1,Ae=N[oe];if(0<r(Ae,K))N[oe]=K,N[Q]=Ae,Q=oe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],Q=N.pop();if(Q!==K){N[0]=Q;e:for(var oe=0,Ae=N.length,Ve=Ae>>>1;oe<Ve;){var q=2*(oe+1)-1,te=N[q],ue=q+1,ce=N[ue];if(0>r(te,Q))ue<Ae&&0>r(ce,te)?(N[oe]=ce,N[ue]=Q,oe=ue):(N[oe]=te,N[q]=Q,oe=q);else if(ue<Ae&&0>r(ce,Q))N[oe]=ce,N[ue]=Q,oe=ue;else break e}}return K}function r(N,K){var Q=N.sortIndex-K.sortIndex;return Q!==0?Q:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=N)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function S(N){if(_=!1,x(N),!g)if(n(l)!==null)g=!0,H(R);else{var K=n(u);K!==null&&Y(S,K.startTime-N)}}function R(N,K){g=!1,_&&(_=!1,f(A),A=-1),p=!0;var Q=d;try{for(x(K),h=n(l);h!==null&&(!(h.expirationTime>K)||N&&!M());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var Ae=oe(h.expirationTime<=K);K=t.unstable_now(),typeof Ae=="function"?h.callback=Ae:h===n(l)&&i(l),x(K)}else i(l);h=n(l)}if(h!==null)var Ve=!0;else{var q=n(u);q!==null&&Y(S,q.startTime-K),Ve=!1}return Ve}finally{h=null,d=Q,p=!1}}var C=!1,T=null,A=-1,k=5,y=-1;function M(){return!(t.unstable_now()-y<k)}function I(){if(T!==null){var N=t.unstable_now();y=N;var K=!0;try{K=T(!0,N)}finally{K?z():(C=!1,T=null)}}else C=!1}var z;if(typeof v=="function")z=function(){v(I)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,$=V.port2;V.port1.onmessage=I,z=function(){$.postMessage(null)}}else z=function(){m(I,0)};function H(N){T=N,C||(C=!0,z())}function Y(N,K){A=m(function(){N(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var Q=d;d=K;try{return N()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=d;d=N;try{return K()}finally{d=Q}},t.unstable_scheduleCallback=function(N,K,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,N){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=Q+Ae,N={id:c++,callback:K,priorityLevel:N,startTime:Q,expirationTime:Ae,sortIndex:-1},Q>oe?(N.sortIndex=Q,e(u,N),n(l)===null&&N===n(u)&&(_?(f(A),A=-1):_=!0,Y(S,Q-oe))):(N.sortIndex=Ae,e(l,N),g||p||(g=!0,H(R))),N},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(N){var K=d;return function(){var Q=d;d=K;try{return N.apply(this,arguments)}finally{d=Q}}}})(j0);W0.exports=j0;var l_=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_=St,En=l_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X0=new Set,Bo={};function Br(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(Bo[t]=e,t=0;t<e.length;t++)X0.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,c_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lp={},up={};function f_(t){return Kc.call(up,t)?!0:Kc.call(lp,t)?!1:c_.test(t)?up[t]=!0:(lp[t]=!0,!1)}function h_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d_(t,e,n,i){if(e===null||typeof e>"u"||h_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Hh);zt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Hh);zt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Hh);zt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gh(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d_(e,n,r,i)&&(n=null),i||r===null?f_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=u_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),us=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),Wh=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),q0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),jh=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),cp=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,ku;function wo(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var Ou=!1;function zu(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function p_(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=zu(t.type,!1),t;case 11:return t=zu(t.type.render,!1),t;case 1:return t=zu(t.type,!0),t;default:return""}}function ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case us:return"Portal";case Zc:return"Profiler";case Wh:return"StrictMode";case Jc:return"Suspense";case Qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y0:return(t.displayName||"Context")+".Consumer";case q0:return(t._context.displayName||"Context")+".Provider";case jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xh:return e=t.displayName||null,e!==null?e:ef(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return ef(t(e))}catch{}}return null}function m_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ef(e);case 8:return e===Wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function K0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function g_(t){var e=K0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=g_(t))}function Z0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=K0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tf(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J0(t,e){e=e.checked,e!=null&&Gh(t,"checked",e,!1)}function nf(t,e){J0(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rf(t,e.type,n):e.hasOwnProperty("defaultValue")&&rf(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rf(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Eo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Q0(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function of(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _a,tg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v_=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){v_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function ng(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ng(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var x_=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function af(t,e){if(e){if(x_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function lf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uf=null;function qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cf=null,Es=null,Ts=null;function mp(t){if(t=ha(t)){if(typeof cf!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=gu(e),cf(t.stateNode,t.type,e))}}function rg(t){Es?Ts?Ts.push(t):Ts=[t]:Es=t}function sg(){if(Es){var t=Es,e=Ts;if(Ts=Es=null,mp(t),e)for(t=0;t<e.length;t++)mp(e[t])}}function og(t,e){return t(e)}function ag(){}var Bu=!1;function lg(t,e,n){if(Bu)return t(e,n);Bu=!0;try{return og(t,e,n)}finally{Bu=!1,(Es!==null||Ts!==null)&&(ag(),sg())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var i=gu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var ff=!1;if(Ai)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){ff=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{ff=!1}function __(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var bo=!1,Ll=null,Nl=!1,hf=null,y_={onError:function(t){bo=!0,Ll=t}};function S_(t,e,n,i,r,s,o,a,l){bo=!1,Ll=null,__.apply(y_,arguments)}function M_(t,e,n,i,r,s,o,a,l){if(S_.apply(this,arguments),bo){if(bo){var u=Ll;bo=!1,Ll=null}else throw Error(ie(198));Nl||(Nl=!0,hf=u)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gp(t){if(Vr(t)!==t)throw Error(ie(188))}function w_(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return gp(r),t;if(s===i)return gp(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function cg(t){return t=w_(t),t!==null?fg(t):null}function fg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fg(t);if(e!==null)return e;t=t.sibling}return null}var hg=En.unstable_scheduleCallback,vp=En.unstable_cancelCallback,E_=En.unstable_shouldYield,T_=En.unstable_requestPaint,Mt=En.unstable_now,A_=En.unstable_getCurrentPriorityLevel,Yh=En.unstable_ImmediatePriority,dg=En.unstable_UserBlockingPriority,Dl=En.unstable_NormalPriority,C_=En.unstable_LowPriority,pg=En.unstable_IdlePriority,hu=null,ai=null;function R_(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:L_,b_=Math.log,P_=Math.LN2;function L_(t){return t>>>=0,t===0?32:31-(b_(t)/P_|0)|0}var ya=64,Sa=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=n&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function N_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=N_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mg(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function Vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function I_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $h(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function gg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vg,Kh,xg,_g,yg,pf=!1,Ma=[],Ki=null,Zi=null,Ji=null,Go=new Map,Wo=new Map,Gi=[],U_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function F_(t,e,n,i,r){switch(e){case"focusin":return Ki=ao(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=ao(Zi,t,e,n,i,r),!0;case"mouseover":return Ji=ao(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,ao(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wo.set(s,ao(Wo.get(s)||null,t,e,n,i,r)),!0}return!1}function Sg(t){var e=Cr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=ug(n),e!==null){t.blockedOn=e,yg(t.priority,function(){xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);uf=i,n.target.dispatchEvent(i),uf=null}else return e=ha(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function _p(t,e,n){fl(t)&&n.delete(e)}function k_(){pf=!1,Ki!==null&&fl(Ki)&&(Ki=null),Zi!==null&&fl(Zi)&&(Zi=null),Ji!==null&&fl(Ji)&&(Ji=null),Go.forEach(_p),Wo.forEach(_p)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,pf||(pf=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,k_)))}function jo(t){function e(r){return lo(r,t)}if(0<Ma.length){lo(Ma[0],t);for(var n=1;n<Ma.length;n++){var i=Ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&lo(Ki,t),Zi!==null&&lo(Zi,t),Ji!==null&&lo(Ji,t),Go.forEach(e),Wo.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)Sg(n),n.blockedOn===null&&Gi.shift()}var As=Li.ReactCurrentBatchConfig,Ul=!0;function O_(t,e,n,i){var r=tt,s=As.transition;As.transition=null;try{tt=1,Zh(t,e,n,i)}finally{tt=r,As.transition=s}}function z_(t,e,n,i){var r=tt,s=As.transition;As.transition=null;try{tt=4,Zh(t,e,n,i)}finally{tt=r,As.transition=s}}function Zh(t,e,n,i){if(Ul){var r=mf(t,e,n,i);if(r===null)Zu(t,e,i,Fl,n),xp(t,i);else if(F_(r,t,e,n,i))i.stopPropagation();else if(xp(t,i),e&4&&-1<U_.indexOf(t)){for(;r!==null;){var s=ha(r);if(s!==null&&vg(s),s=mf(t,e,n,i),s===null&&Zu(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zu(t,e,i,null,n)}}var Fl=null;function mf(t,e,n,i){if(Fl=null,t=qh(i),t=Cr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function Mg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A_()){case Yh:return 1;case dg:return 4;case Dl:case C_:return 16;case pg:return 536870912;default:return 16}default:return 16}}var Xi=null,Jh=null,hl=null;function wg(){if(hl)return hl;var t,e=Jh,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return hl=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function yp(){return!1}function An(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:yp,this.isPropagationStopped=yp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=An(Ks),fa=vt({},Ks,{view:0,detail:0}),B_=An(fa),Hu,Gu,uo,du=vt({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Hu=t.screenX-uo.screenX,Gu=t.screenY-uo.screenY):Gu=Hu=0,uo=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),Sp=An(du),V_=vt({},du,{dataTransfer:0}),H_=An(V_),G_=vt({},fa,{relatedTarget:0}),Wu=An(G_),W_=vt({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),j_=An(W_),X_=vt({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q_=An(X_),Y_=vt({},Ks,{data:0}),Mp=An(Y_),$_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Z_[t])?!!e[t]:!1}function ed(){return J_}var Q_=vt({},fa,{key:function(t){if(t.key){var e=$_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ey=An(Q_),ty=vt({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=An(ty),ny=vt({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),iy=An(ny),ry=vt({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=An(ry),oy=vt({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=An(oy),ly=[9,13,27,32],td=Ai&&"CompositionEvent"in window,Po=null;Ai&&"documentMode"in document&&(Po=document.documentMode);var uy=Ai&&"TextEvent"in window&&!Po,Eg=Ai&&(!td||Po&&8<Po&&11>=Po),Ep=" ",Tp=!1;function Tg(t,e){switch(t){case"keyup":return ly.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function cy(t,e){switch(t){case"compositionend":return Ag(e);case"keypress":return e.which!==32?null:(Tp=!0,Ep);case"textInput":return t=e.data,t===Ep&&Tp?null:t;default:return null}}function fy(t,e){if(fs)return t==="compositionend"||!td&&Tg(t,e)?(t=wg(),hl=Jh=Xi=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eg&&e.locale!=="ko"?null:e.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hy[t.type]:e==="textarea"}function Cg(t,e,n,i){rg(i),e=kl(e,"onChange"),0<e.length&&(n=new Qh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,Xo=null;function dy(t){Og(t,0)}function pu(t){var e=ps(t);if(Z0(e))return t}function py(t,e){if(t==="change")return e}var Rg=!1;if(Ai){var ju;if(Ai){var Xu="oninput"in document;if(!Xu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Xu=typeof Cp.oninput=="function"}ju=Xu}else ju=!1;Rg=ju&&(!document.documentMode||9<document.documentMode)}function Rp(){Lo&&(Lo.detachEvent("onpropertychange",bg),Xo=Lo=null)}function bg(t){if(t.propertyName==="value"&&pu(Xo)){var e=[];Cg(e,Xo,t,qh(t)),lg(dy,e)}}function my(t,e,n){t==="focusin"?(Rp(),Lo=e,Xo=n,Lo.attachEvent("onpropertychange",bg)):t==="focusout"&&Rp()}function gy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pu(Xo)}function vy(t,e){if(t==="click")return pu(e)}function xy(t,e){if(t==="input"||t==="change")return pu(e)}function _y(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:_y;function qo(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kc.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=bp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function Pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yy(t){var e=Lg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pg(n.ownerDocument.documentElement,n)){if(i!==null&&nd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Pp(n,s);var o=Pp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sy=Ai&&"documentMode"in document&&11>=document.documentMode,hs=null,gf=null,No=null,vf=!1;function Lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||hs==null||hs!==Pl(i)||(i=hs,"selectionStart"in i&&nd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&qo(No,i)||(No=i,i=kl(gf,"onSelect"),0<i.length&&(e=new Qh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=hs)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},qu={},Ng={};Ai&&(Ng=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function mu(t){if(qu[t])return qu[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ng)return qu[t]=e[n];return t}var Dg=mu("animationend"),Ig=mu("animationiteration"),Ug=mu("animationstart"),Fg=mu("transitionend"),kg=new Map,Np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){kg.set(t,e),Br(e,[t])}for(var Yu=0;Yu<Np.length;Yu++){var $u=Np[Yu],My=$u.toLowerCase(),wy=$u[0].toUpperCase()+$u.slice(1);cr(My,"on"+wy)}cr(Dg,"onAnimationEnd");cr(Ig,"onAnimationIteration");cr(Ug,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(Fg,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,M_(i,e,void 0,t),t.currentTarget=null}function Og(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,u),s=l}}}if(Nl)throw t=hf,Nl=!1,hf=null,t}function at(t,e){var n=e[Mf];n===void 0&&(n=e[Mf]=new Set);var i=t+"__bubble";n.has(i)||(zg(e,t,2,!1),n.add(i))}function Ku(t,e,n){var i=0;e&&(i|=4),zg(n,t,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[Ta]){t[Ta]=!0,X0.forEach(function(n){n!=="selectionchange"&&(Ey.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Ku("selectionchange",!1,e))}}function zg(t,e,n,i){switch(Mg(e)){case 1:var r=O_;break;case 4:r=z_;break;default:r=Zh}n=r.bind(null,e,n,t),r=void 0,!ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lg(function(){var u=s,c=qh(n),h=[];e:{var d=kg.get(t);if(d!==void 0){var p=Qh,g=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":p=ey;break;case"focusin":g="focus",p=Wu;break;case"focusout":g="blur",p=Wu;break;case"beforeblur":case"afterblur":p=Wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iy;break;case Dg:case Ig:case Ug:p=j_;break;case Fg:p=sy;break;case"scroll":p=B_;break;case"wheel":p=ay;break;case"copy":case"cut":case"paste":p=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wp}var _=(e&4)!==0,m=!_&&t==="scroll",f=_?d!==null?d+"Capture":null:d;_=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=Ho(v,f),S!=null&&_.push($o(v,S,x)))),m)break;v=v.return}0<_.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==uf&&(g=n.relatedTarget||n.fromElement)&&(Cr(g)||g[Ci]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Cr(g):null,g!==null&&(m=Vr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Sp,S="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=wp,S="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:ps(p),x=g==null?d:ps(g),d=new _(S,v+"leave",p,n,c),d.target=m,d.relatedTarget=x,S=null,Cr(c)===u&&(_=new _(f,v+"enter",g,n,c),_.target=x,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,f=g,v=0,x=_;x;x=jr(x))v++;for(x=0,S=f;S;S=jr(S))x++;for(;0<v-x;)_=jr(_),v--;for(;0<x-v;)f=jr(f),x--;for(;v--;){if(_===f||f!==null&&_===f.alternate)break t;_=jr(_),f=jr(f)}_=null}else _=null;p!==null&&Ip(h,d,p,_,!1),g!==null&&m!==null&&Ip(h,m,g,_,!0)}}e:{if(d=u?ps(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=py;else if(Ap(d))if(Rg)R=xy;else{R=gy;var C=my}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=vy);if(R&&(R=R(t,u))){Cg(h,R,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&rf(d,"number",d.value)}switch(C=u?ps(u):window,t){case"focusin":(Ap(C)||C.contentEditable==="true")&&(hs=C,gf=u,No=null);break;case"focusout":No=gf=hs=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,Lp(h,n,c);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":Lp(h,n,c)}var T;if(td)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else fs?Tg(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Eg&&n.locale!=="ko"&&(fs||A!=="onCompositionStart"?A==="onCompositionEnd"&&fs&&(T=wg()):(Xi=c,Jh="value"in Xi?Xi.value:Xi.textContent,fs=!0)),C=kl(u,A),0<C.length&&(A=new Mp(A,t,null,n,c),h.push({event:A,listeners:C}),T?A.data=T:(T=Ag(n),T!==null&&(A.data=T)))),(T=uy?cy(t,n):fy(t,n))&&(u=kl(u,"onBeforeInput"),0<u.length&&(c=new Mp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}Og(h,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ho(t,n),s!=null&&i.unshift($o(t,s,r)),s=Ho(t,e),s!=null&&i.push($o(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ho(n,s),l!=null&&o.unshift($o(n,l,a))):r||(l=Ho(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ty=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function Up(t){return(typeof t=="string"?t:""+t).replace(Ty,`
`).replace(Ay,"")}function Aa(t,e,n){if(e=Up(e),Up(t)!==e&&n)throw Error(ie(425))}function Ol(){}var xf=null,_f=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(t){return Fp.resolve(null).then(t).catch(by)}:Sf;function by(t){setTimeout(function(){throw t})}function Ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);jo(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),si="__reactFiber$"+Zs,Ko="__reactProps$"+Zs,Ci="__reactContainer$"+Zs,Mf="__reactEvents$"+Zs,Py="__reactListeners$"+Zs,Ly="__reactHandles$"+Zs;function Cr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kp(t);t!==null;){if(n=t[si])return n;t=kp(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[si]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function gu(t){return t[Ko]||null}var wf=[],ms=-1;function fr(t){return{current:t}}function ut(t){0>ms||(t.current=wf[ms],wf[ms]=null,ms--)}function st(t,e){ms++,wf[ms]=t.current,t.current=e}var ar={},Xt=fr(ar),fn=fr(!1),Dr=ar;function Fs(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function zl(){ut(fn),ut(Xt)}function Op(t,e,n){if(Xt.current!==ar)throw Error(ie(168));st(Xt,e),st(fn,n)}function Bg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,m_(t)||"Unknown",r));return vt({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Dr=Xt.current,st(Xt,t),st(fn,fn.current),!0}function zp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Bg(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,ut(fn),ut(Xt),st(Xt,t)):ut(fn),st(fn,n)}var yi=null,vu=!1,Qu=!1;function Vg(t){yi===null?yi=[t]:yi.push(t)}function Ny(t){vu=!0,Vg(t)}function hr(){if(!Qu&&yi!==null){Qu=!0;var t=0,e=tt;try{var n=yi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,vu=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),hg(Yh,hr),r}finally{tt=e,Qu=!1}}return null}var gs=[],vs=0,Vl=null,Hl=0,bn=[],Pn=0,Ir=null,Si=1,Mi="";function Sr(t,e){gs[vs++]=Hl,gs[vs++]=Vl,Vl=t,Hl=e}function Hg(t,e,n){bn[Pn++]=Si,bn[Pn++]=Mi,bn[Pn++]=Ir,Ir=t;var i=Si;t=Mi;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-Zn(e)+r|n<<r|i,Mi=s+t}else Si=1<<s|n<<r|i,Mi=t}function id(t){t.return!==null&&(Sr(t,1),Hg(t,1,0))}function rd(t){for(;t===Vl;)Vl=gs[--vs],gs[vs]=null,Hl=gs[--vs],gs[vs]=null;for(;t===Ir;)Ir=bn[--Pn],bn[Pn]=null,Mi=bn[--Pn],bn[Pn]=null,Si=bn[--Pn],bn[Pn]=null}var wn=null,Mn=null,ft=!1,Wn=null;function Gg(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,Mn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,Mn=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tf(t){if(ft){var e=Mn;if(e){var n=e;if(!Bp(t,e)){if(Ef(t))throw Error(ie(418));e=Qi(n.nextSibling);var i=wn;e&&Bp(t,e)?Gg(i,n):(t.flags=t.flags&-4097|2,ft=!1,wn=t)}}else{if(Ef(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ft=!1,wn=t}}}function Vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Ca(t){if(t!==wn)return!1;if(!ft)return Vp(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=Mn)){if(Ef(t))throw Wg(),Error(ie(418));for(;e;)Gg(t,e),e=Qi(e.nextSibling)}if(Vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=wn?Qi(t.stateNode.nextSibling):null;return!0}function Wg(){for(var t=Mn;t;)t=Qi(t.nextSibling)}function ks(){Mn=wn=null,ft=!1}function sd(t){Wn===null?Wn=[t]:Wn.push(t)}var Dy=Li.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hp(t){var e=t._init;return e(t._payload)}function jg(t){function e(f,v){if(t){var x=f.deletions;x===null?(f.deletions=[v],f.flags|=16):x.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=ir(f,v),f.index=0,f.sibling=null,f}function s(f,v,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<v?(f.flags|=2,v):x):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,x,S){return v===null||v.tag!==6?(v=oc(x,f.mode,S),v.return=f,v):(v=r(v,x),v.return=f,v)}function l(f,v,x,S){var R=x.type;return R===cs?c(f,v,x.props.children,S,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vi&&Hp(R)===v.type)?(S=r(v,x.props),S.ref=co(f,v,x),S.return=f,S):(S=yl(x.type,x.key,x.props,null,f.mode,S),S.ref=co(f,v,x),S.return=f,S)}function u(f,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=ac(x,f.mode,S),v.return=f,v):(v=r(v,x.children||[]),v.return=f,v)}function c(f,v,x,S,R){return v===null||v.tag!==7?(v=Nr(x,f.mode,S,R),v.return=f,v):(v=r(v,x),v.return=f,v)}function h(f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=oc(""+v,f.mode,x),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case va:return x=yl(v.type,v.key,v.props,null,f.mode,x),x.ref=co(f,null,v),x.return=f,x;case us:return v=ac(v,f.mode,x),v.return=f,v;case Vi:var S=v._init;return h(f,S(v._payload),x)}if(Eo(v)||so(v))return v=Nr(v,f.mode,x,null),v.return=f,v;Ra(f,v)}return null}function d(f,v,x,S){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(f,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case va:return x.key===R?l(f,v,x,S):null;case us:return x.key===R?u(f,v,x,S):null;case Vi:return R=x._init,d(f,v,R(x._payload),S)}if(Eo(x)||so(x))return R!==null?null:c(f,v,x,S,null);Ra(f,x)}return null}function p(f,v,x,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,a(v,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case va:return f=f.get(S.key===null?x:S.key)||null,l(v,f,S,R);case us:return f=f.get(S.key===null?x:S.key)||null,u(v,f,S,R);case Vi:var C=S._init;return p(f,v,x,C(S._payload),R)}if(Eo(S)||so(S))return f=f.get(x)||null,c(v,f,S,R,null);Ra(v,S)}return null}function g(f,v,x,S){for(var R=null,C=null,T=v,A=v=0,k=null;T!==null&&A<x.length;A++){T.index>A?(k=T,T=null):k=T.sibling;var y=d(f,T,x[A],S);if(y===null){T===null&&(T=k);break}t&&T&&y.alternate===null&&e(f,T),v=s(y,v,A),C===null?R=y:C.sibling=y,C=y,T=k}if(A===x.length)return n(f,T),ft&&Sr(f,A),R;if(T===null){for(;A<x.length;A++)T=h(f,x[A],S),T!==null&&(v=s(T,v,A),C===null?R=T:C.sibling=T,C=T);return ft&&Sr(f,A),R}for(T=i(f,T);A<x.length;A++)k=p(T,f,A,x[A],S),k!==null&&(t&&k.alternate!==null&&T.delete(k.key===null?A:k.key),v=s(k,v,A),C===null?R=k:C.sibling=k,C=k);return t&&T.forEach(function(M){return e(f,M)}),ft&&Sr(f,A),R}function _(f,v,x,S){var R=so(x);if(typeof R!="function")throw Error(ie(150));if(x=R.call(x),x==null)throw Error(ie(151));for(var C=R=null,T=v,A=v=0,k=null,y=x.next();T!==null&&!y.done;A++,y=x.next()){T.index>A?(k=T,T=null):k=T.sibling;var M=d(f,T,y.value,S);if(M===null){T===null&&(T=k);break}t&&T&&M.alternate===null&&e(f,T),v=s(M,v,A),C===null?R=M:C.sibling=M,C=M,T=k}if(y.done)return n(f,T),ft&&Sr(f,A),R;if(T===null){for(;!y.done;A++,y=x.next())y=h(f,y.value,S),y!==null&&(v=s(y,v,A),C===null?R=y:C.sibling=y,C=y);return ft&&Sr(f,A),R}for(T=i(f,T);!y.done;A++,y=x.next())y=p(T,f,A,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?A:y.key),v=s(y,v,A),C===null?R=y:C.sibling=y,C=y);return t&&T.forEach(function(I){return e(f,I)}),ft&&Sr(f,A),R}function m(f,v,x,S){if(typeof x=="object"&&x!==null&&x.type===cs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case va:e:{for(var R=x.key,C=v;C!==null;){if(C.key===R){if(R=x.type,R===cs){if(C.tag===7){n(f,C.sibling),v=r(C,x.props.children),v.return=f,f=v;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vi&&Hp(R)===C.type){n(f,C.sibling),v=r(C,x.props),v.ref=co(f,C,x),v.return=f,f=v;break e}n(f,C);break}else e(f,C);C=C.sibling}x.type===cs?(v=Nr(x.props.children,f.mode,S,x.key),v.return=f,f=v):(S=yl(x.type,x.key,x.props,null,f.mode,S),S.ref=co(f,v,x),S.return=f,f=S)}return o(f);case us:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(f,v.sibling),v=r(v,x.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=ac(x,f.mode,S),v.return=f,f=v}return o(f);case Vi:return C=x._init,m(f,v,C(x._payload),S)}if(Eo(x))return g(f,v,x,S);if(so(x))return _(f,v,x,S);Ra(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,x),v.return=f,f=v):(n(f,v),v=oc(x,f.mode,S),v.return=f,f=v),o(f)):n(f,v)}return m}var Os=jg(!0),Xg=jg(!1),Gl=fr(null),Wl=null,xs=null,od=null;function ad(){od=xs=Wl=null}function ld(t){var e=Gl.current;ut(Gl),t._currentValue=e}function Af(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){Wl=t,od=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(od!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Wl===null)throw Error(ie(308));xs=t,Wl.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Rr=null;function ud(t){Rr===null?Rr=[t]:Rr.push(t)}function qg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ud(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,ud(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$h(t,n)}}function Gp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(d=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=vt({},h,d);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=h}}function Wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var da={},li=fr(da),Zo=fr(da),Jo=fr(da);function br(t){if(t===da)throw Error(ie(174));return t}function fd(t,e){switch(st(Jo,e),st(Zo,t),st(li,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:of(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=of(e,t)}ut(li),st(li,e)}function zs(){ut(li),ut(Zo),ut(Jo)}function $g(t){br(Jo.current);var e=br(li.current),n=of(e,t.type);e!==n&&(st(Zo,t),st(li,n))}function hd(t){Zo.current===t&&(ut(li),ut(Zo))}var ht=fr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ec=[];function dd(){for(var t=0;t<ec.length;t++)ec[t]._workInProgressVersionPrimary=null;ec.length=0}var ml=Li.ReactCurrentDispatcher,tc=Li.ReactCurrentBatchConfig,Ur=0,mt=null,At=null,Nt=null,ql=!1,Do=!1,Qo=0,Iy=0;function Bt(){throw Error(ie(321))}function pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function md(t,e,n,i,r,s){if(Ur=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?Oy:zy,t=n(i,r),Do){s=0;do{if(Do=!1,Qo=0,25<=s)throw Error(ie(301));s+=1,Nt=At=null,e.updateQueue=null,ml.current=By,t=n(i,r)}while(Do)}if(ml.current=Yl,e=At!==null&&At.next!==null,Ur=0,Nt=At=mt=null,ql=!1,e)throw Error(ie(300));return t}function gd(){var t=Qo!==0;return Qo=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Un(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Nt===null?mt.memoizedState:Nt.next;if(e!==null)Nt=e,At=t;else{if(t===null)throw Error(ie(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function ea(t,e){return typeof e=="function"?e(t):e}function nc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ur&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,mt.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ic(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Kg(){}function Zg(t,e){var n=mt,i=Un(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,vd(ev.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,ta(9,Qg.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ie(349));Ur&30||Jg(n,e,r)}return r}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,tv(e)&&nv(t)}function ev(t,e,n){return n(function(){tv(e)&&nv(t)})}function tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function nv(t){var e=Ri(t,1);e!==null&&Jn(e,t,1,-1)}function jp(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=ky.bind(null,mt,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function iv(){return Un().memoizedState}function gl(t,e,n,i){var r=ti();mt.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function xu(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&pd(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}mt.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function Xp(t,e){return gl(8390656,8,t,e)}function vd(t,e){return xu(2048,8,t,e)}function rv(t,e){return xu(4,2,t,e)}function sv(t,e){return xu(4,4,t,e)}function ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function av(t,e,n){return n=n!=null?n.concat([t]):null,xu(4,4,ov.bind(null,e,t),n)}function xd(){}function lv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function uv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function cv(t,e,n){return Ur&21?(Qn(n,e)||(n=mg(),mt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function Uy(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=tc.transition;tc.transition={};try{t(!1),e()}finally{tt=n,tc.transition=i}}function fv(){return Un().memoizedState}function Fy(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},hv(t))dv(e,n);else if(n=qg(t,e,n,i),n!==null){var r=Zt();Jn(n,t,i,r),pv(n,e,i)}}function ky(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(hv(t))dv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,ud(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=qg(t,e,r,i),n!==null&&(r=Zt(),Jn(n,t,i,r),pv(n,e,i))}}function hv(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function dv(t,e){Do=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$h(t,n)}}var Yl={readContext:In,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Oy={readContext:In,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Fy.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:jp,useDebugValue:xd,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=jp(!1),e=t[0];return t=Uy.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ti();if(ft){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),It===null)throw Error(ie(349));Ur&30||Jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xp(ev.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,Qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=It.identifierPrefix;if(ft){var n=Mi,i=Si;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Iy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zy={readContext:In,useCallback:lv,useContext:In,useEffect:vd,useImperativeHandle:av,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:uv,useReducer:nc,useRef:iv,useState:function(){return nc(ea)},useDebugValue:xd,useDeferredValue:function(t){var e=Un();return cv(e,At.memoizedState,t)},useTransition:function(){var t=nc(ea)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:fv,unstable_isNewReconciler:!1},By={readContext:In,useCallback:lv,useContext:In,useEffect:vd,useImperativeHandle:av,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:uv,useReducer:ic,useRef:iv,useState:function(){return ic(ea)},useDebugValue:xd,useDeferredValue:function(t){var e=Un();return At===null?e.memoizedState=t:cv(e,At.memoizedState,t)},useTransition:function(){var t=ic(ea)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:fv,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=nr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Jn(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=nr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Jn(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=nr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Jn(e,t,i,n),pl(e,t,i))}};function qp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,i)||!qo(r,s):!0}function mv(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=hn(e)?Dr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},cd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=hn(e)?Dr:Xt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_u.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=p_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vy=typeof WeakMap=="function"?WeakMap:Map;function gv(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,zf=i),bf(t,e)},n}function vv(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $p(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Vy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tS.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var Hy=Li.ReactCurrentOwner,un=!1;function $t(t,e,n,i){e.child=t===null?Xg(e,null,n,i):Os(e,t.child,n,i)}function Jp(t,e,n,i,r){n=n.render;var s=e.ref;return Cs(e,r),i=md(t,e,n,i,s,r),n=gd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(ft&&n&&id(e),e.flags|=1,$t(t,e,i,r),e.child)}function Qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ad(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xv(t,e,s,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function xv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qo(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,bi(t,e,r)}return Pf(t,e,n,i,r)}function _v(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ys,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ys,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ys,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ys,xn),xn|=i;return $t(t,e,r,n),e.child}function yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,i,r){var s=hn(n)?Dr:Xt.current;return s=Fs(e,s),Cs(e,r),n=md(t,e,n,i,s,r),i=gd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(ft&&i&&id(e),e.flags|=1,$t(t,e,n,r),e.child)}function em(t,e,n,i,r){if(hn(n)){var s=!0;Bl(e)}else s=!1;if(Cs(e,r),e.stateNode===null)vl(t,e),mv(e,n,i),Rf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=hn(n)?Dr:Xt.current,u=Fs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Yp(e,o,i,u),Hi=!1;var d=e.memoizedState;o.state=d,jl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||fn.current||Hi?(typeof c=="function"&&(Cf(e,n,c,i),l=e.memoizedState),(a=Hi||qp(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Yg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=hn(n)?Dr:Xt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Yp(e,o,i,l),Hi=!1,d=e.memoizedState,o.state=d,jl(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||fn.current||Hi?(typeof p=="function"&&(Cf(e,n,p,i),g=e.memoizedState),(u=Hi||qp(e,n,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Lf(t,e,n,i,s,r)}function Lf(t,e,n,i,r,s){yv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&zp(e,n,!1),bi(t,e,s);i=e.stateNode,Hy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&zp(e,n,!0),e.child}function Sv(t){var e=t.stateNode;e.pendingContext?Op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Op(t,e.context,!1),fd(t,e.containerInfo)}function tm(t,e,n,i,r){return ks(),sd(r),e.flags|=256,$t(t,e,n,i),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Df(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mv(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return Tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mu(o,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Df(n),e.memoizedState=Nf,t):_d(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Gy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nf,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function _d(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,i){return i!==null&&sd(i),Os(e,t.child,null,n),t=_d(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=rc(Error(ie(422))),ba(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mu({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=Df(o),e.memoizedState=Nf,s);if(!(e.mode&1))return ba(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=rc(s,i,void 0),ba(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ri(t,r),Jn(i,t,r,-1))}return Td(),i=rc(Error(ie(421))),ba(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=Qi(r.nextSibling),wn=e,ft=!0,Wn=null,t!==null&&(bn[Pn++]=Si,bn[Pn++]=Mi,bn[Pn++]=Ir,Si=t.id,Mi=t.overflow,Ir=e),e=_d(e,i.children),e.flags|=4096,e)}function nm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Af(t.return,e,n)}function sc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function wv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nm(t,n,e);else if(t.tag===19)nm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),sc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}sc(e,!0,n,null,s);break;case"together":sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wy(t,e,n){switch(e.tag){case 3:Sv(e),ks();break;case 5:$g(e);break;case 1:hn(e.type)&&Bl(e);break;case 4:fd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?Mv(t,e,n):(st(ht,ht.current&1),t=bi(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return wv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,_v(t,e,n)}return bi(t,e,n)}var Ev,If,Tv,Av;Ev=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};If=function(){};Tv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(li.current);var s=null;switch(n){case"input":r=tf(t,r),i=tf(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=sf(t,r),i=sf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}af(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Av=function(t,e,n,i){n!==i&&(e.flags|=4)};function fo(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jy(t,e,n){var i=e.pendingProps;switch(rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return hn(e.type)&&zl(),Vt(e),null;case 3:return i=e.stateNode,zs(),ut(fn),ut(Xt),dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Hf(Wn),Wn=null))),If(t,e),Vt(e),null;case 5:hd(e);var r=br(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Tv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Vt(e),null}if(t=br(li.current),Ca(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)at(Ao[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":fp(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":dp(i,s),at("invalid",i)}af(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":xa(i),hp(i,s,!0);break;case"textarea":xa(i),pp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[si]=e,t[Ko]=i,Ev(t,e,!1,!1),e.stateNode=t;e:{switch(o=lf(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)at(Ao[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":fp(t,i),r=tf(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),at("invalid",t);break;case"textarea":dp(t,i),r=sf(t,i),at("invalid",t);break;default:r=i}af(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ig(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Gh(t,s,l,o))}switch(n){case"input":xa(t),hp(t,i,!1);break;case"textarea":xa(t),pp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Av(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=br(Jo.current),br(li.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:Aa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return Vt(e),null;case 13:if(ut(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Mn!==null&&e.mode&1&&!(e.flags&128))Wg(),ks(),e.flags|=98560,s=!1;else if(s=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[si]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Wn!==null&&(Hf(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Ct===0&&(Ct=3):Td())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return zs(),If(t,e),t===null&&Yo(e.stateNode.containerInfo),Vt(e),null;case 10:return ld(e.type._context),Vt(e),null;case 17:return hn(e.type)&&zl(),Vt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fo(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Vs&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Vt(e),null}else 2*Mt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Ed(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Xy(t,e){switch(rd(e),e.tag){case 1:return hn(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),ut(fn),ut(Xt),dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hd(e),null;case 13:if(ut(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ht),null;case 4:return zs(),null;case 10:return ld(e.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var Pa=!1,Wt=!1,qy=typeof WeakSet=="function"?WeakSet:Set,me=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Uf(t,e,n){try{n()}catch(i){_t(t,e,i)}}var im=!1;function Yy(t,e){if(xf=Ul,t=Lg(),nd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_f={focusedElem:t,selectionRange:n},Ul=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:Hn(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){_t(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return g=im,im=!1,g}function Io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Uf(e,n,s)}r=r.next}while(r!==i)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cv(t){var e=t.alternate;e!==null&&(t.alternate=null,Cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Ko],delete e[Mf],delete e[Py],delete e[Ly])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rv(t){return t.tag===5||t.tag===3||t.tag===4}function rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}function Of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}var Ft=null,Gn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)bv(t,e,n),n=n.sibling}function bv(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:Wt||_s(n,e);case 6:var i=Ft,r=Gn;Ft=null,Ii(t,e,n),Ft=i,Gn=r,Ft!==null&&(Gn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Gn?(t=Ft,n=n.stateNode,t.nodeType===8?Ju(t.parentNode,n):t.nodeType===1&&Ju(t,n),jo(t)):Ju(Ft,n.stateNode));break;case 4:i=Ft,r=Gn,Ft=n.stateNode.containerInfo,Gn=!0,Ii(t,e,n),Ft=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uf(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Wt&&(_s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ii(t,e,n),Wt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function sm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qy),e.forEach(function(i){var r=iS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Gn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Gn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Ft===null)throw Error(ie(160));bv(s,o,r),Ft=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){_t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pv(e,t),e=e.sibling}function Pv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),ei(t),i&4){try{Io(3,t,t.return),yu(3,t)}catch(_){_t(t,t.return,_)}try{Io(5,t,t.return)}catch(_){_t(t,t.return,_)}}break;case 1:kn(e,t),ei(t),i&512&&n!==null&&_s(n,n.return);break;case 5:if(kn(e,t),ei(t),i&512&&n!==null&&_s(n,n.return),t.flags&32){var r=t.stateNode;try{Vo(r,"")}catch(_){_t(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&J0(r,s),lf(a,o);var u=lf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ig(r,h):c==="dangerouslySetInnerHTML"?tg(r,h):c==="children"?Vo(r,h):Gh(r,c,h,u)}switch(a){case"input":nf(r,s);break;case"textarea":Q0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ws(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ws(r,!!s.multiple,s.defaultValue,!0):ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(_){_t(t,t.return,_)}}break;case 6:if(kn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){_t(t,t.return,_)}}break;case 3:if(kn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(_){_t(t,t.return,_)}break;case 4:kn(e,t),ei(t);break;case 13:kn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Md=Mt())),i&4&&sm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||c,kn(e,t),Wt=u):kn(e,t),ei(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(me=t,c=t.child;c!==null;){for(h=me=c;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Io(4,d,d.return);break;case 1:_s(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){_t(i,n,_)}}break;case 5:_s(d,d.return);break;case 22:if(d.memoizedState!==null){am(h);continue}}p!==null?(p.return=d,me=p):am(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ng("display",o))}catch(_){_t(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){_t(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),ei(t),i&4&&sm(t);break;case 21:break;default:kn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vo(r,""),i.flags&=-33);var s=rm(t);Of(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=rm(t);kf(t,a,o);break;default:throw Error(ie(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $y(t,e,n){me=t,Lv(t)}function Lv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Pa;var u=Wt;if(Pa=o,(Wt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?lm(r):l!==null?(l.return=o,me=l):lm(r);for(;s!==null;)me=s,Lv(s),s=s.sibling;me=r,Pa=a,Wt=u}om(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):om(t)}}function om(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&jo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Wt||e.flags&512&&Ff(e)}catch(d){_t(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function am(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function lm(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Ff(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Ff(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Ky=Math.ceil,$l=Li.ReactCurrentDispatcher,yd=Li.ReactCurrentOwner,Dn=Li.ReactCurrentBatchConfig,qe=0,It=null,Tt=null,kt=0,xn=0,ys=fr(0),Ct=0,na=null,Fr=0,Su=0,Sd=0,Uo=null,an=null,Md=0,Vs=1/0,_i=null,Kl=!1,zf=null,tr=null,La=!1,qi=null,Zl=0,Fo=0,Bf=null,xl=-1,_l=0;function Zt(){return qe&6?Mt():xl!==-1?xl:xl=Mt()}function nr(t){return t.mode&1?qe&2&&kt!==0?kt&-kt:Dy.transition!==null?(_l===0&&(_l=mg()),_l):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Mg(t.type)),t):1}function Jn(t,e,n,i){if(50<Fo)throw Fo=0,Bf=null,Error(ie(185));ca(t,n,i),(!(qe&2)||t!==It)&&(t===It&&(!(qe&2)&&(Su|=n),Ct===4&&Wi(t,kt)),dn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Vs=Mt()+500,vu&&hr()))}function dn(t,e){var n=t.callbackNode;D_(t,e);var i=Il(t,t===It?kt:0);if(i===0)n!==null&&vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&vp(n),e===1)t.tag===0?Ny(um.bind(null,t)):Vg(um.bind(null,t)),Ry(function(){!(qe&6)&&hr()}),n=null;else{switch(gg(i)){case 1:n=Yh;break;case 4:n=dg;break;case 16:n=Dl;break;case 536870912:n=pg;break;default:n=Dl}n=zv(n,Nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nv(t,e){if(xl=-1,_l=0,qe&6)throw Error(ie(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var i=Il(t,t===It?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jl(t,i);else{e=i;var r=qe;qe|=2;var s=Iv();(It!==t||kt!==e)&&(_i=null,Vs=Mt()+500,Lr(t,e));do try{Qy();break}catch(a){Dv(t,a)}while(!0);ad(),$l.current=s,qe=r,Tt!==null?e=0:(It=null,kt=0,e=Ct)}if(e!==0){if(e===2&&(r=df(t),r!==0&&(i=r,e=Vf(t,r))),e===1)throw n=na,Lr(t,0),Wi(t,i),dn(t,Mt()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Zy(r)&&(e=Jl(t,i),e===2&&(s=df(t),s!==0&&(i=s,e=Vf(t,s))),e===1))throw n=na,Lr(t,0),Wi(t,i),dn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Mr(t,an,_i);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=Md+500-Mt(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sf(Mr.bind(null,t,an,_i),e);break}Mr(t,an,_i);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ky(i/1960))-i,10<i){t.timeoutHandle=Sf(Mr.bind(null,t,an,_i),i);break}Mr(t,an,_i);break;case 5:Mr(t,an,_i);break;default:throw Error(ie(329))}}}return dn(t,Mt()),t.callbackNode===n?Nv.bind(null,t):null}function Vf(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=an,an=n,e!==null&&Hf(e)),t}function Hf(t){an===null?an=t:an.push.apply(an,t)}function Zy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Sd,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function um(t){if(qe&6)throw Error(ie(327));Rs();var e=Il(t,0);if(!(e&1))return dn(t,Mt()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var i=df(t);i!==0&&(e=i,n=Vf(t,i))}if(n===1)throw n=na,Lr(t,0),Wi(t,e),dn(t,Mt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,an,_i),dn(t,Mt()),null}function wd(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Vs=Mt()+500,vu&&hr())}}function kr(t){qi!==null&&qi.tag===0&&!(qe&6)&&Rs();var e=qe;qe|=1;var n=Dn.transition,i=tt;try{if(Dn.transition=null,tt=1,t)return t()}finally{tt=i,Dn.transition=n,qe=e,!(qe&6)&&hr()}}function Ed(){xn=ys.current,ut(ys)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cy(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(rd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:zs(),ut(fn),ut(Xt),dd();break;case 5:hd(i);break;case 4:zs();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:ld(i.type._context);break;case 22:case 23:Ed()}n=n.return}if(It=t,Tt=t=ir(t.current,null),kt=xn=e,Ct=0,na=null,Sd=Su=Fr=0,an=Uo=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Rr=null}return t}function Dv(t,e){do{var n=Tt;try{if(ad(),ml.current=Yl,ql){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(Ur=0,Nt=At=mt=null,Do=!1,Qo=0,yd.current=null,n===null||n.return===null){Ct=1,na=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Kp(o);if(p!==null){p.flags&=-257,Zp(p,o,a,s,e),p.mode&1&&$p(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){$p(s,u,e),Td();break e}l=Error(ie(426))}}else if(ft&&a.mode&1){var m=Kp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Zp(m,o,a,s,e),sd(Bs(l,a));break e}}s=l=Bs(l,a),Ct!==4&&(Ct=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=gv(s,l,e);Gp(s,f);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(tr===null||!tr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=vv(s,a,e);Gp(s,S);break e}}s=s.return}while(s!==null)}Fv(n)}catch(R){e=R,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Iv(){var t=$l.current;return $l.current=Yl,t===null?Yl:t}function Td(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),It===null||!(Fr&268435455)&&!(Su&268435455)||Wi(It,kt)}function Jl(t,e){var n=qe;qe|=2;var i=Iv();(It!==t||kt!==e)&&(_i=null,Lr(t,e));do try{Jy();break}catch(r){Dv(t,r)}while(!0);if(ad(),qe=n,$l.current=i,Tt!==null)throw Error(ie(261));return It=null,kt=0,Ct}function Jy(){for(;Tt!==null;)Uv(Tt)}function Qy(){for(;Tt!==null&&!E_();)Uv(Tt)}function Uv(t){var e=Ov(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Fv(t):Tt=e,yd.current=null}function Fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xy(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=jy(n,e,xn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function Mr(t,e,n){var i=tt,r=Dn.transition;try{Dn.transition=null,tt=1,eS(t,e,n,i)}finally{Dn.transition=r,tt=i}return null}function eS(t,e,n,i){do Rs();while(qi!==null);if(qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(I_(t,s),t===It&&(Tt=It=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,zv(Dl,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=tt;tt=1;var a=qe;qe|=4,yd.current=null,Yy(t,n),Pv(n,t),yy(_f),Ul=!!xf,_f=xf=null,t.current=n,$y(n),T_(),qe=a,tt=o,Dn.transition=s}else t.current=n;if(La&&(La=!1,qi=t,Zl=r),s=t.pendingLanes,s===0&&(tr=null),R_(n.stateNode),dn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=zf,zf=null,t;return Zl&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===Bf?Fo++:(Fo=0,Bf=t):Fo=0,hr(),null}function Rs(){if(qi!==null){var t=gg(Zl),e=Dn.transition,n=tt;try{if(Dn.transition=null,tt=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,Zl=0,qe&6)throw Error(ie(331));var r=qe;for(qe|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:Io(8,c,s)}var h=c.child;if(h!==null)h.return=c,me=h;else for(;me!==null;){c=me;var d=c.sibling,p=c.return;if(Cv(c),c===u){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,me=f;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,me=x;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yu(9,a)}}catch(R){_t(a,a.return,R)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(qe=r,hr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(hu,t)}catch{}i=!0}return i}finally{tt=n,Dn.transition=e}}return!1}function cm(t,e,n){e=Bs(n,e),e=gv(t,e,1),t=er(t,e,1),e=Zt(),t!==null&&(ca(t,1,e),dn(t,e))}function _t(t,e,n){if(t.tag===3)cm(t,t,n);else for(;e!==null;){if(e.tag===3){cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Bs(n,t),t=vv(e,t,1),e=er(e,t,1),t=Zt(),e!==null&&(ca(e,1,t),dn(e,t));break}}e=e.return}}function tS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(kt&n)===n&&(Ct===4||Ct===3&&(kt&130023424)===kt&&500>Mt()-Md?Lr(t,0):Sd|=n),dn(t,e)}function kv(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=Zt();t=Ri(t,e),t!==null&&(ca(t,e,n),dn(t,n))}function nS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kv(t,n)}function iS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),kv(t,n)}var Ov;Ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Wy(t,e,n);un=!!(t.flags&131072)}else un=!1,ft&&e.flags&1048576&&Hg(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=Fs(e,Xt.current);Cs(e,n),r=md(null,e,i,t,r,n);var s=gd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cd(e),r.updater=_u,e.stateNode=r,r._reactInternals=e,Rf(e,i,t,n),e=Lf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&id(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sS(i),t=Hn(i,t),r){case 0:e=Pf(null,e,i,t,n);break e;case 1:e=em(null,e,i,t,n);break e;case 11:e=Jp(null,e,i,t,n);break e;case 14:e=Qp(null,e,i,Hn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Pf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),em(t,e,i,r,n);case 3:e:{if(Sv(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yg(t,e),jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(ie(423)),e),e=tm(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(ie(424)),e),e=tm(t,e,i,n,r);break e}else for(Mn=Qi(e.stateNode.containerInfo.firstChild),wn=e,ft=!0,Wn=null,n=Xg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=bi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return $g(e),t===null&&Tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,yf(i,r)?o=null:s!==null&&yf(i,s)&&(e.flags|=32),yv(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Tf(e),null;case 13:return Mv(t,e,n);case 4:return fd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Os(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Jp(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Gl,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!fn.current){e=bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Af(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Af(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Cs(e,n),r=In(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Qp(t,e,i,r,n);case 15:return xv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),vl(t,e),e.tag=1,hn(i)?(t=!0,Bl(e)):t=!1,Cs(e,n),mv(e,i,r),Rf(e,i,r,n),Lf(null,e,i,!0,t,n);case 19:return wv(t,e,n);case 22:return _v(t,e,n)}throw Error(ie(156,e.tag))};function zv(t,e){return hg(t,e)}function rS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new rS(t,e,n,i)}function Ad(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sS(t){if(typeof t=="function")return Ad(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jh)return 11;if(t===Xh)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ad(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Nr(n.children,r,s,e);case Wh:o=8,r|=8;break;case Zc:return t=Nn(12,n,e,r|2),t.elementType=Zc,t.lanes=s,t;case Jc:return t=Nn(13,n,e,r),t.elementType=Jc,t.lanes=s,t;case Qc:return t=Nn(19,n,e,r),t.elementType=Qc,t.lanes=s,t;case $0:return Mu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q0:o=10;break e;case Y0:o=9;break e;case jh:o=11;break e;case Xh:o=14;break e;case Vi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function Mu(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=$0,t.lanes=n,t.stateNode={isHidden:!1},t}function oc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function ac(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cd(t,e,n,i,r,s,o,a,l){return t=new oS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cd(s),t}function aS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bv(t){if(!t)return ar;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(hn(n))return Bg(t,n,e)}return e}function Vv(t,e,n,i,r,s,o,a,l){return t=Cd(n,i,!0,t,r,s,o,a,l),t.context=Bv(null),n=t.current,i=Zt(),r=nr(n),s=Ei(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,ca(t,r,i),dn(t,i),t}function wu(t,e,n,i){var r=e.current,s=Zt(),o=nr(r);return n=Bv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(Jn(t,r,o,s),pl(t,r,o)),o}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rd(t,e){fm(t,e),(t=t.alternate)&&fm(t,e)}function lS(){return null}var Hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}Eu.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));wu(t,e,null,null)};Eu.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){wu(null,t,null,null)}),e[Ci]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=_g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&Sg(t)}};function Pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hm(){}function uS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ql(o);s.call(u)}}var o=Vv(e,i,t,0,null,!1,!1,"",hm);return t._reactRootContainer=o,t[Ci]=o.current,Yo(t.nodeType===8?t.parentNode:t),kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ql(l);a.call(u)}}var l=Cd(t,0,!1,null,null,!1,!1,"",hm);return t._reactRootContainer=l,t[Ci]=l.current,Yo(t.nodeType===8?t.parentNode:t),kr(function(){wu(e,l,n,i)}),l}function Au(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ql(o);a.call(l)}}wu(e,o,t,r)}else o=uS(n,e,t,r,i);return Ql(o)}vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&($h(e,n|1),dn(e,Mt()),!(qe&6)&&(Vs=Mt()+500,hr()))}break;case 13:kr(function(){var i=Ri(t,1);if(i!==null){var r=Zt();Jn(i,t,1,r)}}),Rd(t,1)}};Kh=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=Zt();Jn(e,t,134217728,n)}Rd(t,134217728)}};xg=function(t){if(t.tag===13){var e=nr(t),n=Ri(t,e);if(n!==null){var i=Zt();Jn(n,t,e,i)}Rd(t,e)}};_g=function(){return tt};yg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};cf=function(t,e,n){switch(e){case"input":if(nf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gu(i);if(!r)throw Error(ie(90));Z0(i),nf(i,r)}}}break;case"textarea":Q0(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};og=wd;ag=kr;var cS={usingClientEntryPoint:!1,Events:[ha,ps,gu,rg,sg,wd]},ho={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fS={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cg(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||lS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{hu=Na.inject(fS),ai=Na}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cS;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pd(e))throw Error(ie(200));return aS(t,e,null,n)};Tn.createRoot=function(t,e){if(!Pd(t))throw Error(ie(299));var n=!1,i="",r=Hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cd(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,Yo(t.nodeType===8?t.parentNode:t),new bd(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=cg(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return kr(t)};Tn.hydrate=function(t,e,n){if(!Tu(e))throw Error(ie(200));return Au(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Pd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Hv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vv(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,Yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Eu(e)};Tn.render=function(t,e,n){if(!Tu(e))throw Error(ie(200));return Au(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(ie(40));return t._reactRootContainer?(kr(function(){Au(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};Tn.unstable_batchedUpdates=wd;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Au(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(t){console.error(t)}}Gv(),G0.exports=Tn;var hS=G0.exports,Wv,dm=hS;Wv=dm.createRoot,dm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="169",dS=0,pm=1,pS=2,jv=1,mS=2,xi=3,lr=0,Jt=1,jn=2,rr=0,bs=1,Gf=2,mm=3,gm=4,gS=5,Tr=100,vS=101,xS=102,_S=103,yS=104,SS=200,MS=201,wS=202,ES=203,Wf=204,jf=205,TS=206,AS=207,CS=208,RS=209,bS=210,PS=211,LS=212,NS=213,DS=214,Xf=0,ia=1,qf=2,Hs=3,Yf=4,$f=5,Kf=6,Zf=7,Xv=0,IS=1,US=2,Ti=0,FS=1,kS=2,OS=3,zS=4,BS=5,VS=6,HS=7,qv=300,Gs=301,Ws=302,Jf=303,Qf=304,Cu=306,eu=1e3,Pr=1001,eh=1002,cn=1003,GS=1004,Da=1005,Kt=1006,lc=1007,Yi=1008,Pi=1009,Yv=1010,$v=1011,ra=1012,Nd=1013,ur=1014,qn=1015,Js=1016,Dd=1017,Id=1018,js=1020,Kv=35902,Zv=1021,Jv=1022,Yn=1023,Qv=1024,ex=1025,Ps=1026,Xs=1027,Ud=1028,Fd=1029,tx=1030,kd=1031,Od=1033,Sl=33776,Ml=33777,wl=33778,El=33779,th=35840,nh=35841,ih=35842,rh=35843,sh=36196,oh=37492,ah=37496,lh=37808,uh=37809,ch=37810,fh=37811,hh=37812,dh=37813,ph=37814,mh=37815,gh=37816,vh=37817,xh=37818,_h=37819,yh=37820,Sh=37821,Tl=36492,Mh=36494,wh=36495,nx=36283,Eh=36284,Th=36285,Ah=36286,WS=3200,jS=3201,XS=0,qS=1,Sn="",ni="srgb",Ni="srgb-linear",zd="display-p3",Ru="display-p3-linear",tu="linear",lt="srgb",nu="rec709",iu="p3",Xr=7680,vm=519,YS=512,$S=513,KS=514,ix=515,ZS=516,JS=517,QS=518,e1=519,xm=35044,_m="300 es",wi=2e3,ru=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=Math.PI/180,Ch=180/Math.PI;function eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function t1(t,e){return(t%e+e)%e}function cc(t,e,n){return(1-n)*t+n*e}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],v=r[1],x=r[4],S=r[7],R=r[2],C=r[5],T=r[8];return s[0]=o*_+a*v+l*R,s[3]=o*m+a*x+l*C,s[6]=o*f+a*S+l*T,s[1]=u*_+c*v+h*R,s[4]=u*m+c*x+h*C,s[7]=u*f+c*S+h*T,s[2]=d*_+p*v+g*R,s[5]=d*m+p*x+g*C,s[8]=d*f+p*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,p=u*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(fc.makeScale(e,n)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new Oe;function rx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function n1(){const t=sa("canvas");return t.style.display="block",t}const ym={};function Al(t){t in ym||(ym[t]=!0,console.warn(t))}function i1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function r1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function s1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sm=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mm=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[Ni]:{transfer:tu,primaries:nu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ni]:{transfer:lt,primaries:nu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ru]:{transfer:tu,primaries:iu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Mm),fromReference:t=>t.applyMatrix3(Sm)},[zd]:{transfer:lt,primaries:iu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Mm),fromReference:t=>t.applyMatrix3(Sm).convertLinearToSRGB()}},o1=new Set([Ni,Ru]),Qe={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!o1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=mo[e].toReference,r=mo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return mo[t].primaries},getTransfer:function(t){return t===Sn?tu:mo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(mo[e].luminanceCoefficients)}};function Ls(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class a1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=sa("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ls(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ls(n[i]/255)*255):n[i]=Ls(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l1=0;class sx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dc(r[o].image)):s.push(dc(r[o]))}else s=dc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?a1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u1=0;class Ot extends Qs{constructor(e=Ot.DEFAULT_IMAGE,n=Ot.DEFAULT_MAPPING,i=Pr,r=Pr,s=Kt,o=Yi,a=Yn,l=Pi,u=Ot.DEFAULT_ANISOTROPY,c=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=eo(),this.name="",this.source=new sx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eu:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eu:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=qv;Ot.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(p+1)/2,R=(f+1)/2,C=(c+d)/4,T=(h+_)/4,A=(g+m)/4;return x>S&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=T/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=A/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=A/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c1 extends Qs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new sx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends c1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ox extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f1 extends Ot{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h!==_||l!==d||u!==p||c!==g){let m=1-a;const f=l*d+u*p+c*g+h*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),C=Math.atan2(R,f*v);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const S=a*v;if(l=l*m+d*S,u=u*m+p*S,c=c*m+g*S,h=h*m+_*S,m===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=R,u*=R,c*=R,h*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+c*h+l*p-u*d,e[n+1]=l*g+c*d+u*h-a*p,e[n+2]=u*g+c*p+a*d-l*h,e[n+3]=c*g-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"YXZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"ZXY":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"ZYX":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"YZX":this._x=d*c*h+u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h-d*p*g;break;case"XZY":this._x=d*c*h-u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new D,wm=new to;class Hr{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),Ua.subVectors(this.max,go),Yr.subVectors(e.a,go),$r.subVectors(e.b,go),Kr.subVectors(e.c,go),Ui.subVectors($r,Yr),Fi.subVectors(Kr,$r),pr.subVectors(Yr,Kr);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-pr.z,pr.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,pr.z,0,-pr.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-pr.y,pr.x,0];return!mc(n,Yr,$r,Kr,Ua)||(n=[1,0,0,0,1,0,0,0,1],!mc(n,Yr,$r,Kr,Ua))?!1:(Fa.crossVectors(Ui,Fi),n=[Fa.x,Fa.y,Fa.z],mc(n,Yr,$r,Kr,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new D,new D,new D,new D,new D,new D,new D,new D],On=new D,Ia=new Hr,Yr=new D,$r=new D,Kr=new D,Ui=new D,Fi=new D,pr=new D,go=new D,Ua=new D,Fa=new D,mr=new D;function mc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){mr.fromArray(t,s);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),u=n.dot(mr),c=i.dot(mr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const h1=new Hr,vo=new D,gc=new D;class Gr{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):h1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const n=vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(gc)),this.expandByPoint(vo.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new D,vc=new D,ka=new D,ki=new D,xc=new D,Oa=new D,_c=new D;class Bd{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vc.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(vc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ka),a=ki.dot(this.direction),l=-ki.dot(ka),u=ki.lengthSq(),c=Math.abs(1-o*o);let h,d,p,g;if(c>0)if(h=o*l-a,d=o*a-l,g=s*c,h>=0)if(d>=-g)if(d<=g){const _=1/c;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vc).addScaledVector(ka,d),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){xc.subVectors(n,e),Oa.subVectors(i,e),_c.crossVectors(xc,Oa);let o=this.direction.dot(_c),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Oa.crossVectors(ki,Oa));if(l<0)return null;const u=a*this.direction.dot(xc.cross(ki));if(u<0||l+u>o)return null;const c=-a*ki.dot(_c);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,n,i,r,s,o,a,l,u,c,h,d,p,g,_,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,h,d,p,g,_,m)}set(e,n,i,r,s,o,a,l,u,c,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),o=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*h,g=a*c,_=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+g*u,n[5]=d-_*u,n[9]=-a*l,n[2]=_-d*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,g=u*c,_=u*h;n[0]=d+_*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,g=u*c,_=u*h;n[0]=d-_*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*c,n[9]=_-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,g=a*c,_=a*h;n[0]=l*c,n[4]=g*u-p,n[8]=d*u+_,n[1]=l*h,n[5]=_*u+d,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=_-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+g,n[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+_,n[5]=o*c,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*c,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d1,e,p1)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Oi.crossVectors(i,gn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Oi.crossVectors(i,gn)),Oi.normalize(),za.crossVectors(gn,Oi),r[0]=Oi.x,r[4]=za.x,r[8]=gn.x,r[1]=Oi.y,r[5]=za.y,r[9]=gn.y,r[2]=Oi.z,r[6]=za.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],x=i[7],S=i[11],R=i[15],C=r[0],T=r[4],A=r[8],k=r[12],y=r[1],M=r[5],I=r[9],z=r[13],V=r[2],$=r[6],H=r[10],Y=r[14],N=r[3],K=r[7],Q=r[11],oe=r[15];return s[0]=o*C+a*y+l*V+u*N,s[4]=o*T+a*M+l*$+u*K,s[8]=o*A+a*I+l*H+u*Q,s[12]=o*k+a*z+l*Y+u*oe,s[1]=c*C+h*y+d*V+p*N,s[5]=c*T+h*M+d*$+p*K,s[9]=c*A+h*I+d*H+p*Q,s[13]=c*k+h*z+d*Y+p*oe,s[2]=g*C+_*y+m*V+f*N,s[6]=g*T+_*M+m*$+f*K,s[10]=g*A+_*I+m*H+f*Q,s[14]=g*k+_*z+m*Y+f*oe,s[3]=v*C+x*y+S*V+R*N,s[7]=v*T+x*M+S*$+R*K,s[11]=v*A+x*I+S*H+R*Q,s[15]=v*k+x*z+S*Y+R*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+_*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=h*m*u-_*d*u+_*l*p-a*m*p-h*l*f+a*d*f,x=g*d*u-c*m*u-g*l*p+o*m*p+c*l*f-o*d*f,S=c*_*u-g*h*u+g*a*p-o*_*p-c*a*f+o*h*f,R=g*h*l-c*_*l-g*a*d+o*_*d+c*a*m-o*h*m,C=n*v+i*x+r*S+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=v*T,e[1]=(_*d*s-h*m*s-_*r*p+i*m*p+h*r*f-i*d*f)*T,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*f+i*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*T,e[4]=x*T,e[5]=(c*m*s-g*d*s+g*r*p-n*m*p-c*r*f+n*d*f)*T,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*f-n*l*f)*T,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(g*h*s-c*_*s-g*i*p+n*_*p+c*i*f-n*h*f)*T,e[10]=(o*_*s-g*a*s+g*i*u-n*_*u-o*i*f+n*a*f)*T,e[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*p-n*a*p)*T,e[12]=R*T,e[13]=(c*_*r-g*h*r+g*i*d-n*_*d-c*i*m+n*h*m)*T,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,d=s*u,p=s*c,g=s*h,_=o*c,m=o*h,f=a*h,v=l*u,x=l*c,S=l*h,R=i.x,C=i.y,T=i.z;return r[0]=(1-(_+f))*R,r[1]=(p+S)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(d+f))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+x)*T,r[9]=(m-v)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),a=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/s,c=1/o,h=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=wi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===wi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ru)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wi){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(o-s),d=(n+e)*u,p=(i+r)*c;let g,_;if(a===wi)g=(o+s)*h,_=-2*h;else if(a===ru)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new D,zn=new He,d1=new D(0,0,0),p1=new D(1,1,1),Oi=new D,za=new D,gn=new D,Em=new He,Tm=new to;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m1=0;const Am=new D,Jr=new to,pi=new He,Ba=new D,xo=new D,g1=new D,v1=new to,Cm=new D(1,0,0),Rm=new D(0,1,0),bm=new D(0,0,1),Pm={type:"added"},x1={type:"removed"},Qr={type:"childadded",child:null},yc={type:"childremoved",child:null};class Qt extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new D,n=new ui,i=new to,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new Oe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,n){return Am.copy(e).applyQuaternion(this.quaternion),this.position.add(Am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ba.copy(e):Ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(xo,Ba,this.up):pi.lookAt(Ba,xo,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(pi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(x1),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,g1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,v1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new D(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new D,mi=new D,Sc=new D,gi=new D,es=new D,ts=new D,Lm=new D,Mc=new D,wc=new D,Ec=new D,Tc=new dt,Ac=new dt,Cc=new dt;class Xn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),mi.subVectors(i,n),Sc.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(mi),l=Bn.dot(Sc),u=mi.dot(mi),c=mi.dot(Sc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Tc.setScalar(0),Ac.setScalar(0),Cc.setScalar(0),Tc.fromBufferAttribute(e,n),Ac.fromBufferAttribute(e,i),Cc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Tc,s.x),o.addScaledVector(Ac,s.y),o.addScaledVector(Cc,s.z),o}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),mi.subVectors(e,n),Bn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;es.subVectors(r,i),ts.subVectors(s,i),Mc.subVectors(e,i);const l=es.dot(Mc),u=ts.dot(Mc);if(l<=0&&u<=0)return n.copy(i);wc.subVectors(e,r);const c=es.dot(wc),h=ts.dot(wc);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(es,o);Ec.subVectors(e,s);const p=es.dot(Ec),g=ts.dot(Ec);if(g>=0&&p<=g)return n.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(ts,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return Lm.subVectors(s,r),a=(h-c)/(h-c+(p-g)),n.copy(r).addScaledVector(Lm,a);const f=1/(m+_+d);return o=_*f,a=d*f,n.copy(i).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=t1(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Rc(o,s,e+1/3),this.g=Rc(o,s,e),this.b=Rc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=ni){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ni){const i=lx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=hc(e.r),this.g=hc(e.g),this.b=hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(jt(Gt.r*255,0,255))*65536+Math.round(jt(Gt.g*255,0,255))*256+Math.round(jt(Gt.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=ni){Qe.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==ni?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(Va);const i=cc(zi.h,Va.h,n),r=cc(zi.s,Va.s,n),s=cc(zi.l,Va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new $e;$e.NAMES=lx;let _1=0;class no extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=bs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wf,this.blendDst=jf,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wf&&(i.blendSrc=this.blendSrc),this.blendDst!==jf&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vd extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new D,Ha=new _e;class en{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xm,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ha.fromBufferAttribute(this,n),Ha.applyMatrix3(e),this.setXY(n,Ha.x,Ha.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xm&&(e.usage=this.usage),e}}class ux extends en{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cx extends en{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gt extends en{constructor(e,n,i){super(new Float32Array(e),n,i)}}let y1=0;const Rn=new He,bc=new Qt,ns=new D,vn=new Hr,_o=new Hr,Pt=new D;class qt extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?cx:ux)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(vn.min,_o.min),vn.expandByPoint(Pt),Pt.addVectors(vn.max,_o.max),vn.expandByPoint(Pt)):(vn.expandByPoint(_o.min),vn.expandByPoint(_o.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Pt.fromBufferAttribute(a,u),l&&(ns.fromBufferAttribute(e,u),Pt.add(ns)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new D,l[A]=new D;const u=new D,c=new D,h=new D,d=new _e,p=new _e,g=new _e,_=new D,m=new D;function f(A,k,y){u.fromBufferAttribute(i,A),c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,k),g.fromBufferAttribute(s,y),c.sub(u),h.sub(u),p.sub(d),g.sub(d);const M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(M),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(M),a[A].add(_),a[k].add(_),a[y].add(_),l[A].add(m),l[k].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,k=v.length;A<k;++A){const y=v[A],M=y.start,I=y.count;for(let z=M,V=M+I;z<V;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new D,S=new D,R=new D,C=new D;function T(A){R.fromBufferAttribute(r,A),C.copy(R);const k=a[A];x.copy(k),x.sub(R.multiplyScalar(R.dot(k))).normalize(),S.crossVectors(C,k);const M=S.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,M)}for(let A=0,k=v.length;A<k;++A){const y=v[A],M=y.start,I=y.count;for(let z=M,V=M+I;z<V;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let f=0;f<c;f++)d[g++]=u[p++]}return new en(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nm=new He,gr=new Bd,Ga=new Gr,Dm=new D,Wa=new D,ja=new D,Xa=new D,Pc=new D,qa=new D,Im=new D,Ya=new D;class We extends Qt{constructor(e=new qt,n=new Vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Pc.fromBufferAttribute(h,e),o?qa.addScaledVector(Pc,c):qa.addScaledVector(Pc.sub(n),c))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Ga.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ga,Dm)===null||gr.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Nm.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Nm),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=x;S<R;S+=3){const C=a.getX(S),T=a.getX(S+1),A=a.getX(S+2);r=$a(this,f,e,i,u,c,h,C,T,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=$a(this,o,e,i,u,c,h,v,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=x;S<R;S+=3){const C=S,T=S+1,A=S+2;r=$a(this,f,e,i,u,c,h,C,T,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,x=m+1,S=m+2;r=$a(this,o,e,i,u,c,h,v,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function S1(t,e,n,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ya);return u<n.near||u>n.far?null:{distance:u,point:Ya.clone(),object:t}}function $a(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Wa),t.getVertexPosition(l,ja),t.getVertexPosition(u,Xa);const c=S1(t,e,n,i,Wa,ja,Xa,Im);if(c){const h=new D;Xn.getBarycoord(Im,Wa,ja,Xa,h),r&&(c.uv=Xn.getInterpolatedAttribute(r,a,l,u,h,new _e)),s&&(c.uv1=Xn.getInterpolatedAttribute(s,a,l,u,h,new _e)),o&&(c.normal=Xn.getInterpolatedAttribute(o,a,l,u,h,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new D,materialIndex:0};Xn.getNormal(Wa,ja,Xa,d.normal),c.face=d,c.barycoord=h}return c}class Or extends qt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2));function g(_,m,f,v,x,S,R,C,T,A,k){const y=S/T,M=R/A,I=S/2,z=R/2,V=C/2,$=T+1,H=A+1;let Y=0,N=0;const K=new D;for(let Q=0;Q<H;Q++){const oe=Q*M-z;for(let Ae=0;Ae<$;Ae++){const Ve=Ae*y-I;K[_]=Ve*v,K[m]=oe*x,K[f]=V,u.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=C>0?1:-1,c.push(K.x,K.y,K.z),h.push(Ae/T),h.push(1-Q/A),Y+=1}}for(let Q=0;Q<A;Q++)for(let oe=0;oe<T;oe++){const Ae=d+oe+$*Q,Ve=d+oe+$*(Q+1),q=d+(oe+1)+$*(Q+1),te=d+(oe+1)+$*Q;l.push(Ae,Ve,te),l.push(Ve,q,te),N+=6}a.addGroup(p,N,k),p+=N,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function M1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const w1={clone:qs,merge:Yt};var E1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E1,this.fragmentShader=T1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=M1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hx extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new D,Um=new _e,Fm=new _e;class yn extends hx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ch*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,Um,Fm),n.subVectors(Fm,Um)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class A1 extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new yn(is,rs,e,n);s.layers=this.layers,this.add(s);const o=new yn(is,rs,e,n);o.layers=this.layers,this.add(o);const a=new yn(is,rs,e,n);a.layers=this.layers,this.add(a);const l=new yn(is,rs,e,n);l.layers=this.layers,this.add(l);const u=new yn(is,rs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ru)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dx extends Ot{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C1 extends Ln{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Or(5,5,5),s=new Dt({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:rr});s.uniforms.tEquirect.value=n;const o=new We(r,s),a=n.minFilter;return n.minFilter===Yi&&(n.minFilter=Kt),new A1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Lc=new D,R1=new D,b1=new Oe;class wr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lc.subVectors(i,n).cross(R1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||b1.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Gr,Ka=new D;class px{constructor(e=new wr,n=new wr,i=new wr,r=new wr,s=new wr,o=new wr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-f).normalize(),i[1].setComponents(l+s,d+u,m+p,S+f).normalize(),i[2].setComponents(l+o,d+c,m+g,S+v).normalize(),i[3].setComponents(l-o,d-c,m-g,S-v).normalize(),i[4].setComponents(l-a,d-h,m-_,S-x).normalize(),n===wi)i[5].setComponents(l+a,d+h,m+_,S+x).normalize();else if(n===ru)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function P1(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class oi extends qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let f=0;f<c;f++){const v=f*d-o;for(let x=0;x<u;x++){const S=x*h-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+u*f,S=v+u*(f+1),R=v+1+u*(f+1),C=v+1+u*f;p.push(x,S,C),p.push(S,R,C)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
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
#endif`,D1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k1=`#ifdef USE_AOMAP
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
#endif`,O1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z1=`#ifdef USE_BATCHING
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
#endif`,B1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W1=`#ifdef USE_IRIDESCENCE
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
#endif`,j1=`#ifdef USE_BUMPMAP
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
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eM=`#define PI 3.141592653589793
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
} // validated`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nM=`vec3 transformedNormal = objectNormal;
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
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`
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
}`,uM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xM=`#ifdef USE_GRADIENTMAP
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
}`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
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
#endif`,wM=`#ifdef USE_ENVMAP
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
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
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
#endif`,bM=`struct PhysicalMaterial {
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
}`,PM=`
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
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
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BM=`#if defined( USE_POINTS_UV )
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
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
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
#endif`,qM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QM=`#ifdef USE_NORMALMAP
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
#endif`,ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ow=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mw=`float getShadowMask() {
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
}`,gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vw=`#ifdef USE_SKINNING
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
#endif`,xw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_w=`#ifdef USE_SKINNING
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
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ww=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ew=`#ifdef USE_TRANSMISSION
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
#endif`,Tw=`#ifdef USE_TRANSMISSION
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
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lw=`uniform sampler2D t2D;
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
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`#include <common>
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
}`,kw=`#if DEPTH_PACKING == 3200
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
}`,Ow=`#define DISTANCE
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
}`,zw=`#define DISTANCE
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
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`uniform float scale;
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
}`,Gw=`uniform vec3 diffuse;
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
}`,Ww=`#include <common>
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
}`,jw=`uniform vec3 diffuse;
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
}`,Xw=`#define LAMBERT
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
}`,qw=`#define LAMBERT
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
}`,Yw=`#define MATCAP
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
}`,$w=`#define MATCAP
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
}`,Kw=`#define NORMAL
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
}`,Zw=`#define NORMAL
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
}`,Jw=`#define PHONG
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
}`,Qw=`#define PHONG
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
}`,eE=`#define STANDARD
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
}`,tE=`#define STANDARD
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
}`,nE=`#define TOON
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
}`,iE=`#define TOON
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
}`,rE=`uniform float size;
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
}`,sE=`uniform vec3 diffuse;
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
}`,oE=`#include <common>
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
}`,aE=`uniform vec3 color;
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
}`,lE=`uniform float rotation;
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
}`,uE=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:L1,alphahash_pars_fragment:N1,alphamap_fragment:D1,alphamap_pars_fragment:I1,alphatest_fragment:U1,alphatest_pars_fragment:F1,aomap_fragment:k1,aomap_pars_fragment:O1,batching_pars_vertex:z1,batching_vertex:B1,begin_vertex:V1,beginnormal_vertex:H1,bsdfs:G1,iridescence_fragment:W1,bumpmap_pars_fragment:j1,clipping_planes_fragment:X1,clipping_planes_pars_fragment:q1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:$1,color_fragment:K1,color_pars_fragment:Z1,color_pars_vertex:J1,color_vertex:Q1,common:eM,cube_uv_reflection_fragment:tM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:oM,colorspace_fragment:aM,colorspace_pars_fragment:lM,envmap_fragment:uM,envmap_common_pars_fragment:cM,envmap_pars_fragment:fM,envmap_pars_vertex:hM,envmap_physical_pars_fragment:wM,envmap_vertex:dM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:vM,gradientmap_pars_fragment:xM,lightmap_pars_fragment:_M,lights_lambert_fragment:yM,lights_lambert_pars_fragment:SM,lights_pars_begin:MM,lights_toon_fragment:EM,lights_toon_pars_fragment:TM,lights_phong_fragment:AM,lights_phong_pars_fragment:CM,lights_physical_fragment:RM,lights_physical_pars_fragment:bM,lights_fragment_begin:PM,lights_fragment_maps:LM,lights_fragment_end:NM,logdepthbuf_fragment:DM,logdepthbuf_pars_fragment:IM,logdepthbuf_pars_vertex:UM,logdepthbuf_vertex:FM,map_fragment:kM,map_pars_fragment:OM,map_particle_fragment:zM,map_particle_pars_fragment:BM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:HM,morphinstance_vertex:GM,morphcolor_vertex:WM,morphnormal_vertex:jM,morphtarget_pars_vertex:XM,morphtarget_vertex:qM,normal_fragment_begin:YM,normal_fragment_maps:$M,normal_pars_fragment:KM,normal_pars_vertex:ZM,normal_vertex:JM,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:ew,clearcoat_normal_fragment_maps:tw,clearcoat_pars_fragment:nw,iridescence_pars_fragment:iw,opaque_fragment:rw,packing:sw,premultiplied_alpha_fragment:ow,project_vertex:aw,dithering_fragment:lw,dithering_pars_fragment:uw,roughnessmap_fragment:cw,roughnessmap_pars_fragment:fw,shadowmap_pars_fragment:hw,shadowmap_pars_vertex:dw,shadowmap_vertex:pw,shadowmask_pars_fragment:mw,skinbase_vertex:gw,skinning_pars_vertex:vw,skinning_vertex:xw,skinnormal_vertex:_w,specularmap_fragment:yw,specularmap_pars_fragment:Sw,tonemapping_fragment:Mw,tonemapping_pars_fragment:ww,transmission_fragment:Ew,transmission_pars_fragment:Tw,uv_pars_fragment:Aw,uv_pars_vertex:Cw,uv_vertex:Rw,worldpos_vertex:bw,background_vert:Pw,background_frag:Lw,backgroundCube_vert:Nw,backgroundCube_frag:Dw,cube_vert:Iw,cube_frag:Uw,depth_vert:Fw,depth_frag:kw,distanceRGBA_vert:Ow,distanceRGBA_frag:zw,equirect_vert:Bw,equirect_frag:Vw,linedashed_vert:Hw,linedashed_frag:Gw,meshbasic_vert:Ww,meshbasic_frag:jw,meshlambert_vert:Xw,meshlambert_frag:qw,meshmatcap_vert:Yw,meshmatcap_frag:$w,meshnormal_vert:Kw,meshnormal_frag:Zw,meshphong_vert:Jw,meshphong_frag:Qw,meshphysical_vert:eE,meshphysical_frag:tE,meshtoon_vert:nE,meshtoon_frag:iE,points_vert:rE,points_frag:sE,shadow_vert:oE,shadow_frag:aE,sprite_vert:lE,sprite_frag:uE},ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ii={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ii.physical={uniforms:Yt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Za={r:0,b:0,g:0},xr=new ui,cE=new He;function fE(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function _(v){let x=!1;const S=g(v);S===null?f(a,l):S&&S.isColor&&(f(S,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Cu)?(c===void 0&&(c=new We(new Or(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:qs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),xr.copy(x.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(xr)),c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==lt,(h!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new We(new oi(2,2),new Dt({name:"BackgroundMaterial",uniforms:qs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function f(v,x){v.getRGB(Za,fx(t)),i.buffers.color.setClear(Za.r,Za.g,Za.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:_,addToRenderList:m}}function hE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,M,I,z,V){let $=!1;const H=h(z,I,M);s!==H&&(s=H,u(s.object)),$=p(y,z,I,V),$&&g(y,z,I,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,M,I,z),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function c(y){return t.deleteVertexArray(y)}function h(y,M,I){const z=I.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let $=V[M.id];$===void 0&&($={},V[M.id]=$);let H=$[z];return H===void 0&&(H=d(l()),$[z]=H),H}function d(y){const M=[],I=[],z=[];for(let V=0;V<n;V++)M[V]=0,I[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:I,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,M,I,z){const V=s.attributes,$=M.attributes;let H=0;const Y=I.getAttributes();for(const N in Y)if(Y[N].location>=0){const Q=V[N];let oe=$[N];if(oe===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function g(y,M,I,z){const V={},$=M.attributes;let H=0;const Y=I.getAttributes();for(const N in Y)if(Y[N].location>=0){let Q=$[N];Q===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),V[N]=oe,H++}s.attributes=V,s.attributesNum=H,s.index=z}function _(){const y=s.newAttributes;for(let M=0,I=y.length;M<I;M++)y[M]=0}function m(y){f(y,0)}function f(y,M){const I=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;I[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),V[y]!==M&&(t.vertexAttribDivisor(y,M),V[y]=M)}function v(){const y=s.newAttributes,M=s.enabledAttributes;for(let I=0,z=M.length;I<z;I++)M[I]!==y[I]&&(t.disableVertexAttribArray(I),M[I]=0)}function x(y,M,I,z,V,$,H){H===!0?t.vertexAttribIPointer(y,M,I,V,$):t.vertexAttribPointer(y,M,I,z,V,$)}function S(y,M,I,z){_();const V=z.attributes,$=I.getAttributes(),H=M.defaultAttributeValues;for(const Y in $){const N=$[Y];if(N.location>=0){let K=V[Y];if(K===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const Q=K.normalized,oe=K.itemSize,Ae=e.get(K);if(Ae===void 0)continue;const Ve=Ae.buffer,q=Ae.type,te=Ae.bytesPerElement,ue=q===t.INT||q===t.UNSIGNED_INT||K.gpuType===Nd;if(K.isInterleavedBufferAttribute){const ce=K.data,Re=ce.stride,X=K.offset;if(ce.isInstancedInterleavedBuffer){for(let Te=0;Te<N.locationSize;Te++)f(N.location+Te,ce.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Te=0;Te<N.locationSize;Te++)m(N.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Te=0;Te<N.locationSize;Te++)x(N.location+Te,oe/N.locationSize,q,Q,Re*te,(X+oe/N.locationSize*Te)*te,ue)}else{if(K.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)f(N.location+ce,K.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<N.locationSize;ce++)m(N.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ce=0;ce<N.locationSize;ce++)x(N.location+ce,oe/N.locationSize,q,Q,oe*te,oe/N.locationSize*ce*te,ue)}}else if(H!==void 0){const Q=H[Y];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(N.location,Q);break;case 3:t.vertexAttrib3fv(N.location,Q);break;case 4:t.vertexAttrib4fv(N.location,Q);break;default:t.vertexAttrib1fv(N.location,Q)}}}}v()}function R(){A();for(const y in i){const M=i[y];for(const I in M){const z=M[I];for(const V in z)c(z[V].object),delete z[V];delete M[I]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const I in M){const z=M[I];for(const V in z)c(z[V].object),delete z[V];delete M[I]}delete i[y.id]}function T(y){for(const M in i){const I=i[M];if(I[y.id]===void 0)continue;const z=I[y.id];for(const V in z)c(z[V].object),delete z[V];delete I[y.id]}}function A(){k(),o=!0,s!==r&&(s=r,u(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:k,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function dE(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,h){h!==0&&(t.drawArraysInstanced(i,u,c,h),n.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];n.update(p,i,1)}function l(u,c,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_];for(let _=0;_<d.length;_++)n.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Yn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Pi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==qn&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:R,maxSamples:C}}function mE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=f.clippingState||null;l.value=S,S=c(g,d,x,p);for(let R=0;R!==x;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function gE(t){let e=new WeakMap;function n(o,a){return a===Jf?o.mapping=Gs:a===Qf&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jf||a===Qf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new C1(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rh extends hx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ss=4,km=[.125,.215,.35,.446,.526,.582],Ar=20,Nc=new Rh,Om=new $e;let Dc=null,Ic=0,Uc=0,Fc=!1;const Er=(1+Math.sqrt(5))/2,ss=1/Er,zm=[new D(-Er,ss,0),new D(Er,ss,0),new D(-ss,0,Er),new D(ss,0,Er),new D(0,Er,-ss),new D(0,Er,ss),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Dc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Ic,Uc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Js,format:Yn,colorSpace:Ni,depthBuffer:!1},r=Vm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vE(s)),this._blurMaterial=xE(s,e,n)}return r}_compileMaterial(e){const n=new We(this._lodPlanes[0],e);this._renderer.compile(n,Nc)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Om),c.toneMapping=Ti,c.autoClear=!1;const p=new Vd({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new We(new Or,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Om),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;Ja(r,v*x,f>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Nc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=zm[(r-s-1)%zm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new We(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Ar;m>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const f=[];let v=0;for(let T=0;T<Ar;++T){const A=T/_,k=Math.exp(-A*A/2);f.push(k),T===0?v+=k:T<m&&(v+=2*k)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[r],R=3*S*(r>x-Ss?r-x+Ss:0),C=4*(this._cubeSize-S);Ja(n,R,C,3*S,2*S),l.setRenderTarget(n),l.render(h,Nc)}}function vE(t){const e=[],n=[],i=[];let r=t;const s=t-Ss+1+km.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ss?l=km[o-t+Ss-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,A=C>2?0:-1,k=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(k,_*g*C),x.set(d,m*g*C);const y=[C,C,C,C,C,C];S.set(y,f*g*C)}const R=new qt;R.setAttribute("position",new en(v,_)),R.setAttribute("uv",new en(x,m)),R.setAttribute("faceIndex",new en(S,f)),e.push(R),r>Ss&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vm(t,e,n){const i=new Ln(t,e,n);return i.texture.mapping=Cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xE(t,e,n){const i=new Float32Array(Ar),r=new D(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Hm(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Gm(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Hd(){return`

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
	`}function _E(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Jf||l===Qf,c=l===Gs||l===Ws;if(u||c){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Bm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new Bm(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function yE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Al("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function SE(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,S=v.length;x<S;x+=3){const R=v[x+0],C=v[x+1],T=v[x+2];d.push(R,C,C,T,T,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const R=x+0,C=x+1,T=x+2;d.push(R,C,C,T,T,R)}}else return;const m=new(rx(d)?cx:ux)(d,1);m.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function ME(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function c(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function h(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v];for(let v=0;v<_.length;v++)n.update(f,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function wE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function EE(t,e,n){const i=new WeakMap,r=new dt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*C*4*h),A=new ox(T,R,C,h);A.type=qn,A.needsUpdate=!0;const k=S*4;for(let M=0;M<h;M++){const I=f[M],z=v[M],V=x[M],$=R*C*4*M;for(let H=0;H<I.count;H++){const Y=H*k;g===!0&&(r.fromBufferAttribute(I,H),T[$+Y+0]=r.x,T[$+Y+1]=r.y,T[$+Y+2]=r.z,T[$+Y+3]=0),_===!0&&(r.fromBufferAttribute(z,H),T[$+Y+4]=r.x,T[$+Y+5]=r.y,T[$+Y+6]=r.z,T[$+Y+7]=0),m===!0&&(r.fromBufferAttribute(V,H),T[$+Y+8]=r.x,T[$+Y+9]=r.y,T[$+Y+10]=r.z,T[$+Y+11]=V.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new _e(R,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function TE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Gd extends Ot{constructor(e,n,i,r,s,o,a,l,u,c=Ps){if(c!==Ps&&c!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ps&&(i=ur),i===void 0&&c===Xs&&(i=js),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const gx=new Ot,Wm=new Gd(1,1),vx=new ox,xx=new f1,_x=new dx,jm=[],Xm=[],qm=new Float32Array(16),Ym=new Float32Array(9),$m=new Float32Array(4);function io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=jm[r];if(s===void 0&&(s=new Float32Array(r),jm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bu(t,e){let n=Xm[e];n===void 0&&(n=new Int32Array(e),Xm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function AE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function PE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;$m.set(i),t.uniformMatrix2fv(this.addr,!1,$m),bt(n,i)}}function LE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Ym.set(i),t.uniformMatrix3fv(this.addr,!1,Ym),bt(n,i)}}function NE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;qm.set(i),t.uniformMatrix4fv(this.addr,!1,qm),bt(n,i)}}function DE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function kE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Wm.compareFunction=ix,s=Wm):s=gx,n.setTexture2D(e||s,r)}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xx,r)}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_x,r)}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||vx,r)}function jE(t){switch(t){case 5126:return AE;case 35664:return CE;case 35665:return RE;case 35666:return bE;case 35674:return PE;case 35675:return LE;case 35676:return NE;case 5124:case 35670:return DE;case 35667:case 35671:return IE;case 35668:case 35672:return UE;case 35669:case 35673:return FE;case 5125:return kE;case 36294:return OE;case 36295:return zE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return WE}}function XE(t,e){t.uniform1fv(this.addr,e)}function qE(t,e){const n=io(e,this.size,2);t.uniform2fv(this.addr,n)}function YE(t,e){const n=io(e,this.size,3);t.uniform3fv(this.addr,n)}function $E(t,e){const n=io(e,this.size,4);t.uniform4fv(this.addr,n)}function KE(t,e){const n=io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZE(t,e){const n=io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JE(t,e){const n=io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QE(t,e){t.uniform1iv(this.addr,e)}function eT(t,e){t.uniform2iv(this.addr,e)}function tT(t,e){t.uniform3iv(this.addr,e)}function nT(t,e){t.uniform4iv(this.addr,e)}function iT(t,e){t.uniform1uiv(this.addr,e)}function rT(t,e){t.uniform2uiv(this.addr,e)}function sT(t,e){t.uniform3uiv(this.addr,e)}function oT(t,e){t.uniform4uiv(this.addr,e)}function aT(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||gx,s[o])}function lT(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||xx,s[o])}function uT(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||_x,s[o])}function cT(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||vx,s[o])}function fT(t){switch(t){case 5126:return XE;case 35664:return qE;case 35665:return YE;case 35666:return $E;case 35674:return KE;case 35675:return ZE;case 35676:return JE;case 5124:case 35670:return QE;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return rT;case 36295:return sT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return cT}}class hT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jE(n.type)}}class dT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fT(n.type)}}class pT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function Km(t,e){t.seq.push(e),t.map[e.id]=e}function mT(t,e,n){const i=t.name,r=i.length;for(kc.lastIndex=0;;){const s=kc.exec(i),o=kc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Km(n,u===void 0?new hT(a,t,e):new dT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new pT(a),Km(n,h)),n=h}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);mT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gT=37297;let vT=0;function xT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function _T(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===iu&&n===nu?i="LinearDisplayP3ToLinearSRGB":e===nu&&n===iu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ni:case Ru:return[i,"LinearTransferOETF"];case ni:case zd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xT(t.getShaderSource(e),o)}else return r}function yT(t,e){const n=_T(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ST(t,e){let n;switch(e){case FS:n="Linear";break;case kS:n="Reinhard";break;case OS:n="Cineon";break;case zS:n="ACESFilmic";break;case VS:n="AgX";break;case HS:n="Neutral";break;case BS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qa=new D;function MT(){Qe.getLuminanceCoefficients(Qa);const t=Qa.x.toFixed(4),e=Qa.y.toFixed(4),n=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function ET(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function TT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function Qm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(t){return t.replace(AT,RT)}const CT=new Map;function RT(t,e){let n=ze[e];if(n===void 0){const i=CT.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bh(n)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(t){return t.replace(bT,PT)}function PT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function n0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function LT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===jv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function NT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function IT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xv:e="ENVMAP_BLENDING_MULTIPLY";break;case IS:e="ENVMAP_BLENDING_MIX";break;case US:e="ENVMAP_BLENDING_ADD";break}return e}function UT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function FT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=LT(n),u=NT(n),c=DT(n),h=IT(n),d=UT(n),p=wT(n),g=ET(s),_=r.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),f.length>0&&(f+=`
`)):(m=[n0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),f=[n0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ti?ST("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,yT("linearToOutputTexel",n.outputColorSpace),MT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=bh(o),o=Qm(o,n),o=e0(o,n),a=bh(a),a=Qm(a,n),a=e0(a,n),o=t0(o),a=t0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+o,S=v+f+a,R=Zm(r,r.VERTEX_SHADER,x),C=Zm(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(M){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(C).trim();let $=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,C);else{const Y=Jm(r,R,"vertex"),N=Jm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+I+`
`+Y+`
`+N)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||V==="")&&(H=!1);H&&(M.diagnostics={runnable:$,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:f}})}r.deleteShader(R),r.deleteShader(C),A=new Cl(r,_),k=TT(r,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let k;this.getAttributes=function(){return k===void 0&&T(this),k};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,gT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let kT=0;class OT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zT(e),n.set(e,i)),i}}class zT{constructor(e){this.id=kT++,this.code=e,this.usedTimes=0}}function BT(t,e,n,i,r,s,o){const a=new ax,l=new OT,u=new Set,c=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function f(y,M,I,z,V){const $=z.fog,H=V.geometry,Y=y.isMeshStandardMaterial?z.environment:null,N=(y.isMeshStandardMaterial?n:e).get(y.envMap||Y),K=N&&N.mapping===Cu?N.image.height:null,Q=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ae=oe!==void 0?oe.length:0;let Ve=0;H.morphAttributes.position!==void 0&&(Ve=1),H.morphAttributes.normal!==void 0&&(Ve=2),H.morphAttributes.color!==void 0&&(Ve=3);let q,te,ue,ce;if(Q){const sn=ii[Q];q=sn.vertexShader,te=sn.fragmentShader}else q=y.vertexShader,te=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const Re=t.getRenderTarget(),X=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,Ce=!!y.map,Fe=!!y.matcap,L=!!N,nt=!!y.aoMap,Ue=!!y.lightMap,Be=!!y.bumpMap,be=!!y.normalMap,it=!!y.displacementMap,Pe=!!y.emissiveMap,b=!!y.metalnessMap,w=!!y.roughnessMap,B=y.anisotropy>0,J=y.clearcoat>0,ne=y.dispersion>0,Z=y.iridescence>0,Me=y.sheen>0,le=y.transmission>0,ge=B&&!!y.anisotropyMap,Ye=J&&!!y.clearcoatMap,re=J&&!!y.clearcoatNormalMap,ve=J&&!!y.clearcoatRoughnessMap,De=Z&&!!y.iridescenceMap,Ie=Z&&!!y.iridescenceThicknessMap,xe=Me&&!!y.sheenColorMap,je=Me&&!!y.sheenRoughnessMap,ke=!!y.specularMap,rt=!!y.specularColorMap,U=!!y.specularIntensityMap,de=le&&!!y.transmissionMap,j=le&&!!y.thicknessMap,ee=!!y.gradientMap,fe=!!y.alphaMap,pe=y.alphaTest>0,Xe=!!y.alphaHash,wt=!!y.extensions;let rn=Ti;y.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(rn=t.toneMapping);const Ke={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:te,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:X,instancingColor:X&&V.instanceColor!==null,instancingMorph:X&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Re===null?t.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ni,alphaToCoverage:!!y.alphaToCoverage,map:Ce,matcap:Fe,envMap:L,envMapMode:L&&N.mapping,envMapCubeUVHeight:K,aoMap:nt,lightMap:Ue,bumpMap:Be,normalMap:be,displacementMap:p&&it,emissiveMap:Pe,normalMapObjectSpace:be&&y.normalMapType===qS,normalMapTangentSpace:be&&y.normalMapType===XS,metalnessMap:b,roughnessMap:w,anisotropy:B,anisotropyMap:ge,clearcoat:J,clearcoatMap:Ye,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:ne,iridescence:Z,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:Me,sheenColorMap:xe,sheenRoughnessMap:je,specularMap:ke,specularColorMap:rt,specularIntensityMap:U,transmission:le,transmissionMap:de,thicknessMap:j,gradientMap:ee,opaque:y.transparent===!1&&y.blending===bs&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:pe,alphaHash:Xe,combine:y.combine,mapUv:Ce&&m(y.map.channel),aoMapUv:nt&&m(y.aoMap.channel),lightMapUv:Ue&&m(y.lightMap.channel),bumpMapUv:Be&&m(y.bumpMap.channel),normalMapUv:be&&m(y.normalMap.channel),displacementMapUv:it&&m(y.displacementMap.channel),emissiveMapUv:Pe&&m(y.emissiveMap.channel),metalnessMapUv:b&&m(y.metalnessMap.channel),roughnessMapUv:w&&m(y.roughnessMap.channel),anisotropyMapUv:ge&&m(y.anisotropyMap.channel),clearcoatMapUv:Ye&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:je&&m(y.sheenRoughnessMap.channel),specularMapUv:ke&&m(y.specularMap.channel),specularColorMapUv:rt&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:de&&m(y.transmissionMap.channel),thicknessMapUv:j&&m(y.thicknessMap.channel),alphaMapUv:fe&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(be||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(Ce||fe),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:rn,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:wt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&y.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function v(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function x(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const M=_[y.type];let I;if(M){const z=ii[M];I=w1.clone(z.uniforms)}else I=y.uniforms;return I}function C(y,M){let I;for(let z=0,V=c.length;z<V;z++){const $=c[z];if($.cacheKey===M){I=$,++I.usedTimes;break}}return I===void 0&&(I=new FT(t,M,y,s),c.push(I)),I}function T(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:R,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:k}}function VT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function HT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function i0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function r0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,g,_,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||HT),i.length>1&&i.sort(d||i0),r.length>1&&r.sort(d||i0)}function c(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function GT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new r0,t.set(i,[o])):r>=s.length?(o=new r0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new $e};break;case"SpotLight":n={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function jT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XT=0;function qT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YT(t){const e=new WT,n=jT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,s=new He,o=new He;function a(u){let c=0,h=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,x=0,S=0,R=0,C=0,T=0;u.sort(qT);for(let k=0,y=u.length;k<y;k++){const M=u[k],I=M.color,z=M.intensity,V=M.distance,$=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=I.r*z,h+=I.g*z,d+=I.b*z;else if(M.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(M.sh.coefficients[H],z);T++}else if(M.isDirectionalLight){const H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Y=M.shadow,N=n.get(M);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=M.shadow.matrix,v++}i.directional[p]=H,p++}else if(M.isSpotLight){const H=e.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(I).multiplyScalar(z),H.distance=V,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,i.spot[_]=H;const Y=M.shadow;if(M.map&&(i.spotLightMap[R]=M.map,R++,Y.updateMatrices(M),M.castShadow&&C++),i.spotLightMatrix[_]=Y.matrix,M.castShadow){const N=n.get(M);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=$,S++}_++}else if(M.isRectAreaLight){const H=e.get(M);H.color.copy(I).multiplyScalar(z),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=H,m++}else if(M.isPointLight){const H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const Y=M.shadow,N=n.get(M);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=M.shadow.matrix,x++}i.point[g]=H,g++}else if(M.isHemisphereLight){const H=e.get(M);H.skyColor.copy(M.color).multiplyScalar(z),H.groundColor.copy(M.groundColor).multiplyScalar(z),i.hemi[f]=H,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==v||A.numPointShadows!==x||A.numSpotShadows!==S||A.numSpotMaps!==R||A.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=v,A.numPointShadows=x,A.numSpotShadows=S,A.numSpotMaps=R,A.numLightProbes=T,i.version=XT++)}function l(u,c){let h=0,d=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let f=0,v=u.length;f<v;f++){const x=u[f];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function s0(t){const e=new YT(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $T(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new s0(t),e.set(r,[a])):s>=o.length?(a=new s0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class KT extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZT extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QT=`uniform sampler2D shadow_pass;
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
}`;function eA(t,e,n){let i=new px;const r=new _e,s=new _e,o=new dt,a=new KT({depthPacking:jS}),l=new ZT,u={},c=n.maxTextureSize,h={[lr]:Jt,[Jt]:lr,[jn]:jn},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:JT,fragmentShader:QT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jv;let f=this.type;this.render=function(C,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const k=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),I=t.state;I.setBlending(rr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=f!==xi&&this.type===xi,V=f===xi&&this.type!==xi;for(let $=0,H=C.length;$<H;$++){const Y=C[$],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||z===!0||V===!0){const oe=this.type!==xi?{minFilter:cn,magFilter:cn}:{};N.map!==null&&N.map.dispose(),N.map=new Ln(r.x,r.y,oe),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Q=N.getViewportCount();for(let oe=0;oe<Q;oe++){const Ae=N.getViewport(oe);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),I.viewport(o),N.updateMatrices(Y,oe),i=N.getFrustum(),S(T,A,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===xi&&v(N,A),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(k,y,M)};function v(C,T){const A=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ln(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,A,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,A,p,_,null)}function x(C,T,A,k){let y=null;const M=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(M!==void 0)y=M;else if(y=A.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=y.uuid,z=T.uuid;let V=u[I];V===void 0&&(V={},u[I]=V);let $=V[z];$===void 0&&($=y.clone(),V[z]=$,T.addEventListener("dispose",R)),y=$}if(y.visible=T.visible,y.wireframe=T.wireframe,k===xi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=t.properties.get(y);I.light=A}return y}function S(C,T,A,k,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===xi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const z=e.update(C),V=C.material;if(Array.isArray(V)){const $=z.groups;for(let H=0,Y=$.length;H<Y;H++){const N=$[H],K=V[N.materialIndex];if(K&&K.visible){const Q=x(C,K,k,y);C.onBeforeShadow(t,C,T,A,z,Q,N),t.renderBufferDirect(A,null,z,Q,C,N),C.onAfterShadow(t,C,T,A,z,Q,N)}}}else if(V.visible){const $=x(C,V,k,y);C.onBeforeShadow(t,C,T,A,z,$,null),t.renderBufferDirect(A,null,z,$,C,null),C.onAfterShadow(t,C,T,A,z,$,null)}}const I=C.children;for(let z=0,V=I.length;z<V;z++)S(I[z],T,A,k,y)}function R(C){C.target.removeEventListener("dispose",R);for(const A in u){const k=u[A],y=C.target.uuid;y in k&&(k[y].dispose(),delete k[y])}}}const tA={[Xf]:ia,[qf]:Kf,[Yf]:Zf,[Hs]:$f,[ia]:Xf,[Kf]:qf,[Zf]:Yf,[$f]:Hs};function nA(t){function e(){let U=!1;const de=new dt;let j=null;const ee=new dt(0,0,0,0);return{setMask:function(fe){j!==fe&&!U&&(t.colorMask(fe,fe,fe,fe),j=fe)},setLocked:function(fe){U=fe},setClear:function(fe,pe,Xe,wt,rn){rn===!0&&(fe*=wt,pe*=wt,Xe*=wt),de.set(fe,pe,Xe,wt),ee.equals(de)===!1&&(t.clearColor(fe,pe,Xe,wt),ee.copy(de))},reset:function(){U=!1,j=null,ee.set(-1,0,0,0)}}}function n(){let U=!1,de=!1,j=null,ee=null,fe=null;return{setReversed:function(pe){de=pe},setTest:function(pe){pe?ue(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(pe){j!==pe&&!U&&(t.depthMask(pe),j=pe)},setFunc:function(pe){if(de&&(pe=tA[pe]),ee!==pe){switch(pe){case Xf:t.depthFunc(t.NEVER);break;case ia:t.depthFunc(t.ALWAYS);break;case qf:t.depthFunc(t.LESS);break;case Hs:t.depthFunc(t.LEQUAL);break;case Yf:t.depthFunc(t.EQUAL);break;case $f:t.depthFunc(t.GEQUAL);break;case Kf:t.depthFunc(t.GREATER);break;case Zf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=pe}},setLocked:function(pe){U=pe},setClear:function(pe){fe!==pe&&(t.clearDepth(pe),fe=pe)},reset:function(){U=!1,j=null,ee=null,fe=null}}}function i(){let U=!1,de=null,j=null,ee=null,fe=null,pe=null,Xe=null,wt=null,rn=null;return{setTest:function(Ke){U||(Ke?ue(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ke){de!==Ke&&!U&&(t.stencilMask(Ke),de=Ke)},setFunc:function(Ke,sn,fi){(j!==Ke||ee!==sn||fe!==fi)&&(t.stencilFunc(Ke,sn,fi),j=Ke,ee=sn,fe=fi)},setOp:function(Ke,sn,fi){(pe!==Ke||Xe!==sn||wt!==fi)&&(t.stencilOp(Ke,sn,fi),pe=Ke,Xe=sn,wt=fi)},setLocked:function(Ke){U=Ke},setClear:function(Ke){rn!==Ke&&(t.clearStencil(Ke),rn=Ke)},reset:function(){U=!1,de=null,j=null,ee=null,fe=null,pe=null,Xe=null,wt=null,rn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,v=null,x=null,S=null,R=null,C=new $e(0,0,0),T=0,A=!1,k=null,y=null,M=null,I=null,z=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=H>=2);let N=null,K={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Ae=new dt().fromArray(Q),Ve=new dt().fromArray(oe);function q(U,de,j,ee){const fe=new Uint8Array(4),pe=t.createTexture();t.bindTexture(U,pe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<j;Xe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(de+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return pe}const te={};te[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Hs),Ue(!1),Be(pm),ue(t.CULL_FACE),L(rr);function ue(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function ce(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Re(U,de){return c[U]!==de?(t.bindFramebuffer(U,de),c[U]=de,U===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=de),U===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=de),!0):!1}function X(U,de){let j=d,ee=!1;if(U){j=h.get(de),j===void 0&&(j=[],h.set(de,j));const fe=U.textures;if(j.length!==fe.length||j[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Xe=fe.length;pe<Xe;pe++)j[pe]=t.COLOR_ATTACHMENT0+pe;j.length=fe.length,ee=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,ee=!0);ee&&t.drawBuffers(j)}function Te(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const Ce={[Tr]:t.FUNC_ADD,[vS]:t.FUNC_SUBTRACT,[xS]:t.FUNC_REVERSE_SUBTRACT};Ce[_S]=t.MIN,Ce[yS]=t.MAX;const Fe={[SS]:t.ZERO,[MS]:t.ONE,[wS]:t.SRC_COLOR,[Wf]:t.SRC_ALPHA,[bS]:t.SRC_ALPHA_SATURATE,[CS]:t.DST_COLOR,[TS]:t.DST_ALPHA,[ES]:t.ONE_MINUS_SRC_COLOR,[jf]:t.ONE_MINUS_SRC_ALPHA,[RS]:t.ONE_MINUS_DST_COLOR,[AS]:t.ONE_MINUS_DST_ALPHA,[PS]:t.CONSTANT_COLOR,[LS]:t.ONE_MINUS_CONSTANT_COLOR,[NS]:t.CONSTANT_ALPHA,[DS]:t.ONE_MINUS_CONSTANT_ALPHA};function L(U,de,j,ee,fe,pe,Xe,wt,rn,Ke){if(U===rr){g===!0&&(ce(t.BLEND),g=!1);return}if(g===!1&&(ue(t.BLEND),g=!0),U!==gS){if(U!==_||Ke!==A){if((m!==Tr||x!==Tr)&&(t.blendEquation(t.FUNC_ADD),m=Tr,x=Tr),Ke)switch(U){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gf:t.blendFunc(t.ONE,t.ONE);break;case mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,v=null,S=null,R=null,C.set(0,0,0),T=0,_=U,A=Ke}return}fe=fe||de,pe=pe||j,Xe=Xe||ee,(de!==m||fe!==x)&&(t.blendEquationSeparate(Ce[de],Ce[fe]),m=de,x=fe),(j!==f||ee!==v||pe!==S||Xe!==R)&&(t.blendFuncSeparate(Fe[j],Fe[ee],Fe[pe],Fe[Xe]),f=j,v=ee,S=pe,R=Xe),(wt.equals(C)===!1||rn!==T)&&(t.blendColor(wt.r,wt.g,wt.b,rn),C.copy(wt),T=rn),_=U,A=!1}function nt(U,de){U.side===jn?ce(t.CULL_FACE):ue(t.CULL_FACE);let j=U.side===Jt;de&&(j=!j),Ue(j),U.blending===bs&&U.transparent===!1?L(rr):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ee=U.stencilWrite;o.setTest(ee),ee&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),it(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){k!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),k=U)}function Be(U){U!==dS?(ue(t.CULL_FACE),U!==y&&(U===pm?t.cullFace(t.BACK):U===pS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),y=U}function be(U){U!==M&&($&&t.lineWidth(U),M=U)}function it(U,de,j){U?(ue(t.POLYGON_OFFSET_FILL),(I!==de||z!==j)&&(t.polygonOffset(de,j),I=de,z=j)):ce(t.POLYGON_OFFSET_FILL)}function Pe(U){U?ue(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function b(U){U===void 0&&(U=t.TEXTURE0+V-1),N!==U&&(t.activeTexture(U),N=U)}function w(U,de,j){j===void 0&&(N===null?j=t.TEXTURE0+V-1:j=N);let ee=K[j];ee===void 0&&(ee={type:void 0,texture:void 0},K[j]=ee),(ee.type!==U||ee.texture!==de)&&(N!==j&&(t.activeTexture(j),N=j),t.bindTexture(U,de||te[U]),ee.type=U,ee.texture=de)}function B(){const U=K[N];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){Ae.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ae.copy(U))}function xe(U){Ve.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function je(U,de){let j=l.get(de);j===void 0&&(j=new WeakMap,l.set(de,j));let ee=j.get(U);ee===void 0&&(ee=t.getUniformBlockIndex(de,U.name),j.set(U,ee))}function ke(U,de){const ee=l.get(de).get(U);a.get(de)!==ee&&(t.uniformBlockBinding(de,ee,U.__bindingPointIndex),a.set(de,ee))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},N=null,K={},c={},h=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,v=null,x=null,S=null,R=null,C=new $e(0,0,0),T=0,A=!1,k=null,y=null,M=null,I=null,z=null,Ae.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:ce,bindFramebuffer:Re,drawBuffers:X,useProgram:Te,setBlending:L,setMaterial:nt,setFlipSided:Ue,setCullFace:Be,setLineWidth:be,setPolygonOffset:it,setScissorTest:Pe,activeTexture:b,bindTexture:w,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:ve,texImage3D:De,updateUBOMapping:je,uniformBlockBinding:ke,texStorage2D:Ye,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Ie,viewport:xe,reset:rt}}function o0(t,e,n,i){const r=iA(i);switch(n){case Zv:return t*e;case Qv:return t*e;case ex:return t*e*2;case Ud:return t*e/r.components*r.byteLength;case Fd:return t*e/r.components*r.byteLength;case tx:return t*e*2/r.components*r.byteLength;case kd:return t*e*2/r.components*r.byteLength;case Jv:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Od:return t*e*4/r.components*r.byteLength;case Sl:case Ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nh:case rh:return Math.max(t,16)*Math.max(e,8)/4;case th:case ih:return Math.max(t,8)*Math.max(e,8)/2;case sh:case oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ch:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case yh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Mh:case wh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nx:case Eh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Th:case Ah:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iA(t){switch(t){case Pi:case Yv:return{byteLength:1,components:1};case ra:case $v:case Js:return{byteLength:2,components:1};case Dd:case Id:return{byteLength:2,components:4};case ur:case Nd:case qn:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function rA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new _e,c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,w){return p?new OffscreenCanvas(b,w):sa("canvas")}function _(b,w,B){let J=1;const ne=Pe(b);if((ne.width>B||ne.height>B)&&(J=B/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(J*ne.width),Me=Math.floor(J*ne.height);h===void 0&&(h=g(Z,Me));const le=w?g(Z,Me):h;return le.width=Z,le.height=Me,le.getContext("2d").drawImage(b,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Me+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==cn&&b.minFilter!==Kt}function f(b){t.generateMipmap(b)}function v(b,w,B,J,ne=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=w;if(w===t.RED&&(B===t.FLOAT&&(Z=t.R32F),B===t.HALF_FLOAT&&(Z=t.R16F),B===t.UNSIGNED_BYTE&&(Z=t.R8)),w===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.R8UI),B===t.UNSIGNED_SHORT&&(Z=t.R16UI),B===t.UNSIGNED_INT&&(Z=t.R32UI),B===t.BYTE&&(Z=t.R8I),B===t.SHORT&&(Z=t.R16I),B===t.INT&&(Z=t.R32I)),w===t.RG&&(B===t.FLOAT&&(Z=t.RG32F),B===t.HALF_FLOAT&&(Z=t.RG16F),B===t.UNSIGNED_BYTE&&(Z=t.RG8)),w===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RG8UI),B===t.UNSIGNED_SHORT&&(Z=t.RG16UI),B===t.UNSIGNED_INT&&(Z=t.RG32UI),B===t.BYTE&&(Z=t.RG8I),B===t.SHORT&&(Z=t.RG16I),B===t.INT&&(Z=t.RG32I)),w===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),B===t.UNSIGNED_INT&&(Z=t.RGB32UI),B===t.BYTE&&(Z=t.RGB8I),B===t.SHORT&&(Z=t.RGB16I),B===t.INT&&(Z=t.RGB32I)),w===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),B===t.UNSIGNED_INT&&(Z=t.RGBA32UI),B===t.BYTE&&(Z=t.RGBA8I),B===t.SHORT&&(Z=t.RGBA16I),B===t.INT&&(Z=t.RGBA32I)),w===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),w===t.RGBA){const Me=ne?tu:Qe.getTransfer(J);B===t.FLOAT&&(Z=t.RGBA32F),B===t.HALF_FLOAT&&(Z=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Z=Me===lt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(b,w){let B;return b?w===null||w===ur||w===js?B=t.DEPTH24_STENCIL8:w===qn?B=t.DEPTH32F_STENCIL8:w===ra&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ur||w===js?B=t.DEPTH_COMPONENT24:w===qn?B=t.DEPTH_COMPONENT32F:w===ra&&(B=t.DEPTH_COMPONENT16),B}function S(b,w){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==cn&&b.minFilter!==Kt?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function R(b){const w=b.target;w.removeEventListener("dispose",R),T(w),w.isVideoTexture&&c.delete(w)}function C(b){const w=b.target;w.removeEventListener("dispose",C),k(w)}function T(b){const w=i.get(b);if(w.__webglInit===void 0)return;const B=b.source,J=d.get(B);if(J){const ne=J[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(b),Object.keys(J).length===0&&d.delete(B)}i.remove(b)}function A(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const B=b.source,J=d.get(B);delete J[w.__cacheKey],o.memory.textures--}function k(b){const w=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ne=0;ne<w.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(w.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)t.deleteFramebuffer(w.__webglFramebuffer[J]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=b.textures;for(let J=0,ne=B.length;J<ne;J++){const Z=i.get(B[J]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[J])}i.remove(b)}let y=0;function M(){y=0}function I(){const b=y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),y+=1,b}function z(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function V(b,w){const B=i.get(b);if(b.isVideoTexture&&be(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(B,b,w);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+w)}function $(b,w){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Ve(B,b,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+w)}function H(b,w){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Ve(B,b,w);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+w)}function Y(b,w){const B=i.get(b);if(b.version>0&&B.__version!==b.version){q(B,b,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+w)}const N={[eu]:t.REPEAT,[Pr]:t.CLAMP_TO_EDGE,[eh]:t.MIRRORED_REPEAT},K={[cn]:t.NEAREST,[GS]:t.NEAREST_MIPMAP_NEAREST,[Da]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[lc]:t.LINEAR_MIPMAP_NEAREST,[Yi]:t.LINEAR_MIPMAP_LINEAR},Q={[YS]:t.NEVER,[e1]:t.ALWAYS,[$S]:t.LESS,[ix]:t.LEQUAL,[KS]:t.EQUAL,[QS]:t.GEQUAL,[ZS]:t.GREATER,[JS]:t.NOTEQUAL};function oe(b,w){if(w.type===qn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Kt||w.magFilter===lc||w.magFilter===Da||w.magFilter===Yi||w.minFilter===Kt||w.minFilter===lc||w.minFilter===Da||w.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,N[w.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,N[w.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,N[w.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,K[w.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==Da&&w.minFilter!==Yi||w.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ae(b,w){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",R));const J=w.source;let ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));const Z=z(w);if(Z!==b.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[Z].usedTimes++;const Me=ne[b.__cacheKey];Me!==void 0&&(ne[b.__cacheKey].usedTimes--,Me.usedTimes===0&&A(w)),b.__cacheKey=Z,b.__webglTexture=ne[Z].texture}return B}function Ve(b,w,B){let J=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=t.TEXTURE_3D);const ne=Ae(b,w),Z=w.source;n.bindTexture(J,b.__webglTexture,t.TEXTURE0+B);const Me=i.get(Z);if(Z.version!==Me.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const le=Qe.getPrimaries(Qe.workingColorSpace),ge=w.colorSpace===Sn?null:Qe.getPrimaries(w.colorSpace),Ye=w.colorSpace===Sn||le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let re=_(w.image,!1,r.maxTextureSize);re=it(w,re);const ve=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let Ie=v(w.internalFormat,ve,De,w.colorSpace,w.isVideoTexture);oe(J,w);let xe;const je=w.mipmaps,ke=w.isVideoTexture!==!0,rt=Me.__version===void 0||ne===!0,U=Z.dataReady,de=S(w,re);if(w.isDepthTexture)Ie=x(w.format===Xs,w.type),rt&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Ie,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ie,re.width,re.height,0,ve,De,null));else if(w.isDataTexture)if(je.length>0){ke&&rt&&n.texStorage2D(t.TEXTURE_2D,de,Ie,je[0].width,je[0].height);for(let j=0,ee=je.length;j<ee;j++)xe=je[j],ke?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,ve,De,xe.data):n.texImage2D(t.TEXTURE_2D,j,Ie,xe.width,xe.height,0,ve,De,xe.data);w.generateMipmaps=!1}else ke?(rt&&n.texStorage2D(t.TEXTURE_2D,de,Ie,re.width,re.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ve,De,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,re.width,re.height,0,ve,De,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ke&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ie,je[0].width,je[0].height,re.depth);for(let j=0,ee=je.length;j<ee;j++)if(xe=je[j],w.format!==Yn)if(ve!==null)if(ke){if(U)if(w.layerUpdates.size>0){const fe=o0(xe.width,xe.height,w.format,w.type);for(const pe of w.layerUpdates){const Xe=xe.data.subarray(pe*fe/xe.data.BYTES_PER_ELEMENT,(pe+1)*fe/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,pe,xe.width,xe.height,1,ve,Xe,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,re.depth,ve,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Ie,xe.width,xe.height,re.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,re.depth,ve,De,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Ie,xe.width,xe.height,re.depth,0,ve,De,xe.data)}else{ke&&rt&&n.texStorage2D(t.TEXTURE_2D,de,Ie,je[0].width,je[0].height);for(let j=0,ee=je.length;j<ee;j++)xe=je[j],w.format!==Yn?ve!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,ve,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,ve,De,xe.data):n.texImage2D(t.TEXTURE_2D,j,Ie,xe.width,xe.height,0,ve,De,xe.data)}else if(w.isDataArrayTexture)if(ke){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ie,re.width,re.height,re.depth),U)if(w.layerUpdates.size>0){const j=o0(re.width,re.height,w.format,w.type);for(const ee of w.layerUpdates){const fe=re.data.subarray(ee*j/re.data.BYTES_PER_ELEMENT,(ee+1)*j/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,ve,De,fe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,De,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,re.width,re.height,re.depth,0,ve,De,re.data);else if(w.isData3DTexture)ke?(rt&&n.texStorage3D(t.TEXTURE_3D,de,Ie,re.width,re.height,re.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,De,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,re.width,re.height,re.depth,0,ve,De,re.data);else if(w.isFramebufferTexture){if(rt)if(ke)n.texStorage2D(t.TEXTURE_2D,de,Ie,re.width,re.height);else{let j=re.width,ee=re.height;for(let fe=0;fe<de;fe++)n.texImage2D(t.TEXTURE_2D,fe,Ie,j,ee,0,ve,De,null),j>>=1,ee>>=1}}else if(je.length>0){if(ke&&rt){const j=Pe(je[0]);n.texStorage2D(t.TEXTURE_2D,de,Ie,j.width,j.height)}for(let j=0,ee=je.length;j<ee;j++)xe=je[j],ke?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ve,De,xe):n.texImage2D(t.TEXTURE_2D,j,Ie,ve,De,xe);w.generateMipmaps=!1}else if(ke){if(rt){const j=Pe(re);n.texStorage2D(t.TEXTURE_2D,de,Ie,j.width,j.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,De,re)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ve,De,re);m(w)&&f(J),Me.__version=Z.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function q(b,w,B){if(w.image.length!==6)return;const J=Ae(b,w),ne=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const Z=i.get(ne);if(ne.version!==Z.__version||J===!0){n.activeTexture(t.TEXTURE0+B);const Me=Qe.getPrimaries(Qe.workingColorSpace),le=w.colorSpace===Sn?null:Qe.getPrimaries(w.colorSpace),ge=w.colorSpace===Sn||Me===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!Ye&&!re?ve[ee]=_(w.image[ee],!0,r.maxCubemapSize):ve[ee]=re?w.image[ee].image:w.image[ee],ve[ee]=it(w,ve[ee]);const De=ve[0],Ie=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),je=v(w.internalFormat,Ie,xe,w.colorSpace),ke=w.isVideoTexture!==!0,rt=Z.__version===void 0||J===!0,U=ne.dataReady;let de=S(w,De);oe(t.TEXTURE_CUBE_MAP,w);let j;if(Ye){ke&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,je,De.width,De.height);for(let ee=0;ee<6;ee++){j=ve[ee].mipmaps;for(let fe=0;fe<j.length;fe++){const pe=j[fe];w.format!==Yn?Ie!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,pe.width,pe.height,Ie,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,pe.width,pe.height,Ie,xe,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,je,pe.width,pe.height,0,Ie,xe,pe.data)}}}else{if(j=w.mipmaps,ke&&rt){j.length>0&&de++;const ee=Pe(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,Ie,xe,ve[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,ve[ee].width,ve[ee].height,0,Ie,xe,ve[ee].data);for(let fe=0;fe<j.length;fe++){const Xe=j[fe].image[ee].image;ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Xe.width,Xe.height,Ie,xe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,je,Xe.width,Xe.height,0,Ie,xe,Xe.data)}}else{ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,xe,ve[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,Ie,xe,ve[ee]);for(let fe=0;fe<j.length;fe++){const pe=j[fe];ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ie,xe,pe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,je,Ie,xe,pe.image[ee])}}}m(w)&&f(t.TEXTURE_CUBE_MAP),Z.__version=ne.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function te(b,w,B,J,ne,Z){const Me=s.convert(B.format,B.colorSpace),le=s.convert(B.type),ge=v(B.internalFormat,Me,le,B.colorSpace);if(!i.get(w).__hasExternalTextures){const re=Math.max(1,w.width>>Z),ve=Math.max(1,w.height>>Z);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Z,ge,re,ve,w.depth,0,Me,le,null):n.texImage2D(ne,Z,ge,re,ve,0,Me,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Be(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,i.get(B).__webglTexture,0,Ue(w)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,i.get(B).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(b,w,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),w.depthBuffer){const J=w.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Z=x(w.stencilBuffer,ne),Me=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Ue(w);Be(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Z,w.width,w.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Z,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Z,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,b)}else{const J=w.textures;for(let ne=0;ne<J.length;ne++){const Z=J[ne],Me=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),ge=v(Z.internalFormat,Me,le,Z.colorSpace),Ye=Ue(w);B&&Be(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,ge,w.width,w.height):Be(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,ge,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ge,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,ne=Ue(w);if(w.depthTexture.format===Ps)Be(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(w.depthTexture.format===Xs)Be(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Re(b){const w=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=J}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ce(w.__webglFramebuffer,b)}else if(B){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=t.createRenderbuffer(),ue(w.__webglDepthbuffer[J],b,!1);else{const ne=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ue(w.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function X(b,w,B){const J=i.get(b);w!==void 0&&te(J.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Re(b)}function Te(b){const w=b.texture,B=i.get(b),J=i.get(w);b.addEventListener("dispose",C);const ne=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=w.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let ge=0;ge<w.mipmaps.length;ge++)B.__webglFramebuffer[le][ge]=t.createFramebuffer()}else B.__webglFramebuffer[le]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)B.__webglFramebuffer[le]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Me)for(let le=0,ge=ne.length;le<ge;le++){const Ye=i.get(ne[le]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Be(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const ge=ne[le];B.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const Ye=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ve=v(ge.internalFormat,Ye,re,ge.colorSpace,b.isXRRenderTarget===!0),De=Ue(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ve,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,B.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),oe(t.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)te(B.__webglFramebuffer[le][ge],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else te(B.__webglFramebuffer[le],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let le=0,ge=ne.length;le<ge;le++){const Ye=ne[le],re=i.get(Ye);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),oe(t.TEXTURE_2D,Ye),te(B.__webglFramebuffer,b,Ye,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Ye)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,J.__webglTexture),oe(le,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)te(B.__webglFramebuffer[ge],b,w,t.COLOR_ATTACHMENT0,le,ge);else te(B.__webglFramebuffer,b,w,t.COLOR_ATTACHMENT0,le,0);m(w)&&f(le),n.unbindTexture()}b.depthBuffer&&Re(b)}function Ce(b){const w=b.textures;for(let B=0,J=w.length;B<J;B++){const ne=w[B];if(m(ne)){const Z=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ne).__webglTexture;n.bindTexture(Z,Me),f(Z),n.unbindTexture()}}}const Fe=[],L=[];function nt(b){if(b.samples>0){if(Be(b)===!1){const w=b.textures,B=b.width,J=b.height;let ne=t.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(b),le=w.length>1;if(le)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const Ye=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,B,J,0,0,B,J,ne,t.NEAREST),l===!0&&(Fe.length=0,L.length=0,Fe.push(t.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Fe.push(Z),L.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const Ye=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const w=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ue(b){return Math.min(r.maxSamples,b.samples)}function Be(b){const w=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(b){const w=o.render.frame;c.get(b)!==w&&(c.set(b,w),b.update())}function it(b,w){const B=b.colorSpace,J=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Ni&&B!==Sn&&(Qe.getTransfer(B)===lt?(J!==Yn||ne!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Pe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=M,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=X,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Be}function sA(t,e){function n(i,r=Sn){let s;const o=Qe.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===Dd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Id)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Yv)return t.BYTE;if(i===$v)return t.SHORT;if(i===ra)return t.UNSIGNED_SHORT;if(i===Nd)return t.INT;if(i===ur)return t.UNSIGNED_INT;if(i===qn)return t.FLOAT;if(i===Js)return t.HALF_FLOAT;if(i===Zv)return t.ALPHA;if(i===Jv)return t.RGB;if(i===Yn)return t.RGBA;if(i===Qv)return t.LUMINANCE;if(i===ex)return t.LUMINANCE_ALPHA;if(i===Ps)return t.DEPTH_COMPONENT;if(i===Xs)return t.DEPTH_STENCIL;if(i===Ud)return t.RED;if(i===Fd)return t.RED_INTEGER;if(i===tx)return t.RG;if(i===kd)return t.RG_INTEGER;if(i===Od)return t.RGBA_INTEGER;if(i===Sl||i===Ml||i===wl||i===El)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===th||i===nh||i===ih||i===rh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===th)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sh||i===oh)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ah)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lh||i===uh||i===ch||i===fh||i===hh||i===dh||i===ph||i===mh||i===gh||i===vh||i===xh||i===_h||i===yh||i===Sh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ch)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ph)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_h)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tl||i===Mh||i===wh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tl)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nx||i===Eh||i===Th||i===Ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Th)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class oA extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $n extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aA={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uA=`
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

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Dt({vertexShader:lA,fragmentShader:uA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new We(new oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fA extends Qs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,g=null;const _=new cA,m=n.getContextAttributes();let f=null,v=null;const x=[],S=[],R=new _e;let C=null;const T=new yn;T.layers.enable(1),T.viewport=new dt;const A=new yn;A.layers.enable(2),A.viewport=new dt;const k=[T,A],y=new oA;y.layers.enable(1),y.layers.enable(2);let M=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=x[q];return te===void 0&&(te=new Oc,x[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=x[q];return te===void 0&&(te=new Oc,x[q]=te),te.getGripSpace()},this.getHand=function(q){let te=x[q];return te===void 0&&(te=new Oc,x[q]=te),te.getHandSpace()};function z(q){const te=S.indexOf(q.inputSource);if(te===-1)return;const ue=x[te];ue!==void 0&&(ue.update(q.inputSource,q.frame,u||o),ue.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const te=S[q];te!==null&&(S[q]=null,x[q].disconnect(te))}M=null,I=null,_.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,v=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ln(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ue=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Xs:Ps,ue=m.stencil?js:ur);const Re={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ln(d.textureWidth,d.textureHeight,{format:Yn,type:Pi,depthTexture:new Gd(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let te=0;te<q.removed.length;te++){const ue=q.removed[te],ce=S.indexOf(ue);ce>=0&&(S[ce]=null,x[ce].disconnect(ue))}for(let te=0;te<q.added.length;te++){const ue=q.added[te];let ce=S.indexOf(ue);if(ce===-1){for(let X=0;X<x.length;X++)if(X>=S.length){S.push(ue),ce=X;break}else if(S[X]===null){S[X]=ue,ce=X;break}if(ce===-1)break}const Re=x[ce];Re&&Re.connect(ue)}}const H=new D,Y=new D;function N(q,te,ue){H.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ue.matrixWorld);const ce=H.distanceTo(Y),Re=te.projectionMatrix.elements,X=ue.projectionMatrix.elements,Te=Re[14]/(Re[10]-1),Ce=Re[14]/(Re[10]+1),Fe=(Re[9]+1)/Re[5],L=(Re[9]-1)/Re[5],nt=(Re[8]-1)/Re[0],Ue=(X[8]+1)/X[0],Be=Te*nt,be=Te*Ue,it=ce/(-nt+Ue),Pe=it*-nt;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pe),q.translateZ(it),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const b=Te+it,w=Ce+it,B=Be-Pe,J=be+(ce-Pe),ne=Fe*Ce/w*b,Z=L*Ce/w*b;q.projectionMatrix.makePerspective(B,J,ne,Z,b,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function K(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ue=q.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),y.near=A.near=T.near=te,y.far=A.far=T.far=ue,(M!==y.near||I!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,I=y.far);const ce=q.parent,Re=y.cameras;K(y,ce);for(let X=0;X<Re.length;X++)K(Re[X],ce);Re.length===2?N(y,T,A):y.projectionMatrix.copy(T.projectionMatrix),Q(q,y,ce)};function Q(q,te,ue){ue===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ch*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let oe=null;function Ae(q,te){if(c=te.getViewerPose(u||o),g=te,c!==null){const ue=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ce=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let X=0;X<ue.length;X++){const Te=ue[X];let Ce=null;if(p!==null)Ce=p.getViewport(Te);else{const L=h.getViewSubImage(d,Te);Ce=L.viewport,X===0&&(e.setRenderTargetTextures(v,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let Fe=k[X];Fe===void 0&&(Fe=new yn,Fe.layers.enable(X),Fe.viewport=new dt,k[X]=Fe),Fe.matrix.fromArray(Te.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Te.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),X===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(Fe)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const X=h.getDepthInformation(ue[0]);X&&X.isValid&&X.texture&&_.init(e,X,r.renderState)}}for(let ue=0;ue<x.length;ue++){const ce=S[ue],Re=x[ue];ce!==null&&Re!==void 0&&Re.update(ce,te,u||o)}oe&&oe(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ve=new mx;Ve.setAnimationLoop(Ae),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}}const _r=new ui,hA=new He;function dA(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,fx(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,_r.copy(S),_r.x*=-1,_r.y*=-1,_r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(hA.makeRotationFromEuler(_r)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(g(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(v,R);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function c(v){const x=h();v.__bindingPointIndex=x;const S=t.createBuffer(),R=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],S=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,T=S.length;C<T;C++){const A=Array.isArray(S[C])?S[C]:[S[C]];for(let k=0,y=A.length;k<y;k++){const M=A[k];if(p(M,C,k,R)===!0){const I=M.__offset,z=Array.isArray(M.value)?M.value:[M.value];let V=0;for(let $=0;$<z.length;$++){const H=z[$],Y=_(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,I+V,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,x,S,R){const C=v.value,T=x+"_"+S;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{const A=R[T];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return R[T]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function g(v){const x=v.uniforms;let S=0;const R=16;for(let T=0,A=x.length;T<A;T++){const k=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,M=k.length;y<M;y++){const I=k[y],z=Array.isArray(I.value)?I.value:[I.value];for(let V=0,$=z.length;V<$;V++){const H=z[V],Y=_(H),N=S%R,K=N%Y.boundary,Q=N+K;S+=K,Q!==0&&R-Q<Y.storage&&(S+=R-Q),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=Y.storage}}}const C=S%R;return C>0&&(S+=R-C),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class mA{constructor(e={}){const{canvas:n=n1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Ti,this.toneMappingExposure=1;const x=this;let S=!1,R=0,C=0,T=null,A=-1,k=null;const y=new dt,M=new dt;let I=null;const z=new $e(0);let V=0,$=n.width,H=n.height,Y=1,N=null,K=null;const Q=new dt(0,0,$,H),oe=new dt(0,0,$,H);let Ae=!1;const Ve=new px;let q=!1,te=!1;const ue=new He,ce=new He,Re=new D,X=new dt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Fe(){return T===null?Y:1}let L=i;function nt(E,F){return n.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ld}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",pe,!1),L===null){const F="webgl2";if(L=nt(F,E),L===null)throw nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ue,Be,be,it,Pe,b,w,B,J,ne,Z,Me,le,ge,Ye,re,ve,De,Ie,xe,je,ke,rt,U;function de(){Ue=new yE(L),Ue.init(),ke=new sA(L,Ue),Be=new pE(L,Ue,e,ke),be=new nA(L),Be.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),it=new wE(L),Pe=new VT,b=new rA(L,Ue,be,Pe,Be,ke,it),w=new gE(x),B=new _E(x),J=new P1(L),rt=new hE(L,J),ne=new SE(L,J,it,rt),Z=new TE(L,ne,J,it),Ie=new EE(L,Be,b),re=new mE(Pe),Me=new BT(x,w,B,Ue,Be,rt,re),le=new dA(x,Pe),ge=new GT,Ye=new $T(Ue),De=new fE(x,w,B,be,Z,d,l),ve=new eA(x,Z,Be),U=new pA(L,it,Be,be),xe=new dE(L,Ue,it),je=new ME(L,Ue,it),it.programs=Me.programs,x.capabilities=Be,x.extensions=Ue,x.properties=Pe,x.renderLists=ge,x.shadowMap=ve,x.state=be,x.info=it}de();const j=new fA(x,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize($,H,!1))},this.getSize=function(E){return E.set($,H)},this.setSize=function(E,F,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,H=F,n.width=Math.floor(E*Y),n.height=Math.floor(F*Y),G===!0&&(n.style.width=E+"px",n.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set($*Y,H*Y).floor()},this.setDrawingBufferSize=function(E,F,G){$=E,H=F,Y=G,n.width=Math.floor(E*G),n.height=Math.floor(F*G),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,F,G,W){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,F,G,W),be.viewport(y.copy(Q).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,F,G,W){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,F,G,W),be.scissor(M.copy(oe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(E){be.setScissorTest(Ae=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(E=!0,F=!0,G=!0){let W=0;if(E){let O=!1;if(T!==null){const se=T.texture.format;O=se===Od||se===kd||se===Fd}if(O){const se=T.texture.type,he=se===Pi||se===ur||se===ra||se===js||se===Dd||se===Id,ye=De.getClearColor(),Se=De.getClearAlpha(),Le=ye.r,Ne=ye.g,we=ye.b;he?(p[0]=Le,p[1]=Ne,p[2]=we,p[3]=Se,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Le,g[1]=Ne,g[2]=we,g[3]=Se,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),Ye.dispose(),Pe.dispose(),w.dispose(),B.dispose(),Z.dispose(),rt.dispose(),U.dispose(),Me.dispose(),j.dispose(),j.removeEventListener("sessionstart",Zd),j.removeEventListener("sessionend",Jd),dr.stop()};function ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=it.autoReset,F=ve.enabled,G=ve.autoUpdate,W=ve.needsUpdate,O=ve.type;de(),it.autoReset=E,ve.enabled=F,ve.autoUpdate=G,ve.needsUpdate=W,ve.type=O}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const F=E.target;F.removeEventListener("dispose",Xe),wt(F)}function wt(E){rn(E),Pe.remove(E)}function rn(E){const F=Pe.get(E).programs;F!==void 0&&(F.forEach(function(G){Me.releaseProgram(G)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,G,W,O,se){F===null&&(F=Te);const he=O.isMesh&&O.matrixWorld.determinant()<0,ye=Ux(E,F,G,W,O);be.setMaterial(W,he);let Se=G.index,Le=1;if(W.wireframe===!0){if(Se=ne.getWireframeAttribute(G),Se===void 0)return;Le=2}const Ne=G.drawRange,we=G.attributes.position;let et=Ne.start*Le,ot=(Ne.start+Ne.count)*Le;se!==null&&(et=Math.max(et,se.start*Le),ot=Math.min(ot,(se.start+se.count)*Le)),Se!==null?(et=Math.max(et,0),ot=Math.min(ot,Se.count)):we!=null&&(et=Math.max(et,0),ot=Math.min(ot,we.count));const xt=ot-et;if(xt<0||xt===1/0)return;rt.setup(O,W,ye,G,Se);let pn,Ze=xe;if(Se!==null&&(pn=J.get(Se),Ze=je,Ze.setIndex(pn)),O.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*Fe()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(O.isLine){let Ee=W.linewidth;Ee===void 0&&(Ee=1),be.setLineWidth(Ee*Fe()),O.isLineSegments?Ze.setMode(L.LINES):O.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else O.isPoints?Ze.setMode(L.POINTS):O.isSprite&&Ze.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ee=O._multiDrawStarts,Ut=O._multiDrawCounts,Je=O._multiDrawCount,Fn=Se?J.get(Se).bytesPerElement:1,Wr=Pe.get(W).currentProgram.getUniforms();for(let mn=0;mn<Je;mn++)Wr.setValue(L,"_gl_DrawID",mn),Ze.render(Ee[mn]/Fn,Ut[mn])}else if(O.isInstancedMesh)Ze.renderInstances(et,xt,O.count);else if(G.isInstancedBufferGeometry){const Ee=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ut=Math.min(G.instanceCount,Ee);Ze.renderInstances(et,xt,Ut)}else Ze.render(et,xt)};function Ke(E,F,G){E.transparent===!0&&E.side===jn&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,ma(E,F,G),E.side=lr,E.needsUpdate=!0,ma(E,F,G),E.side=jn):ma(E,F,G)}this.compile=function(E,F,G=null){G===null&&(G=E),m=Ye.get(G),m.init(F),v.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const ye=se[he];Ke(ye,G,O),W.add(ye)}else Ke(se,G,O),W.add(se)}),v.pop(),m=null,W},this.compileAsync=function(E,F,G=null){const W=this.compile(E,F,G);return new Promise(O=>{function se(){if(W.forEach(function(he){Pe.get(he).currentProgram.isReady()&&W.delete(he)}),W.size===0){O(E);return}setTimeout(se,10)}Ue.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let sn=null;function fi(E){sn&&sn(E)}function Zd(){dr.stop()}function Jd(){dr.start()}const dr=new mx;dr.setAnimationLoop(fi),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(E){sn=E,j.setAnimationLoop(E),E===null?dr.stop():dr.start()},j.addEventListener("sessionstart",Zd),j.addEventListener("sessionend",Jd),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(F),F=j.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,T),m=Ye.get(E,v.length),m.init(F),v.push(m),ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ve.setFromProjectionMatrix(ce),te=this.localClippingEnabled,q=re.init(this.clippingPlanes,te),_=ge.get(E,f.length),_.init(),f.push(_),j.enabled===!0&&j.isPresenting===!0){const se=x.xr.getDepthSensingMesh();se!==null&&Nu(se,F,-1/0,x.sortObjects)}Nu(E,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,K),Ce=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ce&&De.addToRenderList(_,E),this.info.render.frame++,q===!0&&re.beginShadows();const G=m.state.shadowsArray;ve.render(G,E,F),q===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,O=_.transmissive;if(m.setupLights(),F.isArrayCamera){const se=F.cameras;if(O.length>0)for(let he=0,ye=se.length;he<ye;he++){const Se=se[he];ep(W,O,E,Se)}Ce&&De.render(E);for(let he=0,ye=se.length;he<ye;he++){const Se=se[he];Qd(_,E,Se,Se.viewport)}}else O.length>0&&ep(W,O,E,F),Ce&&De.render(E),Qd(_,E,F);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,F),rt.resetDefaultState(),A=-1,k=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&re.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Nu(E,F,G,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ve.intersectsSprite(E)){W&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const he=Z.update(E),ye=E.material;ye.visible&&_.push(E,he,ye,G,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ve.intersectsObject(E))){const he=Z.update(E),ye=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),X.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),X.copy(he.boundingSphere.center)),X.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(ye)){const Se=he.groups;for(let Le=0,Ne=Se.length;Le<Ne;Le++){const we=Se[Le],et=ye[we.materialIndex];et&&et.visible&&_.push(E,he,et,G,X.z,we)}}else ye.visible&&_.push(E,he,ye,G,X.z,null)}}const se=E.children;for(let he=0,ye=se.length;he<ye;he++)Nu(se[he],F,G,W)}function Qd(E,F,G,W){const O=E.opaque,se=E.transmissive,he=E.transparent;m.setupLightsView(G),q===!0&&re.setGlobalState(x.clippingPlanes,G),W&&be.viewport(y.copy(W)),O.length>0&&pa(O,F,G),se.length>0&&pa(se,F,G),he.length>0&&pa(he,F,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ep(E,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Ln(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Js:Pi,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=m.state.transmissionRenderTarget[W.id],he=W.viewport||y;se.setSize(he.z,he.w);const ye=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(z),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Ce&&De.render(G);const Se=x.toneMapping;x.toneMapping=Ti;const Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),q===!0&&re.setGlobalState(x.clippingPlanes,W),pa(E,G,W),b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let we=0,et=F.length;we<et;we++){const ot=F[we],xt=ot.object,pn=ot.geometry,Ze=ot.material,Ee=ot.group;if(Ze.side===jn&&xt.layers.test(W.layers)){const Ut=Ze.side;Ze.side=Jt,Ze.needsUpdate=!0,tp(xt,G,W,pn,Ze,Ee),Ze.side=Ut,Ze.needsUpdate=!0,Ne=!0}}Ne===!0&&(b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se))}x.setRenderTarget(ye),x.setClearColor(z,V),Le!==void 0&&(W.viewport=Le),x.toneMapping=Se}function pa(E,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,se=E.length;O<se;O++){const he=E[O],ye=he.object,Se=he.geometry,Le=W===null?he.material:W,Ne=he.group;ye.layers.test(G.layers)&&tp(ye,F,G,Se,Le,Ne)}}function tp(E,F,G,W,O,se){E.onBeforeRender(x,F,G,W,O,se),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,F,G,W,E,se),O.transparent===!0&&O.side===jn&&O.forceSinglePass===!1?(O.side=Jt,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,E,se),O.side=lr,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,E,se),O.side=jn):x.renderBufferDirect(G,F,W,O,E,se),E.onAfterRender(x,F,G,W,O,se)}function ma(E,F,G){F.isScene!==!0&&(F=Te);const W=Pe.get(E),O=m.state.lights,se=m.state.shadowsArray,he=O.state.version,ye=Me.getParameters(E,O.state,se,F,G),Se=Me.getProgramCacheKey(ye);let Le=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?B:w).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",Xe),Le=new Map,W.programs=Le);let Ne=Le.get(Se);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===he)return ip(E,ye),Ne}else ye.uniforms=Me.getUniforms(E),E.onBeforeCompile(ye,x),Ne=Me.acquireProgram(ye,Se),Le.set(Se,Ne),W.uniforms=ye.uniforms;const we=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=re.uniform),ip(E,ye),W.needsLights=kx(E),W.lightsStateVersion=he,W.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function np(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Cl.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function ip(E,F){const G=Pe.get(E);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ux(E,F,G,W,O){F.isScene!==!0&&(F=Te),b.resetTextureUnits();const se=F.fog,he=W.isMeshStandardMaterial?F.environment:null,ye=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ni,Se=(W.isMeshStandardMaterial?B:w).get(W.envMap||he),Le=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,ot=!!G.morphAttributes.color;let xt=Ti;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=x.toneMapping);const pn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=pn!==void 0?pn.length:0,Ee=Pe.get(W),Ut=m.state.lights;if(q===!0&&(te===!0||E!==k)){const Cn=E===k&&W.id===A;re.setState(W,E,Cn)}let Je=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ut.state.version||Ee.outputColorSpace!==ye||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==Se||W.fog===!0&&Ee.fog!==se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==re.numPlanes||Ee.numIntersection!==re.numIntersection)||Ee.vertexAlphas!==Le||Ee.vertexTangents!==Ne||Ee.morphTargets!==we||Ee.morphNormals!==et||Ee.morphColors!==ot||Ee.toneMapping!==xt||Ee.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Ee.__version=W.version);let Fn=Ee.currentProgram;Je===!0&&(Fn=ma(W,F,O));let Wr=!1,mn=!1,Du=!1;const yt=Fn.getUniforms(),Di=Ee.uniforms;if(be.useProgram(Fn.program)&&(Wr=!0,mn=!0,Du=!0),W.id!==A&&(A=W.id,mn=!0),Wr||k!==E){Be.reverseDepthBuffer?(ue.copy(E.projectionMatrix),r1(ue),s1(ue),yt.setValue(L,"projectionMatrix",ue)):yt.setValue(L,"projectionMatrix",E.projectionMatrix),yt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Cn=yt.map.cameraPosition;Cn!==void 0&&Cn.setValue(L,Re.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,mn=!0,Du=!0)}if(O.isSkinnedMesh){yt.setOptional(L,O,"bindMatrix"),yt.setOptional(L,O,"bindMatrixInverse");const Cn=O.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),yt.setValue(L,"boneTexture",Cn.boneTexture,b))}O.isBatchedMesh&&(yt.setOptional(L,O,"batchingTexture"),yt.setValue(L,"batchingTexture",O._matricesTexture,b),yt.setOptional(L,O,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",O._indirectTexture,b),yt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",O._colorsTexture,b));const Iu=G.morphAttributes;if((Iu.position!==void 0||Iu.normal!==void 0||Iu.color!==void 0)&&Ie.update(O,G,Fn),(mn||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,yt.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Di.envMap.value=Se,Di.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Di.envMapIntensity.value=F.environmentIntensity),mn&&(yt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&Fx(Di,Du),se&&W.fog===!0&&le.refreshFogUniforms(Di,se),le.refreshMaterialUniforms(Di,W,Y,H,m.state.transmissionRenderTarget[E.id]),Cl.upload(L,np(Ee),Di,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Cl.upload(L,np(Ee),Di,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(L,"center",O.center),yt.setValue(L,"modelViewMatrix",O.modelViewMatrix),yt.setValue(L,"normalMatrix",O.normalMatrix),yt.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Cn=W.uniformsGroups;for(let Uu=0,Ox=Cn.length;Uu<Ox;Uu++){const rp=Cn[Uu];U.update(rp,Fn),U.bind(rp,Fn)}}return Fn}function Fx(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function kx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,F,G){Pe.get(E.texture).__webglTexture=F,Pe.get(E.depthTexture).__webglTexture=G;const W=Pe.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const G=Pe.get(E);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,G=0){T=E,R=F,C=G;let W=!0,O=null,se=!1,he=!1;if(E){const Se=Pe.get(E);if(Se.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Se.__hasExternalTextures)b.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Pe.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(he=!0);const Ne=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?O=Ne[F][G]:O=Ne[F],se=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?O=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[G]:O=Ne,y.copy(E.viewport),M.copy(E.scissor),I=E.scissorTest}else y.copy(Q).multiplyScalar(Y).floor(),M.copy(oe).multiplyScalar(Y).floor(),I=Ae;if(be.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&be.drawBuffers(E,O),be.viewport(y),be.scissor(M),be.setScissorTest(I),se){const Se=Pe.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,G)}else if(he){const Se=Pe.get(E.texture),Le=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Le)}A=-1},this.readRenderTargetPixels=function(E,F,G,W,O,se,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){be.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Se=E.texture,Le=Se.format,Ne=Se.type;if(!Be.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&G>=0&&G<=E.height-O&&L.readPixels(F,G,W,O,ke.convert(Le),ke.convert(Ne),se)}finally{const Se=T!==null?Pe.get(T).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,F,G,W,O,se,he){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){const Se=E.texture,Le=Se.format,Ne=Se.type;if(!Be.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&G>=0&&G<=E.height-O){be.bindFramebuffer(L.FRAMEBUFFER,ye);const we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),L.readPixels(F,G,W,O,ke.convert(Le),ke.convert(Ne),0);const et=T!==null?Pe.get(T).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,et);const ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await i1(L,ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(we),L.deleteSync(ot),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,G=0){E.isTexture!==!0&&(Al("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(E.image.width*W),se=Math.floor(E.image.height*W),he=F!==null?F.x:0,ye=F!==null?F.y:0;b.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,he,ye,O,se),be.unbindTexture()},this.copyTextureToTexture=function(E,F,G=null,W=null,O=0){E.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let se,he,ye,Se,Le,Ne;G!==null?(se=G.max.x-G.min.x,he=G.max.y-G.min.y,ye=G.min.x,Se=G.min.y):(se=E.image.width,he=E.image.height,ye=0,Se=0),W!==null?(Le=W.x,Ne=W.y):(Le=0,Ne=0);const we=ke.convert(F.format),et=ke.convert(F.type);b.setTexture2D(F,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=L.getParameter(L.UNPACK_ROW_LENGTH),xt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),Ut=E.isCompressedTexture?E.mipmaps[O]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Le,Ne,se,he,we,et,Ut.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Le,Ne,Ut.width,Ut.height,we,Ut.data):L.texSubImage2D(L.TEXTURE_2D,O,Le,Ne,se,he,we,et,Ut),L.pixelStorei(L.UNPACK_ROW_LENGTH,ot),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),O===0&&F.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(E,F,G=null,W=null,O=0){E.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0);let se,he,ye,Se,Le,Ne,we,et,ot;const xt=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(se=G.max.x-G.min.x,he=G.max.y-G.min.y,ye=G.max.z-G.min.z,Se=G.min.x,Le=G.min.y,Ne=G.min.z):(se=xt.width,he=xt.height,ye=xt.depth,Se=0,Le=0,Ne=0),W!==null?(we=W.x,et=W.y,ot=W.z):(we=0,et=0,ot=0);const pn=ke.convert(F.format),Ze=ke.convert(F.type);let Ee;if(F.isData3DTexture)b.setTexture3D(F,0),Ee=L.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)b.setTexture2DArray(F,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Ut=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=L.getParameter(L.UNPACK_SKIP_PIXELS),Wr=L.getParameter(L.UNPACK_SKIP_ROWS),mn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ee,O,we,et,ot,se,he,ye,pn,Ze,xt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,O,we,et,ot,se,he,ye,pn,xt.data):L.texSubImage3D(Ee,O,we,et,ot,se,he,ye,pn,Ze,xt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mn),O===0&&F.generateMipmaps&&L.generateMipmap(Ee),be.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){R=0,C=0,T=null,be.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zd?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Ru?"display-p3":"srgb"}}class zc extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gA extends Ot{constructor(e=null,n=1,i=1,r,s,o,a,l,u=cn,c=cn,h,d){super(null,o,a,l,u,c,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class a0 extends en{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new He,l0=new He,el=[],u0=new Hr,vA=new He,yo=new We,So=new Gr;class c0 extends We{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new a0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,vA)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,os),u0.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(u0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,os),So.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(So)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),e.ray.intersectsSphere(So)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,os),l0.multiplyMatrices(i,os),yo.matrixWorld=l0,yo.raycast(e,el);for(let o=0,a=el.length;o<a;o++){const l=el[o];l.instanceId=s,l.object=this,n.push(l)}el.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new a0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new gA(new Float32Array(r*this.count),r,this.count,Ud,qn));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xA extends no{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new D,ou=new D,f0=new He,Mo=new Bd,tl=new Gr,Bc=new D,h0=new D;class _A extends Qt{constructor(e=new qt,n=new xA){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)su.fromBufferAttribute(n,r-1),ou.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=su.distanceTo(ou);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;f0.copy(r).invert(),Mo.copy(e.ray).applyMatrix4(f0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const f=c.getX(_),v=c.getX(_+1),x=nl(this,e,Mo,l,f,v);x&&n.push(x)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(p),f=nl(this,e,Mo,l,_,m);f&&n.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const f=nl(this,e,Mo,l,_,_+1);f&&n.push(f)}if(this.isLineLoop){const _=nl(this,e,Mo,l,g-1,p);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(su.fromBufferAttribute(o,r),ou.fromBufferAttribute(o,s),n.distanceSqToSegment(su,ou,Bc,h0)>i)return;Bc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Bc);if(!(l<e.near||l>e.far))return{distance:l,point:h0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const d0=new D,p0=new D;class yA extends _A{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)d0.fromBufferAttribute(n,r),p0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+d0.distanceTo(p0);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class SA extends no{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const m0=new He,Ph=new Bd,il=new Gr,rl=new D;class MA extends Qt{constructor(e=new qt,n=new SA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(r),il.radius+=s,e.ray.intersectsSphere(il)===!1)return;m0.copy(r).invert(),Ph.copy(e.ray).applyMatrix4(m0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=u.getX(g);rl.fromBufferAttribute(h,m),g0(rl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)rl.fromBufferAttribute(h,g),g0(rl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function g0(t,e,n,i,r,s,o){const a=Ph.distanceSqToPoint(t);if(a<n){const l=new D;Ph.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wA extends Ot{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,p=(o-c)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new _e:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],o=[],a=new D,l=new He;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(jt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(jt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wd extends ci{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new _e){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*h+this.aX,u=d*h+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class EA extends Wd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+h)+(l-a)/h;d*=c,p*=c,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const sl=new D,Vc=new jd,Hc=new jd,Gc=new jd;class TA extends ci{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(sl.subVectors(r[0],r[1]).add(r[0]),u=sl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(sl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=sl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Vc.initNonuniformCatmullRom(u.x,h.x,d.x,c.x,g,_,m),Hc.initNonuniformCatmullRom(u.y,h.y,d.y,c.y,g,_,m),Gc.initNonuniformCatmullRom(u.z,h.z,d.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(u.x,h.x,d.x,c.x,this.tension),Hc.initCatmullRom(u.y,h.y,d.y,c.y,this.tension),Gc.initCatmullRom(u.z,h.z,d.z,c.z,this.tension));return i.set(Vc.calc(l),Hc.calc(l),Gc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function v0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function AA(t,e){const n=1-t;return n*n*e}function CA(t,e){return 2*(1-t)*t*e}function RA(t,e){return t*t*e}function ko(t,e,n,i){return AA(t,e)+CA(t,n)+RA(t,i)}function bA(t,e){const n=1-t;return n*n*n*e}function PA(t,e){const n=1-t;return 3*n*n*t*e}function LA(t,e){return 3*(1-t)*t*t*e}function NA(t,e){return t*t*t*e}function Oo(t,e,n,i,r){return bA(t,e)+PA(t,n)+LA(t,i)+NA(t,r)}class yx extends ci{constructor(e=new _e,n=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class DA extends ci{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y),Oo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sx extends ci{constructor(e=new _e,n=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new _e){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new _e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IA extends ci{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mx extends ci{constructor(e=new _e,n=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class UA extends ci{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y),ko(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wx extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new _e){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(v0(a,l.x,u.x,c.x,h.x),v0(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new _e().fromArray(r))}return this}}var x0=Object.freeze({__proto__:null,ArcCurve:EA,CatmullRomCurve3:TA,CubicBezierCurve:yx,CubicBezierCurve3:DA,EllipseCurve:Wd,LineCurve:Sx,LineCurve3:IA,QuadraticBezierCurve:Mx,QuadraticBezierCurve3:UA,SplineCurve:wx});class FA extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new x0[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new x0[r.type]().fromJSON(r))}return this}}class _0 extends FA{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Sx(this.currentPoint.clone(),new _e(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Mx(this.currentPoint.clone(),new _e(e,n),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new yx(this.currentPoint.clone(),new _e(e,n),new _e(i,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new wx(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new Wd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ln extends qt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(p,2));function v(){const S=new D,R=new D;let C=0;const T=(n-e)/i;for(let A=0;A<=s;A++){const k=[],y=A/s,M=y*(n-e)+e;for(let I=0;I<=r;I++){const z=I/r,V=z*l+a,$=Math.sin(V),H=Math.cos(V);R.x=M*$,R.y=-y*i+m,R.z=M*H,h.push(R.x,R.y,R.z),S.set($,T,H).normalize(),d.push(S.x,S.y,S.z),p.push(z,1-y),k.push(g++)}_.push(k)}for(let A=0;A<r;A++)for(let k=0;k<s;k++){const y=_[k][A],M=_[k+1][A],I=_[k+1][A+1],z=_[k][A+1];e>0&&(c.push(y,M,z),C+=3),n>0&&(c.push(M,I,z),C+=3)}u.addGroup(f,C,0),f+=C}function x(S){const R=g,C=new _e,T=new D;let A=0;const k=S===!0?e:n,y=S===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const M=g;for(let I=0;I<=r;I++){const V=I/r*l+a,$=Math.cos(V),H=Math.sin(V);T.x=k*H,T.y=m*y,T.z=k*$,h.push(T.x,T.y,T.z),d.push(0,y,0),C.x=$*.5+.5,C.y=H*.5*y+.5,p.push(C.x,C.y),g++}for(let I=0;I<r;I++){const z=R+I,V=M+I;S===!0?c.push(V,V+1,z):c.push(V+1,V,z),A+=3}u.addGroup(f,A,S===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pu extends ln{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xd extends qt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(s.slice(),3)),this.setAttribute("uv",new gt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new D,S=new D,R=new D;for(let C=0;C<n.length;C+=3)p(n[C+0],x),p(n[C+1],S),p(n[C+2],R),l(x,S,R,v)}function l(v,x,S,R){const C=R+1,T=[];for(let A=0;A<=C;A++){T[A]=[];const k=v.clone().lerp(S,A/C),y=x.clone().lerp(S,A/C),M=C-A;for(let I=0;I<=M;I++)I===0&&A===C?T[A][I]=k:T[A][I]=k.clone().lerp(y,I/M)}for(let A=0;A<C;A++)for(let k=0;k<2*(C-A)-1;k++){const y=Math.floor(k/2);k%2===0?(d(T[A][y+1]),d(T[A+1][y]),d(T[A][y])):(d(T[A][y+1]),d(T[A+1][y+1]),d(T[A+1][y]))}}function u(v){const x=new D;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(v),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function c(){const v=new D;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const S=m(v)/2/Math.PI+.5,R=f(v)/Math.PI+.5;o.push(S,1-R)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],R=o[v+4],C=Math.max(x,S,R),T=Math.min(x,S,R);C>.9&&T<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function p(v,x){const S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const v=new D,x=new D,S=new D,R=new D,C=new _e,T=new _e,A=new _e;for(let k=0,y=0;k<s.length;k+=9,y+=6){v.set(s[k+0],s[k+1],s[k+2]),x.set(s[k+3],s[k+4],s[k+5]),S.set(s[k+6],s[k+7],s[k+8]),C.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),R.copy(v).add(x).add(S).divideScalar(3);const M=m(R);_(C,y+0,v,M),_(T,y+2,x,M),_(A,y+4,S,M)}}function _(v,x,S,R){R<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.vertices,e.indices,e.radius,e.details)}}class Ex extends _0{constructor(e){super(e),this.uuid=eo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new _0().fromJSON(r))}return this}}const kA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Tx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,h,d,p;if(i&&(s=HA(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let g=n;g<r;g+=n)h=t[g],d=t[g+1],h<a&&(a=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return oa(s,o,n,a,l,p,0),o}};function Tx(t,e,n,i,r){let s,o;if(r===QA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=y0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=y0(s,t[s],t[s+1],o);return o&&Lu(o,o.next)&&(la(o),o=o.next),o}function zr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Lu(n,n.next)||pt(n.prev,n,n.next)===0)){if(la(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function oa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&qA(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?zA(t,i,r,s):OA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),la(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=BA(zr(t),e,n),oa(t,e,n,i,r,s,2)):o===2&&VA(t,e,n,i,r,s):oa(zr(t),e,n,i,r,s,1);break}}}function OA(t){const e=t.prev,n=t,i=t.next;if(pt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=d&&g.y>=h&&g.y<=p&&Ms(r,a,s,l,o,u,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(pt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,h=s.y,d=o.y,p=a<l?a<u?a:u:l<u?l:u,g=c<h?c<d?c:d:h<d?h:d,_=a>l?a>u?a:u:l>u?l:u,m=c>h?c>d?c:d:h>d?h:d,f=Lh(p,g,e,n,i),v=Lh(_,m,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=f&&S&&S.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Ms(a,c,l,h,u,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ms(a,c,l,h,u,d,S.x,S.y)&&pt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Ms(a,c,l,h,u,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=v;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ms(a,c,l,h,u,d,S.x,S.y)&&pt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function BA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Lu(r,s)&&Ax(r,i,i.next,s)&&aa(r,s)&&aa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),la(i),la(i.next),i=t=s),i=i.next}while(i!==t);return zr(i)}function VA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&KA(o,a)){let l=Cx(o,a);o=zr(o,o.next),l=zr(l,l.next),oa(o,e,n,i,r,s,0),oa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function HA(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=Tx(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push($A(u));for(r.sort(GA),s=0;s<r.length;s++)n=WA(r[s],n);return n}function GA(t,e){return t.x-e.x}function WA(t,e){const n=jA(t,e);if(!n)return e;const i=Cx(n,t);return zr(i,i.next),zr(n,n.next)}function jA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ms(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),aa(n,t)&&(h<c||h===c&&(n.x>r.x||n.x===r.x&&XA(r,n)))&&(r=n,c=h)),n=n.next;while(n!==a);return r}function XA(t,e){return pt(t.prev,t,e.prev)<0&&pt(e.next,t,t.next)<0}function qA(t,e,n,i){let r=t;do r.z===0&&(r.z=Lh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,YA(r)}function YA(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function Lh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function $A(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ms(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function KA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!ZA(t,e)&&(aa(t,e)&&aa(e,t)&&JA(t,e)&&(pt(t.prev,t,e.prev)||pt(t,e.prev,e))||Lu(t,e)&&pt(t.prev,t,t.next)>0&&pt(e.prev,e,e.next)>0)}function pt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Lu(t,e){return t.x===e.x&&t.y===e.y}function Ax(t,e,n,i){const r=al(pt(t,e,n)),s=al(pt(t,e,i)),o=al(pt(n,i,t)),a=al(pt(n,i,e));return!!(r!==s&&o!==a||r===0&&ol(t,n,e)||s===0&&ol(t,i,e)||o===0&&ol(n,t,i)||a===0&&ol(n,e,i))}function ol(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function al(t){return t>0?1:t<0?-1:0}function ZA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Ax(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function aa(t,e){return pt(t.prev,t,t.next)<0?pt(t,e,t.next)>=0&&pt(t,t.prev,e)>=0:pt(t,e,t.prev)<0||pt(t,t.next,e)<0}function JA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Cx(t,e){const n=new Nh(t.i,t.x,t.y),i=new Nh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function y0(t,e,n,i){const r=new Nh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function la(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Nh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function QA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class zo{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return zo.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];S0(e),M0(i,e);let o=e.length;n.forEach(S0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,M0(i,n[l]);const a=kA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function S0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function M0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class au extends Xd{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new au(e.radius,e.detail)}}class qd extends qt{constructor(e=new Ex([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(s,3)),this.setAttribute("uv",new gt(o,2));function u(c){const h=r.length/3,d=c.extractPoints(n);let p=d.shape;const g=d.holes;zo.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const v=g[m];zo.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=zo.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const v=g[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){const v=p[m];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let m=0,f=_.length;m<f;m++){const v=_[m],x=v[0]+h,S=v[1]+h,R=v[2]+h;i.push(x,S,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return e2(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new qd(i,e.curveSegments)}}function e2(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class ji extends qt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new D,d=new D,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const v=[],x=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const C=R/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(C+S,1-x),v.push(u++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const x=c[f][v+1],S=c[f][v],R=c[f+1][v],C=c[f+1][v+1];(f!==0||o>0)&&p.push(x,S,C),(f!==i-1||l<Math.PI)&&p.push(S,R,C)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const w0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class t2{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=u.length;h<d;h+=2){const p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const n2=new t2;class Yd{constructor(e){this.manager=e!==void 0?e:n2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yd.DEFAULT_MATERIAL_NAME="__DEFAULT";class i2 extends Yd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=w0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=sa("img");function l(){c(),w0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(h){c(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class r2 extends Yd{constructor(e){super(e)}load(e,n,i,r){const s=new Ot,o=new i2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);const Rl=12,ro=`
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
`,Ys=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y); }
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
`,s2=`
varying vec3 vW; varying vec3 vN; varying vec2 vUv;
void main() {
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
  m = m * instanceMatrix;
  #endif
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(m) * normal); vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;function Lt(t,e){return new Dt({side:jn,uniforms:{...t,uAlbedo:{value:new $e(e.albedo)},uRetro:{value:e.retro??0},uMap:{value:e.map??null},uHasMap:{value:e.map?1:0},uEmit:{value:new $e(e.emit??0)},uSnowy:{value:e.snowy??0},uGloss:{value:e.gloss??0},uNoise:{value:e.noise??0},uFringe:{value:e.fringe??0}},vertexShader:s2,fragmentShader:`
${ro}
uniform vec3 uAlbedo; uniform float uRetro; uniform sampler2D uMap; uniform float uHasMap; uniform vec3 uEmit;
uniform float uSnowy; uniform float uSnowAmt; uniform float uGloss; uniform vec3 uEye; uniform float uTop; uniform float uNoise; uniform float uFringe;
${Ys}
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
}`})}function o2(t,e){return new Dt({uniforms:{...t,uReflTex:{value:null},uReflMat:{value:new He},uWet:{value:0},tAsphalt:{value:e.asphalt},tGravel:{value:e.gravel},tSnow:{value:e.snow},uEdgeLines:{value:1}},vertexShader:`
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
${ro}
${Ys}
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
    float lg = log2(max(Etop, 1e-4)) / 3.3219;
    float t = (lg + 0.6) / 3.0;
    vec3 base = mix(vec3(0.015), vec3(0.05), road) + mark * 0.06;
    vec3 hc = heat(t) * smoothstep(-1.1, -0.55, lg);
    vec3 outc = mix(base, hc, 0.78);
    float f = fwidth(lg);
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
}`})}function a2(t){return new Dt({depthTest:!0,depthWrite:!0,depthFunc:ia,uniforms:{...t,tPhoto:{value:null},tMask:{value:null},uPRot:{value:new Oe},uPTan:{value:new _e(.3,.3)},uInvProj:{value:new He},uCamWorld:{value:new He},uViewProj:{value:new He},uCam:{value:new D},uWallL:{value:-6},uWallR:{value:6},uBlack:{value:.2},uAlbK:{value:1},uTreeK:{value:1},uWet:{value:0},uWinter:{value:0},uOvercast:{value:0},uReady:{value:0},uCrest:{value:1e5},uSat:{value:.75}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
${ro}
${Ys}
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
}`})}const Ns=8;function l2(t){const e=()=>Array.from({length:Ns},()=>new D),n=()=>Array.from({length:Ns},()=>new dt);return new Dt({depthTest:!0,depthWrite:!0,depthFunc:ia,uniforms:{...t,tR0:{value:null},tR1:{value:null},tR2:{value:null},tMask:{value:null},uPRot:{value:new Oe},uPTan:{value:new _e(.3,.3)},uInvProj:{value:new He},uCamWorld:{value:new He},uViewProj:{value:new He},uCam:{value:new D},uWallL:{value:-6},uWallR:{value:6},uK:{value:.2},uWet:{value:0},uReady:{value:0},uTexel:{value:new _e(1/800,1/532)},uRN:{value:0},uRPos:{value:e()},uRFwd:{value:e()},uRRight:{value:e()},uRUp:{value:e()},uRBeam:{value:n()},uRI:{value:n()},uRSet:{value:e()},uCarRef:{value:new D(0,0,-12)},uRefCol:{value:new D(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
${ro}
${Ys}
#define MAXR ${Ns}
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
}`})}let u2=0;const c2=()=>Math.random().toString(36).slice(2,7)+(u2++).toString(36),Vn=t=>({on:!0,pair:!1,pairSpacing:1.1,specMode:"lumen",lumen:8e3,efficiency:.7,cd:1e5,lux1:300,kelvin:5700,beam:"combo",hAngle:10,vAngle:5,floodH:50,floodV:12,spotShare:.45,tilt:0,yaw:0,mount:"grille",height:.75,heated:!1,posLight:"off",...t}),f2="Valostore.se – Extraljus PURELUX Panther Heat S540 (uppmätt av Valostore), valostore.se/sv/produkt/extraljus_purelux_panther_heat_s540; vilkur.eu",Rx={purelux:{label:"PURELUX Panther Heat S540 – Rak / 55 cm / 260W",group:"Dina ljus",note:"HS18593-15813 · justerbar hållare, XBB Dongle & PowerUnit",make:()=>Vn({preset:"purelux",name:"Panther Heat S540",specMode:"lumen",lumen:17795,efficiency:1,kelvin:5e3,beam:"combo",hAngle:9,vAngle:6,floodH:40,floodV:14,spotShare:.55,mount:"plate",height:.5,heated:!0,mode:"boost",posLight:"white"})},lowbeam:{label:"Halvljus (bilens)",group:"Bilens ljus",make:()=>Vn({preset:"lowbeam",name:"Halvljus",pair:!0,pairSpacing:1.4,specMode:"cd",cd:22e3,kelvin:4300,beam:"lowbeam",hAngle:30,vAngle:4,floodH:60,floodV:8,spotShare:.6,mount:"grille",height:.68,tilt:0})},highbeam:{label:"Helljus (bilens)",group:"Bilens ljus",make:()=>Vn({preset:"highbeam",name:"Helljus",on:!1,pair:!0,pairSpacing:1.4,specMode:"cd",cd:5e4,kelvin:4300,beam:"driving",hAngle:9,vAngle:5,floodH:34,floodV:9,spotShare:.5,mount:"grille",height:.68})},bar20:{label:'LED-ramp 20" combo',group:"Ramper",make:()=>Vn({preset:"bar20",name:'LED-ramp 20"',lumen:9e3,beam:"combo",mount:"grille",height:.6})},bar30:{label:'LED-ramp 30" combo',group:"Ramper",make:()=>Vn({preset:"bar30",name:'LED-ramp 30"',lumen:14e3,beam:"combo",mount:"grille",height:.6})},bar40:{label:'LED-ramp 40" combo (tak)',group:"Ramper",make:()=>Vn({preset:"bar40",name:'LED-ramp 40"',lumen:19e3,beam:"combo",mount:"roof",height:1.75,tilt:-.3})},round7:{label:'Runda spotlights 7" (par)',group:"Runda",make:()=>Vn({preset:"round7",name:'Rund 7" par',pair:!0,pairSpacing:.9,lumen:4500,efficiency:.75,beam:"spot",hAngle:8,vAngle:6,floodH:30,floodV:12,spotShare:.9,mount:"bumper",height:.55})},round9:{label:'Runda spotlights 9" (par)',group:"Runda",make:()=>Vn({preset:"round9",name:'Rund 9" par',pair:!0,pairSpacing:1,lumen:7500,efficiency:.75,beam:"spot",hAngle:8,vAngle:6,floodH:30,floodV:12,spotShare:.9,mount:"bumper",height:.55})},pods:{label:"Driving pods (par)",group:"Runda",make:()=>Vn({preset:"pods",name:"Driving pods",pair:!0,pairSpacing:1.2,lumen:3e3,efficiency:.75,beam:"driving",hAngle:20,vAngle:8,floodH:45,floodV:12,spotShare:.5,mount:"bumper",height:.5})},laser:{label:"Laserspot",group:"Övrigt",make:()=>Vn({preset:"laser",name:"Laserspot",lumen:2200,efficiency:.8,kelvin:6e3,beam:"laser",hAngle:3,vAngle:3,floodH:12,floodV:6,spotShare:.92,mount:"grille",height:.7})},flood:{label:"Bred flood / arbetsljus",group:"Övrigt",make:()=>Vn({preset:"flood",name:"Bred flood",lumen:6e3,efficiency:.75,kelvin:5e3,beam:"flood",hAngle:40,vAngle:20,floodH:80,floodV:30,spotShare:.1,mount:"roof",height:1.75,tilt:-6})}};function ri(t){return{id:c2(),...Rx[t].make()}}const h2={bumper:.5,plate:.5,grille:.75,roof:1.75},d2={bumper:"Stötfångare",plate:"Reg.skylt",grille:"Grill",roof:"Tak"},p2={bumper:-2.35,plate:-2.4,grille:-2.2,roof:-.35},lu={night:{id:"night",kind:"night",label:"Natt · snöig skogsväg (riktigt nattfoto)",src:"./photos/night_x.jpg",mask:"./photos/night_mask.png",aspect:800/532,refs:["./photos/night_d.jpg","./photos/night_f.jpg","./photos/night_x.jpg"],vp:[.5,.44],vfov:16.6,camH:1.12,camDx:.45,wallL:-6,wallR:5.3,K:.2,black:0,albK:1,treeK:1,crest:1e5,sat:1,credit:"“2005 winter road” (halvljus / helljus / helljus + extraljus)",author:"Scoo (Wikimedia Commons)",license:"CC BY-SA 2.5",url:"https://commons.wikimedia.org/wiki/File:2005_winter_road_full_beam_and_extra_lights.jpg"},summer:{id:"summer",label:"Sommar · tallskog",src:"./photos/summer.jpg",mask:"./photos/summer_mask.png",aspect:2048/1367,vp:[.497,.535],vfov:31,camH:1.25,wallL:-5.4,wallR:5.4,black:.25,albK:.95,treeK:1.6,crest:1e5,sat:.6,credit:"“Infinite road”",author:"Sébastien Marchand (Unsplash)",license:"CC0",url:"https://commons.wikimedia.org/wiki/File:Infinite_road_(Unsplash).jpg"},winter:{id:"winter",label:"Vinter · snöig skogsväg",src:"./photos/winter.jpg",mask:"./photos/winter_mask.png",aspect:1600/1200,vp:[.578,.525],vfov:38,camH:1.2,wallL:-11,wallR:12,black:.2,albK:1.45,treeK:1.3,crest:60,sat:.8,credit:"“Joukokyläntie Vaatovaaralla”",author:"Hoogberg (Wikimedia Commons)",license:"CC BY-SA 3.0",url:"https://commons.wikimedia.org/wiki/File:Joukokylantie_Vaatovaaralla.jpg"}},m2=Math.PI/180;function g2(t){const e=Math.tan(t.vfov*m2/2),n=e*t.aspect,i=(2*t.vp[0]-1)*n,r=(1-2*t.vp[1])*e,s=-Math.atan(r);return{yaw:Math.atan(i*Math.cos(s)),pitch:s,tV:e,tH:n}}function bx(t,e){return e==="summer"||e==="winter"?lu[e]:lu.night}function v2(){const t={...ri("lowbeam"),cd:15e3,kelvin:3300,pairSpacing:1.3,height:.65},e={...ri("highbeam"),on:!0,cd:32e3,kelvin:3300,pairSpacing:1.3,height:.65},n={...ri("pods"),specMode:"cd",cd:45e3,kelvin:3300,beam:"driving",hAngle:14,vAngle:5,floodH:40,floodV:10,spotShare:.55,height:.5,pairSpacing:1};return[[t],[e],[e,n]]}const Px=Math.PI/180,Lx=Math.log(2),E0=t=>Math.max(.2,t)*Px*.5/Math.sqrt(Lx),T0=t=>Math.max(.5,t)*Px*.5/Math.pow(Lx,.25),x2=Math.pow(2*.9064024771,2);function uu(t,e=0,n=0){const i=E0(t.hAngle),r=E0(t.vAngle),s=T0(t.floodH),o=T0(t.floodV),a=t.beam==="spot"||t.beam==="laser"?Math.max(t.spotShare,.85):t.beam==="flood"?Math.min(t.spotShare,.15):t.spotShare,l=a*(1-n),u=Math.PI*i*r,c=x2*s*o,h=a/u+(1-a)/c;let d;t.specMode==="lumen"?d=t.lumen*t.efficiency:t.specMode==="cd"?d=t.cd/h:d=t.lux1*t.lux1/h,d*=t.mode==="emark"?3103/17795:1;const p=1-e,g=d*l/u*p,_=d*(1-l)/c*p,m=g+_;return{as:i,bs:r,af:s,bf:o,Is:g,If:_,peak:m,flux:d*p,lux1:Math.sqrt(m),lux025:Math.sqrt(m/.25)}}function $d(t){let e=2e4;return t.weather==="rain"&&(e=6e3-5200*Math.pow(t.rain,.7)),t.weather==="snow"&&(e=2500-2380*Math.pow(t.snow,.6)),t.weather==="fog"&&(e=1200-1160*Math.pow(t.fog,.5)),3.912/Math.max(e,20)}function _2(t){return 3.912/$d(t)}function Kd(t){const e=t/100;let n,i,r;e<=66?(n=255,i=99.4708025861*Math.log(e)-161.1195681661):(n=329.698727446*Math.pow(e-60,-.1332047592),i=288.1221695283*Math.pow(e-60,-.0755148492)),e>=66?r=255:e<=19?r=0:r=138.5177312231*Math.log(e-10)-305.0447927307;const s=c=>Math.pow(Math.min(255,Math.max(0,c))/255,2.2),o=s(n),a=s(i),l=s(r),u=.2126*o+.7152*a+.0722*l;return[o/u,a/u,l/u]}const y2=t=>.62+.75*Math.min(1,Math.max(0,(t-2700)/3800)),sr=t=>t>=1e3?`${(t/1e3).toFixed(2).replace(".",",")} km`:`${Math.round(t)} m`,as=t=>Math.round(t).toLocaleString("sv-SE"),Dh=3.4,bl=4.15,yr=(t,e,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)},ll=(t,e)=>{const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};function S2(t,e){const n=Math.floor(t),i=Math.floor(e),r=t-n,s=e-i,o=r*r*(3-2*r),a=s*s*(3-2*s),l=ll(n,i),u=ll(n+1,i),c=ll(n,i+1),h=ll(n+1,i+1);return l+(u-l)*o+(c-l)*a+(l-u-c+h)*o*a}function M2(t){let e=0;return t>180&&t<700&&(e-=2.4*Math.sin(Math.PI*(t-180)/520)**2),t>=700&&t<1500&&(e+=4.2*Math.sin(Math.PI*(t-700)/800)**2),t>=1500&&(e+=.6*Math.sin((t-1500)/90)),e}function w2(t,e){return t<=Dh?0:t<=bl?-.09*yr(Dh,bl,t):t<=7.9?-.09-.62*(t<5.9?yr(bl,5.9,t):1-yr(5.9,7.9,t))+(t>5.9?.09*yr(5.9,7.9,t):0):.15*yr(7.9,12,t)+.7*(S2(t*.15,e*.05)-.5)*yr(9,18,t)+.04*t*yr(10,60,t)}const $i=(t,e)=>M2(-e)+w2(Math.abs(t),e);function E2(){const t=[0,.85,1.7,2.55,Dh,3.8,bl,4.7,5.3,5.9,6.6,7.2,7.9,9,10.5,12,14,17,21,26,33,42,55,75,110],e=[...t.slice(1).reverse().map(a=>-a),...t],n=[];for(let a=40;a>-320;a-=2)n.push(a);for(let a=-320;a>=-2600;a-=5)n.push(a);const i=[],r=[];for(const a of n)for(const l of e)i.push(l,$i(l,a),a);const s=e.length;for(let a=0;a<n.length-1;a++)for(let l=0;l<s-1;l++){const u=a*s+l,c=u+1,h=u+s,d=h+1;r.push(u,c,h,c,d,h)}const o=new qt;return o.setAttribute("position",new gt(i,3)),o.setAttribute("uv",new gt(new Array(i.length/3*2).fill(0),2)),o.setIndex(r),o.computeVertexNormals(),o}function Ih(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},o={},a=t[0].morphTargetsRelative,l=new qt;let u=0;for(let c=0;c<t.length;++c){const h=t[c];let d=0;if(n!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(n)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(n){let c=0;const h=[];for(let d=0;d<t.length;++d){const p=t[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=t[d].attributes.position.count}l.setIndex(h)}for(const c in s){const h=A0(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<h;++d){const p=[];for(let _=0;_<o[c].length;++_)p.push(o[c][_][d]);const g=A0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function A0(t){let e,n,i,r=-1,s=0;for(let u=0;u<t.length;++u){const c=t[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=c.itemSize),n!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*n}const o=new e(s),a=new en(o,n,i);let l=0;for(let u=0;u<t.length;++u){const c=t[u];if(c.isInterleavedBufferAttribute){const h=l/n;for(let d=0,p=c.count;d<p;d++)for(let g=0;g<n;g++){const _=c.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(c.array,l);l+=c.count*n}return r!==void 0&&(a.gpuType=r),a}function C0(t,e=1e-4){e=Math.max(e,Number.EPSILON);const n={},i=t.getIndex(),r=t.getAttribute("position"),s=i?i.count:r.count;let o=0;const a=Object.keys(t.attributes),l={},u={},c=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,x=a.length;v<x;v++){const S=a[v],R=t.attributes[S];l[S]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const C=t.morphAttributes[S];C&&(u[S]||(u[S]=[]),C.forEach((T,A)=>{const k=new T.array.constructor(T.count*T.itemSize);u[S][A]=new T.constructor(k,T.itemSize,T.normalized)}))}const p=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=p*_;for(let v=0;v<s;v++){const x=i?i.getX(v):v;let S="";for(let R=0,C=a.length;R<C;R++){const T=a[R],A=t.getAttribute(T),k=A.itemSize;for(let y=0;y<k;y++)S+=`${~~(A[h[y]](x)*_+m)},`}if(S in n)c.push(n[S]);else{for(let R=0,C=a.length;R<C;R++){const T=a[R],A=t.getAttribute(T),k=t.morphAttributes[T],y=A.itemSize,M=l[T],I=u[T];for(let z=0;z<y;z++){const V=h[z],$=d[z];if(M[$](o,A[V](x)),k)for(let H=0,Y=k.length;H<Y;H++)I[H][$](o,k[H][V](x))}}n[S]=o,c.push(o),o++}}const f=t.clone();for(const v in t.attributes){const x=l[v];if(f.setAttribute(v,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),v in u)for(let S=0;S<u[v].length;S++){const R=u[v][S];f.morphAttributes[v][S]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return f.setIndex(c),f}function T2(t){return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function R0(t,e=256,n=256){const i=document.createElement("canvas");i.width=e,i.height=n;const r=i.getContext("2d");t(r,e,n);const s=new wA(i);return s.colorSpace=Sn,s.anisotropy=8,s}function A2(t,e,n,i,r,s,o=14){const a=[];for(let l=0;l<t;l++){const u=l/(t-1),c=e+(n-e)*Math.pow(u,.9),h=new Pu(c,s*(1-.35*u),o,3,!0),d=h.attributes.position;for(let p=0;p<d.count;p++){const g=d.getX(p),_=d.getY(p),m=d.getZ(p),f=Math.hypot(g,m);if(f>.02){const v=Math.atan2(m,g),x=.8+.28*Math.sin(v*4+l*2.1)*Math.sin(v*7+l*.7+1.3);d.setXYZ(p,g*x,_-f/Math.max(c,.01)*.35*s*(x-.6),m*x)}}h.computeVertexNormals(),h.translate(0,i+l*r,0),a.push(h.toNonIndexed())}return Ih(a)}function C2(t,e){const n=new $n,i=T2(7),r=1700,s=new He,o=new to,a=new D,l=new D,u=new D(0,1,0);let c=0;const h=new ln(.016,.02,2,6);h.translate(0,1,0);const d=Math.floor(r/25)*2,p=new c0(h,Lt(t,{albedo:14702618}),d);c=0;for(let X=12;X<r;X+=25)for(const Te of[-1,1]){const Ce=Te*(4.05+i()*.3);o.setFromAxisAngle(new D(0,0,1),(i()-.5)*.12),a.set(1,1,1),l.set(Ce,$i(Ce,-X),-X),s.compose(l,o,a),p.setMatrixAt(c,s),c++}const g=new $n;g.add(p),n.add(g);const _=1,m=A2(11,2.4,.35,1.6,1.45,2.6),f=new ln(.1,.22,17,6);f.translate(0,8.5,0);const v=Ih([0,1,2,3].map(X=>{const Te=new au(1.6-X*.2,2);Te.scale(1.3,.55,1.2),Te.translate(Math.sin(X*2.3)*.9,14.5+X*1.3,Math.cos(X*1.7)*.8);const Ce=C0(Te);return Ce.computeVertexNormals(),Ce.toNonIndexed()})),x=new ln(.13,.25,17,7);x.translate(0,8.5,0);const S=Ih([0,1,2].map(X=>{const Te=new au(1.7-X*.3,2);Te.scale(.9,1.3,.9),Te.translate(Math.sin(X*2)*.5,8.5+X*1.6,Math.cos(X*2)*.5);const Ce=C0(Te);return Ce.computeVertexNormals(),Ce.toNonIndexed()})),R=new ln(.08,.15,11,6);R.translate(0,5.5,0);const C=Math.round(5200*_),T=Math.round(1700*_),A=Math.round(700*_),k=(X,Te,Ce)=>new c0(X,Te,Ce),y=k(m,Lt(t,{albedo:2504234,snowy:.55,noise:1,fringe:1}),C),M=k(f,Lt(t,{albedo:2300436}),C),I=k(v,Lt(t,{albedo:2766370,snowy:.5,noise:1,fringe:2}),T),z=k(x,Lt(t,{albedo:5912098,noise:.6}),T),V=k(S,Lt(t,{albedo:2894356,snowy:.3,noise:1,fringe:2}),A),$=k(R,Lt(t,{albedo:12104872,noise:.9}),A),H=(X,Te,Ce,Fe,L,nt=1)=>{for(let Ue=0;Ue<Ce;Ue++){const Be=i()<.5?-1:1,be=Fe+Math.pow(i(),1.9)*60*nt,it=-(i()*(r+150)-30),Pe=Be*be,b=L[0]+i()*(L[1]-L[0]);l.set(Pe,$i(Pe,it)-.2,it),o.setFromAxisAngle(u,i()*6.28);const w=b*(.8+i()*.35);a.set(w,b,w),s.compose(l,o,a),X.setMatrixAt(Ue,s),Te.setMatrixAt(Ue,s)}};H(y,M,C,8.6,[.75,1.35]),H(I,z,T,9.5,[.9,1.35]),H(V,$,A,8.2,[.7,1.1],.4);const Y=new $n;Y.add(y,M,I,z,V,$),n.add(Y);const N=new $n,K=new ln(.035,.035,2.2,6);K.translate(0,1.1,0);const Q=Lt(t,{albedo:4473924,gloss:.02});for(const X of[100,200,300,500,750]){const Te=R0((nt,Ue,Be)=>{nt.fillStyle="rgba(14,64,150,1)",nt.fillRect(0,0,Ue,Be),nt.strokeStyle="#ffffff",nt.lineWidth=14,nt.strokeRect(16,16,Ue-32,Be-32),nt.fillStyle="#ffffff",nt.font="700 120px Arial",nt.textAlign="center",nt.textBaseline="middle",nt.fillText(String(X),Ue/2,Be/2-8),nt.font="600 46px Arial",nt.fillText("meter",Ue/2,Be/2+76)},256,256),Ce=$i(5,-X),Fe=new We(new oi(.7,.7),Lt(t,{albedo:16777215,map:Te}));Fe.position.set(5,Ce+2,-X),Fe.rotation.y=.12;const L=new We(K,Q);L.position.set(5,Ce,-X-.03),N.add(Fe,L)}n.add(N);const oe=R0((X,Te,Ce)=>{X.clearRect(0,0,Te,Ce);const Fe=L=>{X.beginPath(),X.moveTo(Te/2,10+L*1.9),X.lineTo(Te-8-L*1.6,Ce-30-L),X.lineTo(8+L*1.6,Ce-30-L),X.closePath()};X.lineJoin="round",Fe(0),X.fillStyle="#ffffff",X.fill(),Fe(6),X.fillStyle="#d0101a",X.fill(),Fe(34),X.fillStyle="#f7c600",X.fill(),X.save(),X.translate(Te/2-70,Ce-170),X.scale(1.4,1.4),X.fillStyle="#111",X.beginPath(),X.moveTo(10,40),X.bezierCurveTo(14,26,40,20,62,24),X.lineTo(76,18),X.lineTo(84,22),X.lineTo(98,30),X.lineTo(100,38),X.lineTo(90,38),X.lineTo(82,34),X.lineTo(78,46),X.lineTo(78,68),X.lineTo(73,68),X.lineTo(72,50),X.lineTo(66,50),X.lineTo(66,68),X.lineTo(61,68),X.lineTo(60,50),X.lineTo(30,50),X.lineTo(28,68),X.lineTo(23,68),X.lineTo(22,52),X.lineTo(18,52),X.lineTo(17,68),X.lineTo(12,68),X.lineTo(11,50),X.closePath(),X.fill(),X.beginPath(),X.moveTo(78,18),X.lineTo(72,6),X.lineTo(76,10),X.lineTo(78,3),X.lineTo(80,10),X.lineTo(84,4),X.lineTo(83,16),X.closePath(),X.fill(),X.restore()}),Ae=$i(5.2,-300),Ve=new We(new oi(1.25,1.25),Lt(t,{albedo:16777215,map:oe}));Ve.position.set(5.2,Ae+2.1,-300),Ve.rotation.y=.1;const q=new We(K,Q);q.position.set(5.2,Ae,-300.03),n.add(Ve,q);const te=new Ex;te.moveTo(-.95,0),te.quadraticCurveTo(0,.1,.95,0),te.lineTo(.9,1.9),te.lineTo(-.9,1.9),te.closePath();const ue=new qd(te,12);ue.rotateX(-Math.PI/2);const ce=new Dt({uniforms:{uGlow:{value:.01}},side:jn,vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform float uGlow; varying vec2 vP;
      void main(){
        // dark glossy paint reflecting a hint of the lit scene ahead; brighter toward the front edge and the centre crease
        float front = smoothstep(1.9, 0.0, vP.y);
        float crease = exp(-pow(vP.x / 0.22, 2.0)) * 0.35 + exp(-pow((abs(vP.x) - 0.62) / 0.05, 2.0)) * 0.5;
        float edge = smoothstep(0.08, 0.0, vP.y - 0.05 * (1.0 - vP.x * vP.x));
        float l = uGlow * (0.04 + 0.5 * pow(1.0 - front, 2.5) + crease * (1.0 - front) * 0.6 + edge * 1.4);
        gl_FragColor = vec4(vec3(l) * vec3(0.92, 0.95, 1.0), 1.0);
      }`}),Re=new We(ue,ce);return Re.position.set(1.75,.88,-.3),Re.name="hood",n.add(Re),{group:n,snowPoles:g,forest:Y,hood:Re,signs:N}}function R2(t){const e=(a,l,u,c,h,d,p,g=0)=>{const _=new We(new Or(a,l,u),p);return _.position.set(c,h,d),_.rotation.z=g,_},n=(a,l,u,c,h,d)=>{const p=new We(new ln(a,a*.85,l,8),d);return p.position.set(u,c,h),p},r=((a,l)=>{const u=Lt(t,{albedo:a,snowy:.4}),c=new $n;c.add(e(1.25,.55,.42,0,1,0,u));for(const[d,p]of[[-.5,-.13],[-.5,.13],[.5,-.13],[.5,.13]])c.add(n(.045,.8,d,.4,p,u));c.add(e(.2,.5,.2,.68,1.38,0,u,-.5)),c.add(e(.38,.2,.18,.86,1.62,0,u,-.2));const h=Lt(t,{albedo:1118481});for(const d of[-.07,.07]){const p=new We(new ji(.018,6,6),h);p.position.set(.98,1.66,d),c.add(p)}return c.scale.setScalar(l),c.rotation.y=.35,c})(2892055,1),s=(()=>{const a=Lt(t,{albedo:2825749,snowy:.3,noise:.5}),l=Lt(t,{albedo:5589309,noise:.5}),u=Lt(t,{albedo:1118481}),c=new $n,h=new We(new ji(1,14,10),a);h.scale.set(1.25,.55,.42),h.position.set(0,1.65,0),c.add(h);const d=new We(new ji(1,10,8),a);d.scale.set(.55,.45,.38),d.position.set(.65,1.95,0),c.add(d);const p=new We(new ln(.2,.3,.8,8),a);p.position.set(1.2,1.95,0),p.rotation.z=-.9,c.add(p);const g=new We(new ln(.13,.2,.75,8),a);g.position.set(1.62,1.95,0),g.rotation.z=-1.85,c.add(g);const _=new We(new Pu(.07,.35,6),a);_.position.set(1.45,1.7,0),_.rotation.z=Math.PI,c.add(_);for(const m of[-1,1]){const f=new We(new Or(.5,.05,.3),l);f.position.set(1.4,2.3,m*.3),f.rotation.set(m*.5,0,.3),c.add(f);const v=new We(new ji(.025,6,6),u);v.position.set(1.55,2.08,m*.13),c.add(v)}for(const[m,f]of[[-.85,-.18],[-.85,.18],[.75,-.18],[.75,.18]]){const v=new We(new ln(.06,.045,1.35,6),l);v.position.set(m,.68,f),c.add(v)}return c.rotation.y=.3,c})(),o=a=>{const l=new $n,u=Lt(t,{albedo:855570}),c=Lt(t,{albedo:4864560});l.add(n(.17,.62,0,1.15,0,u)),l.add(n(.07,.85,-.09,.43,0,u)),l.add(n(.07,.85,.09,.43,0,u)),l.add(n(.05,.6,-.23,1.15,0,u)),l.add(n(.05,.6,.23,1.15,0,u));const h=new We(new ji(.11,10,8),c);if(h.position.y=1.62,l.add(h),a){const d=Lt(t,{albedo:12118064}),p=new We(new ln(.18,.18,.05,10),d);p.position.y=1.05,l.add(p);const g=p.clone();g.position.y=1.25,l.add(g);const _=new We(new ln(.075,.075,.05,8),d);_.position.set(-.09,.25,0),l.add(_)}return l};return{deer:r,moose:s,pedestrian:o(!1),pedestrianVest:o(!0)}}const cu=1.75,b0=Math.PI/180,Wc=t=>{const e=Math.hypot(...t);return[t[0]/e,t[1]/e,t[2]/e]},P0=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],jc=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];function Uh(t,e,n=12){const i=[];for(const r of t){if(!r.on)continue;const s=e[r.id]??0,o=uu(r,.85*s,.7*s),a=r.tilt*b0,l=r.yaw*b0,u=Wc([Math.sin(l)*Math.cos(a),Math.sin(a),-Math.cos(l)*Math.cos(a)]),c=Wc(P0(u,[0,1,0])),h=Wc(P0(c,u)),d=Kd(r.kelvin),p=y2(r.kelvin)*(r.mount==="roof"?1.25:1),g=r.beam==="lowbeam";for(const _ of r.pair?[-r.pairSpacing/2,r.pairSpacing/2]:[0]){if(i.length>=n)return i;i.push({pos:[cu+_,r.height,p2[r.mount]??-2.2],fwd:u,right:c,up:h,rgb:d,as:o.as,bs:o.bs,af:o.af,bf:o.bf,Is:g?r.cd*(1-.85*s):o.Is,If:g?0:o.If,low:g,glare:p})}}return i}function b2(t,e){const n=[e[0]-t.pos[0],e[1]-t.pos[1],e[2]-t.pos[2]],i=Math.max(Math.hypot(...n),.05),r=[n[0]/i,n[1]/i,n[2]/i],s=jc(r,t.fwd);if(s<.03)return{I:0,d:i};const o=jc(r,t.right),a=jc(r,t.up),l=Math.atan2(o,s),u=Math.atan2(a,Math.hypot(o,s));if(t.low){const p=-.01+Math.min(Math.max(l*.268,0),.0125),g=.78*Math.exp(-(((l-.035)/.16)**2))+.22*Math.exp(-((l/.62)**2)),_=u-p,m=_<0?Math.exp(-((Math.max(-_-.012,0)/.038)**2))*.86+.14*Math.exp(-((_/.16)**2)):Math.exp(-((_/.0035)**2))*.98+.02*Math.exp(-((_/.12)**2));return{I:t.Is*g*m,d:i}}const c=Math.exp(-((l/t.as)**2+(u/t.bs)**2)),h=Math.exp(-((l/t.af)**4+(u/t.bf)**4)),d=.006*Math.exp(-(l*l/.7+u*u/.05))*(u>0?Math.exp(-u/.04):1);return{I:t.Is*c+t.If*(h+d),d:i}}function Nx(t,e,n){let i=0;for(const r of t){const{I:s,d:o}=b2(r,e);i+=s/(o*o)*Math.exp(-n*o)}return i}function Xc(t,e,n){for(let i=3e3;i>=2;i-=i>400?5:1){const r=$i(cu,-i);for(const s of[.3,.6,1])if(Nx(t,[cu,r+s,-i],n)>=e)return i}return 0}const ls=1.75,vi=ls-.37,P2=Math.PI/180,qc="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";class L2{constructor(e){this.canvas=e,this.scene=new zc,this.partScene=new zc,this.cam=new yn(42,1,.1,4e3),this.top=new Rh(-1,1,1,-1,1,2e3),this.mirror=new yn(42,1,.1,4e3),this.lumBuf=new Float32Array(48*27*4),this.autoK=1,this.lavg=.1,this.frameN=0,this.dynScale=1,this.slowCount=0,this.snap=3,this.fsqScene=new zc,this.fsqCam=new Rh(-1,1,1,-1,0,1),this.cfg=null,this.cover={},this.look={yaw:0,pitch:0},this.topZoom=900,this.w=1,this.h=1,this.pr=1,this.raf=0,this.last=performance.now(),this.frames=0,this.fpsT=performance.now(),this.fps=60,this.msAvg=16,this.t0=performance.now(),this.disposed=!1,this.quality="high",this.nightTex=[],this.nightReady=0,this.photoTex={},this.photo=null,this.renderer=new mA({canvas:e,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.outputColorSpace=Ni,this.renderer.toneMapping=Ti,this.renderer.autoClear=!0;const n=()=>Array.from({length:Rl},()=>new D),i=()=>Array.from({length:Rl},()=>new dt);this.shared={uLN:{value:0},uLPos:{value:n()},uLFwd:{value:n()},uLRight:{value:n()},uLUp:{value:n()},uLCol:{value:n()},uLBeam:{value:i()},uLI:{value:i()},uSigma:{value:0},uAmbient:{value:.004/Math.PI},uEye:{value:new D},uSnowAmt:{value:0},uTop:{value:0},uTopH:{value:1}};const r=new r2,s=a=>{const l=r.load(`./tex/${a}.jpg`);return l.wrapS=l.wrapT=eu,l.anisotropy=8,l.colorSpace=Sn,l};this.groundMat=o2(this.shared,{asphalt:s("asphalt"),gravel:s("gravel"),snow:s("snow")}),this.ground=new We(E2(),this.groundMat),this.ground.frustumCulled=!1,this.scene.add(this.ground),this.world=C2(this.shared),this.scene.add(this.world.group),this.targets=R2(this.shared);for(const a of Object.values(this.targets))a.visible=!1,this.scene.add(a);this.carTop=new We(new oi(1.85,4.6).rotateX(-Math.PI/2),new Vd({color:16777215})),this.carTop.position.set(ls,.05,-0),this.carTop.visible=!1,this.scene.add(this.carTop),this.sky=new We(new ji(3e3,32,16),new Dt({side:Jt,depthWrite:!1,uniforms:{uOvercast:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_Position = p.xyww; }",fragmentShader:`${Ys}
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
        }`})),this.sky.renderOrder=-10,this.scene.add(this.sky),this.photoMat=a2(this.shared),this.photoMesh=new We(new oi(2,2),this.photoMat),this.photoMesh.frustumCulled=!1,this.photoMesh.renderOrder=-20,this.photoMesh.visible=!1,this.scene.add(this.photoMesh),this.nightMat=l2(this.shared),this.nightMesh=new We(new oi(2,2),this.nightMat),this.nightMesh.frustumCulled=!1,this.nightMesh.renderOrder=-20,this.nightMesh.visible=!1,this.scene.add(this.nightMesh);{const a=lu.night,l=(g,_=!0)=>{const m=r.load(g,()=>{this.nightReady++,this.snap=3});return m.colorSpace=Sn,m.generateMipmaps=_,m.minFilter=Kt,m};this.nightTex=[...a.refs.map(g=>l(g)),l(a.mask,!1)];const u=this.nightMat.uniforms;u.tR0.value=this.nightTex[0],u.tR1.value=this.nightTex[1],u.tR2.value=this.nightTex[2],u.tMask.value=this.nightTex[3];const[c,h,d]=v2().map(g=>Uh(g,{},Ns)),p=[...c.map(g=>[g,[1,0,0]]),...h.map(g=>[g,[0,1,1]]),...d.slice(h.length).map(g=>[g,[0,0,1]])];p.slice(0,Ns).forEach(([g,_],m)=>{u.uRPos.value[m].set(...g.pos),u.uRFwd.value[m].set(...g.fwd),u.uRRight.value[m].set(...g.right),u.uRUp.value[m].set(...g.up),u.uRBeam.value[m].set(g.as,g.bs,g.af,g.bf),u.uRI.value[m].set(g.Is,g.If,g.low?1:0,1),u.uRSet.value[m].set(..._)}),u.uRN.value=Math.min(Ns,p.length),u.uRefCol.value.set(...Kd(4300)),u.uK.value=a.K??.2}for(const a of Object.values(lu)){if(a.kind==="night")continue;const l={img:null,mask:null,ready:0},u=()=>{l.ready++,this.snap=3};l.img=r.load(a.src,u),l.img.colorSpace=Sn,l.img.anisotropy=4,l.mask=r.load(a.mask,u),l.mask.colorSpace=Sn,l.mask.generateMipmaps=!1,l.mask.minFilter=Kt,this.photoTex[a.id]=l}const o=N2(this.shared);this.partMat=o(!1),this.rainMat=o(!0),this.fogMat=new Dt({uniforms:{...this.shared,uDepth:{value:null},uInvProj:{value:new He},uCamWorld:{value:new He},uCam:{value:new D},uSteps:{value:24},uScatter:{value:1},uFrame:{value:0},uSkyAmb:{value:6e-4}},vertexShader:qc,fragmentShader:`${ro}
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
        }`,depthTest:!1,depthWrite:!1}),this.compMat=new Dt({uniforms:{tScene:{value:null},tFog:{value:null},tPart:{value:null},uExposure:{value:1},uFogOn:{value:1},uRaw:{value:0},uTime:{value:0},uRes:{value:new _e},uSoft:{value:0}},vertexShader:qc,fragmentShader:`${Ys}
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
        }`,depthTest:!1,depthWrite:!1}),this.lumMat=new Dt({uniforms:{tScene:{value:null},tFog:{value:null},tPart:{value:null},uFogOn:{value:0}},vertexShader:qc,fragmentShader:`uniform sampler2D tScene, tFog, tPart; uniform float uFogOn; varying vec2 vUv;
        void main(){ vec3 c = texture2D(tScene, vUv).rgb; if (uFogOn > 0.5) { vec4 f = texture2D(tFog, vUv); c = c * f.a + f.rgb; }
          c += texture2D(tPart, vUv).rgb; float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); gl_FragColor = vec4(min(l, 50.0), 0., 0., 1.); }`,depthTest:!1,depthWrite:!1}),this.lumRT=new Ln(48,27,{type:qn,depthBuffer:!1}),this.fsq=new We(new oi(2,2),this.fogMat),this.fsq.frustumCulled=!1,this.fsqScene.add(this.fsq),this.buildParticles("high"),this.allocTargets(),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}buildParticles(e){for(const r of[this.snowNear,this.snowFar,this.snowStreak,this.rainNear,this.rainFar])r&&(this.partScene.remove(r),r.geometry.dispose());const n=e==="high"?1:.35,i=(r,s,o,a)=>{const l=new qt,u=a?r*2:r,c=new Float32Array(u*3),h=new Float32Array(u),d=new Float32Array(u);for(let _=0;_<r;_++){const m=[Math.random(),Math.random(),Math.random()],f=Math.random();for(let v=0;v<(a?2:1);v++){const x=a?_*2+v:_;c.set(m,x*3),h[x]=v,d[x]=f}}l.setAttribute("position",new en(c,3)),l.setAttribute("aEnd",new en(h,1)),l.setAttribute("aRnd",new en(d,1));const p=(a?this.rainMat:this.partMat).clone();for(const _ of Object.keys(this.shared))p.uniforms[_]=this.shared[_];p.uniforms.uBox.value=new D(...s),p.uniforms.uOrigin.value=new D(...o);const g=a?new yA(l,p):new MA(l,p);return g.frustumCulled=!1,g.userData.n=u,this.partScene.add(g),g};this.snowNear=i(Math.round(26e3*n),[14,6,22],[vi-7,0,-23],!1),this.snowFar=i(Math.round(3e4*n),[40,10,90],[vi-20,0,-110],!1),this.snowStreak=i(Math.round(22e3*n),[16,6,30],[vi-8,0,-31],!0),this.snowStreak.material.uniforms.uSnowLine.value=1,this.rainNear=i(Math.round(9e3*n),[14,6,22],[vi-7,0,-23],!0),this.rainFar=i(Math.round(12e3*n),[40,10,90],[vi-20,0,-110],!0)}allocTargets(){const e=Math.max(2,Math.floor(this.w*this.pr)),n=Math.max(2,Math.floor(this.h*this.pr));for(const s of[this.sceneRT,this.reflRT,this.fogRT,this.partRT])s==null||s.dispose();const i={type:Js,minFilter:Kt,magFilter:Kt};this.sceneRT=new Ln(e,n,{...i,minFilter:Yi,generateMipmaps:!0,depthTexture:new Gd(e,n,ur)});const r=this.quality==="high"?2:4;this.fogRT=new Ln(Math.ceil(e/r),Math.ceil(n/r),{...i,depthBuffer:!1}),this.reflRT=new Ln(Math.ceil(e/2),Math.ceil(n/2),i),this.partRT=new Ln(e,n,{...i,depthBuffer:!1})}resize(e,n){this.w=e,this.h=n,this.pr=(this.quality==="high"?Math.min(window.devicePixelRatio||1,1.5):.75)*this.dynScale,this.renderer.setPixelRatio(1),this.renderer.setSize(Math.floor(e*this.pr),Math.floor(n*this.pr),!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.cam.aspect=e/n,this.cam.fov=e/n<1?58:36,this.cam.updateProjectionMatrix(),this.allocTargets()}setConfig(e){const n=this.quality;this.cfg&&(this.cfg.scene.weather!==e.scene.weather||this.cfg.scene.view!==e.scene.view)&&(this.snap=2),this.cfg=e,this.quality=e.scene.quality,n!==this.quality&&(this.dynScale=1,this.buildParticles(this.quality),this.resize(this.w,this.h))}resetSnow(){this.cover={}}panelW(){return this.w>=768?396:0}topUpp(){return this.topZoom/Math.max(200,this.w-this.panelW()-90)}topScreenX(e){return 60+e/this.topUpp()}topLat(){return Math.max(12,this.topZoom*.075)}setupPhotoCam(e){const{yaw:n,pitch:i,tV:r,tH:s}=g2(e),o=this.w/this.h,a=Math.min(r,s/o)*.93,l=Math.max(0,Math.atan(r)-Math.atan(a))*.9,u=Math.max(0,Math.atan(s)-Math.atan(a*o))*.9;this.look.yaw=Math.max(-u,Math.min(u,this.look.yaw)),this.look.pitch=Math.max(-l,Math.min(l,this.look.pitch));const c=this.cam;c.fov=2*Math.atan(a)*180/Math.PI,c.aspect=o,c.updateProjectionMatrix(),c.position.set(e.camDx!==void 0?ls+e.camDx:vi,e.camH,0),c.rotation.set(i+this.look.pitch,n+this.look.yaw,0,"YXZ"),c.updateMatrixWorld();const h=new He().makeRotationFromEuler(new ui(i,n,0,"YXZ")),d=e.kind==="night",p=(d?this.nightMat:this.photoMat).uniforms;if(p.uPRot.value.setFromMatrix4(h).transpose(),p.uPTan.value.set(s,r),p.uInvProj.value.copy(c.projectionMatrixInverse),p.uCamWorld.value.copy(c.matrixWorld),p.uViewProj.value.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),p.uCam.value.copy(c.position),p.uWallL.value=c.position.x+e.wallL,p.uWallR.value=c.position.x+e.wallR,d){p.uReady.value=this.nightReady>=4?1:0,p.uCarRef.value.set(ls,0,-12),p.uTexel.value.set(1/800,1/532);return}p.uBlack.value=e.black,p.uAlbK.value=e.albK,p.uTreeK.value=e.treeK,p.uCrest.value=e.crest,p.uSat.value=e.sat,p.uWinter.value=e.id==="winter"?1:0;const g=this.photoTex[e.id];p.tPhoto.value=g.img,p.tMask.value=g.mask,p.uReady.value=g.ready>=2?1:0}updateLights(e){const n=this.cfg,i=n.scene,r=this.shared,s=i.weather==="snow"?i.snow:0;for(const a of n.lights){let l=this.cover[a.id]??0;a.on&&s>0&&!a.heated?l+=e*(s*(.25+i.speed/110)*(.6+i.wind/25))/70:l-=e*(a.heated&&a.on?.08:.004),l=Math.min(.92,Math.max(0,l)),this.cover[a.id]=l}const o=Uh(n.lights,this.cover,Rl);o.forEach((a,l)=>{r.uLPos.value[l].set(...a.pos),r.uLFwd.value[l].set(...a.fwd),r.uLRight.value[l].set(...a.right),r.uLUp.value[l].set(...a.up),r.uLCol.value[l].set(...a.rgb),r.uLBeam.value[l].set(a.as,a.bs,a.af,a.bf),r.uLI.value[l].set(a.Is,a.If,a.low?1:0,a.glare)}),r.uLN.value=o.length,r.uSigma.value=$d(i)}loop(e){var r;if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);const n=Math.min(.1,(e-this.last)/1e3);if(this.last=e,this.frames++,e-this.fpsT>500&&(this.fps=this.frames*1e3/(e-this.fpsT),this.frames=0,this.fpsT=e,(r=this.onStats)==null||r.call(this,{fps:this.fps,cover:{...this.cover},ms:this.msAvg,scale:this.dynScale}),this.cfg&&!document.hidden&&!location.search.includes("fixedres")&&(this.fps<30?this.slowCount++:this.slowCount=0,this.slowCount>=2&&this.dynScale>.5?(this.dynScale=Math.max(.5,this.dynScale*.82),this.slowCount=0,this.resize(this.w,this.h)):this.fps>58&&this.dynScale<1&&(this.dynScale=Math.min(1,this.dynScale*1.08),this.resize(this.w,this.h)))),!this.cfg)return;const i=performance.now();this.render(n,(e-this.t0)/1e3),this.msAvg=this.msAvg*.9+(performance.now()-i)*.1}render(e,n){var R,C,T;const i=this.cfg,r=i.scene,s=this.shared,o=this.renderer;this.updateLights(e);const a=r.view==="top",l=r.view==="photo";this.photo=l?bx(r.weather,r.photo):null;const u=r.weather==="snow"?.35+.65*r.snow:0;s.uSnowAmt.value=u,this.groundMat.uniforms.uWet.value=r.weather==="rain"?.45+.55*r.rain:r.weather==="fog"?.25:0,this.sky.material.uniforms.uOvercast.value=r.weather==="clear"?0:1,this.world.snowPoles.visible=r.snowPoles,this.world.signs.visible=r.distSigns,this.world.forest.visible=!a,this.world.hood.visible=!a,this.world.group.visible=!l,this.ground.visible=!l,this.photoMesh.visible=l&&((R=this.photo)==null?void 0:R.kind)!=="night",this.nightMesh.visible=l&&((C=this.photo)==null?void 0:C.kind)==="night",this.carTop.visible=a,this.sky.visible=!a&&!l;for(const[A,k]of Object.entries(this.targets))k.visible=r.target===A,k.position.set(r.targetSide,l?0:$i(r.targetSide,-r.targetDist),-r.targetDist);if(s.uTop.value=a?1:0,a){const A=this.topUpp(),k=this.topLat();this.top.left=-60*A,this.top.right=(this.w-60)*A,this.top.top=k,this.top.bottom=-k,this.top.position.set(ls,600,0),this.top.up.set(-1,0,0),this.top.lookAt(ls,0,0),this.top.updateProjectionMatrix(),s.uEye.value.set(0,600,0),o.setRenderTarget(this.sceneRT),o.render(this.scene,this.top),this.compMat.uniforms.uRaw.value=1,this.compMat.uniforms.tScene.value=this.sceneRT.texture,this.fsq.material=this.compMat,o.setRenderTarget(null),o.render(this.fsqScene,this.fsqCam);return}this.compMat.uniforms.uRaw.value=0;const c=this.cam,h=this.look.yaw,d=this.look.pitch-.03;if(this.photo?(this.setupPhotoCam(this.photo),this.photoMat.uniforms.uWet.value=r.weather==="rain"?.45+.55*r.rain:r.weather==="fog"?.25:0,this.nightMat.uniforms.uWet.value=r.weather==="rain"?.35+.5*r.rain:0,this.photoMat.uniforms.uOvercast.value=r.weather==="clear"?0:1):(c.fov=this.w/this.h<1?58:36,c.aspect=this.w/this.h,c.updateProjectionMatrix(),c.rotation.order="XYZ",c.position.set(vi,r.eye,0),c.lookAt(vi+Math.sin(h)*100,r.eye+Math.tan(d)*100,-Math.cos(h)*100),c.updateMatrixWorld()),s.uEye.value.copy(c.position),this.world.hood.position.y=Math.min(r.eye-.32,.86+(r.eye-1.2)*.8),this.world.hood.material.uniforms.uGlow.value=Math.min(.03,this.lavg*.035),this.groundMat.uniforms.uWet.value>0&&!l){const A=this.mirror;A.copy(c),A.position.set(c.position.x,-c.position.y,c.position.z),A.lookAt(vi+Math.sin(h)*100,-(r.eye+Math.tan(d)*100),-Math.cos(h)*100),A.updateMatrixWorld(),A.updateProjectionMatrix(),this.ground.visible=!1,this.world.hood.visible=!1,this.sky.visible=!1,this.quality==="low"&&(this.world.forest.visible=!1),s.uEye.value.copy(A.position),o.setRenderTarget(this.reflRT),o.setClearColor(0,1),o.clear(),o.render(this.scene,A),s.uEye.value.copy(c.position),this.ground.visible=!0,this.world.hood.visible=!0,this.sky.visible=!0,this.world.forest.visible=!0;const k=this.groundMat.uniforms.uReflMat.value;k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply(A.projectionMatrix).multiply(A.matrixWorldInverse),this.groundMat.uniforms.uReflTex.value=this.reflRT.texture}o.setRenderTarget(this.sceneRT),o.setClearColor(0,1),o.clear(),o.render(this.scene,c);const g=s.uSigma.value>4e-4;if(g){const A=this.fogMat.uniforms;A.uDepth.value=this.sceneRT.depthTexture,A.uInvProj.value.copy(c.projectionMatrixInverse),A.uCamWorld.value.copy(c.matrixWorld),A.uCam.value.copy(c.position),A.uSteps.value=this.quality==="high"?28:12,A.uScatter.value=r.weather==="snow"?.28:r.weather==="rain"?.13:.22,A.uFrame.value=(A.uFrame.value+1)%64,A.uSkyAmb.value=7e-4,this.fsq.material=this.fogMat,o.setRenderTarget(this.fogRT),o.render(this.fsqScene,this.fsqCam)}o.setRenderTarget(this.partRT),o.setClearColor(0,1),o.clear();const _=r.weather==="rain",m=r.weather==="snow",f=r.speed/3.6,v=this.h*this.pr/2/Math.tan(c.fov*P2/2);for(const A of[this.snowNear,this.snowFar,this.snowStreak,this.rainNear,this.rainFar]){const k=A===this.rainNear||A===this.rainFar,y=k||A===this.snowStreak,M=k?_:m;if(A.visible=M,!M)continue;const I=k?r.rain:r.snow,z=A.userData.n;A.geometry.setDrawRange(0,Math.floor(z*(.15+.85*I)/(y?2:1))*(y?2:1));const V=A.material.uniforms;V.uTime.value=n,V.uVel.value.set(k?r.wind*.35:r.wind,k?-8.5:-1.1,f),V.uShutter.value=k?.022:.012,V.uDepth.value=this.sceneRT.depthTexture,V.uRes.value.set(this.w*this.pr,this.h*this.pr),V.uFocal.value=v,V.uNear.value=c.near,V.uFar.value=c.far,V.uGain.value=k?.08:1}if((_||m)&&o.render(this.partScene,c),this.frameN++,this.frameN%15===1||this.snap>0){const A=this.lumMat.uniforms;A.tScene.value=this.sceneRT.texture,A.tFog.value=this.fogRT.texture,A.tPart.value=this.partRT.texture,A.uFogOn.value=g?1:0,this.fsq.material=this.lumMat,o.setRenderTarget(this.lumRT),o.render(this.fsqScene,this.fsqCam);try{o.readRenderTargetPixels(this.lumRT,0,0,48,27,this.lumBuf);let k=0,y=0;for(let M=0;M<27;M++)for(let I=0;I<48;I++){const z=Math.exp(-(((I-24)/18)**2+((M-15)/9)**2));k+=this.lumBuf[(M*48+I)*4]*z,y+=z}this.lavg=k/y}catch{}}const x=r.autoExposure?Math.min(2.5,Math.max(.06,Math.pow(.12/Math.max(this.lavg,1e-4),.6))):1;this.snap>0?(this.snap--,this.autoK=x):this.autoK+=(x-this.autoK)*Math.min(1,e*2.5);const S=this.compMat.uniforms;S.tScene.value=this.sceneRT.texture,S.tFog.value=this.fogRT.texture,S.tPart.value=this.partRT.texture,S.uFogOn.value=g?1:0,S.uExposure.value=1.1*this.autoK*Math.pow(2,r.exposure),S.uTime.value=n,S.uSoft.value=((T=this.photo)==null?void 0:T.kind)==="night"?.45:this.photo?.2:0,S.uRes.value.set(this.w*this.pr,this.h*this.pr),this.fsq.material=this.compMat,o.setRenderTarget(null),o.render(this.fsqScene,this.fsqCam)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.renderer.dispose()}}function N2(t){return e=>new Dt({uniforms:{...t,uTime:{value:0},uBox:{value:new D},uOrigin:{value:new D},uVel:{value:new D},uDepth:{value:null},uRes:{value:new _e},uFocal:{value:800},uNear:{value:.1},uFar:{value:4e3},uGain:{value:1},uShutter:{value:.02},uSnowLine:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Gf,vertexShader:`${ro}
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
      }`})}const Dx=()=>({weather:"clear",rain:.6,snow:.7,wind:6,fog:.45,eye:1.2,target:"moose",targetDist:220,targetSide:1,snowPoles:!0,distSigns:!1,exposure:0,quality:"high",speed:80,view:"photo",photo:"auto",autoExposure:!0});function Ix(){return{A:[ri("purelux"),ri("lowbeam"),ri("highbeam")],B:[ri("lowbeam"),ri("bar30"),ri("highbeam")],scene:Dx(),slot:"A"}}const D2=t=>btoa(unescape(encodeURIComponent(t))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),I2=t=>decodeURIComponent(escape(atob(t.replace(/-/g,"+").replace(/_/g,"/"))));function L0(t){return"#c="+D2(JSON.stringify(t))}function U2(t){const e=/c=([^&]+)/.exec(t);if(!e)return null;try{const n=JSON.parse(I2(e[1]));return!n.A||!n.scene?null:{...Ix(),...n,scene:{...Dx(),...n.scene}}}catch{return null}}function _n({title:t,children:e,right:n}){return P.jsxs("div",{className:"py-4 border-b border-white/[0.06] last:border-0",children:[P.jsxs("div",{className:"flex items-center justify-between mb-3",children:[P.jsx("div",{className:"text-[11px] font-semibold tracking-[0.08em] uppercase text-white/45",children:t}),n]}),P.jsx("div",{className:"space-y-3",children:e})]})}function ct({label:t,value:e,min:n,max:i,step:r=1,onChange:s,fmt:o,className:a,hint:l}){return P.jsxs("label",{className:"block",title:l,children:[P.jsxs("div",{className:"flex justify-between text-[13px] mb-0.5",children:[P.jsx("span",{className:"text-white/75",children:t}),P.jsx("span",{className:"tnum text-white/95 font-medium",children:o?o(e):e})]}),P.jsx("input",{type:"range",className:a,min:n,max:i,step:r,value:e,onChange:u=>s(parseFloat(u.target.value))})]})}function Kn({value:t,options:e,onChange:n,size:i="md"}){return P.jsx("div",{className:"flex p-[3px] rounded-[10px] bg-white/[0.06] gap-[2px]",children:e.map(r=>P.jsx("button",{title:r.t,onClick:()=>n(r.v),className:`flex-1 rounded-[8px] ${i==="sm"?"text-[12px] py-1 px-1.5":"text-[13px] py-1.5 px-2"} font-medium transition-all whitespace-nowrap ${t===r.v?"bg-white/[0.16] text-white shadow-[0_1px_3px_rgba(0,0,0,.4)]":"text-white/55 hover:text-white/80"}`,children:r.l},r.v))})}function Ds({on:t,onChange:e,label:n,hint:i}){const r=P.jsx("button",{onClick:s=>{s.stopPropagation(),e(!t)},title:i,"aria-pressed":t,className:`relative shrink-0 w-[38px] h-[23px] rounded-full transition-colors ${t?"bg-[#30d158]":"bg-white/[0.16]"}`,children:P.jsx("span",{className:`absolute top-[2px] left-[2px] w-[19px] h-[19px] rounded-full bg-white shadow transition-transform ${t?"translate-x-[15px]":""}`})});return n?P.jsxs("div",{className:"flex items-center justify-between text-[13px] text-white/75",title:i,children:[P.jsx("span",{children:n}),r]}):r}function Is({children:t,wide:e}){const[n,i]=St.useState(!1);return P.jsxs("span",{className:"relative inline-block align-middle",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[P.jsx("button",{onClick:()=>i(!n),className:"w-[16px] h-[16px] rounded-full bg-white/10 text-[10px] leading-[16px] text-white/70 font-semibold hover:bg-white/20",children:"i"}),n&&P.jsx("span",{className:`absolute z-50 right-0 top-6 ${e?"w-[300px]":"w-[240px]"} glass-strong rounded-xl p-3 text-[12px] leading-[1.45] text-white/80 shadow-2xl normal-case tracking-normal font-normal`,children:t})]})}function Yc({k:t,v:e,sub:n}){return P.jsxs("div",{className:"rounded-xl bg-white/[0.04] px-3 py-2",children:[P.jsx("div",{className:"text-[11px] text-white/45",children:t}),P.jsx("div",{className:"text-[15px] font-semibold tnum text-white",children:e}),n&&P.jsx("div",{className:"text-[10.5px] text-white/40",children:n})]})}const F2=[{v:"spot",l:"Spot"},{v:"combo",l:"Combo"},{v:"driving",l:"Driving"},{v:"flood",l:"Flood"},{v:"laser",l:"Laser"},{v:"lowbeam",l:"Halvljus"}],Fh=t=>{const[e,n,i]=Kd(t),r=Math.max(e,n,i),s=o=>Math.round(255*Math.pow(o/r,1/2.2));return`rgb(${s(e)},${s(n)},${s(i)})`};function k2({lights:t,setLights:e,sel:n,setSel:i,cover:r,scene:s,onWipe:o,slot:a}){const[l,u]=St.useState(!1),c=t.find(p=>p.id===n)??t[0],h=(p,g)=>e(_=>_.map(m=>m.id===p?{...m,...g}:m)),d=Object.entries(Rx).reduce((p,g)=>{var _;return(p[_=g[1].group]??(p[_]=[])).push(g),p},{});return P.jsxs("div",{children:[P.jsxs(_n,{title:`Ljusuppsättning ${a}`,right:P.jsx("button",{onClick:()=>u(!l),className:"text-[12.5px] font-medium text-[#0a84ff] hover:text-[#409cff]",children:l?"Stäng":"+ Lägg till"}),children:[l&&P.jsx("div",{className:"rounded-xl bg-white/[0.04] p-2 space-y-2",children:Object.entries(d).map(([p,g])=>P.jsxs("div",{children:[P.jsx("div",{className:"text-[10.5px] uppercase tracking-wider text-white/35 px-1.5 mb-1",children:p}),g.map(([_,m])=>P.jsx("button",{onClick:()=>{const f=ri(_);f.on=!0,e(v=>[...v,f]),i(f.id),u(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-[13px] text-white/85 hover:bg-white/[0.07]",children:m.label},_))]},p))}),P.jsx("div",{className:"space-y-1.5",children:t.map(p=>{const g=uu(p),_=(c==null?void 0:c.id)===p.id,m=r[p.id]??0;return P.jsxs("div",{onClick:()=>i(p.id),className:`flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer transition-colors ${_?"bg-white/[0.10] ring-1 ring-white/[0.12]":"bg-white/[0.035] hover:bg-white/[0.06]"}`,children:[P.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:p.on?Fh(p.kelvin):"rgba(255,255,255,.15)",boxShadow:p.on?`0 0 10px ${Fh(p.kelvin)}`:"none"}}),P.jsxs("div",{className:"flex-1 min-w-0",children:[P.jsxs("div",{className:"text-[13.5px] font-medium truncate",children:[p.name,p.pair?" ×2":""]}),P.jsxs("div",{className:"text-[11.5px] text-white/45 tnum truncate",children:[p.beam==="lowbeam"?`${as(p.cd)} cd · halvljus`:`${sr(g.lux1)} @ 1 lux · ${p.kelvin} K`,p.heated&&" · värmd lins",m>.05&&P.jsxs("span",{className:"text-[#ffd60a]",children:[" · snö ",Math.round(m*100)," %"]})]})]}),P.jsx(Ds,{on:p.on,onChange:f=>h(p.id,{on:f})})]},p.id)})})]}),c&&P.jsx(O2,{l:c,upd:p=>h(c.id,p),cover:r[c.id]??0,scene:s,onWipe:o,onDelete:()=>{var p;e(g=>g.filter(_=>_.id!==c.id)),i(((p=t.find(g=>g.id!==c.id))==null?void 0:p.id)??"")}})]})}function O2({l:t,upd:e,cover:n,scene:i,onWipe:r,onDelete:s}){const o=uu(t),a=uu(t,.85*n,.7*n),l=t.preset==="purelux",u=t.beam==="lowbeam";return P.jsxs(P.Fragment,{children:[P.jsxs(_n,{title:"Valt ljus",right:P.jsx("button",{onClick:s,className:"text-[12px] text-[#ff453a]/80 hover:text-[#ff453a]",children:"Ta bort"}),children:[P.jsx("input",{value:t.name,onChange:c=>e({name:c.target.value}),className:"w-full bg-white/[0.06] rounded-lg px-3 py-2 text-[14px] font-medium outline-none focus:ring-1 ring-white/20"}),l&&P.jsx(z2,{l:t}),l&&P.jsxs("div",{children:[P.jsx("div",{className:"text-[12px] text-white/50 mb-1.5",children:"Effektläge (knapp på armaturen)"}),P.jsx(Kn,{value:t.mode??"boost",onChange:c=>e({mode:c}),options:[{v:"boost",l:"PowerBoost®",t:"17 795 lm, 750 m @ 1 lux (uppmätt). Ej vägtrafikgodkänt läge."},{v:"emark",l:"E-märkt",t:"3 103 lm, 319 m @ 1 lux (uppmätt). Vägtrafikgodkänt."}]})]}),P.jsxs("div",{className:"grid grid-cols-3 gap-1.5",children:[P.jsx(Yc,{k:"Topp",v:as(a.peak/1e3)+" kcd",sub:"candela"}),P.jsx(Yc,{k:"1 lux",v:sr(a.lux1),sub:n>.05?`ren lins ${sr(o.lux1)}`:"avstånd"}),P.jsx(Yc,{k:"0,25 lux",v:sr(a.lux025),sub:"avstånd"})]}),P.jsx("div",{className:"text-[10.5px] text-white/35 leading-snug -mt-1",children:u?"Halvljus: asymmetrisk ECE-ljusbild med skarp ljusgräns, toppvärde i candela.":`Effektivt ljusflöde ${as(o.flux)} lm. Uppskattning: I ≈ Φ / Ω (strålens rymdvinkel), avstånd = √(I / E).`})]}),!u&&P.jsxs(_n,{title:"Ljusstyrka",right:P.jsx(Is,{children:"Välj hur du anger ljuset: rått lumen (som på kartongen) och verkningsgrad, toppvärde i candela, eller tillverkarens 1 lux-avstånd. Övriga värden räknas fram ungefärligt."}),children:[P.jsx(Kn,{size:"sm",value:t.specMode,onChange:c=>e({specMode:c}),options:[{v:"lumen",l:"Lumen"},{v:"cd",l:"Candela"},{v:"lux1",l:"1 lux-avstånd"}]}),t.specMode==="lumen"&&P.jsxs(P.Fragment,{children:[P.jsx(ct,{label:l?"Lumen (uppmätt)":"Lumen (rått)",value:t.lumen,min:500,max:4e4,step:100,onChange:c=>e({lumen:c}),fmt:c=>as(c)+" lm"}),P.jsx(ct,{label:"Verklig andel ut ur linsen",value:t.efficiency,min:.3,max:1,step:.01,onChange:c=>e({efficiency:c}),fmt:c=>Math.round(c*100)+" %",hint:"Rått/teoretiskt lumen är ofta 20–40 % högre än uppmätt. 100 % för uppmätta värden."})]}),t.specMode==="cd"&&P.jsx(ct,{label:"Toppvärde",value:t.cd,min:5e3,max:2e6,step:5e3,onChange:c=>e({cd:c}),fmt:c=>as(c)+" cd"}),t.specMode==="lux1"&&P.jsx(ct,{label:"1 lux-avstånd",value:t.lux1,min:50,max:2e3,step:5,onChange:c=>e({lux1:c}),fmt:c=>c+" m"})]}),u&&P.jsx(_n,{title:"Ljusstyrka",children:P.jsx(ct,{label:"Toppvärde per lykta",value:t.cd,min:5e3,max:6e4,step:1e3,onChange:c=>e({cd:c}),fmt:c=>as(c)+" cd"})}),P.jsxs(_n,{title:"Färg",children:[P.jsx(ct,{className:"kelvin-track",label:P.jsxs("span",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"w-3 h-3 rounded-full",style:{background:Fh(t.kelvin)}}),"Färgtemperatur"]}),value:t.kelvin,min:2700,max:6500,step:100,onChange:c=>e({kelvin:c}),fmt:c=>c+" K"}),P.jsx("div",{className:"text-[10.5px] text-white/35 leading-snug -mt-1",children:"Kallare ljus (6000 K+) ger mer upplevt återsken i dimma och snö, varmare (3000 K) mindre. Kvalitativ effekt."})]}),!u&&P.jsxs(_n,{title:"Ljusbild",right:l?P.jsxs(Is,{children:["Purelux anger ”bred rektangulär ljusbild med fokuserad spot i mitten, mjukt avgränsad vertikalt”. Vinklarna är inte publicerade och är ",P.jsx("b",{children:"uppskattade"})," så att 17 795 lm ger ≈ 750 m @ 1 lux."]}):void 0,children:[P.jsx("div",{className:"grid grid-cols-3 gap-1",children:F2.filter(c=>c.v!=="lowbeam").map(c=>P.jsx("button",{onClick:()=>e({beam:c.v}),className:`text-[12.5px] py-1.5 rounded-lg ${t.beam===c.v?"bg-white/[0.16] text-white":"bg-white/[0.04] text-white/55 hover:text-white/80"}`,children:c.l},c.v))}),P.jsx(ct,{label:"Spot · bredd",value:t.hAngle,min:2,max:60,step:.5,onChange:c=>e({hAngle:c}),fmt:c=>c+"°"}),P.jsx(ct,{label:"Spot · höjd",value:t.vAngle,min:2,max:30,step:.1,onChange:c=>e({vAngle:c}),fmt:c=>c.toFixed(1)+"°"}),t.beam!=="spot"&&t.beam!=="laser"&&P.jsxs(P.Fragment,{children:[P.jsx(ct,{label:"Flood · bredd",value:t.floodH,min:10,max:120,step:1,onChange:c=>e({floodH:c}),fmt:c=>c+"°"}),P.jsx(ct,{label:"Flood · höjd",value:t.floodV,min:3,max:50,step:.5,onChange:c=>e({floodV:c}),fmt:c=>c+"°"}),t.beam!=="flood"&&P.jsx(ct,{label:"Andel i spot",value:t.spotShare,min:.05,max:.95,step:.01,onChange:c=>e({spotShare:c}),fmt:c=>Math.round(c*100)+" %"})]}),l&&P.jsx("div",{className:"text-[10.5px] text-[#ffd60a]/70",children:"Vinklar: uppskattat"})]}),P.jsxs(_n,{title:"Riktning & montering",children:[P.jsx(ct,{label:"Lutning (upp/ner)",value:t.tilt,min:-5,max:3,step:.05,onChange:c=>e({tilt:c}),fmt:c=>(c>0?"+":"")+c.toFixed(2)+"°",hint:"Extraljus riktas normalt rakt fram eller strax under horisonten."}),P.jsx(ct,{label:"Sidled",value:t.yaw,min:-15,max:15,step:.25,onChange:c=>e({yaw:c}),fmt:c=>(c>0?"+":"")+c+"°"}),P.jsx(Kn,{size:"sm",value:t.mount,onChange:c=>e({mount:c,height:h2[c]}),options:["plate","bumper","grille","roof"].map(c=>({v:c,l:d2[c]}))}),P.jsx(ct,{label:"Monteringshöjd",value:t.height,min:.3,max:2.4,step:.01,onChange:c=>e({height:c}),fmt:c=>c.toFixed(2).replace(".",",")+" m"}),P.jsx(Ds,{label:"Par (vänster + höger)",on:t.pair,onChange:c=>e({pair:c})}),t.pair&&P.jsx(ct,{label:"Avstånd mellan lamporna",value:t.pairSpacing,min:.3,max:1.8,step:.05,onChange:c=>e({pairSpacing:c}),fmt:c=>c.toFixed(2).replace(".",",")+" m"})]}),P.jsxs(_n,{title:"Lins & vinter",right:P.jsx(Is,{children:"I snöstorm fastnar snö på kalla linser (LED värmer knappt). Snön dämpar och sprider ljuset. En uppvärmd lins smälter bort den. Tiden är förkortad ungefär 10× i simulatorn."}),children:[P.jsx(Ds,{label:"Uppvärmd lins",on:t.heated,onChange:c=>e({heated:c}),hint:l?"Panther Heat: automatisk linsvärme, 46 W @ 24 V (uppmätt av Valostore)":void 0}),P.jsxs("div",{children:[P.jsxs("div",{className:"flex justify-between text-[12px] mb-1",children:[P.jsx("span",{className:"text-white/60",children:"Snö på linsen"}),P.jsxs("span",{className:"tnum",children:[Math.round(n*100)," %"]})]}),P.jsx("div",{className:"h-1.5 rounded-full bg-white/[0.08] overflow-hidden",children:P.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[#64d2ff] to-white transition-all",style:{width:`${n*100}%`}})}),n>.02&&P.jsxs("div",{className:"flex justify-between items-center mt-1.5 text-[11.5px] text-white/50",children:[P.jsxs("span",{children:["Ljusflöde −",Math.round(85*n)," %, mer spritt"]}),P.jsx("button",{onClick:r,className:"text-[#0a84ff]",children:"Torka av alla"})]}),i.weather!=="snow"&&n<.02&&P.jsx("div",{className:"text-[11px] text-white/35 mt-1",children:"Välj Snöstorm för att se skillnaden."})]})]})]})}function z2({l:t}){const e=[["Ljusflöde",t.mode==="emark"?"3 103 lm (E-märkt)":"17 795 lm (PowerBoost®)"],["Räckvidd 1 lux",t.mode==="emark"?"319 m":"750 m"],["Räckvidd 0,25 lux",t.mode==="emark"?"638 m":"1 500 m"],["Färgtemperatur","5000 K (uppmätt 5001 K)"],["Ljusbild","Combo: bred rektangulär + spot"],["Referenstal","Ref. 30"],["Effekt","259 W @ 24 V (varav linsvärme 46 W)"],["Mått / vikt","546 × 66 × 77 mm · 2 860 g"],["Täthet","IP69K · 5 mm härdat glas"],["Spänning","9–36 V DC"],["Strålvinklar","uppskattat (ej publicerat)",!0]];return P.jsxs("div",{className:"rounded-xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] ring-1 ring-white/[0.08] p-3",children:[P.jsxs("div",{className:"flex items-start justify-between gap-2",children:[P.jsxs("div",{children:[P.jsx("div",{className:"text-[13px] font-semibold leading-tight",children:"PURELUX Panther Heat S540"}),P.jsx("div",{className:"text-[11px] text-white/45",children:"Rak · 55 cm · 260 W · uppvärmd lins"})]}),P.jsxs(Is,{wide:!0,children:[P.jsx("b",{children:"Källa:"})," ",f2,". Ljusflöde och räckvidd är uppmätta av Valostore (hämtat 17 okt 2026). Strålvinklarna publiceras inte och är ",P.jsx("b",{children:"uppskattade"})," för att modellen ska ge 750 m @ 1 lux. Artikelnummer HS18593-15813 och paketet (justerbar hållare, XBB Dongle & PowerUnit) kommer från din beställning och har inte kontrollerats mot butiken."]})]}),P.jsx("div",{className:"mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[11.5px]",children:e.map(([n,i,r])=>P.jsxs(St.Fragment,{children:[P.jsx("span",{className:"text-white/45",children:n}),P.jsx("span",{className:`tnum ${r?"text-[#ffd60a]/80":"text-white/85"}`,children:i})]},n))}),P.jsx("div",{className:"text-[10.5px] text-white/35 mt-2",children:"HS18593-15813 · justerbar hållare, XBB Dongle & PowerUnit · källa: Valostore.se"})]})}const $c=t=>Math.round(t*100)+" %";function B2({scene:t,setScene:e,vis:n}){return P.jsxs("div",{children:[P.jsxs(_n,{title:"Väder",right:P.jsx(Is,{children:"Sikten modelleras med exponentiell dämpning (Koschmieder: σ = 3,912 / sikt). Ljuset dämpas både på väg ut och tillbaka till ögat, och partiklar nära lampan lyser upp och bländar."}),children:[P.jsx(Kn,{value:t.weather,onChange:i=>e({weather:i}),options:[{v:"clear",l:"Klart"},{v:"rain",l:"Regn"},{v:"snow",l:"Snöstorm"},{v:"fog",l:"Dimma"}]}),t.weather==="rain"&&P.jsx(ct,{label:"Regnmängd",value:t.rain,min:.05,max:1,step:.01,onChange:i=>e({rain:i}),fmt:$c}),t.weather==="snow"&&P.jsx(ct,{label:"Snöfall",value:t.snow,min:.05,max:1,step:.01,onChange:i=>e({snow:i}),fmt:$c}),t.weather==="fog"&&P.jsx(ct,{label:"Dimmans täthet",value:t.fog,min:.02,max:1,step:.01,onChange:i=>e({fog:i}),fmt:$c}),(t.weather==="snow"||t.weather==="rain")&&P.jsx(ct,{label:"Vind (sidled)",value:t.wind,min:-15,max:15,step:.5,onChange:i=>e({wind:i}),fmt:i=>i+" m/s"}),P.jsx(ct,{label:"Hastighet (fartvind)",value:t.speed,min:0,max:130,step:5,onChange:i=>e({speed:i}),fmt:i=>i+" km/h",hint:"Påverkar hur partiklarna rör sig mot bilen och hur snabbt snö fastnar på linserna."}),P.jsxs("div",{className:"flex justify-between text-[12.5px] text-white/60",children:[P.jsx("span",{children:"Meteorologisk sikt"}),P.jsx("span",{className:"tnum text-white",children:n>15e3?"> 15 km":sr(n)})]})]}),P.jsx(_n,{title:"Så tolkar du bilden",children:P.jsxs("ul",{className:"text-[12px] text-white/55 leading-relaxed list-disc pl-4 space-y-1",children:[P.jsx("li",{children:"Tak­monterat ljus lyser upp luften precis framför ögonen och ger mest återsken i snö och dimma."}),P.jsx("li",{children:"Lågt monterade ljus (reg.skylt/stötfångare) och varmare färg ger mindre bländning."}),P.jsx("li",{children:"Blöt asfalt speglar bort ljuset: vägen blir mörkare och glansig."})]})})]})}function V2({scene:t,setScene:e,fps:n,ms:i,scale:r}){return P.jsxs("div",{children:[P.jsxs(_n,{title:"Mål på vägen",right:P.jsx(Is,{children:"Använd målet för att bedöma upptäcktsavstånd. Rådjur och mörkt klädda fotgängare har låg reflektans (5–10 %). En fluorescerande varselväst syns betydligt bättre (inga reflexer simuleras)."}),children:[P.jsx(Kn,{size:"sm",value:t.target,onChange:s=>e({target:s}),options:[{v:"moose",l:"Älg"},{v:"deer",l:"Rådjur"},{v:"pedestrian",l:"Gående"},{v:"pedestrianVest",l:"Väst"},{v:"none",l:"Inget"}]}),P.jsx(ct,{label:"Avstånd",value:t.targetDist,min:20,max:900,step:5,onChange:s=>e({targetDist:s}),fmt:s=>s+" m"}),P.jsx(ct,{label:"Sidled",value:t.targetSide,min:-8,max:8,step:.1,onChange:s=>e({targetSide:s}),fmt:s=>(s>3.5?"dike h. ":s<-3.5?"dike v. ":s>0?"eget körfält ":"mötande ")+s.toFixed(1).replace(".",",")+" m"})]}),P.jsxs(_n,{title:"Förare & vy",children:[t.view==="photo"&&P.jsxs(P.Fragment,{children:[P.jsx(Kn,{size:"sm",value:t.photo??"auto",onChange:s=>e({photo:s}),options:[{v:"auto",l:"Nattfoto"},{v:"summer",l:"Sommar*"},{v:"winter",l:"Vinter*"}]}),P.jsx("div",{className:"text-[11px] text-white/40 -mt-1",children:"Nattfoto: en riktig fotoserie tagen på natten på samma plats med halvljus, helljus och helljus + extraljus. Bilden ljussätts om pixel för pixel med dina lampor. *Sommar och vinter är dagfoton som görs om till natt (mindre verklighetstroget). Ögonhöjden följer fotots kamerahöjd."})]}),t.view!=="photo"&&P.jsx(ct,{label:"Ögonhöjd",value:t.eye,min:1,max:2.4,step:.01,onChange:s=>e({eye:s}),fmt:s=>s.toFixed(2).replace(".",",")+" m",hint:"Personbil ≈ 1,2 m, SUV ≈ 1,45 m, lastbil ≈ 2,3 m"}),P.jsx(ct,{label:"Ögats anpassning (exponering)",value:t.exposure,min:-3,max:3,step:.1,onChange:s=>e({exposure:s}),fmt:s=>(s>0?"+":"")+s.toFixed(1).replace(".",",")+" EV",hint:"Bildens ljusstyrka är kopplad till verklig luminans (lux → cd/m²). Ändra för att simulera mörkeranpassade ögon."}),P.jsx(Ds,{label:"Automatisk ögonanpassning",on:t.autoExposure,onChange:s=>e({autoExposure:s}),hint:"Bilden anpassar sig delvis efter hur ljus scenen är, som ögat. Stäng av för helt fast exponering vid A/B-jämförelse."}),t.view==="driver"&&P.jsxs(P.Fragment,{children:[P.jsx(Ds,{label:"Avståndsskyltar (mäthjälp)",on:t.distSigns,onChange:s=>e({distSigns:s})}),P.jsx(Ds,{label:"Snöpinnar",on:t.snowPoles,onChange:s=>e({snowPoles:s})})]}),P.jsx("div",{className:"text-[11px] text-white/35",children:t.view==="photo"?"Dra i bilden för att panorera lite (begränsat så att fotot alltid passar).":"Dra i bilden för att titta runt."})]}),P.jsxs(_n,{title:"Prestanda",children:[P.jsx(Kn,{value:t.quality,onChange:s=>e({quality:s}),options:[{v:"low",l:"Snabb"},{v:"high",l:"Hög kvalitet"}]}),P.jsxs("div",{className:"flex justify-between text-[12px] text-white/50 tnum",children:[P.jsxs("span",{children:[Math.round(n)," fps"]}),P.jsxs("span",{children:["upplösning ",Math.round(r*100)," %"]})]}),P.jsx("div",{className:"text-[11px] text-white/35",children:"Upplösningen sänks automatiskt om bildfrekvensen blir låg."})]})]})}const H2={deer:"Rådjur",moose:"Älg",pedestrian:"Fotgängare",pedestrianVest:"Fotgängare m. varselväst",none:""},G2={deer:.1,moose:.06,pedestrian:.05,pedestrianVest:.05,none:0};function W2(){const t=St.useRef(null),e=St.useRef(null),[n,i]=St.useState(()=>U2(location.hash)??Ix()),[r,s]=St.useState(()=>{var M;return((M=n.A[0])==null?void 0:M.id)??""}),[o,a]=St.useState({fps:0,cover:{},ms:0}),[l,u]=St.useState("ljus"),[c,h]=St.useState(()=>window.innerWidth>=768),[d,p]=St.useState(""),[,g]=St.useState(0),_=n.slot==="A"?n.A:n.B,m=n.scene;St.useEffect(()=>{const M=new L2(t.current);e.current=M,M.onStats=z=>a(z);const I=()=>{M.resize(window.innerWidth,window.innerHeight),g(z=>z+1)};return I(),window.addEventListener("resize",I),window.__engine=M,()=>{window.removeEventListener("resize",I),M.dispose()}},[]),St.useEffect(()=>{var M;(M=e.current)==null||M.setConfig({lights:_,scene:m})},[_,m]),St.useEffect(()=>{const M=setTimeout(()=>history.replaceState(null,"",L0(n)),250);return()=>clearTimeout(M)},[n]),St.useEffect(()=>{const M=t.current;let I=null;const z=Y=>{const N=e.current;I={x:Y.clientX,y:Y.clientY,yaw:N.look.yaw,pitch:N.look.pitch},M.setPointerCapture(Y.pointerId)},V=Y=>{if(!I)return;const N=e.current;N.look.yaw=Math.max(-.6,Math.min(.6,I.yaw+(Y.clientX-I.x)*.0016)),N.look.pitch=Math.max(-.25,Math.min(.2,I.pitch-(Y.clientY-I.y)*.0016))},$=()=>{I=null},H=Y=>{var K;const N=e.current;((K=N.cfg)==null?void 0:K.scene.view)==="top"&&(Y.preventDefault(),N.topZoom=Math.max(120,Math.min(2e3,N.topZoom*Math.exp(Y.deltaY*.001))),g(Q=>Q+1))};return M.addEventListener("pointerdown",z),M.addEventListener("pointermove",V),window.addEventListener("pointerup",$),M.addEventListener("wheel",H,{passive:!1}),()=>{M.removeEventListener("pointerdown",z),M.removeEventListener("pointermove",V),window.removeEventListener("pointerup",$),M.removeEventListener("wheel",H)}},[]);const f=M=>i(I=>({...I,[I.slot]:M(I.slot==="A"?I.A:I.B)})),v=M=>i(I=>({...I,scene:{...I.scene,...M}})),x=Object.entries(o.cover).map(([M,I])=>M+(I*20|0)).join(),S=St.useMemo(()=>{const M=Uh(_,o.cover),I=$d(m),z=Xc(M,1,0),V=Xc(M,.25,0),$=Xc(M,1,I);let H=0;if(m.target!=="none"){const Y=m.target==="moose"?1.6:1;H=Nx(M,[m.targetSide,Y+(m.view==="photo"?0:$i(m.targetSide,-m.targetDist)),-m.targetDist],I)}return{r1:z,r025:V,rw:$,tE:H,sig:I,vis:_2(m)}},[_,m,x]),R=S.tE*G2[m.target]/Math.PI*Math.exp(-S.sig*m.targetDist),C=m.target==="none"?null:R>.05?["Syns tydligt","#30d158"]:R>.012?["Syns svagt","#ffd60a"]:["Syns knappt / inte","#ff453a"],T=async()=>{const M=location.origin+location.pathname+L0(n);try{await navigator.clipboard.writeText(M),p("Länk kopierad")}catch{p("Kopiera länken från adressfältet")}setTimeout(()=>p(""),2200)},A=e.current,k=m.view==="top",y=St.useMemo(()=>{const M=(A==null?void 0:A.topZoom)??900,I=M>1200?200:M>500?100:50,z=[];for(let V=0;V<=M;V+=I)z.push(V);return z},[A==null?void 0:A.topZoom,k,o.fps>0]);return P.jsxs("div",{className:"fixed inset-0 select-none",children:[P.jsx("canvas",{ref:t,className:"absolute inset-0 touch-none cursor-grab active:cursor-grabbing"}),k&&A&&P.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[y.map(M=>P.jsx("div",{className:"absolute top-0 bottom-0",style:{left:A.topScreenX(M)},children:P.jsxs("div",{className:"absolute top-[72px] -translate-x-1/2 text-[11px] tnum text-white/70 font-medium whitespace-nowrap",children:[M," m"]})},M)),P.jsxs("div",{className:"absolute left-4 md:left-6 bottom-[calc(56vh+12px)] md:bottom-6 glass rounded-2xl px-4 py-3 text-[12px] text-white/80 w-[290px]",children:[P.jsx("div",{className:"font-semibold text-white mb-1.5",children:"Isolux · belysning på 1 m höjd"}),P.jsx("div",{className:"h-2 rounded-full mb-1",style:{background:"linear-gradient(90deg,#080d29 0%,#10529e 20%,#2ec7b8 50%,#fadb5c 85%,#fffaeb 100%)"}}),P.jsxs("div",{className:"flex justify-between text-[10.5px] text-white/50 tnum mb-2",children:[P.jsx("span",{children:"0,25"}),P.jsx("span",{children:"1"}),P.jsx("span",{children:"10"}),P.jsx("span",{children:"100"}),P.jsx("span",{children:"lux"})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"w-5 h-[2px] bg-white"}),"1 lux-gräns"]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"w-5 h-[2px] border-t-2 border-dashed border-sky-300"}),"0,25 lux-gräns"]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"w-5 h-[1px] bg-white/50"}),"3 / 10 / 50 lux"]}),P.jsxs("div",{className:"text-[10.5px] text-white/40 mt-1.5",children:["Sidled förstorad (±",Math.round(A.topLat())," m). Inkluderar vädrets dämpning. Scrolla för att zooma."]})]})]}),P.jsxs("div",{className:"absolute top-3 left-3 right-3 md:right-[392px] flex items-center gap-2 md:gap-3 flex-wrap",children:[P.jsxs("div",{className:"glass rounded-2xl pl-3.5 pr-4 py-2 flex items-center gap-2.5",children:[P.jsx("div",{className:"w-6 h-6 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.7)]"}),P.jsxs("div",{className:"leading-tight",children:[P.jsx("div",{className:"text-[14px] font-semibold tracking-tight",children:"Extraljus"}),P.jsx("div",{className:"hidden md:block text-[10.5px] text-white/45 -mt-0.5",children:"Simulator · beta"})]})]}),P.jsx("div",{className:"glass rounded-2xl p-1 w-[230px] md:w-[260px]",children:P.jsx(Kn,{size:"sm",value:m.view,onChange:M=>v({view:M}),options:[{v:"photo",l:"Förarvy"},{v:"driver",l:"3D"},{v:"top",l:"Ovanifrån"}]})}),P.jsx("div",{className:"glass rounded-2xl p-1 w-[92px] md:w-[120px]",title:"Jämför två ljusuppsättningar i samma väder",children:P.jsx(Kn,{size:"sm",value:n.slot,onChange:M=>{var z;i(V=>({...V,slot:M}));const I=M==="A"?n.A:n.B;s(((z=I[0])==null?void 0:z.id)??"")},options:[{v:"A",l:"A"},{v:"B",l:"B"}]})}),P.jsx("div",{className:"glass rounded-2xl p-1 flex-1 md:flex-none md:w-[300px] min-w-[260px]",children:P.jsx(Kn,{size:"sm",value:m.weather,onChange:M=>v({weather:M}),options:[{v:"clear",l:"Klart"},{v:"rain",l:"Regn"},{v:"snow",l:"Snöstorm"},{v:"fog",l:"Dimma"}]})}),P.jsx("button",{onClick:T,className:"glass rounded-2xl px-3.5 py-2 text-[13px] font-medium text-white/85 hover:text-white",children:"Dela"})]}),P.jsx("div",{className:`absolute left-3 md:left-6 ${c?"bottom-[calc(50vh+12px)]":"bottom-[76px]"} md:bottom-6 flex flex-col gap-2 pointer-events-none ${k?"hidden md:hidden":""}`,children:P.jsxs("div",{className:"glass rounded-2xl px-3.5 md:px-4 py-2.5 md:py-3 w-[250px] md:w-[300px] pointer-events-auto",children:[P.jsxs("div",{className:"flex items-baseline justify-between",children:[P.jsxs("div",{className:"text-[11px] uppercase tracking-[0.08em] text-white/45 font-semibold",children:["Räckvidd rakt fram · ",n.slot]}),P.jsxs("div",{className:"text-[10.5px] text-white/35 tnum",children:[Math.round(o.fps)," fps"]})]}),P.jsxs("div",{className:"flex gap-5 mt-1.5",children:[P.jsxs("div",{children:[P.jsx("div",{className:"text-[20px] md:text-[24px] font-semibold tnum tracking-tight",children:sr(S.r1)}),P.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux (klart)"})]}),P.jsxs("div",{children:[P.jsx("div",{className:"text-[20px] md:text-[24px] font-semibold tnum tracking-tight text-white/80",children:sr(S.r025)}),P.jsx("div",{className:"text-[11px] text-white/45",children:"0,25 lux"})]}),m.weather!=="clear"&&P.jsxs("div",{children:[P.jsx("div",{className:"text-[20px] md:text-[24px] font-semibold tnum tracking-tight text-[#64d2ff]",children:sr(S.rw)}),P.jsx("div",{className:"text-[11px] text-white/45",children:"1 lux i vädret"})]})]}),C&&P.jsxs("div",{className:"mt-2.5 pt-2.5 border-t border-white/[0.07] flex items-center justify-between text-[12.5px]",children:[P.jsxs("span",{className:"text-white/70",children:[H2[m.target]," på ",m.targetDist," m · ",S.tE<10?S.tE.toFixed(1).replace(".",","):Math.round(S.tE)," lux"]}),P.jsxs("span",{className:"flex items-center gap-1.5 font-medium",style:{color:C[1]},children:[P.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:C[1]}}),C[0]]})]}),P.jsx("div",{className:"hidden md:block text-[10px] text-white/35 mt-2 leading-snug",children:"Ungefärlig fotometrisk modell (I ≈ Φ/Ω, E = I·e^(−σd)/d²). Inte en mätning."})]})}),P.jsxs("div",{className:`absolute glass-strong flex flex-col shadow-2xl
        md:top-3 md:right-3 md:bottom-3 md:w-[372px] md:rounded-[22px]
        left-0 right-0 bottom-0 rounded-t-[22px] md:left-auto transition-[height] ${c?"h-[50vh]":"h-[64px]"} md:h-auto`,children:[P.jsx("button",{className:"md:hidden mx-auto mt-2 mb-1 w-10 h-1.5 rounded-full bg-white/25",onClick:()=>h(!c),"aria-label":"Visa/dölj panel"}),P.jsx("div",{className:"px-4 pt-2 md:pt-4 pb-2",children:P.jsx(Kn,{value:l,onChange:M=>{u(M),h(!0)},options:[{v:"ljus",l:"Ljus"},{v:"vader",l:"Väder"},{v:"scen",l:"Scen"}]})}),P.jsxs("div",{className:"flex-1 overflow-y-auto scroll-thin px-4 pb-4",children:[l==="ljus"&&P.jsx(k2,{lights:_,setLights:f,sel:r,setSel:s,cover:o.cover,scene:m,onWipe:()=>{var M;return(M=e.current)==null?void 0:M.resetSnow()},slot:n.slot}),l==="vader"&&P.jsx(B2,{scene:m,setScene:v,vis:S.vis}),l==="scen"&&P.jsx(V2,{scene:m,setScene:v,fps:o.fps,ms:o.ms,scale:o.scale??1})]})]}),m.view==="photo"&&(()=>{const M=bx(m.weather,m.photo);return P.jsxs("a",{href:M.url,target:"_blank",rel:"noreferrer",className:"absolute left-3 top-[140px] md:left-auto md:top-auto md:right-[396px] md:bottom-3 max-w-[70vw] text-[9.5px] md:text-[10px] text-white/30 hover:text-white/60 px-2 py-1",children:["Foto: ",M.credit," · ",M.author," · ",M.license," · ",M.kind==="night"?"omljust efter dina lampor":"omgjord till natt"]})})(),d&&P.jsx("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 text-[13px]",children:d}),P.jsx("span",{className:"hidden",children:cu})]})}Wv(document.getElementById("root")).render(P.jsx(t_.StrictMode,{children:P.jsx(W2,{})}));
