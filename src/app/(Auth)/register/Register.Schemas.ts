import * as zod from 'zod'
export const RegisterSchema=zod.object({
    name:zod.string("Name must be Text").nonempty("Name is required")
    .min(3,"Name must be atleast 3 characters").max(13,"Name must be maximum 13 characters"),
    email:zod.email("Email isn't in format").nonempty("Email is required"),
    password:zod.string("").nonempty("password is required ").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,"Min 1 uppercase letter,Min 1 lowercase letter,Min 1 special character,Min 1 number Min 8 characters,Max 30 characters"),
    rePassword:zod.string("").nonempty("Enter password confirmation").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,"Min 1 uppercase letter,Min 1 lowercase letter,Min 1 special character,Min 1 number Min 8 characters,Max 30 characters"),
    phone:zod.string().nonempty("phone number is required").regex(/01[0215][0-9]{8}/,"phone must be an egyptian number")
}).refine(function(values){
    return values.password===values.rePassword

},{error:"passwords are inmatch",path:["password"]})
