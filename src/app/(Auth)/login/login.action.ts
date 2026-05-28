'use server';
import { cookies } from "next/headers";
import { loginObjectType } from "./login.Types";
import { getUserCart } from "_/api/services/route.services";

export async function loginAction(data:loginObjectType){

      try{
          const res= await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
            method:"POST",
           body:JSON.stringify(data),
           headers:{'content-type':'application/json'}
        })
        const finalResult=await res.json();
        console.log("final response of login",finalResult);
       if(res.ok){
        const cookie=await cookies();
        cookie.set('tkn',finalResult.token,{
            httpOnly:true,
            maxAge:60*60*24,
            sameSite:"lax"
        })

        return true;
       }else{
        return false
       }

    }
    
    
    
    
    catch(e){
        console.log(e);

    }


}
export async function getCurrentLoggedInUserAction(){
    return await getUserCart();
}