"use client";

import {jobsFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


export function JobsSchema() {
  const form = useForm<z.infer<typeof jobsFormSchema>>({
    resolver: zodResolver(jobsFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      position: "",
      attachment: undefined, 
    },
  });


  async function onSubmit(values: z.infer<typeof jobsFormSchema>) {
   
}
  return { form, onSubmit};
}
