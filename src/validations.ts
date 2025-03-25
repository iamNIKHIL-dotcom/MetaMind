import { z } from "zod";

export const signupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6)
})

export const signinSchema = z.object({

})

export const shareSchema = z.object({
    share: z.boolean()
})

export const contentSchema = z.object({
    link: z.string().url(),
    type: z.enum(['video', 'article', 'note']),
    title: z.string().min(3)
})

