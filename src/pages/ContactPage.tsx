import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Mail, MapPin, Loader2, Send, 
  MessageSquare, CheckCircle2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
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

  const GoldUnderline = () => (
    <div 
      className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-[#9c7a3c] to-transparent shadow-[0_0_15px_rgba(156,122,60,0.4)]"
      style={{ 
        borderBottomLeftRadius: '2rem', 
        borderBottomRightRadius: '2rem' 
      }}
    ></div>
  );

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
        title: "Message Sent! 📬",
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
    <div className="min-h-screen bg-[#f1ede3] font-serif">
      <Header />

      {/* FIXED: Reduced main top padding to pt-20 (matches standard fixed header heights) */}
      <main className="pt-20">
        
        {/* Cinematic Video Banner - Reduced height to 300px to tighten the gap */}
        <div className="w-full h-[300px] relative overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="/your-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1ede3]/40 via-transparent to-[#f1ede3]" />
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
             <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a5e] mb-2">Contact Us</h1>
             <div className="w-24 h-1 bg-[#9c7a3c] rounded-full shadow-[0_2px_10px_#9c7a3c]"></div>
          </div>
        </div>

        {/* FIXED: Adjusted margin-top to -20 to pull content higher into the banner area */}
        <div className="max-w-6xl mx-auto px-6 -mt-20 pb-20 relative z-20">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-10 text-center border-none shadow-lg relative group rounded-[2rem] bg-[#f9f7f2] text-[#2c4a5e]">
                <Mail className="mx-auto mb-6 text-[#9c7a3c]" size={40} />
                <h3 className="text-2xl font-bold mb-4 font-serif">Email Us</h3>
                <p className="opacity-80 font-bold break-all text-sm md:text-base font-serif">
                  info@infinitiimanagementconsulting.com
                </p>
                <GoldUnderline />
              </Card>

              <Card className="p-10 text-center border-none shadow-lg relative group rounded-[2rem] bg-[#f9f7f2] text-[#2c4a5e]">
                <MapPin className="mx-auto mb-6 text-[#9c7a3c]" size={40} />
                <h3 className="text-2xl font-bold mb-4 font-serif">Location</h3>
                <p className="opacity-80 font-bold text-lg font-serif">Hyderabad, India</p>
                <GoldUnderline />
              </Card>

              <div className="p-6 border-l-4 border-[#9c7a3c] bg-white/50 rounded-r-2xl shadow-sm">
                <p className="text-sm text-slate-700 italic leading-relaxed font-serif">
                  "Building excellence through strategic compliance and global ISO standards."
                </p>
              </div>
            </div>

            <Card className="lg:col-span-3 bg-[#f9f7f2] border-none shadow-2xl rounded-[2rem] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#2c4a5e] rounded-xl text-white shadow-lg">
                  <MessageSquare size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#2c4a5e] font-serif">Service Inquiry</h2>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 font-sans">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#2c4a5e] font-bold">Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-white/70 border-slate-200 h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#2c4a5e] font-bold">Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" className="bg-white/70 border-slate-200 h-12 rounded-xl" {...field} />
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
                          <Input placeholder="+91..." className="bg-white/70 border-slate-200 h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="city" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#2c4a5e] font-bold">City *</FormLabel>
                        <FormControl>
                          <Input placeholder="Hyderabad" className="bg-white/70 border-slate-200 h-12 rounded-xl" {...field} />
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
                          className="bg-white/70 border-slate-200 rounded-xl min-h-[120px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#2c4a5e] hover:bg-[#1a2e3b] text-white py-8 rounded-2xl font-bold text-xl transition-all shadow-lg group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin h-6 w-6" />
                    ) : (
                      <span className="flex items-center gap-3 font-serif">
                        Submit Request <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;