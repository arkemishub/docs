"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[1533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),s=i,m=f["".concat(u,".").concat(s)]||f[s]||d[s]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"edit-unit-configuration",title:"editConfiguration()"},o=void 0,l={unversionedId:"api/frontend/client-js/unit/edit-unit-configuration",id:"api/frontend/client-js/unit/edit-unit-configuration",title:"editConfiguration()",description:"editConfiguration() performs a change on the configuration of an ArkeUnit.",source:"@site/docs/api/frontend/client-js/unit/edit-configuration.md",sourceDirName:"api/frontend/client-js/unit",slug:"/api/frontend/client-js/unit/edit-unit-configuration",permalink:"/arke-docs/api/frontend/client-js/unit/edit-unit-configuration",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/api/frontend/client-js/unit/edit-configuration.md",tags:[],version:"current",frontMatter:{id:"edit-unit-configuration",title:"editConfiguration()"}},u={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"editConfiguration()")," performs a change on the configuration of an ",(0,i.kt)("inlineCode",{parentName:"p"},"ArkeUnit"),"."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"data")," ",(0,i.kt)("em",{parentName:"p"},"required")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Record<string, unknown>")),(0,i.kt)("p",null,"edited data"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"config")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,i.kt)("p",null,"api configuration object"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"performs an api call to edit the configuration of an ",(0,i.kt)("inlineCode",{parentName:"li"},"ArkeUnit")," "),(0,i.kt)("li",{parentName:"ul"},"returns the edited ",(0,i.kt)("inlineCode",{parentName:"li"},"ArkeUnit"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const edited = await client.arke('my_arke').unit(1).editConfiguration({ name: 'New Name' })\n")))}d.isMDXComponent=!0}}]);