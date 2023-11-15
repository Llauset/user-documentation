"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[368],{4137:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6913:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=r(7462),o=(r(7294),r(4137));const i={title:"NSIGHT",sidebar_position:4},a=void 0,p={unversionedId:"arch_exp/turpan/performance/nsight",id:"arch_exp/turpan/performance/nsight",title:"NSIGHT",description:"Pour utiliser nsys, c'est tr\xe8s simple.",source:"@site/docs/arch_exp/turpan/performance/nsight.md",sourceDirName:"arch_exp/turpan/performance",slug:"/arch_exp/turpan/performance/nsight",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/nsight",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"NSIGHT",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MAP",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/map"},next:{title:"NEON",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/neon"}},s={},l=[{value:"Exemple de rapport simple n\u0153ud",id:"exemple-de-rapport-simple-n\u0153ud",level:2},{value:"Visualisation de rapport simple n\u0153ud",id:"visualisation-de-rapport-simple-n\u0153ud",level:2}],u={toc:l},c="wrapper";function d(e){let{components:n,...i}=e;return(0,o.kt)(c,(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pour utiliser nsys, c'est tr\xe8s simple."),(0,o.kt)("p",null,"D'abord, il faut aller sur le n\u0153ud de calcul pour g\xe9n\xe9rer un rapport avec votre application (n\u0153ud unique ou n\u0153uds multiples)."),(0,o.kt)("p",null,"Ensuite, il faut aller sur le TurboVNC ouvrez une interface graphique nsys pour visualiser votre rapport."),(0,o.kt)("h2",{id:"exemple-de-rapport-simple-n\u0153ud"},"Exemple de rapport simple n\u0153ud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#!/usr/bin/bash\n#SBATCH -N 1\n#SBATCH -n 16\n#SBATCH --ntasks-per-node=16\n#SBATCH --gres=gpu:2\n#SBATCH --time=01:00:00\n#SBATCH --mem=128G\n#SBATCH -p small\n#nvprofiling\n\nmodule purge\nmodule load amgx/nvidia/2.4.0-nvhpc231-system\nmodule load dcgm/3.1.3-1\nmodule list\n\nworkdir=$PWD/${SLURM_JOBID}\nmkdir ${workdir}\n\ncd ${workdir}\n\\cp -f ../{bul3.*,jcl,PCG.json} .\ncp ../nsys.sh .\ncp $0 .\nmaxit=4                                                                                                           \n\nexport CUDA_VISIBLE_DEVICES=0,1\nexport TEST_SYSTEM_PARAMS=1\nexport UCX_MEMTYPE_CACHE=n\n\nexport UCX_IB_GPU_DIRECT_RDMA=no\necho \"UCX_IB_GPU_DIRECT_RDMA=${UCX_IB_GPU_DIRECT_RDMA}\"\necho \"LD_LIBRARY_PATH=$LD_LIBRARY_PATH\"\n\n#DCGM\nnv-hostengine --pid nvhostengine.pid --log-filename nv-hostengine.log\n#PCIe\ndcgmi dmon -e 1009,1010 -c 200 > compteur.${SLURM_JOB_ID} &\n\nclush -w ${SLURM_NODELIST} nvidia-cuda-mps-control -d\nBIN=../my_application\nldd ${BIN}\nnodeset -e ${SLURM_JOB_NODELIST} | tr ' ' '\\n' > hostfile_${SLURM_JOBID}\nnsys profile -t mpi,ucx,openmp,openacc,oshmem,cuda,opengl,nvtx,osrt -o report-mpirun-singlenode mpirun -hostfile ./hostfile_${SLURM_JOBID} -np ${SLURM_NTASKS} --map-by ppr:${SLURM_NTASKS_PER_NODE}:socket:PE=1 $BIN 2 2 4\nclush -w ${SLURM_NODELIST}  echo quit | nvidia-cuda-mps-control\n\nkill -9 $(cat nvhostengine.pid)\n")),(0,o.kt)("h2",{id:"visualisation-de-rapport-simple-n\u0153ud"},"Visualisation de rapport simple n\u0153ud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Vous ouvrez un terminal sur le TurboVNC :\n\nmodule load nvidia\nmodule load nvhpc/23.1\ncd /usr/local/arch-x86/nvidia/nvhpc/Linux_x86_64/23.1/profilers/Nsight_Systems/host-linux-x64/\n./nsys-ui.vglrun.wrapper\n\n#Vous visualisez un rapport sur une interface graphique nsys :\n\n/tmpdir/jamal/Tests_Nsys/6147/report-mpirun-singlenode.nsys-rep\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Capture d&#39;\xe9cran du formulaire d&#39;engistrement dans le SSO Mesonet",src:r(5214).Z,width:"1916",height:"1191"})))}d.isMDXComponent=!0},5214:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/nsight-ab1121f3fcd79e58e9a0bdd50cf4eb26.png"}}]);