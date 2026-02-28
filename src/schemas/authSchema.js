const { z } = require('zod');

const registerSchema = z.object({
    userName: z
        .string({ message: "Invalid User Name" })
        .trim()
        .min(1, { message: "User Name cannot be empty" }),
    email: z
        .email({ message: "Invalid Email" }),
    password: z
        .string({ message: "Invalid Password" })
        .min(6, { message: "Password must be atleast 6 characters long" })
});

const loginSchema = z.object({
    email: z
        .email({ message: "Invalid Email" }),
    password: z
        .string({ message: "Invalid Password" })
        .min(6, { message: "Password must be atleast 6 characters long" })
});


module.exports = { registerSchema, loginSchema };