/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck

/*!
 * PINEGROW INTERACTIONS (PGIA) Run-time library
 * VERSION: 2.05
 * DATE: 2021-07-23
 * INFO: https://pinegrow.com/docs/interactions/
 * @license Copyright (c) 2020 Pinegrow Pte. Ltd. All rights reserved, with exlusion of supporting libraries.
 *
 * License: You are allowed to use, duplicate, distribute this code as a part of work developed with PGIA, and license it to third parties, who may also license such developed work to end-users.
 *
 * Includes supporting libraries:
 *
 * GreenSock GSAP including ScrollTrigger and ScrollTo plugin, @author: Jack Doyle, jack@greensock.com
 *
 * @license Copyright (c) 2008-2020, GreenSock. All rights reserved.
 * GSAP is subject to the terms of enterprise license between GreenSock and Pinegrow Pte. Ltd., under which Pinegrow Interactions users are allowed to use, duplicate and distribute this code as a part of work developed with PGIA, and license it to third parties, who may also license such developed work to end-users.
 * If GSAP is used outside of PGIA or if GSAP is accesses directly through custom Javascript code, it is subject to its own license https://greensock.com/standard-license
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function L(t){return(h=mt(t,ot))&&ae}function M(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function N(t,e){return!e&&console.warn(t)}function O(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function P(){return 0}function Z(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=_t.length;r--&&!_t[r].targetTest(i););e=_t[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new It(t[r],e)))||t.splice(r,1);return t}function $(t){return t._gsap||Z(Tt(t))[0]._gsap}function _(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function aa(t,e){return(t=t.split(",")).forEach(e)||t}function ba(t){return Math.round(1e5*t)/1e5||0}function ca(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function da(e,r,i){var n,a=q(e[1]),s=(a?2:1)+(r<2?0:1),o=e[s];if(a&&(o.duration=e[1]),o.parent=i,r){for(n=o;i&&!("immediateRender"in n);)n=i.vars.defaults||{},i=t(i.vars.inherit)&&i.parent;o.immediateRender=t(n.immediateRender),r<2?o.runBackwards=1:o.startAt=e[s-1]}return o}function ea(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function fa(t,e,r,i){ht.length&&ea(),t.render(e,r,i),ht.length&&ea()}function ga(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(st).length<2?e:o(t)?t.trim():t}function ha(t){return t}function ia(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ja(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function la(t,e){for(var r in e)t[r]=s(e[r])?la(t[r]||(t[r]={}),e[r]):e[r];return t}function ma(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function na(e){var r=e.parent||I,i=e.keyframes?ja:ia;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function qa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function ra(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function sa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function va(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function xa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function ya(t){return t._end=ba(t._start+(t._tDur/Math.abs(t._ts||t._rts||U)||0))}function za(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ba(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ya(t),r._dirty||sa(r,t)),t}function Aa(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=xa(t.rawTime(),e),(!e._dur||yt(0,e.totalDuration(),r)-e._tTime>U)&&e.render(r,!0)),sa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-U}}function Ba(t,e,r,i){return e.parent&&ra(e),e._start=ba(r+e._delay),e._end=ba(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||Aa(t,e),t}function Ca(t,e){return(ot.ScrollTrigger||M("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Da(t,e,r,i){return Yt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Ct.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ha(t,e,r,i){var n=t._repeat,a=ba(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ba(a*(n+1)+t._rDelay*n):a,s&&!i?za(t,t._tTime=t._tDur*s):t.parent&&ya(t),r||sa(t.parent,t),t}function Ia(t){return t instanceof Et?sa(t):Ha(t,t._dur)}function Ka(t,e){var r,i,n=t.labels,a=t._recent||vt,s=t.duration()>=H?a.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in n)?"<"===(r=e.charAt(0))||">"===r?("<"===r?a._start:a.endTime(0<=a._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in n||(n[e]=s),n[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ka(t,e.substr(0,r-1))+i:s+i):null==e?s:+e}function La(t,e){return t||0===t?e(t):e}function Na(t){return(t=(t+"").substr((parseFloat(t)+"").length))&&isNaN(t)?t:""}function Qa(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Ta(t){return t.sort(function(){return.5-Math.random()})}function Ua(t){if(p(t))return t;var _=s(t)?t:{each:t},c=Bt(_.ease),m=_.from||0,g=parseFloat(_.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,b=_.axis,T=m,w=m;return o(m)?T=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(T=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,p=v[d];if(!p){if(!(f="auto"===_.grid?0:(_.grid||[1,H])[1])){for(h=-H;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(p=v[d]=[],i=y?Math.min(f,d)*T-.5:m%f,n=y?d*w/f-.5:m/f|0,l=H,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),p[u]=o=b?Math.abs("y"===b?s:a):j(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Ta(p),p.max=h-l,p.min=l,p.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),p.b=d<0?g-d:g,p.u=Na(_.amount||_.each)||0,c=c&&d<0?Ft(c):c}return d=(p[t]-p.min)/p.max||0,ba(p.b+(c?c(d):d)*p.v)+p.u}}function Va(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return Math.floor(Math.round(parseFloat(t)/e)*e*r)/r+(q(t)?0:Na(t))}}function Wa(u,t){var h,l,e=tt(u);return!e&&s(u)&&(h=e=u.radius||H,u.values?(u=Tt(u.values),(l=!q(u[0]))&&(h*=h)):u=Va(u.increment)),La(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=H,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Na(t)}:Va(u))}function Xa(t,e,r,i){return La(tt(t)?!e:!0===r?!!(r=0):!i,function(){return tt(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t+Math.random()*(e-t))/r)*r*i)/i})}function _a(e,r,t){return La(t,function(t){return e[~~r(t)]})}function cb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?st:et),s+=t.substr(a,e-a)+Xa(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function fb(t,e,r){var i,n,a,s=t.labels,o=H;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function hb(t){return ra(t),t.progress()<1&&xt(t,"onInterrupt"),t}function mb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*kt+.5|0}function nb(t,e,r){var i,n,a,s,o,u,h,l,f,d,p=t?q(t)?[t>>16,t>>8&kt,t&kt]:0:Ot.black;if(!p){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Ot[t])p=Ot[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a),p=[(t=parseInt(t.substr(1),16))>>16,t>>8&kt,t&kt];else if("hsl"===t.substr(0,3))if(p=d=t.match(et),e){if(~t.indexOf("="))return p=t.match(rt),r&&p.length<4&&(p[3]=1),p}else s=+p[0]%360/360,o=p[1]/100,i=2*(u=p[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<p.length&&(p[3]*=1),p[0]=mb(s+1/3,i,n),p[1]=mb(s,i,n),p[2]=mb(s-1/3,i,n);else p=t.match(et)||Ot.transparent;p=p.map(Number)}return e&&!d&&(i=p[0]/kt,n=p[1]/kt,a=p[2]/kt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),p[0]=~~(s+.5),p[1]=~~(100*o+.5),p[2]=~~(100*u+.5)),r&&p.length<4&&(p[3]=1),p}function ob(t){var r=[],i=[],n=-1;return t.split(Pt).forEach(function(t){var e=t.match(it)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function pb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Pt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=nb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=ob(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Pt,"1").split(it)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Pt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function sb(t){var e,r=t.join(" ");if(Pt.lastIndex=0,Pt.test(r))return e=Mt.test(r),t[1]=pb(t[1],e),t[0]=pb(t[0],e,ob(t[1])),!0}function Bb(t){var e=(t+"").split("("),r=St[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(zt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ga)):St._CE&&Dt.test(t)?St._CE("",t):r}function Db(t,e){for(var r,i=t._first;i;)i instanceof Et?Db(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Db(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Fb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return aa(t,function(t){for(var e in St[t]=ot[t]=a,St[n=t.toLowerCase()]=r,a)St[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=St[t+"."+e]=a[e]}),a}function Gb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Hb(r,t,e){function zl(t){return 1===t?1:i*Math.pow(2,-10*t)*W((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/V*(Math.asin(1/i)||0),s="out"===r?zl:"in"===r?function(t){return 1-zl(1-t)}:Gb(zl);return n=V/n,s.config=function(t,e){return Hb(r,t,e)},s}function Ib(e,r){function Hl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Hl:"in"===e?function(t){return 1-Hl(1-t)}:Gb(Hl);return t.config=function(t){return Ib(e,t)},t}var R,I,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,C,A,S,D,z,F,B,E,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},X={duration:.5,overwrite:!1,delay:0},H=1e8,U=1/H,V=2*Math.PI,K=V/4,G=0,j=Math.sqrt,Q=Math.cos,W=Math.sin,J="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},tt=Array.isArray,et=/(?:-?\.?\d|\.)+/gi,rt=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,it=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nt=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,at=/[+-]=-?[\.\d]+/,st=/[#\-+.]*\b[a-z\d-=+%.]+/gi,ot={},ut={},ht=[],lt={},ft={},dt={},pt=30,_t=[],ct="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt={_start:0,endTime:P},yt=function _clamp(t,e,r){return r<t?t:e<r?e:r},bt=[].slice,Tt=function toArray(t,e){return!o(t)||e||!n&&At()?tt(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Qa(t,1)?r.push.apply(r,Tt(t)):r.push(t)})||r}(t,e):Qa(t)?bt.call(t,0):t?[t]:[]:bt.call(a.querySelectorAll(t),0)},wt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return La(n,function(t){return r+((t-e)/a*s||0)})},xt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&ea(),i?s.apply(n,i):s.call(n)},kt=255,Ot={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},Pt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in Ot)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Mt=/hsl[a]?\(/,Ct=(x=Date.now,k=500,C=33,A=x(),S=A,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){vk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=ae,(i.gsapVersions||(i.gsapVersions=[])).push(ae.version),L(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,vk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=P},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){F.indexOf(t)<0&&F.push(t),At()},remove:function remove(t){var e;~(e=F.indexOf(t))&&F.splice(e,1)&&e<=w&&w--},_listeners:F=[]}),At=function _wake(){return!c&&Ct.wake()},St={},Dt=/^[\d.\-M][\d.\-,\s]/,zt=/["']/g,Ft=function _invertEase(e){return function(t){return 1-e(1-t)}},Bt=function _parseEase(t,e){return t&&(p(t)?t:St[t]||Bb(t))||e};function vk(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(S+=a)-A)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(vk)),r)for(w=0;w<F.length;w++)F[w](i,T,n,t)}function Yl(t){return t<E?B*t*t:t<.7272727272727273?B*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?B*(t-=2.25/2.75)*t+.9375:B*Math.pow(t-2.625/2.75,2)+.984375}aa("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Fb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),St.Linear.easeNone=St.none=St.Linear.easeIn,Fb("Elastic",Hb("in"),Hb("out"),Hb()),B=7.5625,E=1/2.75,Fb("Bounce",function(t){return 1-Yl(1-t)},Yl),Fb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Fb("Circ",function(t){return-(j(1-t*t)-1)}),Fb("Sine",function(t){return 1===t?1:1-Q(t*K)}),Fb("Back",Ib("in"),Ib("out"),Ib()),St.SteppedEase=St.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*yt(0,.99999999,t)|0)+n)*r}}},X.ease=St["quad.out"],aa("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ct+=t+","+t+"Params,"});var Rt,It=function GSCache(t,e){this.id=G++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:_,this.set=e?e.getSetter:$t},Lt=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ha(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(At(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(za(this,t),!r._dp||r.parent||Aa(r,this);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ba(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===U||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),fa(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+va(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+va(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-U?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?xa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-U?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(yt(-this._delay,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(At(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=U)&&Math.abs(this._zTime)!==U))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ba(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xa(e.rawTime(t),this):this._tTime:this._tTime},Rt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t,Ia(this)):this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ia(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(e,r){return this.totalTime(Ka(this,e),t(r))},Rt.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-U:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-U,this},Rt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-U))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function on(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ha;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?on():i._prom=on})},Rt.kill=function kill(){hb(this)},Animation);function Animation(t,e){var r=t.parent||I;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ha(this,+t.duration,1,1),this.data=t.data,c||Ct.wake(),r&&Ba(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ia(Lt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-U,_prom:0,_ps:!1,_rts:1});var Et=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e,r)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),i.parent&&Aa(i.parent,_assertThisInitialized(i)),e.scrollTrigger&&Ca(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r,i){return new Vt(t,da(arguments,0,this),Ka(this,q(e)?i:r)),this},e.from=function from(t,e,r,i){return new Vt(t,da(arguments,1,this),Ka(this,q(e)?i:r)),this},e.fromTo=function fromTo(t,e,r,i,n){return new Vt(t,da(arguments,2,this),Ka(this,q(e)?n:i)),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,na(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Vt(t,e,Ka(this,r),1),this},e.call=function call(t,e,r){return Ba(this,Vt.delayedCall(0,t,e),Ka(this,r))},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Vt(t,r,Ka(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,na(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,na(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,p,_,c=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==I&&m-U<t&&0<=t?m:t<U?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(c!==this._time&&g&&(v+=this._time-c,t+=this._time-c),i=v,f=this._start,u=!(l=this._ts),y&&(g||(c=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(p=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ba(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!c&&this._tTime&&d!==s&&(d=s),p&&1&s&&(i=g-i,_=1),s!==d&&!this._lock){var b=p&&1&d,T=b===(p&&1&s);if(s<d&&(b=!b),c=b?0:g,this._lock=1,this.render(c||(_?0:ba(s*o)),e,!g)._lock=0,!e&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1),c!==this._time||u!=!this._ts)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,c=b?g:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Db(this,_)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ba(c),ba(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,c=0),c||!(i||!g&&0<=t)||e||xt(this,"onStart"),c<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-U);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-U:U);break}}n=a}}if(h&&!e&&(this.pause(),h.render(c<=i?0:-U)._zTime=c<=i?1:-1,this._ts))return this._start=f,ya(this),this.render(t,e,r);this._onUpdate&&!e&&xt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&c)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||ra(this,1),e||t<0&&!c||!v&&!c||(xt(this,v===m?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=Ka(this,e)),!(t instanceof Lt)){if(tt(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Vt.delayedCall(0,t)}return this!==t?Ba(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-H);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Vt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(qa(this,t),t===this._recent&&(this._recent=this._last),sa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ba(Ct.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=Ka(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Vt.delayedCall(0,e||P,r);return i.data="isPause",this._hasPause=1,Ba(this,i,Ka(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=Ka(this,t);e;)e._start===t&&"isPause"===e.data&&ra(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=Tt(t),a=this._first,s=q(e);a;)a instanceof Vt?ca(a._targets,n)&&(s?(!Nt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=Ka(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=e.immediateRender,u=Vt.to(r,ia({ease:"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||U,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());u._dur!==t&&Ha(u,t,0,1).render(u._time,!0,!0),a&&a.apply(u,s||[])}},e));return o?u.render(0):u},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ia({startAt:{time:Ka(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),fb(this,Ka(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),fb(this,Ka(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+U)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return sa(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),sa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=H;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ba(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ha(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(fa(I,xa(t,I)),f=Ct.frame),Ct.frame>=pt){pt+=Y.autoSleep||120;var e=I._first;if((!e||!e._ts)&&Y.autoSleep&&Ct._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Ct.sleep()}}},Timeline}(Lt);ia(Et.prototype,{_lock:0,_hasPause:0,_forcing:0});function Pb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Xt(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||tt(t)||J(t))return o(t)?Xt(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Xt(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ie(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var Nt,qt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,_=p(f)?h?jt:Gt:Kt;if(o(i)&&(~i.indexOf("random(")&&(i=cb(i)),"="===i.charAt(1)&&(i=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Na(d)||0))),d!==i)return isNaN(d*i)?(f||e in t||M(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,p,_,c=new ie(this._pt,t,e,0,1,Zt,null,n),m=0,g=0;for(c.b=r,c.e=i,r+="",(p=~(i+="").indexOf("random("))&&(i=cb(i)),a&&(a(_=[r,i],t,e),r=_[0],i=_[1]),u=r.match(nt)||[];o=nt.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,c._pt={_next:c._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=nt.lastIndex);return c.c=m<i.length?i.substring(m,i.length):"",c.fp=s,(at.test(i)||p)&&(c.e=0),this._pt=c}.call(this,t,e,d,i,_,u||Y.stringFilter,h)):(l=new ie(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?Wt:Qt,0,_),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Yt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,p,_,c,m=e.vars,g=m.ease,v=m.startAt,y=m.immediateRender,b=m.lazy,T=m.onUpdate,w=m.onUpdateParams,x=m.callbackScope,k=m.runBackwards,O=m.yoyoEase,P=m.keyframes,M=m.autoRevert,C=e._dur,A=e._startAt,S=e._targets,D=e.parent,z=D&&"nested"===D.data?D.parent._targets:S,F="auto"===e._overwrite&&!R,B=e.timeline;if(!B||P&&g||(g="none"),e._ease=Bt(g,X.ease),e._yEase=O?Ft(Bt(!0===O?g:O,X.ease)):0,O&&e._yoyo&&!e._repeat&&(O=e._yEase,e._yEase=e._ease,e._ease=O),!B){if(_=(l=S[0]?$(S[0]).harness:0)&&m[l.prop],i=ma(m,ut),A&&A.render(-1,!0).kill(),v){if(ra(e._startAt=Vt.set(S,ia({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:t(b),startAt:null,delay:0,onUpdate:T,onUpdateParams:w,callbackScope:x,stagger:0},v))),y)if(0<r)M||(e._startAt=0);else if(C&&!(r<0&&A))return void(r&&(e._zTime=r))}else if(k&&C)if(A)M||(e._startAt=0);else if(r&&(y=!1),a=ia({overwrite:!1,data:"isFromStart",lazy:y&&t(b),immediateRender:y,stagger:0,parent:D},i),_&&(a[l.prop]=_),ra(e._startAt=Vt.set(S,a)),y){if(!r)return}else _initTween(e._startAt,U);for(e._pt=0,b=C&&t(b)||b&&!C,n=0;n<S.length;n++){if(h=(o=S[n])._gsap||Z(S)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&ea(),p=z===S?n:z.indexOf(o),l&&!1!==(f=new l).init(o,_||i,e,p,z)&&(e._pt=s=new ie(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||_)for(a in i)ft[a]&&(f=Pb(a,i,e,p,o,z))?f.priority&&(u=1):d[a]=s=qt.call(e,o,a,"get",i[a],p,z,0,m.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),F&&e._pt&&(Nt=e,I.killTweensOf(o,d,e.globalTime(0)),c=!e.parent,Nt=0),e._pt&&b&&(lt[h.id]=1)}u&&re(e),e._onInit&&e._onInit(e)}e._from=!B&&!!m.runBackwards,e._onUpdate=T,e._initted=(!e._op||e._pt)&&!c},Xt=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?cb(t):t},Ht=ct+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Ut=(Ht+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Vt=function(A){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,p,_,c=(a=A.call(this,n?r:na(r),i)||this).vars,m=c.duration,g=c.delay,y=c.immediateRender,b=c.stagger,T=c.overwrite,w=c.keyframes,x=c.defaults,k=c.scrollTrigger,O=c.yoyoEase,M=a.parent,C=(tt(e)||J(e)?q(e[0]):"length"in r)?[e]:Tt(e);if(a._targets=C.length?Z(C):N("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new Et({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,w)ia(o.vars.defaults,{ease:"none"}),w.forEach(function(t){return o.to(C,t,">")});else{if(l=C.length,p=b?Ua(b):P,s(b))for(f in b)~Ht.indexOf(f)&&((_=_||{})[f]=b[f]);for(u=0;u<l;u++){for(f in h={},r)Ut.indexOf(f)<0&&(h[f]=r[f]);h.stagger=0,O&&(h.yoyoEase=O),_&&mt(h,_),d=C[u],h.duration=+Xt(m,_assertThisInitialized(a),u,d,C),h.delay=(+Xt(g,_assertThisInitialized(a),u,d,C)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,p(u,d,C))}o.duration()?m=g=0:a.timeline=0}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||R||(Nt=_assertThisInitialized(a),I.killTweensOf(C),Nt=0),M&&Aa(M,_assertThisInitialized(a)),(y||!m&&!w&&a._start===ba(M._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==M.data)&&(a._tTime=-U,a.render(Math.max(0,-g))),k&&Ca(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,A);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,p=this._tDur,_=this._dur,c=p-U<t&&0<=t?p:t<U?0:t;if(_){if(c!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=c,l=this.timeline,this._repeat){if(s=_+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=ba(c%s),c===p?(a=this._repeat,i=_):((a=~~(c/s))&&a===c/s&&(i=_,a--),_<i&&(i=_)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=_-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Db(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ba(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Da(this,t<0?t:i,r,e))return this._tTime=0,this;if(_!==this._dur)return this.render(t,e,r)}for(this._tTime=c,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/_),this._from&&(this.ratio=h=1-h),!i||d||e||xt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-U:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),xt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&xt(this,"onRepeat"),c!==this._tDur&&c||this._tTime!==c||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&_||!(c===this._tDur&&0<this._ts||!c&&this._ts<0)||ra(this,1),e||t<0&&!d||!c&&!d||(xt(this,c===p?"onComplete":"onReverseComplete",!0),!this._prom||c<p&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)||(t._ts<0||t._dp._ts<0)&&"isFromStart"!==t.data&&"isStart"!==t.data)?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=yt(0,t._tDur,e),a=gt(l,h),s=gt(t._tTime,h),t._yoyo&&1&a&&(u=1-u),a!==s&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===U||!e&&t._zTime){if(!t._initted&&Da(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?U:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,r||xt(t,"onStart"),n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&xt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&xt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&ra(t,1),r||(xt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),A.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?hb(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||hb(this),this.parent&&r!==this.timeline.totalDuration()&&Ha(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?Tt(t):f,p=this._ptLookup,_=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),hb(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},aa(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?$(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=p[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||qa(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&_&&hb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,da(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,da(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Lt);ia(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),aa("staggerTo,staggerFrom,staggerFromTo",function(r){Vt[r]=function(){var t=new Et,e=bt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function $b(t,e,r){return t.setAttribute(e,r)}function gc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Kt=function _setterPlain(t,e,r){return t[e]=r},Gt=function _setterFunc(t,e,r){return t[e](r)},jt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},$t=function _getSetter(t,e){return p(t[e])?Gt:r(t[e])&&t.setAttribute?$b:Kt},Qt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},Wt=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},Jt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},te=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ee=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?qa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},re=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ie=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=gc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Qt,this.d=s||this,this.set=o||Kt,this.pr=u||0,(this._next=t)&&(t._prev=this)}aa(ct+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Vt,ot.TimelineLite=ot.TimelineMax=Et,I=new Et({sortChildren:!1,defaults:X,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=sb;var ne={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:P,render:Jt,add:qt,kill:ee,modifier:te,rawVars:0},a={targetTest:0,get:0,getSetter:$t,aliases:{},register:0};if(At(),t!==i){if(ft[e])return;ia(i,ia(ma(t,n),a)),mt(i.prototype,mt(n,ma(t,a))),ft[i.prop=e]=i,t.targetTest&&(_t.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}O(e,i),t.register&&t.register(ae,i,ie)}(t)})},timeline:function timeline(t){return new Et(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=Tt(i)[0]);var n=$(i||{}).get,a=e?ha:ga;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Tt(r)).length){var n=r.map(function(t){return ae.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=$(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&Jt(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Bt(t.ease,X.ease)),la(X,t||{})},config:function config(t){return la(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&N(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(Tt(t),ia(e||{},a),r)},r&&(Et.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){St[t]=Bt(e)},parseEase:function parseEase(t,e){return arguments.length?Bt(t,e):St},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new Et(e);for(a.smoothChildTiming=t(e.smoothChildTiming),I.remove(a),a._dp=0,a._time=a._tTime=I._time,i=I._first;i;)n=i._next,!r&&!i._dur&&i instanceof Vt&&i.vars.onComplete===i._targets[0]||Ba(a,i,i._start-i._delay),i=n;return Ba(I,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return tt(e)?_a(e,wrap(0,e.length),t):La(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return tt(e)?_a(e,wrapYoyo(0,e.length-1),t):La(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Ua,random:Xa,snap:Wa,normalize:function normalize(t,e,r){return wt(t,e,0,1,r)},getUnit:Na,clamp:function clamp(e,r,t){return La(t,function(t){return yt(e,r,t)})},splitColor:nb,toArray:Tt,mapRange:wt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Na(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(tt(e)&&!tt(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(tt(e)?[]:{},e));if(!u){for(a in r)qt.call(d,e,a,"get",r[a]);n=function func(t){return Jt(t,d)||(f?e.p:e)}}}return La(t,n)},shuffle:Ta},install:L,effects:dt,ticker:Ct,updateRoot:Et.updateRoot,plugins:ft,globalTimeline:I,core:{PropTween:ie,globals:O,Tween:Vt,Timeline:Et,Animation:Lt,getCache:$,_removeLinkedListItem:qa,suppressOverwrites:function suppressOverwrites(t){return R=t}}};aa("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ne[t]=Vt[t]}),Ct.add(Et.updateRoot),d=ne.to({},{duration:0});function kc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function mc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},aa(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=kc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ae=ne.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},mc("roundProps",Va),mc("modifiers"),mc("snap",Wa))||ne;Vt.version=Et.version=ae.version="3.6.0",l=1,u()&&At();function Xc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Yc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Zc(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function $c(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function _c(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function ad(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function bd(t,e,r){return t.style[e]=r}function cd(t,e,r){return t.style.setProperty(e,r)}function dd(t,e,r){return t._gsap[e]=r}function ed(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function fd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function gd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function kd(t,e){var r=oe.createElementNS?oe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oe.createElement(t);return r.style?r:oe.createElement(t)}function ld(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ie,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&ld(t,He(e)||e,1)||""}function od(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(se=window,oe=se.document,ue=oe.documentElement,le=kd("div")||{style:{}},fe=kd("div"),qe=He(qe),Ye=qe+"Origin",le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pe=!!He("perspective"),he=1)}function pd(t){var e,r=kd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(ue.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=pd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ue.removeChild(r),this.style.cssText=a,e}function qd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function rd(e){var r;try{r=e.getBBox()}catch(t){r=pd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===pd||(r=pd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+qd(e,["x","cx","x1"])||0,y:+qd(e,["y","cy","y1"])||0,width:0,height:0}}function sd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!rd(t))}function td(t,e){if(e){var r=t.style;e in ze&&e!==Ye&&(e=qe),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ie,"-$1").toLowerCase())):r.removeAttribute(e)}}function ud(t,e,r,i,n,a){var s=new ie(t._pt,e,r,0,1,a?ad:_c);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function wd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=le.style,f=Le.test(e),d="svg"===t.tagName.toLowerCase(),p=(d?"client":"offset")+(f?"Width":"Height"),_="px"===i,c="%"===i;return i===h||!u||Ue[i]||Ue[h]?u:("px"===h||_||(u=wd(t,e,r,"px")),o=t.getCTM&&sd(t),!c&&"%"!==h||!ze[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(_?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==oe&&a.appendChild||(a=oe.body),(s=a._gsap)&&c&&s.width&&f&&s.time===Ct.time?ba(u/s.width*100):(!c&&"%"!==h||(l.position=ld(t,"position")),a===t&&(l.position="static"),a.appendChild(le),n=le[p],a.removeChild(le),l.position="absolute",f&&c&&((s=$(a)).time=Ct.time,s.width=a[p]),ba(_?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[p],ba(c?u/n*100:u/100*n)))}function xd(t,e,r,i){var n;return he||od(),e in Ne&&"transform"!==e&&~(e=Ne[e]).indexOf(",")&&(e=e.split(",")[0]),ze[e]&&"transform"!==e?(n=$e(t,i),n="transformOrigin"!==e?n[e]:Qe(ld(t,Ye))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Ke[e]&&Ke[e](t,e,r)||ld(t,e)||_(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?wd(t,e,n,r)+r:n}function yd(t,e,r,i){if(!r||"none"===r){var n=He(e,t,1),a=n&&ld(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=ld(t,"borderTopColor"))}var s,o,u,h,l,f,d,p,_,c,m,g,v=new ie(this._pt,t.style,e,0,1,Zt),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=ld(t,e)||i,t.style[e]=r),sb(s=[r,i]),i=s[1],u=(r=s[0]).match(it)||[],(i.match(it)||[]).length){for(;o=it.exec(i);)d=o[0],_=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==_.substr(-5)&&"hsla("!==_.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),p=parseFloat(d),c=d.substr((p+"").length),y=it.lastIndex-c.length,c||(c=c||Y.units[e]||m,y===i.length&&(i+=c,v.e+=c)),m!==c&&(h=wd(t,e,f,c)||0),v._pt={_next:v._pt,p:_||1===b?_:",",s:h,c:g?g*p:p-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?ad:_c;return at.test(i)&&(v.e=0),this._pt=v}function Ad(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ve[r]||r,e[1]=Ve[i]||i,e.join(" ")}function Bd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ze[r]&&(i=1,r="transformOrigin"===r?Ye:qe),td(a,r);i&&(td(a,qe),u&&(u.svg&&a.removeAttribute("transform"),$e(a,1),u.uncache=1))}}function Fd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Gd(t){var e=ld(t,qe);return Fd(e)?Ge:e.substr(7).match(rt).map(ba)}function Hd(t,e){var r,i,n,a,s=t._gsap||$(t),o=t.style,u=Gd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ge:u:(u!==Ge||t.offsetParent||t===ue||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,ue.appendChild(t)),u=Gd(t),n?o.display=n:td(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):ue.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Id(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Hd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,p=h.xOffset||0,_=h.yOffset||0,c=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Ge&&(o=c*v-m*g)&&(u=w*(-m/o)+x*(c/o)-(c*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=rd(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=p+(y*c+b*g)-y,h.yOffset=_+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ye]="0px 0px",a&&(ud(a,h,"xOrigin",f,w),ud(a,h,"yOrigin",d,x),ud(a,h,"xOffset",p,h.xOffset),ud(a,h,"yOffset",_,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Ld(t,e,r){var i=Na(e);return ba(parseFloat(e)+parseFloat(wd(t,"x",r+"px",i)))+i}function Sd(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Fe:1),d=a?f*a:f-i,p=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ie(t._pt,e,r,i,d,Yc),u.e=p,u.u="deg",t._props.push(r),u}function Td(t,e,r){var i,n,a,s,o,u,h,l=fe.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[qe]=e,oe.body.appendChild(fe),i=$e(fe,1),ze)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Na(a)!==(h=Na(s))?wd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ie(t._pt,f,n,o,u-o,Xc),t._pt.u=h||0,t._props.push(n));oe.body.removeChild(fe)}var se,oe,ue,he,le,fe,de,pe,_e=St.Power0,ce=St.Power1,me=St.Power2,ge=St.Power3,ve=St.Power4,ye=St.Linear,be=St.Quad,Te=St.Cubic,we=St.Quart,xe=St.Quint,ke=St.Strong,Oe=St.Elastic,Pe=St.Back,Me=St.SteppedEase,Ce=St.Bounce,Ae=St.Sine,Se=St.Expo,De=St.Circ,ze={},Fe=180/Math.PI,Be=Math.PI/180,Re=Math.atan2,Ie=/([A-Z])/g,Le=/(?:left|right|width|margin|padding|x)/i,Ee=/[\s,\(]\S/,Ne={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qe="transform",Ye=qe+"Origin",Xe="O,Moz,ms,Ms,Webkit".split(","),He=function _checkPropPrefix(t,e,r){var i=(e||le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Xe[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Xe[n]:"")+t},Ue={deg:1,rad:1,turn:1},Ve={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ke={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ie(t._pt,e,r,0,0,Bd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ge=[1,0,0,1,0,0],je={},$e=function _parseTransform(t,e){var r=t._gsap||new It(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,p,_,c,m,g,v,y,b,T,w,x,k,O,P,M,C,A,S,D,z,F,B,R=t.style,I=r.scaleX<0,L="deg",E=ld(t,Ye)||"0";return i=n=a=u=h=l=f=d=p=0,s=o=1,r.svg=!(!t.getCTM||!sd(t)),m=Hd(t,r.svg),r.svg&&(P=!r.uncache&&t.getAttribute("data-svg-origin"),Id(t,P||E,!!P||r.originIsAbsolute,!1!==r.smooth,m)),_=r.xOrigin||0,c=r.yOrigin||0,m!==Ge&&(b=m[0],T=m[1],w=m[2],x=m[3],i=k=m[4],n=O=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Re(T,b)*Fe:0,(f=w||x?Re(w,x)*Fe+u:0)&&(o*=Math.cos(f*Be)),r.svg&&(i-=_-(_*b+c*w),n-=c-(_*T+c*x))):(B=m[6],z=m[7],A=m[8],S=m[9],D=m[10],F=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(B,D))*Fe,g&&(P=k*(v=Math.cos(-g))+A*(y=Math.sin(-g)),M=O*v+S*y,C=B*v+D*y,A=k*-y+A*v,S=O*-y+S*v,D=B*-y+D*v,F=z*-y+F*v,k=P,O=M,B=C),l=(g=Re(-w,D))*Fe,g&&(v=Math.cos(-g),F=x*(y=Math.sin(-g))+F*v,b=P=b*v-A*y,T=M=T*v-S*y,w=C=w*v-D*y),u=(g=Re(T,b))*Fe,g&&(P=b*(v=Math.cos(g))+T*(y=Math.sin(g)),M=k*v+O*y,T=T*v-b*y,O=O*v-k*y,b=P,k=M),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ba(Math.sqrt(b*b+T*T+w*w)),o=ba(Math.sqrt(O*O+B*B)),g=Re(k,O),f=2e-4<Math.abs(g)?g*Fe:0,p=F?1/(F<0?-F:F):0),r.svg&&(P=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Fd(ld(t,qe)),P&&t.setAttribute("transform",P))),90<Math.abs(f)&&Math.abs(f)<270&&(I?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=r.xPercent||(i&&Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=r.yPercent||(n&&Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ba(s),r.scaleY=ba(o),r.rotation=ba(u)+L,r.rotationX=ba(h)+L,r.rotationY=ba(l)+L,r.skewX=f+L,r.skewY=d+L,r.transformPerspective=p+"px",(r.zOrigin=parseFloat(E.split(" ")[2])||0)&&(R[Ye]=Qe(E)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?rr:pe?er:We,r.uncache=0,r},Qe=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},We=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,er(t,e)},Ze="0deg",Je="0px",tr=") ",er=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,p=r.scaleX,_=r.scaleY,c=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Ze||h!==Ze)){var T,w=parseFloat(h)*Be,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*Be,T=Math.cos(w),a=Ld(g,a,x*T*-v),s=Ld(g,s,-Math.sin(w)*-v),o=Ld(g,o,k*T*-v+v)}c!==Je&&(y+="perspective("+c+tr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===Je&&s===Je&&o===Je||(y+=o!==Je||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+tr),u!==Ze&&(y+="rotate("+u+tr),h!==Ze&&(y+="rotateY("+h+tr),l!==Ze&&(y+="rotateX("+l+tr),f===Ze&&d===Ze||(y+="skew("+f+", "+d+tr),1===p&&1===_||(y+="scale("+p+", "+_+tr),g.style[qe]=y||"translate(0, 0)"},rr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,p=o.skewX,_=o.skewY,c=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);d=parseFloat(d),p=parseFloat(p),(_=parseFloat(_))&&(p+=_=parseFloat(_),d+=_),d||p?(d*=Be,p*=Be,r=Math.cos(d)*c,i=Math.sin(d)*c,n=Math.sin(d-p)*-m,a=Math.cos(d-p)*m,p&&(_*=Be,s=Math.tan(p-_),n*=s=Math.sqrt(1+s*s),a*=s,_&&(s=Math.tan(_),r*=s=Math.sqrt(1+s*s),i*=s)),r=ba(r),i=ba(i),n=ba(n),a=ba(a)):(r=c,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=wd(g,"x",l,"px"),k=wd(g,"y",f,"px")),(v||y||b||T)&&(x=ba(x+v-(v*r+y*n)+b),k=ba(k+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ba(x+u/100*s.width),k=ba(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[qe]=s)};aa("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Ke[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return xd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var ir,nr,ar,sr={name:"css",register:od,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,p,_,c,m,g,v,y,b=this._props,T=t.style,w=r.vars.startAt;for(f in he||od(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Pb(f,e,r,i,t,n)))if(h=typeof s,l=Ke[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=cb(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))a=(getComputedStyle(t).getPropertyValue(f)+"").trim(),s+="",d=Na(a),(p=Na(s))?d!==p&&(a=wd(t,f,a,p)+p):d&&(s+=d),this.add(T,"setProperty",a,s,i,n,0,0,f);else if("undefined"!==h){if(a=w&&f in w?"function"==typeof w[f]?w[f].call(r,i,t,n):w[f]:xd(t,f),u=parseFloat(a),(_="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Ne&&("autoAlpha"===f&&(1===u&&"hidden"===xd(t,"visibility")&&o&&(u=0),ud(this,T,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=Ne[f]).indexOf(",")&&(f=f.split(",")[0])),c=f in ze)if(m||((g=t._gsap).renderTransform&&!e.parseTransform||$e(t,e.parseTransform),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ie(this._pt,T,qe,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ie(this._pt,g,"scaleY",g.scaleY,_?_*o:o-g.scaleY),b.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=Ad(s),g.svg?Id(t,s,0,v,0,this):((p=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&ud(this,g,"zOrigin",g.zOrigin,p),ud(this,T,f,Qe(a),Qe(s)));continue}if("svgOrigin"===f){Id(t,s,1,v,0,this);continue}if(f in je){Sd(this,g,f,u,s,_);continue}if("smoothOrigin"===f){ud(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Td(this,s,t);continue}}else f in T||(f=He(f)||f);if(c||(o||0===o)&&(u||0===u)&&!Ee.test(s)&&f in T)o=o||0,(d=(a+"").substr((u+"").length))!==(p=Na(s)||(f in Y.units?Y.units[f]:d))&&(u=wd(t,f,a,p)),this._pt=new ie(this._pt,c?g:T,f,u,_?_*o:o-u,c||"px"!==p&&"zIndex"!==f||!1===e.autoRound?Xc:$c),this._pt.u=p||0,d!==p&&(this._pt.b=a,this._pt.r=Zc);else if(f in T)yd.call(this,t,f,a,s);else{if(!(f in t)){M(f,s);continue}this.add(t,f,t[f],s,i,n)}b.push(f)}y&&re(this)},get:xd,aliases:Ne,getSetter:function getSetter(t,e,i){var n=Ne[e];return n&&n.indexOf(",")<0&&(e=n),e in ze&&e!==Ye&&(t._gsap.x||xd(t,"x"))?i&&de===i?"scale"===e?ed:dd:(de=i||{})&&("scale"===e?fd:gd):t.style&&!r(t.style[e])?bd:~e.indexOf("-")?cd:$t(t,e)},core:{_removeProperty:td,_getMatrix:Hd}};ae.utils.checkPrefix=He,ar=aa((ir="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(nr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ze[t]=1}),aa(nr,function(t){Y.units[t]="deg",je[t]=1}),Ne[ar[13]]=ir+","+nr,aa("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Ne[e[1]]=ar[e[0]]}),aa("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),ae.registerPlugin(sr);var or=ae.registerPlugin(sr)||ae,ur=or.core.Tween;e.Back=Pe,e.Bounce=Ce,e.CSSPlugin=sr,e.Circ=De,e.Cubic=Te,e.Elastic=Oe,e.Expo=Se,e.Linear=ye,e.Power0=_e,e.Power1=ce,e.Power2=me,e.Power3=ge,e.Power4=ve,e.Quad=be,e.Quart=we,e.Quint=xe,e.Sine=Ae,e.SteppedEase=Me,e.Strong=ke,e.TimelineLite=Et,e.TimelineMax=Et,e.TweenLite=Vt,e.TweenMax=ur,e.default=or,e.gsap=or;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).window = e.window || {}))
})(this, function (e) {
  'use strict'
  function J(e) {
    return e
  }
  function K() {
    return 'undefined' != typeof window
  }
  function L() {
    return Oe || (K() && (Oe = window.gsap) && Oe.registerPlugin && Oe)
  }
  function M(e) {
    return !!~o.indexOf(e)
  }
  function N(e, t) {
    return ~Ue.indexOf(e) && Ue[Ue.indexOf(e) + 1][t]
  }
  function O(t, e) {
    var r = e.s,
      n = e.sc,
      o = h.indexOf(t),
      i = n === nt.sc ? 1 : 2
    return (
      ~o || (o = h.push(t) - 1),
      h[o + i] ||
        (h[o + i] =
          N(t, r) ||
          (M(t)
            ? n
            : function (e) {
                return arguments.length ? (t[r] = e) : t[r]
              }))
    )
  }
  function P(e) {
    return (
      N(e, 'getBoundingClientRect') ||
      (M(e)
        ? function () {
            return (ut.width = ke.innerWidth), (ut.height = ke.innerHeight), ut
          }
        : function () {
            return ot(e)
          })
    )
  }
  function S(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a
    return (r = 'scroll' + n) && (i = N(e, r))
      ? i() - P(e)()[o]
      : M(e)
      ? Math.max(Ce[r], Pe[r]) -
        (ke['inner' + n] || Ce['client' + n] || Pe['client' + n])
      : e[r] - e['offset' + n]
  }
  function T(e, t) {
    for (var r = 0; r < d.length; r += 3)
      (t && !~t.indexOf(d[r + 1])) || e(d[r], d[r + 1], d[r + 2])
  }
  function U(e) {
    return 'string' == typeof e
  }
  function V(e) {
    return 'function' == typeof e
  }
  function W(e) {
    return 'number' == typeof e
  }
  function X(e) {
    return 'object' == typeof e
  }
  function Y(e) {
    return V(e) && e()
  }
  function Z(r, n) {
    return function () {
      var e = Y(r),
        t = Y(n)
      return function () {
        Y(e), Y(t)
      }
    }
  }
  function sa(e) {
    return ke.getComputedStyle(e)
  }
  function ua(e, t) {
    for (var r in t) r in e || (e[r] = t[r])
    return e
  }
  function wa(e, t) {
    var r = t.d2
    return e['offset' + r] || e['client' + r] || 0
  }
  function ya(t, r, e, n) {
    return e.split(',').forEach(function (e) {
      return t(r, e, n)
    })
  }
  function za(e, t, r) {
    return e.addEventListener(t, r, { passive: !0 })
  }
  function Aa(e, t, r) {
    return e.removeEventListener(t, r)
  }
  function Ea(e, t) {
    if (U(e)) {
      var r = e.indexOf('='),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0
      n && (e.indexOf('%') > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in w
            ? w[e] * t
            : ~e.indexOf('%')
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0))
    }
    return e
  }
  function Fa(e, t, r, n, o, i, a) {
    var s = o.startColor,
      l = o.endColor,
      c = o.fontSize,
      f = o.indent,
      u = o.fontWeight,
      p = _e.createElement('pgiamarker'),
      d = M(r) || 'fixed' === N(r, 'pinType'),
      g = -1 !== e.indexOf('scroller'),
      h = d ? Pe : r,
      v = -1 !== e.indexOf('start'),
      m = v ? s : l,
      b =
        'border-color:' +
        m +
        ';font-size:' +
        c +
        ';color:' +
        m +
        ';font-weight:' +
        u +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
    return (
      (b += 'position:' + (g && d ? 'fixed;' : 'absolute;')),
      (!g && d) ||
        (b += (n === nt ? x : y) + ':' + (i + parseFloat(f)) + 'px;'),
      a &&
        (b +=
          'box-sizing:border-box;text-align:left;width:' +
          a.offsetWidth +
          'px;'),
      (p._isStart = v),
      p.setAttribute('class', 'gsap-marker-' + e),
      (p.style.cssText = b),
      (p.innerText = t || 0 === t ? e + '-' + t : e),
      h.children[0] ? h.insertBefore(p, h.children[0]) : h.appendChild(p),
      (p._offset = p['offset' + n.op.d2]),
      k(p, 0, n, v),
      p
    )
  }
  function Ja() {
    return (l = l || s(D))
  }
  function Ka() {
    l || ((l = s(D)), Ke || E('scrollStart'), (Ke = Je()))
  }
  function La() {
    return !Le && !r && a.restart(!0)
  }
  function Ra(e) {
    var t,
      r = Oe.ticker.frame,
      n = [],
      o = 0
    if (g !== r || Ve) {
      for (F(); o < z.length; o += 4)
        (t = ke.matchMedia(z[o]).matches) !== z[o + 3] &&
          ((z[o + 3] = t)
            ? n.push(o)
            : F(1, z[o]) || (V(z[o + 2]) && z[o + 2]()))
      for (R(), o = 0; o < n.length; o++)
        (t = n[o]), (Ie = z[t]), (z[t + 2] = z[t + 1](e))
      ;(Ie = 0), i && B(0, 1), (g = r), E('matchMedia')
    }
  }
  function Sa() {
    return Aa(G, 'scrollEnd', Sa) || B(!0)
  }
  function cb(e, t, r, n) {
    if (e.parentNode !== t) {
      for (var o, i = H.length, a = t.style, s = e.style; i--; )
        a[(o = H[i])] = r[o]
      ;(a.position = 'absolute' === r.position ? 'absolute' : 'relative'),
        'inline' === r.display && (a.display = 'inline-block'),
        (s[y] = s[x] = 'auto'),
        (a.overflow = 'visible'),
        (a.boxSizing = 'border-box'),
        (a[De] = wa(e, rt) + tt),
        (a[He] = wa(e, nt) + tt),
        (a[Ge] = s[Qe] = s.top = s[m] = '0'),
        ft(n),
        (s[De] = s.maxWidth = r[De]),
        (s[He] = s.maxHeight = r[He]),
        (s[Ge] = r[Ge]),
        e.parentNode.insertBefore(t, e),
        t.appendChild(e)
    }
  }
  function fb(e) {
    for (var t = q.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(q[o], r[q[o]])
    return (n.t = e), n
  }
  function ib(e, t, r, n, o, i, a, s, l, c, f, u) {
    if (
      (V(e) && (e = e(s)),
      U(e) &&
        'max' === e.substr(0, 3) &&
        (e = u + ('=' === e.charAt(4) ? Ea('0' + e.substr(3), r) : 0)),
      W(e))
    )
      a && k(a, r, n, !0)
    else {
      V(t) && (t = t(s))
      var p,
        d,
        g,
        h = ze(t)[0] || Pe,
        v = ot(h) || {},
        m = e.split(' ')
      ;(v && (v.left || v.top)) ||
        'none' !== sa(h).display ||
        ((g = h.style.display),
        (h.style.display = 'block'),
        (v = ot(h)),
        g ? (h.style.display = g) : h.style.removeProperty('display')),
        (p = Ea(m[0], v[n.d])),
        (d = Ea(m[1] || '0', r)),
        (e = v[n.p] - l[n.p] - c + p + o - d),
        a && k(a, d, n, r - d < 20 || (a._isStart && 20 < d)),
        (r -= r - d)
    }
    if (i) {
      var b = e + r,
        x = i._isStart
      ;(u = 'scroll' + n.d2),
        k(
          i,
          b,
          n,
          (x && 20 < b) ||
            (!x && (f ? Math.max(Pe[u], Ce[u]) : i.parentNode[u]) <= b + 1),
        ),
        f &&
          ((l = ot(a)),
          f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + tt))
    }
    return Math.round(e)
  }
  function kb(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style
      if (t === Pe) {
        for (o in ((e._stOrig = a.cssText), (i = sa(e))))
          +o ||
            $.test(o) ||
            !i[o] ||
            'string' != typeof a[o] ||
            '0' === o ||
            (a[o] = i[o])
        ;(a.top = r), (a.left = n)
      } else a.cssText = e._stOrig
      ;(Oe.core.getCache(e).uncache = 1), t.appendChild(e)
    }
  }
  function lb(l, e) {
    var c,
      f,
      u = O(l, e),
      p = '_scroll' + e.p2
    return (
      (l[p] = u),
      function getTween(e, t, r, n, o) {
        var i = getTween.tween,
          a = t.onComplete,
          s = {}
        return (
          i && i.kill(),
          (c = Math.round(r)),
          (t[p] = e),
          ((t.modifiers = s)[p] = function (e) {
            return (
              (e = Math.round(u())) !== c && e !== f && 2 < Math.abs(e - c)
                ? (i.kill(), (getTween.tween = 0))
                : (e = r + n * i.ratio + o * i.ratio * i.ratio),
              (f = c),
              (c = Math.round(e))
            )
          }),
          (t.onComplete = function () {
            ;(getTween.tween = 0), a && a.call(i)
          }),
          (i = getTween.tween = Oe.to(l, t))
        )
      }
    )
  }
  var Oe,
    i,
    ke,
    _e,
    Ce,
    Pe,
    o,
    a,
    s,
    l,
    ze,
    Ee,
    Ae,
    c,
    Le,
    Ne,
    f,
    Re,
    u,
    p,
    d,
    Fe,
    Be,
    r,
    We,
    Ie,
    g,
    Ve = 1,
    Ue = [],
    h = [],
    Je = Date.now,
    v = Je(),
    Ke = 0,
    Ye = 1,
    Xe = Math.abs,
    t = 'scrollLeft',
    n = 'scrollTop',
    m = 'left',
    x = 'right',
    y = 'bottom',
    De = 'width',
    He = 'height',
    qe = 'Right',
    Ze = 'Left',
    je = 'Top',
    $e = 'Bottom',
    Ge = 'padding',
    Qe = 'margin',
    et = 'Width',
    b = 'Height',
    tt = 'px',
    rt = {
      s: t,
      p: m,
      p2: Ze,
      os: x,
      os2: qe,
      d: De,
      d2: et,
      a: 'x',
      sc: function sc(e) {
        return arguments.length
          ? ke.scrollTo(e, nt.sc())
          : ke.pageXOffset || _e[t] || Ce[t] || Pe[t] || 0
      },
    },
    nt = {
      s: n,
      p: 'top',
      p2: je,
      os: y,
      os2: $e,
      d: He,
      d2: b,
      a: 'y',
      op: rt,
      sc: function sc(e) {
        return arguments.length
          ? ke.scrollTo(rt.sc(), e)
          : ke.pageYOffset || _e[n] || Ce[n] || Pe[n] || 0
      },
    },
    ot = function _getBounds(e, t) {
      var r =
          t &&
          'matrix(1, 0, 0, 1, 0, 0)' !== sa(e)[f] &&
          Oe.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect()
      return r && r.progress(0).kill(), n
    },
    it = {
      startColor: 'green',
      endColor: 'red',
      indent: 0,
      fontSize: '16px',
      fontWeight: 'normal',
    },
    at = { toggleActions: 'play', anticipatePin: 0 },
    w = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    k = function _positionMarker(e, t, r, n) {
      var o = { display: 'block' },
        i = r[n ? 'os2' : 'p2'],
        a = r[n ? 'p2' : 'os2']
      ;(e._isFlipped = n),
        (o[r.a + 'Percent'] = n ? -100 : 0),
        (o[r.a] = n ? '1px' : 0),
        (o['border' + i + et] = 1),
        (o['border' + a + et] = 0),
        (o[r.p] = t + 'px'),
        Oe.set(e, o)
    },
    st = [],
    lt = {},
    _ = {},
    C = [],
    z = [],
    E = function _dispatch(e) {
      return (
        (_[e] &&
          _[e].map(function (e) {
            return e()
          })) ||
        C
      )
    },
    A = [],
    R = function _revertRecorded(e) {
      for (var t = 0; t < A.length; t += 4)
        (e && A[t + 3] !== e) ||
          ((A[t].style.cssText = A[t + 1]), (A[t + 2].uncache = 1))
    },
    F = function _revertAll(e, t) {
      var r
      for (Re = 0; Re < st.length; Re++)
        (r = st[Re]),
          (t && r.media !== t) ||
            (e
              ? r.kill(1)
              : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()))
      R(t), t || E('revert')
    },
    B = function _refreshAll(e, t) {
      if (!Ke || e) {
        var r = E('refreshInit')
        for (Fe && G.sort(), t || F(), Re = 0; Re < st.length; Re++)
          st[Re].refresh()
        for (
          r.forEach(function (e) {
            return e && e.render && e.render(-1)
          }),
            Re = st.length;
          Re--;

        )
          st[Re].scroll.rec = 0
        a.pause(), E('refresh')
      } else za(G, 'scrollEnd', Sa)
    },
    I = 0,
    ct = 1,
    D = function _updateAll() {
      var e = st.length,
        t = Je(),
        r = 50 <= t - v,
        n = e && st[0].scroll()
      if (
        ((ct = n < I ? -1 : 1),
        (I = n),
        r &&
          (Ke && !Ne && 200 < t - Ke && ((Ke = 0), E('scrollEnd')),
          (Ae = v),
          (v = t)),
        ct < 0)
      ) {
        for (Re = e; Re--; ) st[Re] && st[Re].update(0, r)
        ct = 1
      } else for (Re = 0; Re < e; Re++) st[Re] && st[Re].update(0, r)
      l = 0
    },
    H = [
      m,
      'top',
      y,
      x,
      Qe + $e,
      Qe + qe,
      Qe + je,
      Qe + Ze,
      'display',
      'flexShrink',
      'float',
    ],
    q = H.concat([
      De,
      He,
      'boxSizing',
      'max' + et,
      'max' + b,
      'position',
      Qe,
      Ge,
      Ge + je,
      Ge + qe,
      Ge + $e,
      Ge + Ze,
    ]),
    j = /([A-Z])/g,
    ft = function _setState(e) {
      if (e)
        for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(j, '-$1').toLowerCase())
    },
    ut = { left: 0, top: 0 },
    $ = /(?:webkit|moz|length|cssText)/i
  rt.op = nt
  var G =
    ((ScrollTrigger.prototype.init = function init(y, w) {
      if (((this.progress = this.start = 0), this.vars && this.kill(1), Ye)) {
        var d,
          n,
          l,
          T,
          k,
          _,
          C,
          z,
          E,
          A,
          L,
          R,
          e,
          F,
          B,
          I,
          K,
          Y,
          t,
          D,
          g,
          H,
          q,
          h,
          Z,
          v,
          m,
          r,
          b,
          x,
          j,
          o,
          c,
          $,
          G,
          Q,
          ee,
          te = (y = ua(U(y) || W(y) || y.nodeType ? { trigger: y } : y, at))
            .horizontal
            ? rt
            : nt,
          re = y.onUpdate,
          ne = y.toggleClass,
          i = y.id,
          oe = y.onToggle,
          ie = y.onRefresh,
          a = y.scrub,
          ae = y.trigger,
          se = y.pin,
          le = y.pinSpacing,
          ce = y.invalidateOnRefresh,
          fe = y.anticipatePin,
          s = y.onScrubComplete,
          f = y.onSnapComplete,
          ue = y.once,
          pe = y.snap,
          de = y.pinReparent,
          ge = !a && 0 !== a,
          he = ze(y.scroller || ke)[0],
          u = Oe.core.getCache(he),
          ve = M(he),
          me =
            'pinType' in y
              ? 'fixed' === y.pinType
              : ve || 'fixed' === N(he, 'pinType'),
          be = [y.onEnter, y.onLeave, y.onEnterBack, y.onLeaveBack],
          xe = ge && y.toggleActions.split(' '),
          p = 'markers' in y ? y.markers : at.markers,
          ye = ve ? 0 : parseFloat(sa(he)['border' + te.p2 + et]) || 0,
          we = this,
          Te =
            y.onRefreshInit &&
            function () {
              return y.onRefreshInit(we)
            },
          Se = (function _getSizeFunc(e, t, r) {
            var n = r.d,
              o = r.d2,
              i = r.a
            return (i = N(e, 'getBoundingClientRect'))
              ? function () {
                  return i()[n]
                }
              : function () {
                  return (t ? ke['inner' + o] : e['client' + o]) || 0
                }
          })(he, ve, te),
          Me = (function _getOffsetsFunc(e, t) {
            return !t || ~Ue.indexOf(e)
              ? P(e)
              : function () {
                  return ut
                }
          })(he, ve)
        ;(we.media = Ie),
          (fe *= 45),
          st.push(we),
          (we.scroller = he),
          (we.scroll = O(he, te)),
          (k = we.scroll()),
          (we.vars = y),
          (w = w || y.animation),
          'refreshPriority' in y && (Fe = 1),
          (u.tweenScroll = u.tweenScroll || {
            top: lb(he, nt),
            left: lb(he, rt),
          }),
          (we.tweenTo = d = u.tweenScroll[te.p]),
          w &&
            ((w.vars.lazy = !1),
            w._initted ||
              (!1 !== w.vars.immediateRender &&
                !1 !== y.immediateRender &&
                w.render(0, !0, !0)),
            (we.animation = w.pause()),
            (w.scrollTrigger = we),
            (o = W(a) && a) &&
              (j = Oe.to(w, {
                ease: 'power3',
                duration: o,
                onComplete: function onComplete() {
                  return s && s(we)
                },
              })),
            (b = 0),
            (i = i || w.vars.id)),
          pe &&
            (X(pe) || (pe = { snapTo: pe }),
            Oe.set(ve ? [Pe, Ce] : he, { scrollBehavior: 'auto' }),
            (l = V(pe.snapTo)
              ? pe.snapTo
              : 'labels' === pe.snapTo
              ? (function _getLabels(i) {
                  return function (e) {
                    var t,
                      r = [],
                      n = i.labels,
                      o = i.duration()
                    for (t in n) r.push(n[t] / o)
                    return Oe.utils.snap(r, e)
                  }
                })(w)
              : Oe.utils.snap(pe.snapTo)),
            (c = pe.duration || { min: 0.1, max: 2 }),
            (c = X(c) ? Ee(c.min, c.max) : Ee(c, c)),
            ($ = Oe.delayedCall(pe.delay || o / 2 || 0.1, function () {
              if (Math.abs(we.getVelocity()) < 10 && !Ne) {
                var e = w && !ge ? w.totalProgress() : we.progress,
                  t = ((e - x) / (Je() - Ae)) * 1e3 || 0,
                  r = (Xe(t / 2) * t) / 0.185,
                  n = e + r,
                  o = Ee(0, 1, l(n, we)),
                  i = we.scroll(),
                  a = Math.round(C + o * F),
                  s = d.tween
                if (i <= z && C <= i && a !== i) {
                  if (s && !s._initted && s.data <= Math.abs(a - i)) return
                  d(
                    a,
                    {
                      duration: c(
                        Xe(
                          (0.185 * Math.max(Xe(n - e), Xe(o - e))) / t / 0.05 ||
                            0,
                        ),
                      ),
                      ease: pe.ease || 'power3',
                      data: Math.abs(a - i),
                      onComplete: function onComplete() {
                        ;(b = x = w && !ge ? w.totalProgress() : we.progress),
                          f && f(we)
                      },
                    },
                    i,
                    r * F,
                    a - i - r * F,
                  )
                }
              } else we.isActive && $.restart(!0)
            }).pause())),
          i && (lt[i] = we),
          (ae = we.trigger = ze(ae || se)[0]),
          (se = !0 === se ? ae : ze(se)[0]),
          U(ne) && (ne = { targets: ae, className: ne }),
          se &&
            (!1 === le ||
              le === Qe ||
              (le = !(!le && 'flex' === sa(se.parentNode).display) && Ge),
            (we.pin = se),
            !1 !== y.force3D && Oe.set(se, { force3D: !0 }),
            (n = Oe.core.getCache(se)).spacer
              ? (B = n.pinState)
              : ((n.spacer = Y = _e.createElement('div')),
                Y.setAttribute(
                  'class',
                  'pin-spacer' + (i ? ' pin-spacer-' + i : ''),
                ),
                (n.pinState = B = fb(se))),
            (we.spacer = Y = n.spacer),
            (r = sa(se)),
            (h = r[le + te.os2]),
            (D = Oe.getProperty(se)),
            (g = Oe.quickSetter(se, te.a, tt)),
            cb(se, Y, r),
            (K = fb(se))),
          p &&
            ((e = X(p) ? ua(p, it) : it),
            (L = Fa('scroller-start', i, he, te, e, 0)),
            (R = Fa('scroller-end', i, he, te, e, 0, L)),
            (t = L['offset' + te.op.d2]),
            (E = Fa('start', i, he, te, e, t)),
            (A = Fa('end', i, he, te, e, t)),
            me ||
              ((function _makePositionable(e) {
                e.style.position =
                  'absolute' === sa(e).position ? 'absolute' : 'relative'
              })(ve ? Pe : he),
              Oe.set([L, R], { force3D: !0 }),
              (v = Oe.quickSetter(L, te.a, tt)),
              (m = Oe.quickSetter(R, te.a, tt)))),
          (we.revert = function (e) {
            var t = !1 !== e || !we.enabled,
              r = Le
            t !== T &&
              (t &&
                ((Q = Math.max(we.scroll(), we.scroll.rec || 0)),
                (G = we.progress),
                (ee = w && w.progress())),
              E &&
                [E, A, L, R].forEach(function (e) {
                  return (e.style.display = t ? 'none' : 'block')
                }),
              t && (Le = 1),
              we.update(t),
              (Le = r),
              se &&
                (t
                  ? (function _swapPinOut(e, t, r) {
                      if ((ft(r), e.parentNode === t)) {
                        var n = t.parentNode
                        n && (n.insertBefore(e, t), n.removeChild(t))
                      }
                    })(se, Y, B)
                  : (de && we.isActive) || cb(se, Y, sa(se), Z)),
              (T = t))
          }),
          (we.refresh = function (e) {
            if (!Le && we.enabled)
              if (se && e && Ke) za(ScrollTrigger, 'scrollEnd', Sa)
              else {
                ;(Le = 1),
                  j && j.pause(),
                  ce && w && w.progress(0).invalidate(),
                  T || we.revert()
                for (
                  var t,
                    r,
                    n,
                    o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    f = Se(),
                    u = Me(),
                    p = S(he, te),
                    d = 0,
                    g = 0,
                    h = y.end,
                    v = y.endTrigger || ae,
                    m =
                      y.start ||
                      (0 === y.start ? 0 : se || !ae ? '0 0' : '0 100%'),
                    b = (ae && Math.max(0, st.indexOf(we))) || 0,
                    x = b;
                  x--;

                )
                  !(s = st[x].pin) || (s !== ae && s !== se) || st[x].revert()
                for (
                  C =
                    ib(m, ae, f, te, we.scroll(), E, L, we, u, ye, me, p) ||
                    (se ? -0.001 : 0),
                    V(h) && (h = h(we)),
                    U(h) &&
                      !h.indexOf('+=') &&
                      (~h.indexOf(' ')
                        ? (h = (U(m) ? m.split(' ')[0] : '') + h)
                        : ((d = Ea(h.substr(2), f)),
                          (h = U(m) ? m : C + d),
                          (v = ae))),
                    z =
                      Math.max(
                        C,
                        ib(
                          h || (v ? '100% 0' : p),
                          v,
                          f,
                          te,
                          we.scroll() + d,
                          A,
                          R,
                          we,
                          u,
                          ye,
                          me,
                          p,
                        ),
                      ) || -0.001,
                    F = z - C || ((C -= 0.01) && 0.001),
                    d = 0,
                    x = b;
                  x--;

                )
                  (s = (a = st[x]).pin) &&
                    a.start - a._pinPush < C &&
                    ((t = a.end - a.start),
                    s === ae && (d += t),
                    s === se && (g += t))
                if (
                  ((C += d),
                  (z += d),
                  (we._pinPush = g),
                  E && d && (((t = {})[te.a] = '+=' + d), Oe.set([E, A], t)),
                  se)
                )
                  (t = sa(se)),
                    (o = te === nt),
                    (n = we.scroll()),
                    (H = parseFloat(D(te.a)) + g),
                    !p &&
                      1 < z &&
                      ((ve ? Pe : he).style['overflow-' + te.a] = 'scroll'),
                    cb(se, Y, t),
                    (K = fb(se)),
                    (r = ot(se, !0)),
                    (l = me && O(he, o ? rt : nt)()),
                    le &&
                      (((Z = [le + te.os2, F + g + tt]).t = Y),
                      (x = le === Ge ? wa(se, te) + F + g : 0) &&
                        Z.push(te.d, x + tt),
                      ft(Z),
                      me && we.scroll(Q)),
                    me &&
                      (((i = {
                        top: r.top + (o ? n - C : l) + tt,
                        left: r.left + (o ? l : n - C) + tt,
                        boxSizing: 'border-box',
                        position: 'fixed',
                      })[De] = i.maxWidth =
                        Math.ceil(r.width) + tt),
                      (i[He] = i.maxHeight = Math.ceil(r.height) + tt),
                      (i[Qe] =
                        i[Qe + je] =
                        i[Qe + qe] =
                        i[Qe + $e] =
                        i[Qe + Ze] =
                          '0'),
                      (i[Ge] = t[Ge]),
                      (i[Ge + je] = t[Ge + je]),
                      (i[Ge + qe] = t[Ge + qe]),
                      (i[Ge + $e] = t[Ge + $e]),
                      (i[Ge + Ze] = t[Ge + Ze]),
                      (I = (function _copyState(e, t, r) {
                        for (
                          var n, o = [], i = e.length, a = r ? 8 : 0;
                          a < i;
                          a += 2
                        )
                          (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1])
                        return (o.t = e.t), o
                      })(B, i, de))),
                    w
                      ? ((c = w._initted),
                        Be(1),
                        w.progress(1, !0),
                        (q = D(te.a) - H + F + g),
                        F !== q && I.splice(I.length - 2, 2),
                        w.progress(0, !0),
                        c || w.invalidate(),
                        Be(0))
                      : (q = F)
                else if (ae && we.scroll())
                  for (r = ae.parentNode; r && r !== Pe; )
                    r._pinOffset && ((C -= r._pinOffset), (z -= r._pinOffset)),
                      (r = r.parentNode)
                for (x = 0; x < b; x++)
                  !(a = st[x].pin) || (a !== ae && a !== se) || st[x].revert(!1)
                ;(we.start = C),
                  (we.end = z),
                  (k = _ = we.scroll()) < Q && we.scroll(Q),
                  we.revert(!1),
                  (Le = 0),
                  w &&
                    ge &&
                    w._initted &&
                    w.progress(ee, !0).render(w.time(), !0, !0),
                  G !== we.progress &&
                    (j && w.totalProgress(G, !0),
                    (we.progress = G),
                    we.update()),
                  se && le && (Y._pinOffset = Math.round(we.progress * q)),
                  ie && ie(we)
              }
          }),
          (we.getVelocity = function () {
            return ((we.scroll() - _) / (Je() - Ae)) * 1e3 || 0
          }),
          (we.update = function (e, t) {
            var r,
              n,
              o,
              i,
              a,
              s = we.scroll(),
              l = e ? 0 : (s - C) / F,
              c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
              f = we.progress
            if (
              (t &&
                ((_ = k),
                (k = s),
                pe && ((x = b), (b = w && !ge ? w.totalProgress() : c))),
              fe &&
                !c &&
                se &&
                !Le &&
                !Ve &&
                Ke &&
                C < s + ((s - _) / (Je() - Ae)) * fe &&
                (c = 1e-4),
              c !== f && we.enabled)
            ) {
              if (
                ((i =
                  (a = (r = we.isActive = !!c && c < 1) != (!!f && f < 1)) ||
                  !!c != !!f),
                (we.direction = f < c ? 1 : -1),
                (we.progress = c),
                ge ||
                  (!j || Le || Ve
                    ? w && w.totalProgress(c, !!Le)
                    : ((j.vars.totalProgress = c), j.invalidate().restart())),
                se)
              )
                if ((e && le && (Y.style[le + te.os2] = h), me)) {
                  if (i) {
                    if (
                      ((o = !e && f < c && s < z + 1 && s + 1 >= S(he, te)), de)
                    )
                      if (e || (!r && !o)) kb(se, Y)
                      else {
                        var u = ot(se, !0),
                          p = s - C
                        kb(
                          se,
                          Pe,
                          u.top + (te === nt ? p : 0) + tt,
                          u.left + (te === nt ? 0 : p) + tt,
                        )
                      }
                    ft(r || o ? I : K),
                      (q !== F && c < 1 && r) || g(H + (1 !== c || o ? 0 : q))
                  }
                } else g(H + q * c)
              !pe || d.tween || Le || Ve || $.restart(!0),
                ne &&
                  (a || (ue && c && (c < 1 || !We))) &&
                  ze(ne.targets).forEach(function (e) {
                    return e.classList[r || ue ? 'add' : 'remove'](ne.className)
                  }),
                !re || ge || e || re(we),
                i && !Le
                  ? ((n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3),
                    ge &&
                      ((o = (!a && 'none' !== xe[n + 1] && xe[n + 1]) || xe[n]),
                      w &&
                        ('complete' === o || 'reset' === o || o in w) &&
                        ('complete' === o
                          ? w.pause().totalProgress(1)
                          : 'reset' === o
                          ? w.restart(!0).pause()
                          : w[o]()),
                      re && re(we)),
                    (!a && We) ||
                      (oe && a && oe(we),
                      be[n] && be[n](we),
                      ue && (1 === c ? we.kill(!1, 1) : (be[n] = 0)),
                      a || (be[(n = 1 === c ? 1 : 3)] && be[n](we))))
                  : ge && re && !Le && re(we)
            }
            m && (v(s + (L._isFlipped ? 1 : 0)), m(s))
          }),
          (we.enable = function () {
            we.enabled ||
              ((we.enabled = !0),
              za(he, 'resize', La),
              za(he, 'scroll', Ka),
              Te && za(ScrollTrigger, 'refreshInit', Te),
              w && w.add
                ? Oe.delayedCall(0.01, function () {
                    return C || z || we.refresh()
                  }) &&
                  (F = 0.01) &&
                  (C = z = 0)
                : we.refresh())
          }),
          (we.disable = function (e, t) {
            if (
              we.enabled &&
              (!1 !== e && we.revert(),
              (we.enabled = we.isActive = !1),
              t || (j && j.pause()),
              (Q = 0),
              n && (n.uncache = 1),
              Te && Aa(ScrollTrigger, 'refreshInit', Te),
              $ && ($.pause(), d.tween && d.tween.kill() && (d.tween = 0)),
              !ve)
            ) {
              for (var r = st.length; r--; )
                if (st[r].scroller === he && st[r] !== we) return
              Aa(he, 'resize', La), Aa(he, 'scroll', Ka)
            }
          }),
          (we.kill = function (e, t) {
            we.disable(e, t), i && delete lt[i]
            var r = st.indexOf(we)
            st.splice(r, 1),
              r === Re && 0 < ct && Re--,
              w && ((w.scrollTrigger = null), e && w.render(-1), t || w.kill()),
              E &&
                [E, A, L, R].forEach(function (e) {
                  return e.parentNode.removeChild(e)
                }),
              n && (n.uncache = 1)
          }),
          we.enable()
      } else this.update = this.refresh = this.kill = J
    }),
    (ScrollTrigger.register = function register(e) {
      if (
        !i &&
        ((Oe = e || L()),
        K() &&
          window.document &&
          ((ke = window),
          (_e = document),
          (Ce = _e.documentElement),
          (Pe = _e.body)),
        Oe &&
          ((ze = Oe.utils.toArray),
          (Ee = Oe.utils.clamp),
          (Be = Oe.core.suppressOverwrites || J),
          Oe.core.globals('ScrollTrigger', ScrollTrigger),
          Pe))
      ) {
        ;(s =
          ke.requestAnimationFrame ||
          function (e) {
            return setTimeout(e, 16)
          }),
          za(ke, 'mousewheel', Ka),
          (o = [ke, _e, Ce, Pe]),
          za(_e, 'scroll', Ka)
        var t,
          r = Pe.style,
          n = r.borderTop
        ;(r.borderTop = '1px solid #000'),
          (t = ot(Pe)),
          (nt.m = Math.round(t.top + nt.sc()) || 0),
          (rt.m = Math.round(t.left + rt.sc()) || 0),
          n ? (r.borderTop = n) : r.removeProperty('border-top'),
          (c = setInterval(Ja, 200)),
          Oe.delayedCall(0.5, function () {
            return (Ve = 0)
          }),
          za(_e, 'touchcancel', J),
          za(Pe, 'touchstart', J),
          ya(za, _e, 'pointerdown,touchstart,mousedown', function () {
            return (Ne = 1)
          }),
          ya(za, _e, 'pointerup,touchend,mouseup', function () {
            return (Ne = 0)
          }),
          (f = Oe.utils.checkPrefix('transform')),
          q.push(f),
          (i = Je()),
          (a = Oe.delayedCall(0.2, B).pause()),
          (d = [
            _e,
            'visibilitychange',
            function () {
              var e = ke.innerWidth,
                t = ke.innerHeight
              _e.hidden ? ((u = e), (p = t)) : (u === e && p === t) || La()
            },
            _e,
            'DOMContentLoaded',
            B,
            ke,
            'load',
            function () {
              return Ke || B()
            },
            ke,
            'resize',
            La,
          ]),
          T(za)
      }
      return i
    }),
    (ScrollTrigger.defaults = function defaults(e) {
      for (var t in e) at[t] = e[t]
    }),
    (ScrollTrigger.kill = function kill() {
      ;(Ye = 0),
        st.slice(0).forEach(function (e) {
          return e.kill(1)
        })
    }),
    (ScrollTrigger.config = function config(e) {
      'limitCallbacks' in e && (We = !!e.limitCallbacks)
      var t = e.syncInterval
      ;(t && clearInterval(c)) || ((c = t) && setInterval(Ja, t)),
        'autoRefreshEvents' in e &&
          (T(Aa) || T(za, e.autoRefreshEvents || 'none'),
          (r = -1 === (e.autoRefreshEvents + '').indexOf('resize')))
    }),
    (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
      var r = ze(e)[0]
      M(r) ? Ue.unshift(ke, t, Pe, t, Ce, t) : Ue.unshift(r, t)
    }),
    (ScrollTrigger.matchMedia = function matchMedia(e) {
      var t, r, n, o, i
      for (r in e)
        (n = z.indexOf(r)),
          (o = e[r]),
          'all' === (Ie = r)
            ? o()
            : (t = ke.matchMedia(r)) &&
              (t.matches && (i = o()),
              ~n
                ? ((z[n + 1] = Z(z[n + 1], o)), (z[n + 2] = Z(z[n + 2], i)))
                : ((n = z.length),
                  z.push(r, o, i),
                  t.addListener
                    ? t.addListener(Ra)
                    : t.addEventListener('change', Ra)),
              (z[n + 3] = t.matches)),
          (Ie = 0)
      return z
    }),
    (ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
      e || (z.length = 0), 0 <= (e = z.indexOf(e)) && z.splice(e, 4)
    }),
    ScrollTrigger)
  function ScrollTrigger(e, t) {
    i ||
      ScrollTrigger.register(Oe) ||
      console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
      this.init(e, t)
  }
  ;(G.version = '3.6.0'),
    (G.saveStyles = function (e) {
      return e
        ? ze(e).forEach(function (e) {
            if (e && e.style) {
              var t = A.indexOf(e)
              0 <= t && A.splice(t, 4),
                A.push(e, e.style.cssText, Oe.core.getCache(e), Ie)
            }
          })
        : A
    }),
    (G.revert = function (e, t) {
      return F(!e, t)
    }),
    (G.create = function (e, t) {
      return new G(e, t)
    }),
    (G.refresh = function (e) {
      return e ? La() : B(!0)
    }),
    (G.update = D),
    (G.maxScroll = function (e, t) {
      return S(e, t ? rt : nt)
    }),
    (G.getScrollFunc = function (e, t) {
      return O(ze(e)[0], t ? rt : nt)
    }),
    (G.getById = function (e) {
      return lt[e]
    }),
    (G.getAll = function () {
      return st.slice(0)
    }),
    (G.isScrolling = function () {
      return !!Ke
    }),
    (G.addEventListener = function (e, t) {
      var r = _[e] || (_[e] = [])
      ~r.indexOf(t) || r.push(t)
    }),
    (G.removeEventListener = function (e, t) {
      var r = _[e],
        n = r && r.indexOf(t)
      0 <= n && r.splice(n, 1)
    }),
    (G.batch = function (e, t) {
      function ei(e, t) {
        var r = [],
          n = [],
          o = Oe.delayedCall(i, function () {
            t(r, n), (r = []), (n = [])
          }).pause()
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1)
        }
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9
      for (r in t)
        o[r] =
          'on' === r.substr(0, 2) && V(t[r]) && 'onRefreshInit' !== r
            ? ei(0, t[r])
            : t[r]
      return (
        V(a) &&
          ((a = a()),
          za(G, 'refresh', function () {
            return (a = t.batchMax())
          })),
        ze(e).forEach(function (e) {
          var t = {}
          for (r in o) t[r] = o[r]
          ;(t.trigger = e), n.push(G.create(t))
        }),
        n
      )
    }),
    (G.sort = function (e) {
      return st.sort(
        e ||
          function (e, t) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              e.start -
              (t.start + -1e6 * (t.vars.refreshPriority || 0))
            )
          },
      )
    }),
    L() && Oe.registerPlugin(G),
    (e.ScrollTrigger = G),
    (e.default = G)
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 })
  } else {
    delete e.default
  }
})

!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(((t = t || self).window = t.window || {}))
})(this, function (e) {
  'use strict'
  function k() {
    return 'undefined' != typeof window
  }
  function l() {
    return i || (k() && (i = window.gsap) && i.registerPlugin && i)
  }
  function m(t) {
    return 'string' == typeof t
  }
  function n(t) {
    return 'function' == typeof t
  }
  function o(t, e) {
    var o = 'x' === e ? 'Width' : 'Height',
      n = 'scroll' + o,
      r = 'client' + o
    return t === x || t === u || t === c
      ? Math.max(u[n], c[n]) - (x['inner' + o] || u[r] || c[r])
      : t[n] - t['offset' + o]
  }
  function p(t, e) {
    var o = 'scroll' + ('x' === e ? 'Left' : 'Top')
    return (
      t === x &&
        (null != t.pageXOffset
          ? (o = 'page' + e.toUpperCase() + 'Offset')
          : (t = null != u[o] ? u : c)),
      function () {
        return t[o]
      }
    )
  }
  function r(t, e) {
    if (!(t = a(t)[0]) || !t.getBoundingClientRect)
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      )
    var o = t.getBoundingClientRect(),
      n = !e || e === x || e === c,
      r = n
        ? {
            top:
              u.clientTop - (x.pageYOffset || u.scrollTop || c.scrollTop || 0),
            left:
              u.clientLeft -
              (x.pageXOffset || u.scrollLeft || c.scrollLeft || 0),
          }
        : e.getBoundingClientRect(),
      i = { x: o.left - r.left, y: o.top - r.top }
    return !n && e && ((i.x += p(e, 'x')()), (i.y += p(e, 'y')())), i
  }
  function s(t, e, n, i, l) {
    return isNaN(t) || 'object' == typeof t
      ? m(t) && '=' === t.charAt(1)
        ? parseFloat(t.substr(2)) * ('-' === t.charAt(0) ? -1 : 1) + i - l
        : 'max' === t
        ? o(e, n) - l
        : Math.min(o(e, n), r(t, e)[n] - l)
      : parseFloat(t) - l
  }
  function t() {
    ;(i = l()),
      k() &&
        i &&
        document.body &&
        ((x = window),
        (c = document.body),
        (u = document.documentElement),
        (a = i.utils.toArray),
        i.config({ autoKillThreshold: 7 }),
        (g = i.config()),
        (f = 1))
  }
  var i,
    f,
    x,
    u,
    c,
    a,
    g,
    d = {
      version: '3.6.0',
      name: 'scrollTo',
      rawVars: 1,
      register: function register(e) {
        ;(i = e), t()
      },
      init: function init(e, o, r, i, l) {
        f || t()
        var u = this
        ;(u.isWin = e === x),
          (u.target = e),
          (u.tween = r),
          (o = (function _clean(t, e, o, r) {
            if ((n(t) && (t = t(e, o, r)), 'object' != typeof t))
              return m(t) && 'max' !== t && '=' !== t.charAt(1)
                ? { x: t, y: t }
                : { y: t }
            if (t.nodeType) return { y: t, x: t }
            var i,
              l = {}
            for (i in t)
              'onAutoKill' !== i && (l[i] = n(t[i]) ? t[i](e, o, r) : t[i])
            return l
          })(o, i, e, l)),
          (u.vars = o),
          (u.autoKill = !!o.autoKill),
          (u.getX = p(e, 'x')),
          (u.getY = p(e, 'y')),
          (u.x = u.xPrev = u.getX()),
          (u.y = u.yPrev = u.getY()),
          null != o.x
            ? (u.add(
                u,
                'x',
                u.x,
                s(o.x, e, 'x', u.x, o.offsetX || 0),
                i,
                l,
                Math.round,
              ),
              u._props.push('scrollTo_x'))
            : (u.skipX = 1),
          null != o.y
            ? (u.add(
                u,
                'y',
                u.y,
                s(o.y, e, 'y', u.y, o.offsetY || 0),
                i,
                l,
                Math.round,
              ),
              u._props.push('scrollTo_y'))
            : (u.skipY = 1)
      },
      render: function render(t, e) {
        for (
          var n,
            r,
            i,
            l,
            s,
            u = e._pt,
            f = e.target,
            p = e.tween,
            c = e.autoKill,
            a = e.xPrev,
            d = e.yPrev,
            y = e.isWin;
          u;

        )
          u.r(t, u.d), (u = u._next)
        ;(n = y || !e.skipX ? e.getX() : a),
          (i = (r = y || !e.skipY ? e.getY() : d) - d),
          (l = n - a),
          (s = g.autoKillThreshold),
          e.x < 0 && (e.x = 0),
          e.y < 0 && (e.y = 0),
          c &&
            (!e.skipX && (s < l || l < -s) && n < o(f, 'x') && (e.skipX = 1),
            !e.skipY && (s < i || i < -s) && r < o(f, 'y') && (e.skipY = 1),
            e.skipX &&
              e.skipY &&
              (p.kill(),
              e.vars.onAutoKill &&
                e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))),
          y
            ? x.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y)
            : (e.skipY || (f.scrollTop = e.y), e.skipX || (f.scrollLeft = e.x)),
          (e.xPrev = e.x),
          (e.yPrev = e.y)
      },
      kill: function kill(t) {
        var e = 'scrollTo' === t
        ;(!e && 'scrollTo_x' !== t) || (this.skipX = 1),
          (!e && 'scrollTo_y' !== t) || (this.skipY = 1)
      },
    }
  ;(d.max = o),
    (d.getOffset = r),
    (d.buildGetter = p),
    l() && i.registerPlugin(d),
    (e.ScrollToPlugin = d),
    (e.default = d)
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 })
  } else {
    delete e.default
  }
})

!(function () {
  function e(e) {
    var u,
      d,
      c,
      p = { up: [], left: [], right: [], down: [] },
      a = function (t, e) {
        var a,
          n,
          i,
          o,
          r,
          s,
          l = t.touches[0] || t.changedTouches[0]
        !l ||
          (!e && 1 < t.touches.length) ||
          ((a = l.clientX - u),
          (n = l.clientY - d),
          (i = Math.abs(a)),
          (l = Math.abs(n)),
          (r =
            l < i
              ? ((o = a < 0 ? 'left' : 'right'), i)
              : ((o = 0 < n ? 'up' : 'down'), l)),
          (s = !1),
          p[o].forEach(function (t) {
            t.pd && t.pd() && (s = !0)
            var e = t.wp
              ? (t.w * ('up' === o || 'down' === o ? c.height : c.width)) / 100
              : t.w
            r >= X(t.m, 4, e || 40) &&
              (0 < e
                ? (e = Math.floor(r / e)) !== t.l && (t.f(), (t.l = e))
                : t.done || ((t.done = !0), t.f()))
          }),
          s && !e && t.preventDefault())
      },
      n = function (t) {
        e.removeEventListener('touchmove', a),
          e.removeEventListener('touchend', n)
      }
    e.addEventListener(
      'touchstart',
      function (t) {
        1 === t.touches.length &&
          ((t = t.touches[0]),
          (u = t.clientX),
          (d = t.clientY),
          e.addEventListener('touchmove', a, { passive: !1 }),
          e.addEventListener('touchend', n, !1),
          f(p, function (t, e) {
            for (var a = 0; a < e.length; a++) (e[a].l = 0), (e[a].done = !1)
          }),
          (c = e.getBoundingClientRect()))
      },
      !1,
    ),
      e.addEventListener(
        'touchforcechange',
        function (t) {
          var n = !1
          f(p, function (t, e) {
            for (var a = 0; a < e.length; a++)
              if (e[a].pd && e[a].pd()) {
                n = !0
                break
              }
          }),
            n && t.preventDefault()
        },
        { passive: !1 },
      ),
      (this.add = function (t, e, a, n, i) {
        var o
        'string' == typeof e &&
          0 <= e.indexOf('%') &&
          ((e = P(e, 100)), (o = !0)),
          p[t].push({ w: e, wp: o, l: 0, m: a, f: n, pd: i })
      }),
      (this.remove = function (t, e) {
        for (var a = 0; a < p[t].length; a++)
          if (p[t][a].f === e) return void p[t].splice(a, 1)
      })
  }
  function s(t) {
    return t._pg_gh || (t._pg_gh = new e(t)), t._pg_gh
  }
  gsap.registerPlugin({
    version: '1.0.0',
    name: 'pgClass',
    init: function (t, e, a, n, i) {
      ;(this.t = t),
        (this.o = t.getAttribute('class') || ''),
        (this.has = !1),
        (this.v = e),
        (this.cl = t.classList || null)
    },
    render: function (t, e) {
      e.cl &&
        (0 === t && e.has
          ? (e.t.setAttribute('class', e.o), (e.has = !1))
          : 0 < t &&
            (e.v.add && e.cl.add(e.v.add),
            e.v.set && e.t.setAttribute('class', e.v.set),
            e.v.remove && e.cl.remove(e.v.remove),
            (e.has = !0)))
    },
  })
  var t = {
    version: '1.0.0',
    name: 'pgLottie',
    init: function (t, e, a, n, i) {
      if (lottie) {
        var o = null
        if (e.anim) o = S(e.anim, t, e.target_element)
        else if (t._pg_lottie) o = t._pg_lottie
        else
          for (
            var r = lottie.getRegisteredAnimations(), s = 0;
            s < r.length;
            s++
          )
            if (r[s].wrapper === t) {
              ;(o = r[s]), (t._pg_lottie = o)
              break
            }
        o && 'object' == typeof o && 'goToAndStop' in o
          ? ((this.t = t),
            (this.v = e),
            (this.a = o),
            (this.tw = a),
            (this.dur = o.totalFrames / o.frameRate),
            (this.tw_dur = a.duration()),
            (this.doing = !1),
            (this.gf = function (t) {
              return 0 <= (t += '').indexOf('f')
                ? it(t.replace('f', ''), 0)
                : $(null, t) * o.frameRate
            }))
          : j(
              'Lottie animation is not specified. Add transform on animated element or use Animation property.',
            )
      } else j('Lottie is not defined. Include it before pgia.js.')
    },
    render: function (t, e) {
      e.a &&
        (e.v.seek && e.a.goToAndStop(t * e.dur * 1e3, !1),
        0 < t && !e.doing
          ? ('play' in e.v &&
              ('' === e.v.play
                ? e.a.play()
                : e.a.goToAndPlay(e.gf(e.v.play), !0)),
            'pause' in e.v &&
              ('' === e.v.pause
                ? e.a.pause()
                : e.a.goToAndStop(e.gf(e.v.pause), !0)),
            e.v.toggle && (e.a.isPaused ? e.a.play() : e.a.pause()),
            (e.doing = !0))
          : 0 === t && (e.doing = !1))
    },
  }
  gsap.registerPlugin(t),
    (t = {
      version: '1.0.0',
      name: 'pgCall',
      init: function (a, t, e, n, i) {
        ;(this.t = a),
          (this.v = t),
          (this.dur = e.duration()),
          (this.c = function (t, e) {
            return 'string' == typeof t && (t = window[t]), t(a, e), t
          })
      },
      render: function (t, e) {
        ;(0 !== t && 0 !== e.dur) || !e.v.start
          ? 1 === t && e.v.complete
            ? (e.v.complete = e.c(e.v.complete, t))
            : e.v.update && (e.v.update = e.c(e.v.update, t))
          : (e.v.start = e.c(e.v.start, t))
      },
    }),
    gsap.registerPlugin(t)
  var l = 0,
    u = 0,
    d = {
      version: '1.0.0',
      name: 'pgDom',
      init: function (t, e, a, n, i) {
        if (
          ((this.t = t),
          (this.o = t.getAttribute('class') || ''),
          (this.has = !1),
          (this.v = e),
          (this.created = []),
          (this.template = e.template || null),
          (this.parent = t.parentNode),
          (this.next = t.nextSibling),
          (this.removed = !1),
          (this.append = !0),
          (this.live = !1),
          (this.target_element =
            'function' == typeof e.target_element
              ? e.target_element(t)
              : e.target_element || null),
          e.clone)
        ) {
          var o = new Date().getTime()
          if (t._pg_clone_time && o - t._pg_clone_time < 200)
            return void j(
              'This element was just cloned and is now cloning others. Probably a recursive loop!',
            )
          o = t.cloneNode(!0)
          ;(this.template = o.outerHTML),
            (this.append = 'append' == e.ins),
            (this.live = !0)
        }
        o = it(e.count || 1)
        'string' == typeof e.count_sel &&
          (o = Q(t, e.count_sel).length + it(e.count || 0)),
          (this.count = o)
      },
      _d: function (t) {
        t &&
          (F.elementAnimationsManager.destroyAnimations(t, !0),
          F.scrollSceneManager && F.scrollSceneManager.removeScene(t, !0),
          t.parentNode && t.parentNode.removeChild(t))
      },
      _c: function (t) {
        t &&
          (F.elementAnimationsManager.refreshAnimations(t, !0),
          F.scrollSceneManager && F.scrollSceneManager.updateScene(t, !0))
      },
      render: function (t, e) {
        if (e.template) {
          var a = new Date().getTime()
          500 < a - l && ((l = a), (u = 0))
          var n,
            i = B(e.count * t)
          if (0 <= i && i < e.created.length)
            for (; e.created.length > i; ) d._d(e.created.pop())
          for (; 0 < i && i > e.created.length; ) {
            if (100 < ++u)
              return void j(
                'Cloning too many elements is a sign of an endless loop. Blocking. Tried to clone ' +
                  u +
                  ' elements.',
              )
            if (
              !(n = e.live
                ? e.t.cloneNode(!0)
                : ((o = document.createRange()).selectNodeContents(e.t),
                  o.createContextualFragment(
                    e.live ? e.t.outerHTML : e.template,
                  ).firstChild))
            )
              break
            n.removeAttribute('data-pg-id')
            var o = (e.created.length ? e.created[e.created.length - 1] : e.t)
              .nextSibling
            e.append || !o
              ? e.t.parentNode.appendChild(n)
              : e.t.parentNode.insertBefore(n, o),
              n.classList
                ? n.classList.add('pgia-clone')
                : (n.className += ' pgia-clone'),
              e.created.push(n)
            var r = !1,
              o = T(n.innerHTML, function (t) {
                return (r = !0), (e.target_element || n).getAttribute(t) || ''
              })
            r && (n.innerHTML = o),
              e.v.pos &&
                ((n._pg_position = new c(
                  n,
                  e.target_element,
                  S(e.v.pos, n, e.target_element) || 'auto',
                  it(e.v.pos_dist || 0),
                  it(e.v.pos_width || 0),
                  it(e.v.pos_height || 0),
                  e.v.pos_scale || !1,
                  e.v.pos_no_repo || !1,
                )),
                (n.style.left = n._pg_position.left + 'px'),
                (n.style.top = n._pg_position.top + 'px')),
              (n._pg_clone_time = new Date().getTime()),
              d._c(n),
              e.v.play && F.play(n, e.v.play)
          }
        }
        e.v.remove &&
          (1 != t || e.removed
            ? t < 1 &&
              e.removed &&
              (e.parent &&
                (e.next
                  ? e.parent.insertBefore(e.t, e.next)
                  : e.parent.appendChild(e.t)),
              (e.removed = !1),
              d._c(e.t))
            : (d._d(e.t), (e.removed = !0))),
          e.v.reparent &&
            ((a = e.parent != e.t.parentNode),
            0 == t && a
              ? e.parent.appendChild(e.t)
              : 0 < t &&
                !a &&
                (a = Q(e.t, e.v.reparent)[0]) &&
                a.appendChild(e.t))
      },
    }
  gsap.registerPlugin(d)
  var a = new (function () {
      var a = []
      ;(this.add = function (t) {
        a.push(t)
      }),
        (this.remove = function (t) {
          t = a.indexOf(t)
          0 <= t && a.splice(t, 1)
        })
      function t(e) {
        a.slice(0).forEach(function (t) {
          ;(e && !t.fixed) || (t.update() && t.move())
        })
      }
      var e = null
      window.addEventListener('resize', function () {
        e && clearTimeout(e), (e = setTimeout(t, 250))
      }),
        window.addEventListener('scroll', function () {
          t(!0)
        })
    })(),
    c = function (d, c, t, p, h, f, g, e) {
      d._pg_position && d._pg_position.destroy(),
        (this.fixed = 'fixed' == window.getComputedStyle(d).position),
        (this.parent = this.fixed
          ? d.ownerDocument.body
          : (function (t) {
              var e = t.parentNode
              for (; e && 1 == e.nodeType; ) {
                if ('static' != window.getComputedStyle(e).position) return e
                e = e.parentNode
              }
              return t.ownerDocument.body
            })(d)),
        'auto' == t && (t = 'top bottom right left')
      var m = t.split(/\s+/),
        n = gsap.quickSetter(d, 'css')
      ;(this.update = function () {
        if (!d.ownerDocument || !c.ownerDocument || !d.parentNode)
          return (d._pg_position = null), this.destroy(), !1
        var t,
          e,
          a = window.innerWidth,
          n = window.innerHeight,
          i = d.getBoundingClientRect(),
          o = c.getBoundingClientRect(),
          r = this.parent.getBoundingClientRect(),
          s = h ? (o.width * h) / 100 : i.width,
          l = f ? (o.height * f) / 100 : i.height
        g && h && !f && (l *= s / i.width), g && f && !h && (s *= l / i.height)
        for (var u = 0; u < m.length; u++) {
          switch (m[u]) {
            case 'top':
              ;(e = o.left + o.width / 2 - s / 2), (t = o.top - p - i.height)
              break
            case 'bottom':
              ;(e = o.left + o.width / 2 - s / 2), (t = o.top + o.height + p)
              break
            case 'left':
              ;(t = o.top + o.height / 2 - l / 2), (e = o.left - i.width - p)
              break
            case 'right':
              ;(t = o.top + o.height / 2 - l / 2), (e = o.left + o.width + p)
              break
            case 'center':
              ;(t = o.top + o.height / 2 - l / 2),
                (e = o.left + o.width / 2 - s / 2)
              break
            case 'inner-top':
              ;(t = o.top + p), (e = o.left + o.width / 2 - s / 2)
          }
          if (
            (0 < e && 0 < t && e + i.width < a && t + i.height < n) ||
            u == m.length - 1
          ) {
            ;(this.pos = m[u]), (e -= r.left), (t -= r.top)
            break
          }
        }
        return (
          (this.ot = i.top - r.top),
          (this.ol = i.left - r.left),
          (this.ow = i.width),
          (this.oh = i.height),
          (this.top = t),
          (this.left = e),
          (this.w = s),
          (this.h = l),
          d.setAttribute('data-pgia-position', this.pos),
          !0
        )
      }),
        (this.move = function (t) {
          var e = void 0 === t ? 1 : t,
            a = {
              left: this.ol + (this.left - this.ol) * e,
              top: this.ot + (this.top - this.ot) * e,
            }
          h &&
            ((t = this.ow + (this.w - this.ow) * e),
            g
              ? ((a.scaleX = t / d.offsetWidth), f || (a.scaleY = a.scaleX))
              : (a.width = t)),
            f &&
              ((e = this.oh + (this.h - this.oh) * e),
              g
                ? ((a.scaleY = e / d.offsetHeight), h || (a.scaleX = a.scaleY))
                : (a.height = e)),
            n(a)
        }),
        (this.destroy = function () {
          a.remove(this)
        }),
        this.update(),
        e || a.add(this)
    },
    t = {
      version: '1.0.0',
      name: 'pgPos',
      init: function (t, e, a, n, i) {
        this.t = t
        var o =
          'function' == typeof (this.v = e).target_element
            ? e.target_element(t)
            : e.target_element || null
        e.tsel && (o = Q(t, e.tsel)[0] || o),
          (this.pos = new c(
            t,
            o,
            S(e.pos || 'auto', t, o),
            S(e.dist || '0', t, o),
            S(e.width || '0', t, o),
            S(e.height || '0', t, o),
            S(e.scale || '0', t, o),
            S(e.no_repo || '0', t, o),
          ))
      },
      render: function (t, e) {
        e.pos.move(t)
      },
    }
  gsap.registerPlugin(t),
    (t = {
      version: '1.0.0',
      name: 'pgia',
      init: function (t, e, a, n, i) {
        if (
          ((this.t = t),
          (this.v = e),
          (this.te =
            'function' == typeof e.target_element
              ? e.target_element(t)
              : e.target_element || null),
          (this.pr = 0),
          (this.dir = e.dir || 'f_b'),
          (this.pt = e.target ? S(e.target, t, this.te) : t),
          (this.played = this.paused = this.recreated = !1),
          'string' == typeof this.pt)
        )
          switch (this.pt) {
            case 'previous':
            case 'next':
            case 'first':
            case 'last':
              this.pt = R(t, this.pt)
              break
            default:
              this.pt = Q(t, this.pt) || t
          }
      },
      render: function (e, a) {
        var t = a.pr <= e ? 'f' : 'b'
        0 <= a.dir.indexOf(t) &&
          (0 < e &&
            ('rec' in a.v &&
              !a.recreated &&
              (K(a.pt, function (t) {
                F.recreate(t, S(a.v.rec || a.v.play || '', a.t, a.te))
              }),
              (a.recreated = !0)),
            a.v.play &&
              !a.played &&
              (K(a.pt, function (t) {
                F.play(t, S(a.v.play, a.t, a.te))
              }),
              (a.played = !0)),
            a.v.pause &&
              !a.paused &&
              (K(a.pt, function (t) {
                F.pause(t, S(a.v.pause, a.t, a.te))
              }),
              (a.paused = !0))),
          a.v.seek &&
            K(a.pt, function (t) {
              F.seek(t, S(a.v.seek, a.t, a.te), e, !1)
            })),
          (0 !== e && 1 !== e) ||
            a.v.once ||
            (a.played = a.paused = a.recreated = !1),
          (a.pr = e)
      },
    }),
    gsap.registerPlugin(t),
    gsap.registerPlugin(ScrollTrigger),
    gsap.registerPlugin(ScrollToPlugin)
  var F = {}
  window.pgia = F
  var n = document.documentElement,
    q = n.hasAttribute('data-pg-id')
  function j(t) {
    q && console.error(t)
  }
  function i() {
    return q
      ? n.hasAttribute('data-pg-mobile')
      : 'string' == typeof pgia_small_mq
      ? !!window.matchMedia && window.matchMedia(pgia_small_mq).matches
      : screen.width < 1e3 && screen.height < 1e3
  }
  'undefined' != typeof gasp && gsap.defaults({ overwrite: 'auto' })
  var o = i()
  window.addEventListener('resize', function () {
    o = i()
  })
  var B,
    W,
    Y,
    D,
    J,
    V,
    $,
    G,
    f,
    A,
    p,
    Q,
    h,
    K,
    tt,
    et,
    r,
    g,
    at,
    nt,
    m,
    v,
    _,
    y,
    w,
    b,
    x,
    k,
    t = !0
  function O(t, e) {
    for (var a = e + 'Sibling', n = t[a]; n && 1 !== n.nodeType; ) n = n[a]
    return n
  }
  function E(t, e) {
    t = t[e + 'Child']
    return t
      ? 1 === t.nodeType
        ? t
        : O(t, 'first' == e ? 'next' : 'previous')
      : null
  }
  function it(t, e) {
    t = parseFloat(t)
    return isNaN(t) ? e : t
  }
  function X(t, e, a) {
    return Math.min(Math.max(t, e), a)
  }
  function ot(t, e) {
    return 0 === ('' + t).indexOf(e)
  }
  function rt(t) {
    return t.replace(/\&gt;|\#gt\#/g, '>')
  }
  function T(t, a) {
    var n = !1,
      t = (t + '').replace(/\$\{([^\}]*)\}/g, function (t, e) {
        e = a(e)
        return 'object' == typeof e && ((n = e), (e = '_o_')), e
      })
    return n && '_o_' == t ? n : t
  }
  function L(t) {
    return !t.paused() && 0 < t.duration && t.progress() < 1 && !t.reversed()
  }
  function M(t) {
    return Array.prototype.slice.call(t.parentNode.children).indexOf(t)
  }
  function S(t, a, n, e) {
    t = T(t, function (t) {
      var e = t.split('|')
      return (
        (void 0 ===
          (t = ot((t = e[0]), '--')
            ? (window.getComputedStyle(a).getPropertyValue(t) || '').trim()
            : (function (t, e, a, n) {
                var i = window,
                  o = t.split('.'),
                  t = 0
                'this' == o[0]
                  ? ((i = e), t++)
                  : 'target' == o[0] && ((i = a), t++)
                for (var r = t; r < o.length; r++) {
                  var s = o[r].split('#'),
                    l = s[0],
                    s = s[1]
                  if ('object' != typeof i || null === i) return n
                  if (i instanceof HTMLElement) {
                    if ('index' == l) return M(i)
                    if ('index1' == l) return M(i) + 1
                    if ('style' == l && r < o.length - 1)
                      return null ===
                        (i = window
                          .getComputedStyle(i)
                          .getPropertyValue(o[r + 1]))
                        ? n
                        : i
                  }
                  if ('hasAttribute' in i && i.hasAttribute(l))
                    i = i.getAttribute(l)
                  else {
                    if (!(l in i)) return n
                    ;(i = 'function' == typeof i[l] ? i[l].call(i) : i[l]),
                      s && !isNaN(i) && s in Math && (i = Math[s](it(i)))
                  }
                }
                return i
              })(t, a, n)) ||
          '' === t) &&
          1 < e.length &&
          (t = e[1]),
        t
      )
    })
    return e && (t = P(t, e)), it(t, t)
  }
  function P(t, a) {
    t = (t + '').replace(/([0-9]+)\%/, function (t, e) {
      return ((a = 'function' == typeof a ? a() : a) * it(e)) / 100
    })
    return it(t, t)
  }
  function C(t) {
    try {
      return JSON.parse(t)
    } catch (t) {}
    return null
  }
  function I(t, e, a, n) {
    var i,
      o = C(n || t.getAttribute(e))
    o && o.l
      ? a.d &&
        a.d.l &&
        ((i = {}),
        o.l.forEach(function (t) {
          t.name && (i[t.name] = !0)
        }),
        a.d.l.forEach(function (t) {
          ;(t.name && i[t.name]) || o.l.push(t)
        }))
      : (o = a),
      t.setAttribute(e, JSON.stringify(o))
  }
  function st(t, e, a) {
    var n = document.body,
      i = document.documentElement,
      o = t == window || t == n
    o || t.parentNode
    o && (t = n)
    var r,
      s,
      l,
      u = {
        p: o
          ? {
              left: 0,
              top: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          : t.getBoundingClientRect(),
        pswidth: (o ? i : t).scrollWidth,
        psheight: (o ? i : t).scrollHeight,
        spleft: o ? window.pageXOffset || i.scrollLeft : t.scrollLeft,
        sptop: o ? window.pageYOffset || i.scrollTop : t.scrollTop,
        c: [],
      }
    if (!a)
      for (var d, c = e ? Q(t, e) : t.children, p = 0; p < c.length; p++)
        (c[p].getAttribute('class') || '').indexOf('gsap-marker') < 0 &&
          ((d = c[p]),
          (r = u.p),
          (s = u.spleft),
          (l = u.sptop),
          (d = {
            left: (d = d.getBoundingClientRect()).left - r.left + s,
            top: d.top - r.top + l,
            width: d.width,
            height: d.height,
          }),
          u.c.push(d))
    return u
  }
  function N(e, a, n) {
    if (e[a])
      try {
        '' !== n && (e.currentTime = it(n, 0)),
          'play' === a
            ? e[a]()
                .then(function () {
                  e._pgia_broken = !1
                })
                .catch(function (t) {
                  ;(e._pgia_broken = !0),
                    'play' !== a ||
                      'AUDIO' == e.nodeName ||
                      e.muted ||
                      ((e.muted = !0), N(e, a, n)),
                    j(t)
                })
            : e[a]()
      } catch (t) {
        j(t)
      }
  }
  function R(t, e) {
    if (e) {
      var a = h(t),
        n = e.match(/(\w+)(\((.*)\))?/),
        i = it(n[3], n[3]),
        o = !isNaN(i)
      if (!a.length) return []
      switch (n[1]) {
        case 'previous':
        case 'next':
          var r = 'next' == n[1]
          if (!i)
            return [O(a[0], e) || E(a[0].parentNode, r ? 'first' : 'last')]
          for (var s = 0; s < a.length; s++)
            if (a[s].matches(i))
              return [
                r
                  ? s + 1 < a.length
                    ? a[s + 1]
                    : a[0]
                  : 0 < s
                  ? a[s - 1]
                  : a[a.length - 1],
              ]
          return [r ? a[0] : a[a.length - 1]]
        case 'first':
        case 'last':
          return i
            ? o
              ? 'first' == n[1]
                ? tt(a, 0, i)
                : tt(a, a.length - i)
              : []
            : [E(a[0].parentNode, n[1])]
      }
    }
    return t
  }
  function H(t, a) {
    ;((t || '') + '').split(/\s*,\s*/).forEach(function (t) {
      isNaN(t) || (t = parseInt(t))
      var e = !1
      'string' == typeof t
        ? ot(t, '-') && ((e = !0), (t = t.substr(1)))
        : t < 0 && ((e = !0), (t = -t)),
        a(t, e)
    })
  }
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (t) {
        var e = this
        do {
          if (e.matches(t)) return e
        } while (
          null !== (e = e.parentElement || e.parentNode) &&
          1 === e.nodeType
        )
        return null
      }),
    (screen &&
      Element.prototype.matches &&
      void 0 !== Array.isArray &&
      'innerHeight' in window &&
      !n.hasAttribute('data-pg-ia-disabled') &&
      document.createElement('div').classList) ||
      (t = !1),
    t
      ? (navigator.userAgent.indexOf('Firefox'),
        (B = Math.round),
        (W = function (t) {
          return t &&
            t.clientWidth &&
            t.clientHeight &&
            t.scrollWidth / t.clientWidth > t.scrollHeight / t.clientHeight
            ? 'h'
            : 'v'
        }),
        (Y = function (t, e) {
          return Math.abs(t - e) < 0.001
        }),
        (D = function (t) {
          return B(1e3 * t) / 1e3
        }),
        (J = function (t, e, a, n, i, o, r, s, l, u, d, c) {
          t = t || st(e, o)
          var p = a ? 'left' : 'top',
            h = a ? 'width' : 'height',
            f = a ? 'Left' : 'Top',
            o = e == window || e == document.body,
            g = t.c.length
          if (g) {
            var m = r ? r.end - r.start : t['ps' + h] - t.p[h],
              v = r ? r.start : 0,
              _ = r ? r.progress : t['sp' + p] / m
            if (
              (void 0 !== l && (_ = l),
              s &&
                ((!n && Y(_, 1)) || (n && Y(_, 0))) &&
                ((_ = n ? 1 : t.c[0][p] / m),
                (e = o ? document.documentElement : e),
                (x = _ * m),
                o
                  ? window.scrollTo(a ? x : t.sptop, a ? t.spleft : x)
                  : (e['scroll' + f] = x)),
              void 0 !== d)
            )
              return u
                ? { px: t.p[h] * d, p: (t.p[h] * d) / m, i: d }
                : {
                    px: t.c[d][p],
                    p: t.c[d][p] / m,
                    i: X(d, 0, s ? g - 2 : g - 1),
                  }
            O = -1
            var y,
              w,
              A,
              b,
              x = (r ? r.pgBottomCover : 0) / m,
              s = (r ? r.pgTopCover : 0) / m
            if ('c' === n || i) {
              for (
                var k = _ + t.p[h] / m - x,
                  O = 0,
                  E = 0,
                  T = (d = 0),
                  L = (r ? r.pgTopCover : 0) / m,
                  M = 0;
                M < g;
                M++
              ) {
                var S = (t.c[M][p] - v) / m,
                  P = X((t.c[M][p] + t.c[M][h] - v) / m, _ + L, k),
                  C = X(S, _ + L, k),
                  I = t.c[M][h] / m,
                  I = B(((P - C) / I) * 100)
                !1 === n && ((i && Y(S, _)) || D(S) > _) && (I *= 5),
                  !0 === n && ((i && Y(S, _)) || D(S) < _) && (I *= 5),
                  (T < I || (I == T && M == g - 1 && 1 == _)) &&
                    ((T = I), (O = S * m), (E = S), (d = M))
              }
              return { p: E, px: O, idx: d }
            }
            if (u)
              E =
                !n && 1 == _ && c
                  ? (O = s * m) / m
                  : (O = X(_ * m + t.p[h] * (n ? -1 : 1), 0, m)) / m
            else if (n) {
              _ += s
              for (M = g - 1; 0 <= M; M--) {
                var N = B(t.c[M][p])
                if (
                  ((E = D((N - v) / m)),
                  (!Y((A = E), (b = _)) && A < b) || (i && Y(E, _)))
                ) {
                  ;(O = N), (d = M)
                  break
                }
              }
              O < 0 && ((O = v), (d = E = 0))
            } else {
              _ += s
              for (M = 0; M < g; M++) {
                N = B(t.c[M][p])
                if (
                  (!Y((y = E = (N - v) / m), (w = _)) && w < y) ||
                  (i && Y(E, _))
                ) {
                  ;(O = N), (d = M)
                  break
                }
              }
              O < 0 && ((O = r ? r.end : m), (E = 1), (d = t.c.length - 1))
            }
            return (
              1 < E && c && ((E = (O = s * m) / m), (d = 0)),
              { p: E, px: O, idx: d }
            )
          }
        }),
        (V = new (function () {
          ;(this.getAnimationId = function (t, e) {
            var a = null
            return (
              K(t, function (t) {
                null !== a ||
                  ((t = t.getAttribute('data-pg-id')) && (a = t + ':' + e))
              }),
              a
            )
          }),
            (this.updateProgress = function (t, e, a) {
              window._pg_animation_phone &&
                t &&
                window._pg_animation_phone.animationProgress(t, e, a)
            })
        })()),
        ($ = function (t, e) {
          return 'string' == typeof e
            ? 0 <= e.indexOf('%') && t
              ? (t.duration() * parseFloat(e.replace('%', ''))) / 100
              : 0 <= e.indexOf('ms')
              ? parseFloat(e.replace(/\s?ms/, '')) / 1e3
              : 0 <= e.indexOf('s')
              ? parseFloat(e.replace(/\s?s/, ''))
              : parseFloat(e)
            : e
        }),
        (G = function (t) {
          return (
            !!(q && t && t.nopg) ||
            !(!t || !t.on || 'off' !== t.on) ||
            (!!t && !!t.on && ('mobile' === t.on ? !o : o))
          )
        }),
        (f = function (t, e) {
          for (var a in t) t.hasOwnProperty(a) && e(a, t[a])
        }),
        (A = function (t) {
          var e = Quad.easeOut
          if (!t) return e
          switch (t) {
            case 'SteppedEase.ease':
              return SteppedEase.ease.config(12)
            case 'RoughEase.ease':
              return RoughEase.ease
          }
          t = t.split('.')
          return (2 === t.length && window[t[0]] && window[t[0]][t[1]]) || e
        }),
        (p = 0),
        (Q = function (t, e, a) {
          try {
            var n = (e = e || '').split('->'),
              i = n[1]
            if (!(e = n[0]) || 'this' === e) return R([t], i)
            var o,
              r = t
            if (
              (ot(e, '$') && ((e = e.substr(1)), (r = a || document)),
              ot(e, '^'))
            ) {
              var s = e.substr(1).split('|'),
                n = t.closest(s[0].trim())
              return R(1 === s.length ? [n] : Q(n, s[1].trim(), a), i)
            }
            ot(e, '>') &&
              ((o = 'pgtemp_' + p++),
              r.setAttribute(o, ''),
              (e = '[' + o + '] ' + e))
            s = r.querySelectorAll(e)
            return o && r.removeAttribute(o), R(s, i)
          } catch (t) {
            j(t)
          }
          return []
        }),
        (F.getTargets = Q),
        (h = function (t) {
          return 'forEach' in t ||
            t instanceof NodeList ||
            t instanceof HTMLCollection ||
            Array.isArray(t)
            ? t
            : [t]
        }),
        (K = function (t, e) {
          Array.prototype.forEach.call(h(t), e)
        }),
        (tt = function (t, e, a) {
          return Array.prototype.slice.call(t, e, a)
        }),
        (et = function (t, e, a) {
          return !(e in t) || '' === t[e]
            ? a
            : void 0 === a || 'number' != typeof a || isNaN(t[e])
            ? t[e]
            : it(t[e])
        }),
        (r = 0),
        (g = function () {
          this.getTimeline = function (t, p, e) {
            function y(t, e) {
              return (e || t)[h] || null
            }
            var w = gsap.timeline({ onComplete: e }),
              h = '_pgia_target_' + r++
            return (
              t &&
                t.l &&
                t.l.forEach(function (e) {
                  e.m ||
                    e.l
                      .sort(function (t, e) {
                        return t.p === e.p
                          ? 'set' === t.t
                            ? -1
                            : 'set' === e.t
                            ? 1
                            : 0
                          : t.p - e.p
                      })
                      .forEach(function (a) {
                        var t, n, i, o, r, s, l, u, d, c
                        a.m ||
                          ((t = e.t || 'this'),
                          (n = null),
                          t &&
                            ((n = []),
                            K(p, function (e) {
                              Array.prototype.forEach.call(
                                Q(e, S(t, e, e)),
                                function (t) {
                                  n.indexOf(t) < 0 && (n.push(t), (t[h] = e))
                                },
                              )
                            })),
                          (i = a.p),
                          (o = a.d || 0),
                          (r = []),
                          (s = []),
                          (l = []),
                          (u = {}),
                          (d = {
                            'media.playing': function (t, e) {
                              function a() {
                                n.forEach(function (t) {
                                  t.paused &&
                                    !t._pgia_broken &&
                                    ('' !== e ||
                                      isNaN(t.duration) ||
                                      t.duration > t.currentTime) &&
                                    N(t, 'play', e)
                                })
                              }
                              r.push(a),
                                l.push(a),
                                s.push(function () {
                                  n.forEach(function (t) {
                                    N(t, 'pause', '')
                                  })
                                })
                            },
                            'media.play': function (t, e) {
                              r.push(function () {
                                n.forEach(function (t) {
                                  N(t, 'play', e)
                                })
                              })
                            },
                            'media.stop': function (t, e) {
                              r.push(function () {
                                n.forEach(function (t) {
                                  N(t, 'pause', e)
                                })
                              })
                            },
                            'media.mute': function (t, e) {
                              r.push(function () {
                                n.forEach(function (t) {
                                  t.muted = !!e
                                })
                              })
                            },
                            'pgia.play': function (t, e) {
                              ;(u.pgia = u.pgia || {}),
                                (u.pgia.play = e),
                                (u.pgia.target_element = y)
                            },
                            'pgia.pause': function (t, e) {
                              ;(u.pgia = u.pgia || {}),
                                (u.pgia.pause = e),
                                (u.pgia.target_element = y)
                            },
                            pgia: function (t, e) {
                              ;(u.pgia = u.pgia || {}),
                                (e.target_element = y),
                                f(e, function (t, e) {
                                  u.pgia[t] = e
                                })
                            },
                            'pgia.start': function (t, e) {
                              u.pgCall || (u.pgCall = {}), (u.pgCall.start = e)
                            },
                            'pgia.complete': function (t, e) {
                              u.pgCall || (u.pgCall = {}),
                                (u.pgCall.complete = e)
                            },
                            'pgia.update': function (t, e) {
                              u.pgCall || (u.pgCall = {}), (u.pgCall.update = e)
                            },
                            'class.set': function (t, e) {
                              ;(u.pgClass = u.pgClass || {}),
                                (u.pgClass.set = e)
                            },
                            'class.add': function (t, e) {
                              ;(u.pgClass = u.pgClass || {}),
                                (u.pgClass.add = e)
                            },
                            'class.remove': function (t, e) {
                              ;(u.pgClass = u.pgClass || {}),
                                (u.pgClass.remove = e)
                            },
                            scrollTo: function (t, p) {
                              var h = {},
                                f = et(p, 'dir', 'y'),
                                g = et(p, 'dest', 0) + '',
                                m = et(p, 'inf', 0),
                                v = et(p, 'esel', null),
                                _ = et(p, 'offset', 'st')
                              w._pg_req_inv = !0
                              function e(t, e) {
                                var a,
                                  n = y(e),
                                  i = S(g, e, n),
                                  o = !1
                                0 <= (i + '').indexOf('_or_start') &&
                                  ((o = !0), (i = i.replace('_or_start', '')))
                                var r,
                                  s,
                                  l,
                                  u =
                                    ((r = e),
                                    (s = F.scrollSceneManager.getScene),
                                    (scene =
                                      r == window
                                        ? s(document.body) ||
                                          s(document.documentElement)
                                        : s(r)),
                                    scene && scene.st)
                                function d() {
                                  return e[
                                    'client' + ('y' == f ? 'Height' : 'Width')
                                  ]
                                }
                                switch (
                                  (u
                                    ? ((m = u.pgInf), (f = u.pgHor ? 'x' : 'y'))
                                    : p.dir || (f = 'h' == W(e) ? 'x' : 'y'),
                                  i)
                                ) {
                                  case 'next':
                                  case 'prev':
                                    ;(a = J(
                                      null,
                                      e,
                                      'x' == f,
                                      'prev' == i,
                                      !1,
                                      v,
                                      u,
                                      m,
                                      void 0,
                                      !1,
                                      void 0,
                                      o,
                                    )),
                                      (h[f] = a.px)
                                    break
                                  case 'first':
                                    ;(a = J(
                                      null,
                                      e,
                                      'x' == f,
                                      !1,
                                      !1,
                                      v,
                                      u,
                                      m,
                                      void 0,
                                      !1,
                                      0,
                                    )),
                                      (h[f] = a.px)
                                    break
                                  case 'last':
                                    ;(a = J(
                                      null,
                                      e,
                                      'x' == f,
                                      !1,
                                      !1,
                                      v,
                                      u,
                                      m,
                                      void 0,
                                      !1,
                                      9999,
                                    )),
                                      (h[f] = a.px)
                                    break
                                  case 'next_page':
                                  case 'prev_page':
                                    ;(a = J(
                                      null,
                                      e,
                                      'x' == f,
                                      ot(i, 'prev'),
                                      !1,
                                      v,
                                      u,
                                      m,
                                      void 0,
                                      !0,
                                      void 0,
                                      o,
                                    )),
                                      (h[f] = a.px)
                                    break
                                  default:
                                    if ('string' != typeof i) h[f] = i
                                    else {
                                      function c() {
                                        var t = M(n)
                                        return (
                                          4 < i.length
                                            ? (t = it(i.substr(4)))
                                            : n.hasAttribute('data-item-idx') &&
                                              (t = it(
                                                n.getAttribute('data-item-idx'),
                                              )),
                                          t
                                        )
                                      }
                                      if (ot(i, 'item')) {
                                        ;(l = c()),
                                          (a = J(
                                            null,
                                            e,
                                            'x' == f,
                                            !1,
                                            !1,
                                            v,
                                            u,
                                            m,
                                            void 0,
                                            !1,
                                            l,
                                          )),
                                          (h[f] = a.px)
                                        break
                                      }
                                      if (ot(i, 'page')) {
                                        ;(l = c()),
                                          (a = J(
                                            null,
                                            e,
                                            'x' == f,
                                            !1,
                                            !1,
                                            v,
                                            u,
                                            m,
                                            void 0,
                                            !0,
                                            l,
                                          )),
                                          (h[f] = a.px)
                                        break
                                      }
                                      h[f] = P(i, d)
                                    }
                                }
                                return (
                                  (h['offset' + f.toUpperCase()] =
                                    'st' === _
                                      ? u
                                        ? u.pgTopCover
                                        : 0
                                      : S(_, e, n, d)),
                                  h
                                )
                              }
                              !n.length ||
                              ('BODY' != n[0].tagName && 'HTML' != n[0].tagName)
                                ? (u.scrollTo = e)
                                : ((t = { scrollTo: e(0, n[0]) }),
                                  a.e && (t.ease = A(a.e)),
                                  w.add(gsap.to(window, o, t), i))
                            },
                            pgPos: function (t, e) {
                              ;(e.target_element = y), (u.pgPos = e)
                            },
                            pgDom: function (t, e) {
                              ;(e.target_element = y),
                                (u.pgDom = e),
                                0 == o && e.clone && (n = tt(n, 0).reverse())
                            },
                            'history.push': function (t, e) {
                              r.push(function () {
                                n.forEach(function (t) {
                                  ;(e = S(e, t, y(t))) &&
                                    history.pushState({}, '', e)
                                })
                              })
                            },
                            attr: function (t, a) {
                              f(a, function (t, e) {
                                a[t] = c(e)
                              }),
                                (u.attr = a)
                            },
                          }),
                          (c = function (t) {
                            if ('string' == typeof t && 0 <= t.indexOf('${')) {
                              var n = t
                              return function (t, e, a) {
                                return S(n, e, y(e))
                              }
                            }
                            return (
                              'object' == typeof t &&
                                null !== t &&
                                (t.target_element = y),
                              t
                            )
                          }),
                          (d['stroke-dasharray'] = d['stroke-dashoffset'] =
                            function (t, n) {
                              ;(n = c(n)),
                                (u[t] = function (t, e, a) {
                                  return (
                                    'function' == typeof n && (n = n(t, e, a)),
                                    P(n, function () {
                                      return e.getTotalLength
                                        ? e.getTotalLength()
                                        : 100
                                    })
                                  )
                                })
                            }),
                          f(a.l, function (t, e) {
                            d[t] || (e = c(e)),
                              d[t] ? d[t](t, e) : (u[t] = isNaN(e) ? e : it(e))
                          }),
                          a.e && (u.ease = A(a.e)),
                          l.length &&
                            ((u.onUpdate = function (e) {
                              l.forEach(function (t) {
                                t(e)
                              })
                            }),
                            (u.onUpdateParams = ['{self}'])),
                          r.length &&
                            (u.onStart = function () {
                              r.forEach(function (t) {
                                t()
                              })
                            }),
                          s.length &&
                            (u.onComplete = function () {
                              s.forEach(function (t) {
                                t()
                              })
                            }),
                          n.length &&
                            (0 == o
                              ? w.set(n, u, i)
                              : a.s
                              ? w.staggerTo(n, o, u, a.s, i)
                              : w.add(TweenLite.to(n, o, u), i)))
                      })
                }),
              w
            )
          }
        }),
        (F.animationPresets = new (function () {
          var n,
            i,
            a = {
              pxBckImage: function (t) {
                var e = i()
                return (
                  e.set(t, { backgroundPositionY: '0%' }),
                  e.add(
                    n(t, 1, {
                      ease: 'Linear.easeNone',
                      backgroundPositionY: '100%',
                    }),
                  ),
                  e
                )
              },
              pxBckElement: function (t) {
                var e = i()
                return (
                  e.set(t, { scale: 1.1, y: '-5%' }),
                  e.add(n(t, 1, { ease: 'Linear.easeNone', y: '5%' })),
                  e
                )
              },
              pxFly: function (t) {
                var e = i()
                return (
                  e.add(n(t, 1, { ease: 'Linear.easeNone', y: '-100vh' })), e
                )
              },
              bounce: function (t) {
                var e = i()
                return (
                  e.set(t, { y: 0 }),
                  e.add(n(t, 0.2, { ease: 'Power3.easeOut', y: 0 })),
                  e.add(n(t, 0.2, { y: -30 })),
                  e.add(n(t, 0.03, { y: -30 })),
                  e.add(n(t, 0.13, { ease: 'Expo.easeIn', y: 0 })),
                  e.add(n(t, 0.17, { y: -15 })),
                  e.add(n(t, 0.1, { y: 0 })),
                  e.add(n(t, 0.1, { y: -4 })),
                  e.add(n(t, 0.1, { y: 0 })),
                  e
                )
              },
              flash: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1 }),
                  e.add(n(t, 0.25, { autoAlpha: 0 })),
                  e.add(n(t, 0.25, { autoAlpha: 1 })),
                  e.add(n(t, 0.25, { autoAlpha: 0 })),
                  e.add(n(t, 0.25, { autoAlpha: 1 })),
                  e
                )
              },
              pulse: function (t) {
                var e = i()
                return (
                  e.set(t, { scale: 1 }),
                  e.add(n(t, 0.5, { scale: 1.05 })),
                  e.add(n(t, 0.5, { scale: 1 })),
                  e
                )
              },
              rubberBand: function (t) {
                var e = i()
                return (
                  e.set(t, { scale: 1 }),
                  e.add(n(t, 0.3, { scaleX: 1.25, scaleY: 0.75 })),
                  e.add(n(t, 0.1, { scaleX: 0.75, scaleY: 1.25 })),
                  e.add(n(t, 0.1, { scaleX: 1.15, scaleY: 0.85 })),
                  e.add(n(t, 0.1 + 0.05, { scaleX: 0.95, scaleY: 1.05 })),
                  e.add(n(t, 0.1, { scaleX: 1.05, scaleY: 0.95 })),
                  e.add(n(t, 0.25, { scaleX: 1, scaleY: 1 })),
                  e
                )
              },
              shake: function (t) {
                var e = i()
                return (
                  e.set(t, { x: 0 }),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 10 })),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 10 })),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 10 })),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 10 })),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 0 })),
                  e
                )
              },
              headShake: function (t) {
                var e = i()
                return (
                  e.set(t, { x: 0, rotateY: 0 }),
                  e.add(n(t, 0.065, { x: -6, rotateY: -9 })),
                  e.add(n(t, 0.1 + 0.02, { x: 5, rotateY: 7 })),
                  e.add(n(t, 0.13, { x: -3, rotateY: -5 })),
                  e.add(n(t, 0.1 + 0.02, { x: 2, rotateY: 3 })),
                  e.add(n(t, 0.065, { x: 0, rotateY: 0 })),
                  e.add(n(t, 0.065, { x: 0, rotateY: 0 })),
                  e
                )
              },
              swing: function (t) {
                var e = i()
                return (
                  e.set(t, { rotation: 0 }),
                  e.add(n(t, 0.2, { rotation: 15 })),
                  e.add(n(t, 0.2, { rotation: -10 })),
                  e.add(n(t, 0.2, { rotation: 5 })),
                  e.add(n(t, 0.2, { rotation: -5 })),
                  e.add(n(t, 0.2, { rotation: 0 })),
                  e
                )
              },
              tada: function (t) {
                var e = i()
                return (
                  e.set(t, { scale: 1, rotation: 0 }),
                  e.add(n(t, 0.1, { scale: 0.9, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 0.9, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: 3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: 3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: 3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: 3 })),
                  e.add(n(t, 0.1, { scale: 1, rotation: 0 })),
                  e
                )
              },
              wobble: function (t) {
                var e = i()
                return (
                  e.set(t, { x: 0, rotation: 0 }),
                  e.add(n(t, 0.15, { x: '-25%', rotation: -5 })),
                  e.add(n(t, 0.15, { x: '20%', rotation: 3 })),
                  e.add(n(t, 0.15, { x: '-15%', rotation: -3 })),
                  e.add(n(t, 0.15, { x: '10%', rotation: 2 })),
                  e.add(n(t, 0.15, { x: '-5%', rotation: -1 })),
                  e.add(n(t, 0.25, { x: '0%', rotation: 0 })),
                  e
                )
              },
              jello: function (t) {
                var e = i(),
                  a = 0.111
                return (
                  e.set(t, { skewX: 0, skewY: 0 }),
                  e.add(n(t, a, { skewX: 0, skewY: 0 })),
                  e.add(n(t, a, { skewX: -12.5, skewY: -12.5 })),
                  e.add(n(t, a, { skewX: 6.25, skewY: 6.25 })),
                  e.add(n(t, a, { skewX: -3.125, skewY: -3.125 })),
                  e.add(n(t, a, { skewX: 1.5625, skewY: 1.5625 })),
                  e.add(n(t, a, { skewX: -0.78125, skewY: -0.78125 })),
                  e.add(n(t, a, { skewX: 0.390625, skewY: 0.390625 })),
                  e.add(n(t, a, { skewX: -0.1953125, skewY: -0.1953125 })),
                  e.add(n(t, 0.112, { skewX: 0, skewY: 0 })),
                  e
                )
              },
              heartBeat: function (t) {
                var e = i(),
                  a = 'Power0.easeInOut'
                return (
                  e.set(t, { scale: 1 }),
                  e.add(n(t, 0.14, { ease: a, scale: 1.3 })),
                  e.add(n(t, 0.14, { ease: a, scale: 1 })),
                  e.add(n(t, 0.14, { ease: a, scale: 1.3 })),
                  e.add(n(t, 0.28, { ease: a, scale: 1 })),
                  e
                )
              },
              bounceIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.3 }),
                  e.add(n(t, 0.2, { scale: 1.1 })),
                  e.add(n(t, 0.2, { scale: 0.9 })),
                  e.add(n(t, 0.2, { scale: 1.03 })),
                  e.add(n(t, 0.2, { scale: 0.97 })),
                  e.add(n(t, 0.2, { scale: 1 })),
                  e.add(n(t, 1, { autoAlpha: 1 }), '-=1'),
                  e
                )
              },
              bounceInDown: function (t) {
                var e = i()
                customEase = 'Power3.easeOut'
                return (
                  e.set(t, { autoAlpha: 0, y: -3e3 }),
                  e.add(n(t, 0.6, { ease: customEase, y: 25, autoAlpha: 1 })),
                  e.add(n(t, 0.15, { ease: customEase, y: -10 })),
                  e.add(n(t, 0.15, { ease: customEase, y: 5 })),
                  e.add(n(t, 0.1, { ease: customEase, y: 0 })),
                  e
                )
              },
              bounceInLeft: function (t) {
                var e = i()
                customEase = 'Power3.easeOut'
                return (
                  e.set(t, { autoAlpha: 0, x: -3e3 }),
                  e.add(n(t, 0.6, { ease: customEase, x: 25, autoAlpha: 1 })),
                  e.add(n(t, 0.15, { ease: customEase, x: -10 })),
                  e.add(n(t, 0.15, { ease: customEase, x: 5 })),
                  e.add(n(t, 0.1, { ease: customEase, x: 0 })),
                  e
                )
              },
              bounceInRight: function (t) {
                var e = i(),
                  a = 'Power3.easeOut'
                return (
                  e.set(t, { autoAlpha: 0, x: 3e3 }),
                  e.add(n(t, 0.6, { ease: a, x: -25, autoAlpha: 1 })),
                  e.add(n(t, 0.15, { ease: a, x: 10 })),
                  e.add(n(t, 0.15, { ease: a, x: -5 })),
                  e.add(n(t, 0.1, { ease: a, x: 0 })),
                  e
                )
              },
              bounceInUp: function (t) {
                var e = i(),
                  a = 'Power3.easeOut'
                return (
                  e.set(t, { autoAlpha: 0, y: 3e3 }),
                  e.add(n(t, 0.6, { ease: a, y: -20, autoAlpha: 1 })),
                  e.add(n(t, 0.15, { ease: a, y: 10 })),
                  e.add(n(t, 0.15, { ease: a, y: -5 })),
                  e.add(n(t, 0.1, { ease: a, y: 0 })),
                  e
                )
              },
              bounceOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1 }),
                  e.add(n(t, 0.2, { scale: 0.9 })),
                  e.add(n(t, 0.3, { scale: 1.1, autoAlpha: 1 })),
                  e.add(n(t, 0.05, { scale: 1.1, autoAlpha: 1 })),
                  e.add(n(t, 0.45, { scale: 0.3, autoAlpha: 0 })),
                  e
                )
              },
              bounceOutDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 0.2, { y: 10 })),
                  e.add(n(t, 0.2, { y: -20 })),
                  e.add(n(t, 0.05, { y: -20 })),
                  e.add(n(t, 0.55, { y: 2e3 })),
                  e
                )
              },
              bounceOutLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 0.2, { autoAlpha: 1, x: 20 })),
                  e.add(n(t, 0.8, { autoAlpha: 0, x: -2e3 })),
                  e
                )
              },
              bounceOutRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 0.2, { autoAlpha: 1, x: -20 })),
                  e.add(n(t, 0.8, { autoAlpha: 0, x: 2e3 })),
                  e
                )
              },
              bounceOutUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 0.2, { autoAlpha: 1, y: -10 })),
                  e.add(n(t, 0.2, { autoAlpha: 1, y: 20 })),
                  e.add(n(t, 0.05, { autoAlpha: 1, y: 20 })),
                  e.add(n(t, 0.55, { autoAlpha: 0, y: -2e3 })),
                  e
                )
              },
              fadeIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0 }),
                  e.add(n(t, 1, { autoAlpha: 1 })),
                  e
                )
              },
              fadeInDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, y: '-100%' }),
                  e.add(n(t, 1, { autoAlpha: 1, y: '0%' })),
                  e
                )
              },
              fadeInDownBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, y: -2e3 }),
                  e.add(n(t, 1, { autoAlpha: 1, y: 0 })),
                  e
                )
              },
              fadeInLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: '-100%' }),
                  e.add(n(t, 1, { autoAlpha: 1, x: '0%' })),
                  e
                )
              },
              fadeInLeftBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: -2e3 }),
                  e.add(n(t, 1, { autoAlpha: 1, x: 0 })),
                  e
                )
              },
              fadeInRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: '100%' }),
                  e.add(n(t, 1, { autoAlpha: 1, x: '0%' })),
                  e
                )
              },
              fadeInRightBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: 2e3 }),
                  e.add(n(t, 1, { autoAlpha: 1, x: 0 })),
                  e
                )
              },
              fadeInUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, y: '100%' }),
                  e.add(n(t, 1, { autoAlpha: 1, y: '0%' })),
                  e
                )
              },
              fadeInUpBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, y: 2e3 }),
                  e.add(n(t, 1, { autoAlpha: 1, y: 0 })),
                  e
                )
              },
              fadeOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1 }),
                  e.add(n(t, 1, { autoAlpha: 0 })),
                  e
                )
              },
              fadeOutDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, y: '100%' })),
                  e
                )
              },
              fadeOutDownBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, y: 2e3 })),
                  e
                )
              },
              fadeOutLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: '-100%' })),
                  e
                )
              },
              fadeOutLeftBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: -2e3 })),
                  e
                )
              },
              fadeOutRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: '100%' })),
                  e
                )
              },
              fadeOutRightBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: 2e3 })),
                  e
                )
              },
              fadeOutUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, y: '-100%' })),
                  e
                )
              },
              fadeOutUpBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, y: -2e3 })),
                  e
                )
              },
              flip: function (t) {
                var e = i(),
                  a = 'Power0.easeIn'
                return (
                  e.set(t, {
                    transformPerspective: 400,
                    scale: 1,
                    z: 0,
                    rotationY: -360,
                  }),
                  e.add(
                    n(t, 0.4, {
                      ease: a,
                      transformPerspective: 400,
                      scale: 1,
                      z: 150,
                      rotationY: -190,
                    }),
                  ),
                  e.add(
                    n(t, 0.1, {
                      ease: a,
                      transformPerspective: 400,
                      scale: 1,
                      z: 150,
                      rotationY: -170,
                    }),
                  ),
                  e.add(
                    n(t, 0.3, {
                      ease: a,
                      transformPerspective: 400,
                      scale: 0.95,
                      z: 150,
                      rotationY: 0,
                    }),
                  ),
                  e.add(
                    n(t, 0.2, {
                      ease: a,
                      transformPerspective: 400,
                      scale: 1,
                      z: 0,
                      rotationY: 0,
                    }),
                  ),
                  e
                )
              },
              flipInX: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformPerspective: 400,
                    rotationX: 90,
                  }),
                  e.add(
                    n(t, 0.4, {
                      ease: 'Power0.easeIn',
                      transformPerspective: 400,
                      rotationX: -20,
                    }),
                  ),
                  e.add(
                    n(t, 0.2, { transformPerspective: 400, rotationX: 10 }),
                  ),
                  e.add(n(t, 0.4 + 0.2, { autoAlpha: 1 }), '-=' + (0.4 + 0.2)),
                  e.add(
                    n(t, 0.2, { transformPerspective: 400, rotationX: -5 }),
                  ),
                  e.add(n(t, 0.2, { transformPerspective: 400, rotationX: 0 })),
                  e
                )
              },
              flipInY: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformPerspective: 400,
                    rotationY: 90,
                  }),
                  e.add(
                    n(t, 0.4, {
                      ease: 'Linear.easeIn',
                      transformPerspective: 400,
                      rotationY: -20,
                    }),
                  ),
                  e.add(
                    n(t, 0.2, { transformPerspective: 400, rotationY: 10 }),
                  ),
                  e.add(n(t, 0.4 + 0.2, { autoAlpha: 1 }), '-=' + (0.4 + 0.2)),
                  e.add(
                    n(t, 0.2, { transformPerspective: 400, rotationY: -5 }),
                  ),
                  e.add(n(t, 0.2, { transformPerspective: 400, rotationY: 0 })),
                  e
                )
              },
              flipOutX: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformPerspective: 400,
                    rotationX: 0,
                  }),
                  e.add(
                    n(t, 0.3, {
                      autoAlpha: 1,
                      transformPerspective: 400,
                      rotationX: -20,
                    }),
                  ),
                  e.add(
                    n(t, 0.7, {
                      autoAlpha: 0,
                      transformPerspective: 400,
                      rotationX: 90,
                    }),
                  ),
                  e
                )
              },
              flipOutY: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformPerspective: 400,
                    rotationY: 0,
                  }),
                  e.add(
                    n(t, 0.3, {
                      autoAlpha: 1,
                      transformPerspective: 400,
                      rotationY: -20,
                    }),
                  ),
                  e.add(
                    n(t, 0.7, {
                      autoAlpha: 0,
                      transformPerspective: 400,
                      rotationY: 90,
                    }),
                  ),
                  e
                )
              },
              lightSpeedIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: '100%', skewX: -30 }),
                  e.add(n(t, 0.6, { autoAlpha: 1, skewX: 20 })),
                  e.add(n(t, 0.2, { skewX: -5 })),
                  e.add(n(t, 0.2, { skewX: 0 })),
                  e.add(n(t, 1, { x: '0%' }), '-=1'),
                  e
                )
              },
              lightSpeedOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0, skewX: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: '100%', skewX: 30 })),
                  e
                )
              },
              rotateIn: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'center',
                    rotationZ: 200,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'center',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateInDownLeft: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'left bottom',
                    rotationZ: -45,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'left bottom',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateInDownRight: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'right bottom',
                    rotationZ: 45,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'right bottom',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateInUpLeft: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'left bottom',
                    rotationZ: 45,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'left bottom',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateInUpRight: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'right bottom',
                    rotationZ: -90,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'right bottom',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateOut: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'center',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'center',
                      rotationZ: 200,
                    }),
                  ),
                  e
                )
              },
              rotateOutDownLeft: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'left bottom',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'left bottom',
                      rotationZ: 45,
                    }),
                  ),
                  e
                )
              },
              rotateOutDownRight: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'right bottom',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'right bottom',
                      rotationZ: -45,
                    }),
                  ),
                  e
                )
              },
              rotateOutUpLeft: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'left bottom',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'left bottom',
                      rotationZ: -45,
                    }),
                  ),
                  e
                )
              },
              rotateOutUpRight: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'right bottom',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'right bottom',
                      rotationZ: 90,
                    }),
                  ),
                  e
                )
              },
              slideInUp: function (t) {
                var e = i()
                return (
                  e.set(t, { y: '100%', visibility: 'visible' }),
                  e.add(n(t, 1, { y: '0%' })),
                  e
                )
              },
              slideInDown: function (t) {
                var e = i()
                return (
                  e.set(t, { y: '-100%', visibility: 'visible' }),
                  e.add(n(t, 1, { y: '0%' })),
                  e
                )
              },
              slideInLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { x: '-100%', visibility: 'visible' }),
                  e.add(n(t, 1, { x: '0%' })),
                  e
                )
              },
              slideInRight: function (t) {
                var e = i()
                return (
                  e.set(t, { x: '100%', visibility: 'visible' }),
                  e.add(n(t, 1, { x: '0%' })),
                  e
                )
              },
              slideOutUp: function (t) {
                var e = i()
                return (
                  e.set(t, { y: '0%' }),
                  e.add(n(t, 1, { y: '-100%' })),
                  e.add(n(t, 0.001, { visibility: 'hidden' })),
                  e
                )
              },
              slideOutDown: function (t) {
                var e = i()
                return (
                  e.set(t, { y: '0%' }),
                  e.add(n(t, 1, { y: '100%' })),
                  e.add(n(t, 0.001, { visibility: 'hidden' })),
                  e
                )
              },
              slideOutLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { x: '0%' }),
                  e.add(n(t, 1, { x: '-100%' })),
                  e.add(n(t, 0.001, { visibility: 'hidden' })),
                  e
                )
              },
              slideOutRight: function (t) {
                var e = i()
                return (
                  e.set(t, { x: '0%' }),
                  e.add(n(t, 1, { x: '100%' })),
                  e.add(n(t, 0.001, { visibility: 'hidden' })),
                  e
                )
              },
              zoomIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.3 }),
                  e.add(n(t, 1, { scale: 1 })),
                  e.add(n(t, 0.5, { autoAlpha: 1 }), '-=1'),
                  e
                )
              },
              zoomInDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, y: -150 }),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      y: 60,
                    }),
                  ),
                  e.add(n(t, 0.4, { ease: 'Power4.easeOut', scale: 1, y: 0 })),
                  e
                )
              },
              zoomInLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, x: -300 }),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      x: 10,
                    }),
                  ),
                  e.add(n(t, 0.4, { ease: 'Power4.easeOut', scale: 1, x: 0 })),
                  e
                )
              },
              zoomInRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, x: 100 }),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      x: -10,
                    }),
                  ),
                  e.add(n(t, 0.4, { ease: 'Power4.easeOut', scale: 1, x: 0 })),
                  e
                )
              },
              zoomInUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, y: 150 }),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      y: -60,
                    }),
                  ),
                  e.add(n(t, 0.4, { ease: 'Power4.easeOut', scale: 1, y: 0 })),
                  e
                )
              },
              zoomOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1 }),
                  e.add(n(t, 0.5, { autoAlpha: 0, scale: 0.3 })),
                  e.add(n(t, 1, { autoAlpha: 0, scale: 1 })),
                  e
                )
              },
              zoomOutDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1, y: '0px' }),
                  e.add(
                    n(t, 0.4, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      y: -28,
                    }),
                  ),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power4.easeOut',
                      autoAlpha: 0,
                      scale: 0.1,
                      y: 500,
                      transformOrigin: 'center bottom',
                    }),
                  ),
                  e
                )
              },
              zoomOutLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1, x: 0 }),
                  e.add(n(t, 0.4, { autoAlpha: 1, scale: 0.475, x: 42 })),
                  e.add(
                    n(t, 0.6, {
                      autoAlpha: 0,
                      scale: 0.1,
                      x: -300,
                      transformOrigin: 'left center',
                    }),
                  ),
                  e
                )
              },
              zoomOutRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1, x: 0 }),
                  e.add(n(t, 0.4, { autoAlpha: 1, scale: 0.475, x: -42 })),
                  e.add(
                    n(t, 0.6, {
                      autoAlpha: 0,
                      scale: 0.1,
                      x: 250,
                      transformOrigin: 'right center',
                    }),
                  ),
                  e
                )
              },
              zoomOutUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1, y: 0 }),
                  e.add(
                    n(t, 0.4, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      y: 28,
                    }),
                  ),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power4.easeOut',
                      autoAlpha: 0,
                      scale: 0.1,
                      y: -500,
                      transformOrigin: 'center bottom',
                    }),
                  ),
                  e
                )
              },
              hinge: function (t) {
                var e = i()
                return (
                  e.set(t, { transformOrigin: 'top left' }),
                  e.add(
                    n(t, 0.2, {
                      rotation: 80,
                      transformOrigin: 'top left',
                      ease: 'Linear.easeInOut',
                    }),
                  ),
                  e.add(
                    n(t, 0.2, {
                      rotation: 60,
                      transformOrigin: 'top left',
                      ease: 'Linear.easeInOut',
                    }),
                  ),
                  e.add(
                    n(t, 0.2, {
                      rotation: 80,
                      transformOrigin: 'top left',
                      ease: 'Linear.easeInOut',
                    }),
                  ),
                  e.add(
                    n(t, 0.2, {
                      autoAlpha: 1,
                      rotation: 60,
                      transformOrigin: 'top left',
                      ease: 'Linear.easeInOut',
                    }),
                  ),
                  e.add(n(t, 0.2, { autoAlpha: 0, rotation: 0, y: '700px' })),
                  e
                )
              },
              jackInTheBox: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, rotation: 30 }),
                  e.add(n(t, 0.5, { rotation: -10 })),
                  e.add(n(t, 0.2, { rotation: 3 })),
                  e.add(n(t, 0.3, { rotation: 0 })),
                  e.add(n(t, 1, { autoAlpha: 1, scale: 1 }), '-=1'),
                  e
                )
              },
              rollIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: '-100%', rotation: -120 }),
                  e.add(n(t, 1, { autoAlpha: 1, x: '0%', rotation: 0 })),
                  e
                )
              },
              rollOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: '0%', rotationZ: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: '100%', rotation: 120 })),
                  e
                )
              },
            }
          this.getTimeline = function (t, e) {
            return (
              n ||
                ((n = TweenLite.to),
                (i = function () {
                  return gsap.timeline({ paused: !0 })
                })),
              a[t] ? a[t](e) : null
            )
          }
        })()),
        (F.namedAnimations = {}),
        (at = function (t, e) {
          t !== e && (F.namedAnimations[t] = e)
        }),
        (nt = F.getAnimationTimeline =
          function (t, e) {
            if (
              ('string' == typeof t &&
                F.namedAnimations[t] &&
                (t = F.namedAnimations[t]),
              'string' != typeof t)
            )
              return new g().getTimeline(t || {}, e)
            e = F.animationPresets.getTimeline(t, e)
            return (
              e ||
                (j('Named animation not found: ' + t), (e = gsap.timeline({}))),
              e
            )
          }),
        ((m = function (t, e, a, n) {
          var i = this
          ;(this.data = a),
            (this.index = e),
            (this.parent = n),
            (this.event = a.trg || ''),
            (this.touchEvent = null),
            (this.element = t),
            (this.targets = []),
            (this.timeline = null),
            (this.delayTimer = null),
            (this.mouseMoveMeasure = a.mm_a || 'x'),
            (this.restAt = 0.5),
            (this.restart = 'true' === a.rstr),
            (this.pauseOther = 'true' === a.po),
            (this.reset = 'true' === a.rst),
            (this.reverse = 'true' === a.rev),
            (this.toggRev = 'true' === a.trev),
            (this.disabled = G(a)),
            (this.interval = null),
            (this.softDelay = 'soft' in a ? $(null, a.soft) : 0.5),
            (this.keys = a.keys ? a.keys.split(/\s*,\s*/) : []),
            (this.name = a.name ? (a.name + '').toLowerCase() : null),
            (this.trigC = 0),
            (this._etce = null),
            (this._playBind = this.play.bind(this)),
            (this._playScrollBind = this.playScroll.bind(this)),
            (this._playMouseMoveBind = this.playMouseMove.bind(this)),
            (this._playScrubBind = this.playScrub.bind(this)),
            (this._restBind = this.rest.bind(this)),
            a.name && a.a && at(a.name, a.a)
          var o = !1,
            r = !0
          switch (
            (0 < this.event.indexOf('_notouch') &&
              ((this.event = this.event.replace('_notouch', '')), (r = !1)),
            ot(this.event, 'swipe') &&
              ((this.swipe = { dir: this.event.replace('swipe_', '') }),
              (this.event = 'swipe')),
            this.event)
          ) {
            case 'now':
              F.elementAnimationsManager.play_list.push(this), (o = !0)
              break
            case 'no':
              o = !0
              break
            case 'DOMContentLoaded':
            case 'load':
            case 'resize':
            case 'popstate':
              window.addEventListener(this.event, this._playBind, !1), (o = !0)
              break
            case 'timer':
              ;(this.interval = setInterval(
                this._playBind,
                1e3 * $(null, a.timer || 1),
              )),
                (o = !0)
              break
            case 'mousemove':
            case 'touchmove':
              'run' === this.mouseMoveMeasure
                ? (this.touchEvent = 'touchmove')
                : (t.addEventListener(this.event, this._playMouseMoveBind, !1),
                  t.addEventListener(
                    'touchmove',
                    this._playMouseMoveBind,
                    !!a.pdef && { passive: !1 },
                  ),
                  this.data.mm_r &&
                    (t.addEventListener('mouseleave', this._restBind, !1),
                    t.addEventListener('touchend', this._restBind, !1),
                    (this.restAt = parseFloat(this.data.mm_r) + '%'),
                    this.seek(this.restAt)),
                  (o = !0))
              break
            case 'input_scrub':
              ;(this.smin = it('is_min' in a ? a.is_min : t.min || 0)),
                (this.smax = it('is_max' in a ? a.is_max : t.max || 100)),
                t.addEventListener('input', this._playScrubBind, !1),
                (o = !0)
              break
            case 'swipe':
              s(t).add(this.swipe.dir, 0, 0, this._playBind, function () {
                return !!a.pdef && i._etc()
              })
              break
            case 'mouseenter':
            case 'mousedown':
              r && (this.touchEvent = 'touchstart')
              break
            case 'mouseleave':
            case 'mouseup':
              r && (this.touchEvent = 'touchend')
              break
            case 'scrolling':
              window.addEventListener('scroll', this._playScrollBind, !1),
                (o = !0)
          }
          o ||
            (t.addEventListener(
              this.event.replace('res_', ''),
              this._playBind,
              !(!ot(this.event, 'touch') || !a.pdef) && { passive: !1 },
            ),
            this.touchEvent &&
              t.addEventListener(
                this.touchEvent,
                this._playBind,
                !('touchmove' != this.touchEvent || !a.pdef) && { passive: !1 },
              ))
        }).prototype._etc = function () {
          var t = this._etce
          if (this.data.tc && t) {
            var e = this.data.tcv || null,
              a = this.data.tca || 'a'
            switch (this.data.tc) {
              case 'class':
                return t.classList.contains(e)
              case 'no-class':
                return !t.classList.contains(e)
              case 'attr':
                return t.getAttribute(a) == e
              case 'no-attr':
                return t.getAttribute(a) != e
            }
          }
          return !0
        }),
        (m.prototype.create = function () {
          var t,
            e = this
          this.timeline = null
          var a = this.data
          ;(this.targets = a.t ? Q(this.element, a.t) : [this.element]),
            (t = this.targets.length
              ? ((n = this.targets), (this._etce = n[0]), nt(a.a, n))
              : gsap.timeline({})).pause()
          var n = parseInt(a.rpt || 1)
          return (
            1 !== n && t.repeat(1 < n ? n - 1 : n),
            this.data.d && t.duration($(t, a.d)),
            (this.timeline = t),
            q &&
              ((t._pg_animation_id = V.getAnimationId(
                this.element,
                'animation_' + this.index,
              )),
              t.eventCallback('onUpdate', function () {
                V.updateProgress(
                  this._pg_animation_id,
                  this.time(),
                  this.progress(),
                )
              })),
            this.reset &&
              t.eventCallback('onComplete', function () {
                e.seek(e.reverse ? '100%' : 0, !1, !1)
              }),
            t.eventCallback('onRepeat', function () {}),
            t
          )
        }),
        (m.prototype.getTimeline = function () {
          return this.timeline || this.create()
        }),
        (m.prototype.recreate = function () {
          this.timeline && (this.timeline.kill(), (this.timeline = null))
        }),
        (m.prototype.play = function (t, e) {
          var a,
            n,
            i,
            o,
            r = this
          G(this.data) ||
            (this.data.rcr && this.recreate(),
            (a = this.getTimeline()),
            this._etc() &&
              ((t &&
                ot(t.type, 'key') &&
                this.keys.indexOf(' ' == t.key ? 'Spacebar' : t.key) < 0) ||
                (r.data.pdef && t && t.preventDefault(),
                r.data.sprop && t && t.stopPropagation(),
                (n = this.reverse || e),
                r.toggRev &&
                  (r.trigC++ % 2 == 1 && (n = !n),
                  a.timeScale(n ? et(r.data, 'spdrev', 100) / 100 : 1)),
                (e = n ? a.duration() : 0),
                (i = (a._pg_req_inv || this.restart) && !r.data.noinv),
                (o =
                  !this.restart && (n ? 0 < a.progress() : a.progress() < 1)
                    ? null
                    : 0),
                this.delayTimer && clearTimeout(this.delayTimer),
                this.pauseOther &&
                  ((r = et(r.data, 'pol', '')),
                  this.parent.pauseOther(this, r ? r.split(/\s?,\s?/) : []),
                  (i = !0)),
                (a.time() !== e && o !== e) || !this.data.dly
                  ? (i && a.invalidate(), n ? a.reverse(o) : a.play(o))
                  : (this.delayTimer = setTimeout(function () {
                      i && a.invalidate(), n ? a.reverse(o) : a.play(o)
                    }, 1e3 * $(a, this.data.dly))))))
        }),
        (m.prototype.playMouseMove = function (t) {
          if (!G(this.data)) {
            var e = this.getTimeline()
            if (this._etc()) {
              this.data.pdef && t.preventDefault(),
                this.data.sprop && t.stopPropagation()
              var a,
                n = this.element.getBoundingClientRect(),
                i = ot(t.type, 'touch')
                  ? ((a = t.targetTouches[0].pageX), t.targetTouches[0].pageY)
                  : ((a = t.pageX), t.pageY),
                o = 0,
                r = window.pageXOffset,
                s = window.pageYOffset
              switch (this.mouseMoveMeasure) {
                case 'x':
                  0 < n.width && (o = (a - r - n.left) / n.width)
                  break
                case 'y':
                  0 < n.height && (o = (i - s - n.top) / n.height)
                  break
                case 'd_c':
                  var l,
                    u,
                    d = Math.sqrt(
                      Math.pow(n.width / 2, 2) + Math.pow(n.height / 2, 2),
                    )
                  0 < d &&
                    ((l = a - r - n.left - n.width / 2),
                    (u = i - s - n.top - n.height / 2),
                    (o = Math.sqrt(l * l + u * u) / d))
              }
              this.softSeek(e.duration() * o, this.softDelay)
            }
          }
        }),
        (m.prototype.playScrub = function (t) {
          var e, a, n
          G(this.data) ||
            ((e = this.getTimeline()),
            this._etc() &&
              (this.data.pdef && t.preventDefault(),
              this.data.sprop && t.stopPropagation(),
              (n = it((a = t.target).value, 0)),
              (t = 0),
              (t =
                'checkbox' == a.type
                  ? a.checked
                    ? 1
                    : 0
                  : (X(n, this.smin, this.smax) - this.smin) /
                    (this.smax - this.smin)),
              this.softSeek(e.duration() * t, this.softDelay)))
        }),
        (m.prototype.playScroll = function (t) {
          var e, a
          G(this.data) ||
            ((e = this.getTimeline()),
            this._etc() &&
              ((a = X(
                window.pageYOffset /
                  (document.body.offsetHeight - window.innerHeight),
                0,
                1,
              )),
              this.softSeek(e.duration() * a, this.softDelay)))
        }),
        (m.prototype.seek = function (t, e, a) {
          var n
          G(this.data) ||
            ((n = this.getTimeline()),
            (t = Math.max(0, $(n, t))),
            e && 1 === n.progress() && (t = 0),
            this.delayTimer && clearTimeout(this.delayTimer),
            e ? n.play(t) : n.pause(t, a))
        }),
        (m.prototype.pause = function () {
          this.delayTimer &&
            (clearTimeout(this.delayTimer), (this.delayTimer = null)),
            this.timeline && this.timeline.pause()
        }),
        (m.prototype.softSeek = function (t, e) {
          var a = this.getTimeline()
          a._pg_seek_tween && a._pg_seek_tween.kill(),
            a.paused() || a.pause(),
            0 === e
              ? a.seek(t)
              : (a._pg_seek_tween = TweenMax.to(a, e, { time: t }))
        }),
        (m.prototype.rest = function (t) {
          var e = this.getTimeline()
          e._pg_seek_tween && e._pg_seek_tween.kill(),
            this.softSeek($(e, this.restAt), this.softDelay)
        }),
        (m.prototype.refresh = function (t) {
          ;(this.data = t),
            this.delayTimer && clearTimeout(this.delayTimer),
            this.interval && clearInterval(this.interval)
          var e = this.timeline,
            t = 0
          e &&
            (e._pg_seek_tween && e._pg_seek_tween.kill(),
            (t = e.time()),
            e.seek(0),
            e.kill()),
            this.create(),
            0 < t && this.timeline.pause(t)
        }),
        (m.prototype.destroy = function () {
          switch (this.event) {
            case 'now':
            case 'timer':
            case 'no':
              break
            case 'load':
            case 'DOMContentLoaded':
            case 'resize':
            case 'popstate':
              window.removeEventListener(this.event, this._playBind)
              break
            case 'mousemove':
            case 'touchmove':
              'run' === this.mouseMoveMeasure
                ? this.element.removeEventListener(this.event, this._playBind)
                : (this.element.removeEventListener(
                    this.event,
                    this._playMouseMoveBind,
                  ),
                  this.element.removeEventListener(
                    'touchmove',
                    this._playMouseMoveBind,
                  ),
                  this.data.mm_r &&
                    (this.element.removeEventListener(
                      'mouseleave',
                      this._restBind,
                    ),
                    this.element.removeEventListener(
                      'touchend',
                      this._restBind,
                    )))
              break
            case 'input_scrub':
              this.element.removeEventListener('input', this._playScrubBind),
                (done = !0)
              break
            case 'swipe':
              s(this.element).remove(this.swipe.dir, this._playBind)
              break
            case 'scrolling':
              window.removeEventListener('scroll', this._playScrollBind)
              break
            default:
              this.element.removeEventListener(
                this.event.replace('res_', ''),
                this._playBind,
              )
          }
          this.touchEvent &&
            this.element.removeEventListener(this.touchEvent, this._playBind),
            this.delayTimer && clearTimeout(this.delayTimer),
            this.interval && clearInterval(this.interval),
            this.timeline &&
              (this.timeline.pause(0),
              this.timeline._pg_seek_tween &&
                this.timeline._pg_seek_tween.kill())
        }),
        ((v = function (t, e, a) {
          if (
            ((this.element = t),
            (this.animations = []),
            (this.named = {}),
            e && e.l)
          ) {
            for (var n = 0; n < e.l.length; n++) {
              var i = e.l[n].name || ''
              i &&
                'object' == typeof e.l[n].a &&
                (this.named[i] = { u: [], a: e.l[n].a })
            }
            for (n = 0; n < e.l.length; n++)
              'string' == typeof e.l[n].a &&
                this.named[e.l[n].a] &&
                (this.named[e.l[n].a].u.push(n),
                (e.l[n].a = this.named[e.l[n].a].a)),
                this.animations.push(new m(t, n, e.l[n], this))
          }
        }).prototype.find = function (t, e) {
          var a
          if (isNaN(t)) {
            var n = this.animations
            t = (t + '').toLowerCase()
            for (var i = 0; i < n.length; i++)
              if (t == n[i].name) {
                a = i
                break
              }
          } else (a = parseInt(t)), e && a--
          return this.animations[a] || null
        }),
        (v.prototype.play = function (t, e) {
          t = this.find(t)
          t && t.play(null, e)
        }),
        (v.prototype.seek = function (t, e, a) {
          t = this.find(t)
          t && t.seek(e, a)
        }),
        (v.prototype.refresh = function (n, t, e) {
          var a = t.l[n]
          if (
            (a.name && at(a.name, a.a), !e && a.name && 'object' == typeof a.a)
          ) {
            this.named[a.name] || (this.named[a.name] = { u: [] }),
              (this.named[a.name].a = a.a)
            for (var i = 0; i < this.named[a.name].u.length; i++)
              this.refresh(this.named[a.name].u[i], t, !0)
          }
          f(this.named, function (t, e) {
            var a = e.u.indexOf(n)
            0 <= a && e.u.splice(a, 1)
          }),
            'string' == typeof a.a &&
              this.named[a.a] &&
              (this.named[a.a].u.push(n), (a.a = this.named[a.a].a))
          e = this.find(n)
          e && e.refresh(a)
        }),
        (v.prototype.getData = function (t, e) {
          t = this.find(t)
          return t && e !== t ? t.data : null
        }),
        (v.prototype.pauseOther = function (e, a) {
          a = a.map(function (t) {
            return t.toLowerCase()
          })
          var n = 1
          this.animations.forEach(function (t) {
            ;((t !== e && (!a.length || 0 <= a.indexOf(n + ''))) ||
              (t.name && 0 <= a.indexOf(t.name))) &&
              t.pause(),
              n++
          })
        }),
        (v.prototype.destroy = function (t) {
          this.animations.forEach(function (t) {
            t.destroy()
          })
        }),
        (F.play = function (n, t, e) {
          e && !n._pg_animations && (n._pg_animations = new v(n, e)),
            n._pg_animations &&
              H(t, function (t, e) {
                var a = n._pg_animations.find(t, !0)
                !a &&
                  F.namedAnimations[t] &&
                  ((t = { name: t, trg: 'no', a: F.namedAnimations[t] }),
                  (a = new m(
                    n,
                    n._pg_animations.animations.length,
                    t,
                    n._pg_animations,
                  )),
                  n._pg_animations.animations.push(a)),
                  a && a.play(null, e)
              })
        }),
        (F.pause = function (a, t, n) {
          a._pg_animations &&
            H(t, function (t, e) {
              t = a._pg_animations.find(t, !0)
              t && t.timeline !== n && t.pause()
            })
        }),
        (F.seek = function (a, t, n, i) {
          a._pg_animations &&
            H(t, function (t, e) {
              t = a._pg_animations.find(t, !0)
              t && t.seek(n, void 0 === i || i)
            })
        }),
        (F.recreate = function (a, t) {
          a._pg_animations &&
            H(t, function (t, e) {
              t = a._pg_animations.find(t, !0)
              t && t.recreate()
            })
        }),
        (_ = 'data-pg-ia-apply'),
        (y = [
          'data-pg-ia',
          'data-pg-ia-scene',
          'data-pg-ia-hide',
          'data-pg-ia-show',
          'data-pg-ia-smooth-scroll',
        ]),
        (w = function (a) {
          var t = a.getAttribute(_)
          if (t && 'this' !== t)
            try {
              var n = []
              y.forEach(function (t) {
                var e
                a.hasAttribute(t) &&
                  ((e = a.getAttribute(t) || ''),
                  n.push({ a: t, v: e, d: C(e) }))
              }),
                K(Q(a, t), function (e) {
                  a != e &&
                    n.forEach(function (t) {
                      e.hasAttribute(t.a)
                        ? 'data-pg-ia' == t.a && I(e, t.a, t)
                        : e.setAttribute(t.a, t.v)
                    })
                })
            } catch (t) {
              j(t)
            }
        }),
        K(document.querySelectorAll('[' + _ + ']'), w),
        (F.applyToMany = function (t) {
          t.hasAttribute(_) && w(t), K(t.querySelectorAll('[' + _ + ']'), w)
        }),
        (b = []),
        (F.add = function (e, t, i) {
          var o = {},
            t = t ? Q(document, t) : [document]
          K(t, function (t) {
            K(Q(t, e), function (t) {
              for (var e in i)
                if (i.hasOwnProperty(e)) {
                  o[e] = o[e] || C(i[e])
                  var a = 'data-pg-ia'
                  if ('interactions' === e) {
                    var n = t.getAttribute(a)
                    if (n) {
                      I(t, a, o[e], n)
                      continue
                    }
                  } else a += '-' + e
                  t.setAttribute(a, i[e])
                }
              b.push(function () {
                i.interactions &&
                  F.elementAnimationsManager.refreshAnimations(t),
                  i.scene && F.scrollSceneManager.createScene(t),
                  i['smooth-scroll'] &&
                    F.smoothScrollManager &&
                    F.smoothScrollManager.create(t)
              })
            })
          })
        }),
        (F.update = function () {
          b.forEach(function (t) {
            t()
          }),
            (b = [])
        }),
        (F.elementAnimationsManager = new (function () {
          var a = this,
            n = !(this.play_list = [])
          function i() {
            var t = a.play_list
            ;(a.play_list = []),
              t.forEach(function (t) {
                try {
                  t.play()
                } catch (t) {}
              })
          }
          function o(t, e) {
            K(t.querySelectorAll('[data-pg-ia]'), e)
          }
          function r(t) {
            try {
              var e = t.getAttribute('data-pg-ia')
              e &&
                ((e = JSON.parse(rt(e))),
                (t._pg_animations = new v(t, e)),
                !n && 0 < a.play_list.length && i())
            } catch (t) {
              j(t)
            }
          }
          ;(this.seek = function (t, e, a, n) {
            t && t._pg_animations && t._pg_animations.seek(e, a, n)
          }),
            (this.refreshCustomAnimation = function (t, e) {
              var a
              t._pg_animations &&
                ((a = JSON.parse(rt(t.getAttribute('data-pg-ia')))),
                t._pg_animations.refresh(e, a))
            }),
            (this.refreshAnimations = function (t, e) {
              a.destroyAnimations(t), r(t), e && o(t, a.refreshAnimations)
            }),
            (this.destroyAnimations = function (t, e) {
              t._pg_animations && t._pg_animations.destroy(),
                e && o(t, a.destroyAnimations)
            }),
            (this.init = function () {
              ;(n = !0), o(document, r), (n = !1), i()
            })
        })()),
        F.elementAnimationsManager.init(),
        (x = function (D, t) {
          var X,
            R,
            H,
            U = this,
            z = [],
            s = -1,
            Z = !1
          ;(this.destroy = function () {
            Z ||
              (R &&
                (R._pg_seek_tween && R._pg_seek_tween.kill(),
                R.pause(0),
                R.kill()),
              H && H.kill(),
              z.forEach(function (t) {
                t.tl && (t.tl.pause(0), t.tl.kill())
              }),
              (z = []),
              X.kill(),
              (X = null))
          }),
            (this.create = function () {
              var n
              try {
                n = JSON.parse(rt(D.getAttribute('data-pg-ia-scene') || '{}'))
              } catch (t) {
                return void j(t)
              }
              if (!(Z = G(n))) {
                var t = function (t) {
                  return ot((t += ''), '-') ? '-=' + t.substr(1) : '+=' + t
                }
                ;(n.s = n.s || 'auto'),
                  (n.dir = n.dir || 'a'),
                  n.pin && 'onEnter' == n.s && (n.s = 'onLeave')
                var e,
                  a,
                  i = D,
                  o = null
                'auto' === n.s
                  ? ((e = 'start end'), (a = 'start start'))
                  : 'custom' === n.s
                  ? ((e = n.s_t || 'top'),
                    (e += ' ' + (n.s_s || 'top')),
                    n.s_o && (e += t(n.s_o)),
                    (a = n.e_t || ''),
                    (a = (a += ' ' + (n.e_s || '')).trim()),
                    n.e_o && (a += t(n.e_o)),
                    n.s_scroller && (o = Q(D, n.s_scroller)[0]))
                  : 'whole' === n.s
                  ? ((o = D), (i = null), (e = 0))
                  : ((e = {
                      onEnter: { s: 'start end', e: '' },
                      onCenter: { s: 'start center', e: '' },
                      onLeave: { s: 'start start', e: '' },
                    }[n.s].s),
                    (a = '+=' + (n.d || '200%')),
                    n.o &&
                      ((u = ot((u = n.o + ''), '-') ? u.substr(1) : '-' + u),
                      (e += t(u)))),
                  o ||
                    ((l = i.parentNode) &&
                      ((('a' == n.dir || 'h' == n.dir) &&
                        l.scrollWidth > l.clientWidth) ||
                        (('a' == n.dir || 'v' == n.dir) &&
                          l.scrollHeight > l.clientHeight)) &&
                      (o = l)),
                  (o != document.body && o != document.documentElement) ||
                    (o = null)
                var r = $(null, n.smooth, 0.5)
                0 === r ? (r = !0) : void 0 === r && (r = 0.5),
                  'a' == n.dir && (n.dir = W(o))
                var s = 'h' == n.dir,
                  t = function (t) {
                    return (
                      'string' == typeof t &&
                        (t = s
                          ? t.replace(/start/g, 'left').replace(/end/g, 'right')
                          : t
                              .replace(/start/g, 'top')
                              .replace(/end/g, 'bottom')),
                      t
                    )
                  }
                ;(e = t(e)), (a = t(a))
                var l,
                  u = !1
                ;(n.snap || '').length &&
                  ((u =
                    'e' == n.snap
                      ? {
                          snapTo: function (t, e) {
                            return 1 == e.progress
                              ? 1
                              : J(
                                  null,
                                  e.scroller,
                                  s,
                                  k < 0,
                                  !0,
                                  n.snap_sel || null,
                                  e,
                                  !1,
                                ).p -
                                  e.pgTopCover / (e.end - e.start)
                          },
                        }
                      : { snapTo: n.snap.split(',').map(it) }),
                  (l = $(null, n.snap_dur || 0)),
                  (t = $(null, n.snap_durmax || 0)),
                  l && (u.duration = 0 < t ? { min: l, max: t } : l),
                  (l = $(null, n.snap_del || (!0 !== r ? r + 0.1 : 0.3))) &&
                    (u.delay = l),
                  !0 !== r &&
                    l < r &&
                    (j(
                      'Scroll scene smoothing delay ' +
                        r +
                        ' should not be longer than snap delay ' +
                        l +
                        '! Adjusting...',
                    ),
                    (u.delay = r + 0.1)),
                  n.snap_ease && (u.ease = n.snap_ease))
                var d,
                  c,
                  p,
                  h,
                  f,
                  g,
                  m,
                  v,
                  _,
                  y,
                  w,
                  A,
                  b,
                  x,
                  k = 0,
                  r = {
                    trigger: i,
                    start: function () {
                      return e
                    },
                    endTrigger: Q(i, n.e_target)[0],
                    end: a,
                    pin: !!n.pin && (Q(D, n.pint)[0] || D),
                    scrub: r,
                    horizontal: s,
                    markers:
                      !!n.dbg &&
                      (q || D.hasAttribute('data-pgia-show-markers')),
                    snap: u,
                    onRefresh: function (t) {
                      x && b() && x(X)
                    },
                    onUpdate: function (t) {
                      x && x(t)
                    },
                    onSnapComplete: function (t) {
                      U.inf && 1 == t.progress && t.scroll(0)
                    },
                    onEnter: function (t) {
                      O.call(R)
                    },
                  }
                o && (r.scroller = o),
                  r.pin &&
                    (n.pin_type && (r.pinType = n.pin_type),
                    n.pin_body && (r.pinReparent = !0),
                    'auto' == (u = n.pin_spc || 'auto')
                      ? ('flex' !=
                          (o = window.getComputedStyle(r.pin.parentNode))
                            .display &&
                          'absolute' != o.position) ||
                        (u = 'margin')
                      : 'false' == u && (u = !1),
                    'auto' != u && 'padding' != u && (r.pinSpacing = u)),
                  (this.inf = n.pag_inf || !1),
                  n.pag &&
                    ((f = h = null),
                    (g = 'p' == n.pag),
                    (m = s ? 'width' : 'height'),
                    (v = s ? 'left' : 'top'),
                    (y = n.pag_clone),
                    (A = 1e3 * $((w = null), et(n, 'pag_delay', 0.1))),
                    (b = function () {
                      ;(p = st(D, n.pag_t)),
                        (_ = Math.floor(p['ps' + m] / p.p[m])),
                        (d = Q(D, n.pag_t)),
                        (c = Q(D, n.pag_i))
                      var t,
                        e = g ? _ : d.length
                      U.inf && e--,
                        y &&
                          (null === w && (w = c[0].outerHTML),
                          e < (t = c.length)
                            ? gsap.set(tt(c, e, t), { pgDom: { remove: !0 } })
                            : t < e &&
                              gsap.set(c[0], {
                                pgDom: { template: w, count: e - t },
                              }),
                          (c = Q(D, n.pag_i)))
                      var a = 0
                      return (
                        K(c, function (t) {
                          t.setAttribute('data-item-idx', a++)
                        }),
                        !0
                      )
                    }),
                    (x = function (e) {
                      e.getVelocity(),
                        (f =
                          f ||
                          setTimeout(function () {
                            var t
                            ;(f = null),
                              X &&
                                ((t = st(D, n.pag_t, !0)),
                                (t = g
                                  ? Math.floor(t['sp' + v] / t.p[m])
                                  : J(p, null, s, 'c', !0, null, e).idx),
                                U.inf && t >= (g ? _ - 1 : c.length) && (t = 0),
                                (t = c[t]),
                                h != t &&
                                  (n.pag_pd && h && F.play(h, n.pag_pd),
                                  n.pag_pa && t && F.play(t, n.pag_pa),
                                  (h = t)))
                          }, A))
                    }))
                var O = function (t) {
                  var e = (t =
                    this.pgPinScrollTrigger || this.scrollTrigger).getVelocity()
                  0 !== e && (k = e),
                    U.seek(this.progress(), t.direction, 0),
                    Y && ((t = this.progress()), V.updateProgress(Y, t, t))
                }
                r.pin
                  ? ((H = gsap.timeline({
                      scrollTrigger: r,
                      onUpdate: function () {
                        var t = this.progress() * R.duration()
                        t < 0.001 && (t = 0), R.seek(t, !1)
                      },
                    })),
                    (R = gsap.timeline({ onUpdate: O })),
                    (X = R.pgPinScrollTrigger = H.scrollTrigger),
                    H.to({}, 100, {}, 0),
                    R.pause(),
                    gsap.globalTimeline.add(R))
                  : ((R = gsap.timeline({ scrollTrigger: r, onUpdate: O })),
                    (X = R.scrollTrigger)),
                  (this.st = X),
                  (this.st.pgInf = this.inf),
                  (this.st.pgHor = s),
                  (X.pgTopCover = et(n, 'pag_tc', 0)),
                  (X.pgBottomCover = et(n, 'pag_bc', 0)),
                  R.to({}, 100, {}, 0),
                  (z = [])
                var E = n.l
                if (E && 0 < E.length)
                  for (var T = 0; T < E.length; T++) {
                    var L,
                      M,
                      S,
                      P,
                      C,
                      I,
                      N,
                      B = E[T]
                    G(B)
                      ? z.push({ disabled: !0 })
                      : ((L = Q(D, B.t)),
                        (M = nt(B.a, L)),
                        B.name && at(B.name, B.a),
                        M &&
                          ((P = -1),
                          (C = !(S = 0)),
                          (I = 0),
                          (M._pg_animation_id = q
                            ? V.getAnimationId([D], 'scene_item_' + T)
                            : null),
                          'scroll' === et(B, 'p', 'scroll')
                            ? ((S = parseFloat(et(B, 's', 0))),
                              (I = parseFloat(et(B, 'sc_d', 100 - S))),
                              M.duration(I),
                              0 == S && B.noi,
                              R.add(M, S),
                              M.play())
                            : (M.pause(),
                              null !== (N = et(B, 't_d', null)) &&
                                M.duration(parseFloat(N)),
                              (S = parseFloat(et(B, 's', 0)) / 100),
                              (N = et(B, 'sc_dir', 'down')),
                              (P = B.rev
                                ? 'down' === N
                                  ? Math.min(0.9, S + 0.5)
                                  : Math.max(0, S - 0.5)
                                : -1),
                              (C = !1)),
                          z.push({
                            start: S,
                            duration: I,
                            tl: M,
                            animation_idx: T,
                            scroll: C,
                            reverse_at: P,
                            elements: L,
                            dir: N,
                            rep: B.rep || !1,
                            name: B.name || '',
                            inv: B.inv || !1,
                          }),
                          q &&
                            M.eventCallback('onUpdate', function () {
                              V.updateProgress(
                                this._pg_animation_id,
                                this.time(),
                                this.progress(),
                              )
                            })))
                  }
                var Y
                q && (Y = V.getAnimationId(D, 'scene')), n.pin
              }
            }),
            (this.scroll = function (t) {
              Z || X.scroll(t)
            }),
            (this.seek = function (i, t, o) {
              var r
              Z ||
                (z.forEach(function (t) {
                  t.detached &&
                    !t.disabled &&
                    (t.tl.duration(t.duration),
                    R.add(t.tl, t.start),
                    t.tl.play(),
                    (t.detached = !1))
                }),
                (i = Math.round(100 * i) / 100),
                'down' == (r = -1 === t ? 'up' : 'down') &&
                  (i < s || 0 == s) &&
                  (s = -0.1),
                'up' == r && s < i && (s = 1.1),
                z.forEach(function (t) {
                  var e, a, n
                  t.disabled ||
                    ((e = t.rep ? 0 : void 0),
                    (n = t.tl.progress()),
                    (a = Math.max(o, t.start)),
                    (n = t.inv && (0 === n || 0 === e)),
                    t.scroll ||
                      ('down' == r
                        ? 0 <= t.dir.indexOf('down')
                          ? ((s < a && a <= i && !L(t.tl)) ||
                              (a <= i && t.tl.reversed())) &&
                            (n && t.tl.invalidate(),
                            t.tl.play(e),
                            0 <= t.reverse_at && (t.reverse_at = i))
                          : 0 <= t.reverse_at &&
                            t.reverse_at <= i &&
                            !t.tl.reversed() &&
                            t.tl.reverse()
                        : 0 <= t.dir.indexOf('up')
                        ? ((a < s && i <= a && !L(t.tl)) ||
                            (i <= a && t.tl.reversed())) &&
                          (n && t.tl.invalidate(),
                          t.tl.play(e),
                          0 <= t.reverse_at && (t.reverse_at = i))
                        : 0 <= t.reverse_at &&
                          t.reverse_at >= i &&
                          !t.tl.reversed() &&
                          t.tl.reverse()))
                }),
                (s = i))
            }),
            (this.seekAnimation = function (t, e, a) {
              for (var n = 0; n < z.length; n++)
                if (z[n].animation_idx === t && !z[n].disabled) {
                  var i = z[n].tl,
                    o = Math.max(0, $(i, e))
                  z[n].scroll &&
                    a &&
                    !z[n].detached &&
                    (R.remove(i),
                    gsap.globalTimeline.add(i),
                    i.timeScale(1),
                    (z[n].detached = !0)),
                    a && 1 === i.progress() && (o = 0),
                    a ? i.play(o) : i.pause(o)
                  break
                }
            }),
            (this.refreshAnimation = function (t) {
              for (var e = !1, a = 0; a < z.length; a++)
                if (z[a].animation_idx === t && !z[a].disabled)
                  try {
                    e = !0
                    var n = z[a].tl.time(),
                      i = (i = JSON.parse(
                        rt(D.getAttribute('data-pg-ia-scene')),
                      )).l[a],
                      o = Q(D, i.t),
                      r = nt(i.a, o)
                    i.name && at(i.name, i.a),
                      'scroll' === et(i, 'p', 'scroll')
                        ? ((z[a].detached = !1),
                          r.duration(z[a].duration),
                          R.add(r, z[a].start),
                          r.play())
                        : r.pause(Math.min(n, r.duration())),
                      z[a].tl.pause(0),
                      z[a].tl.kill(),
                      (z[a].tl = r),
                      (z[a].elements = o),
                      q &&
                        ((r._pg_animation_id = V.getAnimationId(
                          [D],
                          'scene_item_' + t,
                        )),
                        r.eventCallback('onUpdate', function () {
                          V.updateProgress(
                            this._pg_animation_id,
                            this.time(),
                            this.progress(),
                          )
                        }))
                  } catch (t) {
                    return j(t), !0
                  }
              return e
            }),
            this.create()
        }),
        (F.scrollSceneManager = new (function () {
          var t = this,
            n = []
          function i(t, e) {
            K(t.querySelectorAll('[data-pg-ia-scene]'), e)
          }
          function a(t, e) {
            if ((o(t), !t.hasAttribute('data-pg-ia-scene'))) return null
            ;(t._pg_scroll_scene = new x(t)), n.indexOf(t) < 0 && n.push(t)
          }
          function o(t, e) {
            t._pg_scroll_scene && t._pg_scroll_scene.destroy(),
              (t._pg_scroll_scene = null)
            var a = n.indexOf(t)
            0 <= a && n.splice(a, 1), e && i(t, o)
          }
          ;(this.removeScene = o),
            (this.createScene = a),
            (this.updateScene = function (t, e) {
              a(t, !0), e && i(t, a)
            }),
            (this.getScene = function (t) {
              return t._pg_scroll_scene || null
            }),
            (this.scrollScene = function (t, e) {
              t._pg_scroll_scene && t._pg_scroll_scene.scroll(e)
            }),
            (this.seekAnimation = function (t, e, a, n) {
              t._pg_scroll_scene && t._pg_scroll_scene.seekAnimation(e, a, n)
            }),
            (this.refreshAnimation = function (t, e) {
              t._pg_scroll_scene &&
                (t._pg_scroll_scene.refreshAnimation(e) || this.updateScene(t))
            }),
            (this.init = function () {
              this.removeAll(), i(document, a)
            }),
            (this.removeAll = function () {
              n.slice(0).forEach(function (t) {
                o(t)
              })
            }),
            window.addEventListener('load', function () {
              t.init()
            })
        })()),
        (k = function (e, t) {
          var a,
            n,
            i =
              ((a = /(auto|scroll)/),
              (n = function (t, e) {
                return null === t.parentNode
                  ? e
                  : n(t.parentNode, e.concat([t]))
              }),
              function (t) {
                if (t instanceof HTMLElement || t instanceof SVGElement) {
                  if (t._pg_scroll_parent) return t._pg_scroll_parent
                  for (var e = n(t.parentNode, []), a = 0; a < e.length; a += 1)
                    if (r(e[a])) return (t._pg_scroll_parent = e[a]), e[a]
                  return (
                    (t._pg_scroll_parent =
                      document.scrollingElement || document.documentElement),
                    t._pg_scroll_parent
                  )
                }
              })
          function o(t, e) {
            return getComputedStyle(t, null).getPropertyValue(e)
          }
          function r(t) {
            return a.test(
              o((t = t), 'overflow') + o(t, 'overflow-y') + o(t, 'overflow-x'),
            )
          }
          var s =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame,
            l = { slow: 10, normal: 30, fast: 60 }[t.spd || 'normal'],
            u = null,
            d = !0
          'HTML' === e.nodeName || 'BODY' === e.nodeName
            ? (u =
                document.scrollingElement ||
                document.documentElement ||
                document.body.parentNode ||
                document.body)
            : ((u = e), (d = !1))
          var c = !1,
            p = u.scrollTop,
            h = u
          u === document.body &&
            document.documentElement &&
            (h = document.documentElement)
          function f(t) {
            i(t.target) === e &&
              (t.preventDefault(),
              (t = (t = t).detail
                ? t.wheelDelta
                  ? (t.wheelDelta / t.detail / 40) * (0 < t.detail ? 1 : -1)
                  : -t.detail / 3
                : t.wheelDelta / 120),
              (p += -t * l),
              (p = Math.max(0, Math.min(p, u.scrollHeight - h.clientHeight))),
              c || _())
          }
          var g,
            m = !1,
            v = null,
            _ = function () {
              c = !0
              var t =
                0 < (t = (p - u.scrollTop) / 6) ? Math.ceil(t) : Math.floor(t)
              ;(m = !0),
                v && clearTimeout(v),
                (v = setTimeout(function () {
                  m = !1
                }, 500)),
                (u.scrollTop += t),
                0.5 < Math.abs(t) && s ? s(_) : (c = !1)
            }
          s &&
            (u.addEventListener('mousewheel', f, { passive: !1 }),
            u.addEventListener('DOMMouseScroll', f, { passive: !1 }),
            (g = function (t) {
              m || (p = u.scrollTop)
            }),
            (d ? window : u).addEventListener('scroll', g, !1)),
            (this.destroy = function () {
              s &&
                ((s = null),
                u.removeEventListener('mousewheel', f),
                u.removeEventListener('DOMMouseScroll', f),
                (d ? window : u).removeEventListener('scroll', g))
            })
        }),
        (F.smoothScrollManager = new (function () {
          ;(this.init = function () {
            K(
              document.querySelectorAll('[data-pg-ia-smooth-scroll]'),
              function (t) {
                e(t)
              },
            )
          }),
            (this.refresh = function (t) {
              t._pg_smooth_scroll &&
                (t._pg_smooth_scroll.destroy(), (t._pg_smooth_scroll = null)),
                e(t)
            })
          var e = function (t) {
            try {
              var e
              t.hasAttribute('data-pg-ia-smooth-scroll') &&
                ((e = JSON.parse(
                  rt(t.getAttribute('data-pg-ia-smooth-scroll') || '{}'),
                )),
                (t._pg_smooth_scroll = new k(t, e)))
            } catch (t) {
              j(t)
            }
          }
        })()),
        F.smoothScrollManager.init())
      : console && console.log('Pinegrow Interactions are not supported.')
})()
/* eslint-enable */
