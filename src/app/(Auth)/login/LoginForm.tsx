'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '_/components/ui/button'
import { Field, FieldError, FieldLabel } from '_/components/ui/field'
import { Input } from '_/components/ui/input'

import { Controller, useForm } from 'react-hook-form'
import { loginSchema } from './loginSchema'
import { loginObjectType } from './login.Types'
import { getCurrentLoggedInUserAction, loginAction } from './login.action'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { CartContextType, useCart } from '_/app/_context/CartContext'




export default function LoginForm() {
    const Navigation= useRouter()
   const {updateNumberOfCartItems}= (useCart() as CartContextType)
   const{handleSubmit,control} =useForm<loginObjectType>({
    resolver:zodResolver( loginSchema),
    defaultValues:{
       
        email:"",
        password:"",
       

    }
   });
   async function mySubmit(data:loginObjectType){
   
   const res= await signIn('credentials',{redirect:false,...data})
if(res?.ok){
   toast.success("Welcome Fresh Carter",{duration:2000,position:'top-right'})
  const res= await getCurrentLoggedInUserAction();

  updateNumberOfCartItems(  res?.products.length||0)

     Navigation.push("/")


}else{
        toast.error("Password or Email is wrong",{duration:2000,position:'top-right'})
     

     }
    //  const isLoggedInSuccessfully= await loginAction(data)
    //  if(isLoggedInSuccessfully){
    //     toast.success("Welcome Fresh Carter",{duration:2000,position:'top-right'})

    //  Navigation.push("/")

    //  }else{
    //     toast.error("Password or Email is wrong",{duration:2000,position:'top-right'})
     

    //  }
         }

  return (
    <form onSubmit={handleSubmit(mySubmit)} className='flex flex-col gap-4'>
           
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">
                     Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter Your Email.."
                    autoComplete="off"
                     type='email'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />




            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">
                     password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter Your password.."
                    autoComplete="off"
                     type='password'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />


            


            <Button type='submit'>Login</Button>

        </form>
      
  )
}
