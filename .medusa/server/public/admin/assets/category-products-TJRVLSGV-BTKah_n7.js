import{u as I}from"./chunk-G3QXMPRB-CjOxX6YK.js";import{a5 as u,R as A,aN as B,j as t,b as P,r as S,a8 as H,a9 as M,e as N,aO as D,t as f,E as O,B as x,V}from"./index-BZ3ouZyT.js";import{u as K,_ as L}from"./chunk-GIYLQ7GZ-COPz3VHk.js";import"./lodash-ER-XXxsc.js";import{u as q,a as G}from"./chunk-LF55PRLE-C4YNlMEo.js";import"./chunk-RGGFF4GO-De8iqvE2.js";import"./chunk-BNLHRJ2A-Cgc_KhUv.js";import"./chunk-KHOKHZC6-DT8VDB1S.js";import{K as Q}from"./chunk-6HTZNHPT-BXyP0wEq.js";import{R as l,u as U}from"./chunk-6DAFMWMA-DzrLSfpZ.js";import{C as y}from"./checkbox-B5K-oibM.js";import{c as X}from"./index-Dd6kzxGa.js";import"./chunk-IQBAUTU5-45zDXqMc.js";import"./chunk-ADOCJB6L-BF9tvjhY.js";import"./chunk-P3UUX2T6-Bfdkflac.js";import"./chunk-YEDAFXMB-vEHoKu6I.js";import"./chunk-AOFGTNG6-_e2_Aola.js";import"./table-DKxkjXzR.js";import"./chunk-WX2SMNCD-Bdui9F_i.js";import"./plus-mini-DC6oI0AW.js";import"./command-bar-D0N15Guc.js";import"./index-Bs-HA-OK.js";import"./chunk-C76H5USB-DJmIyDuL.js";import"./chunk-EPATMX2O-BiMkhVyz.js";import"./format-CdPIKOEK.js";import"./_isIndex-D8Z7wicQ.js";import"./x-mark-mini-BwnMkSg-.js";import"./date-picker-B2GVDlSJ.js";import"./clsx-B-dksMZM.js";import"./popover-BYvWdU6Y.js";import"./triangle-left-mini-DKSLhgY_.js";import"./prompt-D55FtKXi.js";var Z=u.object({product_ids:u.array(u.string())}),m=50,p="p",$=({categoryId:c,products:o=[]})=>{const{t:e}=P(),{handleSuccess:a}=U(),[d,n]=S.useState(o.reduce((r,i)=>(r[i.id]=!0,r),{})),s=H({defaultValues:{product_ids:[]},resolver:M(Z)}),b=r=>{const i=typeof r=="function"?r(d):r;s.setValue("product_ids",Object.keys(i),{shouldDirty:!0,shouldTouch:!0}),n(i)},{searchParams:j,raw:C}=q({pageSize:m,prefix:p}),{products:v,count:g,isPending:_,isError:E,error:R}=N({...j}),h=W(),k=G(["categories"]),{table:T}=K({data:v,columns:h,getRowId:r=>r.id,count:g,pageSize:m,prefix:p,enableRowSelection:r=>!o.some(i=>i.id===r.original.id),enablePagination:!0,rowSelection:{state:d,updater:b}}),{mutateAsync:w,isPending:F}=D(c),z=s.handleSubmit(async r=>{await w({add:r.product_ids},{onSuccess:()=>{f.success(e("categories.products.add.successToast",{count:r.product_ids.length-o.length})),a()},onError:i=>{f.error(i.message)}})});if(E)throw R;return t.jsx(l.Form,{form:s,children:t.jsxs(Q,{onSubmit:z,className:"flex h-full flex-col overflow-hidden",children:[t.jsx(l.Header,{children:t.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.formState.errors.product_ids&&t.jsx(O,{variant:"error",children:s.formState.errors.product_ids.message}),t.jsx(l.Close,{asChild:!0,children:t.jsx(x,{size:"small",variant:"secondary",children:e("actions.cancel")})}),t.jsx(x,{size:"small",type:"submit",isLoading:F,children:e("actions.save")})]})}),t.jsx(l.Body,{className:"size-full overflow-hidden",children:t.jsx(L,{table:T,columns:h,pageSize:m,count:g,queryObject:C,filters:k,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],prefix:p,isLoading:_,layout:"fill",pagination:!0,search:"autofocus"})})]})})},J=X(),W=()=>{const{t:c}=P(),o=I();return S.useMemo(()=>[J.display({id:"select",header:({table:e})=>t.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect(),d=e.getIsSelected()||a,n=t.jsx(y,{checked:d,disabled:a,onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}});return a?t.jsx(V,{content:c("categories.products.add.disabledTooltip"),side:"right",children:n}):n}}),...o],[c,o])},Fe=()=>{const{id:c}=A(),{product_category:o,isPending:e,isFetching:a,isError:d,error:n}=B(c,{fields:"products.id"}),s=!e&&!a&&!!o;if(d)throw n;return t.jsx(l,{children:s&&t.jsx($,{categoryId:o.id,products:o.products})})};export{Fe as Component};
