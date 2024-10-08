import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password must contain at least 1 character" }),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Password must contain at least 6 character" }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
