if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}})).then(e=>{const s=c(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-a3b7f982"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_assets/index.cc653326.js",revision:"25ceeb0edeb7b7f2a350450b26382180"},{url:"_assets/style.3345a8d1.css",revision:"c4b18348ea788a6e8162ce4ca2f43b78"},{url:"css/global.css",revision:"8d7c5214e31c1b762a44f14ceda00664"},{url:"css/loading.css",revision:"937280b8d476a355a71557ee057a4ade"},{url:"index.html",revision:"d1ecb00b3f5c50483c1ec124e19708ad"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
