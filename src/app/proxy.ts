import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export default async function proxy(req:NextRequest) {

   const token= await getToken({req,secret:process.env.NEXTAUTH_SECRET});

   if(!!token){
    return NextResponse.next();
   }

  else{
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}login`)
  }
  
};

 export const config={
    matcher:["/cart","/profile"]
  }