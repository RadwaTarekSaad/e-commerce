
'use client'

import { CartResponse } from '_/api/types'
import React, { createContext, ReactNode, useContext, useState } from 'react'


export interface CartContextType{
    numberOfCartItems:number,
    updateNumberOfCartItems:(num:number)=>void

}

const cartContext=createContext<CartContextType>({numberOfCartItems:0,updateNumberOfCartItems(){}})

export default function CartContext({children,res}:{children:ReactNode,res: CartResponse| Error | undefined}) {


  const [numberOfCartItems,setNumberOfCartItems] = useState(()=>{
    return res === undefined?0:(res as CartResponse).products.length
  })
   function updateNumberOfCartItems(num:number){
   setNumberOfCartItems(num)

}
  return (
    <cartContext.Provider value={{numberOfCartItems,updateNumberOfCartItems}}>
    {children}
      
    </cartContext.Provider>
  )
}


export function useCart(){
    const res=useContext(cartContext);
    if(!res){
      
    }
    return res
}
