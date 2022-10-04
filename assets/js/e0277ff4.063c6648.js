"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[7110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=i,m=s["".concat(u,".").concat(g)]||s[g]||f[g]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"get-unit-configuration",title:"getConfiguration()"},a=void 0,l={unversionedId:"api/frontend/client-js/unit/get-unit-configuration",id:"api/frontend/client-js/unit/get-unit-configuration",title:"getConfiguration()",description:"getConfiguration() method returns the configuration of an ArkeUnit.",source:"@site/docs/api/frontend/client-js/unit/get-configuration.md",sourceDirName:"api/frontend/client-js/unit",slug:"/api/frontend/client-js/unit/get-unit-configuration",permalink:"/arke-docs/api/frontend/client-js/unit/get-unit-configuration",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/api/frontend/client-js/unit/get-configuration.md",tags:[],version:"current",frontMatter:{id:"get-unit-configuration",title:"getConfiguration()"}},u={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getConfiguration()")," method returns the configuration of an ",(0,i.kt)("inlineCode",{parentName:"p"},"ArkeUnit"),"."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"config")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,i.kt)("p",null,"api configuration object"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"performs an api call and retrieves ",(0,i.kt)("inlineCode",{parentName:"li"},"ArkeUnit")," configuration"),(0,i.kt)("li",{parentName:"ul"},"returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"json"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const configuration = await client.arke('my_arke').unit(1).getConfiguration()\n")))}f.isMDXComponent=!0}}]);