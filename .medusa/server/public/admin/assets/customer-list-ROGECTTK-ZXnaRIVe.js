import{u as f,a as g,b as x}from"./chunk-DJPQV344-A8DjDefU.js";import{a as j,j as s,b as m,e3 as y,H as C,L as h,B as v,r as k,k as T,A as _}from"./index-BZ3ouZyT.js";import{u as A,_ as P}from"./chunk-GIYLQ7GZ-COPz3VHk.js";import"./lodash-ER-XXxsc.js";import"./chunk-RGGFF4GO-De8iqvE2.js";import"./chunk-BNLHRJ2A-Cgc_KhUv.js";import"./chunk-KHOKHZC6-DT8VDB1S.js";import{S}from"./chunk-2RQLKDBF-I8WZo0gP.js";import{P as E}from"./pencil-square-BIP_-IpU.js";import{C as w}from"./container-DfN2g0rg.js";import{c as D}from"./index-Dd6kzxGa.js";import"./chunk-C76H5USB-DJmIyDuL.js";import"./chunk-B4FQDBC3-BpFEfUn2.js";import"./chunk-P3UUX2T6-Bfdkflac.js";import"./format-CdPIKOEK.js";import"./chunk-ADOCJB6L-BF9tvjhY.js";import"./chunk-YEDAFXMB-vEHoKu6I.js";import"./chunk-AOFGTNG6-_e2_Aola.js";import"./table-DKxkjXzR.js";import"./chunk-WX2SMNCD-Bdui9F_i.js";import"./plus-mini-DC6oI0AW.js";import"./command-bar-D0N15Guc.js";import"./index-Bs-HA-OK.js";import"./chunk-EPATMX2O-BiMkhVyz.js";import"./_isIndex-D8Z7wicQ.js";import"./x-mark-mini-BwnMkSg-.js";import"./date-picker-B2GVDlSJ.js";import"./clsx-B-dksMZM.js";import"./popover-BYvWdU6Y.js";import"./triangle-left-mini-DKSLhgY_.js";import"./Trans-hxkAxrPT.js";import"./check-BFSYkAlS.js";var a=20,L=()=>{const{t:e}=m(),{searchParams:t,raw:n}=f({pageSize:a}),{customers:l,count:o,isLoading:c,isError:u,error:p}=y({...t},{placeholderData:T}),d=g(),i=N(),{table:b}=A({data:l??[],columns:i,count:o,enablePagination:!0,getRowId:r=>r.id,pageSize:a});if(u)throw p;return s.jsxs(w,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(C,{children:e("customers.domain")}),s.jsx(h,{to:"/customers/create",children:s.jsx(v,{size:"small",variant:"secondary",children:e("actions.create")})})]}),s.jsx(P,{table:b,columns:i,pageSize:a,count:o,filters:d,orderBy:[{key:"email",label:e("fields.email")},{key:"first_name",label:e("fields.firstName")},{key:"last_name",label:e("fields.lastName")},{key:"has_account",label:e("customers.hasAccount")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],isLoading:c,navigateTo:r=>r.original.id,search:!0,queryObject:n,noRecords:{message:e("customers.list.noRecordsMessage")}})]})},z=({customer:e})=>{const{t}=m();return s.jsx(_,{groups:[{actions:[{icon:s.jsx(E,{}),label:t("actions.edit"),to:`/customers/${e.id}/edit`}]}]})},H=D(),N=()=>{const e=x();return k.useMemo(()=>[...e,H.display({id:"actions",cell:({row:t})=>s.jsx(z,{customer:t.original})})],[e])},be=()=>{const{getWidgets:e}=j();return s.jsx(S,{widgets:{after:e("customer.list.after"),before:e("customer.list.before")},children:s.jsx(L,{})})};export{be as Component};
