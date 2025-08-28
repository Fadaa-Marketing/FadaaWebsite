"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  position: z.string().min(1, "Position is required"),
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  resume: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 5_000_000,
      "File size should be less than 5MB"
    ),
});

interface JobItem {
  id: string;
  title: string;
}

interface JobsFormFieldsProps {
  jobOptions?: JobItem[];
}

export const JobsFormFields = ({ jobOptions }: JobsFormFieldsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "",
      full_name: "",
      email: "",
      phone: "",
      resume: undefined,
    },
  });
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // 5000ms = 5 seconds
    }
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [showSuccess]);

  useEffect(() => {
    if (form.formState.errors.root) {
      setIsErrorVisible(true);
      const timer = setTimeout(() => {
        setIsErrorVisible(false);
        setTimeout(() => form.clearErrors("root"), 300); // Match transition duration
      }, 3000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [form.formState.errors.root]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const formData = new FormData();
      const selectedJob = jobOptions?.find(
        (job) => job.title === values.position
      );
      if (!selectedJob) throw new Error("Selected position not found");

      formData.append("job_id", selectedJob.id);
      formData.append("full_name", values.full_name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("resume", values.resume);

      const response = await fetch("/api/job-applications", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Submission failed");
      }
      form.reset();
      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";

      setShowSuccess(true);
    } catch (error) {
      form.setError("root", {
        type: "manual",
        message: error instanceof Error ? error.message : "Submission failed",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="z-30 w-full mx-auto px-4 sm:px-6 lg:px-8 text-primary">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {showSuccess && (
            <div
              className={`
                bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center
                transition-all duration-300 ease-in-out
                ${showSuccess ? "opacity-100" : "opacity-0"}
              `}
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Application submitted successfully!</span>
            </div>
          )}

          {/* Error Message */}
          {(form.formState.errors.root || isErrorVisible) && (
            <div
              className={`
    bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4
    transition-all duration-300 ease-in-out
    ${isErrorVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
  `}
            >
              {form?.formState?.errors?.root?.message}
            </div>
          )}

          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">
                    Resume / CV
                  </FormLabel>
                  <div>
                    <FormControl className="pt-2 ps-1">
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => field.onChange(e?.target?.files?.[0])}
                        className="w-full bg-white h-10 text-[#828282] cursor-pointer rounded-[8px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Position Field */}
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">
                    Position you're applying for
                  </FormLabel>
                  <div>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full bg-white h-10 rounded-[8px]">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobOptions?.map((item) => (
                            <SelectItem key={item.id} value={item.title}>
                              {item.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Full Name Field */}
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">
                    Full name
                  </FormLabel>
                  <div>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        {...field}
                        className="w-full h-10 bg-white rounded-[8px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">
                    Phone number
                  </FormLabel>
                  <div>
                    <FormControl>
                      <Input
                        placeholder="Your phone number"
                        {...field}
                        className="w-full h-10 bg-white rounded-[8px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">
                    Email
                  </FormLabel>
                  <div>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="w-full h-10 bg-white rounded-[8px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
            <div></div>
            <button
              type="submit"
              className="main-button w-full capitalize"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit application"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};
