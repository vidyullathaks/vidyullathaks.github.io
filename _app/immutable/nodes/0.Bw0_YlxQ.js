import{c as oe,a as k,t as N,n as Q}from"../chunks/CeJnAEXm.js";import"../chunks/CyFCmtGP.js";import{X as Z,f as ie,Y as ee,a6 as w,y as H,q as m,c as e,r as t,s as l,t as J,d as te}from"../chunks/9DSKxFUQ.js";import{e as c,s as re}from"../chunks/FV0aCVRz.js";import{s as ne}from"../chunks/Bzsz4Puy.js";import{a as M}from"../chunks/CJw-y7Ex.js";import{i as le}from"../chunks/BPrir2UD.js";import{o as se}from"../chunks/Cvs7fypr.js";import{i as P}from"../chunks/BASL-IKJ.js";import{s as ce}from"../chunks/D1TEnDwc.js";import{s as ve,a as de}from"../chunks/BiNQuX_e.js";import{w as ue}from"../chunks/n_I6Sv6V.js";import{S as ge}from"../chunks/B503VXDA.js";const me=!0,pe=!1,Ke=Object.freeze(Object.defineProperty({__proto__:null,prerender:me,ssr:pe},Symbol.toStringTag,{value:"Module"})),he=()=>{const s=localStorage.getItem("theme");return s&&["light","dark","system"].includes(s)?s:"system"},V=ue(he()),xe=s=>{if(localStorage.setItem("theme",s),s==="system"){const p=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",p)}else document.documentElement.classList.toggle("dark",s==="dark")};localStorage.getItem("theme")||localStorage.setItem("theme","system"),V.subscribe(xe),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s=>{V.subscribe(p=>{p==="system"&&document.documentElement.classList.toggle("dark",s.matches)})});var fe=Q('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),ye=Q('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),ke=Q('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>'),we=N('<div class="theme-dropdown svelte-1oz9ptx"><div class="theme-dropdown-inner svelte-1oz9ptx"><button aria-label="Light theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button> <button aria-label="Dark theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button> <button aria-label="System theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg></button></div></div>'),_e=N('<div class="theme-toggle-container svelte-1oz9ptx"><button class="theme-toggle-btn svelte-1oz9ptx" aria-label="Toggle theme"><!></button> <!></div>');function be(s,p){Z(p,!1);const[d,Y]=ve(),h=()=>de(V,"$theme",d);let u=H(!1),o=H(!1);function f(i){V.set(i),w(o,!1)}function T(){w(o,!m(o)),console.log("Theme dropdown toggled:",m(o))}function S(i){i.target.closest(".theme-toggle-container")||w(o,!1)}se(()=>(w(u,!0),document.addEventListener("click",S),()=>{document.removeEventListener("click",S)})),le();var _=oe(),j=ie(_);{var I=i=>{var y=_e(),x=e(y),E=e(x);{var $=a=>{var r=fe();k(a,r)},C=(a,r)=>{{var b=n=>{var v=ye();k(n,v)},g=n=>{var v=ke();k(n,v)};P(a,n=>{h()==="dark"?n(b):n(g,!1)},r)}};P(E,a=>{h()==="light"?a($):a(C,!1)})}t(x);var F=l(x,2);{var L=a=>{var r=we(),b=e(r),g=e(b);let n;var v=l(g,2);let B;var O=l(v,2);let z;t(b),t(r),J((X,q,A)=>{n=M(g,1,"theme-option svelte-1oz9ptx",null,n,X),B=M(v,1,"theme-option svelte-1oz9ptx",null,B,q),z=M(O,1,"theme-option svelte-1oz9ptx",null,z,A)},[()=>({active:h()==="light"}),()=>({active:h()==="dark"}),()=>({active:h()==="system"})],te),c("click",g,()=>f("light")),c("click",v,()=>f("dark")),c("click",O,()=>f("system")),k(a,r)};P(F,a=>{m(o)&&a(L)})}t(y),J(()=>ce(x,"aria-expanded",m(o))),c("click",x,T),k(i,y)};P(j,i=>{m(u)&&i(I)})}k(s,_),ee(),Y()}var ze=N('<div class="app svelte-gu6lpl"><header class="svelte-gu6lpl"><div class="header-backdrop svelte-gu6lpl"></div> <div class="container svelte-gu6lpl"><div class="header-content svelte-gu6lpl"><nav class="svelte-gu6lpl"><a href="/" class="home svelte-gu6lpl">Vidyullatha KS</a> <button aria-label="Toggle menu"><div class="bar svelte-gu6lpl"></div> <div class="bar svelte-gu6lpl"></div> <div class="bar svelte-gu6lpl"></div></button> <div><ul class="svelte-gu6lpl"><li class="svelte-gu6lpl"><a href="/about" class="svelte-gu6lpl">About</a></li> <li class="svelte-gu6lpl"><a href="/education" class="svelte-gu6lpl">Education</a></li> <li class="svelte-gu6lpl"><a href="/experience" class="svelte-gu6lpl">Experience</a></li> <li class="svelte-gu6lpl"><a href="/skills" class="svelte-gu6lpl">Skills</a></li> <li class="svelte-gu6lpl"><a href="/projects" class="svelte-gu6lpl">Projects</a></li> <li class="svelte-gu6lpl"><a href="/contact" class="svelte-gu6lpl">Contact</a></li></ul></div></nav> <!></div></div></header> <main class="svelte-gu6lpl"><!></main> <footer class="svelte-gu6lpl"><div class="container svelte-gu6lpl"><!> <p class="svelte-gu6lpl"> </p></div></footer></div>');function Pe(s,p){Z(p,!1);let d=H(!1);function Y(){w(d,!m(d))}function h(G){const D=G.target,K=document.querySelector(".nav-items"),W=document.querySelector(".mobile-toggle");m(d)&&K&&W&&!K.contains(D)&&!W.contains(D)&&w(d,!1)}function u(){w(d,!1)}se(()=>(document.addEventListener("click",h),()=>{document.removeEventListener("click",h)})),le();var o=ze(),f=e(o),T=l(e(f),2),S=e(T),_=e(S),j=l(e(_),2);let I;var i=l(j,2);let y;var x=e(i),E=e(x),$=e(E);t(E);var C=l(E,2),F=e(C);t(C);var L=l(C,2),a=e(L);t(L);var r=l(L,2),b=e(r);t(r);var g=l(r,2),n=e(g);t(g);var v=l(g,2),B=e(v);t(v),t(x),t(i),t(_);var O=l(_,2);be(O,{}),t(S),t(T),t(f);var z=l(f,2),X=e(z);ne(X,p,"default",{}),t(z);var q=l(z,2),A=e(q),R=e(A);ge(R,{size:18,gap:"1rem",light:!0});var U=l(R,2),ae=e(U);t(U),t(A),t(q),t(o),J((G,D,K)=>{I=M(j,1,"mobile-toggle svelte-gu6lpl",null,I,G),y=M(i,1,"nav-items svelte-gu6lpl",null,y,D),re(ae,`© ${K??""} Vidyullatha KS. All rights reserved.`)},[()=>({active:m(d)}),()=>({active:m(d)}),()=>new Date().getFullYear()],te),c("click",j,Y),c("click",$,u),c("click",F,u),c("click",a,u),c("click",b,u),c("click",n,u),c("click",B,u),k(s,o),ee()}export{Pe as component,Ke as universal};
