"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[4195],{29848:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(57689);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=c(r),f=a,m=k["".concat(p,".").concat(f)]||k[f]||s[f]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},69297:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=r(62848),a=r(79213),l=(r(57689),r(29848)),i=["components"],o={id:"get-all-arke",title:"getAllArke()"},p=void 0,c={unversionedId:"api/arke-js/get-all-arke",id:"api/arke-js/get-all-arke",title:"getAllArke()",description:"getAllArke() returns all Arke",source:"@site/docs/api/arke-js/get-all-arke.md",sourceDirName:"api/arke-js",slug:"/api/arke-js/get-all-arke",permalink:"/api/arke-js/get-all-arke",editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/get-all-arke.md",tags:[],version:"current",frontMatter:{id:"get-all-arke",title:"getAllArke()"},sidebar:"api",previous:{title:"createArke()",permalink:"/api/arke-js/create-arke"},next:{title:"getAllGroups()",permalink:"/api/arke-js/get-all-groups"}},u={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],k={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getAllArke()")," returns all ",(0,l.kt)("inlineCode",{parentName:"p"},"Arke")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"config")," ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,l.kt)("p",null,"api configuration object"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"performs an api call for getting all ",(0,l.kt)("inlineCode",{parentName:"li"},"Arke")," "),(0,l.kt)("li",{parentName:"ul"},"returns a list of ",(0,l.kt)("inlineCode",{parentName:"li"},"Arke")," which has ",(0,l.kt)("inlineCode",{parentName:"li"},"ArkeType[]")," as type")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const allArke = await client.getAllArke()\n")))}f.isMDXComponent=!0}}]);