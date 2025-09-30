"use client"

import React from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/Auth";


const Layout =({children}:{children:React.ReactNode})=>{
    const {session}=useAuthStore();
    const router=useRouter()

    React.useEffect(()=>{
     if(session){
        router.push("/")
     }
    },[router,session])
    if(session){
        return null;
    }

    return(
        <div className="">
            <div className="">{children}</div>
          </div>  
    )
}

export default Layout