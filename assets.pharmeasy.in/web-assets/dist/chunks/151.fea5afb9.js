(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[151],{"6huO":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("xM8Q");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"request",value:function(e){var t=this.connection(e.method,e.url).set(this.options.headers||{}).set("Accept","application/json").set(e.headers||{}).type(e.type||"json");return new Promise((function(n,r){t.set(e.headers),e.body&&t.send(e.body),t.end((function(e,t){if(e){try{var o=e.response;(e=JSON.parse(e.response.text)).response=o}catch(e){}return r(e)}n(t&&t.body)}))}))}}]),t}(((r=a)&&r.__esModule?r:{default:r}).default);t.default=s,e.exports=t.default},"6ru1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("xM8Q");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"request",value:function(e){var t=o({},e);return t.headers=o({Accept:"application/json"},this.options.headers,t.headers),e.body&&(t.body=JSON.stringify(e.body)),(0,this.connection)(e.url,t).then(this.checkStatus).then((function(e){return 204===e.status?null:e.json()}))}},{key:"checkStatus",value:function(e){return e.ok?e:e.json().then((function(t){throw t.response=e,t}))}}]),t}(((r=i)&&r.__esModule?r:{default:r}).default);t.default=c,e.exports=t.default},AgeS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("xM8Q");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"request",value:function(e){var t={url:e.url,method:e.method,data:e.body,headers:o({Accept:"application/json"},this.options.headers,e.headers)};return this.connection.request(t).then((function(e){return e.data})).catch((function(e){var t=e.response||e;throw t instanceof Error?t:t.data||t}))}}]),t}(((r=i)&&r.__esModule?r:{default:r}).default);t.default=c,e.exports=t.default},GKta:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("xM8Q");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"request",value:function(e){var t=this,n=o({dataType:e.type||"json"},{headers:this.options.headers||{}},e);return e.body&&(n.data=JSON.stringify(e.body),n.contentType="application/json"),delete n.type,delete n.body,new Promise((function(e,r){t.connection.ajax(n).then(e,(function(e){var t=e.responseText;try{t=JSON.parse(t)}catch(n){t=new Error(e.responseText)}t.xhr=t.response=e,r(t)}))}))}}]),t}(((r=i)&&r.__esModule?r:{default:r}).default);t.default=c,e.exports=t.default},PFoR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("xM8Q");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"request",value:function(e){var t=this;return new Promise((function(n,r){t.connection(o({json:!0},e),(function(e,t,a){return e?r(e):!e&&t.statusCode>=400?"string"==typeof a?r(new Error(a)):(a.response=t,r(o(new Error(a.message),a))):void n(a)}))}))}}]),t}(((r=i)&&r.__esModule?r:{default:r}).default);t.default=c,e.exports=t.default},XhKi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("xM8Q");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"request",value:function(e){var t=this.connection,n=this.options.Headers;if(!t||!n)throw new Error("Please pass angular's 'http' (instance) and and object with 'Headers' (class) to feathers-rest");var r=e.url,a={method:e.method,body:e.body,headers:new n(o({Accept:"application/json"},this.options.headers,e.headers))};return new Promise((function(e,n){t.request(r,a).subscribe(e,n)})).then((function(e){return e.json()})).catch((function(e){var t=e.response||e;throw t instanceof Error?t:t.json()||t}))}}]),t}(((r=i)&&r.__esModule?r:{default:r}).default);t.default=c,e.exports=t.default},iRS1:function(e,t,n){e.exports=n("zNYy")},xM8Q:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("Qyje"),u=(r=i)&&r.__esModule?r:{default:r},s=n("daey"),c=n("8+pS");function f(e){throw(0,c.convert)(e)}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=(0,s.stripSlashes)(t.name),this.options=t.options,this.connection=t.connection,this.base=t.base+"/"+this.name}return a(e,[{key:"makeUrl",value:function(e,t){e=e||{};var n=this.base;(null!=t&&(n+="/"+t),0!==Object.keys(e).length)&&(n+="?"+u.default.stringify(e));return n}},{key:"find",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.request({url:this.makeUrl(e.query),method:"GET",headers:o({},e.headers)}).catch(f)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?Promise.reject(new Error("id for 'get' can not be undefined")):this.request({url:this.makeUrl(t.query,e),method:"GET",headers:o({},t.headers)}).catch(f)}},{key:"create",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request({url:this.makeUrl(t.query),body:e,method:"POST",headers:o({"Content-Type":"application/json"},t.headers)}).catch(f)}},{key:"update",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return void 0===e?Promise.reject(new Error("id for 'update' can not be undefined, only 'null' when updating multiple entries")):this.request({url:this.makeUrl(n.query,e),body:t,method:"PUT",headers:o({"Content-Type":"application/json"},n.headers)}).catch(f)}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return void 0===e?Promise.reject(new Error("id for 'patch' can not be undefined, only 'null' when updating multiple entries")):this.request({url:this.makeUrl(n.query,e),body:t,method:"PATCH",headers:o({"Content-Type":"application/json"},n.headers)}).catch(f)}},{key:"remove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?Promise.reject(new Error("id for 'remove' can not be undefined, only 'null' when removing multiple entries")):this.request({url:this.makeUrl(t.query,e),method:"DELETE",headers:o({},t.headers)}).catch(f)}}]),e}();t.default=l,e.exports=t.default},zNYy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={};return Object.keys(f).forEach((function(n){var r=f[n];t[n]=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)throw new Error(n+" has to be provided to feathers-rest");var a=function(n){return new r({base:e,name:n,connection:t,options:o})},i=function(){if("function"==typeof this.defaultService)throw new Error("Only one default client provider can be configured");this.rest=t,this.defaultService=a};return i.Service=r,i.service=a,i}})),t};var r=c(n("GKta")),o=c(n("6huO")),a=c(n("PFoR")),i=c(n("6ru1")),u=c(n("AgeS")),s=c(n("XhKi"));function c(e){return e&&e.__esModule?e:{default:e}}var f={jquery:r.default,superagent:o.default,request:a.default,fetch:i.default,axios:u.default,angular:s.default};e.exports=t.default}}]);