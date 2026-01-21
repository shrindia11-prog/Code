import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ConsultationForm } from "./ConsultationForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="bg-card rounded-2xl shadow-elevated border border-border/50 p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <p className="text-sm font-medium text-navy uppercase tracking-wider mb-3">
                Start Your Journey
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
                Ready to Transform Your{" "}
                <span className="text-metallic">Business?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how our expertise can help you achieve your strategic 
                objectives and unlock new opportunities for growth.
              </p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="navy" size="lg" className="group mb-12">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Request a Free Consultation</DialogTitle>
                  </DialogHeader>
                  <ConsultationForm />
                </DialogContent>
              </Dialog>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-sm text-muted-foreground">Email</span>
                  <span className="text-sm font-medium text-foreground">
                    info@infinitii.com
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-sm text-muted-foreground">Phone</span>
                  <span className="text-sm font-medium text-foreground">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span className="text-sm font-medium text-foreground">
                    New York, NY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
