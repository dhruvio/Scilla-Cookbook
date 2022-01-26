"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[4934],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,y=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(y,o(o({ref:t},d),{},{components:r})):n.createElement(y,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8751:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={tags:["Vanity","Address"]},l="Vanity addresses",c={unversionedId:"side-knowledge/vanity",id:"side-knowledge/vanity",isDocsHomePage:!1,title:"Vanity addresses",description:"frog357's Zilliqa Vanity Address Generator allows creation of Zilliqa bech32 vanity address keypairs, allow for an address with a substring that the addresses must: start with, end with or contains.",source:"@site/docs/side-knowledge/vanity.md",sourceDirName:"side-knowledge",slug:"/side-knowledge/vanity",permalink:"/side-knowledge/vanity",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/side-knowledge/vanity.md",tags:[{label:"Vanity",permalink:"/tags/vanity"},{label:"Address",permalink:"/tags/address"}],version:"current",frontMatter:{tags:["Vanity","Address"]},sidebar:"tutorialSidebar",previous:{title:"Transaction errors and troubleshooting",permalink:"/side-knowledge/troubleshooting"},next:{title:"Introduction",permalink:"/tutorials/scilla-tutorials/incrementing-button/introduction"}},d=[],u={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vanity-addresses"},"Vanity addresses"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/frog357/zilliqa-vanity/"},"frog357's Zilliqa Vanity Address Generator")," allows creation of Zilliqa bech32 vanity address keypairs, allow for an address with a substring that the addresses must: start with, end with or contains.\nIt can set the minimum amount of letters (a-z) or digits (0-9) required in an address, set the number of addresses to generate."))}p.isMDXComponent=!0}}]);