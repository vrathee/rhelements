!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js","../rh-datetime/rh-datetime.compiled.js","../cp-styles/cp-styles.compiled.js","../../whatwg-fetch/fetch.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.compiled.js"),require("../rh-datetime/rh-datetime.compiled.js"),require("../cp-styles/cp-styles.compiled.js"),require("../../whatwg-fetch/fetch.js"));else{t(e.rhelementCompiled,e.rhDatetimeCompiled,e.cpStylesCompiled,e.fetch),e.cpMoreLikeThis={}}}(this,function(e){"use strict";var t,n=(t=e)&&t.__esModule?t:{default:t};var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o="cp-more-like-this",a=document.createElement("template"),c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o));if(e.handleResponse=e.handleResponse.bind(e),e.q=e.getAttribute("q"),e.contentType=e.getAttribute("content-type"),!e.q||!e.contentType)return console.warn("Both a q attribute and content-type attribute need to be provided"),i(e);var n="https://api.access.redhat.com/rs/search?start=0&rows=3&q="+e.q+"&fl=uri,allTitle,score,documentKind,lastModifiedDate,view_uri&mltDocSearch=true";return e.loading=!0,fetch(n).then(function(e){return e.json()}).then(e.handleResponse),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),r(t,[{key:"handleResponse",value:function(e){this.loading=!1,this.data={contentType:this.contentType,results:e.response.docs},this.render()}},{key:"render",value:function(){var e,t=(e=this.data,a.innerHTML="\n<style>:host {\n  display: block; }\n\n.card {\n  display: flex;\n  flex-direction: column;\n  background: #e7e7e7;\n  padding: 16px;\n  margin-bottom: 32px; }\n  .card p {\n    margin-top: 0;\n    flex: 1 1 auto; }\n  .card a {\n    color: #06c;\n    text-decoration: none;\n    font-weight: 700; }\n  .card span {\n    font-size: .9rem;\n    font-weight: 400; }\n\n@media (min-width: 768px) {\n  .card-container {\n    display: flex; }\n    .card-container .card {\n      width: 33%;\n      margin: 16px;\n      margin-top: 8px; }\n      .card-container .card:first-child {\n        margin-left: 0; }\n      .card-container .card:last-child {\n        margin-right: 0; } }</style>\n<h3>People who viewed this "+e.contentType+' also viewed</h3>\n<div class="card-container">\n  '+e.results.map(function(e){return'\n    <div class="card">\n      <p><a href="'+e.view_uri+'">'+e.allTitle+"</a></p>\n      <span>\n        "+e.documentKind+' - <rh-datetime\n          datetime="'+e.lastModifiedDate+'"\n          type="local"\n          day="numeric"\n          month="short"\n          year="numeric">\n          '+e.lastModifiedDate+"\n        </rh-datetime>\n      </span>\n    </div>\n  "}).join("\n")+"\n</div>\n",a);window.ShadyCSS&&ShadyCSS.prepareTemplate(t,o),this.shadowRoot.appendChild(t.content.cloneNode(!0)),window.ShadyCSS&&ShadyCSS.styleElement(this)}}]),t}();window.customElements.define(o,c)});