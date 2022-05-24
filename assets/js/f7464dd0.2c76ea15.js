"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[8670],{29848:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return k}});var n=t(57689);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),k=a,f=m["".concat(l,".").concat(k)]||m[k]||c[k]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69726:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=t(62848),a=t(79213),o=(t(57689),t(29848)),i=["components"],p={id:"get-groups",title:"getGroups()"},l=void 0,u={unversionedId:"api/arke-js/arke/get-groups",id:"api/arke-js/arke/get-groups",title:"getGroups()",description:"getGroups() returns all Groups related to an Arke.",source:"@site/docs/api/arke-js/arke/get-groups.md",sourceDirName:"api/arke-js/arke",slug:"/api/arke-js/arke/get-groups",permalink:"/arke-docs/api/arke-js/arke/get-groups",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/arke/get-groups.md",tags:[],version:"current",frontMatter:{id:"get-groups",title:"getGroups()"},sidebar:"api",previous:{title:"get()",permalink:"/arke-docs/api/arke-js/arke/get-arke"},next:{title:"getParameters()",permalink:"/arke-docs/api/arke-js/arke/get-parameters"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function k(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getGroups()")," returns all ",(0,o.kt)("inlineCode",{parentName:"p"},"Groups")," related to an ",(0,o.kt)("inlineCode",{parentName:"p"},"Arke"),"."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,o.kt)("p",null,"api configuration object"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"performs an api call for getting all ",(0,o.kt)("inlineCode",{parentName:"li"},"Groups")," related to an ",(0,o.kt)("inlineCode",{parentName:"li"},"Arke")),(0,o.kt)("li",{parentName:"ul"},"returns a list of ",(0,o.kt)("inlineCode",{parentName:"li"},"Groups")," which has ",(0,o.kt)("inlineCode",{parentName:"li"},"GroupType[]")," as type")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const groups = await client.arke('my_arke').getGroups()\n")))}k.isMDXComponent=!0}}]);