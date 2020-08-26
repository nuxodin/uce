var uce=function(e){"use strict";var t=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const n=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,r=/<[a-z][^>]+$/i,l=/>[^<>]*$/,o=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,a=/\s+$/,c=(e,t)=>0<t--&&(r.test(e[t])||!l.test(e[t])&&c(e,t)),i=(e,t,n)=>s.test(t)?e:`<${t}${n.replace(a,"")}></${t}>`;const{isArray:u}=Array,{indexOf:d,slice:p}=[],h=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e;const f=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),g=(e,t)=>("svg"===t?v:m)(e),m=e=>{const t=f("template");return t.innerHTML=e,t.content},v=e=>{const{content:t}=f("template"),n=f("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:s}=n.firstChild;let{length:r}=s;for(;r--;)t.appendChild(s[0]);return t},y=({childNodes:e},t)=>e[t],b=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(d.call(n.childNodes,e)),n=(e=n).parentNode;return t},{createTreeWalker:w,importNode:C}=document,x=1!=C.length,k=x?(e,t)=>C.call(document,g(e,t),!0):g,N=x?e=>w.call(document,e,129,null,!1):e=>w.call(document,e,129),$=(e,t,n)=>((e,t,n,s,r)=>{const l=n.length;let o=t.length,a=l,c=0,i=0,u=null;for(;c<o||i<a;)if(o===c){const t=a<l?i?s(n[i-1],-0).nextSibling:s(n[a-i],0):r;for(;i<a;)e.insertBefore(s(n[i++],1),t)}else if(a===i)for(;c<o;)u&&u.has(t[c])||e.removeChild(s(t[c],-1)),c++;else if(t[c]===n[i])c++,i++;else if(t[o-1]===n[a-1])o--,a--;else if(t[c]===n[a-1]&&n[i]===t[o-1]){const r=s(t[--o],-1).nextSibling;e.insertBefore(s(n[i++],1),s(t[c++],-1).nextSibling),e.insertBefore(s(n[--a],1),r),t[o]=n[a]}else{if(!u){u=new Map;let e=i;for(;e<a;)u.set(n[e],e++)}if(u.has(t[c])){const r=u.get(t[c]);if(i<r&&r<a){let l=c,d=1;for(;++l<o&&l<a&&u.get(t[l])===r+d;)d++;if(d>r-i){const l=s(t[c],0);for(;i<r;)e.insertBefore(s(n[i++],1),l)}else e.replaceChild(s(n[i++],1),s(t[c++],-1))}else c++}else e.removeChild(s(t[c++],-1))}return n})(e.parentNode,t,n,h,e),E=(e,t)=>"ref"===t?(e=>t=>{"function"==typeof t?t(e):t.current=e})(e):"aria"===t?(e=>t=>{for(const n in t){const s="role"===n?n:"aria-"+n,r=t[n];null==r?e.removeAttribute(s):e.setAttribute(s,r)}})(e):".dataset"===t?(({dataset:e})=>t=>{for(const n in t){const s=t[n];null==s?delete e[n]:e[n]=s}})(e):"."===t.slice(0,1)?((e,t)=>n=>{e[t]=n})(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,s=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(s=s.toLowerCase()),t=>{const r=u(t)?t:[t,!1];n!==r[0]&&(n&&e.removeEventListener(s,n,r[1]),(n=r[0])&&e.addEventListener(s,n,r[1]))}})(e,t):((e,t)=>{let n,s=!0;const r=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?s||(e.removeAttributeNode(r),s=!0):(r.value=t,s&&(e.setAttributeNodeNS(r),s=!1)))}})(e,t);function A(e){const{type:t,path:n}=e,s=n.reduceRight(y,this);return"node"===t?(e=>{let t,n,s=[];const r=l=>{switch(typeof l){case"string":case"number":case"boolean":t!==l&&(t=l,n?n.textContent=l:n=document.createTextNode(l),s=$(e,s,[n]));break;case"object":case"undefined":if(null==l){t!=l&&(t=l,s=$(e,s,[]));break}if(u(l)){t=l,0===l.length?s=$(e,s,[]):"object"==typeof l[0]?s=$(e,s,l):r(String(l));break}"ELEMENT_NODE"in l&&t!==l&&(t=l,s=$(e,s,11===l.nodeType?p.call(l.childNodes):[l]))}};return r})(s):"attr"===t?E(s,e.name):(e=>{let t;return n=>{t!=n&&(t=n,e.textContent=null==n?"":n)}})(s)}const O="isµ",L=t(new WeakMap),M=(e,t)=>{const s=((e,t,s)=>{const r=[],{length:l}=e;for(let s=1;s<l;s++){const l=e[s-1];r.push(n.test(l)&&c(e,s)?l.replace(n,(e,n,r)=>`${t}${s-1}=${r||'"'}${n}${r?"":'"'}`):`${l}\x3c!--${t}${s-1}--\x3e`)}r.push(e[l-1]);const a=r.join("").trim();return s?a:a.replace(o,i)})(t,O,"svg"===e),r=k(s,e),l=N(r),a=[],u=t.length-1;let d=0,p="isµ"+d;for(;d<u;){const e=l.nextNode();if(!e)throw"bad template: "+s;if(8===e.nodeType)e.textContent===p&&(a.push({type:"node",path:b(e)}),p="isµ"+ ++d);else{for(;e.hasAttribute(p);)a.push({type:"attr",path:b(e),name:e.getAttribute(p)}),e.removeAttribute(p),p="isµ"+ ++d;/^(?:style|textarea)$/i.test(e.tagName)&&e.textContent.trim()===`\x3c!--${p}--\x3e`&&(a.push({type:"text",path:b(e)}),p="isµ"+ ++d)}}return{content:r,nodes:a}},S=(e,t)=>{const{content:n,nodes:s}=L.get(t)||L.set(t,M(e,t)),r=C.call(document,n,!0);return{content:r,updates:s.map(A,r)}},T=(e,{type:t,template:n,values:s})=>{const{length:r}=s;j(e,s,r);let{entry:l}=e;l&&l.template===n&&l.type===t||(e.entry=l=((e,t)=>{const{content:n,updates:s}=S(e,t);return{type:e,template:t,content:n,updates:s,wire:null}})(t,n));const{content:o,updates:a,wire:c}=l;for(let e=0;e<r;e++)a[e](s[e]);return c||(l.wire=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;const s=p.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:s[0],lastChild:s[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(s[t++])}return e}}})(o))},j=({stack:e},t,n)=>{for(let s=0;s<n;s++){const n=t[s];n instanceof W?t[s]=T(e[s]||(e[s]={stack:[],entry:null,wire:null}),n):u(n)?j(e[s]||(e[s]={stack:[],entry:null,wire:null}),n,n.length):e[s]=null}n<e.length&&e.splice(n)};function W(e,t,n){this.type=e,this.template=t,this.values=n}const{create:B,defineProperties:z}=Object,D=e=>{const n=t(new WeakMap);return z((t,...n)=>new W(e,t,n),{for:{value(t,s){const r=n.get(t)||n.set(t,B(null));return r[s]||(r[s]=(t=>(n,...s)=>T(t,{type:e,template:n,values:s}))({stack:[],entry:null,wire:null}))}},node:{value:(t,...n)=>T({stack:[],entry:null,wire:null},{type:e,template:t,values:n}).valueOf()}})},H=t(new WeakMap),P=(e,t)=>{const n="function"==typeof t?t():t,s=H.get(e)||H.set(e,{stack:[],entry:null,wire:null}),r=n instanceof W?T(s,n):n;return r!==s.wire&&(s.wire=r,e.textContent="",e.appendChild(r.valueOf())),e},_=D("html"),R=D("svg");function q(e){for(var t=e[0],n=1,s=arguments.length;n<s;n++)t+=arguments[n]+e[n];return t}const F=customElements,{define:G}=F,{create:I,defineProperties:J,getOwnPropertyDescriptor:K,keys:Q}=Object,U="element",V=t(new Map([[U,{c:HTMLElement,e:U}]])),X=e=>document.createElement(e),Y=e=>V.get(e)||V.set(e,{c:X(e).constructor,e:e}),Z=(e,t)=>{const{attachShadow:n,attributeChanged:s,connected:r,disconnected:l,handleEvent:o,init:a,observedAttributes:c,style:i}=t,u=new WeakMap,d={},p={},h=[],f=I(null);for(let e=Q(t),n=0,{length:s}=e;n<s;n++){const s=e[n];if(/^on/.test(s)&&!/Options$/.test(s)){const e=t[s+"Options"]||!1,n=s.toLowerCase();let r=n.slice(2);h.push({type:r,options:e}),f[r]=s,n!==s&&(r=n.slice(2,3)+s.slice(3),f[r]=s,h.push({type:r,options:e}))}switch(s){case"attachShadow":case"observedAttributes":case"style":break;default:p[s]=K(t,s)}}const{length:g}=h;g&&!o&&(p.handleEvent={value(e){this[f[e.type]](e)}}),"props"in p||(p.props={get(){const e={};for(let{attributes:t}=this,{length:n}=t,s=0;s<n;s++){const{name:n,value:r}=t[s];e[n]=r}return e}}),c&&(d.observedAttributes={value:c}),p.attributeChangedCallback={value(){w(this),s&&s.apply(this,arguments)}},p.connectedCallback={value(){w(this),r&&r.apply(this,arguments)}},l&&(p.disconnectedCallback={value:l});const{c:m,e:v}=Y(t.extends||U);class y extends m{}J(y,d),J(y.prototype,p);const b=[e,y];function w(e){if(!u.has(e)){u.set(e,0),J(e,{html:{value:ee.bind(n?e.attachShadow(n):e)}});for(let t=0;t<g;t++){const{type:n,options:s}=h[t];e.addEventListener(n,e,s)}a&&a.call(e)}}v!==U&&b.push({extends:v}),G.apply(F,b),V.set(e,{c:y,e:v}),i&&(document.head.appendChild(X("style")).textContent=i(v===U?e:v+'[is="'+e+'"]'))};function ee(){return P(this,_.apply(null,arguments))}return F.get("uce-lib")||F.define("uce-lib",class extends Y(U).c{static get define(){return Z}static get render(){return P}static get html(){return _}static get svg(){return R}static get css(){return q}}),e.css=q,e.define=Z,e.html=_,e.render=P,e.svg=R,e}({});
