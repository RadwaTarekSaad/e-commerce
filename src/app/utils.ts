
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function decodeAuthenticatedToken():Promise<string|null>
{
     

      const cookie=  await cookies()
    
     const tokenCookie = cookie.get("next-auth.session-token")?.value 
   
   const decodedToken= await decode({token:tokenCookie,secret:process.env.NEXTAUTH_SECRET!});
   if(decodedToken){
        return decodedToken.routeToken as string;
     }
     else
        {
        return null
     }

     

}