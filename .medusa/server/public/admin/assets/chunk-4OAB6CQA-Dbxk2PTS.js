import{e as w,f as E,g as T,h as q}from"./chunk-2T6UWGTP-BEvLWGC9.js";import{j as a,C as D,r as f,cP as L,ab as P}from"./index-BZ3ouZyT.js";import{C as R}from"./index.esm-BAaYOQo8.js";var S=({context:l,disabledToggleTooltip:h,...c})=>{const{field:i,control:u,renderProps:e}=w({context:l}),p=E({context:l}),{container:t,input:r}=e;return a.jsx(D,{control:u,name:i,render:({field:d})=>a.jsx(T,{...t,...p,outerComponent:a.jsx(V,{field:d,inputProps:r,isAnchor:t.isAnchor,tooltip:h}),children:a.jsx(B,{field:d,inputProps:r,...c})})})},V=({field:l,inputProps:h,isAnchor:c,tooltip:i})=>{const u=f.useRef(null),{value:e}=l,{onChange:p}=h,[t,r]=f.useState(e);f.useEffect(()=>{r(e)},[e]);const d=o=>{const n={...t,checked:o};!o&&!n.disabledToggle&&(n.quantity=""),o&&n.quantity===""&&(n.quantity=0),r(n),p(n,e)};return f.useEffect(()=>{const o=n=>{var C;c&&n.key.toLowerCase()==="x"&&(n.preventDefault(),(C=u.current)==null||C.click())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[c]),a.jsx(L,{showTooltip:t.disabledToggle&&i,content:i,children:a.jsx("div",{className:"absolute inset-y-0 left-4 z-[3] flex w-fit items-center justify-center",children:a.jsx(P,{ref:u,size:"small",className:"shrink-0",checked:t.checked,disabled:t.disabledToggle,onCheckedChange:d})})})},B=({field:l,inputProps:h,placeholder:c,...i})=>{const{ref:u,value:e,onChange:p,onBlur:t,...r}=l,{ref:d,onChange:o,onBlur:n,onFocus:C,...k}=h,[s,g]=f.useState(e);f.useEffect(()=>{g(e)},[e]);const y=q(d,u),v=(x,I,N)=>{const b=x!==void 0?x:"",m={...s,quantity:b};b!==""?m.checked=!0:m.checked&&m.disabledToggle===!1&&(m.checked=!1),g(m)},j=()=>{s.disabledToggle&&s.quantity===""&&(s.quantity=0),o(s,e)};return a.jsx("div",{className:"flex size-full items-center gap-x-2",children:a.jsx(R,{...r,...k,...i,ref:y,className:"txt-compact-small w-full flex-1 cursor-default appearance-none bg-transparent pl-8 text-right outline-none",value:s==null?void 0:s.quantity,onValueChange:v,formatValueOnBlur:!0,onBlur:()=>{t(),n(),j()},onFocus:C,decimalsLimit:0,autoComplete:"off",tabIndex:-1,placeholder:s.checked?void 0:c})})};export{S as D};
