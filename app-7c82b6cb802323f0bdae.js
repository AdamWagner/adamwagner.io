webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,o,n){"use strict";function t(e,o,n){var t=r.map(function(n){if(n.plugin[e]){var t=n.plugin[e](o,n.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:n?[n]:[]}function a(e,o,n){return r.reduce(function(n,t){return t.plugin[e]?n.then(function(){return t.plugin[e](o,t.options)}):n},Promise.resolve())}o.__esModule=!0,o.apiRunner=t,o.apiRunnerAsync=a;var r=[{plugin:n("./node_modules/gatsby-plugin-catch-links/gatsby-browser.js"),options:{plugins:[]}},{plugin:n("./gatsby-browser.js"),options:{plugins:[]}}]},"./.cache/async-requires.js":function(e,o,n){"use strict";var t;o.components={"component---src-pages-404-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js"),"component---src-pages-badracket-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-badracket-js!./src/pages/badracket.js"),"component---src-pages-page-2-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js")},o.json=(t={"layout-index.json":n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"404.json":n("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json")},t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["badracket.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---badracket!./.cache/json/badracket.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["page-2.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404-html.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),t),o.layouts={"component---src-layouts-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function a(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function r(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function s(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var i=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u=n("./node_modules/react/react.js"),d=t(u),l=n("./node_modules/prop-types/index.js"),c=t(l),m=n("./.cache/loader.js"),p=t(m),g=n("./.cache/emitter.js"),f=t(g),h=function(e){var o=e.children;return d.default.createElement("div",null,o())},b=function(e){function o(n){a(this,o);var t=r(this,e.call(this));return t.state={location:n.location,pageResources:p.default.getResourcesForPathname(n.location.pathname)},t}return s(o,e),o.prototype.componentWillReceiveProps=function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):p.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}},o.prototype.componentDidMount=function(){var e=this;f.default.on("onPostLoadPageResources",function(o){o.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(e,o){return!(this.state.pageResources&&!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath)))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,u.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,u.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:h,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(d.default.Component);b.propTypes={page:c.default.bool,layout:c.default.bool,location:c.default.object},o.default=b,e.exports=o.default},"./.cache/emitter.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=n("./node_modules/mitt/dist/mitt.js"),r=t(a),s=(0,r.default)();e.exports=s},"./.cache/find-page.js":function(e,o,n){"use strict";var t=n("./node_modules/react-router-dom/index.js"),a={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var r=n.slice(o.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),a[r])return a[r];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(r,{path:e.path})||(0,t.matchPath)(r,{path:e.matchPath}))return s=e,a[r]=e,!0}else if((0,t.matchPath)(r,{path:e.path,exact:!0}))return s=e,a[r]=e,!0;return!1}),s}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa2868bfb69fc,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe70826b53c04,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---badracket!./.cache/json/badracket.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xdfab44933679,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/badracket.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e4260,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(60335399758886,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x7b71d9db271c,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/page-2.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x67ef26645b2a,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=n("./node_modules/react/react.js"),r=(t(a),n("./.cache/find-page.js")),s=t(r),i=n("./.cache/emitter.js"),u=t(i),d=void 0,l={},c={},m={},p={},g={},f=[],h=[],b={},j=[],y={},x=function(e){return e&&e.default||e},_=void 0,w=!0;_=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){j=j.filter(function(o){return o!==e}),_.onResourcedFinished(e)})}}),u.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),u.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var v=function(e,o){return y[e]>y[o]?1:y[e]<y[o]?-1:0},R=function(e,o){return b[e]>b[o]?1:b[e]<b[o]?-1:0},P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])o.nextTick(function(){n(null,p[e])});else{var t="component---"===e.slice(0,12)?c.components[e]||c.layouts[e]:c.json[e];t(function(o,t){p[e]=t,n(o,t)})}},k=function(e,n){g[e]?o.nextTick(function(){n(null,g[e])}):P(e,function(o,t){if(o)n(o);else{var a=x(t());g[e]=a,n(o,a)}})},S=1,E={empty:function(){h=[],b={},y={},j=[],f=[]},addPagesArray:function(e){f=e;var o="";d=(0,s.default)(e,o)},addDevRequires:function(e){l=e},addProdRequires:function(e){c=e},dequeue:function(e){return h.pop()},enqueue:function(e){if(!f.some(function(o){return o.path===e}))return!1;var o=1/S;S+=1,b[e]?b[e]+=1:b[e]=1,E.has(e)||h.unshift(e),h.sort(R);var n=d(e);return n.jsonName&&(y[n.jsonName]?y[n.jsonName]+=1+o:y[n.jsonName]=1+o,j.indexOf(n.jsonName)!==-1||p[n.jsonName]||j.unshift(n.jsonName)),n.componentChunkName&&(y[n.componentChunkName]?y[n.componentChunkName]+=1+o:y[n.componentChunkName]=1+o,j.indexOf(n.componentChunkName)!==-1||p[n.jsonName]||j.unshift(n.componentChunkName)),j.sort(v),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:y}},getPages:function(){return{pathArray:h,pathCount:b}},getPage:function(e){return d(e)},has:function(e){return h.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var o=e,n=Array.isArray(o),t=0,o=n?o:o[Symbol.iterator]();;){var a;if(n){if(t>=o.length)break;a=o[t++]}else{if(t=o.next(),t.done)break;a=t.value}var r=a;r.unregister()}window.location.reload()})),w=!1;var t=d(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,m[e])return o.nextTick(function(){n(m[e]),u.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];u.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,s=void 0,i=function(){if(a&&r&&(!t.layoutComponentChunkName||s)){m[e]={component:a,json:r,layout:s};var o={component:a,json:r,layout:s};n(o),u.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return k(t.componentChunkName,function(e,o){e&&console.log("Loading the component for "+t.path+" failed"),a=o,i()}),k(t.jsonName,function(e,o){e&&console.log("Loading the JSON for "+t.path+" failed"),r=o,i()}),void(t.layoutComponentChunkName&&k(t.layoutComponentChunkName,function(e,o){e&&console.log("Loading the Layout for "+t.path+" failed"),s=o,i()}))},peek:function(e){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(e){return h.length-h.indexOf(e)-1}};e.exports=E}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-badracket-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"badracket.json",path:"/badracket/"},{componentChunkName:"component---src-pages-page-2-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,t=[],a=[],r=function(){var e=o();e&&(a.push(e),n(e))},s=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(e){s({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){s({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){s({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){s({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r=n("./.cache/api-runner-browser.js"),s=n("./node_modules/react/react.js"),i=t(s),u=n("./node_modules/react-dom/index.js"),d=t(u),l=n("./node_modules/react-router-dom/index.js"),c=n("./node_modules/react-router-scroll/lib/index.js"),m=n("./node_modules/history/createBrowserHistory.js"),p=t(m),g=n("./node_modules/domready/ready.js"),f=t(g),h=n("./.cache/emitter.js"),b=t(h),j=n("./.cache/pages.json"),y=t(j),x=n("./.cache/component-renderer.js"),_=t(x),w=n("./.cache/async-requires.js"),v=t(w),R=n("./.cache/loader.js"),P=t(R);n("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=b.default,P.default.addPagesArray(y.default),P.default.addProdRequires(v.default),window.asyncRequires=v.default,window.___loader=P.default,window.matchPath=l.matchPath,(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,r.apiRunner)("onRouteUpdate",{location:e,action:o})}))}function o(e,o){var n=o.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(t.length>0)return t[0];if(e){var a=e.location.pathname;if(a===n)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var t=function(e){function o(t){t.page.path===P.default.getPage(e).path&&(b.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){b.default.off("onPostLoadPageResources",o),b.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);P.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):b.default.on("onPostLoadPageResources",o)}};window.___navigateTo=t;var u=(0,p.default)();(0,r.apiRunner)("onRouteUpdate",{location:u.location,action:u.action});var m=(0,r.apiRunner)("replaceRouterComponent",{history:u})[0],g=function(e){var o=e.children;return i.default.createElement(l.Router,{history:u},o)};P.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,s.createElement)(m?m:g,null,(0,s.createElement)(c.ScrollContext,{shouldUpdateScroll:o},(0,s.createElement)((0,l.withRouter)(_.default),{layout:!0,children:function(o){return(0,s.createElement)(l.Route,{render:function(n){e(n.history);var t=o?o:n;return P.default.getPage(t.location.pathname)?(0,s.createElement)(_.default,a({page:!0},t)):(0,s.createElement)(_.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,f.default)(function(){return d.default.render(i.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=n("./.cache/emitter.js"),r=t(a),s="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(s+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./gatsby-browser.js":function(e,o){"use strict";o.onRouteUpdate=function(e,o,n){console.log(e.location.pathname),console.log(e)}},"./node_modules/domready/ready.js":function(e,o,n){!function(o,n){e.exports=n()}("domready",function(){var e,o=[],n=document,t=n.documentElement.doScroll,a="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return r||n.addEventListener(a,e=function(){for(n.removeEventListener(a,e),r=1;e=o.shift();)e()}),function(e){r?setTimeout(e,0):o.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function t(){function e(e){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,t=document.querySelector("head"),a=n.e,r=n.s;n.e=function(t,s){var i=!1,u=!0,d=function(e){s&&(s(n,e),s=null)};return!r&&o&&o[t]?void d(!0):(a(t,function(){i||(i=!0,u?setTimeout(function(){d()}):d())}),void(i||(u=!1,e(function(){i||(i=!0,r?r[t]=void 0:(o||(o={}),o[t]=!0),d(!0))}))))}}t()},"./node_modules/gatsby-plugin-catch-links/catch-links.js":function(e,o){"use strict";e.exports=function(e,o){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var n=null,t=e.target;t.parentNode;t=t.parentNode)if("A"===t.nodeName){n=t;break}if(!n)return!0;if(n.target&&"_self"!==n.target.toLowerCase())return!0;if(n.pathname===window.location.pathname&&""!==n.target.hash)return!0;if(n.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=n.href;var r=document.createElement("a");return r.href=window.location.href,a.host!==r.host||(e.preventDefault(),o(n.getAttribute("href")),!1)})}},"./node_modules/gatsby-plugin-catch-links/gatsby-browser.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=n("./node_modules/gatsby-link/index.js"),r=n("./node_modules/gatsby-plugin-catch-links/catch-links.js"),s=t(r);(0,s.default)(window,function(e){(0,a.navigateTo)(e)})},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/process/browser.js":function(e,o){function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function a(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(o){try{return l.call(null,e,0)}catch(o){return l.call(this,e,0)}}}function r(e){if(c===clearTimeout)return clearTimeout(e);if((c===t||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(o){try{return c.call(null,e)}catch(o){return c.call(this,e)}}}function s(){f&&p&&(f=!1,p.length?g=p.concat(g):h=-1,g.length&&i())}function i(){if(!f){var e=a(s);f=!0;for(var o=g.length;o;){for(p=g,g=[];++h<o;)p&&p[h].run();h=-1,o=g.length}p=null,f=!1,r(e)}}function u(e,o){this.fun=e,this.array=o}function d(){}var l,c,m=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{c="function"==typeof clearTimeout?clearTimeout:t}catch(e){c=t}}();var p,g=[],f=!1,h=-1;m.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];g.push(new u(e,o)),1!==g.length||f||a(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=d,m.addListener=d,m.once=d,m.off=d,m.removeListener=d,m.removeAllListeners=d,m.emit=d,m.prependListener=d,m.prependOnceListener=d,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9427c64ab85d,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-badracket-js!./src/pages/badracket.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(19913542803863,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/badracket.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(35783957827783,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xc6c285f8fd10,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/page-2.js')})})}}});
//# sourceMappingURL=app-7c82b6cb802323f0bdae.js.map