import{I as B}from"./chunk-GEGIBWTP-LiEY8oIE.js";import{ei as C,j as e,R as H,d as J,a as $,S as F,q as V,b as c,H as g,A as I,B as D,L as q,aB as G,aj as W,dj as Y,s as K,em as Z,b2 as U,be as X,r as T,en as ee,V as te,ef as se,t as P}from"./index-BZ3ouZyT.js";import{T as m,a as h}from"./chunk-MSDRGCRR-CD8LH72i.js";import{P as l}from"./chunk-P3UUX2T6-Bfdkflac.js";import{u as z,_ as E}from"./chunk-GIYLQ7GZ-COPz3VHk.js";import"./lodash-ER-XXxsc.js";import"./chunk-RGGFF4GO-De8iqvE2.js";import"./chunk-BNLHRJ2A-Cgc_KhUv.js";import"./chunk-KHOKHZC6-DT8VDB1S.js";import{g as ie}from"./chunk-OIAPXGI2-CUEeeXRt.js";import{S as d}from"./chunk-LFLGEXIG-BEzj-lO7.js";import{T as N}from"./chunk-2RQLKDBF-I8WZo0gP.js";import{u as R}from"./chunk-C76H5USB-DJmIyDuL.js";import{u as re}from"./chunk-EPATMX2O-BiMkhVyz.js";import{P as k}from"./pencil-square-BIP_-IpU.js";import{T as A}from"./trash-D6z3UIdh.js";import{u as O}from"./use-prompt-VWDRfxo7.js";import{C as b}from"./container-DfN2g0rg.js";import{c as M}from"./index-Dd6kzxGa.js";import"./chunk-YEDAFXMB-vEHoKu6I.js";import"./chunk-AOFGTNG6-_e2_Aola.js";import"./table-DKxkjXzR.js";import"./chunk-WX2SMNCD-Bdui9F_i.js";import"./plus-mini-DC6oI0AW.js";import"./command-bar-D0N15Guc.js";import"./index-Bs-HA-OK.js";import"./_isIndex-D8Z7wicQ.js";import"./x-mark-mini-BwnMkSg-.js";import"./date-picker-B2GVDlSJ.js";import"./clsx-B-dksMZM.js";import"./popover-BYvWdU6Y.js";import"./triangle-left-mini-DKSLhgY_.js";import"./Trans-hxkAxrPT.js";import"./check-BFSYkAlS.js";import"./format-CdPIKOEK.js";import"./prompt-D55FtKXi.js";var L="*variants,*variants.product,*variants.options",tt=i=>{const{id:t}=i.params||{},{inventory_item:s}=C(t,{fields:L},{initialData:i.data,enabled:!!t});return s?e.jsx("span",{children:s.title??s.sku??t}):null},ae=({inventoryItem:i})=>{const{t}=c();return e.jsxs(b,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{level:"h2",children:t("products.attributes")}),e.jsx(I,{groups:[{actions:[{label:t("actions.edit"),to:"attributes",icon:e.jsx(k,{})}]}]})]}),e.jsx(d,{title:t("fields.height"),value:i.height}),e.jsx(d,{title:t("fields.width"),value:i.width}),e.jsx(d,{title:t("fields.length"),value:i.length}),e.jsx(d,{title:t("fields.weight"),value:i.weight}),e.jsx(d,{title:t("fields.midCode"),value:i.mid_code}),e.jsx(d,{title:t("fields.hsCode"),value:i.hs_code}),e.jsx(d,{title:t("fields.countryOfOrigin"),value:ie(i.origin_country)})]})},ne=({level:i})=>{const{t}=c(),s=O(),{mutateAsync:r}=ee(i.inventory_item_id,i.location_id),a=async()=>{await s({title:t("general.areYouSure"),description:t("inventory.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await r()};return e.jsx(I,{groups:[{actions:[{icon:e.jsx(k,{}),label:t("actions.edit"),to:`locations/${i.location_id}`}]},{actions:[{icon:e.jsx(A,{}),label:t("actions.delete"),onClick:a,disabled:i.reserved_quantity>0||i.stocked_quantity>0}]}]})},f=M(),oe=()=>{const{t:i}=c();return T.useMemo(()=>[f.accessor("stock_locations.0.name",{header:i("fields.location"),cell:({getValue:t})=>{const s=t();return s?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s.toString()})}):e.jsx(l,{})}}),f.accessor("reserved_quantity",{header:i("inventory.reserved"),cell:({getValue:t})=>{const s=t();return Number.isNaN(s)?e.jsx(l,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})})}}),f.accessor("stocked_quantity",{header:i("fields.inStock"),cell:({getValue:t})=>{const s=t();return Number.isNaN(s)?e.jsx(l,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})})}}),f.accessor("available_quantity",{header:i("inventory.available"),cell:({getValue:t})=>{const s=t();return Number.isNaN(s)?e.jsx(l,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})})}}),f.display({id:"actions",cell:({row:t})=>e.jsx(ne,{level:t.original})})],[i])},le=({pageSize:i=20,prefix:t})=>{const s=R(["id","location_id","stocked_quantity","reserved_quantity","incoming_quantity","available_quantity","*stock_locations"],t),{reserved_quantity:r,stocked_quantity:a,available_quantity:n,...o}=s;return{searchParams:{limit:i,reserved_quantity:r?JSON.parse(r):void 0,stocked_quantity:a?JSON.parse(a):void 0,available_quantity:n?JSON.parse(n):void 0,...o},raw:s}},w=20,ce=({inventory_item_id:i})=>{const{searchParams:t,raw:s}=le({pageSize:w}),{inventory_levels:r,count:a,isPending:n,isError:o,error:j}=Z(i,{...t,fields:"*stock_locations"}),x=oe(),{table:_}=z({data:r??[],columns:x,count:a,enablePagination:!0,getRowId:y=>y.id,pageSize:w});if(o)throw j;return e.jsx(E,{table:_,columns:x,pageSize:w,count:a,isLoading:n,pagination:!0,queryObject:s})},de=({inventoryItem:i})=>{const{t}=c();return e.jsxs(b,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{children:t("inventory.locationLevels")}),e.jsx(D,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(q,{to:"locations",children:t("inventory.manageLocations")})})]}),e.jsx(ce,{inventory_item_id:i.id})]})},ue=({date:i})=>{const{getFullDate:t}=re();return i?e.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:e.jsx(te,{className:"z-10",content:e.jsx("span",{className:"text-pretty",children:`${t({date:i,includeTime:!0})}`}),children:e.jsx("span",{className:"truncate",children:t({date:i,includeTime:!0})})})}):e.jsx(l,{})},me=({reservation:i})=>{const{t}=c(),s=O(),{mutateAsync:r}=se(i.id),a=async()=>{await s({title:t("general.areYouSure"),description:t("inventory.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await r(void 0,{onSuccess:()=>{P.success(t("inventory.reservation.deleteSuccessToast"))},onError:o=>{P.error(o.message)}})};return e.jsx(I,{groups:[{actions:[{icon:e.jsx(k,{}),label:t("actions.edit"),to:`/reservations/${i.id}/edit`}]},{actions:[{icon:e.jsx(A,{}),label:t("actions.delete"),onClick:a}]}]})},u=M(),xe=({sku:i})=>{const{t}=c();return T.useMemo(()=>[u.display({id:"sku",header:()=>e.jsx(m,{text:t("fields.sku")}),cell:()=>e.jsx(h,{text:i})}),u.accessor("line_item.order_id",{header:()=>e.jsx(m,{text:t("inventory.reservation.orderID")}),cell:({getValue:s})=>{const r=s();return r?e.jsx(h,{text:r}):e.jsx(l,{})}}),u.accessor("description",{header:()=>e.jsx(m,{text:t("fields.description")}),cell:({getValue:s})=>{const r=s();return r?e.jsx(h,{text:r}):e.jsx(l,{})}}),u.accessor("location.name",{header:()=>e.jsx(m,{text:t("inventory.reservation.location")}),cell:({getValue:s})=>{const r=s();return r?e.jsx(h,{text:r}):e.jsx(l,{})}}),u.accessor("created_at",{header:()=>e.jsx(m,{text:t("fields.createdAt")}),cell:({getValue:s})=>e.jsx(ue,{date:s()})}),u.accessor("quantity",{header:()=>e.jsx(m,{text:t("fields.quantity"),align:"right"}),cell:({getValue:s})=>e.jsx(h,{text:s(),align:"right"})}),u.display({id:"actions",cell:({row:s})=>e.jsx(me,{reservation:s.original})})],[t])},pe=({pageSize:i=20,prefix:t})=>{const s=R(["id","location_id","inventory_item_id","quantity","line_item_id","description","created_by"],t),{quantity:r,...a}=s;return{searchParams:{limit:i,quantity:r?JSON.parse(r):void 0,...a},raw:s}},S=20,ve=({inventoryItem:i})=>{const{searchParams:t,raw:s}=pe({pageSize:S}),{reservations:r,count:a,isPending:n,isError:o,error:j}=U({...t,inventory_item_id:[i.id]}),{stock_locations:x}=X({id:(r||[]).map(p=>p.location_id)}),_=T.useMemo(()=>{const p=new Map((x||[]).map(v=>[v.id,v]));return(r||[]).map(v=>({...v,location:p.get(v.location_id)}))},[r,x]),y=xe({sku:i.sku}),{table:Q}=z({data:_??[],columns:y,count:a,enablePagination:!0,getRowId:p=>p.id,pageSize:S});if(o)throw j;return e.jsx(E,{table:Q,columns:y,pageSize:S,count:a,isLoading:n,pagination:!0,queryObject:s})},he=({inventoryItem:i})=>{const{t}=c();return e.jsxs(b,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{children:t("reservations.domain")}),e.jsx(D,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(q,{to:`/reservations/create?item_id=${i.id}`,children:t("actions.create")})})]}),e.jsx(ve,{inventoryItem:i})]})},fe=({variants:i})=>{const{t}=c();return i!=null&&i.length?e.jsxs(b,{className:"p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(g,{level:"h2",children:t("inventory.associatedVariants")})}),e.jsx("div",{className:"txt-small flex flex-col gap-2 px-2 pb-2",children:i.map(s=>{var n;const r=s.product?`/products/${s.product.id}/variants/${s.id}`:null,a=e.jsx("div",{className:"shadow-elevation-card-rest bg-ui-bg-component rounded-md px-4 py-2 transition-colors",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"shadow-elevation-card-rest rounded-md",children:e.jsx(G,{src:(n=s.product)==null?void 0:n.thumbnail})}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsx("span",{className:"text-ui-fg-base font-medium",children:s.title}),e.jsx("span",{className:"text-ui-fg-subtle",children:s.options.map(o=>o.value).join(" ⋅ ")})]}),e.jsx("div",{className:"size-7 flex items-center justify-center",children:e.jsx(W,{className:"text-ui-fg-muted"})})]})});return r?e.jsx(q,{to:r,className:"outline-none focus-within:shadow-borders-interactive-with-focus rounded-md [&:hover>div]:bg-ui-bg-component-hover",children:a},s.id):e.jsx("div",{children:a},s.id)})})]}):null},st=()=>{const{id:i}=H(),t=J(),{inventory_item:s,isPending:r,isError:a,error:n}=C(i,{fields:L},{initialData:t}),{getWidgets:o}=$();if(r||!s)return e.jsx(F,{showJSON:!0,mainSections:3,sidebarSections:2,showMetadata:!0});if(a)throw n;return e.jsxs(N,{widgets:{after:o("inventory_item.details.after"),before:o("inventory_item.details.before"),sideAfter:o("inventory_item.details.side.after"),sideBefore:o("inventory_item.details.side.before")},data:s,showJSON:!0,showMetadata:!0,children:[e.jsxs(N.Main,{children:[e.jsx(B,{inventoryItem:s}),e.jsx(de,{inventoryItem:s}),e.jsx(he,{inventoryItem:s})]}),e.jsxs(N.Sidebar,{children:[e.jsx(fe,{variants:s.variants}),e.jsx(ae,{inventoryItem:s})]})]})},je=i=>({queryKey:Y.detail(i),queryFn:async()=>K.admin.inventoryItem.retrieve(i,{fields:L})}),it=async({params:i})=>{const t=i.id,s=je(t);return V.ensureQueryData(s)};export{tt as Breadcrumb,st as Component,it as loader};
