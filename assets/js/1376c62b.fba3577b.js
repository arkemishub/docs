"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[5430],{29848:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var a=t(57689);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,k=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?a.createElement(k,o(o({ref:r},c),{},{components:t})):a.createElement(k,o({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54906:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var a=t(62848),n=t(79213),i=(t(57689),t(29848)),o=["components"],p={id:"add-parameter",title:"addParameter()"},l=void 0,u={unversionedId:"api/arke-js/arke/add-parameter",id:"api/arke-js/arke/add-parameter",title:"addParameter()",description:"addParameter() assigns a Parameter to an Arke.",source:"@site/docs/api/arke-js/arke/add-parameter.md",sourceDirName:"api/arke-js/arke",slug:"/api/arke-js/arke/add-parameter",permalink:"/api/arke-js/arke/add-parameter",editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/arke/add-parameter.md",tags:[],version:"current",frontMatter:{id:"add-parameter",title:"addParameter()"},sidebar:"api",previous:{title:"addGroup()",permalink:"/api/arke-js/arke/add-group"},next:{title:"Instance",permalink:"/api/arke-js/arke/arke"}},c={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],d={toc:s};function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"addParameter()")," assigns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameter")," to an ",(0,i.kt)("inlineCode",{parentName:"p"},"Arke"),"."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"payload")," ",(0,i.kt)("em",{parentName:"p"},"required")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Record<string, unknown>")),(0,i.kt)("p",null,"new parameter"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"config")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,i.kt)("p",null,"api configuration object"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"performs an api call for assigning a ",(0,i.kt)("inlineCode",{parentName:"li"},"Parameter")," to an ",(0,i.kt)("inlineCode",{parentName:"li"},"Arke")),(0,i.kt)("li",{parentName:"ul"},"returns the assigned ",(0,i.kt)("inlineCode",{parentName:"li"},"Parameter")," which has ",(0,i.kt)("inlineCode",{parentName:"li"},"ParameterType")," as type")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await client.arke('my_arke').addParameter({ id: 'new_parameter', type: 'string' })\n")))}m.isMDXComponent=!0}}]);