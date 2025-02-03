import{D as y}from"./chunk-YRY2CZ6I-BDLyjQNF.js";import{g as b}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{a1 as C,a3 as x,a2 as u,af as _,R as F,b as j,dF as B,j as e,H as T,a8 as I,a9 as E,v as N,dz as S,w as s,x as w,T as L,B as h}from"./index-BZ3ouZyT.js";import{K as V}from"./chunk-6HTZNHPT-BXyP0wEq.js";import{b as l,u as P}from"./chunk-6DAFMWMA-DzrLSfpZ.js";import{T as D}from"./Trans-hxkAxrPT.js";import{R as a}from"./radio-group-CykBVj7J.js";import{C as M}from"./currency-input-DGkmkW8Y.js";import"./index.esm-BAaYOQo8.js";import"./prompt-D55FtKXi.js";var R=C({is_automatic:x().toLowerCase(),code:x().min(1),status:u(["active","inactive","draft"]),value_type:u(["fixed","percentage"]),value:_(),allocation:u(["each","across"])}),z=({promotion:i})=>{const{t:o}=j(),{handleSuccess:c}=P(),r=I({defaultValues:{is_automatic:i.is_automatic.toString(),code:i.code,status:i.status,value:i.application_method.value,allocation:i.application_method.allocation,value_type:i.application_method.type},resolver:E(R)}),m=N({control:r.control,name:"value_type"})==="fixed",{mutateAsync:f,isPending:v}=S(i.id),g=r.handleSubmit(async t=>{await f({is_automatic:t.is_automatic==="true",code:t.code,status:t.status,application_method:{value:t.value,type:t.value_type,allocation:t.allocation}},{onSuccess:()=>{c()}})});return e.jsx(l.Form,{form:r,children:e.jsxs(V,{onSubmit:g,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(l.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsx(s.Field,{control:r.control,name:"status",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o("promotions.form.status.label")}),e.jsx(s.Control,{children:e.jsxs(a,{className:"flex-col gap-y-3",...t,value:t.value,onValueChange:t.onChange,children:[e.jsx(a.ChoiceBox,{value:"draft",label:o("promotions.form.status.draft.title"),description:o("promotions.form.status.draft.description")}),e.jsx(a.ChoiceBox,{value:"active",label:o("promotions.form.status.active.title"),description:o("promotions.form.status.active.description")}),e.jsx(a.ChoiceBox,{value:"inactive",label:o("promotions.form.status.inactive.title"),description:o("promotions.form.status.inactive.description")})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"is_automatic",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o("promotions.form.method.label")}),e.jsx(s.Control,{children:e.jsxs(a,{className:"flex-col gap-y-3",...t,value:t.value,onValueChange:t.onChange,children:[e.jsx(a.ChoiceBox,{value:"false",label:o("promotions.form.method.code.title"),description:o("promotions.form.method.code.description")}),e.jsx(a.ChoiceBox,{value:"true",label:o("promotions.form.method.automatic.title"),description:o("promotions.form.method.automatic.description")})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:r.control,name:"code",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o("promotions.form.code.title")}),e.jsx(s.Control,{children:e.jsx(w,{...t})})]})}),e.jsx(L,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:e.jsx(D,{t:o,i18nKey:"promotions.form.code.description",components:[e.jsx("br",{},"break")]})})]}),e.jsx(s.Field,{control:r.control,name:"value_type",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o("promotions.fields.value_type")}),e.jsx(s.Control,{children:e.jsxs(a,{className:"flex-col gap-y-3",...t,onValueChange:t.onChange,children:[e.jsx(a.ChoiceBox,{value:"fixed",label:o("promotions.form.value_type.fixed.title"),description:o("promotions.form.value_type.fixed.description")}),e.jsx(a.ChoiceBox,{value:"percentage",label:o("promotions.form.value_type.percentage.title"),description:o("promotions.form.value_type.percentage.description")})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"value",render:({field:{onChange:t,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o(m?"fields.amount":"fields.percentage")}),e.jsx(s.Control,{children:m?e.jsx(M,{min:0,onValueChange:n=>t(n?parseInt(n):null),code:"USD",symbol:b("USD"),...d,value:d.value}):e.jsx(y,{min:0,max:100,...d,value:d.value||"",onChange:n=>{t(n.target.value===""?null:parseInt(n.target.value))}},"amount")}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"allocation",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o("promotions.fields.allocation")}),e.jsx(s.Control,{children:e.jsxs(a,{className:"flex-col gap-y-3",...t,onValueChange:t.onChange,children:[e.jsx(a.ChoiceBox,{value:"each",label:o("promotions.form.allocation.each.title"),description:o("promotions.form.allocation.each.description")}),e.jsx(a.ChoiceBox,{value:"across",label:o("promotions.form.allocation.across.title"),description:o("promotions.form.allocation.across.description")})]})}),e.jsx(s.ErrorMessage,{})]})})]})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(h,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(h,{size:"small",type:"submit",isLoading:v,children:o("actions.save")})]})})]})})},O=()=>{const{id:i}=F(),{t:o}=j(),{promotion:c,isLoading:r,isError:p,error:m}=B(i);if(p)throw m;return e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(T,{children:o("promotions.edit.title")})}),!r&&c&&e.jsx(z,{promotion:c})]})};export{O as Component};
