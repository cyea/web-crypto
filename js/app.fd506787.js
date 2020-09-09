(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/cyea/web-crypto@gh-pages/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("be4f"),n("450d");var r=n("896a"),a=n.n(r),i=(n("0fb7"),n("f529")),s=n.n(i),o=(n("9e1f"),n("6ed5")),c=n.n(o),l=(n("6b30"),n("c284")),u=n.n(l),f=(n("0c67"),n("299c")),d=n.n(f),p=(n("10cb"),n("f3ad")),h=n.n(p),g=(n("1951"),n("eedf")),y=n.n(g),v=(n("915d"),n("e04d")),m=n.n(v),b=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[e._m(0),n("p",{staticClass:"slogan"},[e._v("加密狗-免费的文件加密网站")]),n("Crypto")],1),e._m(1)])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("cf05")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dec"},[n("p",[e._v(" 网站永久域名 "),n("a",{staticStyle:{"text-decoration":"none",color:"red"},attrs:{href:"//dogged.cn"}},[e._v(" dogged.cn ")])]),n("p",[e._v("完全基于浏览器 WebCrypto API 提供的 AES-256-GCM 算法进行加密。")])])}],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"crypto"},[n("div",{staticClass:"custom-file"},[n("label",[n("input",{ref:"customFile",class:[e.isDragOver?"over":"","custom-file-input"],attrs:{type:"file"},on:{change:e.uploadFile,dragenter:function(t){e.isDragOver=!0},dragleave:function(t){e.isDragOver=!1},drop:function(t){e.isDragOver=!1}}}),n("div",{staticClass:"file-placeholder"},[n("span",{staticClass:"file-name"},[e._v(e._s(e.fileInfo))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.fileSize,expression:"fileSize"}],staticClass:"file-size"},[e._v(e._s(e.fileSize))])])])]),n("el-input",{staticClass:"input-key",attrs:{placeholder:"输入加密/解密所需的密码"},model:{value:e.dKey,callback:function(t){e.dKey=t},expression:"dKey"}},[n("el-tooltip",{attrs:{slot:"append",effect:"dark",content:"自动生成一个安全密钥",placement:"left"},slot:"append"},[n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refreshKey}})],1)],1),n("div",{staticClass:"key-check"},[n("p",[e._v("密码强度："+e._s(e.percentageText))]),n("el-progress",{attrs:{percentage:e.percentage,"stroke-width":10,"show-text":!1,status:"warning","stroke-linecap":"square"}})],1),n("div",{staticClass:"operate"},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.encryptFile}},[e._v("加密")]),n("el-button",{attrs:{type:"success",plain:""},on:{click:e.decryptFile}},[e._v("解密")]),e.resetShow?n("el-button",{attrs:{plain:"",type:"danger"},on:{click:e.resetForm}},[e._v("重置")]):e._e()],1),e._m(0),n("div",{staticClass:"result"},e._l(e.resultList,(function(t,r){return n("div",{key:r},[1===t.type?n("resultEncryption",{attrs:{dKey:t.dKey,nameStr:t.nameStr,blobStr:t.blobStr}}):e._e(),n("resultDecryption",{directives:[{name:"show",rawName:"v-show",value:2===t.type,expression:"n.type === 2"}],attrs:{nameStr:t.nameStr,blobStr:t.blobStr}})],1)})),0)],1)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dangerInfo"},[n("div",[e._v(" 快速、安全、离线，完全本地加解密。 ")]),n("div",[e._v(" 请务必"),n("span",[e._v("保存好您的密码")]),e._v("，一旦丢失，您将无法解密您的文件。 ")]),n("div",[e._v(" 文件大小理论不限制，但文件过大，浏览器可能无法读取。 ")])])}],C=(n("fb6a"),n("b0c0"),n("b680"),n("d3b7"),n("ac1f"),n("3ca3"),n("466d"),n("5319"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),k=n("580e"),K=n.n(k),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"result-list"},[n("i",{staticClass:"el-icon-check"}),e._v(" "+e._s(e.nameStr)+" "),n("strong",[e._v("加密成功")]),n("div",{staticClass:"btn-group"},[n("a",{staticClass:"el-button el-button--primary is-plain",staticStyle:{"text-decoration":"none"},attrs:{href:e.blobStr,download:e.nameStr}},[n("i",{staticClass:"el-icon-download"}),e._v(" 已经加密的文件 ")]),n("el-button",{attrs:{type:"primary",icon:"el-icon-key",plain:""},on:{click:e.showKey}},[e._v("解密密钥")])],1)])},F=[],j={props:{nameStr:String,blobStr:String,dKey:String},methods:{showKey:function(){this.$alert(this.dKey,"解密密钥",{showConfirmButton:!1,center:!0,closeOnClickModal:!0,customClass:"my-message-box",callback:function(){}})}}},A=j,R=(n("f714"),n("dfc6"),n("2877")),E=Object(R["a"])(A,O,F,!1,null,"f63b797e",null),$=E.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"result-list"},[n("i",{staticClass:"el-icon-check"}),e._v(" "+e._s(e.nameStr)+" "),n("strong",[e._v("解密成功")]),n("div",{staticClass:"btn-group"},[n("a",{staticClass:"el-button el-button--primary is-plain",staticStyle:{"text-decoration":"none"},attrs:{href:e.blobStr,download:e.nameStr}},[n("i",{staticClass:"el-icon-download"}),e._v(" 已经解密的文件 ")])])])},U=[],N={props:{nameStr:String,blobStr:String}},L=N,M=(n("b0ff"),Object(R["a"])(L,B,U,!1,null,"6b22211e",null)),P=M.exports,z=(n("d81d"),n("c19f"),function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0,a=e.length;r<a;r++)n[r]=e.charCodeAt(r);return t}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=new Uint8Array(e);return window.crypto.getRandomValues(n),n=n.map((function(e){return t.charCodeAt(e%t.length)})),String.fromCharCode.apply(null,n)},I={signature:"Encrypted By yuye",hash:"SHA-512",algoName1:"PBKDF2",algoName2:"AES-GCM",algoLength:256,itr:8e4,salt:window.crypto.getRandomValues(new Uint8Array(16)),perms1:["deriveKey"],perms2:["encrypt","decrypt"]},T={name:"Crypto",components:{resultEncryption:$,resultDecryption:P},data:function(){return{isDragOver:!1,isHaveFile:!1,file:null,fileInfo:"点击选择或拖入文件进行加密/解密",fileSize:null,dKey:"",percentage:0,percentageText:"",resultList:[],loading:null}},computed:{resetShow:function(){return this.isHaveFile||this.dKey}},methods:{addEnterClass:function(){this.isDragOver=!0},dragleave:function(){},uploadFile:function(e){var t=e.target.files[0];if(!t)return this.isHaveFile=!1,this.fileInfo="选择文件进行加密/解密",this.fileSize="",!1;this.file=t,this.isHaveFile=!0,this.fileInfo=t.name;for(var n=t.size,r="",a=["KB","MB","GB","TB","PB","EB","ZB","YB"],i=0,s=n/1024;s>1;s/=1024,i++)r=s.toFixed(2)+" "+a[i];this.fileSize=r||"";var o=/Encrypted#[^ \f\n\r\t\v#]*#/;this.fileInfo.match(o)?this.dKey=this.fileInfo.match(o)[0].replace("Encrypted#","").replace("#",""):this.dKey=""},keyCheckMeter:function(e){e=e.replace(/#/g,""),this.dKey=e;var t=K()(e);this.percentage=25*t.score;var n={0:"非常糟糕",1:"糟糕",2:"一般",3:"强",4:"非常强"};this.percentageText=n[t.score]},refreshKey:function(){var e=D();this.dKey=e},resetForm:function(){this.dKey="",this.$refs.customFile.value="",this.file=null,this.fileInfo="选择文件进行加密/解密",this.fileSize="",this.percentageText=""},importSecretKey:function(e){var t=z(e);return window.crypto.subtle.importKey("raw",t,{name:I.algoName1},!1,I.perms1)},deriveEncryptionSecretKey:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.importSecretKey(e.dKey);case 2:return n=t.sent,t.abrupt("return",window.crypto.subtle.deriveKey({name:I.algoName1,salt:I.salt,iterations:I.itr,hash:{name:I.hash}},n,{name:I.algoName2,length:I.algoLength},!1,I.perms2));case 4:case"end":return t.stop()}}),t)})))()},processFinished:function(e,t,n,r){var a=new Blob(t,{type:"application/octet-stream"}),i=URL.createObjectURL(a);this.resultList.unshift({nameStr:e,type:n,dKey:r,blobStr:i})},encryptFile:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,n.file&&n.dKey){t.next=5;break}n.$message.error("请上传文件或输入密码"),t.next=13;break;case 5:return t.next=7,n.deriveEncryptionSecretKey();case 7:r=t.sent,a=new FileReader,a.onloadstart=Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.loading=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});case 1:case"end":return t.stop()}}),t)}))),a.onload=Object(C["a"])(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=window.crypto.getRandomValues(new Uint8Array(16)),i=new Uint8Array(a.result),e.next=4,window.crypto.subtle.encrypt({iv:t,name:I.algoName2},r,i).then((function(e){n.processFinished("Encrypted#"+n.dKey+"#"+n.file.name,[I.signature,t,I.salt,new Uint8Array(e)],1,n.dKey),n.loading.close(),n.resetForm()})).catch((function(){n.$message.error("加密失败，请稍后再试！")}));case 4:case"end":return e.stop()}}),e)}))),a.onerror=function(){n.$message.error("文件读取失败，可能由于文件过大")},a.readAsArrayBuffer(e.file);case 13:case"end":return t.stop()}}),t)})))()},decryptFile:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,n.file&&n.dKey?(r=new FileReader,r.onloadstart=function(){n.loading=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},r.onload=Object(C["a"])(regeneratorRuntime.mark((function e(){var t,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.importSecretKey(n.dKey);case 2:return t=e.sent,e.abrupt("return",window.crypto.subtle.deriveKey({name:I.algoName1,salt:new Uint8Array(r.result.slice(I.signature.length+16,I.signature.length+32)),iterations:I.itr,hash:{name:I.hash}},t,{name:I.algoName2,length:I.algoLength},!1,I.perms2));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,t();case 3:return a=e.sent,i=new Uint8Array(r.result.slice(I.signature.length,I.signature.length+16)),s=new Uint8Array(r.result.slice(I.signature.length+32)),e.next=8,window.crypto.subtle.decrypt({iv:i,name:I.algoName2},a,s).then((function(e){var t=/Encrypted#[^ \f\n\r\t\v#]*#/,r=n.file.name;r.match(t)&&(r=r.replace(r.match(t)[0],"")),n.processFinished(r,[new Uint8Array(e)],2,n.dKey),n.loading.close(),n.resetForm()})).catch((function(){n.$message.error("您的解密密钥是错误的!"),n.loading.close()}));case 8:case"end":return e.stop()}}),e)}))),r.onerror=function(){n.$message.error("文件读取失败，可能由于文件过大")},r.readAsArrayBuffer(n.file)):n.$message.error("请上传文件或输入密码");case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){},watch:{dKey:"keyCheckMeter"}},H=T,G=(n("b14e"),Object(R["a"])(H,S,x,!1,null,"2050f00a",null)),V=G.exports,J={name:"app",components:{Crypto:V},data:function(){return{}},mounted:function(){}},q=J,W=(n("5c0b"),Object(R["a"])(q,w,_,!1,null,null,null)),Y=W.exports;n("0fae");b["default"].use(m.a),b["default"].use(y.a),b["default"].use(h.a),b["default"].use(d.a),b["default"].use(u.a),b["default"].prototype.$alert=c.a.alert,b["default"].prototype.$message=s.a,b["default"].prototype.$loading=a.a.service,b["default"].config.productionTip=!1,new b["default"]({render:function(e){return e(Y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5c3f":function(e,t,n){},"88a7":function(e,t,n){},"9c0c":function(e,t,n){},b0ff:function(e,t,n){"use strict";var r=n("bb96"),a=n.n(r);a.a},b14e:function(e,t,n){"use strict";var r=n("d9eb"),a=n.n(r);a.a},bb96:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.51b94632.png"},d9eb:function(e,t,n){},dfc6:function(e,t,n){"use strict";var r=n("88a7"),a=n.n(r);a.a},f714:function(e,t,n){"use strict";var r=n("5c3f"),a=n.n(r);a.a}});
//# sourceMappingURL=app.fd506787.js.map