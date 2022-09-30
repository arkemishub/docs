"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[1364],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={id:"core-concepts",title:"Core concepts"},o=void 0,l={unversionedId:"docs/getting-started/core-concepts",id:"docs/getting-started/core-concepts",title:"Core concepts",description:"Overview",source:"@site/docs/docs/getting-started/core-concepts.md",sourceDirName:"docs/getting-started",slug:"/docs/getting-started/core-concepts",permalink:"/arke-docs/docs/getting-started/core-concepts",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/docs/getting-started/core-concepts.md",tags:[],version:"current",frontMatter:{id:"core-concepts",title:"Core concepts"},sidebar:"docs",previous:{title:"Introduction",permalink:"/arke-docs/docs/introduction"},next:{title:"Installation",permalink:"/arke-docs/docs/getting-started/installation"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Arke",id:"arke",level:3},{value:"Parametro",id:"parametro",level:3},{value:"Unit",id:"unit",level:3},{value:"Link",id:"link",level:3},{value:"Gruppi",id:"gruppi",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Grazie alle entit\xe1 Arke puoi create la struttura del tuo progetto attraverso una metodologia semplificata.\nIstanzia in pochi e semplici passi il Backend e il Database per la tua applicazione e inizia a strutturarlo senza\nscrivere una riga di codice attraverso l'Arke Console. "),(0,i.kt)("p",null,"Scopriamo qui di seguito le entit\xe1 essenziali per comprendere come strutturare la tua applicazione con Arke."),(0,i.kt)("p",null,"Durante una di queste operazioni di struttura viene automaticamente generata l'endpoint Rest API per richiamare i dati\nda un client (applicazione frontend Webapps, applicazione mobile, altro server o servizio)."),(0,i.kt)("h3",{id:"arke"},"Arke"),(0,i.kt)("p",null,"Un Arke si pu\xf2 immaginare come una rappresentazione json di una tabella del database, il cui nome sar\xe0\ndeterminato dal nome dell\u2019Arke stesso. All'Arke verranno associati tutti i Parametri\n(immaginabili come le colonne del DB) che ogni record dovr\xe0 avere."),(0,i.kt)("h3",{id:"parametro"},"Parametro"),(0,i.kt)("p",null,"Un Parametro si pu\xf2 immaginare come la colonna di un DB, per cui bisogner\xe0 definire che tipo di dato verr\xe0 salvato al suo\ninterno (String, Int, Enum, etc.). Vengono creati a livello globale e possono quindi essere associati a diversi Arke."),(0,i.kt)("p",null,"Un Parametro pu\xf2 essere inoltre di quattro diversi formati:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"MANY"),": ..."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"STREAM"),": Parametro con storico dati. Esempio: vengono prese diverse misurazioni di temperatura e quindi \xe8 bene salvare i diversi datetime cos\xec da poter creare degli analytics"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"CONNECTION"),": Parametro che serve per simulare le relazioni tra due diversi Arke"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ATTRIBUTE"),": Parametro che non necessita uno storico")),(0,i.kt)("h3",{id:"unit"},"Unit"),(0,i.kt)("p",null,"Se immaginiamo l'Arke come una tabella e i Parametri come i campi che i record di questa tabella dovranno avere, allora\nla Unit \xe8 paragonabile al singolo record.\nDopo aver associato i Parametri ad un determinato Arke questi compariranno nella struttura della Unit."),(0,i.kt)("h3",{id:"link"},"Link"),(0,i.kt)("p",null,"I Link definiscono le tipologie di connessione che possono esistere tra diverse Unit."),(0,i.kt)("p",null,"Le unit possono essere connesse tra loro per creare strutture distribuite.\nPossiamo per esempio creare una unit ",(0,i.kt)("strong",{parentName:"p"},"edificio"),", una unit ",(0,i.kt)("strong",{parentName:"p"},"piano")," e connetterle (topologia)."),(0,i.kt)("h3",{id:"gruppi"},"Gruppi"),(0,i.kt)("p",null,"Consente di creare aggregazioni di Arke (es. gruppo di dispositivi)."))}u.isMDXComponent=!0}}]);