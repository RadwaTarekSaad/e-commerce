import * as zod from 'zod'
export const loginSchema=zod.object({
   
    email:zod.email("Email isn't in format").nonempty("Email is required"),
    password:zod.string("").nonempty("password is required ").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,"Min 1 uppercase letter,Min 1 lowercase letter,Min 1 special character,Min 1 number Min 8 characters,Max 30 characters"),
   
})