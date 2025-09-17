"use client";

import React from "react";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ContactSchema } from "@/hooks/use-contact-form";
import { useTranslations } from "next-intl";
import { contactData } from "@/constant";
const FormFields = ({
  style,
  blogStyle,
}: {
  style?: string;
  blogStyle?: boolean;
}) => {
  const { form, onSubmit, loading, status } = ContactSchema();
  const t = useTranslations("contactform");

  const subjects = t.raw("subjects") as string[];

  React.useEffect(() => {
    if (status === "error")
      console.error("Form submission failed with status:", status);
  }, [status]);

  return (
    <div
      className={`z-30 w-full mx-auto ${
        blogStyle ? "px-0" : "px-4 sm:px-6 lg:px-8"
      } text-primary`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div
            className={`grid grid-cols-1 ${
              blogStyle ? "sm:grid-cols-1" : "sm:grid-cols-2"
            } gap-6`}
          >
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.first_name")}
                      {...field}
                      className="w-full h-12 bg-[#3E0667] text-white rounded-full border-[#9400FF] px-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.last_name")}
                      {...field}
                      className="w-full h-12 bg-[#3E0667] text-white rounded-full border-[#9400FF] px-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div
            className={`grid grid-cols-1 ${
              blogStyle ? "sm:grid-cols-1" : "sm:grid-cols-2"
            } gap-6`}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.email")}
                      {...field}
                      className="w-full h-12 bg-[#3E0667] text-white rounded-full border-[#9400FF] px-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.phone")}
                      {...field}
                      className="w-full h-12 bg-[#3E0667] text-white rounded-full border-[#9400FF] px-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full bg-[#3E0667] rounded-full text-white border-[#9400FF] h-12 px-6">
                      <SelectValue
                        placeholder={t("placeholders.subject")}
                        className="text-white"
                      />
                    </SelectTrigger>
                    <SelectContent className="text-white bg-[#3E0667] border-[#9400FF]">
                      {subjects.map((val) => (
                        <SelectItem
                          key={val}
                          value={val}
                          className="text-white"
                        >
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={t("placeholders.message")}
                    {...field}
                    rows={6}
                    className="w-full bg-[#3E0667] text-white border-[#9400FF] resize-none rounded-[20px] p-4 px-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="main-button bg-[#8B18E7] w-full mt-2"
            disabled={loading}
          >
            {loading ? t("buttons.sending") : t("buttons.send")}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default FormFields;
