"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[6152],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},425:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:r},t)}},3992:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(7462),a=r(7294),l=r(6010),i=r(2957),o=r(6550),s=r(5238),u=r(3609),p=r(2560);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:r,groupId:n}),[c,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),b=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,l]),tabValues:l}}var b=r(1048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==o&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},2455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(4137)),l=r(3992),i=r(425);const o={title:"Transfert des fichiers",sidebar_position:2},s=void 0,u={unversionedId:"arch_exp/turpan/connexion/transfert",id:"arch_exp/turpan/connexion/transfert",title:"Transfert des fichiers",description:"Passez par un fichier tar ou zip",source:"@site/docs/arch_exp/turpan/connexion/transfert.md",sourceDirName:"arch_exp/turpan/connexion",slug:"/arch_exp/turpan/connexion/transfert",permalink:"/documentation/user-documentation/arch_exp/turpan/connexion/transfert",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Transfert des fichiers",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Visualisation",permalink:"/documentation/user-documentation/arch_exp/turpan/connexion/visu"},next:{title:"Le stockage",permalink:"/documentation/user-documentation/arch_exp/turpan/stockage"}},p={},c=[{value:"Passez par un fichier tar ou zip",id:"passez-par-un-fichier-tar-ou-zip",level:2},{value:"Transfert de fichiers de CALMIP",id:"transfert-de-fichiers-de-calmip",level:2},{value:"Transfert de fichiers via le VPN de CALMIP",id:"transfert-de-fichiers-via-le-vpn-de-calmip",level:2},{value:"Au fait... avez-vous besoin de transf\xe9rer vos fichiers ?",id:"au-fait-avez-vous-besoin-de-transf\xe9rer-vos-fichiers-",level:2}],d={toc:c},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#Transf\xe9rer des fichiers entre Turpan et votre poste de travail"),(0,a.kt)("h2",{id:"passez-par-un-fichier-tar-ou-zip"},"Passez par un fichier tar ou zip"),(0,a.kt)("p",null,"Surtout si vous avez beaucoup de fichiers, commencez par les mettre dans un fichier tar ou zip, il est plus efficace de transf\xe9rer un seul gros fichier que beaucoup de petits."),(0,a.kt)("p",null,"Avec tar :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar czf mon_repertoire.tgz mon_repertoire\n")),(0,a.kt)("p",null,"Avec zip :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"zip -r mon_repertoire.zip mon_repertoire\n")),(0,a.kt)("h2",{id:"transfert-de-fichiers-de-calmip"},"Transfert de fichiers de CALMIP"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"rsync",label:"Avec rsync",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Transf\xe9rer depuis Turpan vers mon poste de travail:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rsync -avP user@turpan.calmip.univ-toulouse.fr:/path/on/turpan/mon_repertoire.tgz ma-copie-en-local.tgz\n")),(0,a.kt)("p",null,"Transf\xe9rer depuis mon poste de travail vers Turpan:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rsync -avP mon-repertoire.tgz user@turpan.calmip.univ-toulouse.fr:/path/on/turpan/ma-copie-en-local.tgz \n")),(0,a.kt)("admonition",{title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Si la liaison s'interrompt durant le transfert de fichiers, ne supprimez pas le fichier partiellement transf\xe9r\xe9 : il vous suffira de retaper la m\xeame commande lorsque la liaison sera revenue, le transfert reprendra l\xe0 o\xf9 il s\u2019\xe9tait interrompu."))),(0,a.kt)(i.Z,{value:"filezilla",label:"Avec filezilla",mdxType:"TabItem"},(0,a.kt)("p",null,"Vous pouvez utiliser le logiciel libre filezilla pour effectuer votre transfert de fichiers. Vous devrez le configurer comme suit :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"H\xf4te :"),(0,a.kt)("th",{parentName:"tr",align:null},"turpan.calmip.univ-toulouse.fr"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Identifiant :"),(0,a.kt)("td",{parentName:"tr",align:null},"Votre identifiant sur Turpan")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mot de passe :"),(0,a.kt)("td",{parentName:"tr",align:null},"Votre mot de passe sur Turpan")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port :"),(0,a.kt)("td",{parentName:"tr",align:null},"22"))))),(0,a.kt)(i.Z,{value:"winscp",label:"Avec winscp",mdxType:"TabItem"},(0,a.kt)("p",null,"Vous pouvez utiliser winscp (seulement sous MS-Windows)."),(0,a.kt)("p",null,"Si vous devez transf\xe9rer de gros fichiers avec winscp, voici quelques conseils pour am\xe9liorer la performance :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'D\xe9sactiver dans le menu "Connection" l\u2019option "Optimize connection buffer size" (',(0,a.kt)("a",{parentName:"li",href:"https://winscp.net/forum/viewtopic.php?t=25705"},"https://winscp.net/forum/viewtopic.php?t=25705"),")"),(0,a.kt)("li",{parentName:"ol"},'D\xe9sactiver la compression "Advanced Site Settings" -> "SSH" d\xe9cocher la case "Enable compression" (',(0,a.kt)("a",{parentName:"li",href:"https://winscp.net/eng/docs/faq_slow"},"https://winscp.net/eng/docs/faq_slow"),")"),(0,a.kt)("li",{parentName:"ol"},"Utiliser le protocole SCP plutot que SFTP (",(0,a.kt)("a",{parentName:"li",href:"https://winscp.net/eng/docs/faq_slow"},"https://winscp.net/eng/docs/faq_slow"),")"),(0,a.kt)("li",{parentName:"ol"},"Utilisez FileZilla plutot que winscp...")))),(0,a.kt)("h2",{id:"transfert-de-fichiers-via-le-vpn-de-calmip"},"Transfert de fichiers via le VPN de CALMIP"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"rsync",label:"Avec rsync",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Transf\xe9rer depuis Turpan vers mon poste de travail:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'rsync -avP -e "ssh -p 11301" user@127.0.0.1:/path/on/turpan/mon_repertoire.tgz ma-copie-en-local.tgz\n')),(0,a.kt)("p",null,"Transf\xe9rer depuis mon poste de travail vers Turpan:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'rsync -avP -e "ssh -p 11301" mon-repertoire.tgz user@127.0.0.1:/path/on/turpan/ma-copie-en-local.tgz \n')),(0,a.kt)("admonition",{title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Si la liaison s'interrompt durant le transfert de fichiers, ne supprimez pas le fichier partiellement transf\xe9r\xe9 : il vous suffira de retaper la m\xeame commande lorsque la liaison sera revenue, le transfert reprendra l\xe0 o\xf9 il s'\xe9tait interrompu."))),(0,a.kt)(i.Z,{value:"filezilla",label:"Avec filezilla",mdxType:"TabItem"},(0,a.kt)("p",null,"Vous pouvez utiliser le logiciel libre filezilla pour effectuer votre transfert de fichiers. A travers le VPN, vous devrez le configurer comme suit :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"H\xf4te :"),(0,a.kt)("th",{parentName:"tr",align:null},"sftp://127.0.0.1"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Identifiant :"),(0,a.kt)("td",{parentName:"tr",align:null},"Votre identifiant sur Turpan")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mot de passe :"),(0,a.kt)("td",{parentName:"tr",align:null},"Votre mot de passe sur Turpan")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port :"),(0,a.kt)("td",{parentName:"tr",align:null},"11300 (ou autre, voir la fen\xeatre du VPN)")))))),(0,a.kt)("h2",{id:"au-fait-avez-vous-besoin-de-transf\xe9rer-vos-fichiers-"},"Au fait... avez-vous besoin de transf\xe9rer vos fichiers ?"),(0,a.kt)("p",null,"Si c'est pour les post-traiter, peut-\xeatre serait-il plus efficace d'utiliser nos \xe9quipements de visualisation \xe0 distance !"),(0,a.kt)("p",null,"Si c'est pour les conserver, peut-\xeatre pouvez-vous commencer par les stocker sur l'espace de stockage \"p\xe9renne\" ?"))}f.isMDXComponent=!0}}]);