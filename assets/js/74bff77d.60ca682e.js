"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[6405],{73251:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var r=i(87462),n=(i(67294),i(3905)),a=i(99565),s=i(80663),o=i(82137),l=i(11955),p=i(46794),u=i(8437),d=(i(32712),i(28802));const m={id:"get-unit-group",title:"Unit list",description:"Get all the units of all the Arke in the given group",sidebar_label:"Unit list",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Group"],description:"Get all the units of all the Arke in the given group",operationId:"get_unit_group",parameters:[{name:"group_id",in:"path",description:"Group ID",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"Limits the number of returned results",required:!1,schema:{type:"integer",minimum:0}},{name:"offset",in:"query",description:"Set an offset",required:!1,schema:{type:"integer",minimum:0}},{name:"filter",in:"query",description:"Arke API filter",required:!1,schema:{type:"string",example:"filter=and(gte(age,23),contains(name,string))"}},{name:"order[]",in:"query",description:"Define in which order get the returned results",required:!1,schema:{type:"string",example:"order[]=id;desc&order[]=label;asc"}}],responses:{200:{description:"OK",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"get",path:"/group/{group_id}/unit",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Unit list",description:{content:"Get all the units of all the Arke in the given group",type:"text/plain"},url:{path:["group",":group_id","unit"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Limits the number of returned results",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Set an offset",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"Arke API filter",type:"text/plain"},key:"filter",value:""},{disabled:!1,description:{content:"Define in which order get the returned results",type:"text/plain"},key:"order[]",value:""}],variable:[{disabled:!1,description:{content:"(Required) Group ID",type:"text/plain"},type:"any",value:"",key:"group_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/docs/server/rest/arke-phoenix-starter"},c=void 0,y={unversionedId:"server/rest/get-unit-group",id:"server/rest/get-unit-group",title:"Unit list",description:"Get all the units of all the Arke in the given group",source:"@site/reference/server/rest/get-unit-group.api.mdx",sourceDirName:"server/rest",slug:"/server/rest/get-unit-group",permalink:"/docs/server/rest/get-unit-group",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/reference/server/rest/get-unit-group.api.mdx",tags:[],version:"current",frontMatter:{id:"get-unit-group",title:"Unit list",description:"Get all the units of all the Arke in the given group",sidebar_label:"Unit list",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Group"],description:"Get all the units of all the Arke in the given group",operationId:"get_unit_group",parameters:[{name:"group_id",in:"path",description:"Group ID",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"Limits the number of returned results",required:!1,schema:{type:"integer",minimum:0}},{name:"offset",in:"query",description:"Set an offset",required:!1,schema:{type:"integer",minimum:0}},{name:"filter",in:"query",description:"Arke API filter",required:!1,schema:{type:"string",example:"filter=and(gte(age,23),contains(name,string))"}},{name:"order[]",in:"query",description:"Define in which order get the returned results",required:!1,schema:{type:"string",example:"order[]=id;desc&order[]=label;asc"}}],responses:{200:{description:"OK",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"get",path:"/group/{group_id}/unit",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Unit list",description:{content:"Get all the units of all the Arke in the given group",type:"text/plain"},url:{path:["group",":group_id","unit"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Limits the number of returned results",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Set an offset",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"Arke API filter",type:"text/plain"},key:"filter",value:""},{disabled:!1,description:{content:"Define in which order get the returned results",type:"text/plain"},key:"order[]",value:""}],variable:[{disabled:!1,description:{content:"(Required) Group ID",type:"text/plain"},type:"any",value:"",key:"group_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/docs/server/rest/arke-phoenix-starter"},sidebar:"docsSidebar",previous:{title:"Unit detail",permalink:"/docs/server/rest/get-unit-detail-group"},next:{title:"Struct",permalink:"/docs/server/rest/get-unit-struct"}},h={},g=[{value:"Unit list",id:"unit-list",level:2}],k={toc:g};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"unit-list"},"Unit list"),(0,n.kt)("p",null,"Get all the units of all the Arke in the given group"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"group_id",in:"path",description:"Group ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limits the number of returned results",required:!1,schema:{type:"integer",minimum:0}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"offset",in:"query",description:"Set an offset",required:!1,schema:{type:"integer",minimum:0}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"filter",in:"query",description:"Arke API filter",required:!1,schema:{type:"string",example:"filter=and(gte(age,23),contains(name,string))"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"order[]",in:"query",description:"Define in which order get the returned results",required:!1,schema:{type:"string",example:"order[]=id;desc&order[]=label;asc"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Arke/Unit not found")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"content",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "content": [\n    null\n  ],\n  "message": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);