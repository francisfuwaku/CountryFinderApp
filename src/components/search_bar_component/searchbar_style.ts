import ctl from "@netlify/classnames-template-literals";

export const searchBarStyle = ctl(`flex flex-row 
justify-start 
place-items-center
 h-14
 rounded-md 
fixed
p-2 
-mt-28
bg-white 
shadow-md  
font-nunito
mr-4
 ml-4
lg:w-[550px]
lg:ml-40`);

export const inputBarStyle = ctl(`ml-0 
px-3 
py-2 
bg-white
 placeholder-slate-300 
focus:outline-none 
focus:ring-slate-100 
block 
w-full 
rounded-md 
font-nunito
sm:text-sm 
focus:ring-1`);
