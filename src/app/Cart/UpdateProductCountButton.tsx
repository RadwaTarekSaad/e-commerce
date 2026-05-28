
'use client'
import { Button } from '_/components/ui/button'
import React from 'react'
import { updateProductCount } from './cart.actions'
import { toast } from 'sonner'

export default function UpdateProductCountButton({isIncrement=false,id,newCount}:{isIncrement?:boolean,id:string,newcount:number}) {
    async function handleUpdateCount(){
    const  numOfCartItems=  await updateProductCount(id,newCount)
    if(numOfCartItems){
        toast.success(`product count ${isIncrement?"Incremented":"Decremented"} successfully`,{position:"top-right"})
    }else{
        toast.error("error")
    }
    }
  return (
     <Button onClick={handleUpdateCount} disabled={newCount<=0} variant='outline'>
        {isIncrement?"+":"-"}
        </Button>
  )
}
