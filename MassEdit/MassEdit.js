(()=>{"use strict";var e={113:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},632:e=>{e.exports=function(e){return e[1]}},814:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(632),r=i.n(n),a=i(113),o=i.n(a)()(r());o.push([e.id,".bearbintools-loger .loger-clear{font-size:.9em;font-weight:400;margin-left:.3em}.bearbintools-loger .loger-body{background:hsla(0,0%,100%,.7);border:1px solid #ccc;display:flow-root;padding:.3em}.bearbintools-loger .loger-filter{float:right;padding:.4em}.bearbintools-loger .loger-filter>div{border-radius:.3em;cursor:pointer;margin-bottom:.2em;padding-right:.2em}.bearbintools-loger .loger-filter>div.loger-filter-selected{background-color:hsla(0,0%,50%,.07)}.bearbintools-loger .loger-filter .loger-filter-icon{display:inline-block;height:1em;line-height:1em;text-align:center;width:1.2em}.bearbintools-loger .loger-lines{font-family:monospace;list-style:inside;max-height:20em;overflow-y:auto}.bearbintools-loger .loger-lines>li a{color:inherit;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}",""]);const s=o},234:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(632),r=i.n(n),a=i(113),o=i.n(a)()(r());o.push([e.id,".rootpage-Special_MassEdit #firstHeading{align-items:flex-end;display:flex;flex-wrap:wrap;justify-content:space-between}.rootpage-Special_MassEdit #firstHeading>div{font-size:.6em}.rootpage-Special_MassEdit #bodyContent{padding-right:0}.rootpage-Special_MassEdit #bodyContent #mw-content-text h5{margin-bottom:0}.rootpage-Special_MassEdit #bodyContent #mw-content-text textarea{line-height:1.3}.rootpage-Special_MassEdit #bodyContent #mw-content-text>ul{list-style:inside!important;margin:0 0 0 .2em!important}#me-regex{align-items:center;display:flex;justify-content:space-between;margin-top:.3rem}#me-regex-note li{margin-bottom:0;margin-top:0}#me-page-lists{display:flex;gap:.3em}#me-page-lists>div{flex-grow:1}#me-page-lists>div textarea{resize:none}#me-pages-note{margin-bottom:.6em}.me-panel{display:flex;gap:.1rem}.me-panel+.me-panel{margin-top:.4em}#me-edit-panel #me-interval{flex:0 0 5.5em}#me-edit-panel #me-summary,#me-preview-panel .oo-ui-textInputWidget{max-width:none}#me-retry{margin-top:.3em}#me-retry #me-use-retry{display:inline}#me-retry #me-use-retry .oo-ui-fieldLayout-body{display:inline;max-width:unset}#me-retry #me-use-retry .oo-ui-fieldLayout-body>span{display:inline}#me-retry #me-use-retry .oo-ui-checkboxInputWidget-checkIcon{top:0}#me-retry #me-use-retry:after{content:unset}#me-retry #me-retry-times{display:inline-block;width:3em}#me-regex-help-list{list-style:inside;-webkit-user-select:none;-moz-user-select:none;user-select:none}#me-regex-help-list li{line-height:1.6;margin-bottom:1px}#me-regex-help-list code{border:1px solid #ddd;cursor:text;padding:1px 3px;-webkit-user-select:all;-moz-user-select:all;user-select:all}",""]);const s=o},83:e=>{var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var a={},o=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var m=i(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var g=r(u,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:g,references:1})}o.push(p)}return o}function r(e,t){var i=t.domAPI(t);i.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=i(a[o]);t[s].references--}for(var l=n(e,r),c=0;c<a.length;c++){var d=i(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},52:e=>{var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},247:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},483:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},128:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,r&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var a=i.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},748:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0;const n=e=>{const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.children[0]};var r=i(83),a=i.n(r),o=i(128),s=i.n(o),l=i(52),c=i.n(l),d=i(483),p=i.n(d),m=i(247),u=i.n(m),g=i(748),f=i.n(g),h=i(814),y={};y.styleTagTransform=f(),y.setAttributes=p(),y.insert=c().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=u();a()(h.A,y);h.A&&h.A.locals&&h.A.locals;class w{_logTypes={success:{icon:"✓",color:"#333",text:"完成"},warn:{icon:"!",color:"#f28500",text:"警告"},error:{icon:"✕",color:"#eb3941",text:"出错"}};element;headline;body=n('<div class="loger-body"></div>');logerLines=n('<ul class="loger-lines"></ul>');logDetails=[];filterButtons={};constructor(e=[],t="",i="h3"){e.length>0&&(this._logTypes=e.reduce(((e,{name:t,icon:i,color:n,text:r})=>(e[t]={icon:i,color:n,text:r},e)),{}));for(const e in this._logTypes)this._logTypes[e].show=!0;this.headline=n(`<${i} class="loger-headline"></${i}>`);const r=n('<a class="loger-clear">[清空]</a>');r.addEventListener("click",this.clear.bind(this));const a=n('<nav class="loger-filter"></nav>');for(const[e,{icon:t,color:i,text:r}]of Object.entries(this._logTypes)){const o=n(`<div class="loger-filter-selected loger-${e}" style="color:${i}"></div>`),s=n('<span class="loger-filter-icon"></span>');s.append(t);const l=n('<span class="loger-filter-count">0</span>');o.append(s,l,` ${r}`),o.addEventListener("click",(()=>{this._logTypes[e].show?(o.classList.remove("loger-filter-selected"),this.logerLines.classList.add(`loger-${e}-hidden`),this.logDetails.filter((t=>t.type===e)).forEach((e=>{e.element.style.display="none"})),this._logTypes[e].show=!1):(o.classList.add("loger-filter-selected"),this.logerLines.classList.remove(`loger-${e}-hidden`),this.logDetails.filter((t=>t.type===e)).forEach((e=>{e.element.style.display=""})),this._logTypes[e].show=!0)})),this.filterButtons[e]={button:o,countElement:l},a.appendChild(o)}this.element=n(`<div class="bearbintools-loger" id="${t||""}"></div>`),this.headline.append("日志",r),this.body.append(a,this.logerLines),this.element.append(this.headline,this.body)}record(e,t="normal",i=(new Date).toLocaleTimeString()){const n=document.createElement("li");return n.classList.add("loger-record",`loger-${t}`),n.innerHTML=`${i} - ${e}`,n.style.color=this._logTypes[t]?.color||"#222",!1===this._logTypes[t]?.show&&(n.style.display="none"),this.logerLines.appendChild(n),this.logerLines.scrollTop=this.logerLines.scrollHeight,this.logDetails.push({element:n,type:t}),this.filterButtons[t]&&(this.filterButtons[t].countElement.innerText=String(+this.filterButtons[t].countElement.innerText+1)),n}clear(){this.logDetails.length=0,this.logerLines.innerHTML="";for(const e in this.filterButtons)this.filterButtons[e].countElement.innerText="0"}}const b=async(e,t=["page","subcat","file"])=>{const i=new mw.Api,n=[];if(mw.config.get("wgUserGroups").some((e=>["bot","flood","patroller","sysop"].includes(e)))){let r="";for(;void 0!==r;){const a=await i.post({action:"query",list:"categorymembers",cmlimit:"max",cmtitle:e,cmtype:t,cmcontinue:r});a.query.categorymembers[0]&&n.concat(a.query.categorymembers.map((({title:e})=>e))),r=a.continue?.cmcontinue}}else{const i=async e=>{const r=$(await $.ajax(e)),a=t.map((e=>{switch(e){case"page":return"#mw-pages li a";case"subcat":return"#mw-subcategories li a";case"file":return"#mw-category-media li a.galleryfilename"}})).join(","),o=r.find(a).map(((e,t)=>t.classList.contains("CategoryTreeLabel")?`Category:${$(t).text()}`:t.classList.contains("galleryfilename")?`File:${$(t).text()}`:$(t).text())).get();if(n.push(...o),t.includes("page")){const e=r.find('a[href*="&pagefrom="]');e.length&&await i(e.eq(0).attr("href"))}if(t.includes("subcat")){const e=r.find('a[href*="&subcatfrom="]');e.length&&await i(e.eq(0).attr("href"))}if(t.includes("file")){const e=r.find('a[href*="&filefrom="]');e.length&&await i(e.eq(0).attr("href"))}};await i(`/${e}?useskin=vector&safemode=1`)}return n},v=async e=>{const t=new mw.Api,i=await t.post({action:"query",prop:"revisions",titles:e,rvprop:"content"}),[n]=Object.values(i.query.pages);if("revisions"in n)return n.revisions?.[0]["*"];if("missing"in n)throw"missingtitle"};const x=async(e,t,i=!1)=>{const n=new mw.Api;return function(e,t=!1,i,n){const r=$(`<td colspan="${e?2:1}" class="diff-otitle" />`),a=$(`<td colspan="${e?2:1}" class="diff-ntitle" />`);Array.isArray(i)?r.append(...i):r.append(i||"旧版本"),Array.isArray(n)?a.append(...n):a.append(n||"新版本");const o=$('<tr class="diff-title" />').append(r,a);return $('<table class="diff diff-contentalign-left" data-mw="interface" />').append(e&&'<colgroup><col class="diff-marker"><col class="diff-content"><col class="diff-marker"><col class="diff-content"></colgroup>',$("<tbody />").append(t?o:"",e||'<tr><td colspan="2" class="diff-notice"><div class="mw-diff-empty">（没有差异）</div></td></tr>'))}((await n.post({action:"compare",fromtext:e,totext:t,topst:!0,fromtitle:"PAGENAME"})).compare["*"],i)},k=e=>e.split("\n").filter((e=>e&&e.trim()));var T=i(234),O={};O.styleTagTransform=f(),O.setAttributes=p(),O.insert=c().bind(null,"head"),O.domAPI=s(),O.insertStyleElement=u();a()(T.A,O);T.A&&T.A.locals&&T.A.locals;$((()=>(async()=>{if("Special:MassEdit"!==mw.config.get("wgPageName"))return await mw.loader.using("mediawiki.util"),void mw.util.addPortletLink("p-tb","/Special:MassEdit","批量编辑","t-massedit");await mw.loader.using(["mediawiki.api","oojs-ui"]);const e=new mw.Api;let t,i="waiting",n=!1;const r=new w([{name:"success",icon:"✓",color:"#333",text:"已完成"},{name:"nochange",icon:"○",color:"#888",text:"无变化"},{name:"warn",icon:"!",color:"#f28500",text:"警告"},{name:"error",icon:"✕",color:"#eb3941",text:"出错"}],"massedit-log","h5");mw.loader.load("/index.php?title=User:Nzh21/js/QuickDiff.js&action=raw&ctype=text/javascript"),$(document.head).append(`<link rel="stylesheet" href="${mw.config.get("wgLoadScript")}?debug=false&modules=mediawiki.diff.styles&only=styles" />`),mw.config.set("wgCanonicalSpecialPageName","MassEdit"),document.title="批量编辑 - 萌娘百科_万物皆可萌的百科全书",$(".mw-invalidspecialpage").removeClass("mw-invalidspecialpage"),$("#firstHeading").html('批量编辑页面<div>By <a href="/User:BearBin">BearBin</a></div>'),$("#contentSub").remove();const a=$('<textarea name="me-edit-from" rows="4"/>'),o=$('<textarea name="me-change-to" rows="4"/>'),s=$('<textarea name="me-page-list" rows="12"/>'),l=$('<textarea name="me-category-list" rows="12"/>'),c=new OO.ui.CheckboxInputWidget({id:"me-regex-box"}),d=new OO.ui.FieldLayout(c,{label:"使用正则表达式",align:"inline"}),p=new OO.ui.ButtonWidget({label:"常用正则",icon:"help"}),m=new OO.ui.ButtonWidget({label:"提交",flags:["primary","progressive"],icon:"check"}),u=new OO.ui.ButtonWidget({label:"终止",flags:["primary","destructive"],icon:"close"}),g=new OO.ui.TextInputWidget({type:"number",placeholder:"编辑间隔",id:"me-interval"}),f=new OO.ui.TextInputWidget({placeholder:"附加摘要",id:"me-summary"}),h=new OO.ui.ButtonWidget({label:"预览",icon:"search",disabled:!0}),y=new OO.ui.TextInputWidget({placeholder:"要应用本编辑的页面"}).on("change",(e=>{e?.length?h.setDisabled(!1):h.setDisabled(!0)})),T=new OO.ui.TextInputWidget({type:"number",placeholder:"0",id:"me-retry-times",disabled:!0}),O=new OO.ui.CheckboxInputWidget,E=new OO.ui.FieldLayout(O.on("change",(()=>{T.setDisabled(!O.isSelected())})),{label:"因网络问题出错时，重试至多",align:"inline",id:"me-use-retry"});$("#mw-content-text").empty().append("<h5>原文字：</h5>",a,"<h5>替换为：</h5>",o,$('<div id="me-regex"/>').append(d.$element,p.$element),$("<ul/>").append("<li>正则表达式须使用斜线包裹（如<code>/regex/g</code>），且<code>g</code>为必须，否则无法被js解析。</li>","<li>替换后文本若有换行请直接敲回车，不要用<code>\\n</code>。</li>"),$('<div id="me-page-lists"/>').append($("<div/>").append("<h5>页面</h5>",s),$("<div/>").append("<h5>分类</h5>",l)),$('<div id="me-pages-note"/>').append("输入要编辑的页面或分类，","<u>每行一个</u>","；分类栏请带上 分类/Category/Cat 等能被系统识别的分类名字空间前缀。"),$('<div id="me-edit-panel" class="me-panel"/>').append(m.$element,u.$element.hide(),g.$element,f.$element),$('<div id="me-preview-panel" class="me-panel"/>').append(h.$element,y.$element),$('<div id="me-retry"/>').append(E.$element,T.$element,"次"),$("<ul/>").append("<li>编辑间隔单位为秒（s），不填默认为20s。不包含本身编辑页面所用的时间。</li>",'<li>请注意<a target="_blank" href="/萌娘百科:机器用户">机器用户方针</a>所规定速率和<a target="_blank" href="/api.php?action=query&meta=userinfo&uiprop=ratelimits">ratelimit限制</a>并自行设置间隔，或申请机器用户权限。</li>'),r.element,$("<ul/>").append("<li>报错“http”不一定是编辑失败，可能实际已提交但等待成功信息过久而判定超时。</li>"));const S=e=>new Promise((i=>t=setTimeout(i,e))),L=()=>{i="waiting",clearTimeout(t),u.setDisabled(!0).$element.hide(),m.setDisabled(!1).$element.show(),$("#mw-content-text input, #mw-content-text textarea").prop("disabled",!1),window.onbeforeunload=()=>null},A=async e=>{const t=[],i=e.map((async e=>{try{const i=await b(e);i.length>0?(r.record(`获取到【<a href="/${e}" target="_blank">${e}</a>】内的页面${i.length}个。`,"normal"),t.push(...i)):r.record(`【${e}】内没有页面。`,"warn")}catch(t){let i="";if("http"===t)i="网络连接出错";else i=t;r.record(`获取【${e}】内的页面出错：${i}。`,"error")}}));return await Promise.all(i),t},M=(e,t)=>{let i=e;if(t)try{const t=e.match(/^\/(.*)\/([gimsuy]*)$/);if(!t)return r.record("正则表达式格式有误。","warn"),"";const[n,a,o]=t;if(!o.includes("g"))return r.record("正则表达式必须包含全局匹配(g)修饰符。","warn"),"";i=new RegExp(a,o)}catch(e){return void r.record(`正则表达式解析失败：${e}`,"error")}return i},_=async(t,a,o,s)=>{const l=O.isSelected();let c=0;const d=+T.getValue(),p=`<a href="/${t}" target="_blank">${t}</a>`;do{try{i="getting";const l=await v(t),c=l.replaceAll(o,s);if(l===c)return r.record(`【${p}】编辑前后无变化。`,"nochange"),"nochange";if(n)return"failed";i="editing";let d="MassEdit";switch(mw.config.get("wgSiteName")){case"萌娘百科":case"萌娘共享":case"萌娘文库":case"Moegirlpedia":case"萌えっ娘百科事典":d="[[U:BearBin/js#MassEdit|MassEdit]]";break;case"Wikipedia":d="[[zh:U:BearBin1215/js#MassEdit|MassEdit]]";break;default:d="MassEdit"}const m=await e.postWithToken("csrf",{format:"json",action:"edit",watchlist:"nochange",bot:!0,minor:!0,nocreate:!0,title:t,text:c,summary:`${d}：【${o.toString().replace(/\n/g,"↵")}】→【${s.replace(/\n/g,"↵")}】${a&&`：${a}`}`});return i="waiting","Success"===m?.edit?.result?(r.record(`【<a href="/_?diff=${m.edit.newrevid}" target="_blank">${t}</a>】编辑完成。`,"success"),"success"):m?.edit?.abusefilter?(r.record(`【${p}】编辑失败：被滥用过滤器${m.edit.abusefilter.id}阻止。过滤器描述：${m.edit.abusefilter.description}。`,"error"),"failed"):(r.record(`【${p}】编辑失败，请将以下内容告知<a href="/User_talk:BearBin" target="_blank">BearBin</a>：${JSON.stringify(m)}`,"error"),"failed")}catch(e){let i="";switch(e){case"missingtitle":i="页面不存在";break;case"http":c++,i=l&&c<=d?`网络连接出错，正在重试（${c}/${d}）`:"网络连接出错";break;case"protectedpage":i="页面被保护";break;default:i=e}if(r.record(`编辑【<a href="/${t}?action=history" target="_blank">${t}</a>】时出现错误：${i}。`,"error"),!l||"http"!==e)return"failed"}}while(c<=d);return"failed"};m.on("click",(async()=>{if(!a.val())return void r.record("请输入要替换的原文字。","warn");if(!s.val()&&!l.val())return void r.record("请输入要编辑的页面或分类。","warn");const e=$("<p>请确认您的编辑内容。若因输入不当而产生错误，请自行<ruby>承担后果<rp>(</rp><rt>料理后事</rt><rp>)</rp></ruby>。</p>");if(await OO.ui.confirm(e,{title:"提醒",size:"small"})){const e=f.getValue(),t=1e3*+(""===g.getValue()?20:g.getValue()),i=M(a.val(),c.isSelected()),d=o.val();if(!i)return;m.setDisabled(!0).$element.hide(),u.setDisabled(!1).$element.show(),$("#mw-content-text input, #mw-content-text textarea").prop("disabled",!0),window.onbeforeunload=()=>!0,await(async()=>[...new Set([...k(s.val()||""),...await A(k(l.val()||""))])])().then((async a=>{let o=0;const{length:s}=a;r.record(`共${s}个页面，即将开始编辑……`,"normal");for(const r of a){const a=await _(r,e,i,d);if(o++,n)break;"success"===a&&0!==t&&o<s&&await S(t)}n?(n=!1,r.record("编辑终止。","normal")):r.record("编辑完毕。","normal"),L()})),L()}})),u.on("click",(()=>{switch(u.setDisabled(!0),i){case"waiting":n=!1,L(),r.record("编辑终止。","normal");break;case"getting":n=!0,L();break;case"editing":n=!0}})),h.on("click",(()=>{const e=a.val();if(!e)return void r.record("请输入要替换的原文字。","warn");const t=M(e,c.isSelected());t&&(async(e,t,i)=>{h.setDisabled(!0),r.record("正在获取预览……");try{const n=await v(e);if(!n)return void r.record(`获取${e}当前内容出错。`,"error");const a=n.replaceAll(t,i),o=await x(n,a,!0);OO.ui.alert($(o),{title:$(`<span>预览<b>【${e}】</b>的更改</span>`),size:"larger"})}catch(e){r.record(`预览出错：${e}。`,"error")}h.setDisabled(!1)})(y.getValue(),t,o.val())}));const B=$('<ul id="me-regex-help-list"/>').append(`<li><code>${/\[\[(?:Category|Cat|分[类類]):分类名(\|[^[]*)?\]\]/gi.toString()}</code>：匹配分类</li>`,`<li><code>${/\{\{(?:Template:|T:|[模样樣]板:)?模板名/gi.toString()}</code>：匹配模板（不含内容）</li>`,`<li><code>${/^.*$/gs.toString()}</code>：匹配全文（感谢鬼影）</li>`);p.on("click",(()=>{OO.ui.alert(B,{title:"常用正则表达式",size:"medium"})}))})()))})();
