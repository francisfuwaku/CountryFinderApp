import ctl from "@netlify/classnames-template-literals";

export const searchBarStyle = ctl(`flex flex-row 
justify-start 
place-items-center
 h-16
 rounded-md 
border-slate-100 
border  
p-2 
bg-white 
shadow-md  
mr-4
 ml-4`);

export const inputBarStyle = ctl(`ml-0 
px-3 
py-2 
bg-white
 placeholder-slate-300 
focus:outline-none 
focus:border-slate-100 
focus:ring-slate-100 
block w-full 
rounded-md 
sm:text-sm 
focus:ring-1`);