var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function f(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,f)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(f){s=[6,f];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,f=i.length;s<f;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="is-web-component";var a=0;var i=false;var s;var f=false;var l=window;var o=document;var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var c=function(){var e=false;try{o.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var $=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var v=new WeakMap;var h=function(e){return v.get(e)};var d=e("r",(function(e,r){return v.set(r.$lazyInstance$=e,r)}));var m=function(e){{var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));return v.set(e,r)}};var p=function(e,r){return r in e};var y=function(e){return console.error(e)};var g=new Map;var b=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=g.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{g.set(i,e)}return e[a]}),y)};var w=new Map;var _=[];var S=[];var x=[];var E=function(e,r){return function(t){e.push(t);if(!i){i=true;if(r&&u.$flags$&4){C(k)}else{u.raf(k)}}}};var L=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){y(t)}}e.length=0};var j=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){y(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var k=function(){a++;L(_);var e=(u.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(S,e);j(x,e);if(S.length>0){x.push.apply(x,S);S.length=0}if(i=_.length+S.length+x.length>0){u.raf(k)}else{a=0}};var C=function(e){return Promise.resolve().then(e)};var O=E(S,true);var P={};var R=function(e){return e!=null};var A=function(e){e=typeof e;return e==="object"||e==="function"};var U=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var M=e("a",(function(){if(!(l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)"))){return r.import("./p-9b741424.system.js").then((function(){u.$cssShim$=l.__stencil_cssshim;if(u.$cssShim$){return u.$cssShim$.initShim()}}))}return Promise.resolve()}));var N=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,a,i,s;return __generator(this,(function(f){switch(f.label){case 0:{u.$cssShim$=l.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(o.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,l.location.href));q(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:f.sent();f.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var q=function(e){var r=U(n);try{l[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var t=new Map;l[r]=function(n){var a=new URL(n,e).href;var i=t.get(a);if(!i){var s=o.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(l[r].m);s.remove()}}));t.set(a,i);o.head.appendChild(s)}return i}}};var I=function(e,r){if(e!=null&&!A(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var z="hydrated";var B=new WeakMap;var T=function(e,r,t){var n=w.get(e);if($&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}w.set(e,n)};var H=function(e,r,t,n){var a=F(r.$tagName$);var i=w.get(a);e=e.nodeType===11?e:o;if(i){if(typeof i==="string"){e=e.head||e;var s=B.get(e);var f=void 0;if(!s){B.set(e,s=new Set)}if(!s.has(a)){{if(u.$cssShim$){f=u.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=f["s-sc"];if(l){a=l;s=null}}else{f=o.createElement("style");f.setAttribute("data-styles","");f.innerHTML=i}e.insertBefore(f,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var V=function(e,r,t){var n=H(e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h");if(r.$flags$&2){e.classList.add(n+"-s")}}};var F=function(e,r){return"sc-"+e};var W=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=false;var s=false;var f;var l=[];var o=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){o(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!A(a)){a=String(a)}if(i&&s){l[l.length-1].$text$+=a}else{l.push(i?{$flags$:0,$text$:a}:a)}s=i}}};o(t);if(r){{f=r.key||undefined}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r,l,D)}var c={$flags$:0,$tag$:e,$children$:l.length>0?l:null,$elm$:undefined,$attrs$:r};{c.$key$=f}return c}));var G=e("H",{});var Q=function(e){return e&&e.$tag$===G};var D={forEach:function(e,r){return e.map(J).forEach(r)},map:function(e,r){return e.map(J).map(r).map(K)}};var J=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var K=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var X=function(e,r,t,n,a,i){if(t===n){return}var s=p(e,r);var f=r.toLowerCase();if(r==="class"){var l=e.classList;Y(t).forEach((function(e){return l.remove(e)}));Y(n).forEach((function(e){return l.add(e)}))}else if(r==="style"){{for(var o in t){if(!n||n[o]==null){if(o.includes("-")){e.style.removeProperty(o)}else{e.style[o]=""}}}}for(var o in n){if(!t||n[o]!==t[o]){if(o.includes("-")){e.style.setProperty(o,n[o])}else{e.style[o]=n[o]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.substr(3)}else if(p(e,f)){r=f.substr(2)}else{r=f[2]+r.substr(3)}if(t){u.rel(e,r,t,false)}if(n){u.ael(e,r,n,false)}}else{var c=A(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var $=n==null?"":n;if(t==null||e[r]!=$){e[r]=$}}else{e[r]=n}}catch(v){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;{e.setAttribute(r,n)}}}};var Y=function(e){return!e?[]:e.split(/\s+/).filter((function(e){return e}))};var Z=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||P;var s=r.$attrs$||P;{for(n in i){if(!(n in s)){X(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){X(a,n,i[n],s[n],t,r.$flags$)}};var ee=function(e,r,t,n){var a=r.$children$[t];var i=0;var l;var u;if(R(a.$text$)){a.$elm$=o.createTextNode(a.$text$)}else{l=a.$elm$=o.createElement(a.$tag$);{Z(null,a,f)}if(R(s)&&l["s-si"]!==s){l.classList.add(l["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){u=ee(e,a,i);if(u){l.appendChild(u)}}}}return a.$elm$};var re=function(e,r,t,n,a,i){var s=e;var f;for(;a<=i;++a){if(n[a]){f=ee(null,t,a);if(f){n[a].$elm$=f;s.insertBefore(f,r)}}}};var te=function(e,r,t,n){for(;r<=t;++r){if(R(e[r])){n=e[r].$elm$;se(e[r],true);n.remove()}}};var ne=function(e,r,t,n){var a=0;var i=0;var s=0;var f=0;var l=r.length-1;var o=r[0];var u=r[l];var c=n.length-1;var $=n[0];var v=n[c];var h;var d;while(a<=l&&i<=c){if(o==null){o=r[++a]}else if(u==null){u=r[--l]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(ae(o,$)){ie(o,$);o=r[++a];$=n[++i]}else if(ae(u,v)){ie(u,v);u=r[--l];v=n[--c]}else if(ae(o,v)){ie(o,v);e.insertBefore(o.$elm$,u.$elm$.nextSibling);o=r[++a];v=n[--c]}else if(ae(u,$)){ie(u,$);e.insertBefore(u.$elm$,o.$elm$);u=r[--l];$=n[++i]}else{s=-1;{for(f=a;f<=l;++f){if(r[f]&&R(r[f].$key$)&&r[f].$key$===$.$key$){s=f;break}}}if(s>=0){d=r[s];if(d.$tag$!==$.$tag$){h=ee(r&&r[i],t,s)}else{ie(d,$);r[s]=undefined;h=d.$elm$}$=n[++i]}else{h=ee(r&&r[i],t,i);$=n[++i]}if(h){{o.$elm$.parentNode.insertBefore(h,o.$elm$)}}}}if(a>l){re(e,n[c+1]==null?null:n[c+1].$elm$,t,n,i,c)}else if(i>c){te(r,a,l)}};var ae=function(e,r){if(e.$tag$===r.$tag$){{return e.$key$===r.$key$}return true}return false};var ie=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;if(!R(r.$text$)){{{Z(e,r,f)}}if(R(n)&&R(a)){ne(t,n,r,a)}else if(R(a)){if(R(e.$text$)){t.textContent=""}re(t,null,r,a,0,a.length-1)}else if(R(n)){te(n,0,n.length-1)}}else if(e.$text$!==r.$text$){t.textContent=r.$text$}};var se=function(e,r){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(r?null:e.$elm$);e.$children$&&e.$children$.forEach((function(e){se(e,r)}))}};var fe=function(e,r,t,n){var a=r.$vnode$||{$flags$:0};var i=Q(n)?n:W(null,null,n);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;{s=e["s-sc"]}ie(a,i)};var le=function(e,r,t,n){{r.$flags$|=16}var a=r.$lazyInstance$;var i=function(){return oe(e,r,t,a,n)};var s;if(n){{r.$flags$|=256}if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],t=e[1];return ve(a,r,t)}));r.$queuedListeners$=null}{s=ve(a,"componentWillLoad")}}return he(s,(function(){return O(i)}))};var oe=function(e,r,t,n,a){{r.$flags$&=~16}{e["s-lr"]=false}if(a){V(e,t,r.$modeName$)}{{r.$flags$|=4;try{fe(e,r,t,n.render())}catch(i){y(i)}r.$flags$&=~4}}if(u.$cssShim$){u.$cssShim$.updateHost(e)}{e["s-lr"]=true}{r.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach((function(e){return e()}));e["s-rc"].length=0}ue(e,r)};var ue=function(e,r,t){if(!e["s-al"]){var n=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(z)}{r.$onReadyResolve$(e)}if(!n){$e()}}if(n){if(t=n["s-al"]){t.delete(e);if(t.size===0){n["s-al"]=undefined;n["s-init"]()}}r.$ancestorComponent$=undefined}}};var ce=function(e,r){{var t=h(e);if(t.$flags$&2){le(e,t,r,false)}}};var $e=function(){{o.documentElement.classList.add(z)}{u.$flags$|=2}};var ve=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){y(n)}}return undefined};var he=function(e,r){return e&&e.then?e.then(r):r()};var de=function(e,r){return h(e).$instanceValues$.get(r)};var me=function(e,r,t,n){var a=h(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var f=a.$flags$;var l=a.$lazyInstance$;t=I(t,n.$members$[r][0]);if(t!==s&&(!(f&8)||s===undefined)){a.$instanceValues$.set(r,t);if(l){if(n.$watchers$&&f&128){var o=n.$watchers$[r];if(o){o.forEach((function(e){try{l[e](t,s,r)}catch(n){y(n)}}))}}if((f&(4|2|16))===2){le(i,a,n,false)}}}};var pe=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return de(this,n)},set:function(e){me(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=h(this);return t.$onReadyPromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;u.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var ye=function(e,r,t){r.$queuedListeners$=r.$queuedListeners$||[];var n=t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=be(e,n);var f=ge(r,i);var l=we(n);u.ael(s,a,f,l);return function(){return u.rel(s,a,f,l)}}));return function(){return n.forEach((function(e){return e()}))}};var ge=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{e.$queuedListeners$.push([r,t])}}}};var be=function(e,r){if(r&4)return o;return e};var we=function(e){return c?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var _e=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var t,a,s,f;return __generator(this,(function(l){switch(l.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=b(n);if(!i.then)return[3,2];return[4,i];case 1:i=l.sent();l.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}pe(i,n,2);i.isProxied=true}{r.$flags$|=8}try{new i(r)}catch(o){y(o)}{r.$flags$&=~8}{r.$flags$|=128}t=F(n.$tagName$);if(!w.has(t)&&i.style){a=i.style;T(t,a,!!(n.$flags$&1))}l.label=3;case 3:s=r.$ancestorComponent$;f=function(){return le(e,r,n,true)};if(s&&s["s-lr"]===false&&s["s-rc"]){s["s-rc"].push(f)}else{f()}return[2]}}))}))};var Se=function(e,r){if((u.$flags$&1)===0){var t=h(e);if(r.$listeners$){t.$rmListeners$=ye(e,t,r.$listeners$)}if(!(t.$flags$&1)){t.$flags$|=1;{var n=e;while(n=n.parentNode||n.host){if(n["s-init"]&&n["s-lr"]===false){t.$ancestorComponent$=n;(n["s-al"]=n["s-al"]||new Set).add(e);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{C((function(){return _e(e,t,r)}))}}}};var xe=function(e){if((u.$flags$&1)===0){var r=h(e);{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(u.$cssShim$){u.$cssShim$.removeHost(e)}}};var Ee=e("b",(function(e,r){if(r===void 0){r={}}var t=[];var n=r.exclude||[];var a=o.head;var i=l.customElements;var s=a.querySelector("meta[charset]");var f=o.createElement("style");var c;Object.assign(u,r);u.$resourcesUrl$=new URL(r.resourcesUrl||"./",o.baseURI).href;if(r.syncQueue){u.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var a={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{a.$watchers$={}}var s=a.$tagName$;var f=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;{t["s-lr"]=false;t["s-rc"]=[]}m(r);return t}r.prototype.connectedCallback=function(){var e=this;if(c){clearTimeout(c);c=null}u.jmp((function(){return Se(e,a)}))};r.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return xe(e)}))};r.prototype["s-init"]=function(){var e=h(this);if(e.$lazyInstance$){ue(this,e)}};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){ce(this,a)};r.prototype.componentOnReady=function(){return h(this).$onReadyPromise$};return r}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(s)&&!i.get(s)){t.push(s);i.define(s,pe(f,a,1))}}))}));f.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";f.setAttribute("data-styles","");a.insertBefore(f,s?s.nextSibling:a.firstChild);u.jmp((function(){return c=setTimeout($e,30)}))}));var Le=e("c",(function(e,r,t){var n=je(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e}))}}}));var je=function(e){return h(e).$hostElement$}}}}));