(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/cyea/web-crypto@gh-pages/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3496:function(e,t,r){"use strict";var n=r("eaaf"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("46a1"),r("450d");var n=r("e5f2"),a=r.n(n),i=(r("be4f"),r("896a")),s=r.n(i),o=(r("0fb7"),r("f529")),c=r.n(o),l=(r("9e1f"),r("6ed5")),u=r.n(l),f=(r("6b30"),r("c284")),p=r.n(f),d=(r("0c67"),r("299c")),h=r.n(d),g=(r("10cb"),r("f3ad")),v=r.n(g),y=(r("1951"),r("eedf")),m=r.n(y),b=(r("915d"),r("e04d")),w=r.n(b),_=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header"),r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"title"},[e._v("加密狗")]),r("p",{staticClass:"slogan"},[e._v("免费的文件加密")]),r("Crypto")],1),e._m(1)])},C=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:"/logo.svg"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("section",{staticClass:"link"},[r("div",{staticClass:"dec"},[r("span",{staticClass:"title"},[e._v("友情链接:")]),r("a",{attrs:{target:"_blank",href:"//www.chenyeah.com"}},[e._v(" 羽叶 ")]),r("a",{attrs:{target:"_blank",href:"//music.elem.fun"}},[e._v(" 元素音乐 ")])])]),r("section",{staticClass:"copyright"},[r("a",{attrs:{href:"https://wws.lanzous.com/i2pFRgvrs1i",target:"_blank",rel:"noopener noreferrer"}},[e._v(" 加密狗离线版本下载地址 ")]),r("a",{attrs:{href:"https://support.qq.com/products/283818",target:"_blank",rel:"noopener noreferrer"}},[e._v(" 意见与建议 ")])])])}],k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"crypto"},[r("div",{staticClass:"custom-file"},[r("label",[r("input",{ref:"customFile",class:[e.isDragOver?"over":"","custom-file-input"],attrs:{type:"file"},on:{change:e.uploadFile,dragenter:function(t){e.isDragOver=!0},dragleave:function(t){e.isDragOver=!1},drop:function(t){e.isDragOver=!1}}}),r("div",{staticClass:"file-placeholder"},[r("span",{staticClass:"file-name"},[e._v(e._s(e.fileInfo))]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.fileSize,expression:"fileSize"}],staticClass:"file-size"},[e._v(e._s(e.fileSize))])])])]),r("el-input",{staticClass:"input-key",attrs:{placeholder:"请输入解密密码"},model:{value:e.dKey,callback:function(t){e.dKey=t},expression:"dKey"}},[r("el-tooltip",{attrs:{slot:"append",effect:"dark",content:"自动生成一个安全密钥",placement:"left"},slot:"append"},[r("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refreshKey}})],1)],1),r("div",{staticClass:"key-check"},[r("p",[e._v("密码强度："+e._s(e.percentageText))]),r("el-progress",{attrs:{percentage:e.percentage,"stroke-width":10,"show-text":!1,status:"warning","stroke-linecap":"square"}})],1),r("div",{staticClass:"operate"},[r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.encryptFile}},[e._v("加密")]),r("el-button",{attrs:{type:"success",plain:""},on:{click:e.decryptFile}},[e._v("解密")]),e.resetShow?r("el-button",{attrs:{plain:"",type:"danger"},on:{click:e.resetForm}},[e._v("重置")]):e._e()],1),e._m(0),r("div",{staticClass:"result"},e._l(e.resultList,(function(t,n){return r("div",{key:n},[1===t.type?r("resultEncryption",{attrs:{dKey:t.dKey,nameStr:t.nameStr,blobStr:t.blobStr}}):e._e(),r("resultDecryption",{directives:[{name:"show",rawName:"v-show",value:2===t.type,expression:"n.type === 2"}],attrs:{nameStr:t.nameStr,blobStr:t.blobStr}})],1)})),0)],1)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dangerInfo"},[r("ul",[r("li",[e._v(" 基于浏览器"),r("span",[e._v("AES-256-GCM")]),e._v("算法进行加密。快速、安全、离线。 ")]),r("li",[e._v(" 为防止因混淆而丢失密码,密码会在加密的下载文件名 "),r("span",[e._v("#")]),e._v(" 之间。 ")]),r("li",[e._v(" 请务必"),r("span",[e._v("保存好您的密码")]),e._v("，一旦丢失，您将无法解密您的文件。 ")]),r("li",[e._v("文件大小理论不限制，但文件过大，浏览器可能无法读取。")]),r("li",[r("span",[e._v("为保证唯一性,本网站不能和其他文件加密网站混用。")])])])])}],K=(r("fb6a"),r("b0c0"),r("b680"),r("d3b7"),r("ac1f"),r("3ca3"),r("466d"),r("5319"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),O=r("580e"),F=r.n(O),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"result-list"},[r("i",{staticClass:"el-icon-check"}),e._v(" "+e._s(e.nameStr)+" "),r("strong",[e._v("加密成功")]),r("div",{staticClass:"btn-group"},[r("a",{staticClass:"el-button el-button--primary is-plain",staticStyle:{"text-decoration":"none"},attrs:{href:e.blobStr,download:e.nameStr}},[r("i",{staticClass:"el-icon-download"}),e._v(" 已经加密的文件 ")]),r("el-button",{attrs:{type:"primary",icon:"el-icon-key",plain:""},on:{click:e.showKey}},[e._v("解密密钥")])],1)])},R=[],$={props:{nameStr:String,blobStr:String,dKey:String},methods:{showKey:function(){this.$alert(this.dKey,"解密密钥",{showConfirmButton:!1,center:!0,closeOnClickModal:!0,customClass:"my-message-box",callback:function(){}})}}},A=$,E=(r("c156"),r("dfc6"),r("2877")),B=Object(E["a"])(A,j,R,!1,null,"5e37bcc9",null),U=B.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"result-list"},[r("i",{staticClass:"el-icon-check"}),e._v(" "+e._s(e.nameStr)+" "),r("strong",[e._v("解密成功")]),r("div",{staticClass:"btn-group"},[r("a",{staticClass:"el-button el-button--primary is-plain",staticStyle:{"text-decoration":"none"},attrs:{href:e.blobStr,download:e.nameStr}},[r("i",{staticClass:"el-icon-download"}),e._v(" 已经解密的文件 ")])])])},M=[],N={props:{nameStr:String,blobStr:String}},z=N,T=(r("3496"),Object(E["a"])(z,L,M,!1,null,"af570d92",null)),D=T.exports,P=(r("d81d"),r("c19f"),function(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0,a=e.length;n<a;n++)r[n]=e.charCodeAt(n);return t}),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=new Uint8Array(e);return window.crypto.getRandomValues(r),r=r.map((function(e){return t.charCodeAt(e%t.length)})),String.fromCharCode.apply(null,r)},H={signature:"Encrypted By yuye",hash:"SHA-512",algoName1:"PBKDF2",algoName2:"AES-GCM",algoLength:256,itr:8e4,salt:window.crypto.getRandomValues(new Uint8Array(16)),perms1:["deriveKey"],perms2:["encrypt","decrypt"]},q={name:"Crypto",components:{resultEncryption:U,resultDecryption:D},data:function(){return{isDragOver:!1,isHaveFile:!1,file:null,fileInfo:"点击选择或拖入文件进行加密/解密",fileSize:null,dKey:"",percentage:0,percentageText:"",resultList:[],loading:null}},computed:{resetShow:function(){return this.isHaveFile||this.dKey}},methods:{addEnterClass:function(){this.isDragOver=!0},dragleave:function(){},uploadFile:function(e){var t=e.target.files[0];if(!t)return this.isHaveFile=!1,this.fileInfo="选择文件进行加密/解密",this.fileSize="",!1;this.file=t,this.isHaveFile=!0,this.fileInfo=t.name;for(var r=t.size,n="",a=["KB","MB","GB","TB","PB","EB","ZB","YB"],i=0,s=r/1024;s>1;s/=1024,i++)n=s.toFixed(2)+" "+a[i];this.fileSize=n||"";var o=/Encrypted#[^ \f\n\r\t\v#]*#/;this.fileInfo.match(o)?this.dKey=this.fileInfo.match(o)[0].replace("Encrypted#","").replace("#",""):this.dKey=""},keyCheckMeter:function(e){e=e.replace(/#/g,""),this.dKey=e;var t={1:"非常糟糕",2:"糟糕",3:"一般",4:"强",5:"非常强"};if(e){var r=F()(e),n=r.score+1;this.percentage=20*n,this.percentageText=t[n]}else this.percentage=0,this.percentageText=""},refreshKey:function(){var e=I();this.dKey=e},resetForm:function(){this.dKey="",this.$refs.customFile.value="",this.file=null,this.fileInfo="选择文件进行加密/解密",this.fileSize="",this.percentageText=""},importSecretKey:function(e){var t=P(e);return window.crypto.subtle.importKey("raw",t,{name:H.algoName1},!1,H.perms1)},deriveEncryptionSecretKey:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.importSecretKey(e.dKey);case 2:return r=t.sent,t.abrupt("return",window.crypto.subtle.deriveKey({name:H.algoName1,salt:H.salt,iterations:H.itr,hash:{name:H.hash}},r,{name:H.algoName2,length:H.algoLength},!1,H.perms2));case 4:case"end":return t.stop()}}),t)})))()},processFinished:function(e,t,r,n){var a=new Blob(t,{type:"application/octet-stream"}),i=URL.createObjectURL(a);this.resultList.unshift({nameStr:e,type:r,dKey:n,blobStr:i})},encryptFile:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e,r.file&&r.dKey){t.next=5;break}r.$message.error("请上传文件或输入密码"),t.next=13;break;case 5:return t.next=7,r.deriveEncryptionSecretKey();case 7:n=t.sent,a=new FileReader,a.onloadstart=Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.loading=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});case 1:case"end":return t.stop()}}),t)}))),a.onload=Object(K["a"])(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=window.crypto.getRandomValues(new Uint8Array(16)),i=new Uint8Array(a.result),e.next=4,window.crypto.subtle.encrypt({iv:t,name:H.algoName2},n,i).then((function(e){r.processFinished("Encrypted#"+r.dKey+"#"+r.file.name,[H.signature,t,H.salt,new Uint8Array(e)],1,r.dKey),r.loading.close(),r.resetForm()})).catch((function(){r.$message.error("加密失败，请稍后再试！")}));case 4:case"end":return e.stop()}}),e)}))),a.onerror=function(){r.$message.error("文件读取失败，可能由于文件过大")},a.readAsArrayBuffer(e.file);case 13:case"end":return t.stop()}}),t)})))()},decryptFile:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,r.file&&r.dKey?(n=new FileReader,n.onloadstart=function(){r.loading=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},n.onload=Object(K["a"])(regeneratorRuntime.mark((function e(){var t,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.importSecretKey(r.dKey);case 2:return t=e.sent,e.abrupt("return",window.crypto.subtle.deriveKey({name:H.algoName1,salt:new Uint8Array(n.result.slice(H.signature.length+16,H.signature.length+32)),iterations:H.itr,hash:{name:H.hash}},t,{name:H.algoName2,length:H.algoLength},!1,H.perms2));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,t();case 3:return a=e.sent,i=new Uint8Array(n.result.slice(H.signature.length,H.signature.length+16)),s=new Uint8Array(n.result.slice(H.signature.length+32)),e.next=8,window.crypto.subtle.decrypt({iv:i,name:H.algoName2},a,s).then((function(e){var t=/Encrypted#[^ \f\n\r\t\v#]*#/,n=r.file.name;n.match(t)&&(n=n.replace(n.match(t)[0],"")),r.processFinished(n,[new Uint8Array(e)],2,r.dKey),r.loading.close(),r.resetForm()})).catch((function(){r.$message.error("您的解密密钥是错误的!"),r.loading.close()}));case 8:case"end":return e.stop()}}),e)}))),n.onerror=function(){r.$message.error("文件读取失败，可能由于文件过大")},n.readAsArrayBuffer(r.file)):r.$message.error("请上传文件或输入密码");case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){},watch:{dKey:"keyCheckMeter"}},G=q,V=(r("cfb6"),Object(E["a"])(G,k,x,!1,null,"5ea4d82f",null)),J=V.exports,Y={name:"app",components:{Crypto:J},mounted:function(){this.$notify({title:"提示",dangerouslyUseHTMLString:!0,message:"网站永久地址 <a style='color:#298afc;text-decoration:none;' href='https://dogged.cn'>https://dogged.cn</a>",type:"warning",duration:0})}},Z=Y,Q=(r("5c0b"),Object(E["a"])(Z,S,C,!1,null,null,null)),W=Q.exports;r("0fae");_["default"].use(w.a),_["default"].use(m.a),_["default"].use(v.a),_["default"].use(h.a),_["default"].use(p.a),_["default"].prototype.$alert=u.a.alert,_["default"].prototype.$message=c.a,_["default"].prototype.$loading=s.a.service,_["default"].prototype.$notify=a.a,_["default"].config.productionTip=!1,new _["default"]({render:function(e){return e(W)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},6797:function(e,t,r){},"88a7":function(e,t,r){},"9c0c":function(e,t,r){},c156:function(e,t,r){"use strict";var n=r("cff0"),a=r.n(n);a.a},cfb6:function(e,t,r){"use strict";var n=r("6797"),a=r.n(n);a.a},cff0:function(e,t,r){},dfc6:function(e,t,r){"use strict";var n=r("88a7"),a=r.n(n);a.a},eaaf:function(e,t,r){}});
//# sourceMappingURL=app.e0ff498f.js.map