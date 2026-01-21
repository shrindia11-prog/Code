import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail, MapPin, Loader2, Send,
  MessageSquare
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number"),
  city: z.string().min(2, "City is required"),
  serviceRequired: z.string().min(10, "Please provide some more details"),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      city: "",
      serviceRequired: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz4-PprvqYQws6ctP8gXH52btDKlo6INRsLGQxGZ0WEuqiUViCz4y0W63wxsrZ846FJ4A/exec";
      const formData = new FormData();
      formData.append("formType", "Contact Form");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("company", values.company || "");
      formData.append("phone", values.phone || "");
      formData.append("city", values.city);
      formData.append("serviceRequired", values.serviceRequired);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: 'no-cors'
      });

      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");
      audio.volume = 0.3;
      audio.play().catch(() => {});

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was a problem. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#d5cbb6] font-serif">
      <Header />

      <main className="pt-24 pb-16 px-6 md:px-12 lg:px-20">

        <div className="text-center mb-16">
          <div className="inline-block px-12 py-6 rounded-[2rem]" style={{
            boxShadow: '12px 12px 24px rgba(44, 74, 94, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.7)'
          }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c4a5e] mb-3">
              Contact Us
            </h1>
            <div className="w-32 h-1.5 mx-auto rounded-full" style={{
              background: 'linear-gradient(135deg, #c9b896, #b8a892)',
              boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.1), inset -2px -2px 4px rgba(255, 255, 255, 0.5)'
            }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-1 space-y-8">

              <div className="rounded-[2rem] p-8 text-center" style={{
                boxShadow: '16px 16px 32px rgba(44, 74, 94, 0.15), -16px -16px 32px rgba(255, 255, 255, 0.8)'
              }}>
                <div className="p-4 rounded-xl mb-6 inline-block" style={{
                  background: 'linear-gradient(145deg, #c9b896, #b8a892)',
                  boxShadow: '8px 8px 16px rgba(184, 168, 146, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.6)'
                }}>
                  <Mail className="text-[#2c4a5e]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#2c4a5e] mb-4">Email Us</h3>
                <div className="p-6 rounded-xl" style={{
                  boxShadow: 'inset 4px 4px 8px rgba(44, 74, 94, 0.08), inset -4px -4px 8px rgba(255, 255, 255, 0.6)'
                }}>
                  <p className="text-[#3a4a55] font-semibold break-all text-sm md:text-base">
                    info@infinitiimanagementconsulting.com
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] p-8 text-center" style={{
                boxShadow: '16px 16px 32px rgba(44, 74, 94, 0.15), -16px -16px 32px rgba(255, 255, 255, 0.8)'
              }}>
                <div className="p-4 rounded-xl mb-6 inline-block" style={{
                  background: 'linear-gradient(145deg, #c9b896, #b8a892)',
                  boxShadow: '8px 8px 16px rgba(184, 168, 146, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.6)'
                }}>
                  <MapPin className="text-[#2c4a5e]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#2c4a5e] mb-4">Location</h3>
                <div className="p-6 rounded-xl" style={{
                  boxShadow: 'inset 4px 4px 8px rgba(44, 74, 94, 0.08), inset -4px -4px 8px rgba(255, 255, 255, 0.6)'
                }}>
                  <p className="text-[#3a4a55] font-semibold text-lg">
                    Hyderabad, India
                  </p>
                </div>
              </div>

              <div className="p-6 border-l-4 border-[#9c7a3c] rounded-r-2xl" style={{
                background: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '4px 4px 8px rgba(44, 74, 94, 0.1)'
              }}>
                <p className="text-sm text-[#3a4a55] italic leading-relaxed">
                  "Building excellence through strategic compliance and global ISO standards."
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-[2rem] p-8 md:p-12" style={{
              boxShadow: '16px 16px 32px rgba(44, 74, 94, 0.15), -16px -16px 32px rgba(255, 255, 255, 0.8)'
            }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl text-white" style={{
                  background: 'linear-gradient(145deg, #2c4a5e, #1f3342)',
                  boxShadow: '8px 8px 16px rgba(44, 74, 94, 0.3), -4px -4px 12px rgba(255, 255, 255, 0.1)'
                }}>
                  <MessageSquare size={28} />
                </div>
                <h2 className="text-3xl font-bold text-[#2c4a5e]">Service Inquiry</h2>
              </div>

              <div className="p-6 rounded-xl" style={{
                boxShadow: 'inset 4px 4px 8px rgba(44, 74, 94, 0.08), inset -4px -4px 8px rgba(255, 255, 255, 0.6)'
              }}>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2c4a5e] font-bold">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-white/60 border-[#d5cbb6] h-12 rounded-xl focus:border-[#9c7a3c] focus:ring-[#9c7a3c]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2c4a5e] font-bold">Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-white/60 border-[#d5cbb6] h-12 rounded-xl focus:border-[#9c7a3c] focus:ring-[#9c7a3c]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2c4a5e] font-bold">Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91..." className="bg-white/60 border-[#d5cbb6] h-12 rounded-xl focus:border-[#9c7a3c] focus:ring-[#9c7a3c]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="city" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2c4a5e] font-bold">City *</FormLabel>
                          <FormControl>
                            <Input placeholder="Hyderabad" className="bg-white/60 border-[#d5cbb6] h-12 rounded-xl focus:border-[#9c7a3c] focus:ring-[#9c7a3c]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="serviceRequired" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#2c4a5e] font-bold">Message / Requirements *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about the service you require..."
                            className="bg-white/60 border-[#d5cbb6] rounded-xl min-h-[120px] resize-none focus:border-[#9c7a3c] focus:ring-[#9c7a3c]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-white py-6 rounded-xl font-bold text-lg transition-all group"
                      style={{
                        background: 'linear-gradient(145deg, #2c4a5e, #1f3342)',
                        boxShadow: '8px 8px 16px rgba(44, 74, 94, 0.3), -4px -4px 12px rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin h-6 w-6 mx-auto" />
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          Submit Request <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;