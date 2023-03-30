"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[8111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"glossary",title:"Glossary"},i=void 0,l={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Arke",source:"@site/reference/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/reference/glossary.md",tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary"}},c={},s=[{value:"Arke",id:"arke",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Unit",id:"unit",level:2},{value:"Link",id:"link",level:2},{value:"Groups",id:"groups",level:2},{value:"Docker",id:"docker",level:2},{value:"Docker Container",id:"docker-container",level:3},{value:"Docker Image",id:"docker-image",level:3},{value:"Kubernetes",id:"kubernetes",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"arke"},"Arke"),(0,a.kt)("p",null,"An Arke can be imagined as a json representation of a database table, the name of which will be\ndetermined by the name of the Arke itself. The Arke will be associated with all the Parameters\n(imaginable as the DB columns) that each record must have."),(0,a.kt)("h2",{id:"parameter"},"Parameter"),(0,a.kt)("p",null,"A Parameter can be thought of as the column of a DB, so you will need to define what type of data will be saved within it\nwithin it (String, Int, Enum, etc.). They are created globally and can therefore be associated with different Arkes."),(0,a.kt)("h2",{id:"unit"},"Unit"),(0,a.kt)("p",null,"If we imagine the Arke as a table and the Parameters as the fields that the records in this table are to have, then\nthe Unit is comparable to the individual record.\nAfter associating the Parameters with a given Arke these will appear in the Unit structure."),(0,a.kt)("h2",{id:"link"},"Link"),(0,a.kt)("p",null,"Links define the types of connections that can exist between different Units."),(0,a.kt)("p",null,"Units can be connected together to create distributed structures.\nFor example, we can create a ",(0,a.kt)("strong",{parentName:"p"},"building")," unit, a ",(0,a.kt)("strong",{parentName:"p"},"floor")," unit and connect them (topology)."),(0,a.kt)("h2",{id:"groups"},"Groups"),(0,a.kt)("p",null,"Allows the creation of Arke aggregations (e.g., device group)."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"Docker is a system which allows the packaging up of code and all its dependencies so the an application runs quickly\nand reliably from one computing environment to another."),(0,a.kt)("h3",{id:"docker-container"},"Docker Container"),(0,a.kt)("h3",{id:"docker-image"},"Docker Image"),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"))}d.isMDXComponent=!0}}]);