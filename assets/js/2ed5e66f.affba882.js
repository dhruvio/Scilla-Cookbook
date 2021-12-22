"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[9997],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1420:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={tags:["Swift SDK"]},l="Zilliqa-Swift SDK",s={unversionedId:"recipes/contract-interaction/zilliqa-swift",id:"recipes/contract-interaction/zilliqa-swift",isDocsHomePage:!1,title:"Zilliqa-Swift SDK",description:"Zesame Swift SDK",source:"@site/docs/recipes/contract-interaction/zilliqa-swift.md",sourceDirName:"recipes/contract-interaction",slug:"/recipes/contract-interaction/zilliqa-swift",permalink:"/recipes/contract-interaction/zilliqa-swift",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/contract-interaction/zilliqa-swift.md",tags:[{label:"Swift SDK",permalink:"/tags/swift-sdk"}],version:"current",frontMatter:{tags:["Swift SDK"]},sidebar:"tutorialSidebar",previous:{title:"Zilliqa-go SDK",permalink:"/recipes/contract-interaction/zilliqa-go-quickstart"},next:{title:"Block Production",permalink:"/side-dishes/blocks"}},u=[{value:"Zesame Swift SDK",id:"zesame-swift-sdk",children:[]}],p={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zilliqa-swift-sdk"},"Zilliqa-Swift SDK"),(0,a.kt)("h2",{id:"zesame-swift-sdk"},"Zesame Swift SDK"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenZesame/Zesame"},"Zesame is an unofficial Swift SDK")," for Zilliqa. This SDK contains cryptographic methods allowing you to create and restore a wallet, sign and broadcast transactions. The cryptographic methods are implemented in EllipticCurveKit. This SDK uses Zilliqas JSON-RPC API."))}f.isMDXComponent=!0}}]);