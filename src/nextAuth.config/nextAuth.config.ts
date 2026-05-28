import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode} from 'jwt-decode'



export const nextAuthConfig:NextAuthOptions={
    providers:[
        Credentials({
            name:"fresh cart credentials",
            credentials:{
                email:{label:"Email",placeholder:"ex:radwatarek125@gmail.com",type:"email"},
                password:{label:"Password",placeholder:"password",type:"password"}
            },
            authorize:async function(credentials)
            {
              const res= await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
                    method:"POST",
                    body:JSON.stringify(credentials),
                    headers:{'content-type': 'application/json'}
                })
                const finalResult= await res.json();
                console.log("finalRes from auth function",finalResult);
                if(res.ok){
                    const {name,email}=finalResult.user
                    // const{role,...rest}=finalResult.user
                  const data:{id:string} =  jwtDecode(finalResult.token)
                    return {
                        name,
                        email,
                        id:data.id,
                        tokenCredentials:finalResult.token
                    }

                }
                else{
                    
                return null
                }

            }
        })
    ],


    jwt:{
        maxAge:60*60*24*3
    },

    pages:{
        signIn:"/login"
    },

    callbacks:{
        jwt:function(param){
            console.log("jwt",param)
           if(param.user){

            
             param.token.routeToken=param.user.tokenCredentials ;
              param.token.id=param.user.id

           }
         

             return param.token



              
    },
    session:function(param){
        console.log("session",param)
    if(param.user){
       param.session.user.id=param.user.id 
    }
          
  
        return param.session
        }


   
    }

}
