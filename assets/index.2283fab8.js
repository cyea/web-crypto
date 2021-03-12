import{r as e,a as t}from"./vendor.6ad4fa42.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const l=new URL(e,a);if(self[t].moduleMap[l])return n(self[t].moduleMap[l]);const c=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){s(new Error(`Failed to import: ${e}`)),r(o)},onload(){n(self[t].moduleMap[l]),r(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/assets/");function n(t){return e.createElement("div",{className:"spin-nested-loading"},t.spinning&&e.createElement("div",{className:"spin spin-spinning"},e.createElement("span",{className:"spin-dot spin-dot-spin"},e.createElement("i",{className:"spin-dot-item"}),e.createElement("i",{className:"spin-dot-item"}),e.createElement("i",{className:"spin-dot-item"}),e.createElement("i",{className:"spin-dot-item"}))),e.createElement("div",{className:`spin-container ${t.spinning?"spin-blur":""} `},t.children))}function a(t){const n=t.percent?t.percent>100?100:t.percent:0;return e.createElement("div",{className:"progress-line progress-status-active"},e.createElement("div",{className:"progress-bg"},e.createElement("div",{className:"progress-in",style:{width:`${n}%`,height:t.strokeWidth?`${t.strokeWidth}px`:"10px",backgroundColor:t.strokeColor||"rgb(135, 208, 104)"}})),t.showInfo&&e.createElement("div",{className:"percent-text"},t.percentNumber,"%"))}function r(t){const n={encrypt:"加密",decrypt:"解密"},a=Object.keys(t.result).length>0?t.result:null;return e.createElement("div",{className:"result"},a&&e.createElement("div",{className:"result-list"},e.createElement("a",{className:"file-name"},a.nameStr),e.createElement("strong",null,n[a.type],"成功"),e.createElement("div",{className:"btn-group"},e.createElement("a",{className:"download-link",target:"_blank",href:a.blobStr,download:a.nameStr},e.createElement("span",null,"点击下载已经",n[a.type],"的文件")),"encrypt"===a.type&&e.createElement("span",{className:"decryption-key"},"密钥 :",e.createElement("span",null," ",a.password)))))}const s={signature:"Encrypted By yuye",hash:"SHA-512",algoName1:"PBKDF2",algoName2:"AES-GCM",algoLength:256,itr:8e4,salt:window.crypto.getRandomValues(new Uint8Array(16)),perms1:["deriveKey"],perms2:["encrypt","decrypt"]},l=async e=>new Promise((t=>{const n=new FileReader;n.onload=()=>{t([!0,n.result])},n.onerror=()=>{t([!1,"文件读取失败，可能由于文件过大"])},n.readAsArrayBuffer(e)})),c=e=>{let t=(e=>{const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let a=0,r=e.length;a<r;a++)n[a]=e.charCodeAt(a);return t})(e);return window.crypto.subtle.importKey("raw",t,{name:s.algoName1},!1,s.perms1)},o=async(e,t)=>{const[n,a]=await l(e);if(!n)return[!1,a];const r=await(async e=>{let t=await c(e);return window.crypto.subtle.deriveKey({name:s.algoName1,salt:s.salt,iterations:s.itr,hash:{name:s.hash}},t,{name:s.algoName2,length:s.algoLength},!1,s.perms2)})(t),o=window.crypto.getRandomValues(new Uint8Array(16)),i=new Uint8Array(a);return await window.crypto.subtle.encrypt({iv:o,name:s.algoName2},r,i).then((function(n){return[!0,{nameStr:"Encrypted#"+t+"#"+e.name,buffer:[s.signature,o,s.salt,new Uint8Array(n)],type:"encrypt",password:t}]})).catch((function(){return[!1,"加密失败，请刷新页面再试！"]}))},i=async(e,t)=>{const[n,a]=await l(e);if(!n)return[!1,a];const r=await(async(e,t)=>{let n=await c(e);return window.crypto.subtle.deriveKey({name:s.algoName1,salt:new Uint8Array(t.slice(s.signature.length+16,s.signature.length+32)),iterations:s.itr,hash:{name:s.hash}},n,{name:s.algoName2,length:s.algoLength},!1,s.perms2)})(t,a),o=new Uint8Array(a.slice(s.signature.length,s.signature.length+16)),i=new Uint8Array(a.slice(s.signature.length+32));return await window.crypto.subtle.decrypt({iv:o,name:s.algoName2},r,i).then((function(n){let a=/Encrypted#[^ \f\n\r\t\v#]*#/,r=e.name;r.match(a)&&(r=r.replace(r.match(a)[0],""));return[!0,{nameStr:r,buffer:[new Uint8Array(n)],type:"decrypt",password:t}]})).catch((function(){return[!1,"您的解密密钥是错误的!"]}))};function m(t){const[n,s]=e.useState(!1),[l,c]=e.useState(null),m=e.createRef(),[p,u]=e.useState("选择文件进行加密/解密"),[d,g]=e.useState(""),[y,f]=e.useState(""),[h,w]=e.useState(0),[E,N]=e.useState(""),[v,b]=e.useState("#b3d8ff"),[k,S]=e.useState({}),A=()=>{c(null),f(""),u("选择文件进行加密/解密"),g(""),w(0),N("")};e.useEffect((()=>{l||(m.current.value="")}),[l]);const U=e=>{let t=[{key:0,str:"糟糕",per:10,color:"#f73131"},{key:1,str:"勉强",per:30,color:"#f56c6c"},{key:2,str:"一般",per:60,color:"#e6a23c"},{key:3,str:"很强",per:90,color:"#87d068"},{key:4,str:"超强",per:100,color:"#87d068"}];if(e){const n=(e=>{let t=0;return(e=e?e.toString():"").length<=3||e.length<=4&&/^[0-9]*$/.test(e)||(/\d/.test(e)&&t++,/[a-z]/.test(e)&&t++,/[A-Z]/.test(e)&&t++,/\W/.test(e)&&t++),t})(e),a=t.find((e=>e.key===n));w(a.per),b(a.color),N(a.str)}else w(0),b("#f5f5f5"),N("")},L=e=>{const{nameStr:t,buffer:n,type:a,password:r}=e,s=new Blob(n,{type:"application/octet-stream"}),l=URL.createObjectURL(s);S({nameStr:t,password:r,type:a,blobStr:l})};return e.createElement("div",{className:"crypto"},e.createElement("label",{className:"file-upload"},e.createElement("input",{type:"file",ref:m,className:"custom-file-input "+(n?"over":""),onDragEnter:()=>s(!0),onDragLeave:()=>s(!1),onDrop:()=>s(!1),onChange:e=>{const t=e.target.files[0];if(!t)return c(null),u("选择文件进行加密/解密"),g(""),!1;c(t),u(t.name);let n=t.size;g((e=>{let t=1e3;/macintosh|mac os x/i.test(navigator.userAgent)?t=1e3:/windows|win32/i.test(navigator.userAgent)&&(t=1024);let n=e+" Bytes";for(let a=["KB","MB","GB","TB","PB","EB","ZB","YB"],r=0,s=e/t;s>1;s/=t,r++)n=Math.floor(100*s)/100+" "+a[r];return n})(n));let a=/Encrypted#[^ \f\n\r\t\v#]*#/;if(t.name.match(a)){const e=t.name.match(a)[0].replace("Encrypted#","").replace("#","");f(e),U(e)}else f("")}}),e.createElement("div",{className:"file-placeholder"},e.createElement("span",{className:"file-name"},p),d&&e.createElement("span",{className:"file-size"},d),e.createElement("span",{className:"file-select"},"选择文件"))),e.createElement("div",{className:"key"},e.createElement("input",{type:"text",placeholder:"请输入密码/右边按钮自动生成",className:"key-input",spellCheck:"false",value:y,onChange:e=>{let t=e.target.value;t=t.replace(/#/g,""),f(t),U(t)}}),e.createElement("button",{onClick:()=>{const e=((e=4)=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n=new Uint8Array(e);return window.crypto.getRandomValues(n),n=n.map((e=>t.charCodeAt(e%t.length))),String.fromCharCode.apply(null,n)})();f(e),U(e)},title:"自动生成密码",className:"key-btn"},e.createElement("img",{className:"key-refresh",src:"/assets/refresh.0a93121d.svg",alt:""}))),e.createElement("div",{className:"key-check"},e.createElement("div",null,"密码强度：",E),e.createElement(a,{percent:h,strokeColor:v})),e.createElement("div",{className:"operate"},e.createElement("button",{className:"primary",onClick:async()=>{if(!l||!y)return alert("请上传文件或输入密码");t.changeLoading(!0);const[e,n]=await o(l,y);if(!e)return alert(n);L(n),A(),t.changeLoading(!1)}},"加密"),e.createElement("button",{className:"success",onClick:async()=>{if(!l||!y)return alert("请上传文件或输入密码");t.changeLoading(!0);const[e,n]=await i(l,y);if(!e)return alert(n);L(n),A(),t.changeLoading(!1)}},"解密"),e.createElement("button",{className:"danger",onClick:()=>{window.location.reload()}},"重置")),e.createElement(r,{result:k}))}function p(){const[t,a]=e.useState(!1);return e.createElement(n,{spinning:t},e.createElement(m,{changeLoading:e=>a(e)}))}t.render(e.createElement(e.StrictMode,null,e.createElement(p,null)),document.getElementById("crypto-container"));