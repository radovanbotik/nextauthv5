"use server";

import { registerSchema } from "@/schemas";
import * as z from "zod";

export async function register(values: z.infer<typeof registerSchema>) {
  console.log(values);
  const validatedValues = registerSchema.safeParse(values);
  if (!validatedValues) return { error: "Invalid Field Values" };
  return {
    succes: "Success",
  };
}
