const Zn=!1;var fn=Array.isArray,un=Array.prototype.indexOf,Wn=Array.from,zn=Object.defineProperty,V=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,_n=Object.prototype,cn=Array.prototype,Pt=Object.getPrototypeOf,Rt=Object.isExtensible;const Jn=()=>{};function Qn(t){return t()}function It(t){for(var e=0;e<t.length;e++)t[e]()}const A=2,Ft=4,it=8,Et=16,k=32,B=64,nt=128,m=256,et=512,y=1024,O=2048,M=4096,Y=8192,ut=16384,vn=32768,Ct=65536,Xn=1<<17,hn=1<<19,Mt=1<<20,pt=1<<21,G=Symbol("$state"),te=Symbol("legacy props"),ne=Symbol("");function Lt(t){return t===this.v}function pn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function qt(t){return!pn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function gn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ee(){throw new Error("https://svelte.dev/e/hydration_failed")}function re(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function En(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ot=!1;function le(){ot=!0}const ae=1,se=2,fe=4,ie=8,ue=16,oe=1,_e=2,xn="[",An="[!",bn="]",Yt={},g=Symbol(),ce="http://www.w3.org/1999/xhtml";let p=null;function Dt(t){p=t}function ve(t,e=!1,n){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};ot&&!e&&(p.l={s:null,u:null,r1:[],r2:Tt(!1)}),Nn(()=>{r.d=!0})}function he(t){const e=p;if(e!==null){const u=e.e;if(u!==null){var n=h,r=v;e.e=null;try{for(var l=0;l<u.length;l++){var a=u[l];at(a.effect),j(a.reaction),Zt(a.fn)}}finally{at(n),j(r)}}p=e.p,e.m=!0}return{}}function _t(){return!ot||p!==null&&p.l===null}function q(t){if(typeof t!="object"||t===null||G in t)return t;const e=Pt(t);if(e!==_n&&e!==cn)return t;var n=new Map,r=fn(t),l=S(0),a=v,u=i=>{var s=v;j(a);var f=i();return j(s),f};return r&&n.set("length",S(t.length)),new Proxy(t,{defineProperty(i,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&En();var _=n.get(s);return _===void 0?(_=u(()=>S(f.value)),n.set(s,_)):N(_,u(()=>q(f.value))),!0},deleteProperty(i,s){var f=n.get(s);if(f===void 0)s in i&&n.set(s,u(()=>S(g)));else{if(r&&typeof s=="string"){var _=n.get("length"),o=Number(s);Number.isInteger(o)&&o<_.v&&N(_,o)}N(f,g),Ot(l)}return!0},get(i,s,f){var x;if(s===G)return t;var _=n.get(s),o=s in i;if(_===void 0&&(!o||(x=V(i,s))!=null&&x.writable)&&(_=u(()=>S(q(o?i[s]:g))),n.set(s,_)),_!==void 0){var c=H(_);return c===g?void 0:c}return Reflect.get(i,s,f)},getOwnPropertyDescriptor(i,s){var f=Reflect.getOwnPropertyDescriptor(i,s);if(f&&"value"in f){var _=n.get(s);_&&(f.value=H(_))}else if(f===void 0){var o=n.get(s),c=o==null?void 0:o.v;if(o!==void 0&&c!==g)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(i,s){var c;if(s===G)return!0;var f=n.get(s),_=f!==void 0&&f.v!==g||Reflect.has(i,s);if(f!==void 0||h!==null&&(!_||(c=V(i,s))!=null&&c.writable)){f===void 0&&(f=u(()=>S(_?q(i[s]):g)),n.set(s,f));var o=H(f);if(o===g)return!1}return _},set(i,s,f,_){var bt;var o=n.get(s),c=s in i;if(r&&s==="length")for(var x=f;x<o.v;x+=1){var Q=n.get(x+"");Q!==void 0?N(Q,g):x in i&&(Q=u(()=>S(g)),n.set(x+"",Q))}o===void 0?(!c||(bt=V(i,s))!=null&&bt.writable)&&(o=u(()=>S(void 0)),N(o,u(()=>q(f))),n.set(s,o)):(c=o.v!==g,N(o,u(()=>q(f))));var X=Reflect.getOwnPropertyDescriptor(i,s);if(X!=null&&X.set&&X.set.call(_,f),!c){if(r&&typeof s=="string"){var At=n.get("length"),ht=Number(s);Number.isInteger(ht)&&ht>=At.v&&N(At,ht+1)}Ot(l)}return!0},ownKeys(i){H(l);var s=Reflect.ownKeys(i).filter(o=>{var c=n.get(o);return c===void 0||c.v!==g});for(var[f,_]of n)_.v!==g&&!(f in i)&&s.push(f);return s},setPrototypeOf(){mn()}})}function Ot(t,e=1){N(t,t.v+e)}function mt(t){var e=A|O,n=v!==null&&(v.f&A)!==0?v:null;return h===null||n!==null&&(n.f&m)!==0?e|=m:h.f|=Mt,{ctx:p,deps:null,effects:null,equals:Lt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function pe(t){const e=mt(t);return nn(e),e}function de(t){const e=mt(t);return e.equals=qt,e}function jt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)C(e[n])}}function Rn(t){for(var e=t.parent;e!==null;){if((e.f&A)===0)return e;e=e.parent}return null}function Bt(t){var e,n=h;at(Rn(t));try{jt(t),e=an(t)}finally{at(n)}return e}function Ut(t){var e=Bt(t),n=(P||(t.f&m)!==0)&&t.deps!==null?M:y;R(t,n),t.equals(e)||(t.v=e,t.wv=rn())}const $=new Map;function Tt(t,e){var n={f:0,v:t,reactions:null,equals:Lt,rv:0,wv:0};return n}function S(t,e){const n=Tt(t);return nn(n),n}function we(t,e=!1){var r;const n=Tt(t);return e||(n.equals=qt),ot&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(n),n}function N(t,e,n=!1){v!==null&&!D&&_t()&&(v.f&(A|Et))!==0&&!(w!=null&&w.includes(t))&&Tn();let r=n?q(e):e;return Dn(t,r)}function Dn(t,e){if(!t.equals(e)){var n=t.v;z?$.set(t,e):$.set(t,n),t.v=e,(t.f&A)!==0&&((t.f&O)!==0&&Bt(t),R(t,(t.f&m)===0?y:M)),t.wv=rn(),Ht(t,O),_t()&&h!==null&&(h.f&y)!==0&&(h.f&(k|B))===0&&(T===null?Yn([t]):T.push(t))}return e}function Ht(t,e){var n=t.reactions;if(n!==null)for(var r=_t(),l=n.length,a=0;a<l;a++){var u=n[a],i=u.f;(i&O)===0&&(!r&&u===h||(R(u,e),(i&(y|m))!==0&&((i&A)!==0?Ht(u,M):vt(u))))}}function Vt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let F=!1;function ye(t){F=t}let b;function Z(t){if(t===null)throw Vt(),Yt;return b=t}function ge(){return Z(L(b))}function Ee(t){if(F){if(L(b)!==null)throw Vt(),Yt;b=t}}function me(t=1){if(F){for(var e=t,n=b;e--;)n=L(n);b=n}}function Te(){for(var t=0,e=b;;){if(e.nodeType===8){var n=e.data;if(n===bn){if(t===0)return e;t-=1}else(n===xn||n===An)&&(t+=1)}var r=L(e);e.remove(),e=r}}var kt,On,kn,Gt,Kt;function xe(){if(kt===void 0){kt=window,On=document,kn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Gt=V(e,"firstChild").get,Kt=V(e,"nextSibling").get,Rt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Rt(n)&&(n.__t=void 0)}}function dt(t=""){return document.createTextNode(t)}function wt(t){return Gt.call(t)}function L(t){return Kt.call(t)}function Ae(t,e){if(!F)return wt(t);var n=wt(b);if(n===null)n=b.appendChild(dt());else if(e&&n.nodeType!==3){var r=dt();return n==null||n.before(r),Z(r),r}return Z(n),n}function be(t,e){if(!F){var n=wt(t);return n instanceof Comment&&n.data===""?L(n):n}return b}function Re(t,e=1,n=!1){let r=F?b:t;for(var l;e--;)l=r,r=L(r);if(!F)return r;var a=r==null?void 0:r.nodeType;if(n&&a!==3){var u=dt();return r===null?l==null||l.after(u):r.before(u),Z(u),u}return Z(r),r}function De(t){t.textContent=""}function $t(t){h===null&&v===null&&yn(),v!==null&&(v.f&m)!==0&&h===null&&wn(),z&&dn()}function Sn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function U(t,e,n,r=!0){var l=h,a={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:e,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(n)try{xt(a),a.f|=vn}catch(s){throw C(a),s}else e!==null&&vt(a);var u=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Mt|nt))===0;if(!u&&r&&(l!==null&&Sn(a,l),v!==null&&(v.f&A)!==0)){var i=v;(i.effects??(i.effects=[])).push(a)}return a}function Nn(t){const e=U(it,null,!1);return R(e,y),e.teardown=t,e}function Oe(t){$t();var e=h!==null&&(h.f&k)!==0&&p!==null&&!p.m;if(e){var n=p;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=Zt(t);return r}}function ke(t){return $t(),Pn(t)}function Se(t){const e=U(B,t,!0);return(n={})=>new Promise(r=>{n.outro?Cn(e,()=>{C(e),r(void 0)}):(C(e),r(void 0))})}function Zt(t){return U(Ft,t,!1)}function Pn(t){return U(it,t,!0)}function Ne(t,e=[],n=mt){const r=e.map(n);return In(()=>t(...r.map(H)))}function In(t,e=0){return U(it|Et|e,t,!0)}function Pe(t,e=!0){return U(it|k,t,!0,e)}function Wt(t){var e=t.teardown;if(e!==null){const n=z,r=v;Nt(!0),j(null);try{e.call(null)}finally{Nt(n),j(r)}}}function zt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&B)!==0?n.parent=null:C(n,e),n=r}}function Fn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&k)===0&&C(e),e=n}}function C(t,e=!0){var n=!1;if((e||(t.f&hn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var a=r===l?null:L(r);r.remove(),r=a}n=!0}zt(t,e&&!n),ft(t,0),R(t,ut);var u=t.transitions;if(u!==null)for(const s of u)s.stop();Wt(t);var i=t.parent;i!==null&&i.first!==null&&Jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Jt(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Cn(t,e){var n=[];Qt(t,n,!0),Mn(n,()=>{C(t),e&&e()})}function Mn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var l of t)l.out(r)}else e()}function Qt(t,e,n){if((t.f&Y)===0){if(t.f^=Y,t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&e.push(u);for(var r=t.first;r!==null;){var l=r.next,a=(r.f&Ct)!==0||(r.f&k)!==0;Qt(r,e,a?n:!1),r=l}}}function Ie(t){Xt(t,!0)}function Xt(t,e){if((t.f&Y)!==0){t.f^=Y,(t.f&y)===0&&(t.f^=y),J(t)&&(R(t,O),vt(t));for(var n=t.first;n!==null;){var r=n.next,l=(n.f&Ct)!==0||(n.f&k)!==0;Xt(n,l?e:!1),n=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||e)&&a.in()}}let W=[],yt=[];function tn(){var t=W;W=[],It(t)}function Ln(){var t=yt;yt=[],It(t)}function Fe(t){W.length===0&&queueMicrotask(tn),W.push(t)}function St(){W.length>0&&tn(),yt.length>0&&Ln()}let tt=!1,rt=!1,lt=null,I=!1,z=!1;function Nt(t){z=t}let K=[];let v=null,D=!1;function j(t){v=t}let h=null;function at(t){h=t}let w=null;function qn(t){w=t}function nn(t){v!==null&&v.f&pt&&(w===null?qn([t]):w.push(t))}let d=null,E=0,T=null;function Yn(t){T=t}let en=1,st=0,P=!1;function rn(){return++en}function J(t){var o;var e=t.f;if((e&O)!==0)return!0;if((e&M)!==0){var n=t.deps,r=(e&m)!==0;if(n!==null){var l,a,u=(e&et)!==0,i=r&&h!==null&&!P,s=n.length;if(u||i){var f=t,_=f.parent;for(l=0;l<s;l++)a=n[l],(u||!((o=a==null?void 0:a.reactions)!=null&&o.includes(f)))&&(a.reactions??(a.reactions=[])).push(f);u&&(f.f^=et),i&&_!==null&&(_.f&m)===0&&(f.f^=m)}for(l=0;l<s;l++)if(a=n[l],J(a)&&Ut(a),a.wv>t.wv)return!0}(!r||h!==null&&!P)&&R(t,y)}return!1}function jn(t,e){for(var n=e;n!==null;){if((n.f&nt)!==0)try{n.fn(t);return}catch{n.f^=nt}n=n.parent}throw tt=!1,t}function Bn(t){return(t.f&ut)===0&&(t.parent===null||(t.parent.f&nt)===0)}function ct(t,e,n,r){if(tt){if(n===null&&(tt=!1),Bn(e))throw t;return}n!==null&&(tt=!0);{jn(t,e);return}}function ln(t,e,n=!0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l];w!=null&&w.includes(t)||((a.f&A)!==0?ln(a,e,!1):e===a&&(n?R(a,O):(a.f&y)!==0&&R(a,M),vt(a)))}}function an(t){var x;var e=d,n=E,r=T,l=v,a=P,u=w,i=p,s=D,f=t.f;d=null,E=0,T=null,P=(f&m)!==0&&(D||!I||v===null),v=(f&(k|B))===0?t:null,w=null,Dt(t.ctx),D=!1,st++,t.f|=pt;try{var _=(0,t.fn)(),o=t.deps;if(d!==null){var c;if(ft(t,E),o!==null&&E>0)for(o.length=E+d.length,c=0;c<d.length;c++)o[E+c]=d[c];else t.deps=o=d;if(!P)for(c=E;c<o.length;c++)((x=o[c]).reactions??(x.reactions=[])).push(t)}else o!==null&&E<o.length&&(ft(t,E),o.length=E);if(_t()&&T!==null&&!D&&o!==null&&(t.f&(A|M|O))===0)for(c=0;c<T.length;c++)ln(T[c],t);return l!==t&&(st++,T!==null&&(r===null?r=T:r.push(...T))),_}finally{d=e,E=n,T=r,v=l,P=a,w=u,Dt(i),D=s,t.f^=pt}}function Un(t,e){let n=e.reactions;if(n!==null){var r=un.call(n,t);if(r!==-1){var l=n.length-1;l===0?n=e.reactions=null:(n[r]=n[l],n.pop())}}n===null&&(e.f&A)!==0&&(d===null||!d.includes(e))&&(R(e,M),(e.f&(m|et))===0&&(e.f^=et),jt(e),ft(e,0))}function ft(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Un(t,n[r])}function xt(t){var e=t.f;if((e&ut)===0){R(t,y);var n=h,r=p,l=I;h=t,I=!0;try{(e&Et)!==0?Fn(t):zt(t),Wt(t);var a=an(t);t.teardown=typeof a=="function"?a:null,t.wv=en;var u=t.deps,i}catch(s){ct(s,t,n,r||t.ctx)}finally{I=l,h=n}}}function Hn(){try{gn()}catch(t){if(lt!==null)ct(t,lt,null);else throw t}}function sn(){var t=I;try{var e=0;for(I=!0;K.length>0;){e++>1e3&&Hn();var n=K,r=n.length;K=[];for(var l=0;l<r;l++){var a=Gn(n[l]);Vn(a)}$.clear()}}finally{rt=!1,I=t,lt=null}}function Vn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(ut|Y))===0)try{J(r)&&(xt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Jt(r):r.fn=null))}catch(l){ct(l,r,null,r.ctx)}}}function vt(t){rt||(rt=!0,queueMicrotask(sn));for(var e=lt=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(B|k))!==0){if((n&y)===0)return;e.f^=y}}K.push(e)}function Gn(t){for(var e=[],n=t;n!==null;){var r=n.f,l=(r&(k|B))!==0,a=l&&(r&y)!==0;if(!a&&(r&Y)===0){if((r&Ft)!==0)e.push(n);else if(l)n.f^=y;else{var u=v;try{v=n,J(n)&&xt(n)}catch(f){ct(f,n,null,n.ctx)}finally{v=u}}var i=n.first;if(i!==null){n=i;continue}}var s=n.parent;for(n=n.next;n===null&&s!==null;)n=s.next,s=s.parent}return e}function Kn(t){var e;for(St();K.length>0;)rt=!0,sn(),St();return e}async function Ce(){await Promise.resolve(),Kn()}function H(t){var e=t.f,n=(e&A)!==0;if(v!==null&&!D){if(!(w!=null&&w.includes(t))){var r=v.deps;t.rv<st&&(t.rv=st,d===null&&r!==null&&r[E]===t?E++:d===null?d=[t]:(!P||!d.includes(t))&&d.push(t))}}else if(n&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&m)===0&&(l.f^=m)}return n&&(l=t,J(l)&&Ut(l)),z&&$.has(t)?$.get(t):t.v}function Me(t){var e=D;try{return D=!0,t()}finally{D=e}}const $n=-7169;function R(t,e){t.f=t.f&$n|e}function Le(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(G in t)gt(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&G in n&&gt(n)}}}function gt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{gt(t[r],e)}catch{}const n=Pt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=on(n);for(let l in r){const a=r[l].get;if(a)try{a.call(t)}catch{}}}}}export{On as $,dt as A,hn as B,L as C,wt as D,Ct as E,le as F,ot as G,xn as H,me as I,Pt as J,on as K,ne as L,Nn as M,ce as N,zn as O,Jn as P,we as Q,N as R,V as S,re as T,g as U,Xn as V,G as W,te as X,se as Y,ie as Z,fe as _,Oe as a,qt as a0,q as a1,ue as a2,ae as a3,pn as a4,ve as a5,he as a6,j as a7,at as a8,v as a9,h as aa,Fe as ab,fn as ac,xe as ad,Yt as ae,bn as af,Vt as ag,ee as ah,De as ai,Wn as aj,Se as ak,Zn as al,kn as am,oe as an,_e as ao,Zt as ap,Pn as aq,Kn as ar,S as as,Ce as at,pe as au,Me as b,p as c,Qn as d,Le as e,mt as f,H as g,be as h,In as i,F as j,ge as k,An as l,Te as m,ye as n,Ie as o,Pe as p,Cn as q,It as r,Z as s,b as t,ke as u,Ne as v,Ae as w,Ee as x,Re as y,de as z};
