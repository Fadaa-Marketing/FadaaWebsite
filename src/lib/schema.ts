"use client"

import { z } from "zod"


export const contactFormSchema = z.object({
  first_name: z.string().min(2, 'First name is required').max(50),
  last_name: z.string().min(2, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(7, 'Phone number is required')
    .max(15, 'Phone number is too long')
    .regex(/^\+?\d{10,15}$/, 'Invalid phone number format'),
  subject: z.string().min(2, 'Subject is required').max(100),
  message: z.string().min(2, 'Message must be at least 2 characters'),
})
export const jobsFormSchema = z.object({
  full_name: z.string().min(2, 'First name is required').max(50),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(7, 'Phone number is required')
    .max(15, 'Phone number is too long')
    .regex(/^\+?\d{10,15}$/, 'Invalid phone number format'),
  position: z.string().min(2, 'Subject is required').max(100),
  attachment: z
  .instanceof(File, { message: "Attachment must be a file" })
  .or(z.null()),

})