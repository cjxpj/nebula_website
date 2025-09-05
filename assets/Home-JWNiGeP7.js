import{h as To,o as fe,a as pe,u as _o,c as Be,d as Fe,b as be,e as ae,r as oe,N as ao,f as ue,p as so,w as Ko,X as Oo,m as Bo,g as Fo,i as b,j as Lo,k as _,l as ce,n as K,q as y,s as ye,t as Ce,v as Ie,x as le,y as de,z as Se,A as Z,B as Eo,C as Xe,S as co,D as uo,E as vo,F as Ae,G as Le,H as Mo,V as $o,I as jo,J as Do,K as Ze,L as Wo,M as Go}from"./Footer-DctyeDgF.js";import{d as W,c as ho,o as Ee,a as Vo,r as Uo,b as qo,e as Yo,f as Xo,w as Me,g as q,n as Zo,h as c,i as Jo,j as Qo,k as Y,m as $e,T as et,l as k,p as Q,F as je,t as J,q as Je,s as ot,u as re,v as ve,x as ie,y as me,z as Qe,R as tt,_ as rt}from"./index-CbKj8kP4.js";import{c as nt,a as it,p as lt,B as at,V as dt,b as st,r as ct,N as ut,d as fo,t as vt,f as ht,e as ft}from"./Tooltip-CCk3S2T_.js";import{N as Pe}from"./Avatar-0JB1Mjsv.js";const pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},mt=W({name:"BeerOutline",render:function(t,o){return Ee(),ho("svg",pt,o[0]||(o[0]=[Vo('<path d="M352 200v240a40.12 40.12 0 0 1-40 40H136a40.12 40.12 0 0 1-40-40V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M352 224h40a56.16 56.16 0 0 1 56 56v80a56.16 56.16 0 0 1-56 56h-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 256v160"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M288 256v160"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 256v160"></path><path d="M320 112a48 48 0 0 1 0 96c-13.25 0-29.31-7.31-38-16H160c-8 22-27 32-48 32a48 48 0 0 1 0-96a47.91 47.91 0 0 1 26 9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M91.86 132.43a40 40 0 1 1 60.46-52S160 91 160 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><path d="M145.83 64.71C163.22 44.89 187.57 32 216 32c52.38 0 94 42.84 94 95.21a95 95 0 0 1-1.67 17.79" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path>',8)]))}});function eo(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function gt(e={},t){const o=Uo({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,i=a=>{switch(a.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}r!==void 0&&Object.keys(r).forEach(u=>{if(u!==a.key)return;const h=r[u];if(typeof h=="function")h(a);else{const{stop:f=!1,prevent:g=!1}=h;f&&a.stopPropagation(),g&&a.preventDefault(),h.handler(a)}})},l=a=>{switch(a.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}n!==void 0&&Object.keys(n).forEach(u=>{if(u!==a.key)return;const h=n[u];if(typeof h=="function")h(a);else{const{stop:f=!1,prevent:g=!1}=h;f&&a.stopPropagation(),g&&a.preventDefault(),h.handler(a)}})},d=()=>{(t===void 0||t.value)&&(pe("keydown",document,i),pe("keyup",document,l)),t!==void 0&&Me(t,a=>{a?(pe("keydown",document,i),pe("keyup",document,l)):(fe("keydown",document,i),fe("keyup",document,l))})};return To()?(qo(d),Yo(()=>{(t===void 0||t.value)&&(fe("keydown",document,i),fe("keyup",document,l))})):d(),Xo(o)}function bt(e,t,o){const r=q(e.value);let n=null;return Me(e,i=>{n!==null&&window.clearTimeout(n),i===!0?o&&!o.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}const ne="v-hidden",yt=nt("[v-hidden]",{display:"none!important"}),xt=W({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const o=q(null),r=q(null);function n(l){const{value:d}=o,{getCounter:a,getTail:u}=e;let h;if(a!==void 0?h=a():h=r.value,!d||!h)return;h.hasAttribute(ne)&&h.removeAttribute(ne);const{children:f}=d;if(l.showAllItemsBeforeCalculate)for(const O of f)O.hasAttribute(ne)&&O.removeAttribute(ne);const g=d.offsetWidth,H=[],x=t.tail?u?.():null;let z=x?x.offsetWidth:0,S=!1;const A=d.children.length-(t.tail?1:0);for(let O=0;O<A-1;++O){if(O<0)continue;const p=f[O];if(S){p.hasAttribute(ne)||p.setAttribute(ne,"");continue}else p.hasAttribute(ne)&&p.removeAttribute(ne);const m=p.offsetWidth;if(z+=m,H[O]=m,z>g){const{updateCounter:C}=e;for(let w=O;w>=0;--w){const M=A-1-w;C!==void 0?C(M):h.textContent=`${M}`;const E=h.offsetWidth;if(z-=H[w],z+E<=g||w===0){S=!0,O=w-1,x&&(O===-1?(x.style.maxWidth=`${g-E}px`,x.style.boxSizing="border-box"):x.style.maxWidth="");const{onUpdateCount:F}=e;F&&F(M);break}}}}const{onUpdateOverflow:U}=e;S?U!==void 0&&U(!0):(U!==void 0&&U(!1),h.setAttribute(ne,""))}const i=_o();return yt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:it,ssr:i}),Qo(()=>n({showAllItemsBeforeCalculate:!1})),{selfRef:o,counterRef:r,sync:n}},render(){const{$slots:e}=this;return Zo(()=>this.sync({showAllItemsBeforeCalculate:!1})),c("div",{class:"v-overflow",ref:"selfRef"},[Jo(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Ct(e){return t=>{t?e.value=t.$el:e.value=null}}const wt=W({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),po=W({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function oo(e){return Array.isArray(e)?e:[e]}const Te={STOP:"STOP"};function mo(e,t){const o=t(e);e.children!==void 0&&o!==Te.STOP&&e.children.forEach(r=>mo(r,t))}function It(e,t={}){const{preserveGroup:o=!1}=t,r=[],n=o?l=>{l.isLeaf||(r.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||r.push(l.key),i(l.children))};function i(l){l.forEach(n)}return i(e),r}function St(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function zt(e){return e.children}function kt(e){return e.key}function At(){return!1}function Pt(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function Nt(e){return e.disabled===!0}function Rt(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Ne(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Re(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Ht(e,t){const o=new Set(e);return t.forEach(r=>{o.has(r)||o.add(r)}),Array.from(o)}function Tt(e,t){const o=new Set(e);return t.forEach(r=>{o.has(r)&&o.delete(r)}),Array.from(o)}function _t(e){return e?.type==="group"}class Kt extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Ot(e,t,o,r){return we(t.concat(e),o,r,!1)}function Bt(e,t){const o=new Set;return e.forEach(r=>{const n=t.treeNodeMap.get(r);if(n!==void 0){let i=n.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function Ft(e,t,o,r){const n=we(t,o,r,!1),i=we(e,o,r,!0),l=Bt(e,o),d=[];return n.forEach(a=>{(i.has(a)||l.has(a))&&d.push(a)}),d.forEach(a=>n.delete(a)),n}function He(e,t){const{checkedKeys:o,keysToCheck:r,keysToUncheck:n,indeterminateKeys:i,cascade:l,leafOnly:d,checkStrategy:a,allowNotLoaded:u}=e;if(!l)return r!==void 0?{checkedKeys:Ht(o,r),indeterminateKeys:Array.from(i)}:n!==void 0?{checkedKeys:Tt(o,n),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:h}=t;let f;n!==void 0?f=Ft(n,o,t,u):r!==void 0?f=Ot(r,o,t,u):f=we(o,t,u,!1);const g=a==="parent",H=a==="child"||d,x=f,z=new Set,S=Math.max.apply(null,Array.from(h.keys()));for(let A=S;A>=0;A-=1){const U=A===0,O=h.get(A);for(const p of O){if(p.isLeaf)continue;const{key:m,shallowLoaded:C}=p;if(H&&C&&p.children.forEach(F=>{!F.disabled&&!F.isLeaf&&F.shallowLoaded&&x.has(F.key)&&x.delete(F.key)}),p.disabled||!C)continue;let w=!0,M=!1,E=!0;for(const F of p.children){const $=F.key;if(!F.disabled){if(E&&(E=!1),x.has($))M=!0;else if(z.has($)){M=!0,w=!1;break}else if(w=!1,M)break}}w&&!E?(g&&p.children.forEach(F=>{!F.disabled&&x.has(F.key)&&x.delete(F.key)}),x.add(m)):M&&z.add(m),U&&H&&x.has(m)&&x.delete(m)}}return{checkedKeys:Array.from(x),indeterminateKeys:Array.from(z)}}function we(e,t,o,r){const{treeNodeMap:n,getChildren:i}=t,l=new Set,d=new Set(e);return e.forEach(a=>{const u=n.get(a);u!==void 0&&mo(u,h=>{if(h.disabled)return Te.STOP;const{key:f}=h;if(!l.has(f)&&(l.add(f),d.add(f),Rt(h.rawNode,i))){if(r)return Te.STOP;if(!o)throw new Kt}})}),d}function Lt(e,{includeGroup:t=!1,includeSelf:o=!0},r){var n;const i=r.treeNodeMap;let l=e==null?null:(n=i.get(e))!==null&&n!==void 0?n:null;const d={keyPath:[],treeNodePath:[],treeNode:l};if(l?.ignored)return d.treeNode=null,d;for(;l;)!l.ignored&&(t||!l.isGroup)&&d.treeNodePath.push(l),l=l.parent;return d.treeNodePath.reverse(),o||d.treeNodePath.pop(),d.keyPath=d.treeNodePath.map(a=>a.key),d}function Et(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Mt(e,t){const o=e.siblings,r=o.length,{index:n}=e;return t?o[(n+1)%r]:n===o.length-1?null:o[n+1]}function to(e,t,{loop:o=!1,includeDisabled:r=!1}={}){const n=t==="prev"?$t:Mt,i={reverse:t==="prev"};let l=!1,d=null;function a(u){if(u!==null){if(u===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){d=e;return}}else if((!u.disabled||r)&&!u.ignored&&!u.isGroup){d=u;return}if(u.isGroup){const h=De(u,i);h!==null?d=h:a(n(u,o))}else{const h=n(u,!1);if(h!==null)a(h);else{const f=jt(u);f?.isGroup?a(n(f,o)):o&&a(n(u,!0))}}}}return a(e),d}function $t(e,t){const o=e.siblings,r=o.length,{index:n}=e;return t?o[(n-1+r)%r]:n===0?null:o[n-1]}function jt(e){return e.parent}function De(e,t={}){const{reverse:o=!1}=t,{children:r}=e;if(r){const{length:n}=r,i=o?n-1:0,l=o?-1:n,d=o?-1:1;for(let a=i;a!==l;a+=d){const u=r[a];if(!u.disabled&&!u.ignored)if(u.isGroup){const h=De(u,t);if(h!==null)return h}else return u}}return null}const Dt={getChild(){return this.ignored?null:De(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return to(this,"next",e)},getPrev(e={}){return to(this,"prev",e)}};function Wt(e,t){const o=t?new Set(t):void 0,r=[];function n(i){i.forEach(l=>{r.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||o===void 0||o.has(l.key))&&n(l.children)})}return n(e),r}function Gt(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function go(e,t,o,r,n,i=null,l=0){const d=[];return e.forEach((a,u)=>{var h;const f=Object.create(r);if(f.rawNode=a,f.siblings=d,f.level=l,f.index=u,f.isFirstChild=u===0,f.isLastChild=u+1===e.length,f.parent=i,!f.ignored){const g=n(a);Array.isArray(g)&&(f.children=go(g,t,o,r,n,f,l+1))}d.push(f),t.set(f.key,f),o.has(l)||o.set(l,[]),(h=o.get(l))===null||h===void 0||h.push(f)}),d}function xe(e,t={}){var o;const r=new Map,n=new Map,{getDisabled:i=Nt,getIgnored:l=At,getIsGroup:d=_t,getKey:a=kt}=t,u=(o=t.getChildren)!==null&&o!==void 0?o:zt,h=t.ignoreEmptyChildren?p=>{const m=u(p);return Array.isArray(m)?m.length?m:null:m}:u,f=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return d(this.rawNode)},get isLeaf(){return St(this.rawNode,h)},get shallowLoaded(){return Pt(this.rawNode,h)},get ignored(){return l(this.rawNode)},contains(p){return Gt(this,p)}},Dt),g=go(e,r,n,f,h);function H(p){if(p==null)return null;const m=r.get(p);return m&&!m.isGroup&&!m.ignored?m:null}function x(p){if(p==null)return null;const m=r.get(p);return m&&!m.ignored?m:null}function z(p,m){const C=x(p);return C?C.getPrev(m):null}function S(p,m){const C=x(p);return C?C.getNext(m):null}function A(p){const m=x(p);return m?m.getParent():null}function U(p){const m=x(p);return m?m.getChild():null}const O={treeNodes:g,treeNodeMap:r,levelTreeNodeMap:n,maxLevel:Math.max(...n.keys()),getChildren:h,getFlattenedNodes(p){return Wt(g,p)},getNode:H,getPrev:z,getNext:S,getParent:A,getChild:U,getFirstAvailableNode(){return Et(g)},getPath(p,m={}){return Lt(p,m,O)},getCheckedKeys(p,m={}){const{cascade:C=!0,leafOnly:w=!1,checkStrategy:M="all",allowNotLoaded:E=!1}=m;return He({checkedKeys:Ne(p),indeterminateKeys:Re(p),cascade:C,leafOnly:w,checkStrategy:M,allowNotLoaded:E},O)},check(p,m,C={}){const{cascade:w=!0,leafOnly:M=!1,checkStrategy:E="all",allowNotLoaded:F=!1}=C;return He({checkedKeys:Ne(m),indeterminateKeys:Re(m),keysToCheck:p==null?[]:oo(p),cascade:w,leafOnly:M,checkStrategy:E,allowNotLoaded:F},O)},uncheck(p,m,C={}){const{cascade:w=!0,leafOnly:M=!1,checkStrategy:E="all",allowNotLoaded:F=!1}=C;return He({checkedKeys:Ne(m),indeterminateKeys:Re(m),keysToUncheck:p==null?[]:oo(p),cascade:w,leafOnly:M,checkStrategy:E,allowNotLoaded:F},O)},getNonLeafKeys(p={}){return It(g,p)}};return O}const Vt={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function Ut(e){const{primaryColor:t,textColor2:o,dividerColor:r,hoverColor:n,popoverColor:i,invertedColor:l,borderRadius:d,fontSizeSmall:a,fontSizeMedium:u,fontSizeLarge:h,fontSizeHuge:f,heightSmall:g,heightMedium:H,heightLarge:x,heightHuge:z,textColor3:S,opacityDisabled:A}=e;return Object.assign(Object.assign({},Vt),{optionHeightSmall:g,optionHeightMedium:H,optionHeightLarge:x,optionHeightHuge:z,borderRadius:d,fontSizeSmall:a,fontSizeMedium:u,fontSizeLarge:h,fontSizeHuge:f,optionTextColor:o,optionTextColorHover:o,optionTextColorActive:t,optionTextColorChildActive:t,color:i,dividerColor:r,suffixColor:o,prefixColor:o,optionColorHover:n,optionColorActive:be(t,{alpha:.1}),groupHeaderTextColor:S,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:l,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:A})}const bo=Be({name:"Dropdown",common:Fe,peers:{Popover:lt},self:Ut}),We=ae("n-dropdown-menu"),ze=ae("n-dropdown"),ro=ae("n-dropdown-option"),yo=W({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),qt=W({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=Y(We),{renderLabelRef:o,labelFieldRef:r,nodePropsRef:n,renderOptionRef:i}=Y(ze);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:n,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:r,nodeProps:n,renderLabel:i,renderOption:l}=this,{rawNode:d}=this.tmNode,a=c("div",Object.assign({class:`${t}-dropdown-option`},n?.(d)),c("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,r&&`${t}-dropdown-option-body__prefix--show-icon`]},oe(d.icon)),c("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(d):oe((e=d.title)!==null&&e!==void 0?e:d[this.labelField])),c("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:d}):a}});function _e(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Yt(e){return e.type==="group"}function xo(e){return e.type==="divider"}function Xt(e){return e.type==="render"}const Co=W({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=Y(ze),{hoverKeyRef:o,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:d,mergedShowRef:a,renderLabelRef:u,renderIconRef:h,labelFieldRef:f,childrenFieldRef:g,renderOptionRef:H,nodePropsRef:x,menuPropsRef:z}=t,S=Y(ro,null),A=Y(We),U=Y(so),O=k(()=>e.tmNode.rawNode),p=k(()=>{const{value:T}=g;return _e(e.tmNode.rawNode,T)}),m=k(()=>{const{disabled:T}=e.tmNode;return T}),C=k(()=>{if(!p.value)return!1;const{key:T,disabled:V}=e.tmNode;if(V)return!1;const{value:ee}=o,{value:te}=r,{value:I}=n,{value:P}=i;return ee!==null?P.includes(T):te!==null?P.includes(T)&&P[P.length-1]!==T:I!==null?P.includes(T):!1}),w=k(()=>r.value===null&&!d.value),M=bt(C,300,w),E=k(()=>!!S?.enteringSubmenuRef.value),F=q(!1);Q(ro,{enteringSubmenuRef:F});function $(){F.value=!0}function R(){F.value=!1}function G(){const{parentKey:T,tmNode:V}=e;V.disabled||a.value&&(n.value=T,r.value=null,o.value=V.key)}function B(){const{tmNode:T}=e;T.disabled||a.value&&o.value!==T.key&&G()}function L(T){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:V}=T;V&&!eo({target:V},"dropdownOption")&&!eo({target:V},"scrollbarRail")&&(o.value=null)}function X(){const{value:T}=p,{tmNode:V}=e;a.value&&!T&&!V.disabled&&(t.doSelect(V.key,V.rawNode),t.doUpdateShow(!1))}return{labelField:f,renderLabel:u,renderIcon:h,siblingHasIcon:A.showIconRef,siblingHasSubmenu:A.hasSubmenuRef,menuProps:z,popoverBody:U,animated:d,mergedShowSubmenu:k(()=>M.value&&!E.value),rawNode:O,hasSubmenu:p,pending:ue(()=>{const{value:T}=i,{key:V}=e.tmNode;return T.includes(V)}),childActive:ue(()=>{const{value:T}=l,{key:V}=e.tmNode,ee=T.findIndex(te=>V===te);return ee===-1?!1:ee<T.length-1}),active:ue(()=>{const{value:T}=l,{key:V}=e.tmNode,ee=T.findIndex(te=>V===te);return ee===-1?!1:ee===T.length-1}),mergedDisabled:m,renderOption:H,nodeProps:x,handleClick:X,handleMouseMove:B,handleMouseEnter:G,handleMouseLeave:L,handleSubmenuBeforeEnter:$,handleSubmenuAfterEnter:R}},render(){var e,t;const{animated:o,rawNode:r,mergedShowSubmenu:n,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:d,renderLabel:a,renderIcon:u,renderOption:h,nodeProps:f,props:g,scrollable:H}=this;let x=null;if(n){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);x=c(wo,Object.assign({},U,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const z={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},S=f?.(r),A=c("div",Object.assign({class:[`${i}-dropdown-option`,S?.class],"data-dropdown-option":!0},S),c("div",$e(z,g),[c("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(r):oe(r.icon)]),c("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(r):oe((t=r[this.labelField])!==null&&t!==void 0?t:r.title)),c("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,d&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c(ao,null,{default:()=>c(po,null)}):null)]),this.hasSubmenu?c(at,null,{default:()=>[c(dt,null,{default:()=>c("div",{class:`${i}-dropdown-offset-container`},c(st,{show:this.mergedShowSubmenu,placement:this.placement,to:H&&this.popoverBody||void 0,teleportDisabled:!H},{default:()=>c("div",{class:`${i}-dropdown-menu-wrapper`},o?c(et,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>x}):x)}))})]}):null);return h?h({node:A,option:r}):A}}),Zt=W({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:r}=e;return c(je,null,c(qt,{clsPrefix:o,tmNode:e,key:e.key}),r?.map(n=>{const{rawNode:i}=n;return i.show===!1?null:xo(i)?c(yo,{clsPrefix:o,key:n.key}):n.isGroup?(Ko("dropdown","`group` node is not allowed to be put in `group` node."),null):c(Co,{clsPrefix:o,tmNode:n,parentKey:t,key:n.key})}))}}),Jt=W({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return c("div",t,[e?.()])}}),wo=W({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=Y(ze);Q(We,{showIconRef:k(()=>{const n=t.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>n?n(a):a.icon);const{rawNode:d}=i;return n?n(d):d.icon})}),hasSubmenuRef:k(()=>{const{value:n}=o;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>_e(a,n));const{rawNode:d}=i;return _e(d,n)})})});const r=q(null);return Q(Bo,null),Q(Fo,null),Q(so,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,r=this.tmNodes.map(n=>{const{rawNode:i}=n;return i.show===!1?null:Xt(i)?c(Jt,{tmNode:n,key:n.key}):xo(i)?c(yo,{clsPrefix:t,key:n.key}):Yt(i)?c(Zt,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key}):c(Co,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key,props:i.props,scrollable:o})});return c("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?c(Oo,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?ct({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Qt=b("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Lo(),b("dropdown-option",`
 position: relative;
 `,[_("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[_("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[_("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ce("disabled",[K("pending",`
 color: var(--n-option-text-color-hover);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),_("&::before","background-color: var(--n-option-color-hover);")]),K("active",`
 color: var(--n-option-text-color-active);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),_("&::before","background-color: var(--n-option-color-active);")]),K("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),K("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),K("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[y("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[K("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),y("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[K("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),y("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),y("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[K("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),b("dropdown-menu","pointer-events: all;")]),b("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),b("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),b("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),_(">",[b("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ce("scrollable",`
 padding: var(--n-padding);
 `),K("scrollable",[y("content",`
 padding: var(--n-padding);
 `)])]),er={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},or=Object.keys(fo),tr=Object.assign(Object.assign(Object.assign({},fo),er),le.props),rr=W({name:"Dropdown",inheritAttrs:!1,props:tr,setup(e){const t=q(!1),o=Ce(J(e,"show"),t),r=k(()=>{const{keyField:R,childrenField:G}=e;return xe(e.options,{getKey(B){return B[R]},getDisabled(B){return B.disabled===!0},getIgnored(B){return B.type==="divider"||B.type==="render"},getChildren(B){return B[G]}})}),n=k(()=>r.value.treeNodes),i=q(null),l=q(null),d=q(null),a=k(()=>{var R,G,B;return(B=(G=(R=i.value)!==null&&R!==void 0?R:l.value)!==null&&G!==void 0?G:d.value)!==null&&B!==void 0?B:null}),u=k(()=>r.value.getPath(a.value).keyPath),h=k(()=>r.value.getPath(e.value).keyPath),f=ue(()=>e.keyboard&&o.value);gt({keydown:{ArrowUp:{prevent:!0,handler:m},ArrowRight:{prevent:!0,handler:p},ArrowDown:{prevent:!0,handler:C},ArrowLeft:{prevent:!0,handler:O},Enter:{prevent:!0,handler:w},Escape:U}},f);const{mergedClsPrefixRef:g,inlineThemeDisabled:H}=Ie(e),x=le("Dropdown","-dropdown",Qt,bo,e,g);Q(ze,{labelFieldRef:J(e,"labelField"),childrenFieldRef:J(e,"childrenField"),renderLabelRef:J(e,"renderLabel"),renderIconRef:J(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:d,pendingKeyPathRef:u,activeKeyPathRef:h,animatedRef:J(e,"animated"),mergedShowRef:o,nodePropsRef:J(e,"nodeProps"),renderOptionRef:J(e,"renderOption"),menuPropsRef:J(e,"menuProps"),doSelect:z,doUpdateShow:S}),Me(o,R=>{!e.animated&&!R&&A()});function z(R,G){const{onSelect:B}=e;B&&Z(B,R,G)}function S(R){const{"onUpdate:show":G,onUpdateShow:B}=e;G&&Z(G,R),B&&Z(B,R),t.value=R}function A(){i.value=null,l.value=null,d.value=null}function U(){S(!1)}function O(){E("left")}function p(){E("right")}function m(){E("up")}function C(){E("down")}function w(){const R=M();R?.isLeaf&&o.value&&(z(R.key,R.rawNode),S(!1))}function M(){var R;const{value:G}=r,{value:B}=a;return!G||B===null?null:(R=G.getNode(B))!==null&&R!==void 0?R:null}function E(R){const{value:G}=a,{value:{getFirstAvailableNode:B}}=r;let L=null;if(G===null){const X=B();X!==null&&(L=X.key)}else{const X=M();if(X){let T;switch(R){case"down":T=X.getNext();break;case"up":T=X.getPrev();break;case"right":T=X.getChild();break;case"left":T=X.getParent();break}T&&(L=T.key)}}L!==null&&(i.value=null,l.value=L)}const F=k(()=>{const{size:R,inverted:G}=e,{common:{cubicBezierEaseInOut:B},self:L}=x.value,{padding:X,dividerColor:T,borderRadius:V,optionOpacityDisabled:ee,[de("optionIconSuffixWidth",R)]:te,[de("optionSuffixWidth",R)]:I,[de("optionIconPrefixWidth",R)]:P,[de("optionPrefixWidth",R)]:s,[de("fontSize",R)]:N,[de("optionHeight",R)]:j,[de("optionIconSize",R)]:ke}=L,D={"--n-bezier":B,"--n-font-size":N,"--n-padding":X,"--n-border-radius":V,"--n-option-height":j,"--n-option-prefix-width":s,"--n-option-icon-prefix-width":P,"--n-option-suffix-width":I,"--n-option-icon-suffix-width":te,"--n-option-icon-size":ke,"--n-divider-color":T,"--n-option-opacity-disabled":ee};return G?(D["--n-color"]=L.colorInverted,D["--n-option-color-hover"]=L.optionColorHoverInverted,D["--n-option-color-active"]=L.optionColorActiveInverted,D["--n-option-text-color"]=L.optionTextColorInverted,D["--n-option-text-color-hover"]=L.optionTextColorHoverInverted,D["--n-option-text-color-active"]=L.optionTextColorActiveInverted,D["--n-option-text-color-child-active"]=L.optionTextColorChildActiveInverted,D["--n-prefix-color"]=L.prefixColorInverted,D["--n-suffix-color"]=L.suffixColorInverted,D["--n-group-header-text-color"]=L.groupHeaderTextColorInverted):(D["--n-color"]=L.color,D["--n-option-color-hover"]=L.optionColorHover,D["--n-option-color-active"]=L.optionColorActive,D["--n-option-text-color"]=L.optionTextColor,D["--n-option-text-color-hover"]=L.optionTextColorHover,D["--n-option-text-color-active"]=L.optionTextColorActive,D["--n-option-text-color-child-active"]=L.optionTextColorChildActive,D["--n-prefix-color"]=L.prefixColor,D["--n-suffix-color"]=L.suffixColor,D["--n-group-header-text-color"]=L.groupHeaderTextColor),D}),$=H?Se("dropdown",k(()=>`${e.size[0]}${e.inverted?"i":""}`),F,e):void 0;return{mergedClsPrefix:g,mergedTheme:x,tmNodes:n,mergedShow:o,handleAfterLeave:()=>{e.animated&&A()},doUpdateShow:S,cssVars:H?void 0:F,themeClass:$?.themeClass,onRender:$?.onRender}},render(){const e=(r,n,i,l,d)=>{var a;const{mergedClsPrefix:u,menuProps:h}=this;(a=this.onRender)===null||a===void 0||a.call(this);const f=h?.(void 0,this.tmNodes.map(H=>H.rawNode))||{},g={ref:Ct(n),class:[r,`${u}-dropdown`,this.themeClass],clsPrefix:u,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:d};return c(wo,$e(this.$attrs,g,f))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(ut,Object.assign({},ye(this.$props,or),o),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}});function nr(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:n,dividerColor:i,actionColor:l,scrollbarColor:d,scrollbarColorHover:a,invertedColor:u}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:l,headerColor:n,headerColorInverted:u,footerColor:l,footerColorInverted:u,headerBorderColor:i,headerBorderColorInverted:u,footerBorderColor:i,footerBorderColorInverted:u,siderBorderColor:i,siderBorderColorInverted:u,siderColor:n,siderColorInverted:u,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Xe(r,d),siderToggleBarColorHover:Xe(r,a),__invertScrollbar:"true"}}const Io=Be({name:"Layout",common:Fe,peers:{Scrollbar:Eo},self:nr});function ir(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}function lr(e){const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:n,textColor1:i,fontSize:l,dividerColor:d,hoverColor:a,primaryColorHover:u}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:a,itemColorActive:be(r,{alpha:.1}),itemColorActiveHover:be(r,{alpha:.1}),itemColorActiveCollapsed:be(r,{alpha:.1}),itemTextColor:n,itemTextColorHover:n,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:n,itemTextColorHoverHorizontal:u,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:u,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:n,arrowColorHover:n,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:l,dividerColor:d},ir("#BBB",r,"#FFF","#AAA"))}const ar=Be({name:"Menu",common:Fe,peers:{Tooltip:vt,Dropdown:bo},self:lr}),So=ae("n-layout-sider"),zo={type:String,default:"static"},dr=b("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[b("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),K("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),sr={embedded:Boolean,position:zo,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ko=ae("n-layout");function cr(e){return W({name:"Layout",props:Object.assign(Object.assign({},le.props),sr),setup(t){const o=q(null),r=q(null),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=Ie(t),l=le("Layout","-layout",dr,Io,t,n);function d(z,S){if(t.nativeScrollbar){const{value:A}=o;A&&(S===void 0?A.scrollTo(z):A.scrollTo(z,S))}else{const{value:A}=r;A&&A.scrollTo(z,S)}}Q(ko,t);let a=0,u=0;const h=z=>{var S;const A=z.target;a=A.scrollLeft,u=A.scrollTop,(S=t.onScroll)===null||S===void 0||S.call(t,z)};uo(()=>{if(t.nativeScrollbar){const z=o.value;z&&(z.scrollTop=u,z.scrollLeft=a)}});const f={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},g={scrollTo:d},H=k(()=>{const{common:{cubicBezierEaseInOut:z},self:S}=l.value;return{"--n-bezier":z,"--n-color":t.embedded?S.colorEmbedded:S.color,"--n-text-color":S.textColor}}),x=i?Se("layout",k(()=>t.embedded?"e":""),H,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:f,mergedTheme:l,handleNativeElScroll:h,cssVars:i?void 0:H,themeClass:x?.themeClass,onRender:x?.onRender},g)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=r?this.hasSiderStyle:void 0,i=[this.themeClass,e,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return c("div",{class:i,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):c(co,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const no=cr(!1),ur=b("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[K("bordered",[y("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),y("left-placement",[K("bordered",[y("border",`
 right: 0;
 `)])]),K("right-placement",`
 justify-content: flex-start;
 `,[K("bordered",[y("border",`
 left: 0;
 `)]),K("collapsed",[b("layout-toggle-button",[b("base-icon",`
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",[_("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),b("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[b("base-icon",`
 transform: rotate(0);
 `)]),b("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[_("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),K("collapsed",[b("layout-toggle-bar",[_("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),b("layout-toggle-button",[b("base-icon",`
 transform: rotate(0);
 `)])]),b("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[b("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[y("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),y("bottom",`
 position: absolute;
 top: 34px;
 `),_("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),_("&:hover",[y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),y("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),b("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),K("show-content",[b("layout-sider-scroll-container",{opacity:1})]),K("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),vr=W({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),hr=W({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(vo,{clsPrefix:e},{default:()=>c(po,null)}))}}),fr={position:zo,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},pr=W({name:"LayoutSider",props:Object.assign(Object.assign({},le.props),fr),setup(e){const t=Y(ko),o=q(null),r=q(null),n=q(e.defaultCollapsed),i=Ce(J(e,"collapsed"),n),l=k(()=>Ae(i.value?e.collapsedWidth:e.width)),d=k(()=>e.collapseMode!=="transform"?{}:{minWidth:Ae(e.width)}),a=k(()=>t?t.siderPlacement:"left");function u(m,C){if(e.nativeScrollbar){const{value:w}=o;w&&(C===void 0?w.scrollTo(m):w.scrollTo(m,C))}else{const{value:w}=r;w&&w.scrollTo(m,C)}}function h(){const{"onUpdate:collapsed":m,onUpdateCollapsed:C,onExpand:w,onCollapse:M}=e,{value:E}=i;C&&Z(C,!E),m&&Z(m,!E),n.value=!E,E?w&&Z(w):M&&Z(M)}let f=0,g=0;const H=m=>{var C;const w=m.target;f=w.scrollLeft,g=w.scrollTop,(C=e.onScroll)===null||C===void 0||C.call(e,m)};uo(()=>{if(e.nativeScrollbar){const m=o.value;m&&(m.scrollTop=g,m.scrollLeft=f)}}),Q(So,{collapsedRef:i,collapseModeRef:J(e,"collapseMode")});const{mergedClsPrefixRef:x,inlineThemeDisabled:z}=Ie(e),S=le("Layout","-layout-sider",ur,Io,e,x);function A(m){var C,w;m.propertyName==="max-width"&&(i.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const U={scrollTo:u},O=k(()=>{const{common:{cubicBezierEaseInOut:m},self:C}=S.value,{siderToggleButtonColor:w,siderToggleButtonBorder:M,siderToggleBarColor:E,siderToggleBarColorHover:F}=C,$={"--n-bezier":m,"--n-toggle-button-color":w,"--n-toggle-button-border":M,"--n-toggle-bar-color":E,"--n-toggle-bar-color-hover":F};return e.inverted?($["--n-color"]=C.siderColorInverted,$["--n-text-color"]=C.textColorInverted,$["--n-border-color"]=C.siderBorderColorInverted,$["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,$.__invertScrollbar=C.__invertScrollbar):($["--n-color"]=C.siderColor,$["--n-text-color"]=C.textColor,$["--n-border-color"]=C.siderBorderColor,$["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),$}),p=z?Se("layout-sider",k(()=>e.inverted?"a":"b"),O,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:x,mergedTheme:S,styleMaxWidth:l,mergedCollapsed:i,scrollContainerStyle:d,siderPlacement:a,handleNativeElScroll:H,handleTransitionend:A,handleTriggerClick:h,inlineThemeDisabled:z,cssVars:O,themeClass:p?.themeClass,onRender:p?.onRender},U)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Ae(this.width)}]},this.nativeScrollbar?c("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(co,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?c(vr,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(hr,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${t}-layout-sider__border`}):null)}}),he=ae("n-menu"),Ge=ae("n-submenu"),Ve=ae("n-menu-item-group"),io=[_("&::before","background-color: var(--n-item-color-hover);"),y("arrow",`
 color: var(--n-arrow-color-hover);
 `),y("icon",`
 color: var(--n-item-icon-color-hover);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[_("a",`
 color: var(--n-item-text-color-hover);
 `),y("extra",`
 color: var(--n-item-text-color-hover);
 `)])],lo=[y("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),y("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],mr=_([b("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[K("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[b("submenu","margin: 0;"),b("menu-item","margin: 0;"),b("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[_("&::before","display: none;"),K("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),b("menu-item-content",[K("selected",[y("icon","color: var(--n-item-icon-color-active-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-horizontal);"),y("extra","color: var(--n-item-text-color-active-horizontal);")])]),K("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),y("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),y("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ce("disabled",[ce("selected, child-active",[_("&:focus-within",lo)]),K("selected",[se(null,[y("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-hover-horizontal);"),y("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),K("child-active",[se(null,[y("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),y("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),se("border-bottom: 2px solid var(--n-border-color-horizontal);",lo)]),b("menu-item-content-header",[_("a","color: var(--n-item-text-color-horizontal);")])])]),ce("responsive",[b("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),K("collapsed",[b("menu-item-content",[K("selected",[_("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),b("menu-item-content-header","opacity: 0;"),y("arrow","opacity: 0;"),y("icon","color: var(--n-item-icon-color-collapsed);")])]),b("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),b("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[_("> *","z-index: 1;"),_("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),K("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),K("collapsed",[y("arrow","transform: rotate(0);")]),K("selected",[_("&::before","background-color: var(--n-item-color-active);"),y("arrow","color: var(--n-arrow-color-active);"),y("icon","color: var(--n-item-icon-color-active);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[_("a","color: var(--n-item-text-color-active);"),y("extra","color: var(--n-item-text-color-active);")])]),K("child-active",[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[_("a",`
 color: var(--n-item-text-color-child-active);
 `),y("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),y("arrow",`
 color: var(--n-arrow-color-child-active);
 `),y("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ce("disabled",[ce("selected, child-active",[_("&:focus-within",io)]),K("selected",[se(null,[y("arrow","color: var(--n-arrow-color-active-hover);"),y("icon","color: var(--n-item-icon-color-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[_("a","color: var(--n-item-text-color-active-hover);"),y("extra","color: var(--n-item-text-color-active-hover);")])])]),K("child-active",[se(null,[y("arrow","color: var(--n-arrow-color-child-active-hover);"),y("icon","color: var(--n-item-icon-color-child-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[_("a","color: var(--n-item-text-color-child-active-hover);"),y("extra","color: var(--n-item-text-color-child-active-hover);")])])]),K("selected",[se(null,[_("&::before","background-color: var(--n-item-color-active-hover);")])]),se(null,io)]),y("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),y("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),b("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[_("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[_("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),y("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),b("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[b("menu-item-content",`
 height: var(--n-item-height);
 `),b("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ht({duration:".2s"})])]),b("menu-item-group",[b("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),b("menu-tooltip",[_("a",`
 color: inherit;
 text-decoration: none;
 `)]),b("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function se(e,t){return[K("hover",e,t),_("&:hover",e,t)]}const Ao=W({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=Y(he);return{menuProps:t,style:k(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:k(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:n,expandIcon:i}}=this,l=o?o(t.rawNode):oe(this.icon);return c("div",{onClick:d=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):oe(this.title),this.extra||n?c("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(t.rawNode):oe(this.extra)):null),this.showArrow?c(vo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):c(wt,null)}):null)}}),ge=8;function Ue(e){const t=Y(he),{props:o,mergedCollapsedRef:r}=t,n=Y(Ge,null),i=Y(Ve,null),l=k(()=>o.mode==="horizontal"),d=k(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=k(()=>{var g;return Math.max((g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize,o.iconSize)}),u=k(()=>{var g;return!l.value&&e.root&&r.value&&(g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize}),h=k(()=>{if(l.value)return;const{collapsedWidth:g,indent:H,rootIndent:x}=o,{root:z,isGroup:S}=e,A=x===void 0?H:x;return z?r.value?g/2-a.value/2:A:i&&typeof i.paddingLeftRef.value=="number"?H/2+i.paddingLeftRef.value:n&&typeof n.paddingLeftRef.value=="number"?(S?H/2:H)+n.paddingLeftRef.value:0}),f=k(()=>{const{collapsedWidth:g,indent:H,rootIndent:x}=o,{value:z}=a,{root:S}=e;return l.value||!S||!r.value?ge:(x===void 0?H:x)+z+ge-(g+z)/2});return{dropdownPlacement:d,activeIconSize:u,maxIconSize:a,paddingLeft:h,iconMarginRight:f,NMenu:t,NSubmenu:n}}const qe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},gr=W({name:"MenuDivider",setup(){const e=Y(he),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:c("div",{class:`${t.value}-menu-divider`})}}),Po=Object.assign(Object.assign({},qe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),br=Le(Po),yr=W({name:"MenuOption",props:Po,setup(e){const t=Ue(e),{NSubmenu:o,NMenu:r}=t,{props:n,mergedClsPrefixRef:i,mergedCollapsedRef:l}=r,d=o?o.mergedDisabledRef:{value:!1},a=k(()=>d.value||e.disabled);function u(f){const{onClick:g}=e;g&&g(f)}function h(f){a.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),u(f))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:n,dropdownEnabled:ue(()=>e.root&&l.value&&n.mode!=="horizontal"&&!a.value),selected:ue(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:h}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:n}}=this,i=n?.(o.rawNode);return c("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i?.class]}),c(ft,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):oe(this.title),trigger:()=>c(Ao,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),No=Object.assign(Object.assign({},qe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),xr=Le(No),Cr=W({name:"MenuOptionGroup",props:No,setup(e){Q(Ge,null);const t=Ue(e);Q(Ve,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=Y(he);return function(){const{value:n}=o,i=t.paddingLeft.value,{nodeProps:l}=r,d=l?.(e.tmNode.rawNode);return c("div",{class:`${n}-menu-item-group`,role:"group"},c("div",Object.assign({},d,{class:[`${n}-menu-item-group-title`,d?.class],style:[d?.style||"",i!==void 0?`padding-left: ${i}px;`:""]}),oe(e.title),e.extra?c(je,null," ",oe(e.extra)):null),c("div",null,e.tmNodes.map(a=>Ye(a,r))))}}});function Ke(e){return e.type==="divider"||e.type==="render"}function wr(e){return e.type==="divider"}function Ye(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(Ke(o))return wr(o)?c(gr,Object.assign({key:e.key},o.props)):null;const{labelField:n}=t,{key:i,level:l,isGroup:d}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[n],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:d});return e.children?e.isGroup?c(Cr,ye(a,xr,{tmNode:e,tmNodes:e.children,key:i})):c(Oe,ye(a,Ir,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):c(yr,ye(a,br,{key:i,tmNode:e}))}const Ro=Object.assign(Object.assign({},qe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Ir=Le(Ro),Oe=W({name:"Submenu",props:Ro,setup(e){const t=Ue(e),{NMenu:o,NSubmenu:r}=t,{props:n,mergedCollapsedRef:i,mergedThemeRef:l}=o,d=k(()=>{const{disabled:g}=e;return r?.mergedDisabledRef.value||n.disabled?!0:g}),a=q(!1);Q(Ge,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),Q(Ve,null);function u(){const{onClick:g}=e;g&&g()}function h(){d.value||(i.value||o.toggleExpand(e.internalKey),u())}function f(g){a.value=g}return{menuProps:n,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:ue(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:o.activePathRef.value.includes(e.internalKey)}),collapsed:k(()=>n.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:k(()=>!d.value&&(n.mode==="horizontal"||i.value)),handlePopoverShowChange:f,handleClick:h}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,n=()=>{const{isHorizontal:l,paddingLeft:d,collapsed:a,mergedDisabled:u,maxIconSize:h,activeIconSize:f,title:g,childActive:H,icon:x,handleClick:z,menuProps:{nodeProps:S},dropdownShow:A,iconMarginRight:U,tmNode:O,mergedClsPrefix:p,isEllipsisPlaceholder:m,extra:C}=this,w=S?.(O.rawNode);return c("div",Object.assign({},w,{class:[`${p}-menu-item`,w?.class],role:"menuitem"}),c(Ao,{tmNode:O,paddingLeft:d,collapsed:a,disabled:u,iconMarginRight:U,maxIconSize:h,activeIconSize:f,title:g,extra:C,showArrow:!l,childActive:H,clsPrefix:p,icon:x,hover:A,onClick:z,isEllipsisPlaceholder:m}))},i=()=>c(Mo,null,{default:()=>{const{tmNodes:l,collapsed:d}=this;return d?null:c("div",{class:`${t}-submenu-children`,role:"menu"},l.map(a=>Ye(a,this.menuProps)))}});return this.root?c(rr,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>c("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},n(),this.isHorizontal?null:i())}):c("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},n(),i())}}),Sr=Object.assign(Object.assign({},le.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),zr=W({name:"Menu",inheritAttrs:!1,props:Sr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ie(e),r=le("Menu","-menu",mr,ar,e,t),n=Y(So,null),i=k(()=>{var I;const{collapsed:P}=e;if(P!==void 0)return P;if(n){const{collapseModeRef:s,collapsedRef:N}=n;if(s.value==="width")return(I=N.value)!==null&&I!==void 0?I:!1}return!1}),l=k(()=>{const{keyField:I,childrenField:P,disabledField:s}=e;return xe(e.items||e.options,{getIgnored(N){return Ke(N)},getChildren(N){return N[P]},getDisabled(N){return N[s]},getKey(N){var j;return(j=N[I])!==null&&j!==void 0?j:N.name}})}),d=k(()=>new Set(l.value.treeNodes.map(I=>I.key))),{watchProps:a}=e,u=q(null);a?.includes("defaultValue")?Je(()=>{u.value=e.defaultValue}):u.value=e.defaultValue;const h=J(e,"value"),f=Ce(h,u),g=q([]),H=()=>{g.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(f.value,{includeSelf:!1}).keyPath};a?.includes("defaultExpandedKeys")?Je(H):H();const x=jo(e,["expandedNames","expandedKeys"]),z=Ce(x,g),S=k(()=>l.value.treeNodes),A=k(()=>l.value.getPath(f.value).keyPath);Q(he,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:f,mergedExpandedKeysRef:z,activePathRef:A,mergedClsPrefixRef:t,isHorizontalRef:k(()=>e.mode==="horizontal"),invertedRef:J(e,"inverted"),doSelect:U,toggleExpand:p});function U(I,P){const{"onUpdate:value":s,onUpdateValue:N,onSelect:j}=e;N&&Z(N,I,P),s&&Z(s,I,P),j&&Z(j,I,P),u.value=I}function O(I){const{"onUpdate:expandedKeys":P,onUpdateExpandedKeys:s,onExpandedNamesChange:N,onOpenNamesChange:j}=e;P&&Z(P,I),s&&Z(s,I),N&&Z(N,I),j&&Z(j,I),g.value=I}function p(I){const P=Array.from(z.value),s=P.findIndex(N=>N===I);if(~s)P.splice(s,1);else{if(e.accordion&&d.value.has(I)){const N=P.findIndex(j=>d.value.has(j));N>-1&&P.splice(N,1)}P.push(I)}O(P)}const m=I=>{const P=l.value.getPath(I??f.value,{includeSelf:!1}).keyPath;if(!P.length)return;const s=Array.from(z.value),N=new Set([...s,...P]);e.accordion&&d.value.forEach(j=>{N.has(j)&&!P.includes(j)&&N.delete(j)}),O(Array.from(N))},C=k(()=>{const{inverted:I}=e,{common:{cubicBezierEaseInOut:P},self:s}=r.value,{borderRadius:N,borderColorHorizontal:j,fontSize:ke,itemHeight:D,dividerColor:Ho}=s,v={"--n-divider-color":Ho,"--n-bezier":P,"--n-font-size":ke,"--n-border-color-horizontal":j,"--n-border-radius":N,"--n-item-height":D};return I?(v["--n-group-text-color"]=s.groupTextColorInverted,v["--n-color"]=s.colorInverted,v["--n-item-text-color"]=s.itemTextColorInverted,v["--n-item-text-color-hover"]=s.itemTextColorHoverInverted,v["--n-item-text-color-active"]=s.itemTextColorActiveInverted,v["--n-item-text-color-child-active"]=s.itemTextColorChildActiveInverted,v["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveInverted,v["--n-item-text-color-active-hover"]=s.itemTextColorActiveHoverInverted,v["--n-item-icon-color"]=s.itemIconColorInverted,v["--n-item-icon-color-hover"]=s.itemIconColorHoverInverted,v["--n-item-icon-color-active"]=s.itemIconColorActiveInverted,v["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHoverInverted,v["--n-item-icon-color-child-active"]=s.itemIconColorChildActiveInverted,v["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHoverInverted,v["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsedInverted,v["--n-item-text-color-horizontal"]=s.itemTextColorHorizontalInverted,v["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontalInverted,v["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontalInverted,v["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontalInverted,v["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontalInverted,v["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontalInverted,v["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontalInverted,v["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontalInverted,v["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontalInverted,v["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontalInverted,v["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontalInverted,v["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontalInverted,v["--n-arrow-color"]=s.arrowColorInverted,v["--n-arrow-color-hover"]=s.arrowColorHoverInverted,v["--n-arrow-color-active"]=s.arrowColorActiveInverted,v["--n-arrow-color-active-hover"]=s.arrowColorActiveHoverInverted,v["--n-arrow-color-child-active"]=s.arrowColorChildActiveInverted,v["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHoverInverted,v["--n-item-color-hover"]=s.itemColorHoverInverted,v["--n-item-color-active"]=s.itemColorActiveInverted,v["--n-item-color-active-hover"]=s.itemColorActiveHoverInverted,v["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsedInverted):(v["--n-group-text-color"]=s.groupTextColor,v["--n-color"]=s.color,v["--n-item-text-color"]=s.itemTextColor,v["--n-item-text-color-hover"]=s.itemTextColorHover,v["--n-item-text-color-active"]=s.itemTextColorActive,v["--n-item-text-color-child-active"]=s.itemTextColorChildActive,v["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveHover,v["--n-item-text-color-active-hover"]=s.itemTextColorActiveHover,v["--n-item-icon-color"]=s.itemIconColor,v["--n-item-icon-color-hover"]=s.itemIconColorHover,v["--n-item-icon-color-active"]=s.itemIconColorActive,v["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHover,v["--n-item-icon-color-child-active"]=s.itemIconColorChildActive,v["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHover,v["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsed,v["--n-item-text-color-horizontal"]=s.itemTextColorHorizontal,v["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontal,v["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontal,v["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontal,v["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontal,v["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontal,v["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontal,v["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontal,v["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontal,v["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontal,v["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontal,v["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontal,v["--n-arrow-color"]=s.arrowColor,v["--n-arrow-color-hover"]=s.arrowColorHover,v["--n-arrow-color-active"]=s.arrowColorActive,v["--n-arrow-color-active-hover"]=s.arrowColorActiveHover,v["--n-arrow-color-child-active"]=s.arrowColorChildActive,v["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHover,v["--n-item-color-hover"]=s.itemColorHover,v["--n-item-color-active"]=s.itemColorActive,v["--n-item-color-active-hover"]=s.itemColorActiveHover,v["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsed),v}),w=o?Se("menu",k(()=>e.inverted?"a":"b"),C,e):void 0,M=Do(),E=q(null),F=q(null);let $=!0;const R=()=>{var I;$?$=!1:(I=E.value)===null||I===void 0||I.sync({showAllItemsBeforeCalculate:!0})};function G(){return document.getElementById(M)}const B=q(-1);function L(I){B.value=e.options.length-I}function X(I){I||(B.value=-1)}const T=k(()=>{const I=B.value;return{children:I===-1?[]:e.options.slice(I)}}),V=k(()=>{const{childrenField:I,disabledField:P,keyField:s}=e;return xe([T.value],{getIgnored(N){return Ke(N)},getChildren(N){return N[I]},getDisabled(N){return N[P]},getKey(N){var j;return(j=N[s])!==null&&j!==void 0?j:N.name}})}),ee=k(()=>xe([{}]).treeNodes[0]);function te(){var I;if(B.value===-1)return c(Oe,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:ee.value,domId:M,isEllipsisPlaceholder:!0});const P=V.value.treeNodes[0],s=A.value,N=!!(!((I=P.children)===null||I===void 0)&&I.some(j=>s.includes(j.key)));return c(Oe,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:N,tmNode:P,domId:M,rawNodes:P.rawNode.children||[],tmNodes:P.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:x,uncontrolledExpanededKeys:g,mergedExpandedKeys:z,uncontrolledValue:u,mergedValue:f,activePath:A,tmNodes:S,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:C,themeClass:w?.themeClass,overflowRef:E,counterRef:F,updateCounter:()=>{},onResize:R,onUpdateOverflow:X,onUpdateCount:L,renderCounter:te,getCounter:G,onRender:w?.onRender,showOption:m,deriveResponsiveState:R}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;r?.();const n=()=>this.tmNodes.map(a=>Ye(a,this.$props)),l=t==="horizontal"&&this.responsive,d=()=>c("div",$e(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),l?c(xt,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:n,counter:this.renderCounter}):n());return l?c($o,{onResize:this.onResize},{default:d}):d()}}),kr="/assets/myimg-CNvp5meg.jpg",Ar="/assets/hajimi-BMCsqNS9.jpg",Pr="/assets/hbz-BdJG2Qfm.png",Nr={class:"layout-content"},Rr={class:"avatar-body"},Hr={class:"myimg-body"},Tr=W({__name:"Main",setup(e){const t=[{label:"哈基密语言",key:"hajimi",img:"hajimi"},{label:"黑白照",key:"reset-image",img:"hbz"}],o=n=>"href"in n?c("a",{href:n.href},n.label):c(tt,{to:n.key},()=>n.label),r=n=>n.img==="hajimi"?c(Pe,{round:!0,size:"small",src:Ar}):n.img==="hbz"?c(Pe,{round:!0,size:"small",src:Pr}):c(ao,null,{default:()=>c(mt)});return(n,i)=>(Ee(),ot(re(no),{"has-sider":""},{default:ve(()=>[ie(re(pr),{bordered:"",class:"layout-sider","collapse-mode":"width","collapsed-width":64,width:240,"default-collapsed":!0,"show-trigger":""},{default:ve(()=>[ie(re(zr),{"collapsed-width":64,options:t,"render-label":o,"render-icon":r})]),_:1}),ie(re(no),null,{default:ve(()=>[me("div",Nr,[me("div",Rr,[me("div",Hr,[ie(re(Pe),{round:"",size:180,src:re(kr),class:"myimg"},null,8,["src"])])]),ie(re(Ze),{justify:"center",class:"tips"},{default:ve(()=>[...i[0]||(i[0]=[Qe(" Ciallo～(∠・ω ＜)⌒",-1),me("span",{class:"stars"},"☆",-1)])]),_:1}),ie(re(Ze),{justify:"center",class:"item"},{default:ve(()=>[ie(re(Wo),{round:"",color:"#ff7a45",tag:"a",href:"https://www.baidu.com",target:"_blank"},{default:ve(()=>[...i[1]||(i[1]=[Qe(" 百度 ",-1)])]),_:1})]),_:1})])]),_:1})]),_:1}))}}),_r=rt(Tr,[["__scopeId","data-v-d677945d"]]),Lr=W({__name:"Home",setup(e){return(t,o)=>(Ee(),ho(je,null,[ie(_r),ie(Go)],64))}});export{Lr as default};
