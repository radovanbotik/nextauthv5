"use server";

import { loginSchema } from "@/schemas";
import * as z from "zod";

export async function login(values: z.infer<typeof loginSchema>) {
  const validatedValues = loginSchema.safeParse(values);
  if (!validatedValues) return { error: "Invalid Field Values" };
  return {
    succes: "Success",
  };
}
