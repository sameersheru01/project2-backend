const { z } = require('zod');

const loginSchema = z.object({
    email: z.string().email('Invalid email format').trim().min(1, { message: "Email is required" }),
    password: z.string().min(1, { message: 'Password is required' })
})


const registerSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email('Invalid email format').trim().min(1, { message: "Email is required" }),
    phonenumber: z.string().regex(/^\d{10}$/, { message: 'Phone number must be exactly 10 digits' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' })
})

module.exports = { loginSchema,registerSchema };