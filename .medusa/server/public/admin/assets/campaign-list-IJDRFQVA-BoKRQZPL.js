import{a as g}from"./chunk-B4FQDBC3-BpFEfUn2.js";import{N as C,a as v,D as y,b as T}from"./chunk-GA34GXNI-BQZC5d02.js";import{T as d,a as _}from"./chunk-MSDRGCRR-CD8LH72i.js";import{b as f,r as j,j as t,a as D,dy as P,k as S,H as w,L as H,B as N,dJ as k,A,t as x}from"./index-BZ3ouZyT.js";import{c as b}from"./index-Dd6kzxGa.js";import{u as E,_ as q}from"./chunk-GIYLQ7GZ-COPz3VHk.js";import"./lodash-ER-XXxsc.js";import{u as L}from"./chunk-C76H5USB-DJmIyDuL.js";import"./chunk-RGGFF4GO-De8iqvE2.js";import"./chunk-BNLHRJ2A-Cgc_KhUv.js";import"./chunk-KHOKHZC6-DT8VDB1S.js";import{S as O}from"./chunk-2RQLKDBF-I8WZo0gP.js";import{P as z}from"./pencil-square-BIP_-IpU.js";import{T as B}from"./trash-D6z3UIdh.js";import{u as I}from"./use-prompt-VWDRfxo7.js";import{C as J}from"./container-DfN2g0rg.js";import"./chunk-P3UUX2T6-Bfdkflac.js";import"./format-CdPIKOEK.js";import"./chunk-YEDAFXMB-vEHoKu6I.js";import"./chunk-AOFGTNG6-_e2_Aola.js";import"./table-DKxkjXzR.js";import"./chunk-WX2SMNCD-Bdui9F_i.js";import"./plus-mini-DC6oI0AW.js";import"./command-bar-D0N15Guc.js";import"./index-Bs-HA-OK.js";import"./chunk-EPATMX2O-BiMkhVyz.js";import"./_isIndex-D8Z7wicQ.js";import"./x-mark-mini-BwnMkSg-.js";import"./date-picker-B2GVDlSJ.js";import"./clsx-B-dksMZM.js";import"./popover-BYvWdU6Y.js";import"./triangle-left-mini-DKSLhgY_.js";import"./Trans-hxkAxrPT.js";import"./check-BFSYkAlS.js";import"./prompt-D55FtKXi.js";var M=({prefix:e,pageSize:a=20})=>{const r=L(["offset","q","order","created_at","updated_at"],e),{offset:s,q:i,order:c,created_at:n,updated_at:m}=r;return{searchParams:{limit:a,offset:s?Number(s):0,order:c,created_at:n?JSON.parse(n):void 0,updated_at:m?JSON.parse(m):void 0,q:i},raw:r}},o=b(),Q=()=>{const{t:e}=f();return j.useMemo(()=>[o.accessor("name",{header:()=>t.jsx(C,{}),cell:({getValue:a})=>t.jsx(v,{name:a()})}),o.accessor("description",{header:()=>t.jsx(y,{}),cell:({getValue:a})=>t.jsx(T,{description:a()})}),o.accessor("campaign_identifier",{header:()=>t.jsx(d,{text:e("campaigns.fields.identifier")}),cell:({getValue:a})=>{const r=a();return t.jsx(_,{text:r})}}),o.accessor("starts_at",{header:()=>t.jsx(d,{text:e("campaigns.fields.start_date")}),cell:({getValue:a})=>{const r=a();if(!r)return;const s=new Date(r);return t.jsx(g,{date:s})}}),o.accessor("ends_at",{header:()=>t.jsx(d,{text:e("campaigns.fields.end_date")}),cell:({getValue:a})=>{const r=a();if(!r)return;const s=new Date(r);return t.jsx(g,{date:s})}})],[e])},u=20,R=()=>{const{t:e}=f(),{raw:a,searchParams:r}=M({pageSize:u}),{campaigns:s,count:i,isPending:c,isError:n,error:m}=P(r,{placeholderData:S}),l=G(),{table:h}=E({data:s??[],columns:l,count:i,enablePagination:!0,getRowId:p=>p.id,pageSize:u});if(n)throw m;return t.jsxs(J,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(w,{level:"h2",children:e("campaigns.domain")}),t.jsx(H,{to:"/campaigns/create",children:t.jsx(N,{size:"small",variant:"secondary",children:e("actions.create")})})]}),t.jsx(q,{table:h,columns:l,count:i,pageSize:u,pagination:!0,search:!0,navigateTo:p=>p.id,isLoading:c,queryObject:a,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]})]})},W=({campaign:e})=>{const{t:a}=f(),r=I(),{mutateAsync:s}=k(e.id),i=async()=>{await r({title:a("general.areYouSure"),description:a("campaigns.deleteCampaignWarning",{name:e.name}),verificationInstruction:a("general.typeToConfirm"),verificationText:e.name,confirmText:a("actions.delete"),cancelText:a("actions.cancel")})&&await s(void 0,{onSuccess:()=>{x.success(a("campaigns.delete.successToast",{name:e.name}))},onError:n=>{x.error(n.message)}})};return t.jsx(A,{groups:[{actions:[{icon:t.jsx(z,{}),label:a("actions.edit"),to:`/campaigns/${e.id}/edit`}]},{actions:[{icon:t.jsx(B,{}),label:a("actions.delete"),onClick:i}]}]})},$=b(),G=()=>{const e=Q();return j.useMemo(()=>[...e,$.display({id:"actions",cell:({row:a})=>t.jsx(W,{campaign:a.original})})],[e])},we=()=>{const{getWidgets:e}=D();return t.jsx(O,{widgets:{after:e("campaign.list.after"),before:e("campaign.list.before")},hasOutlet:!0,children:t.jsx(R,{})})};export{we as Component};
