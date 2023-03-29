"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[1839],{46272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var r=a(87462),n=(a(67294),a(3905)),l=a(99565),i=a(80663),p=a(82137),s=a(11955),o=a(46794),m=a(8437),c=(a(32712),a(28802));const d={id:"get-arke-struct",title:"Struct",description:"Get all the parameter and their types associated to the given element. Useful to create/update",sidebar_label:"Struct",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Struct"],description:"Get all the parameter and their types associated to the given element. Useful to create/update",operationId:"get_arke_struct",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{label:{type:"string",example:"Test"},parameters:{type:"array",items:{oneOf:[{type:"object",properties:{default:{type:"string",example:null,nullable:!0,description:"Default value of the parameter"},helper_text:{type:"string",nullable:!0,example:null},id:{type:"string",example:"label"},label:{type:"string",example:"Label"},max_length:{type:"integer",example:100},min_length:{type:"integer",example:0},required:{type:"boolean",example:!0},type:{type:"string",example:"string",description:"Type of the parameter"}}},{type:"object",properties:{default:{type:"integer",example:null,nullable:!0,description:"Default value of the parameter"},helper_text:{type:"string",nullable:!0,example:null},id:{type:"string",example:"int_parameter"},label:{type:"string",example:"Integer Parameter"},max:{type:"integer",example:null,nullable:!0},min:{type:"integer",example:5,nullable:!0},required:{type:"boolean",example:!0},type:{type:"string",example:"integer",description:"Type of the parameter"}}}]}}}}}}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"get",path:"/{arke_id}/struct",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Struct",description:{content:"Get all the parameter and their types associated to the given element. Useful to create/update",type:"text/plain"},url:{path:[":arke_id","struct"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"reference/backend/rest/arke-phoenix-starter"},u=void 0,y={unversionedId:"backend/rest/get-arke-struct",id:"backend/rest/get-arke-struct",title:"Struct",description:"Get all the parameter and their types associated to the given element. Useful to create/update",source:"@site/reference/backend/rest/get-arke-struct.api.mdx",sourceDirName:"backend/rest",slug:"/backend/rest/get-arke-struct",permalink:"/docs/backend/rest/get-arke-struct",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/reference/backend/rest/get-arke-struct.api.mdx",tags:[],version:"current",frontMatter:{id:"get-arke-struct",title:"Struct",description:"Get all the parameter and their types associated to the given element. Useful to create/update",sidebar_label:"Struct",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Struct"],description:"Get all the parameter and their types associated to the given element. Useful to create/update",operationId:"get_arke_struct",parameters:[{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{label:{type:"string",example:"Test"},parameters:{type:"array",items:{oneOf:[{type:"object",properties:{default:{type:"string",example:null,nullable:!0,description:"Default value of the parameter"},helper_text:{type:"string",nullable:!0,example:null},id:{type:"string",example:"label"},label:{type:"string",example:"Label"},max_length:{type:"integer",example:100},min_length:{type:"integer",example:0},required:{type:"boolean",example:!0},type:{type:"string",example:"string",description:"Type of the parameter"}}},{type:"object",properties:{default:{type:"integer",example:null,nullable:!0,description:"Default value of the parameter"},helper_text:{type:"string",nullable:!0,example:null},id:{type:"string",example:"int_parameter"},label:{type:"string",example:"Integer Parameter"},max:{type:"integer",example:null,nullable:!0},min:{type:"integer",example:5,nullable:!0},required:{type:"boolean",example:!0},type:{type:"string",example:"integer",description:"Type of the parameter"}}}]}}}}}}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"get",path:"/{arke_id}/struct",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Struct",description:{content:"Get all the parameter and their types associated to the given element. Useful to create/update",type:"text/plain"},url:{path:[":arke_id","struct"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Arke ID",type:"text/plain"},type:"any",value:"",key:"arke_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"reference/backend/rest/arke-phoenix-starter"},sidebar:"docsSidebar",previous:{title:"Struct",permalink:"/docs/backend/rest/struct"},next:{title:"Struct",permalink:"/docs/backend/rest/get-unit-struct"}},h={},k=[{value:"Struct",id:"struct",level:2}],g={toc:k};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"struct"},"Struct"),(0,n.kt)("p",null,"Get all the parameter and their types associated to the given element. Useful to create/update"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"arke_id",in:"path",description:"Arke ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(l.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"label",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"parameters",required:!1,schemaDescription:void 0,schemaName:"object[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(s.Z,{responseExample:'{\n  "label": "string",\n  "parameters": [\n    {\n      "default": "string",\n      "helper_text": "string",\n      "id": "string",\n      "label": "string",\n      "max_length": 0,\n      "min_length": 0,\n      "required": true,\n      "type": "string"\n    },\n    {\n      "default": 0,\n      "helper_text": "string",\n      "id": "string",\n      "label": "string",\n      "max": 0,\n      "min": 0,\n      "required": true,\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Arke/Unit not found")),(0,n.kt)("div",null,(0,n.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"content",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(s.Z,{responseExample:'{\n  "content": [\n    null\n  ],\n  "message": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);