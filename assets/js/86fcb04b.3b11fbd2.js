"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[2024],{29848:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(57689);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,g=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40756:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=r(62848),a=r(79213),o=(r(57689),r(29848)),i=["components"],p={id:"get-group",title:"getGroup()"},u=void 0,l={unversionedId:"api/arke-js/get-group",id:"api/arke-js/get-group",title:"getGroup()",description:"getGroup() returns a Group detail",source:"@site/docs/api/arke-js/get-group.md",sourceDirName:"api/arke-js",slug:"/api/arke-js/get-group",permalink:"/api/arke-js/get-group",editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/get-group.md",tags:[],version:"current",frontMatter:{id:"get-group",title:"getGroup()"},sidebar:"api",previous:{title:"getConnectionTypes()",permalink:"/api/arke-js/get-connection-types"},next:{title:"prepareArke()",permalink:"/api/arke-js/prepare-arke"}},c={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getGroup()")," returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Group")," detail"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"group")," ",(0,o.kt)("em",{parentName:"p"},"required")," ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"group id"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,o.kt)("p",null,"api configuration object"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"performs an api call for getting a ",(0,o.kt)("inlineCode",{parentName:"li"},"Group")," detail "),(0,o.kt)("li",{parentName:"ul"},"returns detail of a ",(0,o.kt)("inlineCode",{parentName:"li"},"Group")," which has ",(0,o.kt)("inlineCode",{parentName:"li"},"GroupType")," as type")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const group = await client.getAllGroups('my_group')\n")))}f.isMDXComponent=!0}}]);