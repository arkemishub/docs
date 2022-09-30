"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[3435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"get-child",title:"getChild()"},l=void 0,o={unversionedId:"api/arke-js/arke/unit/get-child",id:"api/arke-js/arke/unit/get-child",title:"getChild()",description:"getChild() method returns all child of an ArkeUnit.",source:"@site/docs/api/arke-js/arke/unit/get-child.md",sourceDirName:"api/arke-js/arke/unit",slug:"/api/arke-js/arke/unit/get-child",permalink:"/arke-docs/api/arke-js/arke/unit/get-child",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/arke/unit/get-child.md",tags:[],version:"current",frontMatter:{id:"get-child",title:"getChild()"},sidebar:"api",previous:{title:"get()",permalink:"/arke-docs/api/arke-js/arke/unit/get-unit"},next:{title:"removeChild()",permalink:"/arke-docs/api/arke-js/arke/unit/remove-child"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getChild()")," method returns all child of an ",(0,a.kt)("inlineCode",{parentName:"p"},"ArkeUnit"),"."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"config")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,a.kt)("p",null,"api configuration object"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"performs an api call and retrieves all ",(0,a.kt)("inlineCode",{parentName:"li"},"ArkeUnit")," child"),(0,a.kt)("li",{parentName:"ul"},"returns a list of ",(0,a.kt)("inlineCode",{parentName:"li"},"ArkeUnit")," of type ",(0,a.kt)("inlineCode",{parentName:"li"},"ArkeUnitType[]"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const childs = await client.arke('my_arke').unit(1).getChild()\n")))}s.isMDXComponent=!0}}]);