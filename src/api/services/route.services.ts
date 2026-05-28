import { decodeAuthenticatedToken } from "_/app/utils";
import { CartResponse, categoryType, productType } from "../types";
import { UserData } from './../../../node_modules/next-auth/providers/42-school.d';

export async function getAllProducts():Promise<productType[]| undefined>
  {
   try{
const res= await fetch("https://ecommerce.routemisr.com/api/v1/products",{cache:"force-cache"});
   const finalProducts=await res.json();
   return finalProducts.data;
   }
   catch(error)
   {
   console.log("error",error);
   }
   
  }



  export async function getSpecificProduct(id:string):Promise<productType|undefined>
     {
     try{
       const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      );
      const finalResult = await res.json();
      return finalResult.data;
     }catch(e){
      console.log(e)
  
     }
    }


    export async function getAllCategories():Promise<categoryType[]| undefined>
  {
   try{
const res= await fetch("https://ecommerce.routemisr.com/api/v1/categories");
   const finalProducts=await res.json();
   return finalProducts.data;
   }
   catch(error)
   {
   console.log("error",error);
   }
   
  }

    export async function getUserCart():Promise<CartResponse|undefined>
  {

     const  userToken =  await decodeAuthenticatedToken();

     if(userToken){
 try{
const res= await fetch("https://ecommerce.routemisr.com/api/v2/cart",{
   headers:{token:userToken},
   // cache:"force-cache",
   // next:{
   //    tags:["getUserCart"]
   // }
});
   const finalProducts=await res.json();
   console.log("finaallll",finalProducts)
   return finalProducts;
   }
   catch(error)
   {
   console.log("error",error);
   }
     }else{
   return undefined;
     }
  
   
  }