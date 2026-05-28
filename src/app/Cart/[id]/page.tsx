'use client'
import { Button } from '_/components/ui/button'
import { Input } from '_/components/ui/input'
import { Label } from '_/components/ui/label'
import React, { useRef } from 'react'
import { createCashOrder, createOnlineOrderAction } from '../cart.actions'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { CartContextType, useCart } from '_/app/_context/CartContext'
import { orderPlaceType } from '_/api/types'

export default function Page() {
    const detailsInput=useRef<HTMLInputElement>(null)
    const phoneInput=useRef<HTMLInputElement>(null)
    const cityInput=useRef<HTMLInputElement>(null)
    const postalInput=useRef<HTMLInputElement>(null)
   const{updateNumberOfCartItems} =(useCart() as CartContextType)
    const{id}=useParams()
    const router=useRouter()
   async function handleCashOrder(){
    const obj:orderPlaceType={
        shippingAddress: {
    details:detailsInput.current?.value||"",
    phone: phoneInput.current?.value||"",
    city: cityInput.current?.value||"",
    postalCode: postalInput.current?.value||""
  }
    }
      const isCreated= await createCashOrder(id?.toString()||'',obj);
      if(isCreated){
        toast.success("order created successfully",{position:"top-right"})
        updateNumberOfCartItems(0);
        router.push("/")

      }else{
        toast.error("error occurred",{position:"top-right"})

      }
    }

   async function handleCheckOutSessionOrder(){
    const obj:orderPlaceType={
        shippingAddress: {
    details:detailsInput.current?.value||"",
    phone: phoneInput.current?.value||"",
    city: cityInput.current?.value||"",
    postalCode: postalInput.current?.value||""
}
    
   }
 const link=  await createOnlineOrderAction(id?.toString()||"",obj);
 if(link === false){
    toast.error("error",{position:"top-right"})

 }else{
    window.open(link,"_self");
 }


}

  return (
    <div className='w-3/4 mx-auto '>
<Label> Details</Label>
    
        <Input ref={detailsInput}/>

        <Label> Phone</Label>
        <Input ref={phoneInput}/>
      
      <Label> City</Label>
        <Input ref={cityInput}/>

         <Label> Postal Code</Label>
        <Input  ref={postalInput}/>

        <Button onClick={handleCashOrder}> Create Cash Order</Button>
        <Button onClick={handleCheckOutSessionOrder}> Create Online Order</Button>
    </div>
  )
}


