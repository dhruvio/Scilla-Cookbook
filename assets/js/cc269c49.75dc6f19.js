"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[4847],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1189:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={tags:["option","optional","some","none"]},c="Safe Mutiplication",u={unversionedId:"recipes/scilla-contract/safemutiply",id:"recipes/scilla-contract/safemutiply",isDocsHomePage:!1,title:"Safe Mutiplication",description:"When your are working with numbers in any programming language you are subject to overflows. An overflow happens when the value of number is bigger than the maximum possible value offered by the machine.",source:"@site/docs/recipes/scilla-contract/safemutiply.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/safemutiply",permalink:"/Scilla-Cookbook/recipes/scilla-contract/safemutiply",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/docs/recipes/scilla-contract/safemutiply.md",tags:[{label:"option",permalink:"/Scilla-Cookbook/tags/option"},{label:"optional",permalink:"/Scilla-Cookbook/tags/optional"},{label:"some",permalink:"/Scilla-Cookbook/tags/some"},{label:"none",permalink:"/Scilla-Cookbook/tags/none"}],version:"current",frontMatter:{tags:["option","optional","some","none"]},sidebar:"tutorialSidebar",previous:{title:"Remote State Reads (RSR)",permalink:"/Scilla-Cookbook/recipes/scilla-contract/remoteread"},next:{title:"U/int",permalink:"/Scilla-Cookbook/recipes/scilla-contract/uint"}},p=[{value:"Further Reading",id:"further-reading",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"safe-mutiplication"},"Safe Mutiplication"),(0,i.kt)("p",null,"When your are working with numbers in any programming language you are subject to overflows. An overflow happens when the value of number is bigger than the maximum possible value offered by the machine."),(0,i.kt)("p",null,"For example if you\u2019re using an unsigned integer in Scilla. The possible values of your variable ranges from 0 to  2^256 (1.1579209e+77). So it means that if you\u2019re around the maximum value and increment your variable it will error as it overflows the maximum value range."),(0,i.kt)("p",null,"If developers want to mutiple two ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint128")," together, they should firstly upcast their current values into ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint256")," so it doesn't overflow, and then perform the mutiplication, finally downcasting the value to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint128")," after performing the division."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"))}m.isMDXComponent=!0}}]);