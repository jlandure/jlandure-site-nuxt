import L from"./DocumentDrivenEmpty.fb63fa56.js";import h from"./ContentRenderer.9624cd84.js";import C from"./DocumentDrivenNotFound.63af5d51.js";import{b as H,a as m,ap as k,q as x,aq as R,Q as N,u as o,ar as d,as as g,at as i,T as q,M as w,al as B,o as c,i as D,m as l,w as p,c as _}from"./entry.49c3fcb7.js";import{u as E}from"./head.e22209fc.js";import"./ContentRendererMarkdown.49c99aea.js";const T=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const a=await d[s.name]().then(e=>e.default||e);return()=>w(a,t.attrs,t.slots)}}),$=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const a=k("_route"),e=a===x()?R():a,n=N(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=n.value&&n.value in d,r=e.meta.layoutTransition??g;return i(q,u&&r,{default:()=>i(T,u&&{key:n.value,name:n.value,...t.attrs},t.slots).default()}).default()}}}),j={class:"document-driven-page"},O=m({__name:"document-driven",setup(s){const{page:t,layout:a}=B();return t.value,E(t),(e,n)=>{const u=L,r=h,f=C,y=$;return c(),D("div",j,[l(y,{name:o(a)||"default"},{default:p(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:p(({value:v})=>[l(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{O as default};
