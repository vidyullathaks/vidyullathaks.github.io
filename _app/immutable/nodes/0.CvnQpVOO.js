import{c as ie,a as x,t as J,n as N}from"../chunks/nFP-HGzg.js";import"../chunks/DQXnYmBB.js";import{a5 as Z,h as oe,a6 as ee,R as y,Q as G,g as h,w as e,x as t,y as s,v as H,z as te}from"../chunks/CV29XL8f.js";import{e as c,s as re}from"../chunks/Ch95qwyE.js";import{s as ne}from"../chunks/D19A3h_r.js";import{a as L}from"../chunks/BwGa9scW.js";import{i as se}from"../chunks/DpiRrYqq.js";import{o as le}from"../chunks/DLDKnfRC.js";import{i as P}from"../chunks/BsaI0SlM.js";import{s as ce}from"../chunks/CogH41Ft.js";import{s as ve,a as de}from"../chunks/C_HIWtWY.js";import{w as fe}from"../chunks/-uhuQs3A.js";import{S as ge}from"../chunks/DJWnUi2z.js";const he=!0,me=!1,Ke=Object.freeze(Object.defineProperty({__proto__:null,prerender:he,ssr:me},Symbol.toStringTag,{value:"Module"})),ue=()=>{const l=localStorage.getItem("theme");return l&&["light","dark","system"].includes(l)?l:"system"},V=fe(ue()),pe=l=>{if(localStorage.setItem("theme",l),l==="system"){const m=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",m)}else document.documentElement.classList.toggle("dark",l==="dark")};V.subscribe(pe),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",l=>{V.subscribe(m=>{m==="system"&&document.documentElement.classList.toggle("dark",l.matches)})});var ke=N('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),we=N('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),xe=N('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18"></path><path d="M12 14 7 9"></path><path d="M12 19 7 14"></path><path d="M12 9 17 14"></path><path d="M12 14 17 19"></path></svg>'),ye=J('<div class="theme-dropdown svelte-1oz9ptx"><div class="theme-dropdown-inner svelte-1oz9ptx"><button aria-label="Light theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button> <button aria-label="Dark theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button> <button aria-label="System theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1oz9ptx"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18"></path><path d="M12 14 7 9"></path><path d="M12 19 7 14"></path><path d="M12 9 17 14"></path><path d="M12 14 17 19"></path></svg></button></div></div>'),_e=J('<div class="theme-toggle-container svelte-1oz9ptx"><button class="theme-toggle-btn svelte-1oz9ptx" aria-label="Toggle theme"><!></button> <!></div>');function be(l,m){Z(m,!1);const[d,$]=ve(),u=()=>de(V,"$theme",d);let f=G(!1),i=G(!1);function k(o){V.set(o),y(i,!1)}function T(){y(i,!h(i)),console.log("Theme dropdown toggled:",h(i))}function z(o){o.target.closest(".theme-toggle-container")||y(i,!1)}le(()=>(y(f,!0),document.addEventListener("click",z),()=>{document.removeEventListener("click",z)})),se();var _=ie(),S=oe(_);{var B=o=>{var w=_e(),p=e(w),j=e(p);{var F=a=>{var r=ke();x(a,r)},E=(a,r)=>{{var b=n=>{var v=we();x(n,v)},g=n=>{var v=xe();x(n,v)};P(a,n=>{u()==="dark"?n(b):n(g,!1)},r)}};P(j,a=>{u()==="light"?a(F):a(E,!1)})}t(p);var Q=s(p,2);{var C=a=>{var r=ye(),b=e(r),g=e(b);let n;var v=s(g,2);let O;var I=s(v,2);let M;t(b),t(r),H((R,A,D)=>{n=L(g,1,"theme-option svelte-1oz9ptx",null,n,R),O=L(v,1,"theme-option svelte-1oz9ptx",null,O,A),M=L(I,1,"theme-option svelte-1oz9ptx",null,M,D)},[()=>({active:u()==="light"}),()=>({active:u()==="dark"}),()=>({active:u()==="system"})],te),c("click",g,()=>k("light")),c("click",v,()=>k("dark")),c("click",I,()=>k("system")),x(a,r)};P(Q,a=>{h(i)&&a(C)})}t(w),H(()=>ce(p,"aria-expanded",h(i))),c("click",p,T),x(o,w)};P(S,o=>{h(f)&&o(B)})}x(l,_),ee(),$()}var Me=J('<div class="app svelte-kwgiff"><header class="svelte-kwgiff"><div class="header-backdrop svelte-kwgiff"></div> <div class="container svelte-kwgiff"><div class="header-content svelte-kwgiff"><nav class="svelte-kwgiff"><a href="/" class="home svelte-kwgiff">Vidyullatha KS</a> <button aria-label="Toggle menu"><div class="bar svelte-kwgiff"></div> <div class="bar svelte-kwgiff"></div> <div class="bar svelte-kwgiff"></div></button> <div><ul class="svelte-kwgiff"><li class="svelte-kwgiff"><a href="/about" class="svelte-kwgiff">About</a></li> <li class="svelte-kwgiff"><a href="/education" class="svelte-kwgiff">Education</a></li> <li class="svelte-kwgiff"><a href="/experience" class="svelte-kwgiff">Experience</a></li> <li class="svelte-kwgiff"><a href="/skills" class="svelte-kwgiff">Skills</a></li> <li class="svelte-kwgiff"><a href="/projects" class="svelte-kwgiff">Projects</a></li> <li class="svelte-kwgiff"><a href="/contact" class="svelte-kwgiff">Contact</a></li></ul></div></nav> <!></div></div></header> <main class="svelte-kwgiff"><!></main> <footer class="svelte-kwgiff"><div class="container svelte-kwgiff"><!> <p class="svelte-kwgiff"> </p></div></footer></div>');function Pe(l,m){Z(m,!1);let d=G(!1);function $(){y(d,!h(d))}function u(Y){const q=Y.target,K=document.querySelector(".nav-items"),X=document.querySelector(".mobile-toggle");h(d)&&K&&X&&!K.contains(q)&&!X.contains(q)&&y(d,!1)}function f(){y(d,!1)}le(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)})),se();var i=Me(),k=e(i),T=s(e(k),2),z=e(T),_=e(z),S=s(e(_),2);let B;var o=s(S,2);let w;var p=e(o),j=e(p),F=e(j);t(j);var E=s(j,2),Q=e(E);t(E);var C=s(E,2),a=e(C);t(C);var r=s(C,2),b=e(r);t(r);var g=s(r,2),n=e(g);t(g);var v=s(g,2),O=e(v);t(v),t(p),t(o),t(_);var I=s(_,2);be(I,{}),t(z),t(T),t(k);var M=s(k,2),R=e(M);ne(R,m,"default",{}),t(M);var A=s(M,2),D=e(A),U=e(D);ge(U,{size:22,gap:"1rem",light:!0});var W=s(U,2),ae=e(W);t(W),t(D),t(A),t(i),H((Y,q,K)=>{B=L(S,1,"mobile-toggle svelte-kwgiff",null,B,Y),w=L(o,1,"nav-items svelte-kwgiff",null,w,q),re(ae,`© ${K??""} Vidyullatha KS. All rights reserved.`)},[()=>({active:h(d)}),()=>({active:h(d)}),()=>new Date().getFullYear()],te),c("click",S,$),c("click",F,f),c("click",Q,f),c("click",a,f),c("click",b,f),c("click",n,f),c("click",O,f),x(l,i),ee()}export{Pe as component,Ke as universal};
