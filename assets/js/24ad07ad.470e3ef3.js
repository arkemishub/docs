"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[2673],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},22794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"delete-group",title:"deleteGroup()"},l=void 0,p={unversionedId:"api/frontend/client-js/arke/delete-group",id:"api/frontend/client-js/arke/delete-group",title:"deleteGroup()",description:"deleteGroup() deletes an Arke from a Group.",source:"@site/docs/api/frontend/client-js/arke/delete-group.md",sourceDirName:"api/frontend/client-js/arke",slug:"/api/frontend/client-js/arke/delete-group",permalink:"/arke-docs/api/frontend/client-js/arke/delete-group",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/api/frontend/client-js/arke/delete-group.md",tags:[],version:"current",frontMatter:{id:"delete-group",title:"deleteGroup()"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"deleteGroup()")," deletes an ",(0,a.kt)("inlineCode",{parentName:"p"},"Arke")," from a ",(0,a.kt)("inlineCode",{parentName:"p"},"Group"),"."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"group")," ",(0,a.kt)("em",{parentName:"p"},"required")," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"group id"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"config")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,a.kt)("p",null,"api configuration object"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"performs an api call for deleting an ",(0,a.kt)("inlineCode",{parentName:"li"},"Arke")," from a ",(0,a.kt)("inlineCode",{parentName:"li"},"Group"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await client.arke('my_arke').deleteGroup('my_group')\n")))}d.isMDXComponent=!0}}]);