import{f as A}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{T as B,a as N}from"./chunk-MSDRGCRR-CD8LH72i.js";import{a1 as O,ad as I,a3 as K,R as Q,a_ as U,j as t,b,a8 as V,a9 as $,r as f,eU as G,eX as X,t as y,B as P,k as Z}from"./index-BZ3ouZyT.js";import{u as J,_ as W}from"./chunk-GIYLQ7GZ-COPz3VHk.js";import"./lodash-ER-XXxsc.js";import{u as Y}from"./chunk-W7625H47-CfoQ9cIF.js";import"./chunk-RGGFF4GO-De8iqvE2.js";import"./chunk-BNLHRJ2A-Cgc_KhUv.js";import"./chunk-KHOKHZC6-DT8VDB1S.js";import{u as ee}from"./chunk-C76H5USB-DJmIyDuL.js";import{K as te}from"./chunk-6HTZNHPT-BXyP0wEq.js";import{R as n,u as oe}from"./chunk-6DAFMWMA-DzrLSfpZ.js";import{C as j}from"./checkbox-B5K-oibM.js";import{c as _}from"./index-Dd6kzxGa.js";import"./chunk-P3UUX2T6-Bfdkflac.js";import"./chunk-YEDAFXMB-vEHoKu6I.js";import"./chunk-AOFGTNG6-_e2_Aola.js";import"./table-DKxkjXzR.js";import"./chunk-WX2SMNCD-Bdui9F_i.js";import"./plus-mini-DC6oI0AW.js";import"./command-bar-D0N15Guc.js";import"./index-Bs-HA-OK.js";import"./chunk-EPATMX2O-BiMkhVyz.js";import"./format-CdPIKOEK.js";import"./_isIndex-D8Z7wicQ.js";import"./x-mark-mini-BwnMkSg-.js";import"./date-picker-B2GVDlSJ.js";import"./clsx-B-dksMZM.js";import"./popover-BYvWdU6Y.js";import"./triangle-left-mini-DKSLhgY_.js";import"./prompt-D55FtKXi.js";var re=_(),se=()=>{const{t:o}=b();return f.useMemo(()=>[re.accessor("id",{header:()=>t.jsx(B,{text:"Provider"}),cell:({getValue:e})=>t.jsx(N,{text:A(e())})})],[o])},ie=({prefix:o,pageSize:e=20})=>{const r=ee(["offset","q","stock_location_id"],o),{offset:l,q:c,stock_location_id:m}=r;return{searchParams:{limit:e,offset:l?Number(l):0,stock_location_id:m,q:c},raw:r}},ae=O({fulfillment_providers:I(K()).optional()}),d=50,le=({location:o})=>{var v,x;const{t:e}=b(),{handleSuccess:r}=oe(),l=V({defaultValues:{fulfillment_providers:((v=o.fulfillment_providers)==null?void 0:v.map(s=>s.id))??[]},resolver:$(ae)}),{setValue:c}=l,m=((x=o.fulfillment_providers)==null?void 0:x.reduce((s,i)=>(s[i.id]=!0,s),{}))??{},[u,k]=f.useState(m),C=s=>{const i=typeof s=="function"?s(u):s;c("fulfillment_providers",Object.keys(i),{shouldDirty:!0,shouldTouch:!0}),k(i)},{searchParams:F,raw:w}=ie({pageSize:d}),{fulfillment_providers:T,count:p,isLoading:R,isError:E,error:L}=G({...F,is_enabled:!0},{placeholderData:Z}),z=Y(),h=ce(),{table:D}=J({data:T??[],columns:h,count:p,enablePagination:!0,enableRowSelection:!0,rowSelection:{state:u,updater:C},getRowId:s=>s.id,pageSize:d}),{mutateAsync:H,isPending:M}=X(o.id),q=l.handleSubmit(async s=>{var S;const i=(S=o.fulfillment_providers)==null?void 0:S.map(a=>a.id),g=s.fulfillment_providers??[];await H({add:g.filter(a=>!(i!=null&&i.includes(a))),remove:i==null?void 0:i.filter(a=>!g.includes(a))},{onSuccess:({stock_location:a})=>{y.success(e("stockLocations.fulfillmentProviders.successToast")),r(`/settings/locations/${a.id}`)},onError:a=>{y.error(a.message)}})});if(E)throw L;return t.jsx(n.Form,{form:l,children:t.jsxs(te,{onSubmit:q,className:"flex size-full flex-col",children:[t.jsx(n.Header,{}),t.jsx(n.Body,{className:"flex flex-1 flex-col overflow-auto",children:t.jsx(W,{table:D,columns:h,pageSize:d,isLoading:R,count:p,filters:z,search:"autofocus",pagination:!0,orderBy:[{key:"id",label:e("fields.id")}],queryObject:w,layout:"fill"})}),t.jsx(n.Footer,{children:t.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[t.jsx(n.Close,{asChild:!0,children:t.jsx(P,{size:"small",variant:"secondary",type:"button",children:e("actions.cancel")})}),t.jsx(P,{size:"small",isLoading:M,type:"submit",children:e("actions.save")})]})})]})})},ne=_(),ce=()=>{const o=se();return f.useMemo(()=>[ne.display({id:"select",header:({table:e})=>t.jsx(j,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r)}),cell:({row:e})=>t.jsx(j,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...o],[o])},Oe=()=>{const{location_id:o}=Q(),{stock_location:e,isPending:r,isError:l,error:c}=U(o,{fields:"id,*fulfillment_providers"}),m=!r&&!!e;if(l)throw c;return t.jsx(n,{children:m&&t.jsx(le,{location:e})})};export{Oe as Component};
