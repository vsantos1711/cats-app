import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type TSignInSchema = z.infer<typeof signInSchema>;

export const recoveryAccountSchema = z.object({
  email: z.string().email(),
  activationCode: z.string(),
});

export type TRecoveryAccountSchema = z.infer<typeof recoveryAccountSchema>;
