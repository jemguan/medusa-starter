import{r as A}from"./chunk-K7S5TX6I-D5v_8AQi.js";import{u as D,_ as C}from"./chunk-GIYLQ7GZ-COPz3VHk.js";import{r as n,aT as F,a1 as L,a3 as R,j as r,b,a8 as U,a9 as H,eD as z,H as I,T as q,w as p,x as B,B as $,V as h,A as V}from"./index-BZ3ouZyT.js";import"./lodash-ER-XXxsc.js";import{u as K}from"./chunk-C76H5USB-DJmIyDuL.js";import"./chunk-RGGFF4GO-De8iqvE2.js";import"./chunk-BNLHRJ2A-Cgc_KhUv.js";import"./chunk-KHOKHZC6-DT8VDB1S.js";import{u as J,a as Q,b as W,c as G}from"./chunk-6GGI4OZ2-XDsmjEg5.js";import{K as X}from"./chunk-6HTZNHPT-BXyP0wEq.js";import{R as f}from"./chunk-6DAFMWMA-DzrLSfpZ.js";import{T as Y}from"./Trans-hxkAxrPT.js";import{A as Z}from"./arrow-path-CcJSPC9V.js";import{T as ee}from"./trash-D6z3UIdh.js";import{u as re}from"./use-prompt-VWDRfxo7.js";import{A as te}from"./alert-CT2tZAYx.js";import{C as ae}from"./container-DfN2g0rg.js";import{f as u}from"./format-CdPIKOEK.js";import{S as y}from"./status-badge-CPe4e4Cj.js";import{c as se}from"./index-Dd6kzxGa.js";import"./chunk-YEDAFXMB-vEHoKu6I.js";import"./chunk-AOFGTNG6-_e2_Aola.js";import"./table-DKxkjXzR.js";import"./chunk-WX2SMNCD-Bdui9F_i.js";import"./plus-mini-DC6oI0AW.js";import"./command-bar-D0N15Guc.js";import"./index-Bs-HA-OK.js";import"./chunk-EPATMX2O-BiMkhVyz.js";import"./_isIndex-D8Z7wicQ.js";import"./x-mark-mini-BwnMkSg-.js";import"./date-picker-B2GVDlSJ.js";import"./clsx-B-dksMZM.js";import"./popover-BYvWdU6Y.js";import"./triangle-left-mini-DKSLhgY_.js";import"./prompt-D55FtKXi.js";var ie=Object.defineProperty,x=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,S=(e,t,a)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ne=(e,t)=>{for(var a in t)M.call(t,a)&&S(e,a,t[a]);if(x)for(var a of x(t))P.call(t,a)&&S(e,a,t[a]);return e},oe=(e,t)=>{var a={};for(var s in e)M.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&x)for(var s of x(e))t.indexOf(s)<0&&P.call(e,s)&&(a[s]=e[s]);return a};const E=n.forwardRef((e,t)=>{var a=e,{color:s="currentColor"}=a,i=oe(a,["color"]);return n.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},i),n.createElement("g",{stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},n.createElement("path",{d:"m6.44 3.965 1.59-1.591a3.25 3.25 0 1 1 4.597 4.596l-1.591 1.59M3.964 6.44l-1.59 1.59a3.25 3.25 0 1 0 4.596 4.597l1.59-1.591M5.909 9.09 9.091 5.91"})),n.createElement("defs",null,n.createElement("clipPath",{id:"a"},n.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});E.displayName="Link";var le=({prefix:e,pageSize:t=20})=>{const a=K(["offset","q","order","created_at","updated_at"],e),{offset:s,created_at:i,updated_at:o,q:l,order:c}=a;return{searchParams:{limit:t,offset:s?Number(s):0,order:c,created_at:i?JSON.parse(i):void 0,updated_at:o?JSON.parse(o):void 0,q:l},raw:a}},ce=F(A()),de=L({email:R().email()}),j=10,g="usr_invite",me=`${window.location.origin}/app/invite?token=`,pe=()=>{const{t:e}=b(),t=U({defaultValues:{email:""},resolver:H(de)}),{raw:a,searchParams:s}=le({prefix:g,pageSize:j}),{invites:i,count:o,isPending:l,isError:c,error:d}=J(s),w=fe(),{table:N}=D({data:i??[],columns:w,count:o,enablePagination:!0,getRowId:m=>m.id,pageSize:j,prefix:g}),{mutateAsync:T,isPending:O}=Q(),k=t.handleSubmit(async m=>{try{await T({email:m.email}),t.reset()}catch(v){if(z(v)&&v.status===400){t.setError("root",{type:"manual",message:v.message});return}}});if(c)throw d;return r.jsx(f.Form,{form:t,children:r.jsxs(X,{onSubmit:k,className:"flex h-full flex-col overflow-hidden",children:[r.jsx(f.Header,{}),r.jsx(f.Body,{className:"flex flex-1 flex-col overflow-hidden",children:r.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:r.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[r.jsxs("div",{children:[r.jsx(I,{children:e("users.inviteUser")}),r.jsx(q,{size:"small",className:"text-ui-fg-subtle",children:e("users.inviteUserHint")})]}),t.formState.errors.root&&r.jsx(te,{variant:"error",dismissible:!1,className:"text-balance",children:t.formState.errors.root.message}),r.jsxs("div",{className:"flex flex-col gap-y-4",children:[r.jsx("div",{className:"grid grid-cols-2 gap-4",children:r.jsx(p.Field,{control:t.control,name:"email",render:({field:m})=>r.jsxs(p.Item,{children:[r.jsx(p.Label,{children:e("fields.email")}),r.jsx(p.Control,{children:r.jsx(B,{...m})}),r.jsx(p.ErrorMessage,{})]})})}),r.jsx("div",{className:"flex items-center justify-end",children:r.jsx($,{size:"small",variant:"secondary",type:"submit",isLoading:O,children:e("users.sendInvite")})})]}),r.jsxs("div",{className:"flex flex-col gap-y-4",children:[r.jsx(I,{level:"h2",children:e("users.pendingInvites")}),r.jsx(ae,{className:"overflow-hidden p-0",children:r.jsx(C,{table:N,columns:w,count:o,pageSize:j,pagination:!0,search:"autofocus",isLoading:l,queryObject:a,prefix:g,orderBy:[{key:"email",label:e("fields.email")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]})})]})]})})})]})})},ue=({invite:e})=>{const{mutateAsync:t}=W(e.id),{mutateAsync:a}=G(e.id),s=re(),{t:i}=b(),o=async()=>{await s({title:i("general.areYouSure"),description:i("users.deleteInviteWarning",{email:e.email}),cancelText:i("actions.cancel"),confirmText:i("actions.delete")})&&await t()},l=async()=>{await a()},c=()=>{const d=`${me}${e.token}`;(0,ce.default)(d)};return r.jsx(V,{groups:[{actions:[{icon:r.jsx(Z,{}),label:i("users.resendInvite"),onClick:l}]},{actions:[{icon:r.jsx(E,{}),label:i("users.copyInviteLink"),onClick:c}]},{actions:[{icon:r.jsx(ee,{}),label:i("actions.delete"),onClick:o}]}]})},_=se(),fe=()=>{const{t:e}=b();return n.useMemo(()=>[_.accessor("email",{header:e("fields.email"),cell:({getValue:t})=>t()}),_.accessor("accepted",{header:e("fields.status"),cell:({getValue:t,row:a})=>{const s=t(),i=new Date(a.original.expires_at)<new Date;return s?r.jsx(h,{content:e("users.acceptedOnDate",{date:u(new Date(a.original.updated_at),"dd MMM, yyyy")}),children:r.jsx(y,{color:"green",children:e("users.inviteStatus.accepted")})}):i?r.jsx(h,{content:e("users.expiredOnDate",{date:u(new Date(a.original.expires_at),"dd MMM, yyyy")}),children:r.jsx(y,{color:"red",children:e("users.inviteStatus.expired")})}):r.jsx(h,{content:r.jsx(Y,{i18nKey:"users.validFromUntil",components:[r.jsx("span",{className:"font-medium"},"from"),r.jsx("span",{className:"font-medium"},"untill")],values:{from:u(new Date(a.original.created_at),"dd MMM, yyyy"),until:u(new Date(a.original.expires_at),"dd MMM, yyyy")}}),children:r.jsx(y,{color:"orange",children:e("users.inviteStatus.pending")})})}}),_.display({id:"actions",cell:({row:t})=>r.jsx(ue,{invite:t.original})})],[e])},Ge=()=>r.jsx(f,{children:r.jsx(pe,{})});export{Ge as Component};
