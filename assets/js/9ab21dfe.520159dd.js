"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[4359],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=l(n),b=a,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||o;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5911:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:4},s="Contract State",l={unversionedId:"tutorials/interaction-tutorials/incrementing-button-interaction/fetch-state",id:"tutorials/interaction-tutorials/incrementing-button-interaction/fetch-state",isDocsHomePage:!1,title:"Contract State",description:"Review the javascript that defines queryState.js",source:"@site/docs/tutorials/interaction-tutorials/incrementing-button-interaction/fetch-state.md",sourceDirName:"tutorials/interaction-tutorials/incrementing-button-interaction",slug:"/tutorials/interaction-tutorials/incrementing-button-interaction/fetch-state",permalink:"/tutorials/interaction-tutorials/incrementing-button-interaction/fetch-state",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/interaction-tutorials/incrementing-button-interaction/fetch-state.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Calling a Contracts Transition",permalink:"/tutorials/interaction-tutorials/incrementing-button-interaction/call-contract"},next:{title:"Summary",permalink:"/tutorials/interaction-tutorials/incrementing-button-interaction/summary"}},u=[{value:"Retrieve a contracts state",id:"retrieve-a-contracts-state",children:[]}],p={toc:u};function m(t){var e=t.components,c=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contract-state"},"Contract State"),(0,o.kt)("p",null,"Review the javascript that defines ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/queryState.js"},"queryState.js")),(0,o.kt)("h2",{id:"retrieve-a-contracts-state"},"Retrieve a contracts state"),(0,o.kt)("p",null,"Now we have called a transition and that has set some mutable state on our contract, we can fetch this value and use it for ensuring that the correct value is being returned. The contract state currently says our state for ",(0,o.kt)("inlineCode",{parentName:"p"},"total_button_clicks")," is the value ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", but we need to pull that value into the backend."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus",src:n(9332).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'...\n// webhook to listen to events emited back to clients\nconst websocket = "wss://dev-ws.zilliqa.com"\n// mutable state field name to monitor\nconst state_field_to_monitor = "total_count_clicks"\n...\n\n// Listen for events from a contract - errors aren\'t caught\nasync function ListenForEvents(deployed_contract_base_16) \n{\n    const subscriber = zilliqa.subscriptionBuilder.buildEventLogSubscriptions(\n      websocket,\n      {\n        addresses: [\n            deployed_contract_base_16\n        ],\n      },\n    );\n\n    console.log("Listener started");\n  \n    subscriber.emitter.on(MessageType.EVENT_LOG, async (event) => {\n        console.log(\'get new event log: \', JSON.stringify(event)); // this will emit 2/3 times before event emitted\n\n        const current_button_click_count = await zilliqa.blockchain.getSmartContractSubState(\n            deployed_contract_base_16,\n            state_field_to_monitor\n          );\n        console.log(current_button_click_count.result);\n    });\n  \n    await subscriber.start();\n}\n')),(0,o.kt)("p",null,"We add this method to our implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Application Definition\n// DEPLOY a contract, \n// SEND a transaction\n// LISTEN to events emitted\n// MONITOR mutable state \nasync function DeploySendListenMonitor()\n{\n    deployed_contract_base_16 = await DeployButtonContract();\n    bech_32_bystr = toBech32Address(deployed_contract_base_16);\n    console.log(`got ${bech_32_bystr} from ${deployed_contract_base_16}`)\n\n    await Promise.all([\n        ListenForEvents(deployed_contract_base_16),\n        PressTheButton(bech_32_bystr)\n    ]);\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'...\nListener started\nPressing the button...\nWaiting transaction be confirmed\n\nget new event log:  {"query":"EventLog"}\n{ total_count_clicks: \'0\' }\n\nget new event log:  {"query":"EventLog","value":[{"address":"a69656b54638aa2ffb8c1e59d4b2705fcce177c2","event_logs":[{"_eventname":"PressTheButtonSuccess","params":[{"type":"ByStr20","value":"0x428a2aa43456fe7fd2de66e48c1fbf372ec10eae","vname":"button_presser"}]},{"_eventname":"IncrementCounterSuccess","params":[{"type":"Uint128","value":"0","vname":"pcc"},{"type":"Uint128","value":"1","vname":"ncc"}]},{"_eventname":"NewClickerState","params":[{"type":"ByStr20","value":"0x428a2aa43456fe7fd2de66e48c1fbf372ec10eae","vname":"nc"}]}]}]}\n{ total_count_clicks: \'1\' }\nButton pressed by : 0x428A2aA43456FE7fd2De66E48C1fBf372eC10eAE\n')))}m.isMDXComponent=!0},9332:function(t,e,n){e.Z=n.p+"assets/images/IDE-state-97b960abc4aae07575633e588feae80b.png"}}]);