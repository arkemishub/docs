"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[8514],{29848:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(57689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,y=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(62848),o=n(79213),a=(n(57689),n(29848)),i=["components"],p={id:"get-connection-types",title:"getConnectionTypes()"},c=void 0,l={unversionedId:"api/arke-js/get-connection-types",id:"api/arke-js/get-connection-types",title:"getConnectionTypes()",description:"getConnectionTypes() returns all ConnectionTypes",source:"@site/docs/api/arke-js/get-connection-types.md",sourceDirName:"api/arke-js",slug:"/api/arke-js/get-connection-types",permalink:"/api/arke-js/get-connection-types",editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/get-connection-types.md",tags:[],version:"current",frontMatter:{id:"get-connection-types",title:"getConnectionTypes()"},sidebar:"api",previous:{title:"getAllParameters()",permalink:"/api/arke-js/get-all-parameters"},next:{title:"getGroup()",permalink:"/api/arke-js/get-group"}},s={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getConnectionTypes()")," returns all ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectionTypes")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"config")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,a.kt)("p",null,"api configuration object"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"performs an api call for getting all ",(0,a.kt)("inlineCode",{parentName:"li"},"ConnectionTypes")," "),(0,a.kt)("li",{parentName:"ul"},"returns a list of ",(0,a.kt)("inlineCode",{parentName:"li"},"ConnectionTypes")," which has ",(0,a.kt)("inlineCode",{parentName:"li"},"ConnectionType[]")," as type")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const connectionTypes = await client.getConnectionTypes()\n")))}m.isMDXComponent=!0}}]);