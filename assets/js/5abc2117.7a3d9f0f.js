"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[5302],{26725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var i=a(87462),r=(a(67294),a(3905)),n=a(99565),s=a(80663),l=a(82137),o=a(11955),p=a(46794),m=a(8437),d=(a(32712),a(28802));const c={id:"create-unit",title:"Create",description:"Create a new Unit of a specific Arke",sidebar_label:"Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unit"],description:"Create a new Unit of a specific Arke",operationId:"create_unit",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}}],responses:{201:{description:"Created",content:{"application/json":{schema:{type:"object",properties:{content:{type:"object",properties:{arke_id:{type:"string",example:"test",description:"Arke ID"},id:{type:"string",description:"UUID or value assigned during creation",example:"20186cc8-497d-11ed-b878-0242ac120002"},parameter_1:{type:"string",nullable:!0,example:null},parameter_2:{type:"string",example:"Parameter Number 2"},parameter_3:{type:"boolean",example:!0},parameter_n:{type:"array",items:{},example:[],nullable:!0},inserted_at:{type:"string",format:"date-time"},updated_at:{type:"string",format:"date-time"}}},messages:{type:"array",items:{},example:[]}}}}}},400:{description:"Client Error",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"post",path:"/{arke_id}/unit",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Create",description:{content:"Create a new Unit of a specific Arke",type:"text/plain"},url:{path:[":arke_id","unit"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"reference/docs/server/rest/arke-phoenix-starter"},u=void 0,y={unversionedId:"docs/server/rest/create-unit",id:"docs/server/rest/create-unit",title:"Create",description:"Create a new Unit of a specific Arke",source:"@site/reference/docs/server/rest/create-unit.api.mdx",sourceDirName:"docs/server/rest",slug:"/docs/server/rest/create-unit",permalink:"/docs/docs/server/rest/create-unit",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/reference/docs/server/rest/create-unit.api.mdx",tags:[],version:"current",frontMatter:{id:"create-unit",title:"Create",description:"Create a new Unit of a specific Arke",sidebar_label:"Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unit"],description:"Create a new Unit of a specific Arke",operationId:"create_unit",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}}],responses:{201:{description:"Created",content:{"application/json":{schema:{type:"object",properties:{content:{type:"object",properties:{arke_id:{type:"string",example:"test",description:"Arke ID"},id:{type:"string",description:"UUID or value assigned during creation",example:"20186cc8-497d-11ed-b878-0242ac120002"},parameter_1:{type:"string",nullable:!0,example:null},parameter_2:{type:"string",example:"Parameter Number 2"},parameter_3:{type:"boolean",example:!0},parameter_n:{type:"array",items:{},example:[],nullable:!0},inserted_at:{type:"string",format:"date-time"},updated_at:{type:"string",format:"date-time"}}},messages:{type:"array",items:{},example:[]}}}}}},400:{description:"Client Error",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"post",path:"/{arke_id}/unit",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Create",description:{content:"Create a new Unit of a specific Arke",type:"text/plain"},url:{path:[":arke_id","unit"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"reference/docs/server/rest/arke-phoenix-starter"},sidebar:"defaultSidebar",previous:{title:"Auth",permalink:"/docs/docs/server/rest/auth"},next:{title:"Connection",permalink:"/docs/docs/server/rest/delete-connection"}},k={},h=[{value:"Create",id:"create",level:2}],v={toc:h};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("p",null,"Create a new Unit of a specific Arke"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Created")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"content"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"arke_id",required:!1,schemaDescription:"Arke ID",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"UUID or value assigned during creation",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"parameter_1",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"parameter_2",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"parameter_3",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"parameter_n",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"inserted_at",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"updated_at",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{collapsible:!1,name:"messages",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "content": {\n    "arke_id": "string",\n    "id": "string",\n    "parameter_1": "string",\n    "parameter_2": "string",\n    "parameter_3": true,\n    "parameter_n": [\n      null\n    ],\n    "inserted_at": "2023-03-10",\n    "updated_at": "2023-03-10"\n  },\n  "messages": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Client Error")),(0,r.kt)("div",null)),(0,r.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Arke/Unit not found")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"content",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "content": [\n    null\n  ],\n  "message": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);