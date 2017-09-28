webpackJsonp([19913542803863],{"./src/components/List.js":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var n=a("./node_modules/react/index.js"),c=r(n),d=a("./src/components/List.module.styl"),u=r(d),i=function(e){function t(){return l(this,t),s(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.items,r=a.map(function(e,t){return"string"==typeof e?c.default.createElement("li",{key:t},e):c.default.createElement("li",{key:t},c.default.createElement("a",{target:"_blank",href:e.href},e.name))});return c.default.createElement("ul",{className:u.default.unstyledList},c.default.createElement("li",{className:u.default.title},t),r)},t}(c.default.Component);t.default=i,e.exports=t.default},"./src/components/List.module.styl":function(e,t){e.exports={unstyledList:"src-components----List-module---unstyledList---K2Ynm",title:"src-components----List-module---title---xzTTV"}},"./src/pages/badracket.com-v1.jpg":function(e,t,a){e.exports=a.p+"static/badracket.com-v1.137b07c9.jpg"},"./src/pages/badracket.com-v4.jpg":function(e,t,a){e.exports=a.p+"static/badracket.com-v4.f4a98ff3.jpg"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-stage-0/lib/index.js","/Users/adamwagner/Dropbox/Programming/adamwagner.io/Site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/badracket.js':function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var n=a("./node_modules/react/index.js"),c=r(n),d=a("./node_modules/gatsby-link/index.js"),u=(r(d),a("./src/components/Box.js")),i=r(u),f=a("./src/components/List.js"),m=r(f),p=a("./src/components/Section.js"),g=r(p),b=a("./src/components/ProjectDetail.js"),h=r(b),E=a("./src/styles/vars.json"),v=a("./src/pages/badracket.module.styl"),y=r(v),w=a("./src/pages/brv5-wireframe.png"),x=r(w),j=a("./src/pages/badracket.com-v1.jpg"),k=r(j),N=a("./src/pages/badracket.com-v4.jpg"),S=r(N),C=a("./src/pages/brv5-possible.gif"),O=r(C),L=a("./src/pages/brv5-mobile-wireframe.jpg"),A=r(L),I=a("./src/pages/brv5-visual-draft-0.jpg"),D=(r(I),a("./src/pages/brv5-final-desktop-mockup.jpg")),T=r(D),z=a("./src/pages/brv5-iphone.jpg"),B=r(z),q=a("./src/pages/brv5-final-interview.png"),K=r(q),P=a("./src/pages/brv5-final-shows.png"),W=r(P),M=a("./src/pages/brv5-final-buy.png"),J=r(M),G=function(e){function t(){return l(this,t),s(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return c.default.createElement(h.default,{projectName:"badracket"},c.default.createElement("div",{ref:"content"},c.default.createElement(g.default,{textColor:E.colors.concrete,color:E.colors.red,softTop:"5em",softBottom:"4em"},c.default.createElement(i.default,{container:!0},c.default.createElement(i.default,{twoThird:!0,softRight:"10p"},c.default.createElement("div",null,c.default.createElement("h1",null,"Redesigning the web experience for Cleveland's craft recording space."),c.default.createElement("p",null,"As the founder of Bad Racket, I was responsible for much more than its website, yet I had a v1 of badracket.com before I had recorded a single band."),c.default.createElement("p",null,"The fifth major redesign placed content produced by the studio at the forefront, enabling local music fans to preview and purchase albums and videos."))),c.default.createElement(i.default,{third:!0},c.default.createElement(m.default,{title:"Client",items:["Bad Racket Recording Studio"]}),c.default.createElement(m.default,{title:"Roles",items:["UX design","UI design","Content strategy","Development"]}),c.default.createElement(m.default,{title:"Featured on",items:[{name:"HOW interactive design",href:"http://www.howdesign.com/web-design-resources-technology/badracket-com/"},{name:"Best of Cleveland Design Awards",href:"http://gomedia.com/zine/news/cleveland-web-and-graphic/"},{name:"Codrops",href:"https://tympanus.net/codrops/2012/12/18/a-creative-year-distinctive-web-designs-of-2012/"},{name:"Best Of Responsive Web Designs",href:"http://www.inserthtml.com/2013/01/responsive-design-2012/"},{name:"Design Woop",href:"http://designwoop.com/2012/08/25-examples-of-typographic-focused-web-design/"}]})))),c.default.createElement(g.default,{softTop:"5em",softBottom:"5em",className:y.default.processContainer},c.default.createElement(i.default,{container:!0},c.default.createElement(i.default,null,c.default.createElement("h2",null,"Redesign Process"),c.default.createElement("div",{className:y.default.process},c.default.createElement("div",{className:y.default.processItem},c.default.createElement("p",null,"Discover"),c.default.createElement("p",{className:y.default.textSecondary},"Evaluate previous versions"),c.default.createElement("p",{className:y.default.textSecondary},"Understand user needs"),c.default.createElement("p",{className:y.default.textSecondary},"Set redesign goals"),c.default.createElement("p",{className:y.default.textSecondary},"Determine success criteria")),c.default.createElement("div",{className:y.default.processItem},c.default.createElement("p",null,"Design"),c.default.createElement("p",{className:y.default.textSecondary},"Wireframe structure"),c.default.createElement("p",{className:y.default.textSecondary},"Wireframe UX patterns"),c.default.createElement("p",{className:y.default.textSecondary},"Design visual aesthetic alongside real content"),c.default.createElement("p",{className:y.default.textSecondary},"Fine tune interactions")),c.default.createElement("div",{className:y.default.processItem},c.default.createElement("p",null,"Develop"),c.default.createElement("p",{className:y.default.textSecondary},"Implement vision in code"),c.default.createElement("p",{className:y.default.textSecondary},"Address unforeseen design challenges"),c.default.createElement("p",{className:y.default.textSecondary},"Tune for performance")),c.default.createElement("div",{className:y.default.processItem},c.default.createElement("p",null,"Measure"),c.default.createElement("p",{className:y.default.textSecondary},"Monitor success metrics"),c.default.createElement("p",{className:y.default.textSecondary},"Document performance for next iteration cycle")))))),c.default.createElement(g.default,{softTop:"5em",softBottom:"5em",color:E.colors.white,textColor:E.colors.asphalt},c.default.createElement(i.default,{container:!0,softBottom:"1em"},c.default.createElement(i.default,{full:!0,softRight:"20p"},c.default.createElement("h2",{style:{color:E.colors.red}},"1. Discovery: Evaluating previous versions"),c.default.createElement("p",null,"Every redesign begins with a serious of questions: Why? Is the current version underperforming? In what ways? What should be done to improve it?"))),c.default.createElement(i.default,{container:!0,softBottom:"05em"},c.default.createElement(i.default,{third:!0},c.default.createElement("img",{className:y.default.grayscale,src:k.default,alt:""}),c.default.createElement("p",{className:y.default.textSecondaryBold},"Version 1 (2009)"),c.default.createElement("p",{className:y.default.textSecondary},"The color palette and visual aesthetic are established, but structure, usability, and performance are lacking.")),c.default.createElement(i.default,{third:!0},c.default.createElement("img",{className:y.default.grayscale,src:S.default,alt:""}),c.default.createElement("p",{className:y.default.textSecondaryBold},"Version 4 (2012)"),c.default.createElement("p",{className:y.default.textSecondary},"Hierarchy and layout are improved, but the site is still text-heavy and performs poorly on mobile devices.")),c.default.createElement(i.default,{third:!0},c.default.createElement("img",{className:y.default.grayscale,src:O.default,alt:""}),c.default.createElement("p",{className:y.default.textSecondaryBold},"The potential redesign"),c.default.createElement("p",{className:y.default.textSecondary},"Bad Racket needs a mobile-first, content-first digital home that fosters community among the bands it works with and their fans."))),c.default.createElement(i.default,{container:!0,softTop:"3em"},c.default.createElement(i.default,{full:!0,softRight:"20p"},c.default.createElement("h2",{style:{color:E.colors.red}},"2. Discovery: Setting Redesign Goals"),c.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, porro, dolores molestias vero quos assumenda blanditiis numquam laborum, asperiores enim doloremque! Similique ipsum repudiandae ex porro? Rerum non ducimus soluta."))),c.default.createElement(i.default,{container:!0,softTop:"2em"},c.default.createElement(i.default,{half:!0},c.default.createElement(m.default,{title:"Foster community",items:["Social login","Guest posts","Band interviews","Local show listings"]})),c.default.createElement(i.default,{half:!0},c.default.createElement(m.default,{title:"Increase interactivity",items:["Persistent music player","Integrated payments","Strong mobile experience"]})))),c.default.createElement(g.default,{softTop:"5em",softBottom:"2em",textColor:E.colors.asphalt,color:E.colors.offWhite},c.default.createElement(i.default,{container:!0},c.default.createElement(i.default,{twoThird:!0},c.default.createElement("h2",{style:{color:E.colors.red}},"3. Wireframing"),c.default.createElement("p",null,"Initial wireframes took a page from Spotify by putting content consumption front and center."))),c.default.createElement("img",{src:x.default,alt:""})),c.default.createElement(g.default,{softBottom:"3em",textColor:E.colors.asphalt,color:E.colors.offWhite},c.default.createElement(i.default,{container:!0},c.default.createElement(i.default,{half:!0,center:!0,textCenter:!0,hard:!0},c.default.createElement("p",null,"Bad Racket needed a vastly superior mobile experience compared to previous versions of the site, so this was a focus early on."))),c.default.createElement("img",{src:A.default,alt:""})),c.default.createElement(g.default,{softTop:"3em",textColor:E.colors.asphalt,color:E.colors.offWhite},c.default.createElement(i.default,{container:!0,softBottom:"2em"},c.default.createElement(i.default,{twoThird:!0},c.default.createElement("h2",{style:{color:E.colors.red}},"4. Visual design"),c.default.createElement("p",null,"With wireframes as a guideline, visual styles are defined and microinterations are tweaked. In a content-heavy design such as this, it's important to develop visuals alongside real content."))),c.default.createElement("img",{src:T.default,alt:""})),c.default.createElement(g.default,{softTop:"5em",softBottom:"5em",textColor:E.colors.white,color:E.colors.red},c.default.createElement(i.default,{container:!0},c.default.createElement(i.default,{half:!0,center:!0,textCenter:!0,hard:!0},c.default.createElement("p",null,"Interviews were accompanied by custom illustrations done by the talented ",c.default.createElement("a",{target:"_blank",href:"https://dribbble.com/andrewkuhar"},"Andrew Kuhar"),"."))),c.default.createElement("img",{src:K.default,alt:""})),c.default.createElement(g.default,null,c.default.createElement("img",{src:B.default,alt:""})),c.default.createElement(g.default,{softTop:"5em",softBottom:"5em",textColor:E.colors.asphalt,color:E.colors.concrete},c.default.createElement(i.default,{container:!0},c.default.createElement(i.default,{half:!0,center:!0,textCenter:!0,hard:!0},c.default.createElement("p",null,"Facebook integration identified loyal fans for outreach and generated social momentum around events hosted by Bad Racket."))),c.default.createElement("img",{src:W.default,alt:""})),c.default.createElement(g.default,{softTop:"5em",softBottom:"5em",textColor:E.colors.white,color:E.colors.red},c.default.createElement(i.default,{container:!0},c.default.createElement(i.default,{half:!0,center:!0,textCenter:!0,hard:!0},c.default.createElement("p",null,"Stripe integration enabled fans to purchase albums directly from Bad Racket and encouraged bands to distribute their music through Bad Racket."))),c.default.createElement("img",{src:J.default,alt:""})),c.default.createElement(g.default,{color:E.colors.white,textColor:E.colors.asphalt,softTop:"5em",softBottom:"4em"},c.default.createElement(i.default,{container:!0},c.default.createElement(i.default,{full:!0},c.default.createElement("h2",null,"Key Results"))),c.default.createElement(i.default,{container:!0},c.default.createElement(i.default,{half:!0},c.default.createElement("p",null,"The redesigned badracket.com was faster, content forward, and engaging."),c.default.createElement("p",null,"Facebook login plus Mixpanel allowed for a tailored experience and timely followup via drip email."),c.default.createElement("p",null,"Stripe integration helped fans support local bands."),c.default.createElement("p",null,"Attendance at Bad Racket's hosted shows grew, as did the post-show social media engagement.")),c.default.createElement(i.default,{third:!0},c.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo neque, repellat quaerat illum, sapiente at harum placeat aliquam odit voluptatibus maiores repellendus praesentium officia ex perspiciatis eveniet laudantium odio inventore?"))))))},t}(c.default.Component);t.default=G,e.exports=t.default},"./src/pages/badracket.module.styl":function(e,t){e.exports={textSecondary:"src-pages----badracket-module---textSecondary---2bMyh",textSecondaryBold:"src-pages----badracket-module---textSecondaryBold---3yg1T",textBold:"src-pages----badracket-module---textBold---1cSuI","hide--mobile":"src-pages----badracket-module---hide--mobile---37DKK","show--mobile":"src-pages----badracket-module---show--mobile---3Myot","hide--tablet":"src-pages----badracket-module---hide--tablet---1Qa7d","show--tablet":"src-pages----badracket-module---show--tablet---2wnRq","hide--desk":"src-pages----badracket-module---hide--desk---2wwgl","show--desk":"src-pages----badracket-module---show--desk---1nTTt","hide--huge":"src-pages----badracket-module---hide--huge---1bayD","show--huge":"src-pages----badracket-module---show--huge---1wXPz",grayscale:"src-pages----badracket-module---grayscale---2Ghz2",processContainer:"src-pages----badracket-module---processContainer---1vRtD",process:"src-pages----badracket-module---process---37Ga5",processItem:"src-pages----badracket-module---processItem---20vp3"}},"./src/pages/brv5-final-buy.png":function(e,t,a){e.exports=a.p+"static/brv5-final-buy.a7319fcc.png"},"./src/pages/brv5-final-desktop-mockup.jpg":function(e,t,a){e.exports=a.p+"static/brv5-final-desktop-mockup.18eec238.jpg"},"./src/pages/brv5-final-interview.png":function(e,t,a){e.exports=a.p+"static/brv5-final-interview.a0daf790.png"},"./src/pages/brv5-final-shows.png":function(e,t,a){e.exports=a.p+"static/brv5-final-shows.d563da3c.png"},"./src/pages/brv5-iphone.jpg":function(e,t,a){e.exports=a.p+"static/brv5-iphone.54385a99.jpg"},"./src/pages/brv5-mobile-wireframe.jpg":function(e,t,a){e.exports=a.p+"static/brv5-mobile-wireframe.755a8531.jpg"},"./src/pages/brv5-possible.gif":function(e,t){e.exports="data:image/gif;base64,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tmKyheTsapvLhOE2twJT7W4/AFff/jaNEBuuDG9r3B1UVbjJ/9UAZQPb3E5CDLrRZV1xq4uDujIXuxagLHdj97DtfneD1x2v+sJrXhp4N70ySKp42euA9cL3BdqdLwzka18WuDe/Eywvf1VQ3/+2IHMHILABDAwABCtYwAxusIMfDOEIS3jCFK6whS+M4QxreMMc7rCHRdTaSlHXvCGm1IjHW+JJnfi7KQ7Airnb4hdjN8YffiU+a7wAGuOYATresQJ67GMEADnIB74xkRNsZCIPWclJDvKSndxkHz9ZylHe8ZStXGUcX1nLWa7xlr3c5Q9/Wcxh9vCYzVzmDp9ZzWnm8Jrd3OYNv1nOcdbwnO1c5wzfWc95xvCe/dznC/9Z0IG28P+gDV3oCh9a0Ymm8KId3egJP1rSkT6ypS+N6UxretOc7rSnPw3qUIt61KQutalPjepUq3rVrG61q18N61jLeta0rrWtb43rXOt617zuta9/DexgC3vYxC62sY+N7GQre9nMbraznw3taEt72tSutrWvje1sa3vb3O62t78N7nCLe9zkLre5z43udKt73exut7vfDe94y3ve9K63ve+N73zre9/87re//w3wgAt84AQvuMEPjvCEK3zhDG+4wx8O8YhLfOIUr7jFL47xjGt84xzvuMc/DvKQi3zkJC+5yU+O8pSrfOUsb7nLXw7zmMt85jSvuc1vjvOc63znPO+5z397DvSgC33oRC+60Y+O9KQrfelMb7rTnw71qEt96lSvutWvjvWsa33rXO+6178O9rCLfexkL7vZz472tKt97Wxvu9vfDve4y33udK+73e+O97zrfe9877vf/w74wAt+8IQvvOEPj/jEK37xjG+84x8P+chLfvKUr7zlNV0AADs="},"./src/pages/brv5-visual-draft-0.jpg":function(e,t,a){e.exports=a.p+"static/brv5-visual-draft-0.9ec252c5.jpg"},"./src/pages/brv5-wireframe.png":function(e,t,a){e.exports=a.p+"static/brv5-wireframe.2ad654e5.png"}});
//# sourceMappingURL=component---src-pages-badracket-js-bbe34be5c70609a5c45b.js.map