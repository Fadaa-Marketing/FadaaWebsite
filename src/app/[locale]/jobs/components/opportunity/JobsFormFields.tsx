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
import { useTranslations } from "next-intl";

const formSchema = z.object({
  position: z.string().min(1, "validation.positionRequired"),
  full_name: z.string().min(1, "validation.fullNameRequired"),
  email: z.string().email("validation.invalidEmail"),
  phone: z.string().min(1, "validation.phoneRequired"),
  resume: z
    .instanceof(File)
    .refine((file) => file.size <= 5_000_000, "validation.fileSize"),
});

interface JobItem {
  id: string;
  title: string;
}

interface JobsFormFieldsProps {
  jobOptions?: JobItem[];
}

export const JobsFormFields = ({ jobOptions }: JobsFormFieldsProps) => {
  const t = useTranslations("jobsForm");
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
      timer = setTimeout(() => setShowSuccess(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  useEffect(() => {
    if (form.formState.errors.root) {
      setIsErrorVisible(true);
      const timer = setTimeout(() => {
        setIsErrorVisible(false);
        setTimeout(() => form.clearErrors("root"), 300);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [form.formState.errors.root]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const formData = new FormData();
      const selectedJob = jobOptions?.find((job) => job.title === values.position);
      if (!selectedJob) throw new Error(t("submissionError"));

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
        throw new Error(errorData.error || t("submissionError"));
      }

      form.reset();
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = "";

      setShowSuccess(true);
    } catch (error) {
      form.setError("root", {
        type: "manual",
        message: error instanceof Error ? error.message : t("submissionError"),
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
              className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center transition-all duration-300 ease-in-out ${
                showSuccess ? "opacity-100" : "opacity-0"
              }`}
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>{t("successMessage")}</span>
            </div>
          )}

          {(form.formState.errors.root || isErrorVisible) && (
            <div
              className={`bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4 transition-all duration-300 ease-in-out ${
                isErrorVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {form?.formState?.errors?.root?.message}
            </div>
          )}

          {/* Resume */}
          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">{t("resume")}</FormLabel>
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

          {/* Position */}
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">{t("position")}</FormLabel>
                  <div>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-full bg-white h-10 rounded-[8px]">
                          <SelectValue placeholder={t("selectPosition")} />
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

          {/* Full Name */}
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">{t("fullName")}</FormLabel>
                  <div>
                    <FormControl>
                      <Input placeholder={t("fullNamePlaceholder")} {...field} className="w-full h-10 bg-white rounded-[8px]" />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">{t("phone")}</FormLabel>
                  <div>
                    <FormControl>
                      <Input placeholder={t("phonePlaceholder")} {...field} className="w-full h-10 bg-white rounded-[8px]" />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
                  <FormLabel className="text-white text-[18px]">{t("email")}</FormLabel>
                  <div>
                    <FormControl>
                      <Input placeholder={t("emailPlaceholder")} {...field} className="w-full h-10 bg-white rounded-[8px]" />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Submit */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2">
            <div></div>
            <button type="submit" className="main-button w-full capitalize" disabled={isSubmitting}>
              {isSubmitting ? t("submitting") : t("submit")}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};
