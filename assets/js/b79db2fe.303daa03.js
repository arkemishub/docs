"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[4364],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,f=s["".concat(l,".").concat(u)]||s[u]||m[u]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},51109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"edit-parameter",title:"edit()"},o=void 0,p={unversionedId:"api/frontend/client-js/parameter/edit-parameter",id:"api/frontend/client-js/parameter/edit-parameter",title:"edit()",description:"edit() performs an edit of instanced Parameter.",source:"@site/docs/api/frontend/client-js/parameter/edit.md",sourceDirName:"api/frontend/client-js/parameter",slug:"/api/frontend/client-js/parameter/edit-parameter",permalink:"/arke-docs/api/frontend/client-js/parameter/edit-parameter",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/api/frontend/client-js/parameter/edit.md",tags:[],version:"current",frontMatter:{id:"edit-parameter",title:"edit()"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"edit()")," performs an edit of instanced ",(0,a.kt)("inlineCode",{parentName:"p"},"Parameter"),"."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"data")," ",(0,a.kt)("em",{parentName:"p"},"required")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<string, unknown>")),(0,a.kt)("p",null,"edit payload"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"config")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,a.kt)("p",null,"api configuration object"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"performs an api call for editing a ",(0,a.kt)("inlineCode",{parentName:"li"},"Parameter")),(0,a.kt)("li",{parentName:"ul"},"returns the edited ",(0,a.kt)("inlineCode",{parentName:"li"},"Parameter")," which has ",(0,a.kt)("inlineCode",{parentName:"li"},"ParameterType")," as type")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const edited = await client.arke('my_arke').parameter('name').edit({ type: 'string' })\n")))}m.isMDXComponent=!0}}]);