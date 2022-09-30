"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[8471],{26024:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905)),r=i(26389),d=(i(94891),i(74933)),o=(i(47507),i(24310),i(63303),i(75035),i(85162));const s={id:"delete-connection",sidebar_label:"Connection",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Link"],description:"Delete a link between two units",operationId:"delete_connection",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}},{name:"unit_id",in:"path",description:"Unit ID",required:!0,schema:{type:"string"}},{name:"link_id",in:"path",description:"Link ID",required:!0,schema:{type:"string"}},{name:"arke_id_child",in:"path",description:"Arke ID Child",required:!0,schema:{type:"string"}},{name:"unit_id_child",in:"path",description:"Unit ID Child",required:!0,schema:{type:"string"}}],responses:{204:{description:"OK",content:{}}},security:[{ApiKey:[]}],method:"delete",path:"/{arke_id}/unit/{unit_id}/link/{link_id}/{arke_id_child}/unit/{unit_id_child}",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must be provided via `Authorization: Bearer ` header",name:"Authorization",in:"header"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Connection",description:{content:"Delete a link between two units",type:"text/plain"},url:{path:[":arke_id","unit",":unit_id","link",":link_id",":arke_id_child","unit",":unit_id_child"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"},{disabled:!1,description:{content:"(Required) Unit ID",type:"text/plain"},type:"any",value:"",key:"unit_id"},{disabled:!1,description:{content:"(Required) Link ID",type:"text/plain"},type:"any",value:"",key:"link_id"},{disabled:!1,description:{content:"(Required) Arke ID Child",type:"text/plain"},type:"any",value:"",key:"arke_id_child"},{disabled:!1,description:{content:"(Required) Unit ID Child",type:"text/plain"},type:"any",value:"",key:"unit_id_child"}]},method:"DELETE",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"delete api-method",info_path:"docs/backend/arke-phoenix-starter"},p=void 0,l={unversionedId:"backend/delete-connection",id:"backend/delete-connection",title:"delete-connection",description:"Connection",source:"@site/docs/backend/delete-connection.api.mdx",sourceDirName:"backend",slug:"/backend/delete-connection",permalink:"/arke-docs/backend/delete-connection",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/backend/delete-connection.api.mdx",tags:[],version:"current",frontMatter:{id:"delete-connection",sidebar_label:"Connection",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Link"],description:"Delete a link between two units",operationId:"delete_connection",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}},{name:"unit_id",in:"path",description:"Unit ID",required:!0,schema:{type:"string"}},{name:"link_id",in:"path",description:"Link ID",required:!0,schema:{type:"string"}},{name:"arke_id_child",in:"path",description:"Arke ID Child",required:!0,schema:{type:"string"}},{name:"unit_id_child",in:"path",description:"Unit ID Child",required:!0,schema:{type:"string"}}],responses:{204:{description:"OK",content:{}}},security:[{ApiKey:[]}],method:"delete",path:"/{arke_id}/unit/{unit_id}/link/{link_id}/{arke_id_child}/unit/{unit_id_child}",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must be provided via `Authorization: Bearer ` header",name:"Authorization",in:"header"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Connection",description:{content:"Delete a link between two units",type:"text/plain"},url:{path:[":arke_id","unit",":unit_id","link",":link_id",":arke_id_child","unit",":unit_id_child"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"},{disabled:!1,description:{content:"(Required) Unit ID",type:"text/plain"},type:"any",value:"",key:"unit_id"},{disabled:!1,description:{content:"(Required) Link ID",type:"text/plain"},type:"any",value:"",key:"link_id"},{disabled:!1,description:{content:"(Required) Arke ID Child",type:"text/plain"},type:"any",value:"",key:"arke_id_child"},{disabled:!1,description:{content:"(Required) Unit ID Child",type:"text/plain"},type:"any",value:"",key:"unit_id_child"}]},method:"DELETE",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"delete api-method",info_path:"docs/backend/arke-phoenix-starter"},sidebar:"openApiSidebar",previous:{title:"Connection",permalink:"/arke-docs/backend/post-connection"},next:{title:"Struct",permalink:"/arke-docs/backend/struct"}},c={},u=[{value:"Connection",id:"connection",level:2}],k={toc:u};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"connection"},"Connection"),(0,a.kt)("p",null,"Delete a link between two units"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"unit_id",in:"path",description:"Unit ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"link_id",in:"path",description:"Link ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"arke_id_child",in:"path",description:"Arke ID Child",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"unit_id_child",in:"path",description:"Unit ID Child",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(o.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"OK")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);