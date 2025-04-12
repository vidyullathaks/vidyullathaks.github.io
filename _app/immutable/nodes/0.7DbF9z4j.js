import{c as ae,a as k,t as J,n as N}from"../chunks/nFP-HGzg.js";import"../chunks/DQXnYmBB.js";import{a5 as Z,h as ie,a6 as ee,R as w,Q as G,g as h,w as e,x as t,y as s,v as H,z as te}from"../chunks/CV29XL8f.js";import{e as c,s as re}from"../chunks/Ch95qwyE.js";import{s as ne}from"../chunks/D19A3h_r.js";import{a as M}from"../chunks/BwGa9scW.js";import{i as se}from"../chunks/DpiRrYqq.js";import{o as le}from"../chunks/DLDKnfRC.js";import{i as P}from"../chunks/BsaI0SlM.js";import{s as ce}from"../chunks/CogH41Ft.js";import{s as ve,a as de}from"../chunks/C_HIWtWY.js";import{w as me}from"../chunks/-uhuQs3A.js";import{S as ue}from"../chunks/B-t3-HK2.js";const he=!0,ge=!1,Ke=Object.freeze(Object.defineProperty({__proto__:null,prerender:he,ssr:ge},Symbol.toStringTag,{value:"Module"})),pe=()=>{const l=localStorage.getItem("theme");return l&&["light","dark","system"].includes(l)?l:"system"},V=me(pe()),xe=l=>{if(localStorage.setItem("theme",l),l==="system"){const g=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",g)}else document.documentElement.classList.toggle("dark",l==="dark")};V.subscribe(xe),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",l=>{V.subscribe(g=>{g==="system"&&document.documentElement.classList.toggle("dark",l.matches)})});var fe=N('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),ye=N('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),ke=N('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>'),we=J('<div class="theme-dropdown svelte-1oz9ptx"><div class="theme-dropdown-inner svelte-1oz9ptx"><button aria-label="Light theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button> <button aria-label="Dark theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button> <button aria-label="System theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg></button></div></div>'),_e=J('<div class="theme-toggle-container svelte-1oz9ptx"><button class="theme-toggle-btn svelte-1oz9ptx" aria-label="Toggle theme"><!></button> <!></div>');function be(l,g){Z(g,!1);const[d,$]=ve(),p=()=>de(V,"$theme",d);let m=G(!1),a=G(!1);function f(i){V.set(i),w(a,!1)}function T(){w(a,!h(a)),console.log("Theme dropdown toggled:",h(a))}function S(i){i.target.closest(".theme-toggle-container")||w(a,!1)}le(()=>(w(m,!0),document.addEventListener("click",S),()=>{document.removeEventListener("click",S)})),se();var _=ae(),j=ie(_);{var B=i=>{var y=_e(),x=e(y),E=e(x);{var F=o=>{var r=fe();k(o,r)},C=(o,r)=>{{var b=n=>{var v=ye();k(n,v)},u=n=>{var v=ke();k(n,v)};P(o,n=>{p()==="dark"?n(b):n(u,!1)},r)}};P(E,o=>{p()==="light"?o(F):o(C,!1)})}t(x);var Q=s(x,2);{var L=o=>{var r=we(),b=e(r),u=e(b);let n;var v=s(u,2);let O;var I=s(v,2);let z;t(b),t(r),H((R,A,D)=>{n=M(u,1,"theme-option svelte-1oz9ptx",null,n,R),O=M(v,1,"theme-option svelte-1oz9ptx",null,O,A),z=M(I,1,"theme-option svelte-1oz9ptx",null,z,D)},[()=>({active:p()==="light"}),()=>({active:p()==="dark"}),()=>({active:p()==="system"})],te),c("click",u,()=>f("light")),c("click",v,()=>f("dark")),c("click",I,()=>f("system")),k(o,r)};P(Q,o=>{h(a)&&o(L)})}t(y),H(()=>ce(x,"aria-expanded",h(a))),c("click",x,T),k(i,y)};P(j,i=>{h(m)&&i(B)})}k(l,_),ee(),$()}var ze=J('<div class="app svelte-oc1951"><header class="svelte-oc1951"><div class="header-backdrop svelte-oc1951"></div> <div class="container svelte-oc1951"><div class="header-content svelte-oc1951"><nav class="svelte-oc1951"><a href="/" class="home svelte-oc1951">Vidyullatha KS</a> <button aria-label="Toggle menu"><div class="bar svelte-oc1951"></div> <div class="bar svelte-oc1951"></div> <div class="bar svelte-oc1951"></div></button> <div><ul class="svelte-oc1951"><li class="svelte-oc1951"><a href="/about" class="svelte-oc1951">About</a></li> <li class="svelte-oc1951"><a href="/education" class="svelte-oc1951">Education</a></li> <li class="svelte-oc1951"><a href="/experience" class="svelte-oc1951">Experience</a></li> <li class="svelte-oc1951"><a href="/skills" class="svelte-oc1951">Skills</a></li> <li class="svelte-oc1951"><a href="/projects" class="svelte-oc1951">Projects</a></li> <li class="svelte-oc1951"><a href="/contact" class="svelte-oc1951">Contact</a></li></ul></div></nav> <!></div></div></header> <main class="svelte-oc1951"><!></main> <footer class="svelte-oc1951"><div class="container svelte-oc1951"><!> <p class="svelte-oc1951"> </p></div></footer></div>');function Pe(l,g){Z(g,!1);let d=G(!1);function $(){w(d,!h(d))}function p(Y){const q=Y.target,K=document.querySelector(".nav-items"),X=document.querySelector(".mobile-toggle");h(d)&&K&&X&&!K.contains(q)&&!X.contains(q)&&w(d,!1)}function m(){w(d,!1)}le(()=>(document.addEventListener("click",p),()=>{document.removeEventListener("click",p)})),se();var a=ze(),f=e(a),T=s(e(f),2),S=e(T),_=e(S),j=s(e(_),2);let B;var i=s(j,2);let y;var x=e(i),E=e(x),F=e(E);t(E);var C=s(E,2),Q=e(C);t(C);var L=s(C,2),o=e(L);t(L);var r=s(L,2),b=e(r);t(r);var u=s(r,2),n=e(u);t(u);var v=s(u,2),O=e(v);t(v),t(x),t(i),t(_);var I=s(_,2);be(I,{}),t(S),t(T),t(f);var z=s(f,2),R=e(z);ne(R,g,"default",{}),t(z);var A=s(z,2),D=e(A),U=e(D);ue(U,{size:18,gap:"1rem",light:!0});var W=s(U,2),oe=e(W);t(W),t(D),t(A),t(a),H((Y,q,K)=>{B=M(j,1,"mobile-toggle svelte-oc1951",null,B,Y),y=M(i,1,"nav-items svelte-oc1951",null,y,q),re(oe,`© ${K??""} Vidyullatha KS. All rights reserved.`)},[()=>({active:h(d)}),()=>({active:h(d)}),()=>new Date().getFullYear()],te),c("click",j,$),c("click",F,m),c("click",Q,m),c("click",o,m),c("click",b,m),c("click",n,m),c("click",O,m),k(l,a),ee()}export{Pe as component,Ke as universal};
