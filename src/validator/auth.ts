import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    studentId: z.string(),
    year: z.string(),
    password: z.string(),
    confirmPassword: z.string()
})
