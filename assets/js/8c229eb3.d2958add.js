"use strict";(self.webpackChunkmeso_net=self.webpackChunkmeso_net||[]).push([[626],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?i.createElement(h,o(o({ref:n},l),{},{components:t})):i.createElement(h,o({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const r={},o="NVIDIA HPC-Benchmarks",c={unversionedId:"juliet/benchmarks/Nvidia_HPC_Benchmarks",id:"juliet/benchmarks/Nvidia_HPC_Benchmarks",title:"NVIDIA HPC-Benchmarks",description:"Nvidia HPC-Benchmarks represent a collection of three classical benchmarks (HPL, HPL-AI, and HPCG) optimized for Nvidia accelerated systems. HPL and HPL-AI are both implementations of the well-known Linpack benchmark. The difference is that HPL solves a dense linear system in double precision (64 bits) arithmetic and HPL-AI in mixed precision arithmetic. Opting for mixed precision can drastically decrease the execution time. It can be useful for applications that can achieve desired results at lower floating-point precision formats (e.g. machine learning). HPCG is another well-known benchmark. It performs a fixed number of multigrid preconditioned conjugate gradient iterations using double-precision arithmetics.",source:"@site/docs/juliet/benchmarks/Nvidia_HPC_Benchmarks.md",sourceDirName:"juliet/benchmarks",slug:"/juliet/benchmarks/Nvidia_HPC_Benchmarks",permalink:"/documentation/user-documentation/juliet/benchmarks/Nvidia_HPC_Benchmarks",draft:!1,editUrl:"https://github.com/MesoNET/user-documentation/tree/main/docs/juliet/benchmarks/Nvidia_HPC_Benchmarks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apptainer and MPI implementations",permalink:"/documentation/user-documentation/juliet/MPI/MPI_and_Apptainer"}},p={},s=[{value:"Running the benchmarks",id:"running-the-benchmarks",level:2},{value:"Pull the NCG container",id:"pull-the-ncg-container",level:3},{value:"run NVIDIA HPL",id:"run-nvidia-hpl",level:3},{value:"run NVIDIA HPL-AI",id:"run-nvidia-hpl-ai",level:3},{value:"run NVIDIA HPCG",id:"run-nvidia-hpcg",level:3}],l={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nvidia-hpc-benchmarks"},"NVIDIA HPC-Benchmarks"),(0,a.kt)("p",null,"Nvidia HPC-Benchmarks represent a collection of three classical benchmarks (HPL, HPL-AI, and HPCG) optimized for Nvidia accelerated systems. ",(0,a.kt)("inlineCode",{parentName:"p"},"HPL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"HPL-AI")," are both implementations of the well-known Linpack benchmark. The difference is that HPL solves a dense linear system in double precision (64 bits) arithmetic and HPL-AI in mixed precision arithmetic. Opting for mixed precision can drastically decrease the execution time. It can be useful for applications that can achieve desired results at lower floating-point precision formats (e.g. machine learning). ",(0,a.kt)("inlineCode",{parentName:"p"},"HPCG")," is another well-known benchmark. It performs a fixed number of multigrid preconditioned conjugate gradient iterations using double-precision arithmetics."),(0,a.kt)("p",null,"NGC provides a container that includes the three benchmarks optimized for Nvidia GPU systems: ",(0,a.kt)("inlineCode",{parentName:"p"},"nvcr.io/nvidia/hpc-benchmarks:23.5"),". The last one also contains some CUDA-Aware communication libraries like MPI, NCCL, or SHMEM."),(0,a.kt)("h2",{id:"running-the-benchmarks"},"Running the benchmarks"),(0,a.kt)("p",null,"Before proceeding to this section please make sure that you configured the NGC ",(0,a.kt)("inlineCode",{parentName:"p"},"<API_key>")," for Apptainer see ",(0,a.kt)("a",{parentName:"p",href:"/documentation/user-documentation/juliet/Apptainer/Building_NGC_Containers"},"Pull NGC containers with Apptainer")," for details."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Nvidia HPL implementation requires ",(0,a.kt)("inlineCode",{parentName:"p"},"gdrcopy")," to be installed on the compute nodes. You can check if ",(0,a.kt)("inlineCode",{parentName:"p"},"gdrcopy")," is loaded via the ",(0,a.kt)("inlineCode",{parentName:"p"},"lsmod | grep gdrdrv")," command. The last one needs to be executed on the compute nodes (there is no reason to have a GPU driver on login nodes). Feel free to perform this operation via slurm if needed: "),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"srun -p mesonet -n 1 -w juliet3 lsmod | grep gdrdrv"))),(0,a.kt)("h3",{id:"pull-the-ncg-container"},"Pull the NCG container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"apptainer pull nvidia_hpc_benchmarks.sif docker://nvcr.io/nvidia/hpc-benchmarks:23.5\n")),(0,a.kt)("h3",{id:"run-nvidia-hpl"},"run NVIDIA HPL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," srun -p mesonet -N 1 -n 8 -c 14 -G 8 --cpu-bind=none --mpi=pmi2 apptainer exec --ipc --nv nvidia_hpc_benchmarks.sif /workspace/hpl.sh --dat /workspace/hpl-linux-x86_64/sample-dat/HPL-dgx-1N.dat\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Inside the container, the ",(0,a.kt)("inlineCode",{parentName:"p"},"/workspace/hpl-linux-x86_64/sample-dat")," directory includes several ",(0,a.kt)("inlineCode",{parentName:"p"},".dat")," input files (e.g. inputs suitable for 2,4 and 16 DGX nodes). Feel free to use the most appropriate ones for your benchmarking, or to build your own inputs. ")),(0,a.kt)("h3",{id:"run-nvidia-hpl-ai"},"run NVIDIA HPL-AI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," srun -p mesonet -N 1 -n 8 -c 14 -G 8 --cpu-bind=none --mpi=pmi2 apptainer exec --nv --ipc nvidia_hpc_benchmarks.sif /workspace/hpl.sh --xhpl-ai --gpu-affinity 2:3:0:1:6:7:4:5 --mem-affinity 2:3:0:1:6:7:4:5 --dat /workspace/hpl-ai-linux-x86_64/sample-dat/HPL-dgx-1N.dat\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The processor and memory affinities can drastically impact the performance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"HPL-AI-NVIDIA")," benchmark. Hence, you might need to hand-tune the CPU, GPU, and memory affinities via the ",(0,a.kt)("inlineCode",{parentName:"p"},"--cpu-affinity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--mem-affinity"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"--gpu-affinity"),". For more details see the ",(0,a.kt)("a",{parentName:"p",href:"https://catalog.ngc.nvidia.com/orgs/nvidia/containers/hpc-benchmarks"},"NGC catalog"))),(0,a.kt)("h3",{id:"run-nvidia-hpcg"},"run NVIDIA HPCG"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"srun -p mesonet -N 1 -n 8 -c 14 -G 8 --cpu-bind=none --mpi=pmi2 apptainer exec --nv --ipc nvidia_hpc_benchmarks.sif /workspace/hpcg.sh --nx 256 --ny 512 --nz 512 --rt 2\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"srun")," allows us to launch containerized MPI applications without using any host-side MPI library. Hence, we only need an MPI implementation to be installed inside the container.")))}m.isMDXComponent=!0}}]);