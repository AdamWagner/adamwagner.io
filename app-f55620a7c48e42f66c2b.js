webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,o,n){"use strict";function a(e,o,n){var a=s.map(function(n){if(n.plugin[e]){var a=n.plugin[e](o,n.options);return a}});return a=a.filter(function(e){return"undefined"!=typeof e}),a.length>0?a:n?[n]:[]}function t(e,o,n){return s.reduce(function(n,a){return a.plugin[e]?n.then(function(){return a.plugin[e](o,a.options)}):n},Promise.resolve())}o.__esModule=!0,o.apiRunner=a,o.apiRunnerAsync=t;var s=[{plugin:n("./node_modules/gatsby-plugin-catch-links/gatsby-browser.js"),options:{plugins:[]}},{plugin:n("./node_modules/gatsby-plugin-offline/gatsby-browser.js"),options:{plugins:[]}},{plugin:n("./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),options:{plugins:[],trackingId:"UA-60714007-1"}},{plugin:n("./gatsby-browser.js"),options:{plugins:[]}}]},"./.cache/async-requires.js":function(e,o,n){"use strict";var a;o.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":n("./node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js"),"component---src-pages-404-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-badracket-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-badracket-js!./src/pages/badracket.js"),"component---src-pages-copilot-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-copilot-js!./src/pages/copilot.js"),"component---src-pages-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js"),"component---src-pages-opentable-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-opentable-js!./src/pages/opentable.js"),"component---src-pages-page-2-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js"),"component---src-pages-sounds-just-like-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-sounds-just-like-js!./src/pages/sounds-just-like.js")},o.json=(a={"layout-index.json":n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"offline-plugin-app-shell-fallback.json":n("./node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json")},a["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),a["404.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),a["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),a["badracket.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---badracket!./.cache/json/badracket.json"),a["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),a["copilot.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---copilot!./.cache/json/copilot.json"),a["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),a["index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),a["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),a["opentable.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---opentable!./.cache/json/opentable.json"),a["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),a["page-2.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json"),a["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),a["sounds-just-like.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---sounds-just-like!./.cache/json/sounds-just-like.json"),a["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),a["404-html.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),a),o.layouts={"component---src-layouts-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function s(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function r(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=n("./node_modules/react/index.js"),u=a(i),d=n("./node_modules/prop-types/index.js"),c=a(d),m=n("./.cache/loader.js"),p=a(m),g=n("./.cache/emitter.js"),f=a(g),b=function(e){var o=e.children;return u.default.createElement("div",null,o())},j=function(e){function o(n){t(this,o);var a=s(this,e.call(this));return a.state={location:n.location,pageResources:p.default.getResourcesForPathname(n.location.pathname)},a}return r(o,e),o.prototype.componentWillReceiveProps=function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):p.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}},o.prototype.componentDidMount=function(){var e=this;f.default.on("onPostLoadPageResources",function(o){o.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(e,o){return!o.pageResources||(!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath&&!o.pageResources.page.path))))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,i.createElement)(this.state.pageResources.component,l({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:b,l({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(u.default.Component);j.propTypes={page:c.default.bool,layout:c.default.bool,location:c.default.object},o.default=j,e.exports=o.default},"./.cache/emitter.js":function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var t=n("./node_modules/mitt/dist/mitt.js"),s=a(t),r=(0,s.default)();e.exports=r},"./.cache/find-page.js":function(e,o,n){"use strict";var a=n("./node_modules/react-router-dom/index.js"),t={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var s=n.slice(o.length);if(s.split("#").length>1&&(s=s.split("#").slice(0,-1).join("")),s.split("?").length>1&&(s=s.split("?").slice(0,-1).join("")),t[s])return t[s];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,a.matchPath)(s,{path:e.path})||(0,a.matchPath)(s,{path:e.matchPath}))return r=e,t[s]=e,!0}else if((0,a.matchPath)(s,{path:e.path,exact:!0}))return r=e,t[s]=e,!0;return!1}),r}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa2868bfb69fc,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe70826b53c04,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---badracket!./.cache/json/badracket.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xdfab44933679,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/badracket.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---copilot!./.cache/json/copilot.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(26525784203702,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/copilot.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e4260,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(60335399758886,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xbf4c176e203a,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/offline-plugin-app-shell-fallback.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---opentable!./.cache/json/opentable.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xeee7066fba99,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/opentable.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x7b71d9db271c,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/page-2.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---sounds-just-like!./.cache/json/sounds-just-like.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x6e367531265c,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/sounds-just-like.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x67ef26645b2a,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var t=n("./node_modules/react/index.js"),s=(a(t),n("./.cache/find-page.js")),r=a(s),l=n("./.cache/emitter.js"),i=a(l),u=void 0,d={},c={},m={},p={},g={},f=[],b=[],j={},h=[],x={},y=function(e){return e&&e.default||e},_=void 0,w=!0;_=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return h.slice(-1)[0]},createResourceDownload:function(e){k(e,function(){h=h.filter(function(o){return o!==e}),_.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var v=function(e,o){return x[e]>x[o]?1:x[e]<x[o]?-1:0},P=function(e,o){return j[e]>j[o]?1:j[e]<j[o]?-1:0},k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])o.nextTick(function(){n(null,p[e])});else{var a="component---"===e.slice(0,12)?c.components[e]||c.layouts[e]:c.json[e];a(function(o,a){p[e]=a,n(o,a)})}},R=function(e,n){g[e]?o.nextTick(function(){n(null,g[e])}):k(e,function(o,a){if(o)n(o);else{var t=y(a());g[e]=t,n(o,t)}})},S=1,D={empty:function(){b=[],j={},x={},h=[],f=[]},addPagesArray:function(e){f=e;var o="";u=(0,r.default)(e,o)},addDevRequires:function(e){d=e},addProdRequires:function(e){c=e},dequeue:function(e){return b.pop()},enqueue:function(e){if(!f.some(function(o){return o.path===e}))return!1;var o=1/S;S+=1,j[e]?j[e]+=1:j[e]=1,D.has(e)||b.unshift(e),b.sort(P);var n=u(e);return n.jsonName&&(x[n.jsonName]?x[n.jsonName]+=1+o:x[n.jsonName]=1+o,h.indexOf(n.jsonName)!==-1||p[n.jsonName]||h.unshift(n.jsonName)),n.componentChunkName&&(x[n.componentChunkName]?x[n.componentChunkName]+=1+o:x[n.componentChunkName]=1+o,h.indexOf(n.componentChunkName)!==-1||p[n.jsonName]||h.unshift(n.componentChunkName)),h.sort(v),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:h,resourcesCount:x}},getPages:function(){return{pathArray:b,pathCount:j}},getPage:function(e){return u(e)},has:function(e){return b.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(u(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var o=e,n=Array.isArray(o),a=0,o=n?o:o[Symbol.iterator]();;){var t;if(n){if(a>=o.length)break;t=o[a++]}else{if(a=o.next(),a.done)break;t=a.value}var s=t;s.unregister()}window.location.reload()})),w=!1;var a=u(e);if(!a)return void console.log("A page wasn't found for \""+e+'"');if(e=a.path,m[e])return o.nextTick(function(){n(m[e]),i.default.emit("onPostLoadPageResources",{page:a,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var t=void 0,s=void 0,r=void 0,l=function(){if(t&&s&&(!a.layoutComponentChunkName||r)){m[e]={component:t,json:s,layout:r};var o={component:t,json:s,layout:r};n(o),i.default.emit("onPostLoadPageResources",{page:a,pageResources:o})}};return R(a.componentChunkName,function(e,o){e&&console.log("Loading the component for "+a.path+" failed"),t=o,l()}),R(a.jsonName,function(e,o){e&&console.log("Loading the JSON for "+a.path+" failed"),s=o,l()}),void(a.layoutComponentChunkName&&R(a.layoutComponentChunkName,function(e,o){e&&console.log("Loading the Layout for "+a.path+" failed"),r=o,l()}))},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};e.exports=D}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-badracket-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"badracket.json",path:"/badracket/"},{componentChunkName:"component---src-pages-copilot-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"copilot.json",path:"/copilot/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-opentable-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"opentable.json",path:"/opentable/"},{componentChunkName:"component---src-pages-page-2-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-sounds-just-like-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"sounds-just-like.json",path:"/sounds-just-like/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,a=[],t=[],s=function(){var e=o();e&&(t.push(e),n(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":t=t.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":a.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":a=a.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===t.length&&0===a.length&&s()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:a,resourcesDownloading:t}},empty:function(){a=[],t=[]}}}},0:function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=n("./.cache/api-runner-browser.js"),r=n("./node_modules/react/index.js"),l=a(r),i=n("./node_modules/react-dom/index.js"),u=a(i),d=n("./node_modules/react-router-dom/index.js"),c=n("./node_modules/gatsby-react-router-scroll/index.js"),m=n("./node_modules/history/createBrowserHistory.js"),p=a(m),g=n("./node_modules/domready/ready.js"),f=a(g),b=n("./.cache/emitter.js"),j=a(b),h=n("./.cache/pages.json"),x=a(h),y=n("./.cache/component-renderer.js"),_=a(y),w=n("./.cache/async-requires.js"),v=a(w),P=n("./.cache/loader.js"),k=a(P);n("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,k.default.addPagesArray(x.default),k.default.addProdRequires(v.default),window.asyncRequires=v.default,window.___loader=k.default,window.matchPath=d.matchPath,(0,s.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,s.apiRunner)("onRouteUpdate",{location:e,action:o})}))}function o(e,o){var n=o.location.pathname,a=(0,s.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(a.length>0)return a[0];if(e){var t=e.location.pathname;if(t===n)return!1}return!0}(0,s.apiRunner)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var a=function(e){function o(a){a.page.path===k.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){j.default.off("onPostLoadPageResources",o),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);k.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):j.default.on("onPostLoadPageResources",o)}};window.___navigateTo=a;var i=(0,p.default)();(0,s.apiRunner)("onRouteUpdate",{location:i.location,action:i.action});var m=(0,s.apiRunner)("replaceRouterComponent",{history:i})[0],g=function(e){var o=e.children;return l.default.createElement(d.Router,{history:i},o)};k.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,r.createElement)(m?m:g,null,(0,r.createElement)(c.ScrollContext,{shouldUpdateScroll:o},(0,r.createElement)((0,d.withRouter)(_.default),{layout:!0,children:function(o){return(0,r.createElement)(d.Route,{render:function(n){e(n.history);var a=o?o:n;return k.default.getPage(a.location.pathname)?(0,r.createElement)(_.default,t({page:!0},a)):(0,r.createElement)(_.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},a=(0,s.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,f.default)(function(){return u.default.render(l.default.createElement(a,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,s.apiRunner)("onInitialClientRender")})})})})},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var t=n("./.cache/emitter.js"),s=a(t),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),s.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./gatsby-browser.js":function(e,o){"use strict";o.onRouteUpdate=function(e,o,n){console.log(e.location.pathname),console.log(e)}},"./node_modules/domready/ready.js":function(e,o,n){!function(o,n){e.exports=n()}("domready",function(){var e,o=[],n=document,a=n.documentElement.doScroll,t="DOMContentLoaded",s=(a?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return s||n.addEventListener(t,e=function(){for(n.removeEventListener(t,e),s=1;e=o.shift();)e()}),function(e){s?setTimeout(e,0):o.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function a(){function e(e){var o=a.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,a=document.querySelector("head"),t=n.e,s=n.s;n.e=function(a,r){var l=!1,i=!0,u=function(e){r&&(r(n,e),r=null)};return!s&&o&&o[a]?void u(!0):(t(a,function(){l||(l=!0,i?setTimeout(function(){u()}):u())}),void(l||(i=!1,e(function(){l||(l=!0,s?s[a]=void 0:(o||(o={}),o[a]=!0),u(!0))}))))}}a()},"./node_modules/gatsby-plugin-catch-links/catch-links.js":function(e,o){"use strict";e.exports=function(e,o){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var n=null,a=e.target;a.parentNode;a=a.parentNode)if("A"===a.nodeName){n=a;break}if(!n)return!0;if(n.target&&"_self"!==n.target.toLowerCase())return!0;if(n.pathname===window.location.pathname&&""!==n.target.hash)return!0;if(n.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var t=document.createElement("a");t.href=n.href;var s=document.createElement("a");return s.href=window.location.href,t.host!==s.host||(e.preventDefault(),o(n.getAttribute("href")),!1)})}},"./node_modules/gatsby-plugin-catch-links/gatsby-browser.js":function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var t=n("./node_modules/gatsby-link/index.js"),s=n("./node_modules/gatsby-plugin-catch-links/catch-links.js"),r=a(s);(0,r.default)(window,function(e){(0,t.navigateTo)(e)})},"./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js":function(e,o,n){"use strict";o.onRouteUpdate=function(e){var o=e.location;"function"==typeof ga&&(window.ga("set","page",(o||{}).pathname),window.ga("send","pageview"))}},"./node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(99219681209289,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n("./node_modules/gatsby-plugin-offline/app-shell.js")})})}},"./node_modules/gatsby-plugin-offline/gatsby-browser.js":function(e,o){"use strict";o.registerServiceWorker=function(){return!0}},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/process/browser.js":function(e,o){function n(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function t(e){if(d===setTimeout)return setTimeout(e,0);if((d===n||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(o){try{return d.call(null,e,0)}catch(o){return d.call(this,e,0)}}}function s(e){if(c===clearTimeout)return clearTimeout(e);if((c===a||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(o){try{return c.call(null,e)}catch(o){return c.call(this,e)}}}function r(){f&&p&&(f=!1,p.length?g=p.concat(g):b=-1,g.length&&l())}function l(){if(!f){var e=t(r);f=!0;for(var o=g.length;o;){for(p=g,g=[];++b<o;)p&&p[b].run();b=-1,o=g.length}p=null,f=!1,s(e)}}function i(e,o){this.fun=e,this.array=o}function u(){}var d,c,m=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:n}catch(e){d=n}try{c="function"==typeof clearTimeout?clearTimeout:a}catch(e){c=a}}();var p,g=[],f=!1,b=-1;m.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];g.push(new i(e,o)),1!==g.length||f||t(l)},i.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9427c64ab85d,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-badracket-js!./src/pages/badracket.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(19913542803863,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/badracket.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-copilot-js!./src/pages/copilot.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x5bcf50292b59,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/copilot.js');
})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(35783957827783,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-opentable-js!./src/pages/opentable.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xb5b06a341ed7,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/opentable.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xc6c285f8fd10,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/page-2.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-sounds-just-like-js!./src/pages/sounds-just-like.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x7e13812d1036,function(o,a){a?(console.log("bundle loading error",a),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/sounds-just-like.js')})})}}});
//# sourceMappingURL=app-f55620a7c48e42f66c2b.js.map