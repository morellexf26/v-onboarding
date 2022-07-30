(function(V,r){typeof exports=="object"&&typeof module!="undefined"?r(exports,require("vue"),require("@popperjs/core")):typeof define=="function"&&define.amd?define(["exports","vue","@popperjs/core"],r):(V=typeof globalThis!="undefined"?globalThis:V||self,r(V["v-onboarding"]={},V.Vue,V.core))})(this,function(V,r,re){"use strict";function at(i){return typeof i=="string"?document.querySelector(i):typeof i=="function"?i():null}const st={popper:{},overlay:{enabled:!0,padding:0,borderRadius:0},scrollToStep:{enabled:!0,options:{behavior:"smooth",block:"center",inline:"center"}}};function oe(){var y,E,L,B;const i=r.ref(""),_=r.ref(null),b=r.ref((E=(y=st.overlay)==null?void 0:y.padding)!=null?E:0),w=r.ref((B=(L=st.overlay)==null?void 0:L.borderRadius)!=null?B:0),m=()=>{O(_.value,{padding:b.value,borderRadius:w.value})},O=async(v,$=st.overlay)=>{var d,C,j,x,M,F,D,U,H,G,R,q;if(!v)return;const{innerWidth:P,innerHeight:T}=window,{left:Z,top:J,width:k,height:tt}=v.getBoundingClientRect(),S=typeof $.padding=="number"?{top:$.padding,right:$.padding,bottom:$.padding,left:$.padding}:$.padding,c=typeof $.borderRadius=="number"?{leftTop:$.borderRadius,rightTop:$.borderRadius,rightBottom:$.borderRadius,leftBottom:$.borderRadius}:$.borderRadius,u={top:J-((d=S==null?void 0:S.top)!=null?d:0),right:Z+k+((C=S==null?void 0:S.right)!=null?C:0),bottom:J+tt+((j=S==null?void 0:S.bottom)!=null?j:0),left:Z-((x=S==null?void 0:S.left)!=null?x:0)},l={leftTop:`M${u.left+((M=c==null?void 0:c.leftTop)!=null?M:0)},${u.top} Q${u.left},${u.top} ${u.left},${u.top+((F=c==null?void 0:c.leftTop)!=null?F:0)}`,rightTop:`V${u.top+((D=c==null?void 0:c.rightTop)!=null?D:0)} Q${u.right},${u.top} ${u.right-((U=c==null?void 0:c.rightTop)!=null?U:0)},${u.top}`,rightBottom:`H${u.right-((H=c==null?void 0:c.rightBottom)!=null?H:0)} Q${u.right},${u.bottom} ${u.right},${u.bottom-((G=c==null?void 0:c.rightBottom)!=null?G:0)}`,leftBottom:`V${u.bottom-((R=c==null?void 0:c.leftBottom)!=null?R:0)} Q${u.left},${u.bottom} ${u.left+((q=c==null?void 0:c.leftBottom)!=null?q:0)},${u.bottom}`};i.value=`
      M${P},${T}
      H0V0
      H${P}V${T}
      Z
      ${l.leftTop}
      ${l.leftBottom}
      ${l.rightBottom}
      ${l.rightTop}
      Z
    `,_.value=v,b.value=S,w.value=c,window.addEventListener("scroll",m),window.addEventListener("resize",m)};return r.onUnmounted(()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",m)}),{path:i,updatePath:O}}var lt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},bt={exports:{}};(function(i,_){var b=200,w="__lodash_hash_undefined__",m=800,O=16,y=9007199254740991,E="[object Arguments]",L="[object Array]",B="[object AsyncFunction]",v="[object Boolean]",$="[object Date]",P="[object Error]",T="[object Function]",Z="[object GeneratorFunction]",J="[object Map]",k="[object Number]",tt="[object Null]",S="[object Object]",c="[object Proxy]",u="[object RegExp]",l="[object Set]",d="[object String]",C="[object Undefined]",j="[object WeakMap]",x="[object ArrayBuffer]",M="[object DataView]",F="[object Float32Array]",D="[object Float64Array]",U="[object Int8Array]",H="[object Int16Array]",G="[object Int32Array]",R="[object Uint8Array]",q="[object Uint8ClampedArray]",Se="[object Uint16Array]",we="[object Uint32Array]",$e=/[\\^$.*+?()[\]{}|]/g,Ce=/^\[object .+?Constructor\]$/,Oe=/^(?:0|[1-9]\d*)$/,p={};p[F]=p[D]=p[U]=p[H]=p[G]=p[R]=p[q]=p[Se]=p[we]=!0,p[E]=p[L]=p[x]=p[v]=p[M]=p[$]=p[P]=p[T]=p[J]=p[k]=p[S]=p[u]=p[l]=p[d]=p[j]=!1;var xt=typeof lt=="object"&&lt&&lt.Object===Object&&lt,Ee=typeof self=="object"&&self&&self.Object===Object&&self,et=xt||Ee||Function("return this")(),Pt=_&&!_.nodeType&&_,nt=Pt&&!0&&i&&!i.nodeType&&i,It=nt&&nt.exports===Pt,mt=It&&xt.process,zt=function(){try{var t=nt&&nt.require&&nt.require("util").types;return t||mt&&mt.binding&&mt.binding("util")}catch{}}(),Lt=zt&&zt.isTypedArray;function Ae(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Ne(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o}function Ve(t){return function(e){return t(e)}}function Be(t,e){return t==null?void 0:t[e]}function je(t,e){return function(n){return t(e(n))}}var xe=Array.prototype,Pe=Function.prototype,ct=Object.prototype,vt=et["__core-js_shared__"],ft=Pe.toString,I=ct.hasOwnProperty,Mt=function(){var t=/[^.]+$/.exec(vt&&vt.keys&&vt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ft=ct.toString,Ie=ft.call(Object),ze=RegExp("^"+ft.call(I).replace($e,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ut=It?et.Buffer:void 0,Dt=et.Symbol,Ut=et.Uint8Array,Ht=ut?ut.allocUnsafe:void 0,Gt=je(Object.getPrototypeOf,Object),Rt=Object.create,Le=ct.propertyIsEnumerable,Me=xe.splice,W=Dt?Dt.toStringTag:void 0,dt=function(){try{var t=St(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Fe=ut?ut.isBuffer:void 0,qt=Math.max,De=Date.now,Wt=St(et,"Map"),rt=St(Object,"create"),Ue=function(){function t(){}return function(e){if(!Q(e))return{};if(Rt)return Rt(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function K(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function He(){this.__data__=rt?rt(null):{},this.size=0}function Ge(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Re(t){var e=this.__data__;if(rt){var n=e[t];return n===w?void 0:n}return I.call(e,t)?e[t]:void 0}function qe(t){var e=this.__data__;return rt?e[t]!==void 0:I.call(e,t)}function We(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=rt&&e===void 0?w:e,this}K.prototype.clear=He,K.prototype.delete=Ge,K.prototype.get=Re,K.prototype.has=qe,K.prototype.set=We;function z(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function Ke(){this.__data__=[],this.size=0}function Qe(t){var e=this.__data__,n=pt(e,t);if(n<0)return!1;var o=e.length-1;return n==o?e.pop():Me.call(e,n,1),--this.size,!0}function Ze(t){var e=this.__data__,n=pt(e,t);return n<0?void 0:e[n][1]}function Je(t){return pt(this.__data__,t)>-1}function Xe(t,e){var n=this.__data__,o=pt(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}z.prototype.clear=Ke,z.prototype.delete=Qe,z.prototype.get=Ze,z.prototype.has=Je,z.prototype.set=Xe;function X(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function Ye(){this.size=0,this.__data__={hash:new K,map:new(Wt||z),string:new K}}function ke(t){var e=gt(this,t).delete(t);return this.size-=e?1:0,e}function tn(t){return gt(this,t).get(t)}function en(t){return gt(this,t).has(t)}function nn(t,e){var n=gt(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}X.prototype.clear=Ye,X.prototype.delete=ke,X.prototype.get=tn,X.prototype.has=en,X.prototype.set=nn;function Y(t){var e=this.__data__=new z(t);this.size=e.size}function rn(){this.__data__=new z,this.size=0}function on(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function an(t){return this.__data__.get(t)}function sn(t){return this.__data__.has(t)}function ln(t,e){var n=this.__data__;if(n instanceof z){var o=n.__data__;if(!Wt||o.length<b-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new X(o)}return n.set(t,e),this.size=n.size,this}Y.prototype.clear=rn,Y.prototype.delete=on,Y.prototype.get=an,Y.prototype.has=sn,Y.prototype.set=ln;function cn(t,e){var n=Ct(t),o=!n&&$t(t),s=!n&&!o&&Xt(t),f=!n&&!o&&!s&&kt(t),h=n||o||s||f,a=h?Ne(t.length,String):[],g=a.length;for(var N in t)(e||I.call(t,N))&&!(h&&(N=="length"||s&&(N=="offset"||N=="parent")||f&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||Zt(N,g)))&&a.push(N);return a}function yt(t,e,n){(n!==void 0&&!_t(t[e],n)||n===void 0&&!(e in t))&&Tt(t,e,n)}function fn(t,e,n){var o=t[e];(!(I.call(t,e)&&_t(o,n))||n===void 0&&!(e in t))&&Tt(t,e,n)}function pt(t,e){for(var n=t.length;n--;)if(_t(t[n][0],e))return n;return-1}function Tt(t,e,n){e=="__proto__"&&dt?dt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var un=$n();function ht(t){return t==null?t===void 0?C:tt:W&&W in Object(t)?Cn(t):Bn(t)}function Kt(t){return ot(t)&&ht(t)==E}function dn(t){if(!Q(t)||Nn(t))return!1;var e=Et(t)?ze:Ce;return e.test(In(t))}function pn(t){return ot(t)&&Yt(t.length)&&!!p[ht(t)]}function hn(t){if(!Q(t))return Vn(t);var e=Jt(t),n=[];for(var o in t)o=="constructor"&&(e||!I.call(t,o))||n.push(o);return n}function Qt(t,e,n,o,s){t!==e&&un(e,function(f,h){if(s||(s=new Y),Q(f))gn(t,e,h,n,Qt,o,s);else{var a=o?o(wt(t,h),f,h+"",t,e,s):void 0;a===void 0&&(a=f),yt(t,h,a)}},te)}function gn(t,e,n,o,s,f,h){var a=wt(t,n),g=wt(e,n),N=h.get(g);if(N){yt(t,n,N);return}var A=f?f(a,g,n+"",t,e,h):void 0,it=A===void 0;if(it){var At=Ct(g),Nt=!At&&Xt(g),ne=!At&&!Nt&&kt(g);A=g,At||Nt||ne?Ct(a)?A=a:zn(a)?A=Tn(a):Nt?(it=!1,A=mn(g,!0)):ne?(it=!1,A=yn(g,!0)):A=[]:Ln(g)||$t(g)?(A=a,$t(a)?A=Mn(a):(!Q(a)||Et(a))&&(A=On(g))):it=!1}it&&(h.set(g,A),s(A,g,o,f,h),h.delete(g)),yt(t,n,A)}function _n(t,e){return xn(jn(t,e,ee),t+"")}var bn=dt?function(t,e){return dt(t,"toString",{configurable:!0,enumerable:!1,value:Dn(e),writable:!0})}:ee;function mn(t,e){if(e)return t.slice();var n=t.length,o=Ht?Ht(n):new t.constructor(n);return t.copy(o),o}function vn(t){var e=new t.constructor(t.byteLength);return new Ut(e).set(new Ut(t)),e}function yn(t,e){var n=e?vn(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Tn(t,e){var n=-1,o=t.length;for(e||(e=Array(o));++n<o;)e[n]=t[n];return e}function Sn(t,e,n,o){var s=!n;n||(n={});for(var f=-1,h=e.length;++f<h;){var a=e[f],g=o?o(n[a],t[a],a,n,t):void 0;g===void 0&&(g=t[a]),s?Tt(n,a,g):fn(n,a,g)}return n}function wn(t){return _n(function(e,n){var o=-1,s=n.length,f=s>1?n[s-1]:void 0,h=s>2?n[2]:void 0;for(f=t.length>3&&typeof f=="function"?(s--,f):void 0,h&&En(n[0],n[1],h)&&(f=s<3?void 0:f,s=1),e=Object(e);++o<s;){var a=n[o];a&&t(e,a,o,f)}return e})}function $n(t){return function(e,n,o){for(var s=-1,f=Object(e),h=o(e),a=h.length;a--;){var g=h[t?a:++s];if(n(f[g],g,f)===!1)break}return e}}function gt(t,e){var n=t.__data__;return An(e)?n[typeof e=="string"?"string":"hash"]:n.map}function St(t,e){var n=Be(t,e);return dn(n)?n:void 0}function Cn(t){var e=I.call(t,W),n=t[W];try{t[W]=void 0;var o=!0}catch{}var s=Ft.call(t);return o&&(e?t[W]=n:delete t[W]),s}function On(t){return typeof t.constructor=="function"&&!Jt(t)?Ue(Gt(t)):{}}function Zt(t,e){var n=typeof t;return e=e==null?y:e,!!e&&(n=="number"||n!="symbol"&&Oe.test(t))&&t>-1&&t%1==0&&t<e}function En(t,e,n){if(!Q(n))return!1;var o=typeof e;return(o=="number"?Ot(n)&&Zt(e,n.length):o=="string"&&e in n)?_t(n[e],t):!1}function An(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Nn(t){return!!Mt&&Mt in t}function Jt(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||ct;return t===n}function Vn(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}function Bn(t){return Ft.call(t)}function jn(t,e,n){return e=qt(e===void 0?t.length-1:e,0),function(){for(var o=arguments,s=-1,f=qt(o.length-e,0),h=Array(f);++s<f;)h[s]=o[e+s];s=-1;for(var a=Array(e+1);++s<e;)a[s]=o[s];return a[e]=n(h),Ae(t,this,a)}}function wt(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}var xn=Pn(bn);function Pn(t){var e=0,n=0;return function(){var o=De(),s=O-(o-n);if(n=o,s>0){if(++e>=m)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function In(t){if(t!=null){try{return ft.call(t)}catch{}try{return t+""}catch{}}return""}function _t(t,e){return t===e||t!==t&&e!==e}var $t=Kt(function(){return arguments}())?Kt:function(t){return ot(t)&&I.call(t,"callee")&&!Le.call(t,"callee")},Ct=Array.isArray;function Ot(t){return t!=null&&Yt(t.length)&&!Et(t)}function zn(t){return ot(t)&&Ot(t)}var Xt=Fe||Un;function Et(t){if(!Q(t))return!1;var e=ht(t);return e==T||e==Z||e==B||e==c}function Yt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=y}function Q(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function ot(t){return t!=null&&typeof t=="object"}function Ln(t){if(!ot(t)||ht(t)!=S)return!1;var e=Gt(t);if(e===null)return!0;var n=I.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&ft.call(n)==Ie}var kt=Lt?Ve(Lt):pn;function Mn(t){return Sn(t,te(t))}function te(t){return Ot(t)?cn(t,!0):hn(t)}var Fn=wn(function(t,e,n){Qt(t,e,n)});function Dn(t){return function(){return t}}function ee(t){return t}function Un(){return!1}i.exports=Fn})(bt,bt.exports);var Vt=bt.exports,Bt=(i,_)=>{const b=i.__vccOpts||i;for(const[w,m]of _)b[w]=m;return b};const ie=r.defineComponent({name:"VOnboardingStep",setup(i,{slots:_}){const b=r.ref(!1),w=r.inject("next-step",()=>{}),m=r.inject("previous-step",()=>{}),O=r.inject("exit",()=>{}),y=r.inject("options"),E=r.computed(()=>Vt({},y==null?void 0:y.value,v.value.options)),L=r.inject("is-first-step"),B=r.inject("is-last-step"),v=r.inject("step",{}),$=()=>{S(),w()},P=()=>{S(),m()};r.watch(()=>v.value,(l,d)=>{var C;!((C=_.default)!=null&&C.call(_))||S(d)});const T=r.ref(null),{updatePath:Z,path:J}=oe(),k=()=>{var d,C,j,x,M,F,D,U,H,G,R,q;const l=at((C=(d=v==null?void 0:v.value)==null?void 0:d.attachTo)==null?void 0:C.element);l&&T.value&&(b.value=!0,(x=(j=E.value)==null?void 0:j.scrollToStep)!=null&&x.enabled&&l.scrollIntoView((F=(M=E.value)==null?void 0:M.scrollToStep)==null?void 0:F.options),re.createPopper(l,T.value,E.value.popper),(U=(D=E.value)==null?void 0:D.overlay)!=null&&U.enabled&&Z(l,{padding:(G=(H=E.value)==null?void 0:H.overlay)==null?void 0:G.padding,borderRadius:(q=(R=E.value)==null?void 0:R.overlay)==null?void 0:q.borderRadius}),c(l))},tt=async()=>{var l,d,C;await((C=(d=(l=v==null?void 0:v.value)==null?void 0:l.on)==null?void 0:d.beforeStep)==null?void 0:C.call(d)),k()},S=(l=v.value)=>{var d,C,j,x;(C=(d=l==null?void 0:l.on)==null?void 0:d.afterStep)==null||C.call(d),u(at((j=l==null?void 0:l.attachTo)==null?void 0:j.element),(x=l.attachTo)==null?void 0:x.classList)},c=(l=at(v.value.attachTo.element))=>{const d=v.value.attachTo.classList;!d||!l||l.classList.add(...d)},u=(l=at(v.value.attachTo.element),d)=>{!d||!l||l.classList.remove(...d)};return r.onMounted(tt),{stepElement:T,onNext:$,onPrevious:P,path:J,show:b,step:v,isFirst:L,isLast:B,exit:O}}}),ae={style:{width:"100%",height:"100%",position:"fixed",top:"0",left:"0",opacity:"0.5","z-index":"var(--v-onboarding-overlay-z, 10)","pointer-events":"none"}},se=["d"],le={ref:"stepElement",style:{position:"relative","z-index":"var(--v-onboarding-step-z, 20)"}},ce={class:"v-onboarding-item"},fe={class:"v-onboarding-item__header"},ue={key:0,class:"v-onboarding-item__header-title"},de=[r.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)],pe={key:0,class:"v-onboarding-item__description"},he={class:"v-onboarding-item__actions"},ge=r.createElementVNode("div",{"data-popper-arrow":""},null,-1);function _e(i,_,b,w,m,O){return r.withDirectives((r.openBlock(),r.createElementBlock("div",null,[(r.openBlock(),r.createElementBlock("svg",ae,[r.createElementVNode("path",{d:i.path},null,8,se)])),r.createElementVNode("div",le,[i.step?r.renderSlot(i.$slots,"default",{key:0},()=>[r.createElementVNode("div",ce,[r.createElementVNode("div",fe,[i.step.content.title?(r.openBlock(),r.createElementBlock("span",ue,r.toDisplayString(i.step.content.title),1)):r.createCommentVNode("",!0),r.createElementVNode("button",{onClick:_[0]||(_[0]=(...y)=>i.exit&&i.exit(...y)),class:"v-onboarding-item__header-close"},de)]),i.step.content.description?(r.openBlock(),r.createElementBlock("p",pe,r.toDisplayString(i.step.content.description),1)):r.createCommentVNode("",!0),r.createElementVNode("div",he,[i.isFirst?r.createCommentVNode("",!0):(r.openBlock(),r.createElementBlock("button",{key:0,type:"button",onClick:_[1]||(_[1]=(...y)=>i.onPrevious&&i.onPrevious(...y)),class:"v-onboarding-btn-secondary"}," Previous ")),r.createElementVNode("button",{onClick:_[2]||(_[2]=(...y)=>i.onNext&&i.onNext(...y)),type:"button",class:"v-onboarding-btn-primary"},r.toDisplayString(i.isLast?"Accept":"Next"),1)])])]):r.createCommentVNode("",!0),ge],512)],512)),[[r.vShow,i.show]])}var jt=Bt(ie,[["render",_e]]);const be=r.defineComponent({name:"VOnboardingWrapper",components:{VOnboardingStep:jt},props:{steps:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})}},setup(i,{expose:_}){const b=r.ref(-1),w=T=>{typeof T=="function"?b.value=T(b.value):b.value=T},m=r.computed(()=>{var T;return((T=i.steps)==null?void 0:T[b.value])||null}),O=()=>{w(T=>T-1)},y=()=>{w(T=>T+1)},E=r.computed(()=>b.value>=i.steps.length||b.value<0),L=()=>{w(0)},B=()=>{w(-1)};_({start:L,finish:B,goToStep:w});const v=r.computed(()=>Vt({},st,i.options));r.provide("options",v),r.provide("step",m),r.provide("next-step",y),r.provide("previous-step",O),r.provide("exit",()=>B());const $=r.computed(()=>b.value===0),P=r.computed(()=>b.value===i.steps.length-1);return r.provide("is-first-step",$),r.provide("is-last-step",P),{index:b,activeStep:m,toPreviousStep:O,toNextStep:y,isFinished:E,setIndex:w,isFirstStep:$,isLastStep:P,finish:B}}}),me={key:0,"data-v-onboarding-wrapper":""};function ve(i,_,b,w,m,O){const y=r.resolveComponent("VOnboardingStep");return i.isFinished?r.createCommentVNode("",!0):(r.openBlock(),r.createElementBlock("div",me,[r.renderSlot(i.$slots,"default",{key:i.index,step:i.activeStep,next:()=>i.toNextStep(),previous:()=>i.toPreviousStep(),exit:()=>i.finish(),isFirst:i.isFirstStep,isLast:i.isLastStep,index:i.index},()=>[(r.openBlock(),r.createBlock(y,{key:i.index}))])]))}var ye=Bt(be,[["render",ve]]);function Te(i){return{start:()=>{var m;return(m=i==null?void 0:i.value)==null?void 0:m.start()},finish:()=>{var m;return(m=i==null?void 0:i.value)==null?void 0:m.finish()},goToStep:m=>{var O;return(O=i==null?void 0:i.value)==null?void 0:O.goToStep(m)}}}var Gn="";V.VOnboardingStep=jt,V.VOnboardingWrapper=ye,V.useVOnboarding=Te,Object.defineProperties(V,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});