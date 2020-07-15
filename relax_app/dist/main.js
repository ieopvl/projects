!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="dist",t(t.s=0)}([function(n,e,t){"use strict";t(1);var r=t(5),o=t(6),i=document.querySelector(".settings__title"),a=document.querySelector(".settings__controls"),c=document.querySelector(".button-start_app"),u=document.querySelector(".visualization"),s=document.querySelectorAll(".settings__input_time"),l=document.querySelector(".settings__input_times");function f(){u.hidden=!0,a.hidden=!1}f(),(0,r.toggleHiddenByEvent)(i,a,"click"),(0,r.toggleHiddenByEvent)(c,a,"click"),(0,r.toggleHiddenByEvent)(c,u,"click"),(0,r.toggleHiddenByEvent)(i,u,"click"),c.addEventListener("click",(function(){(0,o.startApp)(s,l,f)}))},function(n,e,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],u=e.base?i[0]+e.base:i[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var f=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:h(d,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var b=null,m=0;function h(n,e){var t,r,o;if(e.singleton){var i=m++;t=b||(b=s(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(n,e),s=0;s<t.length;s++){var l=c(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,e,t){(e=t(4)(!1)).push([n.i,'* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: "Arial", sans-serif;\r\n}\r\n\r\n.app {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n    background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n}\r\n\r\n.settings {\r\n    position: relative;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n\r\n    background-color: #fff;\r\n    background-image: linear-gradient(to left, #fff1eb 0%, #ace0f9 100%);\r\n    background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);\r\n\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.settings__title {\r\n    border-bottom: 2px solid rgba(27, 227, 204, 1);;\r\n}\r\n\r\n/*\r\n.settings::before {\r\n    content: "X";\r\n\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0;\r\n\r\n    display: block;\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n}\r\n*/\r\n\r\n\r\n.visualization-hidden {\r\n    display: none;\r\n    width: 1px;\r\n    margin-left: -1100px;\r\n}\r\n\r\n.settings__list {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0 0 20px 0;\r\n}\r\n\r\n.settings__item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 10px;\r\n\r\n    font-size: 16px;\r\n}\r\n\r\nlabel {\r\n    width: 50%;\r\n    padding: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.settings__input {\r\n    width: 50%;\r\n    padding: 10px;\r\n    margin: 0 auto;\r\n\r\n    font-size: inherit;\r\n\r\n    background-color: transparent;\r\n    border: none;\r\n    border-bottom: 2px solid rgba(164, 235, 179, 1);\r\n    outline: none;\r\n}\r\n\r\n.settings__input:focus {\r\n    border-bottom: 2px solid darkblue;\r\n}\r\n\r\n.button-start_app {\r\n    padding: 10px 0;\r\n    width: 100%;\r\n\r\n    color: #ffffff;\r\n    font-size: 18px;\r\n\r\n    background-color: rgba(65, 47, 128, 0.5);\r\n    border-radius: 25px;\r\n\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.button-start_app:hover {\r\n    background-color: rgba(65, 47, 128, 1);\r\n}\r\n\r\n\r\n.visualization {\r\n    position: relative;\r\n}\r\n\r\n#duration {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 48%;\r\n\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.wrapper {\r\n    /*background-color: #fff;*/\r\n    /*background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);*/\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.button-control {\r\n\r\n    padding: 0 0 5px 0;\r\n    margin-left: 7px;\r\n    font-size: 15px;\r\n    color: #ffffff;\r\n    background-color: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #ffffff;\r\n\r\n    outline: none;\r\n}\r\n\r\n.button-control:hover {\r\n    color: skyblue;\r\n    border-bottom: 1px solid skyblue;\r\n}',""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toggleHiddenByEvent=function(n,e,t){n.addEventListener(t,(function(n){var t;(t=e).hidden=!t.hidden}))}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.startApp=function(n,e,t){!function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],i=!1,a=void 0,c={onStart:function(n){i||(a=n,u.textContent=e[t][1],l.setStrokeOffset(l.perimeter()),i=!0)},onComplete:function(){l.setStrokeOffset(-l.perimeter()),i=!1,t<e.length-1?n(e,t+=1,o):(u.textContent="Finish!",setTimeout((function(){o()}),1500))},onTick:function(n){l.setStrokeOffset(l.offset(n,a))}};(s=new r.Timer(e[t][0],c)).start()}(function(n,e){for(var t=n.map((function(n){return[n.value,n.dataset.action]})).filter((function(n){return 0!=n[0]})),r=[],o=1;o<=e.value;o++)r.push.apply(r,i(t));return r}(Array.from(n),e),0,t)};var r=t(7),o=t(8);function i(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}var a=document.querySelector(".button-control_pause"),c=document.querySelector(".button-control_continue"),u=document.querySelector("#duration"),s=void 0,l=new o.Circle(document.querySelector("circle"));l.setStrokeDasharray(),c.addEventListener("click",(function(){s.start()})),a.addEventListener("click",(function(){s.pause()}))},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();e.Timer=function(){function n(e,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.time=parseFloat(e),this.onStart=t.onStart||null,this.onComplete=t.onComplete||null,this.onTick=t.onTick||null}return r(n,[{key:"tick",value:function(){this.currentTime<=0?(this.pause(),this.onComplete&&this.onComplete()):(this.currentTime=this.currentTime-.05,this.onTick&&this.onTick(this.currentTime))}},{key:"start",value:function(){this.timerId||(this.onStart&&this.onStart(this.currentTime),this.tick(),this.timerId=setInterval(this.tick.bind(this),50))}},{key:"pause",value:function(){clearInterval(this.timerId),this.timerId=null}},{key:"currentTime",get:function(){return this.time},set:function(n){this.time=n}}]),n}()},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();e.Circle=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=e,this.r=e.getAttribute("r")}return r(n,[{key:"perimeter",value:function(){return 2*this.r*Math.PI}},{key:"offset",value:function(n,e){var t=this.perimeter();return t*n/e-t}},{key:"setStrokeOffset",value:function(n){this.element.setAttribute("stroke-dashoffset",n)}},{key:"setStrokeDasharray",value:function(){this.element.setAttribute("stroke-dasharray",this.perimeter())}}]),n}()}]);