"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[6835],{2477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>k,toc:()=>g});var r=a(87462),i=(a(67294),a(3905)),s=a(38055),n=a(51663),o=a(98045),l=a(91795),p=a(18211),m=a(55985),d=(a(47878),a(28802));const c={id:"get-groups",title:"Arke groups",description:"Get all the groups of an Arke",sidebar_label:"Arke groups",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Group"],description:"Get all the groups of an Arke",operationId:"get_groups",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}}],responses:{201:{description:"Created",content:{"application/json":{schema:{type:"object",properties:{content:{type:"object",properties:{count:{type:"integer",example:1},items:{type:"array",items:{type:"object",properties:{arke_id:{type:"string",example:"group",description:"Arke ID"},arke_list:{type:"array",items:{},example:[],description:"List of Arke linked to the group"},id:{type:"string",description:"UUID or value assigned during creation",example:"group_1"},label:{type:"string",description:"Group label",example:null,nullable:!0},description:{type:"string",description:"Group Description",example:"Description of the example group"},inserted_at:{type:"string",format:"date-time"},updated_at:{type:"string",format:"date-time"}}}}}},messages:{type:"array",items:{},example:[]}}}}}},400:{description:"Client Error",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"get",path:"/{arke_id}/group",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Arke groups",description:{content:"Get all the groups of an Arke",type:"text/plain"},url:{path:[":arke_id","group"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"reference/backend/rest/arke-phoenix-starter"},u=void 0,k={unversionedId:"backend/rest/get-groups",id:"backend/rest/get-groups",title:"Arke groups",description:"Get all the groups of an Arke",source:"@site/reference/backend/rest/get-groups.api.mdx",sourceDirName:"backend/rest",slug:"/backend/rest/get-groups",permalink:"/docs/backend/rest/get-groups",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/reference/backend/rest/get-groups.api.mdx",tags:[],version:"current",frontMatter:{id:"get-groups",title:"Arke groups",description:"Get all the groups of an Arke",sidebar_label:"Arke groups",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Group"],description:"Get all the groups of an Arke",operationId:"get_groups",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}}],responses:{201:{description:"Created",content:{"application/json":{schema:{type:"object",properties:{content:{type:"object",properties:{count:{type:"integer",example:1},items:{type:"array",items:{type:"object",properties:{arke_id:{type:"string",example:"group",description:"Arke ID"},arke_list:{type:"array",items:{},example:[],description:"List of Arke linked to the group"},id:{type:"string",description:"UUID or value assigned during creation",example:"group_1"},label:{type:"string",description:"Group label",example:null,nullable:!0},description:{type:"string",description:"Group Description",example:"Description of the example group"},inserted_at:{type:"string",format:"date-time"},updated_at:{type:"string",format:"date-time"}}}}}},messages:{type:"array",items:{},example:[]}}}}}},400:{description:"Client Error",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"get",path:"/{arke_id}/group",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Arke groups",description:{content:"Get all the groups of an Arke",type:"text/plain"},url:{path:[":arke_id","group"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"reference/backend/rest/arke-phoenix-starter"},sidebar:"docsSidebar",previous:{title:"Group",permalink:"/docs/backend/rest/group"},next:{title:"Group struct",permalink:"/docs/backend/rest/get-group-struct"}},y={},g=[{value:"Arke groups",id:"arke-groups",level:2}],h={toc:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"arke-groups"},"Arke groups"),(0,i.kt)("p",null,"Get all the groups of an Arke"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Created")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"count",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"items"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"arke_id",required:!1,schemaDescription:"Arke ID",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"arke_list",required:!1,schemaDescription:"List of Arke linked to the group",schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"UUID or value assigned during creation",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"label",required:!1,schemaDescription:"Group label",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:"Group Description",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"inserted_at",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"updated_at",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(p.Z,{collapsible:!1,name:"messages",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "content": {\n    "count": 0,\n    "items": [\n      {\n        "arke_id": "string",\n        "arke_list": [\n          null\n        ],\n        "id": "string",\n        "label": "string",\n        "description": "string",\n        "inserted_at": "2023-03-29",\n        "updated_at": "2023-03-29"\n      }\n    ]\n  },\n  "messages": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Client Error")),(0,i.kt)("div",null)),(0,i.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Arke/Unit not found")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"content",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "content": [\n    null\n  ],\n  "message": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);