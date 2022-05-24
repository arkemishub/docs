"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[506],{29848:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(57689);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),k=a,m=f["".concat(u,".").concat(k)]||f[k]||s[k]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92378:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(62848),a=r(79213),i=(r(57689),r(29848)),o=["components"],l={id:"get-unit",title:"get()"},u=void 0,p={unversionedId:"api/arke-js/arke/unit/get-unit",id:"api/arke-js/arke/unit/get-unit",title:"get()",description:"get() method returns the detail of an ArkeUnit.",source:"@site/docs/api/arke-js/arke/unit/get.md",sourceDirName:"api/arke-js/arke/unit",slug:"/api/arke-js/arke/unit/get-unit",permalink:"/arke-docs/api/arke-js/arke/unit/get-unit",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/arke/unit/get.md",tags:[],version:"current",frontMatter:{id:"get-unit",title:"get()"},sidebar:"api",previous:{title:"Instance",permalink:"/arke-docs/api/arke-js/arke/unit/unit"},next:{title:"getChild()",permalink:"/arke-docs/api/arke-js/arke/unit/get-child"}},c={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],f={toc:s};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get()")," method returns the detail of an ",(0,i.kt)("inlineCode",{parentName:"p"},"ArkeUnit"),"."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"config")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,i.kt)("p",null,"api configuration object"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"performs an api call and retrieves ",(0,i.kt)("inlineCode",{parentName:"li"},"ArkeUnit")," detail"),(0,i.kt)("li",{parentName:"ul"},"returns an ",(0,i.kt)("inlineCode",{parentName:"li"},"ArkeUnit")," detail of type ",(0,i.kt)("inlineCode",{parentName:"li"},"ArkeUnitType"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const detail = await client.arke('my_arke').unit(1).get()\n")))}k.isMDXComponent=!0}}]);