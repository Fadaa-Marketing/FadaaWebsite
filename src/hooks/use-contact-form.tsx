"use client";

import { contactFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactAPI } from '@/lib/api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function ContactSchema() {
  const router = useRouter();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
  setLoading(true);
  setStatus('idle');

  try {
    console.log('Form submission started with values:', values);

    // Ensure reCAPTCHA is loaded
    if (typeof window === 'undefined' || !(window as any).grecaptcha) {
      throw new Error('reCAPTCHA not loaded. Please refresh the page and try again.');
    }

    // Wrap grecaptcha.execute in ready()
    const token: string = await new Promise((resolve, reject) => {
      (window as any).grecaptcha.ready(() => {
        (window as any).grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
          { action: 'submit' }
        ).then(resolve).catch(() => reject(new Error("Failed to get reCAPTCHA token")));
      });
    });

    if (!token) throw new Error('Failed to get reCAPTCHA token');

    // Send data + token to backend
    console.log('Sending form data to API...');
    const response = await ContactAPI({ ...values, token });
    console.log('Contact form submitted successfully:', response);

    form.reset();
    setStatus('success');
    router.push('/thank-you');
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    setStatus('error');
    toast.error(error.message || 'Failed to send message. Please try again.', {
      style: { background: '#ef4444', color: 'white' }
    });
  } finally {
    setLoading(false);
  }
}


  return { form, onSubmit, loading, status };
}
