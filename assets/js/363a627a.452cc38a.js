"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[5057],{27922:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),c=r(86010),s=r(53438),i=r(39960),a=r(13919),l=r(95999);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",o)},r)}function p(e){let{href:t,icon:r,title:s,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:s},r," ",s),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",m),title:i},i))}function f(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,s.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==c?void 0:c.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,s.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const i=(0,s.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},15438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var n=r(87462),c=(r(67294),r(3905)),s=r(27922),i=r(53438);const a={id:"struct",title:"Struct",description:"Struct",custom_edit_url:null},l=void 0,o={unversionedId:"server/rest/struct",id:"server/rest/struct",title:"Struct",description:"Struct",source:"@site/reference/server/rest/struct.tag.mdx",sourceDirName:"server/rest",slug:"/server/rest/struct",permalink:"/docs/server/rest/struct",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"struct",title:"Struct",description:"Struct",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Signup",permalink:"/docs/server/rest/signup"},next:{title:"Unit",permalink:"/docs/server/rest/unit"}},u={},m=[],d={toc:m};function p(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Unit struct"),(0,c.kt)(s.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);