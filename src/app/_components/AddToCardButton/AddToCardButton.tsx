
'use client'
import { Button } from '_/components/ui/button'
import React, { ReactNode } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MouseEvent } from 'react';
import { addProductToCart } from '_/app/Cart/cart.actions';
import { CartContextType, useCart } from '_/app/_context/CartContext';
import { toast } from "sonner"



interface addToCardButtonProps{
  id:string | undefined ;
  classNames?:string;
  children:ReactNode;

}

export default function AddToCardButton({id ,classNames=' ',children}:addToCardButtonProps) {
    const {updateNumberOfCartItems}=  (useCart() as CartContextType)
   async function handleClick(e: MouseEvent){
        e.preventDefault();
         if (!id) return;
    const newItemsCount=  await addProductToCart(id);
    if(newItemsCount != false){
      toast.success("product added successfully",{position:"top-right"})
     updateNumberOfCartItems(newItemsCount)

    }else{
       toast.error("Error happened while adding product",{position:"top-right"})

    }
      

    }
  return (
    <Button className={classNames} onClick= { handleClick }>
      {children}
    </Button>
  )
}
