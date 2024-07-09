import { toTypedSchema } from "@vee-validate/zod"
import * as z from "zod"

export const loginSchema = toTypedSchema(
	z.object({
		email: z.string().email(),
		password: z.string().min(8),
	})
)
