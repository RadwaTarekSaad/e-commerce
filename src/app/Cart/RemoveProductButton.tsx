'use client'
import { Button } from '_/components/ui/button'
import React from 'react'
import { deleteElementFromCart } from './cart.actions'
import { CartContextType, useCart } from '../_context/CartContext'
import { toast } from 'sonner'

export default function RemoveProductButton({id}:{id:string}) {
    const{updateNumberOfCartItems}=(useCart() as CartContextType)

   async function handleRemoveElement(){
       const res=await deleteElementFromCart(id);
       if(res === null){
        toast.error("error occurred while deleting product");
        

       }else{
        updateNumberOfCartItems(res);
        toast.success("product deleted successfully")

       }


    }
  return (
    
        <Button onClick={handleRemoveElement} className='w-full mt-1' variant='destructive'>Remove</Button>
 
  )
}
