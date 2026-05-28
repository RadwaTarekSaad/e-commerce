'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '_/components/ui/button'
import { Field, FieldError, FieldLabel } from '_/components/ui/field'
import { Input } from '_/components/ui/input'

import { Controller, useForm } from 'react-hook-form'
import { RegisterSchema } from './Register.Schemas'
import { registerObjectType } from './Register.Types'
import { registerAction } from './register.action'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'




export default function RegisterForm() {
    const Navigation= useRouter()
   const{handleSubmit,control} =useForm<registerObjectType>({
    resolver:zodResolver( RegisterSchema),
    defaultValues:{
        name:"",
        email:"",
        password:"",
        rePassword:"",
        phone:""

    }
   });
   async function mySubmit(data:registerObjectType){
   
  
   
     const isRegisteredSuccessfully= await registerAction(data)
     if(isRegisteredSuccessfully){
        toast.success("Account Created successfully",{duration:2000,position:'top-right'})
     Navigation.push("/login")

     }else{
        toast.error("Account Already Exist",{duration:2000,position:'top-right'})
     

     }
         }

  return (
    <form onSubmit={handleSubmit(mySubmit)} className='flex flex-col gap-4' autoComplete="off">
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">
                   Username
                  </FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Username......"
                    autoComplete="off"
                     type='text'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />





            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone">
                    User Phone
                  </FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="User Phone.."
                    autoComplete="off"
                     type="tel"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />





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


             <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rePassword">
                     rePassword
                  </FieldLabel>
                  <Input
                    {...field}
                    id="rePassword"
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


            <Button type='submit'>Register</Button>

        </form>
      
  )
}
