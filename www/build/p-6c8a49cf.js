let e,t,n,l=0,o=!1,s=!1,r=!1,c=!1;const i=window,a=document,f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},u=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),m=new WeakMap,p=e=>m.get(e),$=(e,t)=>m.set(t.o=e,t),d=(e,t)=>t in e,b=e=>console.error(e),w=new Map,y=new Map,h=[],_=[],j=[],g=(e,t)=>n=>{e.push(n),o||(o=!0,t&&4&f.t?S(k):f.raf(k))},v=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){b(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},k=()=>{l++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){b(t)}e.length=0})(h);const e=2==(6&f.t)?performance.now()+10*Math.ceil(l*(1/22)):1/0;v(_,e),v(j,e),_.length>0&&(j.push(..._),_.length=0),(o=h.length+_.length+j.length>0)?f.raf(k):l=0},S=e=>Promise.resolve().then(e),M=g(_,!0),O={},R=e=>"object"==(e=typeof e)||"function"===e,U=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_is_web_component("./p-d8631f0b.js").then(()=>{f.s=i.__stencil_cssshim}),L=async()=>{f.s=i.__stencil_cssshim;const e=new RegExp("/is-web-component(\\.esm)?\\.js($|\\?|#)"),t=Array.from(a.querySelectorAll("script")).find(t=>e.test(t.src)||"is-web-component"===t.getAttribute("data-stencil-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,i.location.href));return P(e.href),window.customElements||await __sc_import_is_web_component("./p-d0882b30.js"),Object.assign(Object.assign({},n),{resourcesUrl:e.href})}},P=e=>{const t=(()=>`__sc_import_${"is-web-component".replace(/\s|-/g,"_")}`)();try{i[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;i[t]=n=>{const o=new URL(n,e).href;let s=l.get(o);if(!s){const e=a.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${t}.m = m;`],{type:"application/javascript"})),s=new Promise(n=>{e.onload=()=>{n(i[t].m),e.remove()}}),l.set(o,s),a.head.appendChild(e)}return s}}},C=new WeakMap,x=e=>"sc-"+e,E=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,c=!1,i=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!R(l))&&(l=String(l)),r&&c?i[i.length-1].i+=l:i.push(r?T(null,l):l),c=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const f=T(e,null);return f.u=t,i.length>0&&(f.p=i),f.$=o,f.h=s,f},T=(e,t)=>({t:0,_:e,i:t,j:null,p:null,u:null,$:null,h:null}),A={},F=(e,t,n,l,o,s)=>{if(n===l)return;let r=d(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=D(n),s=D(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const c=R(l);if((r||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(a){}null==l||!1===l?e.removeAttribute(t):(!r||4&s||o)&&!c&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):d(i,c)?c.slice(2):c[2]+t.slice(3),n&&f.rel(e,t,n,!1),l&&f.ael(e,t,l,!1)},W=/\s/,D=e=>e?e.split(W):[],H=(e,t,n,l)=>{const o=11===t.j.nodeType&&t.j.host?t.j.host:t.j,s=e&&e.u||O,r=t.u||O;for(l in s)l in r||F(o,l,s[l],void 0,n,t.t);for(l in r)F(o,l,s[l],r[l],n,t.t)},N=(l,o,r,i)=>{let f,u,m,p=o.p[r],$=0;if(s||(c=!0,"slot"===p._&&(e&&i.classList.add(e+"-s"),p.t|=p.p?2:1)),null!==p.i)f=p.j=a.createTextNode(p.i);else if(1&p.t)f=p.j=a.createTextNode("");else if(f=p.j=a.createElement(2&p.t?"slot-fb":p._),H(null,p,!1),(e=>null!=e)(e)&&f["s-si"]!==e&&f.classList.add(f["s-si"]=e),p.p)for($=0;$<p.p.length;++$)(u=N(l,p,$,f))&&f.appendChild(u);return f["s-hn"]=n,3&p.t&&(f["s-sr"]=!0,f["s-cr"]=t,f["s-sn"]=p.h||"",(m=l&&l.p&&l.p[r])&&m._===p._&&l.j&&q(l.j,!1)),f},q=(e,t)=>{f.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(I(e).insertBefore(e,G(e)),e["s-ol"].remove(),e["s-ol"]=void 0,c=!0),t&&q(e,t)}f.t&=-2},B=(e,t,n,l,o,s)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(;o<=s;++o)l[o]&&(r=N(null,n,o,e))&&(l[o].j=r,c.insertBefore(r,G(t)))},V=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.j,Y(l),r=!0,o["s-ol"]?o["s-ol"].remove():q(o,!0),o.remove())},z=(e,t)=>e._===t._&&("slot"===e._?e.h===t.h:e.$===t.$),G=e=>e&&e["s-ol"]||e,I=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,J=(e,t)=>{const n=t.j=e.j,l=e.p,o=t.p;let s;null===t.i?("slot"===t._||H(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,c=0,i=0,a=0,f=t.length-1,u=t[0],m=t[f],p=l.length-1,$=l[0],d=l[p];for(;r<=f&&c<=p;)if(null==u)u=t[++r];else if(null==m)m=t[--f];else if(null==$)$=l[++c];else if(null==d)d=l[--p];else if(z(u,$))J(u,$),u=t[++r],$=l[++c];else if(z(m,d))J(m,d),m=t[--f],d=l[--p];else if(z(u,d))"slot"!==u._&&"slot"!==d._||q(u.j.parentNode,!1),J(u,d),e.insertBefore(u.j,m.j.nextSibling),u=t[++r],d=l[--p];else if(z(m,$))"slot"!==u._&&"slot"!==d._||q(m.j.parentNode,!1),J(m,$),e.insertBefore(m.j,u.j),m=t[--f],$=l[++c];else{for(i=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].$&&t[a].$===$.$){i=a;break}i>=0?((s=t[i])._!==$._?o=N(t&&t[c],n,i,e):(J(s,$),t[i]=void 0,o=s.j),$=l[++c]):(o=N(t&&t[c],n,c,e),$=l[++c]),o&&I(u.j).insertBefore(o,G(u.j))}r>f?B(e,null==l[p+1]?null:l[p+1].j,n,l,c,p):c>p&&V(t,r,f)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),B(n,null,t,o,0,o.length-1)):null!==l&&V(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=t.i:e.i!==t.i&&(n.data=t.i)},K=e=>{let t,n,l,o,s,r,c=e.childNodes;for(n=0,l=c.length;n<l;n++)if(1===(t=c[n]).nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==t["s-hn"])if(r=c[o].nodeType,""!==s){if(1===r&&s===c[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==c[o].textContent.trim()){t.hidden=!0;break}K(t)}},Q=[],X=e=>{let t,n,l,o,s=e.childNodes,c=s.length,i=0,a=0,f=0;for(c=s.length;i<c;i++){if((t=s[i])["s-sr"]&&(n=t["s-cr"]))for(o=t["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(Q.some(e=>e.g===n)||(r=!0,n["s-sn"]=o,Q.push({v:t,g:n})));1===t.nodeType&&X(t)}},Y=e=>{e.u&&e.u.ref&&e.u.ref(null),e.p&&e.p.forEach(Y)},Z=(e,t)=>{t&&!e.k&&t["s-p"].push(new Promise(t=>e.k=t))},ee=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const o=t.o,s=()=>te(e,t,n,o,l);let r;return Z(t,t.S),l&&(t.t|=256,t.M&&(t.M.forEach(([e,t])=>oe(o,e,t)),t.M=null),r=oe(o,"componentWillLoad")),se(r,()=>M(s))},te=(l,o,i,u,m)=>{const p=l["s-rc"];m&&((e,t)=>{const n=((e,t)=>{let n=x(t.O),l=y.get(n);if(e=11===e.nodeType?e:a,l)if("string"==typeof l){let t,o=C.get(e=e.head||e);o||C.set(e,o=new Set),o.has(n)||((t=a.createElement("style")).innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"),2&t.t&&e.classList.add(n+"-s"))})(l,i);try{((l,o,i,u)=>{n=l.tagName;const m=o.R||T(null,null),p=(e=>e&&e._===A)(u)?u:E(null,null,u);if(p._=null,p.t|=4,o.R=p,p.j=m.j=l,e=l["s-sc"],t=l["s-cr"],s=!1,c=r=!1,J(m,p),c){X(p.j);for(let e=0;e<Q.length;e++){const t=Q[e];if(!t.g["s-ol"]){const e=a.createTextNode("");e["s-nr"]=t.g,t.g.parentNode.insertBefore(t.g["s-ol"]=e,t.g)}}f.t|=1;for(let e=0;e<Q.length;e++){const t=Q[e],n=t.v.parentNode;let l=t.v.nextSibling,o=t.g["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t.g["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){l=e;break}}(!l&&n!==t.g.parentNode||t.g.nextSibling!==l)&&t.g!==l&&n.insertBefore(t.g,l)}f.t&=-2}r&&K(p.j),Q.length=0})(l,o,0,u.render())}catch($){b($)}o.t&=-17,o.t|=2,p&&(p.forEach(e=>e()),l["s-rc"]=void 0);{const e=l["s-p"],t=()=>ne(l,o,i);0===e.length?t():(Promise.all(e).then(t),o.t|=4,e.length=0)}},ne=(e,t,n)=>{const l=t.o,o=t.S;64&t.t||(t.t|=64,e.classList.add("hydrated"),oe(l,"componentDidLoad"),t.U(e),o||le()),t.L(e),t.k&&(t.k(),t.k=void 0),512&t.t&&S(()=>ee(e,t,n,!1)),t.t&=-517},le=()=>{a.documentElement.classList.add("hydrated"),f.t|=2},oe=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){b(l)}},se=(e,t)=>e&&e.then?e.then(t):t(),re=(e,t,n)=>{if(t.P){e.watchers&&(t.C=e.watchers);const l=Object.entries(t.P),o=e.prototype;if(l.forEach(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>p(e).T.get(t))(this,e)},set(n){((e,t,n,l)=>{const o=p(this),s=o.A,r=o.T.get(t),c=o.t,i=o.o;if(!((n=((e,t)=>null==e||R(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,l.P[t][0]))===r||8&c&&void 0!==r)&&(o.T.set(t,n),i)){if(l.C&&128&c){const e=l.C[t];e&&e.forEach(e=>{try{i[e](n,r,t)}catch(l){b(l)}})}2==(18&c)&&ee(s,o,l,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=p(this);return n.F.then(()=>n.o[e](...t))}})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){f.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},ce=e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ie=(e,t={})=>{const n=[],l=t.exclude||[],o=a.head,s=i.customElements,r=o.querySelector("meta[charset]"),c=a.createElement("style"),$=[];let d,h=!0;Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",a.baseURI).href,t.syncQueue&&(f.t|=4),e.forEach(e=>e[1].forEach(t=>{const o={t:t[0],O:t[1],P:t[2],W:t[3]};o.P=t[2],o.W=t[3],o.C={};const r=o.O,c=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,A:e,T:new Map};t.F=new Promise(e=>t.L=e),t.D=new Promise(e=>t.U=e),e["s-p"]=[],e["s-rc"]=[],m.set(e,t)})(e=this)}connectedCallback(){d&&(clearTimeout(d),d=null),h?$.push(this):f.jmp(()=>((e,t)=>{if(0==(1&f.t)){const n=()=>{},l=p(e);if(t.W&&(l.H=((e,t,n)=>{t.M=t.M||[];const l=n.map(([n,l,o])=>{const s=((e,t)=>4&t?a:e)(e,n),r=((e,t)=>n=>{256&e.t?e.o[t](n):e.M.push([t,n])})(t,o),c=(e=>({passive:0!=(1&e),capture:0!=(2&e)}))(n);return f.ael(s,l,r,c),()=>f.rel(s,l,r,c)});return()=>l.forEach(e=>e())})(e,l,t.W)),!(1&l.t)){let n;l.t|=1,n||4&t.t&&ce(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){Z(l,l.S=t);break}}t.P&&Object.entries(t.P).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),S(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=(e=>{const t=e.O.replace(/-/g,"_"),n=e.N,l=w.get(n);return l?l[t]:__sc_import_is_web_component(`./${n}.entry.js`).then(e=>(w.set(n,e),e[t]),b)})(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.C=o.watchers,re(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(c){b(c)}t.t&=-9,t.t|=128,e()}const e=x(n.O);if(!y.has(e)&&o.style){const t=()=>{};((e,t,n)=>{let l=y.get(e);u&&n?(l=l||new CSSStyleSheet).replace(t):l=t,y.set(e,l)})(e,o.style,!!(1&n.t)),t()}}const s=t.S,r=()=>ee(e,t,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(e,l,t))}n()}})(this,o))}disconnectedCallback(){f.jmp(()=>(()=>{if(0==(1&f.t)){const e=p(this),t=e.o;e.H&&(e.H(),e.H=void 0),oe(t,"componentDidUnload")}})())}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=p(e);2==(18&n.t)&&ee(e,n,t,!1)}})(this,o)}componentOnReady(){return p(this).D}};o.N=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,re(c,o,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,r?r.nextSibling:o.firstChild),h=!1,$.length>0?$.forEach(e=>e.connectedCallback()):f.jmp(()=>d=setTimeout(le,30,"timeout"))},ae=(e,t,n)=>{const l=fe(e);return{emit:e=>l.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},fe=e=>p(e).A;export{A as H,U as a,ie as b,ae as c,fe as g,E as h,L as p,$ as r};