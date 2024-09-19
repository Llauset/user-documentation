"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[7875],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(4137));const i={title:"Environnements logiciels",sidebar_position:5},a="Environnements logiciels",l={unversionedId:"code_form/juliet/softenv",id:"code_form/juliet/softenv",title:"Environnements logiciels",description:"Spack",source:"@site/docs/code_form/juliet/softenv.md",sourceDirName:"code_form/juliet",slug:"/code_form/juliet/softenv",permalink:"/documentation/user-documentation/code_form/juliet/softenv",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Environnements logiciels",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Lancer un calcul",permalink:"/documentation/user-documentation/code_form/juliet/jobs"},next:{title:"Troubleshooting",permalink:"/documentation/user-documentation/code_form/juliet/troubleshooting"}},c={},u=[{value:"Spack",id:"spack",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environnements-logiciels"},"Environnements logiciels"),(0,o.kt)("h2",{id:"spack"},"Spack"),(0,o.kt)("p",null,"Spack est pris en charge sur Juliet."),(0,o.kt)("p",null,"Pour charger un ",(0,o.kt)("em",{parentName:"p"},"module")," \xe0 une certaine ",(0,o.kt)("em",{parentName:"p"},"version")," avec un ",(0,o.kt)("em",{parentName:"p"},"compilateur")," \xe0 une certaine ",(0,o.kt)("em",{parentName:"p"},"version_complilateur")," vous pouvez utiliser la commande:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spack load module@version%compilateur@version_compilateur\n\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Le compilateur est en g\xe9n\xe9ral gcc.")),(0,o.kt)("p",null,"Pour trouver les modules install\xe9s vous pouvez utiliser la commande: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spack find\n")),(0,o.kt)("p",null,"ou, avec le nom de ",(0,o.kt)("em",{parentName:"p"},"module")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spack find module\n")))}m.isMDXComponent=!0}}]);