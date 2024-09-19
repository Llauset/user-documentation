"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[7487],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,f=p["".concat(i,".").concat(c)]||p[c]||d[c]||l;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const l={title:"Monitoring",sidebar_position:2},o="Surveiller et g\xe9rer ses travaux",s={unversionedId:"HOWTO/slurm/monitor",id:"HOWTO/slurm/monitor",title:"Monitoring",description:"Voir la file d'attente",source:"@site/docs/HOWTO/slurm/monitor.md",sourceDirName:"HOWTO/slurm",slug:"/HOWTO/slurm/monitor",permalink:"/documentation/user-documentation/HOWTO/slurm/monitor",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Monitoring",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Soumettre et g\xe9rer ses travaux",permalink:"/documentation/user-documentation/HOWTO/slurm/submit"},next:{title:"Modules d'environnement",permalink:"/documentation/user-documentation/HOWTO/module"}},i={},u=[{value:"Voir la file d&#39;attente",id:"voir-la-file-dattente",level:2},{value:"Annuler un job",id:"annuler-un-job",level:2},{value:"Voir l&#39;\xe9tat de la machine",id:"voir-l\xe9tat-de-la-machine",level:2},{value:"Inspecter des jobs pass\xe9s",id:"inspecter-des-jobs-pass\xe9s",level:2},{value:"Estimer l&#39;utilisation m\xe9moire d&#39;un code",id:"estimer-lutilisation-m\xe9moire-dun-code",level:3}],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"surveiller-et-g\xe9rer-ses-travaux"},"Surveiller et g\xe9rer ses travaux"),(0,a.kt)("h2",{id:"voir-la-file-dattente"},"Voir la file d'attente"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/squeue.html"},"squeue")," montre l'\xe9tat de la file d'attente."),(0,a.kt)("p",null,"Cette commande affiche la liste des travaux en cours pour l'utilisateur sp\xe9cifi\xe9. Vous pouvez voir des informations telles que l'ID du travail, l'\xe9tat, le n\u0153ud, le temps, etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ squeue\n   JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)\n    ...        ...      ...      \n")),(0,a.kt)("p",null,"Sur certaines machines il se peut que cette commande soit configur\xe9e pour ne montrer que vos jobs par  (",(0,a.kt)("inlineCode",{parentName:"p"},"squeue -u $USER"),")."),(0,a.kt)("p",null,"La colonne ",(0,a.kt)("inlineCode",{parentName:"p"},"ST")," indique l'\xe9tat du job : parmi le grand nombre d'",(0,a.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/squeue.html#SECTION_JOB-STATE-CODES"},"\xe9tats")," possible les plus fr\xe9quents sont: R (Running), PD (Pending - en attente), F (Failed - \xe9chec)."),(0,a.kt)("p",null,"Pour des jobs en attente, la colonne ",(0,a.kt)("inlineCode",{parentName:"p"},"(REASON)")," donne la raison pour laquelle le job est en attente - ",(0,a.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/squeue.html#SECTION_JOB-REASON-CODES"},"la liste")," est longue."),(0,a.kt)("p",null,"Les plus attendues sont ",(0,a.kt)("em",{parentName:"p"},"Priority")," (vous n'avez pas la priorit\xe9) et ",(0,a.kt)("em",{parentName:"p"},"Resources")," (en attente de disponibilit\xe9 de ressources). Si d'autres raisons s'affichent, il peut \xeatre utile de v\xe9rifier si les resources demand\xe9s sont compatibles."),(0,a.kt)("h2",{id:"annuler-un-job"},"Annuler un job"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/sbatch.html"},"scancel")," permet d'annuler un ou plusieurs job(s)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scancel JOBID")," permet d'annuler le job JOBID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scancel -n toto")," annule les jobs nomm\xe9s ",(0,a.kt)("em",{parentName:"li"},"toto")," (bien s\xfbr, seulement ",(0,a.kt)("em",{parentName:"li"},"vos")," jobs)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scancel -n toto -t PENDING")," annule les jobs nomm\xe9s ",(0,a.kt)("em",{parentName:"li"},"toto")," en attente.")),(0,a.kt)("h2",{id:"voir-l\xe9tat-de-la-machine"},"Voir l'\xe9tat de la machine"),(0,a.kt)("p",null,"La commande ",(0,a.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/sinfo.html"},"sinfo")," donne des informations sur les n\u0153uds et partitions d'un cluster."),(0,a.kt)("p",null,"Il est possible de ",(0,a.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/sinfo.html#OPT_format"},"formater la sortie de sinfo")," pour obtenir des informations plus d\xe9taill\xe9s."),(0,a.kt)("p",null,"Par exemple"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sinfo -s"),"\ndonne un resum\xe9 de l'\xe9tat du cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sinfo -N --long"),"\ndonne plus l'\xe9tat du cluster n\u0153ud par n\u0153ud avec plus de d\xe9tails")),(0,a.kt)("h2",{id:"inspecter-des-jobs-pass\xe9s"},"Inspecter des jobs pass\xe9s"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/sacct.html"},"sacct")," donne de l'informations sur des jobs pass\xe9s."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sacct -S 0715 -u $USER\n")),(0,a.kt)("h3",{id:"estimer-lutilisation-m\xe9moire-dun-code"},"Estimer l'utilisation m\xe9moire d'un code"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sacct -o jobid,jobname,reqnodes,reqcpus,reqmem,maxrss,averss,elapsed -j JOBID")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ReqMem     MaxRSS     AveRSS    Elapsed\n---------- ---------- ---------- ----------\n55000Mn        16?              00:08:33\n55000Mn  17413256K  16269776K   00:08:33\n55000Mn  17440808K  16246408K   00:08:32\n")))}d.isMDXComponent=!0}}]);