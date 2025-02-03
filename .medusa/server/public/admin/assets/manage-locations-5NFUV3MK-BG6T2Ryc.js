import{a5 as x,R as N,b as L,ei as _,be as z,j as e,H as S,r as j,a8 as k,a9 as F,y as I,ep as C,t as v,T as r,B as y,m as E}from"./index-BZ3ouZyT.js";import{K as B}from"./chunk-6HTZNHPT-BXyP0wEq.js";import{b as h,u as M}from"./chunk-6DAFMWMA-DzrLSfpZ.js";import{C as R}from"./checkbox-B5K-oibM.js";import"./prompt-D55FtKXi.js";var T=({selected:a,onSelect:i,location:s})=>{var t,d,o;return e.jsxs("div",{className:E("flex w-full cursor-pointer gap-x-2 rounded-lg border px-2 py-2",{"border-ui-border-interactive ":a}),onClick:()=>i(!a),children:[e.jsx("div",{className:"h-5 w-5",children:e.jsx(R,{onClick:n=>{n.stopPropagation(),i(!a)},checked:a})}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",children:s.name}),e.jsx(r,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:[(t=s.address)==null?void 0:t.address_1,(d=s.address)==null?void 0:d.city,(o=s.address)==null?void 0:o.country_code].filter(n=>!!n).join(", ")})]})]})},A=x.object({locations:x.array(x.object({id:x.string(),location_id:x.string(),selected:x.boolean()}))}),b=(a,i)=>({locations:a.map(s=>({...s,location_id:s.id,selected:i.has(s.id)}))}),D=({item:a,locations:i})=>{const s=j.useMemo(()=>{var l;return new Set(((l=a.location_levels)==null?void 0:l.map(u=>u.location_id))??[])},a.location_levels),{t}=L(),{handleSuccess:d}=M(),o=k({defaultValues:b(i,s),resolver:F(A)}),{fields:n,update:p}=I({control:o.control,name:"locations"});j.useEffect(()=>{o.setValue("locations",b(i,s).locations)},[s,i]);const{mutateAsync:g}=C(a.id),w=o.handleSubmit(async({locations:l})=>{const[u,f]=l.reduce((c,m)=>(!m.selected&&!s.has(m.location_id)||m.selected&&s.has(m.location_id)||(m.selected?c[0].push(m.location_id):c[1].push(m.location_id)),c),[[],[]]);if(u.length===0&&f.length===0)return d();await g({create:u.map(c=>({location_id:c})),delete:f},{onSuccess:()=>{v.success(t("inventory.toast.updateLocations")),d()},onError:c=>{v.error(c.message)}})});return e.jsx(h.Form,{form:o,children:e.jsxs(B,{onSubmit:w,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(h.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[e.jsxs("div",{className:"text-ui-fg-subtle shadow-elevation-card-rest grid grid-rows-2 divide-y rounded-lg border",children:[e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx(r,{className:"px-2 py-1.5",size:"small",leading:"compact",children:t("fields.title")}),e.jsx(r,{className:"px-2 py-1.5",size:"small",leading:"compact",children:a.title??"-"})]}),e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx(r,{className:"px-2 py-1.5",size:"small",leading:"compact",children:t("fields.sku")}),e.jsx(r,{className:"px-2 py-1.5",size:"small",leading:"compact",children:a.sku})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(r,{size:"small",weight:"plus",leading:"compact",children:t("locations.domain")}),e.jsxs("div",{className:"text-ui-fg-subtle flex w-full justify-between",children:[e.jsx(r,{size:"small",leading:"compact",children:t("locations.selectLocations")}),e.jsxs(r,{size:"small",leading:"compact",children:["(",t("general.countOfTotalSelected",{count:n.filter(l=>l.selected).length,total:i.length}),")"]})]})]}),n.map((l,u)=>e.jsx(T,{selected:l.selected,location:l,onSelect:()=>p(u,{...l,selected:!l.selected})},l.id))]}),e.jsx(h.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(h.Close,{asChild:!0,children:e.jsx(y,{variant:"secondary",size:"small",children:t("actions.cancel")})}),e.jsx(y,{type:"submit",size:"small",isLoading:!1,children:t("actions.save")})]})})]})})},$=()=>{const{id:a}=N(),{t:i}=L(),{inventory_item:s,isPending:t,isError:d,error:o}=_(a),{stock_locations:n,isLoading:p}=z(),g=!t&&!p&&s&&n;if(d)throw o;return e.jsxs(h,{children:[e.jsx(h.Header,{children:e.jsx(S,{children:i("inventory.manageLocations")})}),g&&e.jsx(D,{item:s,locations:n})]})};export{$ as Component};
