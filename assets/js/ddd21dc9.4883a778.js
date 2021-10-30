"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[6337],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},197:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],p={tags:null},l="Pair",s={unversionedId:"recipes/scilla-contract/pair",id:"recipes/scilla-contract/pair",isDocsHomePage:!1,title:"Pair",description:"Pairs of values are specified using the type `Pair t1 t2`, where `t1` and `t2` are types. Pairs are considered ADT's.",source:"@site/docs/recipes/scilla-contract/pair.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/pair",permalink:"/Scilla-Cookbook/recipes/scilla-contract/pair",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/docs/recipes/scilla-contract/pair.md",tags:[],version:"current",frontMatter:{tags:null},sidebar:"tutorialSidebar",previous:{title:"Ownership",permalink:"/Scilla-Cookbook/recipes/scilla-contract/ownership"},next:{title:"Remote State Reads (RSR)",permalink:"/Scilla-Cookbook/recipes/scilla-contract/remoteread"}},c=[{value:"Further Reading",id:"further-reading",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pair"},"Pair"),(0,a.kt)("p",null,"Pairs of values are specified using the type ",(0,a.kt)("inlineCode",{parentName:"p"},"Pair t1 t2"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"t1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"t2")," are types. Pairs are considered ADT's."),(0,a.kt)("p",null,"Take the below example, we have a library function callled ",(0,a.kt)("inlineCode",{parentName:"p"},"build_pair")," which takes two parameters, a ",(0,a.kt)("inlineCode",{parentName:"p"},"ByStr20")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", then creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"Pair")," of those values in the constructor declaration ",(0,a.kt)("inlineCode",{parentName:"p"},"{ByStr20 String}")," . This is called in the public transition ",(0,a.kt)("inlineCode",{parentName:"p"},"Mint")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"input_pair")," is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Pair"),". The procedure ",(0,a.kt)("inlineCode",{parentName:"p"},"Minting")," takes a Pair of ",(0,a.kt)("inlineCode",{parentName:"p"},"ByStr20 String")," and then uses ",(0,a.kt)("inlineCode",{parentName:"p"},"PairUtils")," to be able to use ",(0,a.kt)("inlineCode",{parentName:"p"},"@fst")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@snd")," to retrieve the first and second value from the Pair."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},"import PairUtils\n\nlet build_pair =\n  fun (input_to_address : ByStr20) =>\n  fun (input_token_uri : String) =>\n    Pair {ByStr20 String} input_to_address input_token_uri\n\n...\n\ntransition Mint(to: ByStr20, token_uri: String)\n  input_pair = build_pair to token_uri;\n  Minting input_pair;\n  ...\nend\n\nprocedure Minting(input_pair: Pair ByStr20 String)\n  to = let fst_string_bystr20 = @fst ByStr20 String in\n    fst_string_bystr20 input_pair;\n  token_uri = let snd_string_bystr20 = @snd ByStr20 String in\n    snd_string_bystr20 input_pair;\n  ...\nend\n")),(0,a.kt)("p",null,"Consider the below example of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchMint"),", it takes a single address, and a list of token URI's. ",(0,a.kt)("inlineCode",{parentName:"p"},"pair_token_uri_list")," is defined as a ",(0,a.kt)("inlineCode",{parentName:"p"},"(Pair ByStr20 String)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tmp_func")," is a temporary function to create the list and stores ",(0,a.kt)("inlineCode",{parentName:"p"},"to"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"input_list")," then constructs, the empty Map of Pairs, the temporary function with the address, and then the List of Strings, resulting in a full map of a single address of ",(0,a.kt)("inlineCode",{parentName:"p"},"ByStr20")," and mutiple uri's of type ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),". Now with a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"Pairs"),", these can be iterated over and passed to the procedure as a single Pair."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},"transition BatchMint(to: ByStr20, token_uris_list: List String)\n  pair_token_uri_list = @list_map String (Pair ByStr20 String);\n  tmp_fun = build_pair to;\n  input_list = pair_token_uri_list tmp_fun token_uris_list;\n  forall input_list Minting;\n")),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,"[readtehdocs - Pair]"))}d.isMDXComponent=!0}}]);