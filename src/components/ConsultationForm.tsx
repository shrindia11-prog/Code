import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  city: z.string().min(2, "Please enter a city"),
  serviceRequired: z.string().min(10, "Please provide some more details"),
});

export function ConsultationForm() {
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
      // ✅ YOUR CONFIGURED GOOGLE SHEETS URL
      const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbz4-PprvqYQws6ctP8gXH52btDKlo6INRsLGQxGZ0WEuqiUViCz4y0W63wxsrZ846FJ4A/exec";

      const formData = new FormData();
      formData.append("formType", "Consultation Form");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("company", values.company);
      formData.append("phone", values.phone);
      formData.append("city", values.city);
      formData.append("serviceRequired", values.serviceRequired);

      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        body: formData,
      });

      console.log("Form submitted:", values);
      
      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");
      audio.volume = 0.3;
      audio.play().catch(() => {});

      toast({
        title: "Success! 🎉",
        description: "Your consultation request has been received. One of our experts will contact you within 24 hours.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left p-6 bg-secondary/20 rounded-xl border border-border/50">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="john@example.com" 
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Company</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Company name" 
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" 
                  {...field} 
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
              <FormLabel className="text-foreground font-medium">Phone</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Phone number" 
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">City</FormLabel>
              <FormControl>
                <Input 
                  placeholder="City" 
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serviceRequired"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Service Required</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="min-h-[100px] bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="navy" className="w-full shadow-elevated hover-elevate active-elevate-2 transition-all duration-300" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Book Free Consultation"
          )}
        </Button>
      </form>
    </Form>
  );
}