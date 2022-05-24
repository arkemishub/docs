"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[6592],{29848:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(57689);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),d=n,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},64030:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=r(62848),n=r(79213),i=(r(57689),r(29848)),o=["components"],p={id:"edit-parameter",title:"edit()"},l=void 0,c={unversionedId:"api/arke-js/arke/parameter/edit-parameter",id:"api/arke-js/arke/parameter/edit-parameter",title:"edit()",description:"edit() performs an edit of instanced Parameter.",source:"@site/docs/api/arke-js/arke/parameter/edit.md",sourceDirName:"api/arke-js/arke/parameter",slug:"/api/arke-js/arke/parameter/edit-parameter",permalink:"/arke-docs/api/arke-js/arke/parameter/edit-parameter",editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/arke/parameter/edit.md",tags:[],version:"current",frontMatter:{id:"edit-parameter",title:"edit()"},sidebar:"api",previous:{title:"delete()",permalink:"/arke-docs/api/arke-js/arke/parameter/delete-parameter"},next:{title:"get()",permalink:"/arke-docs/api/arke-js/arke/parameter/get-parameter"}},u={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],s={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"edit()")," performs an edit of instanced ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameter"),"."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"data")," ",(0,i.kt)("em",{parentName:"p"},"required")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Record<string, unknown>")),(0,i.kt)("p",null,"edit payload"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"config")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,i.kt)("p",null,"api configuration object"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"performs an api call for editing a ",(0,i.kt)("inlineCode",{parentName:"li"},"Parameter")),(0,i.kt)("li",{parentName:"ul"},"returns the edited ",(0,i.kt)("inlineCode",{parentName:"li"},"Parameter")," which has ",(0,i.kt)("inlineCode",{parentName:"li"},"ParameterType")," as type")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const edited = await client.arke('my_arke').parameter('name').edit({ type: 'string' })\n")))}d.isMDXComponent=!0}}]);