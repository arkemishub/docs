"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[4970],{24249:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var n=i(87462),a=(i(67294),i(3905)),r=i(99565),s=i(80663),l=i(82137),d=i(11955),p=i(46794),o=i(8437),m=(i(32712),i(28802));const c={id:"get-connection",title:"Unit Children",description:"Get all elements (limited by depth parameter) linked to the given Unit",sidebar_label:"Unit Children",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Link"],description:"Get all elements (limited by depth parameter) linked to the given Unit",operationId:"get_connection",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}},{name:"unit_id",in:"path",description:"Unit ID",required:!0,schema:{type:"string"}},{name:"direction",in:"path",description:"Direction",required:!0,schema:{type:"string"}},{name:"depth",in:"query",description:"Depth",schema:{type:"number"}},{name:"link_type",in:"query",description:"Link ID",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Limits the number of returned results",required:!1,schema:{type:"integer",minimum:0}},{name:"offset",in:"query",description:"Set an offset",required:!1,schema:{type:"integer",minimum:0}},{name:"filter",in:"query",description:"Arke API filter",required:!1,schema:{type:"string",example:"filter=and(gte(age,23),contains(name,string))"}},{name:"order[]",in:"query",description:"Define in which order get the returned results",required:!1,schema:{type:"string",example:"order[]=id;desc&order[]=label;asc"}}],responses:{200:{description:"OK",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"get",path:"/{arke_id}/unit/{unit_id}/link/{direction}",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Unit Children",description:{content:"Get all elements (limited by depth parameter) linked to the given Unit",type:"text/plain"},url:{path:[":arke_id","unit",":unit_id","link",":direction"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Depth",type:"text/plain"},key:"depth",value:""},{disabled:!1,description:{content:"Link ID",type:"text/plain"},key:"link_type",value:""},{disabled:!1,description:{content:"Limits the number of returned results",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Set an offset",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"Arke API filter",type:"text/plain"},key:"filter",value:""},{disabled:!1,description:{content:"Define in which order get the returned results",type:"text/plain"},key:"order[]",value:""}],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"},{disabled:!1,description:{content:"(Required) Unit ID",type:"text/plain"},type:"any",value:"",key:"unit_id"},{disabled:!1,description:{content:"(Required) Direction",type:"text/plain"},type:"any",value:"",key:"direction"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"reference/backend/rest/arke-phoenix-starter"},u=void 0,y={unversionedId:"backend/rest/get-connection",id:"backend/rest/get-connection",title:"Unit Children",description:"Get all elements (limited by depth parameter) linked to the given Unit",source:"@site/reference/backend/rest/get-connection.api.mdx",sourceDirName:"backend/rest",slug:"/backend/rest/get-connection",permalink:"/docs/backend/rest/get-connection",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/reference/backend/rest/get-connection.api.mdx",tags:[],version:"current",frontMatter:{id:"get-connection",title:"Unit Children",description:"Get all elements (limited by depth parameter) linked to the given Unit",sidebar_label:"Unit Children",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Link"],description:"Get all elements (limited by depth parameter) linked to the given Unit",operationId:"get_connection",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}},{name:"unit_id",in:"path",description:"Unit ID",required:!0,schema:{type:"string"}},{name:"direction",in:"path",description:"Direction",required:!0,schema:{type:"string"}},{name:"depth",in:"query",description:"Depth",schema:{type:"number"}},{name:"link_type",in:"query",description:"Link ID",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Limits the number of returned results",required:!1,schema:{type:"integer",minimum:0}},{name:"offset",in:"query",description:"Set an offset",required:!1,schema:{type:"integer",minimum:0}},{name:"filter",in:"query",description:"Arke API filter",required:!1,schema:{type:"string",example:"filter=and(gte(age,23),contains(name,string))"}},{name:"order[]",in:"query",description:"Define in which order get the returned results",required:!1,schema:{type:"string",example:"order[]=id;desc&order[]=label;asc"}}],responses:{200:{description:"OK",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"get",path:"/{arke_id}/unit/{unit_id}/link/{direction}",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Unit Children",description:{content:"Get all elements (limited by depth parameter) linked to the given Unit",type:"text/plain"},url:{path:[":arke_id","unit",":unit_id","link",":direction"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Depth",type:"text/plain"},key:"depth",value:""},{disabled:!1,description:{content:"Link ID",type:"text/plain"},key:"link_type",value:""},{disabled:!1,description:{content:"Limits the number of returned results",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Set an offset",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"Arke API filter",type:"text/plain"},key:"filter",value:""},{disabled:!1,description:{content:"Define in which order get the returned results",type:"text/plain"},key:"order[]",value:""}],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"},{disabled:!1,description:{content:"(Required) Unit ID",type:"text/plain"},type:"any",value:"",key:"unit_id"},{disabled:!1,description:{content:"(Required) Direction",type:"text/plain"},type:"any",value:"",key:"direction"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"reference/backend/rest/arke-phoenix-starter"},sidebar:"docsSidebar",previous:{title:"Link",permalink:"/docs/backend/rest/link"},next:{title:"Connection",permalink:"/docs/backend/rest/post-connection"}},h={},k=[{value:"Unit Children",id:"unit-children",level:2}],b={toc:k};function g(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"unit-children"},"Unit Children"),(0,a.kt)("p",null,"Get all elements (limited by depth parameter) linked to the given Unit"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"unit_id",in:"path",description:"Unit ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"direction",in:"path",description:"Direction",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"depth",in:"query",description:"Depth",schema:{type:"number"}},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"link_type",in:"query",description:"Link ID",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limits the number of returned results",required:!1,schema:{type:"integer",minimum:0}},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"offset",in:"query",description:"Set an offset",required:!1,schema:{type:"integer",minimum:0}},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"filter",in:"query",description:"Arke API filter",required:!1,schema:{type:"string",example:"filter=and(gte(age,23),contains(name,string))"}},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"order[]",in:"query",description:"Define in which order get the returned results",required:!1,schema:{type:"string",example:"order[]=id;desc&order[]=label;asc"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"OK")),(0,a.kt)("div",null)),(0,a.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Arke/Unit not found")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(o.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"content",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(d.Z,{responseExample:'{\n  "content": [\n    null\n  ],\n  "message": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);