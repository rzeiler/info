if(!self.define){let e,i={};const t=(t,r)=>(t=new URL(t+".js",r).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let n={};const l=e=>t(e,o),f={module:{uri:o},exports:n,require:l};i[o]=Promise.all(r.map((e=>f[e]||l(e)))).then((e=>(s(...e),n)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"info"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"https://rzeiler.github.io/info/css/app.2050af19.css",revision:null},{url:"https://rzeiler.github.io/info/index.html",revision:"411ee107fa13ef0351794920cc3d28d3"},{url:"https://rzeiler.github.io/info/js/app.4a595ccc.js",revision:null},{url:"https://rzeiler.github.io/info/js/chunk-vendors.b656c68a.js",revision:null},{url:"https://rzeiler.github.io/info/manifest.json",revision:"fdc1ac52a8e3ff35a004513ca9eba368"},{url:"https://rzeiler.github.io/info/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
