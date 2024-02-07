"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[5357],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(4137));const o={title:"Environnements logiciels",sidebar_position:5},a="L'environnement logiciel sur Bor\xe9ale",l={unversionedId:"arch_exp/boreal/softenv",id:"arch_exp/boreal/softenv",title:"Environnements logiciels",description:"Logiciels disponibles",source:"@site/docs/arch_exp/boreal/softenv.md",sourceDirName:"arch_exp/boreal",slug:"/arch_exp/boreal/softenv",permalink:"/documentation/user-documentation/arch_exp/boreal/softenv",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Environnements logiciels",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Lancer un calcul",permalink:"/documentation/user-documentation/arch_exp/boreal/jobs"},next:{title:"Tutoriaux",permalink:"/documentation/user-documentation/category/tutoriaux"}},s={},u=[{value:"Logiciels disponibles",id:"logiciels-disponibles",level:2},{value:"Simulation atomistique",id:"simulation-atomistique",level:3},{value:"Biblioth\xe8ques de format de donn\xe9es",id:"biblioth\xe8ques-de-format-de-donn\xe9es",level:3},{value:"NEC Numeric Library Collection (NLC)",id:"nec-numeric-library-collection-nlc",level:3},{value:"Compilation",id:"compilation",level:2},{value:"Echantillon d&#39;options de compilation utiles avec le compilateur de NEC",id:"echantillon-doptions-de-compilation-utiles-avec-le-compilateur-de-nec",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lenvironnement-logiciel-sur-bor\xe9ale"},"L'environnement logiciel sur Bor\xe9ale"),(0,i.kt)("h2",{id:"logiciels-disponibles"},"Logiciels disponibles"),(0,i.kt)("p",null,"Les environnements d'applications et de librairies sont accessibles par le biais de ",(0,i.kt)("a",{parentName:"p",href:"https://services.criann.fr/services/hpc/mesonet-project/guide/modules/"},"modules")," (cf. commandes ",(0,i.kt)("inlineCode",{parentName:"p"},"module help"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"module avail"),")."),(0,i.kt)("p",null,"Pour les librairies, le chargement d'un module active les variables d'environnement pouvant \xeatre incluses dans un Makefile : se r\xe9f\xe9rer \xe0 la page de documentation sur les ",(0,i.kt)("a",{parentName:"p",href:"https://services.criann.fr/services/hpc/mesonet-project/guide/modules/"},"modules"),"."),(0,i.kt)("p",null,"Les biblioth\xe8ques ou logiciels compil\xe9s pour l'architecture vectorielle ont leur module dans le r\xe9pertoire ",(0,i.kt)("inlineCode",{parentName:"p"},"/soft/Modules/Modules-boreale/vecto")," de l'arborescence de modules (obtenue par ",(0,i.kt)("inlineCode",{parentName:"p"},"module avail"),"). Le reste permet l'usage des CPU des machines h\xf4tes, pour les modes de calcul hybride VH-VE ou purement CPU."),(0,i.kt)("h3",{id:"simulation-atomistique"},"Simulation atomistique"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Quantum Espresso 6.4 pour VE, avec et sans ELPA (Eigenvalue soLvers for Petaflop Application)")),(0,i.kt)("h3",{id:"biblioth\xe8ques-de-format-de-donn\xe9es"},"Biblioth\xe8ques de format de donn\xe9es"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HDF5 1.10.5, s\xe9quentielle et parall\xe8le, pour VE et VH (version CPU compil\xe9e par Gnu et NEC MPI)"),(0,i.kt)("li",{parentName:"ul"},"NETCDF C 4.7.4 et NETCDF FORTRAN 4.5.3, s\xe9quentielle et parall\xe8le, pour VE et VH (version CPU compil\xe9e par Gnu et NEC MPI)")),(0,i.kt)("h3",{id:"nec-numeric-library-collection-nlc"},"NEC Numeric Library Collection (NLC)"),(0,i.kt)("p",null,"Le SDK de NEC pour l'architecture VE comprend la suite NLC, qui inclut notamment des versions optimis\xe9es de BLAS, LAPACK, SCALAPACK et FFTW (s\xe9quentielle, OpenMP ou MPI) :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sxauroratsubasa.sakura.ne.jp/Documentation"},"https://sxauroratsubasa.sakura.ne.jp/Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sxauroratsubasa.sakura.ne.jp/documents/sdk/SDK_NLC/UsersGuide/main/en/index.html"},"https://sxauroratsubasa.sakura.ne.jp/documents/sdk/SDK_NLC/UsersGuide/main/en/index.html"))),(0,i.kt)("h2",{id:"compilation"},"Compilation"),(0,i.kt)("p",null,"Pour l'architecture CPU (x86), les environnements du compilateur et de la librairie MPI d'Intel, OneAPI, et le compilateur de Gnu en version de 12.2.0 sont disponibles (taper ",(0,i.kt)("inlineCode",{parentName:"p"},"module avail"),")."),(0,i.kt)("p",null,"Pour l'architecture vectorielle NEC, un module ",(0,i.kt)("inlineCode",{parentName:"p"},"compilers/nec/3.5.1")," est disponible pour le compilateur (commandes ",(0,i.kt)("inlineCode",{parentName:"p"},"nfort")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"ncc")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"nc++")," pour FORTRAN / C / C++)."),(0,i.kt)("p",null,"Pour MPI, les trois modules suivants permettent la compilation (wrappers ",(0,i.kt)("inlineCode",{parentName:"p"},"mpinfort")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"mpincc")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"mpinc++")," pour FORTRAN / C / C++) et l'ex\xe9cution (",(0,i.kt)("inlineCode",{parentName:"p"},"mpirun")," dans les scripts de soumission par Slurm), respectivement pour le mode hybride (VE-VH) ou VH avec le compilateur de Gnu, hybride ou VH avec le compilateur d'Intel et natif (VE) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[login@boreale-front1 ~]$ module avail mpi/nec\n----------------------------------------------------- /soft/Modules/Modules-boreale/vecto -----------------------------------------------------\nmpi/nec/hybrid-gnu/3.0.0  mpi/nec/hybrid-intel/3.0.0  mpi/nec/native/3.0.0  \n\n")),(0,i.kt)("p",null,"Pour les parties de code MPI compil\xe9es pour VH, l'option de compilation ",(0,i.kt)("inlineCode",{parentName:"p"},"-vh")," est n\xe9cessaire avec NEC MPI."),(0,i.kt)("h3",{id:"echantillon-doptions-de-compilation-utiles-avec-le-compilateur-de-nec"},"Echantillon d'options de compilation utiles avec le compilateur de NEC"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Optimisation de troisi\xe8me niveau, interpr\xe9tation de directives OpenMP et diagnostics du compilateur (rapport de vectorisation en fichiers de suffixe ",(0,i.kt)("inlineCode",{parentName:"em"},".L"),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-O3 -fopenmp -report-all -fdiag-vector=3"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Ajout du profilage \xe0 l'ex\xe9cution (ftrace)"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-O3 -fopenmp -report-all -fdiag-vector=3 -ftrace"))),(0,i.kt)("p",null,"Le document de la formation \xe0 la prise en main de Bor\xe9ale fournit davantage d'informations sur l'usage de ces options de compilation et de profilage."),(0,i.kt)("p",null,"La documentation de r\xe9f\xe9rence sur ces sujets figure sur ",(0,i.kt)("a",{parentName:"p",href:"https://sxauroratsubasa.sakura.ne.jp/Documentation#SDK"},"https://sxauroratsubasa.sakura.ne.jp/Documentation#SDK")))}m.isMDXComponent=!0}}]);