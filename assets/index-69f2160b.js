import{l as f,m as v,n as m,d as x,f as g,u as y,g as h,h as k,o as i,c as r,a as c,e as d,F as b,r as L,p as I,b as C,t as P,j as S,k as A}from"./index-87184455.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";function N(s){const e=f({x:0,y:0});v(()=>{var t;e.x===0&&e.y===0||(t=s.value)==null||t.scrollTo({top:e.y,left:e.x})}),m(()=>{var t,a;e.x=((t=s.value)==null?void 0:t.scrollLeft)??0,e.y=((a=s.value)==null?void 0:a.scrollTop)??0})}const w=s=>(I("data-v-94b65210"),s=s(),C(),s),D={class:"page_container"},F={class:"nav_bar"},K=w(()=>c("span",{class:"nav_title"},"LastPositionIndexPage",-1)),R={name:"LastPositionIndex"},T=x({...R,setup(s){const e=g();N(e);const t=y(),a=Array.from({length:100},(n,o)=>o+1),p=()=>{t.push("LastPositionNext")},l=h();return k((n,o)=>{console.log(String(n.name)),["Home"].includes(String(n.name))?S(l):A(l)}),(n,o)=>(i(),r("div",D,[c("div",F,[c("span",{class:"back_btn",onClick:o[0]||(o[0]=_=>d(t).back())}," < "),K]),c("div",{ref_key:"scroll",ref:e,class:"flex_1 ofa w_100"},[(i(!0),r(b,null,L(d(a),(_,u)=>(i(),r("div",{key:u,class:"list_item",onClick:p},P(_),1))),128))],512)]))}});const V=B(T,[["__scopeId","data-v-94b65210"]]);export{V as default};
