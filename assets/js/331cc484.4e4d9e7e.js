"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[8508],{55253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>k});var s=a(87462),n=(a(67294),a(3905)),r=a(99565),i=a(80663),o=(a(82137),a(11955)),p=a(46794),l=a(8437),d=(a(32712),a(28802));const c={id:"signup",title:"Signup",description:"Create a new user",sidebar_label:"Signup",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Create a new user",operationId:"signup",requestBody:{description:"Username",content:{"application/json":{schema:{required:["password","username"],type:"object",properties:{username:{type:"string"},password:{type:"string"}}}}},required:!1},responses:{200:{description:"OK",content:{}},400:{description:"Client Error",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},"x-codegen-request-body-name":"credentials",method:"post",path:"/auth/signup",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},jsonRequestBodyExample:{username:"string",password:"string"},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Signup",description:{content:"Create a new user",type:"text/plain"},url:{path:["auth","signup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/docs/server/rest/arke-phoenix-starter"},m=void 0,u={unversionedId:"docs/server/rest/signup",id:"docs/server/rest/signup",title:"Signup",description:"Create a new user",source:"@site/docs/docs/server/rest/signup.api.mdx",sourceDirName:"docs/server/rest",slug:"/docs/server/rest/signup",permalink:"/arke-docs/docs/server/rest/signup",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/docs/docs/server/rest/signup.api.mdx",tags:[],version:"current",frontMatter:{id:"signup",title:"Signup",description:"Create a new user",sidebar_label:"Signup",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Create a new user",operationId:"signup",requestBody:{description:"Username",content:{"application/json":{schema:{required:["password","username"],type:"object",properties:{username:{type:"string"},password:{type:"string"}}}}},required:!1},responses:{200:{description:"OK",content:{}},400:{description:"Client Error",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},"x-codegen-request-body-name":"credentials",method:"post",path:"/auth/signup",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},jsonRequestBodyExample:{username:"string",password:"string"},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Signup",description:{content:"Create a new user",type:"text/plain"},url:{path:["auth","signup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/docs/server/rest/arke-phoenix-starter"},sidebar:"docs",previous:{title:"Signin",permalink:"/arke-docs/docs/server/rest/signin"},next:{title:"Refresh token",permalink:"/arke-docs/docs/server/rest/refresh-tokens"}},h={},k=[{value:"Signup",id:"signup",level:2}],y={toc:k};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"signup"},"Signup"),(0,n.kt)("p",null,"Create a new user"),(0,n.kt)(i.Z,{mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"Username"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"username",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"password",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Client Error")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Arke/Unit not found")),(0,n.kt)("div",null,(0,n.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"content",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "content": [\n    null\n  ],\n  "message": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);