"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[1002],{29848:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(57689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,m=s["".concat(p,".").concat(k)]||s[k]||u[k]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(62848),a=n(79213),i=(n(57689),n(29848)),o=["components"],l={id:"add-child",title:"addChild()"},p=void 0,c={unversionedId:"api/arke-js/arke/unit/add-child",id:"api/arke-js/arke/unit/add-child",title:"addChild()",description:"addChild() method add a child to an ArkeUnit.",source:"@site/docs/api/arke-js/arke/unit/add-child.md",sourceDirName:"api/arke-js/arke/unit",slug:"/api/arke-js/arke/unit/add-child",permalink:"/arke-docs/api/arke-js/arke/unit/add-child",editUrl:"https://github.com/arkemishub/arke-docs/docs/api/arke-js/arke/unit/add-child.md",tags:[],version:"current",frontMatter:{id:"add-child",title:"addChild()"},sidebar:"api",previous:{title:"prepareUnit()",permalink:"/arke-docs/api/arke-js/arke/prepare-unit"},next:{title:"Instance",permalink:"/arke-docs/api/arke-js/arke/unit/unit"}},d={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2}],s={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"addChild()")," method add a child to an ",(0,i.kt)("inlineCode",{parentName:"p"},"ArkeUnit"),"."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"childId")," ",(0,i.kt)("em",{parentName:"p"},"required")," ",(0,i.kt)("inlineCode",{parentName:"p"},"string | number")),(0,i.kt)("p",null,"child id"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"connectionType")," ",(0,i.kt)("em",{parentName:"p"},"required")," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"connection type"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"config")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiRequestConfig")),(0,i.kt)("p",null,"api configuration object"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"performs an api call that adds a child to an ",(0,i.kt)("inlineCode",{parentName:"li"},"ArkeUnit"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await client.arke('my_arke').unit(1).addChild(2, 'my_connection')\n")))}k.isMDXComponent=!0}}]);