!function(X){"use strict";function n(n,r,t){return t.a=n,t.f=r,t}function r(t){return n(2,t,function(r){return function(n){return t(r,n)}})}function t(e){return n(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function e(u){return n(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function B(a){return n(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function D(o){return n(7,o,function(i){return function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return o(i,a,u,e,t,r,n)}}}}}}})}function s(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function b(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function v(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function d(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function H(n,r,t,e,u,a,i,o){return 7===n.a?n.f(r,t,e,u,a,i,o):n(r)(t)(e)(u)(a)(i)(o)}function S(n,r){for(var t,e=[],u=J(n,r,0,e);u&&(t=e.pop());u=J(t.a,t.b,0,e));return u}function J(n,r,t,e){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&W(5),!1;if(100<t)return e.push({a:n,b:r}),!0;for(var u in n.$<0&&(n=jr(n),r=jr(r)),n)if(!J(n[u],r[u],t+1,e))return!1;return!0}function c(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(void 0===n.$)return(t=c(n.a,r.a))||(t=c(n.b,r.b))?t:c(n.c,r.c);for(;n.b&&r.b&&!(t=c(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var F=r(function(n,r){n=c(n,r);return n<0?yr:n?kr:mr}),M=0;var l={$:0};function P(n,r){return{$:1,a:n,b:r}}var V=r(P);function $(n){for(var r=l,t=n.length;t--;)r={$:1,a:n[t],b:r};return r}function G(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var I=t(function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(s(n,r.a,t.a));return $(e)});var U=t(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),Y=r(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,{a:t,b:r}});function W(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var K=Math.ceil,u=Math.floor,Q=Math.log;var Z=r(function(n,r){return r.split(n)}),nn=r(function(n,r){return r.join(n)});var rn=r(function(n,r){for(var t=r.length;t--;){var e=r[t],u=r.charCodeAt(t);if(!n(e=u<56320||57343<u?e:r[--t]+e))return!1}return!0});var tn={$:2,b:function(n){return"string"==typeof n?j(n):n instanceof String?j(n+""):g("a STRING",n)}};var en=r(function(n,r){return{$:6,d:n,b:r}});var un=r(function(n,r){return{$:9,f:n,g:[r]}}),an=r(function(n,r){try{return h(n,JSON.parse(r))}catch(n){return w(s(Nr,"This is not valid JSON! "+n.message,r))}}),on=r(h);function h(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?j(n.c):g("null",r);case 3:return cn(r)?fn(n.b,r,$):g("a LIST",r);case 4:return cn(r)?fn(n.b,r,bn):g("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return g("an OBJECT with a field named `"+t+"`",r);var e=h(n.b,r[t]);return C(e)?e:w(s(Ar,t,e.a));case 7:t=n.e;if(!cn(r))return g("an ARRAY",r);if(r.length<=t)return g("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);e=h(n.b,r[t]);return C(e)?e:w(s(Cr,t,e.a));case 8:if("object"!=typeof r||null===r||cn(r))return g("an OBJECT",r);var u,a=l;for(u in r)if(r.hasOwnProperty(u)){e=h(n.b,r[u]);if(!C(e))return w(s(Ar,u,e.a));a={$:1,a:{a:u,b:e.a},b:a}}return j(A(a));case 9:for(var i=n.f,o=n.g,f=0;f<o.length;f++){e=h(o[f],r);if(!C(e))return e;i=i(e.a)}return j(i);case 10:e=h(n.b,r);return C(e)?h(n.h(e.a),r):e;case 11:for(var c=l,b=n.g;b.b;b=b.b){e=h(b.a,r);if(C(e))return e;c={$:1,a:e.a,b:c}}return w(_r(A(c)));case 1:return w(s(Nr,n.a,r));case 0:return j(n.a)}}function fn(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=h(n,r[a]);if(!C(i))return w(s(Cr,a,i.a));u[a]=i.a}return j(t(u))}function cn(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function bn(r){return s(ut,r.length,function(n){return r[n]})}function g(n,r){return w(s(Nr,"Expecting "+n,r))}function f(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return f(n.b,r.b);case 6:return n.d===r.d&&f(n.b,r.b);case 7:return n.e===r.e&&f(n.b,r.b);case 9:return n.f===r.f&&sn(n.g,r.g);case 10:return n.h===r.h&&f(n.b,r.b);case 11:return sn(n.g,r.g)}}function sn(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!f(n[e],r[e]))return!1;return!0}var vn=r(function(n,r){return JSON.stringify(r,null,n)+""});function dn(n){return n}function ln(n){return{$:0,a:n}}var $n=r(function(n,r){return{$:3,b:n,d:r}});var hn=0;function gn(n){n={$:0,e:hn++,f:n,g:null,h:[]};return jn(n),n}function pn(r){return{$:2,b:function(n){n({$:0,a:gn(r)})},c:null}}function mn(n,r){n.h.push(r),jn(n)}var kn=r(function(r,t){return{$:2,b:function(n){mn(r,t),n({$:0,a:M})},c:null}});var yn=!1,wn=[];function jn(n){if(wn.push(n),!yn){for(yn=!0;n=wn.shift();)!function(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return r.f.c=r.f.b(function(n){r.f=n,jn(r)});if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}(n);yn=!1}}function Nn(n,r,t,e,u,a){var n=s(on,n,r?r.flags:void 0),i=(C(n)||W(2),{}),r=t(n.a),o=r.a,f=a(c,o),t=function(n,r){var t,e;for(e in p){var u=p[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=function(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,o=n.f;function f(t){return s($n,f,{$:5,b:function(n){var r=n.a;return 0===n.$?b(a,e,r,t):i&&o?v(u,e,r.i,r.j,t):b(u,e,i?r.i:r.j,t)}})}return e.h=gn(s($n,f,n.b))}(u,r)}return t}(i,c);function c(n,r){n=s(e,n,o);f(o=n.a,r),On(i,n.b,u(o))}return On(i,r.b,u(o)),t?{ports:t}:{}}var p={};var An=r(function(r,t){return{$:2,b:function(n){r.g(t),n({$:0,a:M})},c:null}}),Cn=r(function(n,r){return s(kn,n.h,{$:0,a:r})});function _n(r){return function(n){return{$:1,k:r,l:n}}}function En(n){return{$:2,m:n}}var Ln=[],Tn=!1;function On(n,r,t){if(Ln.push({p:n,q:r,r:t}),!Tn){Tn=!0;for(var e;e=Ln.shift();)!function(n,r,t){var e,u={};for(e in Rn(!0,r,u,null),Rn(!1,t,u,null),n)mn(n[e],{$:"fx",a:u[e]||{i:l,j:l}})}(e.p,e.q,e.r);Tn=!1}}function Rn(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.t)n=r.s(n);return n}return s(n?p[r].e:p[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:l,j:l},n?t.i={$:1,a:r,b:t.i}:t.j={$:1,a:r,b:t.j},t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)Rn(n,i.a,t,e);return;case 3:Rn(n,r.o,t,{s:r.n,t:e})}}var qn;var zn="undefined"!=typeof document?document:{};function xn(n){return{$:0,a:n}}var m=r(function(a,i){return r(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:Jn(n),e:t,f:a,b:e}})})(void 0);r(function(a,i){return r(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:Jn(n),e:t,f:a,b:e}})})(void 0);var Xn=r(function(n,r){return{$:"a0",n:n,o:r}}),Bn=r(function(n,r){return{$:"a2",n:n,o:r}}),Dn=r(function(n,r){return{$:"a3",n:n,o:r}});function Hn(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}var Sn;function Jn(n){for(var r={};n.b;n=n.b){var t,e=n.a,u=e.$,a=e.n,e=e.o;"a2"===u?"className"===a?Fn(r,a,e):r[a]=e:(t=r[u]||(r[u]={}),"a3"===u&&"class"===a?Fn(t,a,e):t[a]=e)}return r}function Fn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function k(n,r){var t=n.$;if(5===t)return k(n.k||(n.k=n.m()),r);if(0===t)return zn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=k(e,a)).elm_event_node_ref=a,i}if(3===t)return Mn(i=n.h(n.g),r,n.d),i;var i=n.f?zn.createElementNS(n.f,n.c):zn.createElement(n.c);qn&&"a"==n.c&&i.addEventListener("click",qn(i)),Mn(i,r,n.d);for(var o=n.e,f=0;f<o.length;f++)i.appendChild(k(1===t?o[f]:o[f].b,r));return i}function Mn(n,r,t){for(var e in t){var u=t[e];"a1"===e?function(n,r){var t,e=n.style;for(t in r)e[t]=r[t]}(n,u):"a0"===e?function(n,r,t){var e,u=n.elmFs||(n.elmFs={});for(e in t){var a=t[e],i=u[e];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(e,i)}i=function(f,n){function c(n){var r=c.q,t=h(r.a,n);if(C(t)){for(var e,r=it(r),t=t.a,u=r?r<3?t.a:t.u:t,a=1==r?t.b:3==r&&t.X,i=(a&&n.stopPropagation(),(2==r?t.b:3==r&&t.U)&&n.preventDefault(),f);e=i.j;){if("function"==typeof e)u=e(u);else for(var o=e.length;o--;)u=e[o](u);i=i.p}i(u,a)}}return c.q=n,c}(r,a),n.addEventListener(e,i,Sn&&{passive:it(a)<2}),u[e]=i}else n.removeEventListener(e,i),u[e]=void 0}}(n,r,u):"a3"===e?function(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}(n,u):"a4"===e?function(n,r){for(var t in r){var e=r[t],u=e.f,e=e.o;void 0!==e?n.setAttributeNS(u,t,e):n.removeAttributeNS(u,t)}}(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Sn=!0}}))}catch(n){}function Pn(n,r){var t=[];return T(n,r,t,0),t}function L(n,r,t,e){r={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(r),r}function T(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void L(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,o=r.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var b=[];return T(n.k,r.k,b,0),void(0<b.length&&L(t,1,e,b));case 4:for(var s=n.j,v=r.j,d=!1,l=n.k;4===l.$;)d=!0,"object"!=typeof s?s=[s,l.j]:s.push(l.j),l=l.k;for(var $=r.k;4===$.$;)d=!0,"object"!=typeof v?v=[v,$.j]:v.push($.j),$=$.k;return d&&s.length!==v.length?void L(t,0,e,r):((d?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return;return 1}(s,v):s===v)||L(t,2,e,v),void T(l,$,t,e+1));case 0:return void(n.a!==r.a&&L(t,3,e,r.a));case 1:return void Vn(n,r,t,e,In);case 2:return void Vn(n,r,t,e,Un);case 3:if(n.h!==r.h)return void L(t,0,e,r);b=Gn(n.d,r.d),b=(b&&L(t,4,e,b),r.i(n.g,r.g));b&&L(t,5,e,b)}}}function Vn(n,r,t,e,u){var a;n.c!==r.c||n.f!==r.f?L(t,0,e,r):((a=Gn(n.d,r.d))&&L(t,4,e,a),u(n,r,t,e))}function Gn(n,r,t){var e,u,a,i,o;for(u in n)"a1"===u||"a0"===u||"a3"===u||"a4"===u?(a=Gn(n[u],r[u]||{},u))&&((e=e||{})[u]=a):u in r?(a=n[u])===(i=r[u])&&"value"!==u&&"checked"!==u||"a0"===t&&function(n,r){return n.$==r.$&&f(n.a,r.a)}(a,i)||((e=e||{})[u]=i):(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;for(o in r)o in n||((e=e||{})[o]=r[o]);return e}function In(n,r,t,e){var u=n.e,a=r.e,n=u.length,r=a.length;r<n?L(t,6,e,{v:r,i:n-r}):n<r&&L(t,7,e,{v:n,e:a});for(var i=n<r?n:r,o=0;o<i;o++){var f=u[o];T(f,a[o],t,++e),e+=f.b||0}}function Un(n,r,t,e){for(var u=[],a={},i=[],o=n.e,f=r.e,c=o.length,b=f.length,s=0,v=0,d=e;s<c&&v<b;){var l=o[s],$=f[v],h=l.a,g=$.a,p=l.b,m=$.b,k=void 0,y=void 0;if(h===g)T(p,m,u,++d),d+=p.b||0,s++,v++;else{var w,j,N,A,C=o[s+1],_=f[v+1];if(C&&(j=C.b,y=g===(w=C.a)),_&&(A=_.b,k=h===(N=_.a)),k&&y)T(p,A,u,++d),O(a,u,h,m,v,i),d+=p.b||0,R(a,u,h,j,++d),d+=j.b||0,s+=2,v+=2;else if(k)d++,O(a,u,g,m,v,i),T(p,A,u,d),d+=p.b||0,s+=1,v+=2;else if(y)R(a,u,h,p,++d),d+=p.b||0,T(j,m,u,++d),d+=j.b||0,s+=2,v+=1;else{if(!C||w!==N)break;R(a,u,h,p,++d),O(a,u,g,m,v,i),d+=p.b||0,T(j,A,u,++d),d+=j.b||0,s+=2,v+=2}}}for(;s<c;){p=(l=o[s]).b;R(a,u,l.a,p,++d),d+=p.b||0,s++}for(;v<b;){var E=E||[];O(a,u,($=f[v]).a,$.b,void 0,E),v++}(0<u.length||0<i.length||E)&&L(t,8,e,{w:u,x:i,y:E})}var Yn="_elmW6BL";function O(n,r,t,e,u,a){var i,o=n[t];if(o)return 1===o.c?(a.push({r:u,A:o}),o.c=2,T(o.z,e,i=[],o.r),o.r=u,void(o.s.s={w:i,A:o})):void O(n,r,t+Yn,e,u,a);a.push({r:u,A:o={c:0,z:e,r:u,s:void 0}}),n[t]=o}function R(n,r,t,e,u){var a,i=n[t];if(i)return 0===i.c?(i.c=2,T(e,i.z,a=[],u),void L(r,9,u,{w:a,A:i})):void R(n,r,t+Yn,e,u);a=L(r,9,u,void 0),n[t]={c:1,z:e,r:u,s:a}}function Wn(n,r,t,e){!function n(r,t,e,u,a,i,o){var f=e[u];var c=f.r;for(;c===a;){var b,s=f.$;if(1===s?Wn(r,t.k,f.s,o):8===s?(f.t=r,f.u=o,0<(b=f.s.w).length&&n(r,t,b,0,a,i,o)):9===s?(f.t=r,f.u=o,(s=f.s)&&(s.A.s=r,0<(b=s.w).length&&n(r,t,b,0,a,i,o))):(f.t=r,f.u=o),!(f=e[++u])||(c=f.r)>i)return u}var v=t.$;if(4===v){for(var d=t.k;4===d.$;)d=d.k;return n(r,d,e,u,a+1,i,r.elm_event_node_ref)}var l=t.e;var $=r.childNodes;for(var h=0;h<l.length;h++){var g=1===v?l[h]:l[h].b,p=++a+(g.b||0);if(a<=c&&c<=p&&(u=n($[h],g,e,u,a,p,o),!(f=e[u])||(c=f.r)>i))return u;a=p}return u}(n,r,t,0,0,r.b,e)}function Kn(n,r,t,e){return 0===t.length?n:(Wn(n,r,t,e),Qn(n,t))}function Qn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,e=function(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,r=k(r,t);r.elm_event_node_ref||(r.elm_event_node_ref=n.elm_event_node_ref);e&&r!==n&&e.replaceChild(r,n);return r}(n,r.s,r.u);case 4:return Mn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Qn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,e=t.v,a=n.childNodes[e];e<u.length;e++)n.insertBefore(k(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=Qn(n,t.w),n;case 8:return function(n,r){for(var t=r.s,e=function(n,r){if(n){for(var t=zn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e].A;t.appendChild(2===u.c?u.s:k(u.z,r.u))}return t}}(t.y,r),u=(n=Qn(n,t.w),t.x),a=0;a<u.length;a++){var i=u[a],o=i.A,o=2===o.c?o.s:k(o.z,r.u);n.insertBefore(o,n.childNodes[i.r])}e&&n.appendChild(e);return n}(n,r);case 5:return r.s(n);default:W(10)}}(u,e);u===n&&(n=e)}return n}function Zn(n){if(3===n.nodeType)return{$:0,a:n.textContent};if(1!==n.nodeType)return{$:0,a:""};for(var r=l,t=n.attributes,e=t.length;e--;)var u=t[e],r={$:1,a:s(Dn,u.name,u.value),b:r};for(var a=n.tagName.toLowerCase(),i=l,o=n.childNodes,e=o.length;e--;)i={$:1,a:Zn(o[e]),b:i};return b(m,a,r,i)}var nr=e(function(r,n,t,i){return Nn(n,i,r.ba,r.bB,r.bw,function(t,n){var e=r.bD,u=i.node,a=Zn(u);return tr(n,function(n){var n=e(n),r=Pn(a,n);u=Kn(u,a,r,t),a=n})})}),rr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function tr(t,e){e(t);var u=0;function a(){u=1===u?0:(rr(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&rr(a),u=2)}}var er=t(function(e,u,a){return{$:2,b:function(r){function t(n){r(u(a.a3.a(n)))}var n=new XMLHttpRequest;n.addEventListener("error",function(){t(mt)}),n.addEventListener("timeout",function(){t(wt)}),n.addEventListener("load",function(){t(function(n,r){return s(200<=r.status&&r.status<300?pt:ht,function(n){return{bC:n.responseURL,bu:n.status,bv:n.statusText,ak:function(n){if(!n)return jt;for(var r=jt,t=n.split("\r\n"),e=t.length;e--;){var u,a,i=t[e],o=i.indexOf(": ");0<o&&(u=i.substring(0,o),a=i.substring(2+o),r=b(zt,u,function(n){return N(Nt(n)?a+", "+n.a:a)},r))}return r}(n.getAllResponseHeaders())}}(r),n(r.response))}(a.a3.b,n))}),Nt(a.aN)&&function(r,t,e){t.upload.addEventListener("progress",function(n){t.c||gn(s(At,r,{a:e,b:yt({bt:n.loaded,aH:n.total})}))}),t.addEventListener("progress",function(n){t.c||gn(s(At,r,{a:e,b:kt({bq:n.loaded,aH:n.lengthComputable?N(n.total):i})}))})}(e,n,a.aN.a);try{n.open(a.bb,a.bC,!0)}catch(n){return t(gt(a.bC))}return function(n,r){for(var t=r.ak;t.b;t=t.b)n.setRequestHeader(t.a.a,t.a.b);n.timeout=r.bz.a||0,n.responseType=r.a3.d,n.withCredentials=r.aV}(n,a),a.aX.a&&n.setRequestHeader("Content-Type",a.aX.a),n.send(a.aX.b),function(){n.c=!0,n.abort()}},c:null}});var ur=t(function(n,r,t){return{$:0,d:n,b:r,a:t}}),ar=r(function(r,t){return{$:0,d:t.d,b:t.b,a:function(n){return r(t.a(n))}}});function ir(n){return s(Or,"\n    ",s(Rr,"\n",n))}function or(n){return b(qr,r(function(n,r){return r+1}),0,n)}function fr(n){return 97<=(n=Dr(n))&&n<=122}function cr(n){return(n=Dr(n))<=90&&65<=n}function br(n){return fr(n)||cr(n)||function(n){n=Dr(n);return n<=57&&48<=n}(n)}function sr(n){return n}function vr(n){return b(ft,st(y),o(l),n)}function dr(n){return{$:0,a:n}}function lr(n){var r,t,e,u,a,i,o,f;return-1===n.$&&-1===n.d.$&&-1===n.e.$?-1!==n.e.d.$||n.e.d.a?(e=(f=n.e).b,u=f.c,a=f.d,f=f.e,d(q,1,n.b,n.c,d(q,0,(r=n.d).b,r.c,r.d,r.e),d(q,0,e,u,a,f))):(e=(t=n.e).b,u=t.c,i=(a=t.d).d,o=a.e,f=t.e,d(q,0,a.b,a.c,d(q,1,n.b,n.c,d(q,0,(r=n.d).b,r.c,r.d,r.e),i),d(q,1,e,u,o,f))):n}function $r(n){var r,t,e,u,a,i,o,f,c;return-1===n.$&&-1===n.d.$&&-1===n.e.$?-1!==n.d.d.$||n.d.d.a?(i=(c=n.e).b,o=c.c,f=c.d,c=c.e,d(q,1,r=n.b,t=n.c,d(q,0,(u=n.d).b,u.c,u.d,u=u.e),d(q,0,i,o,f,c))):(r=n.b,t=n.c,u=(e=n.d).e,i=(a=n.e).b,o=a.c,f=a.d,c=a.e,d(q,0,e.b,e.c,d(q,1,(a=e.d).b,a.c,a.d,a.e),d(q,1,r,t,u,d(q,0,i,o,f,c)))):n}function hr(n){var r,t,e,u,a,i;return-1===n.$&&-1===n.d.$?(r=n.a,t=n.b,e=n.c,i=(u=n.d).d,a=n.e,1===u.a?-1!==i.$||i.a?-1===(i=lr(n)).$?(n=i.e,d(z,i.a,i.b,i.c,hr(i.d),n)):E:d(q,r,t,e,hr(u),a):d(q,r,t,e,hr(u),a)):E}function gr(n){return{$:4,a:n}}var pr=r(function(n,r){return n}),mr=1,kr=2,yr=0,y=V,wr=t(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,a=b(n,t.b,t.c,b(wr,n,r,t.e));n=u,r=a,t=e}}),jr=function(n){return b(wr,t(function(n,r,t){return s(y,{a:n,b:r},t)}),l,n)},w=function(n){return{$:1,a:n}},Nr=r(function(n,r){return{$:3,a:n,b:r}}),Ar=r(function(n,r){return{$:0,a:n,b:r}}),Cr=r(function(n,r){return{$:1,a:n,b:r}}),j=function(n){return{$:0,a:n}},_r=function(n){return{$:2,a:n}},N=function(n){return{$:0,a:n}},i={$:1},Er=rn,Lr=vn,Tr=function(n){return n+""},Or=r(function(n,r){return s(nn,n,G(r))}),Rr=r(function(n,r){return $(s(Z,n,r))}),qr=t(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=s(n,t.a,r);n=u,r=a,t=e}}),zr=I,xr=t(function(n,r,t){for(;;){if(c(n,r)>=1)return t;var e=n,u=r-1,a=s(y,r,t);n=e,r=u,t=a}}),Xr=r(function(n,r){return b(xr,n,r,l)}),Br=r(function(n,r){return b(zr,n,s(Xr,0,or(r)-1),r)}),Dr=function(n){var r=n.charCodeAt(0);return r<55296||56319<r?r:1024*(r-55296)+n.charCodeAt(1)-56320+65536},A=function(n){return b(qr,y,l,n)},Hr=function(n){var r=n.charCodeAt(0);return isNaN(r)?i:N(r<55296||56319<r?{a:n[0],b:n.slice(1)}:{a:n[0]+n[1],b:n.slice(2)})},Sr=r(function(n,r){return"\n\n("+Tr(n+1)+(") "+ir(Jr(r)))}),Jr=function(n){return s(Fr,n,l)},Fr=r(function(n,r){for(;;)switch(n.$){case 0:var t=n.a,e=n.b,u=(u=a=void 0,1!==(u=Hr(t)).$&&(a=(u=u.a).b,function(n){return fr(n)||cr(n)}(u.a)&&s(Er,br,a)));n=e,r=s(y,u?"."+t:"['"+t+"']",r);continue;case 1:var e=n.b,a="["+Tr(n.a)+"]";n=e,r=s(y,a,r);continue;case 2:u=n.a;if(u.b){if(u.b.b)return i=(r.b?"The Json.Decode.oneOf at json"+s(Or,"",A(r)):"Json.Decode.oneOf")+" failed in the following "+Tr(or(u))+" ways:",s(Or,"\n\n",s(y,i,s(Br,Sr,u)));n=e=u.a,r=r;continue}return"Ran into a Json.Decode.oneOf with no possibilities"+(r.b?" at json"+s(Or,"",A(r)):"!");default:var i,t=n.a,o=n.b;return(i=r.b?"Problem with the value at json"+s(Or,"",A(r))+":\n\n    ":"Problem with the given value:\n\n")+(ir(s(Lr,4,o))+"\n\n")+t}var a,u}),Mr=e(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Pr=[],Vr=K,Gr=r(function(n,r){return Q(r)/Q(n)}),Ir=Vr(s(Gr,2,32)),Ur=v(Mr,0,Ir,Pr,Pr),Yr=U,Wr=u,Kr=function(n){return n.length},Qr=r(function(n,r){return 0<c(n,r)?n:r}),Zr=Y,nt=r(function(n,r){for(;;){var t=s(Zr,32,n),e=t.b,t=s(y,{$:0,a:t.a},r);if(!e.b)return A(t);n=e,r=t}}),rt=r(function(n,r){for(;;){var t=Vr(r/32);if(1===t)return s(Zr,32,n).a;n=s(nt,n,l),r=t}}),tt=r(function(n,r){var t,e;return r.b?(e=Wr(s(Gr,32,(t=32*r.b)-1)),n=n?A(r.e):r.e,n=s(rt,n,r.b),v(Mr,Kr(r.d)+t,s(Qr,5,e*Ir),n,r.d)):v(Mr,Kr(r.d),Ir,Pr,r.d)}),et=B(function(n,r,t,e,u){for(;;){if(r<0)return s(tt,!1,{e:e,b:t/32|0,d:u});var a={$:1,a:b(Yr,32,r,n)};n=n,r=r-32,t=t,e=s(y,a,e),u=u}}),ut=r(function(n,r){var t;return 0<n?d(et,r,n-(t=n%32)-32,n,l,b(Yr,t,n-t,r)):Ur}),C=function(n){return!n.$},V=un,at=function(n){return{$:0,a:n}},it=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},o=ln,rn=o(0),ot=e(function(n,r,t,e){var u,a,i,o;return e.b?(u=e.a,(e=e.b).b?(a=e.a,(e=e.b).b?(i=e.a,(e=e.b).b?(o=e.b,s(n,u,s(n,a,s(n,i,s(n,e.a,500<t?b(qr,n,r,A(o)):v(ot,n,r,t+1,o)))))):s(n,u,s(n,a,s(n,i,r)))):s(n,u,s(n,a,r))):s(n,u,r)):r}),ft=t(function(n,r,t){return v(ot,n,r,0,t)}),ct=r(function(t,n){return b(ft,r(function(n,r){return s(y,t(n),r)}),l,n)}),_=$n,bt=r(function(r,n){return s(_,function(n){return o(r(n))},n)}),st=t(function(t,n,e){return s(_,function(r){return s(_,function(n){return o(s(t,r,n))},e)},n)}),vt=An,dt=r(function(n,r){return pn(s(_,vt(n),r))}),vn=(p.Task={b:rn,c:t(function(n,r,t){return s(bt,function(n){return 0},vr(s(ct,dt(n),r)))}),d:t(function(n,r,t){return o(0)}),e:r(function(n,r){return s(bt,n,r)}),f:void 0},_n("Task"),nr),lt={$:1},$t=an,ht=r(function(n,r){return{$:3,a:n,b:r}}),gt=function(n){return{$:0,a:n}},pt=r(function(n,r){return{$:4,a:n,b:r}}),mt={$:2},kt=function(n){return{$:1,a:n}},yt=function(n){return{$:0,a:n}},wt={$:1},E={$:-2},jt=E,Nt=function(n){return!n.$},At=Cn,Ct=F,_t=r(function(n,r){for(;;){if(-2===r.$)return i;var t=r.c,e=r.d,u=r.e;switch(s(Ct,n,r.b)){case 0:n=n,r=e;continue;case 1:return N(t);default:n=n,r=u;continue}}}),q=B(function(n,r,t,e,u){return{$:-1,a:n,b:r,c:t,d:e,e:u}}),z=B(function(n,r,t,e,u){var a,i,o,f;return-1!==u.$||u.a?-1!==e.$||e.a||-1!==e.d.$||e.d.a?d(q,n,r,t,e,u):(a=e.d,f=e.e,d(q,0,e.b,e.c,d(q,1,a.b,a.c,a.d,a.e),d(q,1,r,t,f,u))):(a=u.b,i=u.c,o=u.d,u=u.e,-1!==e.$||e.a?d(q,n,a,i,d(q,0,r,t,e,o),u):d(q,0,r,t,d(q,1,e.b,e.c,e.d,f=e.e),d(q,1,a,i,o,u)))}),Et=t(function(n,r,t){if(-2===t.$)return d(q,0,n,r,E,E);var e=t.a,u=t.b,a=t.c,i=t.d,o=t.e;switch(s(Ct,n,u)){case 0:return d(z,e,u,a,b(Et,n,r,i),o);case 1:return d(q,e,u,r,i,o);default:return d(z,e,u,a,i,b(Et,n,r,o))}}),Lt=t(function(n,r,t){n=b(Et,n,r,t);return-1!==n.$||n.a?n:d(q,1,n.b,n.c,n.d,n.e)}),Tt=D(function(n,r,t,e,u,a,i){if(-1!==a.$||a.a){for(;;){if(-1!==i.$||1!==i.a)break;if(-1!==i.d.$)return $r(r);if(1===i.d.a)return $r(r);break}return r}return d(q,t,a.b,a.c,a.d,d(q,0,e,u,a.e,i))}),Ot=r(function(n,r){var t,e,u,a,i,o,f;return-2===r.$?E:(t=r.a,u=r.c,a=r.d,i=r.e,c(n,e=r.b)<0?-1===a.$&&1===a.a?-1!==(o=a.d).$||o.a?-1===(o=lr(r)).$?(f=o.e,d(z,o.a,o.b,o.c,s(Ot,n,o.d),f)):E:d(q,t,e,u,s(Ot,n,a),i):d(q,t,e,u,s(Ot,n,a),i):s(Rt,n,H(Tt,n,r,t,e,u,a,i)))}),Rt=r(function(n,r){var t,e,u,a,i;return-1===r.$?(t=r.a,e=r.c,u=r.d,a=r.e,S(n,r=r.b)?-1===(i=function(n){for(;;){if(-1!==n.$||-1!==n.d.$)return n;n=n.d}}(a)).$?d(z,t,i.b,i.c,u,hr(a)):E:d(z,t,r,e,u,s(Ot,n,a))):E}),qt=r(function(n,r){n=s(Ot,n,r);return-1!==n.$||n.a?n:d(q,1,n.b,n.c,n.d,n.e)}),zt=t(function(n,r,t){r=r(s(_t,n,t));return r.$?s(qt,n,t):b(Lt,n,r.a,t)}),xt=t(function(n,r,t){return r(n(t))}),Xt=r(function(n,r){return b(ur,"",sr,s(xt,r,n))}),Bt=r(function(n,r){return r.$?w(n(r.a)):j(r.a)}),Dt={$:2},Ht={$:1},St=r(function(n,r){switch(r.$){case 0:return w({$:0,a:r.a});case 1:return w(Ht);case 2:return w(Dt);case 3:return w({$:3,a:r.a.bu});default:return s(Bt,gr,n(r.b))}}),I=r(function(n,r){return s(Xt,n,St(function(n){return s(Bt,Jr,s($t,r,n))}))}),K={$:0},Jt=function(n){return{$:1,a:n}},Ft=r(function(n,r){return{aB:n,aL:r}}),U=o(s(Ft,jt,l)),Mt=function(t){return{$:2,b:function(n){var r=t.f;2===r.$&&r.c&&r.c(),t.f=null,n({$:0,a:M})},c:null}},Pt=pn,Vt=t(function(t,n,e){for(;;){if(!n.b)return o(e);var u,r=n.a,a=n.b;if(r.$)return u=r.a,s(_,function(n){var r=u.aN;return b(Vt,t,a,1===r.$?e:b(Lt,r.a,n,e))},Pt(b(er,t,vt(t),u)));var i=r.a,r=s(_t,i,e);if(1!==r.$)return s(_,function(n){return b(Vt,t,a,s(qt,i,e))},Mt(r.a));t=t,n=a,e=e}}),u=e(function(n,r,t,e){return s(_,function(n){return o(s(Ft,n,t))},b(Vt,n,r,e.aB))}),Gt=t(function(n,r,t){n=n(r);return n.$?t:s(y,n.a,t)}),It=r(function(n,r){return b(ft,Gt(n),l,r)}),Ut=e(function(n,r,t,e){var u=e.b;return S(r,e.a)?N(s(vt,n,u(t))):i}),Y=t(function(n,r,t){return s(_,function(n){return o(t)},vr(s(It,b(Ut,n,r.a,r.b),t.aL)))}),un=r(function(n,r){var t;return r.$?Jt({aV:(t=r.a).aV,aX:t.aX,a3:s(ar,n,t.a3),ak:t.ak,bb:t.bb,bz:t.bz,aN:t.aN,bC:t.bC}):{$:0,a:r.a}}),Yt=r(function(n,r){return{$:0,a:n,b:r}}),Wt=(p.Http={b:U,c:u,d:Y,e:un,f:r(function(n,r){return s(Yt,r.a,s(xt,r.b,n))})},_n("Http")),Kt=(_n("Http"),function(n){return Wt(Jt({aV:!1,aX:n.aX,a3:n.a3,ak:n.ak,bb:n.bb,bz:n.bz,aN:n.aN,bC:n.bC}))}({aX:K,a3:(An={a3:s(I,dr,s(V,function(n){return{aO:n}},s(en,"value",tn))),bC:"https://api.chucknorris.io/jokes/random?category=dev"}).a3,ak:l,bb:"GET",bz:i,aN:i,bC:An.bC})),rn=pr({a:lt,b:Kt}),nr=En(l),Qt={$:0},Zt=En(l),an=r(function(n,r){return n.$?{a:lt,b:Kt}:(n=n.a).$?{a:Qt,b:Zt}:{a:{$:2,a:n.a},b:Zt}}),ne={$:1},re=m("button"),te=dn,ee=r(function(n,r){return s(Bn,n,te(r))}),ue=ee("className"),a=m("div"),ae=m("figcaption"),ie=m("figure"),oe=m("h1"),fe=m("img"),ce=Xn,be=r(function(n,r){return s(ce,n,{$:0,a:r})}),x=xn,Cn=r(function(n,r){return s(Dn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),Hn(r))}),F=m("span"),se=s(a,$([ue("spinner-border"),s(Cn,"role","status")]),$([s(F,$([ue("sr-only")]),$([x("Loading...")]))])),U=vn({ba:rn,bw:pr(nr),bB:an,bD:function(n){return s(a,l,$([s(oe,l,$([x("👊 Chuck Norris 👊")])),s(ie,l,$([s(fe,$([s(ee,"src","assets/img/chuck-norris-logo.jpg")]),l),s(ae,l,$([x("Chuck Norris approves")]))])),s(a,l,$([s(a,$([ue("status-box")]),$([function(n){switch(n.$){case 0:return s(a,$([ue("alert alert-danger")]),$([x("Oops, something went wrong")]));case 1:return se;default:return s(a,l,$([x("Did you know? "+n.a.aO)]))}}(n)])),s(re,$([ue("btn btn-primary"),s(be,"click",at(ne))]),$([x("Refresh")]))]))]))}});u={Main:{init:U(at(0))(0)}},X.Elm?function n(r,t){for(var e in t)e in r?"init"==e?W(6):n(r[e],t[e]):r[e]=t[e]}(X.Elm,u):X.Elm=u}(this);