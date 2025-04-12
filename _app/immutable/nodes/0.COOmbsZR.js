import{c as ae,a as y,t as J,n as N}from"../chunks/nFP-HGzg.js";import"../chunks/DQXnYmBB.js";import{a5 as Z,h as ie,a6 as ee,R as w,Q as G,g as u,w as e,x as t,y as s,v as H,z as te}from"../chunks/CV29XL8f.js";import{e as c,s as re}from"../chunks/Ch95qwyE.js";import{s as ne}from"../chunks/D19A3h_r.js";import{a as L}from"../chunks/BwGa9scW.js";import{i as se}from"../chunks/DpiRrYqq.js";import{o as le}from"../chunks/DLDKnfRC.js";import{i as P}from"../chunks/BsaI0SlM.js";import{s as ce}from"../chunks/CogH41Ft.js";import{s as ve,a as de}from"../chunks/C_HIWtWY.js";import{w as me}from"../chunks/-uhuQs3A.js";import{S as he}from"../chunks/B-t3-HK2.js";const ue=!0,pe=!1,Ke=Object.freeze(Object.defineProperty({__proto__:null,prerender:ue,ssr:pe},Symbol.toStringTag,{value:"Module"})),ge=()=>{const l=localStorage.getItem("theme");return l&&["light","dark","system"].includes(l)?l:"system"},V=me(ge()),fe=l=>{if(localStorage.setItem("theme",l),l==="system"){const p=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",p)}else document.documentElement.classList.toggle("dark",l==="dark")};V.subscribe(fe),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",l=>{V.subscribe(p=>{p==="system"&&document.documentElement.classList.toggle("dark",l.matches)})});var xe=N('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),ke=N('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),ye=N('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path><path d="M12 12h-8"></path><path d="M20 12h-8"></path></svg>'),we=J('<div class="theme-dropdown svelte-1oz9ptx"><div class="theme-dropdown-inner svelte-1oz9ptx"><button aria-label="Light theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button> <button aria-label="Dark theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button> <button aria-label="System theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path><path d="M12 12h-8"></path><path d="M20 12h-8"></path></svg></button></div></div>'),_e=J('<div class="theme-toggle-container svelte-1oz9ptx"><button class="theme-toggle-btn svelte-1oz9ptx" aria-label="Toggle theme"><!></button> <!></div>');function be(l,p){Z(p,!1);const[d,$]=ve(),g=()=>de(V,"$theme",d);let m=G(!1),a=G(!1);function x(i){V.set(i),w(a,!1)}function T(){w(a,!u(a)),console.log("Theme dropdown toggled:",u(a))}function M(i){i.target.closest(".theme-toggle-container")||w(a,!1)}le(()=>(w(m,!0),document.addEventListener("click",M),()=>{document.removeEventListener("click",M)})),se();var _=ae(),S=ie(_);{var B=i=>{var k=_e(),f=e(k),j=e(f);{var F=o=>{var r=xe();y(o,r)},E=(o,r)=>{{var b=n=>{var v=ke();y(n,v)},h=n=>{var v=ye();y(n,v)};P(o,n=>{g()==="dark"?n(b):n(h,!1)},r)}};P(j,o=>{g()==="light"?o(F):o(E,!1)})}t(f);var Q=s(f,2);{var C=o=>{var r=we(),b=e(r),h=e(b);let n;var v=s(h,2);let O;var I=s(v,2);let z;t(b),t(r),H((R,A,D)=>{n=L(h,1,"theme-option svelte-1oz9ptx",null,n,R),O=L(v,1,"theme-option svelte-1oz9ptx",null,O,A),z=L(I,1,"theme-option svelte-1oz9ptx",null,z,D)},[()=>({active:g()==="light"}),()=>({active:g()==="dark"}),()=>({active:g()==="system"})],te),c("click",h,()=>x("light")),c("click",v,()=>x("dark")),c("click",I,()=>x("system")),y(o,r)};P(Q,o=>{u(a)&&o(C)})}t(k),H(()=>ce(f,"aria-expanded",u(a))),c("click",f,T),y(i,k)};P(S,i=>{u(m)&&i(B)})}y(l,_),ee(),$()}var ze=J('<div class="app svelte-oc1951"><header class="svelte-oc1951"><div class="header-backdrop svelte-oc1951"></div> <div class="container svelte-oc1951"><div class="header-content svelte-oc1951"><nav class="svelte-oc1951"><a href="/" class="home svelte-oc1951">Vidyullatha KS</a> <button aria-label="Toggle menu"><div class="bar svelte-oc1951"></div> <div class="bar svelte-oc1951"></div> <div class="bar svelte-oc1951"></div></button> <div><ul class="svelte-oc1951"><li class="svelte-oc1951"><a href="/about" class="svelte-oc1951">About</a></li> <li class="svelte-oc1951"><a href="/education" class="svelte-oc1951">Education</a></li> <li class="svelte-oc1951"><a href="/experience" class="svelte-oc1951">Experience</a></li> <li class="svelte-oc1951"><a href="/skills" class="svelte-oc1951">Skills</a></li> <li class="svelte-oc1951"><a href="/projects" class="svelte-oc1951">Projects</a></li> <li class="svelte-oc1951"><a href="/contact" class="svelte-oc1951">Contact</a></li></ul></div></nav> <!></div></div></header> <main class="svelte-oc1951"><!></main> <footer class="svelte-oc1951"><div class="container svelte-oc1951"><!> <p class="svelte-oc1951"> </p></div></footer></div>');function Pe(l,p){Z(p,!1);let d=G(!1);function $(){w(d,!u(d))}function g(Y){const q=Y.target,K=document.querySelector(".nav-items"),X=document.querySelector(".mobile-toggle");u(d)&&K&&X&&!K.contains(q)&&!X.contains(q)&&w(d,!1)}function m(){w(d,!1)}le(()=>(document.addEventListener("click",g),()=>{document.removeEventListener("click",g)})),se();var a=ze(),x=e(a),T=s(e(x),2),M=e(T),_=e(M),S=s(e(_),2);let B;var i=s(S,2);let k;var f=e(i),j=e(f),F=e(j);t(j);var E=s(j,2),Q=e(E);t(E);var C=s(E,2),o=e(C);t(C);var r=s(C,2),b=e(r);t(r);var h=s(r,2),n=e(h);t(h);var v=s(h,2),O=e(v);t(v),t(f),t(i),t(_);var I=s(_,2);be(I,{}),t(M),t(T),t(x);var z=s(x,2),R=e(z);ne(R,p,"default",{}),t(z);var A=s(z,2),D=e(A),U=e(D);he(U,{size:18,gap:"1rem",light:!0});var W=s(U,2),oe=e(W);t(W),t(D),t(A),t(a),H((Y,q,K)=>{B=L(S,1,"mobile-toggle svelte-oc1951",null,B,Y),k=L(i,1,"nav-items svelte-oc1951",null,k,q),re(oe,`© ${K??""} Vidyullatha KS. All rights reserved.`)},[()=>({active:u(d)}),()=>({active:u(d)}),()=>new Date().getFullYear()],te),c("click",S,$),c("click",F,m),c("click",Q,m),c("click",o,m),c("click",b,m),c("click",n,m),c("click",O,m),y(l,a),ee()}export{Pe as component,Ke as universal};
