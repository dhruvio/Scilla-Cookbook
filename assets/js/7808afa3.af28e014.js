"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[6298],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1794:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={tags:["IDE","Interaction","call","type"]},p="IDE interaction parameters",s={unversionedId:"recipes/contract-recipes/ide-jsonparameters",id:"recipes/contract-recipes/ide-jsonparameters",isDocsHomePage:!1,title:"IDE interaction parameters",description:"Developers may want to deploy contracts through the IDE for testing which require complex types or interaction. This page specifies the untypical type interactions developers may have with the IDE.",source:"@site/docs/recipes/contract-recipes/ide-jsonparameters.md",sourceDirName:"recipes/contract-recipes",slug:"/recipes/contract-recipes/ide-jsonparameters",permalink:"/recipes/contract-recipes/ide-jsonparameters",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/contract-recipes/ide-jsonparameters.md",tags:[{label:"IDE",permalink:"/tags/ide"},{label:"Interaction",permalink:"/tags/interaction"},{label:"call",permalink:"/tags/call"},{label:"type",permalink:"/tags/type"}],version:"current",frontMatter:{tags:["IDE","Interaction","call","type"]},sidebar:"tutorialSidebar",previous:{title:"Full-stack examples",permalink:"/recipes/contract-recipes/fullstack-examples"},next:{title:"Zilliqa-Go SDK",permalink:"/recipes/contract-recipes/zilliqa-go-quickstart"}},l=[{value:"List of Uint256",id:"list-of-uint256",children:[]},{value:"Pair of ByStr20 Uint256",id:"pair-of-bystr20-uint256",children:[]},{value:"List of Pair",id:"list-of-pair",children:[]},{value:"ADT",id:"adt",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ide-interaction-parameters"},"IDE interaction parameters"),(0,i.kt)("p",null,"Developers may want to deploy contracts through the IDE for testing which require complex types or interaction. This page specifies the untypical type interactions developers may have with the IDE."),(0,i.kt)("h3",{id:"list-of-uint256"},"List of Uint256"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"transition Test(input: List Uint256)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'["1","2","3"]\n')),(0,i.kt)("h3",{id:"pair-of-bystr20-uint256"},"Pair of ByStr20 Uint256"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"transition Test(input: List (Pair ByStr20 Uint256))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[{\n  "constructor":"Pair",\n  "argtypes": [\n      "ByStr20",\n      "Uint256"\n    ],\n    "arguments": [\n      "0x0496a854570f27687B6f401d5e209fD14c3F3061",\n      "5"\n    ]\n}]\n')),(0,i.kt)("h3",{id:"list-of-pair"},"List of Pair"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"transition Test(input: List (Pair ByStr20 Uint32))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "vname": "plist",\n    "type": "List (Pair ByStr20 Uint32)",\n    "value": [\n      {\n        "constructor": "Pair",\n        "argtypes": [ "ByStr20", "Uint32" ],\n        "arguments": [ "0x12345678901234567890123456789012345678ab", "1" ]\n      },\n      {\n        "constructor": "Pair",\n        "argtypes": [ "ByStr20", "Uint32" ],\n        "arguments": [ "0x12345678901234567890123456789012345678bd", "2" ]\n      } \n    ]\n  }\n')),(0,i.kt)("h3",{id:"adt"},"ADT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type OptionSimpleType = | OptionSimpleType of Uint256 (Option Uint256)\n\ntransition Test(input : OptionSimpleType)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "constructor": "OptionSimpleType",\n  "argtypes": [\n    "Uint256",\n    "Option (Uint256)"\n  ],\n  "arguments": [\n    "500",\n    {\n      "constructor": "Some",\n      "argtypes": [\n        "Uint256"\n      ],\n      "arguments": [\n        "10"\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type Vnode = | Vnode of ByStr20 Uint128 Uint128\n\ntransition Test(input: Vnode)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "constructor": "Vnode",\n  "argtypes": \n  [\n   "ByStr20",\n   "Uint128",\n   "Uint128"\n  ],\n  "arguments": \n  [\n    "0x12345",\n    1337,\n    2468\n  ]\n}\n')))}m.isMDXComponent=!0}}]);