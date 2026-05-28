import * as zod from 'zod'
import { RegisterSchema } from './Register.Schemas'
export type registerObjectType=zod.infer<typeof RegisterSchema>