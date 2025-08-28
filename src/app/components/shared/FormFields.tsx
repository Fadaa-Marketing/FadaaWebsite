'use client'
import { Button } from '@/components/ui/button'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { contactData } from '@/constant'
import { ContactSchema } from '@/hooks/use-contact-form'
import React from 'react'

const FormFields = ({style,blogStyle}: {style?:string , blogStyle?:boolean}) => {
    const { form, onSubmit, loading, status } = ContactSchema();
    
    // Show error toast only if there's an error
    React.useEffect(() => {
      if (status === 'error') {
        console.error('Form submission failed with status:', status);
      }
    }, [status]);

  return (
    <div className={`  z-30 w-full mx-auto ${blogStyle===true? 'px-0' : ' px-4 sm:px-6 lg:px-8'}  text-primary`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className={`grid grid-cols-1 ${blogStyle===true? 'sm:grid-cols-1' : 'sm:grid-cols-2'} gap-6`}>
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="First Name" {...field} 
                      className="w-full h-12 bg-[#3E0667] text-white rounded-full placeHold border-[#9400FF] px-6" 
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
                      placeholder="Last Name" {...field} 
                      className="w-full h-12 bg-[#3E0667] text-white rounded-full placeHold border-[#9400FF] px-6" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

        <div className={`grid grid-cols-1 ${blogStyle===true? 'sm:grid-cols-1' : 'sm:grid-cols-2'} gap-6`}>
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Email" {...field} 
                    className="w-full h-12 bg-[#3E0667] text-white rounded-full placeHold border-[#9400FF] px-6" 
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
                    placeholder="Your phone number" {...field} 
                    className="w-full h-12 bg-[#3E0667] text-white rounded-full placeHold border-[#9400FF] px-6" 
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
                  <Select onValueChange={field.onChange}  defaultValue={field.value}>
                    <SelectTrigger className="w-full bg-[#3E0667] rounded-full text-white border-[#9400FF] h-12 px-6">
                      <SelectValue placeholder="Select subject" className="text-white placeHold" />
                    </SelectTrigger>
                    <SelectContent className="text-white bg-[#3E0667] border-[#9400FF]">
                      {contactData.map((val) => (
                        <SelectItem key={val} className="text-white " value={val}>
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
                    placeholder="Your message" {...field} 
                    rows={6} 
                    className="w-full bg-[#3E0667] text-white placeHold border-[#9400FF] resize-none rounded-[20px] p-4 px-6" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          
            <button
              type="submit"
              className='main-button bg-[#8B18E7] w-full mt-2'
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
      </Form>
    </div>
  )
}

export default FormFields
