"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[2326],{29848:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(57689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88800:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(62848),a=n(79213),o=(n(57689),n(29848)),i=["components"],l={id:"installation",title:"Installation"},c=void 0,s={unversionedId:"docs/getting-started/installation",id:"docs/getting-started/installation",title:"Installation",description:"Creare un Arke App",source:"@site/docs/docs/getting-started/installation.md",sourceDirName:"docs/getting-started",slug:"/docs/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/arkemishub/arke-docs/docs/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Core concepts",permalink:"/docs/getting-started/core-concepts"}},p={},u=[{value:"Creare un Arke App",id:"creare-un-arke-app",level:2},{value:"Docker",id:"docker",level:3},{value:"Arke Console",id:"arke-console",level:3},{value:"Arke JS",id:"arke-js",level:3},{value:"NPM",id:"npm",level:4},{value:"CDN",id:"cdn",level:4}],d={toc:u};function k(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creare-un-arke-app"},"Creare un Arke App"),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"L'immagine del backend e del DB Postgress \xe9 disponibile nel ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/arke/postgres"},"Docker Hub"),"\ncon il nome arke/postgres. Scaricarla e lanciarla da Docker per avere il backend e il DB pronto.\nDi default questo lavora su ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:5000"),"."),(0,o.kt)("h3",{id:"arke-console"},"Arke Console"),(0,o.kt)("p",null,"Puoi accedere all'Arke Console da ",(0,o.kt)("a",{parentName:"p",href:"https://arkehub.com/console"},"arkehub.com/console")," o scaricare\nl'",(0,o.kt)("a",{parentName:"p",href:"https://arkehub.com/download/client"},"applicazione client"),"."),(0,o.kt)("p",null,"Per iniziare a lavorare l'Arke Console deve puntare all'indirizzo del progetto backend locale. Lanciamo la console e\ncreiamo un nuovo progetto puntando ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:5000"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Arke Console",src:n(84926).Z,width:"2560",height:"1600"})),(0,o.kt)("h3",{id:"arke-js"},"Arke JS"),(0,o.kt)("p",null,"Arke \xe9 un backend che lavora con lo standard REST API, questo lo rende compatibile con differenti tools e frameworks."),(0,o.kt)("p",null,"L'Arke JS \xe9 il client Javascript che consente di dialogare facilmente con Arke."),(0,o.kt)("h4",{id:"npm"},"NPM"),(0,o.kt)("p",null,"L'Arke JS package \xe9 disponibile in npm. Per installare l'ultima versione stabile, lanciare il comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @arke/js\n")),(0,o.kt)("h4",{id:"cdn"},"CDN"),(0,o.kt)("p",null,"Arke JS offre la build UMD che pu\xf2 essere accessibile direttamente usando il tag ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>"),". Raccomandiamo di utilizzare\nuna versione specifica per evitare eccezzioni inaspettate nelle nuove versioni."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/arkejs@1.0.0/umd/arke.production.js"/>\n')))}k.isMDXComponent=!0},84926:function(e,t,n){t.Z=n.p+"assets/images/console-3e4d84c4e78f91d1c5313bcf8b29752d.png"}}]);