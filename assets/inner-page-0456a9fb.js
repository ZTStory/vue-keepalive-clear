import{d as l,q as p,f as d,o as g,c as u,a as i,t as m,i as _}from"./index-87184455.js";const t=new Map,r=s=>{const e=s.data;let n=e==null?void 0:e.api;n=(e==null?void 0:e.api)+((e==null?void 0:e.timestamp)||""),t.has(n)&&(console.debug("postMessageResult",s,n,t),t.get(n)(e),setTimeout(()=>{t.delete(n)},0))};function f(){window.addEventListener("message",r)}function k(){window.removeEventListener("message",r)}function c(s){return new Promise((e,n)=>{if(window.parent){s.timestamp=Date.now(),window.parent.postMessage(s,"*");let o=s.api+s.timestamp;t.set(o,e)}})}function w(s){return new Promise((e,n)=>{s.response.code==="0000"?e(s):n(new Error(`调用 App 接口失败，接口名称：${s.api}`))})}function v(){return c({api:"getLoginToken"}).then(w)}function M(){return c({api:"goBack"})}const T={class:"page_container"},b=_(" 模拟内嵌网页 "),B={name:"InnerPostMessagePromise"},L=l({...B,setup(s){f(),p(()=>{k()});const e=()=>{M()},n=d("--"),o=async()=>{if(n.value==="获取中...")return;n.value="获取中...";const a=(await v()).response;n.value=a.data.loginToken};return(a,h)=>(g(),u("div",T,[b,i("div",{class:"bb_btn mgt_50",onClick:e},"返回上一页"),i("div",{class:"bb_btn mgt_50",onClick:o},"获取登录Token"),i("div",null,"Token："+m(n.value),1)]))}});export{L as default};
