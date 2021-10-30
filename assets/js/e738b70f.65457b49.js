"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[139],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=l,k=m["".concat(c,".").concat(p)]||m[p]||b[p]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4520:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={tags:["BNum","block","number","date","time"]},c="BNum",u={unversionedId:"recipes/scilla-contract/bnum",id:"recipes/scilla-contract/bnum",isDocsHomePage:!1,title:"BNum",description:"Block Numbers (BNum) are a type used for tracking the current block number. Blockchain's don't have any concept of dates or times without external oracles - but we can use blocks as a primitive way to determine how much time has passed.",source:"@site/docs/recipes/scilla-contract/bnum.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/bnum",permalink:"/Scilla-Cookbook/recipes/scilla-contract/bnum",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/docs/recipes/scilla-contract/bnum.md",tags:[{label:"BNum",permalink:"/Scilla-Cookbook/tags/b-num"},{label:"block",permalink:"/Scilla-Cookbook/tags/block"},{label:"number",permalink:"/Scilla-Cookbook/tags/number"},{label:"date",permalink:"/Scilla-Cookbook/tags/date"},{label:"time",permalink:"/Scilla-Cookbook/tags/time"}],version:"current",frontMatter:{tags:["BNum","block","number","date","time"]},sidebar:"tutorialSidebar",previous:{title:"ADT",permalink:"/Scilla-Cookbook/recipes/scilla-contract/adt"},next:{title:"Boolean",permalink:"/Scilla-Cookbook/recipes/scilla-contract/bool"}},s=[{value:"BNum Library Functions",id:"bnum-library-functions",children:[{value:"blk_leq",id:"blk_leq",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],b={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bnum"},"BNum"),(0,o.kt)("p",null,"Block Numbers (BNum) are a type used for tracking the current block number. Blockchain's don't have any concept of dates or times without external oracles - but we can use blocks as a primitive way to determine how much time has passed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"scilla_version 0\nlibrary BlockNumbers\n\nlet constant_bnum = BNum 1337\nlet fifty_bnum = BNum 50\n\ncontract BlockNumbers\n(\n    immutable_bnum: BNum\n)\n\nfield state_block : BNum = some_block_number\n\n\ntransition BNumMaths()\n    block_tx_is_processed_at <- & BLOCKNUMBER;\n\n    fifty_block_in_future = builtin badd block_tx_is_processed_at fifty_bnum; (* BNum *)\n\n    fifty_block_in_past = builtin bsub block_tx_is_processed_at fifty_bnum; (* Int256 *)\n\n    are_blocks_equal = builtin eq  block_tx_is_processed_at fifty_bnum; (* Bool *)\n\n    is_a_less_than_b = builtin blt block_tx_is_processed_at fifty_bnum (* Bool *)\nend\n")),(0,o.kt)("h2",{id:"bnum-library-functions"},"BNum Library Functions"),(0,o.kt)("h3",{id:"blk_leq"},"blk_leq"),(0,o.kt)("p",null,"blk_leq is a library function that takes two blocks. It defines two boolean variables ",(0,o.kt)("inlineCode",{parentName:"p"},"bc1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bc2"),"."),(0,o.kt)("p",null,"If the first block is less than the second variable ",(0,o.kt)("inlineCode",{parentName:"p"},"bc1")," is set to true."),(0,o.kt)("p",null,"If the first block is equal to the second variable ",(0,o.kt)("inlineCode",{parentName:"p"},"bc2")," is set to true."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ORB")," builtin from the Bools.Util performs a logical OR operator, returning true if either ",(0,o.kt)("inlineCode",{parentName:"p"},"bc1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bc2")," are true."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"let blk_leq =\n  fun (blk1 : BNum) =>\n  fun (blk2 : BNum) =>\n    let bc1 = builtin blt blk1 blk2 in \n    let bc2 = builtin eq blk1 blk2 in \n    orb bc1 bc2\n\n...\n\ntransition BlockDifference(query_block: BNum, current_block: BNum)\n    less_or_equal_to_query = blk_leq query_block current_block;\nend\n\n")),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=block#block-numbers"},"readthedocs - BNum")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/scilla/blob/master/tests/contracts/auction.scilla"},"auction.scilla")))}m.isMDXComponent=!0}}]);