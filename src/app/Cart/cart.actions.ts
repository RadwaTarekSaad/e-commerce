'use server';
import { revalidatePath } from 'next/cache';
import {decodeAuthenticatedToken} from '../utils'
import { orderPlaceType } from '_/api/types';

 export async function addProductToCart(id:string){

   const userToken= await decodeAuthenticatedToken();

   if(userToken){
try{
     const res=  await fetch("https://ecommerce.routemisr.com/api/v2/cart",{
    method:"post",
    headers:{token:userToken ,"content-type":"application/json"},
    body:JSON.stringify({productId:id})

})

 if(res.ok){
    const finalRes= await res.json();
 console.log("final add to cart",finalRes)
 return finalRes.numOfCartItems;
 }else{
    return false
 }

 
}catch(e){
    console.log("error",e)
}

   }else{
    return new Error("session ended")
   }

 }

export async function deleteElementFromCart(productId:string){

     const token   =  await decodeAuthenticatedToken();
     if(token){
        

try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
        method:"delete",
        headers:{token:token}
    })
    if(res.ok){
       const finalRes=  await res.json();
       revalidatePath("/Cart")
       return finalRes.numOfCartItems;
    }else{
        return null;

    }

    }
    
    
    catch(e){
console.log('error',e)
    }


     }else{
        return new Error("session ended")
     }
    
}

export async function updateProductCount(productId:string,newCount:number){

     const token   =  await decodeAuthenticatedToken();
     if(token){
        

try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
        method:"put",
        headers:{token:token ,'content-type':'application/json'},
        body:JSON.stringify({
  count: newCount
})
    })
    if(res.ok){
       const finalRes=  await res.json();
       revalidatePath("/Cart")
       return finalRes.numOfCartItems;
    }else{
        return null;

    }

    }
    
    
    catch(e){
console.log('error',e)
    }


     }else{
        return new Error("session ended")
     }
    
}



export async function createCashOrder(cartId:string,bodyObject:orderPlaceType){

     const token   =  await decodeAuthenticatedToken();
     if(token){
        

try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,{
        method:"post",
        headers:{token:token ,'content-type':'application/json'},
        body:JSON.stringify(bodyObject)
    })
    if(res.ok){
       const finalRes=  await res.json();
    //    revalidatePath("/Cart")
    //    return finalRes.numOfCartItems;
    return true
    }else{
        return false;

    }

    }
    
    
    catch(e){
console.log('error',e)
    }


     }else{
        return new Error("session ended")
     }
    
}



export async function createOnlineOrderAction(cartId:string,bodyObject:orderPlaceType){

     const token   =  await decodeAuthenticatedToken();
     if(token){
        

try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
        method:"post",
        headers:{token:token ,'content-type':'application/json'},
        body:JSON.stringify(bodyObject)
    })
    if(res.ok){
       const finalRes=  await res.json();
    //    revalidatePath("/Cart")
    //    return finalRes.numOfCartItems;
    return finalRes.session.url;
    }else{
        return false;

    }

    }
    
    
    catch(e){
console.log('error',e)
    }


     }else{
        return new Error("session ended")
     }
    
}