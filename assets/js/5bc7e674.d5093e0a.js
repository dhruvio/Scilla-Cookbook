"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[5031],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(n),p=i,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(h,o(o({ref:e},u),{},{components:n})):a.createElement(h,o({ref:e},u))}));function p(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2416:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},c="State and Constants",s={unversionedId:"tutorials/scilla-tutorials/incrementing-button/mutable-parameters",id:"tutorials/scilla-tutorials/incrementing-button/mutable-parameters",isDocsHomePage:!1,title:"State and Constants",description:"Mutable State",source:"@site/docs/tutorials/scilla-tutorials/incrementing-button/mutable-parameters.md",sourceDirName:"tutorials/scilla-tutorials/incrementing-button",slug:"/tutorials/scilla-tutorials/incrementing-button/mutable-parameters",permalink:"/tutorials/scilla-tutorials/incrementing-button/mutable-parameters",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/scilla-tutorials/incrementing-button/mutable-parameters.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Version Headers",permalink:"/tutorials/scilla-tutorials/incrementing-button/versionheader"},next:{title:"Procedures",permalink:"/tutorials/scilla-tutorials/incrementing-button/procedure"}},u=[{value:"Mutable State",id:"mutable-state",children:[]},{value:"Global Constants",id:"global-constants",children:[]},{value:"IncrementingButton",id:"incrementingbutton",children:[]}],d={toc:u};function m(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state-and-constants"},"State and Constants"),(0,r.kt)("h2",{id:"mutable-state"},"Mutable State"),(0,r.kt)("p",null,"Mutable fields in a contract are declared through the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),"."),(0,r.kt)("p",null,"Each mutable field is declared in the following pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"field vname : vtype = init_val")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"vname")," is the field name, ",(0,r.kt)("inlineCode",{parentName:"p"},"vtype")," is its type and ",(0,r.kt)("inlineCode",{parentName:"p"},"init_val")," is the value to which the field has to be initialized."),(0,r.kt)("p",null,"Mutable fields hold the state of our contract. Unlike immutable fields, they are able to be changed and as such become useful to read and write from."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Think about the state you want to track. Does this change or is it a static value? What about in the future? Make anything that might change a mutable parameter."))),(0,r.kt)("h2",{id:"global-constants"},"Global Constants"),(0,r.kt)("p",null,"We can take advantage of defining a global definition of a constant through the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"let"),". The value defined cannot be changed throughout the life of the contract."),(0,r.kt)("p",null,"Each mutable field is declared in the following pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"field vname : vtype = init_val")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"vname")," is the field name, ",(0,r.kt)("inlineCode",{parentName:"p"},"vtype")," is its type and ",(0,r.kt)("inlineCode",{parentName:"p"},"init_val")," is the value to which the field has to be initialized."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Need to define a single instance of a type more than once in code? Global constansts are tider than mutable parameters."))),(0,r.kt)("h2",{id:"incrementingbutton"},"IncrementingButton"),(0,r.kt)("p",null,"Back to our example ",(0,r.kt)("inlineCode",{parentName:"p"},"IncrementingButton"),". Lets define two immutable state variables, the first will track the changing instance of who the current owner of the contract is, and the second will be the counter that counts the amount of times this has changed. We need to define a constant value to what this counter is starting at also."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"current_clicker")," is a mutable field of type ByStr20. It will store the current clicker. When the contract is deployed, it takes whatever the initalisation parameter value of ",(0,r.kt)("inlineCode",{parentName:"p"},"contract_owner")," is and copies it into ",(0,r.kt)("inlineCode",{parentName:"p"},"current_owner")," when the contract is initalised."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"total_count_clicks")," is a mutable field of type Uint128 and will increment and store the amount of times the value ",(0,r.kt)("inlineCode",{parentName:"p"},"current_clicker")," has been changed. It is set to the constant value of ",(0,r.kt)("inlineCode",{parentName:"p"},"uint128_zero")," when the contract is initalised."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{5,12,13}","{5,12,13}":!0},"scilla_version 0\n\nlibrary IncrementingButton\n\nlet uint128_zero = Uint128 0\n\ncontract IncrementingButton\n(\n  contract_owner: ByStr20\n)\n\nfield current_clicker : ByStr20 = contract_owner\nfield total_count_clicks  : Uint128 = uint128_zero\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We can set mutable fields in our contract to immutatable parameters at deploy-time or global constants."))),(0,r.kt)("p",null,"In the next section, we will create internal contract logic that interacts with our mutable parameters to change the owner and increment the counter."))}m.isMDXComponent=!0}}]);