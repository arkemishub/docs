"use strict";(self.webpackChunkarke=self.webpackChunkarke||[]).push([[1643],{5183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>d,frontMatter:()=>i,metadata:()=>k,toc:()=>p});var s=r(87462),n=(r(67294),r(3905)),o=r(38055),a=(r(51663),r(98045),r(91795),r(18211),r(55985),r(47878),r(28802));const i={id:"refresh-tokens",title:"Refresh token",description:"Refresh the JWT tokens. (Must use the refresh_token instead of the access_token)",sidebar_label:"Refresh token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Refresh the JWT tokens. (Must use the refresh_token instead of the access_token)",operationId:"refresh_tokens",responses:{200:{description:"OK",content:{}},400:{description:"Client Error",content:{}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"post",path:"/auth/refresh",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Refresh token",description:{content:"Refresh the JWT tokens. (Must use the refresh_token instead of the access_token)",type:"text/plain"},url:{path:["auth","refresh"],host:["{{baseUrl}}"],query:[],variable:[]},method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"reference/backend/rest/arke-phoenix-starter"},h=void 0,k={unversionedId:"backend/rest/refresh-tokens",id:"backend/rest/refresh-tokens",title:"Refresh token",description:"Refresh the JWT tokens. (Must use the refresh_token instead of the access_token)",source:"@site/reference/backend/rest/refresh-tokens.api.mdx",sourceDirName:"backend/rest",slug:"/backend/rest/refresh-tokens",permalink:"/docs/backend/rest/refresh-tokens",draft:!1,editUrl:"https://github.com/arkemishub/arke-docs/reference/backend/rest/refresh-tokens.api.mdx",tags:[],version:"current",frontMatter:{id:"refresh-tokens",title:"Refresh token",description:"Refresh the JWT tokens. (Must use the refresh_token instead of the access_token)",sidebar_label:"Refresh token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Refresh the JWT tokens. (Must use the refresh_token instead of the access_token)",operationId:"refresh_tokens",responses:{200:{description:"OK",content:{}},400:{description:"Client Error",content:{}}},security:[{ApiKey:[]},{ProjectKey:[]}],method:"post",path:"/auth/refresh",servers:[{url:"http://localhost:4000/lib"},{url:"https://localhost:4000/lib"}],securitySchemes:{ApiKey:{type:"apiKey",description:"API Token must follow: `Bearer {access_token}` Use the signin endpoint to get the token value",name:"Authorization",in:"header"},ProjectKey:{type:"apiKey",in:"header",name:"arke-project-key",description:"The name of the project where to make the API call"}},info:{title:"Arke Phoenix Starter",description:"API Documentation for Arke Phoenix Starter [v1]",version:"1.0"},postman:{name:"Refresh token",description:{content:"Refresh the JWT tokens. (Must use the refresh_token instead of the access_token)",type:"text/plain"},url:{path:["auth","refresh"],host:["{{baseUrl}}"],query:[],variable:[]},method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"reference/backend/rest/arke-phoenix-starter"},sidebar:"docsSidebar",previous:{title:"Signup",permalink:"/docs/backend/rest/signup"},next:{title:"CRUD",permalink:"/docs/frontend/crud"}},c={},p=[{value:"Refresh token",id:"refresh-token",level:2}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"refresh-token"},"Refresh token"),(0,n.kt)("p",null,"Refresh the JWT tokens. (Must use the refresh_token instead of the access_token)"),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(a.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null)),(0,n.kt)(a.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Client Error")),(0,n.kt)("div",null)))))}d.isMDXComponent=!0}}]);