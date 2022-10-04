"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[7919],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return t?n.createElement(m,p(p({ref:r},c),{},{components:t})):n.createElement(m,p({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74182:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={id:"prepare-group",title:"prepareGroup()"},p=void 0,i={unversionedId:"api/frontend/client-js/arke/prepare-group",id:"api/frontend/client-js/arke/prepare-group",title:"prepareGroup()",description:"prepareGroup() returns fields needed for adding an Arke a Group.",source:"@site/docs/api/frontend/client-js/arke/prepare-group.md",sourceDirName:"api/frontend/client-js/arke",slug:"/api/frontend/client-js/arke/prepare-group",permalink:"/arke-docs/api/frontend/client-js/arke/prepare-group",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/api/frontend/client-js/arke/prepare-group.md",tags:[],version:"current",frontMatter:{id:"prepare-group",title:"prepareGroup()"}},l={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"prepareGroup()")," returns fields needed for adding an ",(0,a.kt)("inlineCode",{parentName:"p"},"Arke")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"Group"),"."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"config")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,a.kt)("p",null,"api configuration object"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"performs an api call for getting ",(0,a.kt)("inlineCode",{parentName:"li"},"Arke")," related ",(0,a.kt)("inlineCode",{parentName:"li"},"Group")," fields"),(0,a.kt)("li",{parentName:"ul"},"return fields needed for adding an ",(0,a.kt)("inlineCode",{parentName:"li"},"Arke")," to a ",(0,a.kt)("inlineCode",{parentName:"li"},"Group")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"Field[]"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fields = await client.arke('my_arke').prepareGroup()\n")))}s.isMDXComponent=!0}}]);