import{M as q,O as x,P as T,Q as M,g as f,R as N,S as B,T as G,V as $,z as w,W as z,X as C,G as V,Y as Z,f as D,Z as Q,b as p,_ as W,a0 as X,a1 as j,a2 as F,a3 as H}from"./CV29XL8f.js";import{s as J,g as K}from"./-uhuQs3A.js";let b=!1,O=Symbol();function ne(e,r,u){const a=u[r]??(u[r]={store:null,source:M(void 0),unsubscribe:T});if(a.store!==e&&!(O in u))if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=T;else{var v=!0;a.unsubscribe=J(e,t=>{v?a.source.v=t:N(a.source,t)}),v=!1}return e&&O in u?K(e):f(a.source)}function ae(){const e={};function r(){q(()=>{for(var u in e)e[u].unsubscribe();x(e,O,{enumerable:!1,value:!0})})}return[e,r]}function k(e){var r=b;try{return b=!1,[e(),b]}finally{b=r}}function y(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function ue(e,r,u,a){var L;var v=(u&H)!==0,t=!V||(u&Z)!==0,o=(u&Q)!==0,U=(u&F)!==0,R=!1,_;o?[_,R]=k(()=>e[r]):_=e[r];var Y=z in e||C in e,c=o&&(((L=B(e,r))==null?void 0:L.set)??(Y&&r in e&&(n=>e[r]=n)))||void 0,s=a,S=!0,P=!1,m=()=>(P=!0,S&&(S=!1,U?s=p(a):s=a),s);_===void 0&&a!==void 0&&(c&&t&&G(),_=m(),c&&c(_));var l;if(t)l=()=>{var n=e[r];return n===void 0?m():(S=!0,P=!1,n)};else{var A=(v?D:w)(()=>e[r]);A.f|=$,l=()=>{var n=f(A);return n!==void 0&&(s=void 0),n===void 0?s:n}}if((u&W)===0)return l;if(c){var h=e.$$legacy;return function(n,d){return arguments.length>0?((!t||!d||h||R)&&c(d?l():n),n):l()}}var g=!1,I=M(_),i=D(()=>{var n=l(),d=f(I);return g?(g=!1,d):I.v=n});return o&&f(i),v||(i.equals=X),function(n,d){if(arguments.length>0){const E=d?f(i):t&&o?j(n):n;if(!i.equals(E)){if(g=!0,N(I,E),P&&s!==void 0&&(s=E),y(i))return n;p(()=>f(i))}return n}return y(i)?i.v:f(i)}}export{ne as a,ue as p,ae as s};
