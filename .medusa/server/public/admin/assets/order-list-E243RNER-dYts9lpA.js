import{u as f,a as b,b as g}from"./chunk-EL4SSAMX-Bg5QSTBS.js";import{a as _,j as e,b as y,aR as T,H as j,k as x}from"./index-DBWnS55e.js";import{u as E,_ as h}from"./chunk-GIYLQ7GZ-Dxzza7Al.js";import"./lodash-CkfAw9Ei.js";import"./chunk-RGGFF4GO-BDh_Ux-6.js";import"./chunk-BNLHRJ2A-B4VOBEOm.js";import"./chunk-KHOKHZC6-CqxQBDX6.js";import{S as v}from"./chunk-2RQLKDBF-Bh7PNNZz.js";import{C as O}from"./container-5t1z13_s.js";import"./chunk-C76H5USB-BMI9TpQ9.js";import"./chunk-B4FQDBC3-9hEpq7g-.js";import"./chunk-P3UUX2T6-OnzgsjCG.js";import"./format-DNy3JvIM.js";import"./chunk-LHJ6JQGA-C8EHrJT1.js";import"./chunk-FSMQADBD-Dkr3W4bN.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-MUXBF6QF-CTl6bsBs.js";import"./chunk-ADOCJB6L-BybeEzAu.js";import"./react-country-flag.esm-DtVBKmop.js";import"./index-C6aG_rAm.js";import"./chunk-YEDAFXMB-B4PnkAmC.js";import"./chunk-AOFGTNG6-Bq5N9j8X.js";import"./table-Cm0Q73Cc.js";import"./chunk-WX2SMNCD-BhhDqt1V.js";import"./plus-mini-BWMzFMSU.js";import"./command-bar-BfvDtHkO.js";import"./index-Doo_3Q1b.js";import"./chunk-EPATMX2O-BgfuWjsz.js";import"./_isIndex-DEiN0s9l.js";import"./x-mark-mini-6vGwjIi3.js";import"./date-picker-kwlXJTN2.js";import"./clsx-B-dksMZM.js";import"./popover-DBRdYr3T.js";import"./triangle-left-mini-4LlIioCu.js";import"./Trans-B06GFbPO.js";import"./check-BVlAH3XP.js";var D=["id","status","created_at","email","display_id","payment_status","fulfillment_status","total","currency_code"],S=["*customer","*sales_channel"],L=`${D.join(",")},${S.join(",")}`,t=20,A=()=>{const{t:r}=y(),{searchParams:i,raw:o}=f({pageSize:t}),{orders:m,count:a,isError:p,error:d,isLoading:l}=T({fields:L,...i},{placeholderData:x}),n=b(),s=g({}),{table:u}=E({data:m??[],columns:s,enablePagination:!0,count:a,pageSize:t});if(p)throw d;return e.jsxs(O,{className:"divide-y p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(j,{children:r("orders.domain")})}),e.jsx(h,{columns:s,table:u,pagination:!0,navigateTo:c=>`/orders/${c.original.id}`,filters:n,count:a,search:!0,isLoading:l,pageSize:t,orderBy:[{key:"display_id",label:r("orders.fields.displayId")},{key:"created_at",label:r("fields.createdAt")},{key:"updated_at",label:r("fields.updatedAt")}],queryObject:o,noRecords:{message:r("orders.list.noRecordsMessage")}})]})},ur=()=>{const{getWidgets:r}=_();return e.jsx(v,{widgets:{after:r("order.list.after"),before:r("order.list.before")},hasOutlet:!1,children:e.jsx(A,{})})};export{ur as Component};
