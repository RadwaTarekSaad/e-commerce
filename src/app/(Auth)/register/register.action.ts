'use server'

import { registerObjectType } from "./Register.Types";

export async function registerAction(data:registerObjectType){
      try{
          const res= await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup",{
            method:"post",
           body:JSON.stringify(data),
           headers:{'content-type':'application/json'}
        })
        const finalResult=await res.json();
        console.log("finalRes",finalResult);
       return res.ok

    }
    
    
    
    
    catch(e){
        console.log(e);

    }


}