"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[3619],{61458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var i=r(87462),a=(r(67294),r(3905)),n=r(99565),o=r(80663),s=(r(82137),r(11955)),l=r(46794),p=r(8437),y=(r(32712),r(28802));const c={id:"verify-token",title:"Verify token",description:"Verify user token",sidebar_label:"Verify token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Verify user token",operationId:"verify_token",responses:{200:{description:"OK",content:{}},400:{description:"Client Error",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]}],method:"post",path:"/auth/verify",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Verify token",description:{content:"Verify user token",type:"text/plain"},url:{path:["auth","verify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/docs/server/rest/arke-phoenix-starter"},d=void 0,u={unversionedId:"server/rest/verify-token",id:"server/rest/verify-token",title:"Verify token",description:"Verify user token",source:"@site/reference/server/rest/verify-token.api.mdx",sourceDirName:"server/rest",slug:"/server/rest/verify-token",permalink:"/docs/server/rest/verify-token",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/reference/server/rest/verify-token.api.mdx",tags:[],version:"current",frontMatter:{id:"verify-token",title:"Verify token",description:"Verify user token",sidebar_label:"Verify token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Verify user token",operationId:"verify_token",responses:{200:{description:"OK",content:{}},400:{description:"Client Error",content:{}},404:{description:"Arke/Unit not found",content:{"application/json":{schema:{type:"object",properties:{content:{type:"array",items:{},nullable:!0,example:null},message:{type:"array",items:{},example:[]}}}}}}},security:[{ApiKey:[]}],method:"post",path:"/auth/verify",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Verify token",description:{content:"Verify user token",type:"text/plain"},url:{path:["auth","verify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/docs/server/rest/arke-phoenix-starter"},sidebar:"docsSidebar",previous:{title:"Update",permalink:"/docs/server/rest/update-unit"},next:{title:"Security",permalink:"/docs/server/security"}},k={},m=[{value:"Verify token",id:"verify-token",level:2}],h={toc:m};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"verify-token"},"Verify token"),(0,a.kt)("p",null,"Verify user token"),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(y.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"OK")),(0,a.kt)("div",null)),(0,a.kt)(y.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Client Error")),(0,a.kt)("div",null)),(0,a.kt)(y.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Arke/Unit not found")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,a.kt)(y.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,a.kt)(y.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"content",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(y.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(s.Z,{responseExample:'{\n  "content": [\n    null\n  ],\n  "message": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);