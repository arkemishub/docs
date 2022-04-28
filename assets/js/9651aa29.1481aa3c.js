"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[2399],{29848:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(57689);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=c(r),f=a,m=k["".concat(p,".").concat(f)]||k[f]||s[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},94634:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(62848),a=r(79213),i=(r(57689),r(29848)),o=["components"],l={id:"get-arke",title:"get()"},p=void 0,c={unversionedId:"api/arke-js/arke/get-arke",id:"api/arke-js/arke/get-arke",title:"get()",description:"get() method returns the detail of an Arke.",source:"@site/docs/api/arke-js/arke/get.md",sourceDirName:"api/arke-js/arke",slug:"/api/arke-js/arke/get-arke",permalink:"/arke-docs/api/arke-js/arke/get-arke",editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/arke/get.md",tags:[],version:"current",frontMatter:{id:"get-arke",title:"get()"},sidebar:"api",previous:{title:"edit()",permalink:"/arke-docs/api/arke-js/arke/edit-arke"},next:{title:"getGroups()",permalink:"/arke-docs/api/arke-js/arke/get-groups"}},u={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],k={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get()")," method returns the detail of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Arke"),"."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"config")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,i.kt)("p",null,"api configuration object"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"performs an api call and retrieves ",(0,i.kt)("inlineCode",{parentName:"li"},"Arke")," detail"),(0,i.kt)("li",{parentName:"ul"},"returns an ",(0,i.kt)("inlineCode",{parentName:"li"},"Arke")," detail of type ",(0,i.kt)("inlineCode",{parentName:"li"},"ArkeType"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const detail = await client.arke('my_arke').get()\n")))}f.isMDXComponent=!0}}]);