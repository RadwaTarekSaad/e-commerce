import * as zod from 'zod'
import { loginSchema } from './loginSchema'
export type loginObjectType=zod.infer<typeof loginSchema>