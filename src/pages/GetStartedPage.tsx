import { ConsultationForm } from "@/components/ConsultationForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const GetStartedPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Matter / Information */}
              <div className="space-y-8 animate-fade-up">
                <div>
                  <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
                    Let's Build Your <span className="text-metallic">Success Story</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Take the first step towards transforming your business operations and 
                    achieving sustainable growth. Our experts are ready to partner with you.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">What to expect:</h3>
                  <ul className="space-y-4">
                    {[
                      "A comprehensive 30-minute strategic evaluation",
                      "Identification of key growth bottlenecks",
                      "Preliminary roadmap for operational optimization",
                      "Personalized consultation with a senior partner"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/30 p-6 rounded-xl border border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "Infinitii transformed our approach to strategic planning. The 
                    initial consultation alone gave us insights that changed our 
                    trajectory for the year."
                  </p>
                  <p className="mt-3 text-sm font-medium">— CEO, TechInnovate Global</p>
                </div>
              </div>

              {/* Form Container */}
              <div className="bg-card rounded-2xl shadow-elevated border border-border/50 p-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Request Your Consultation</h2>
                <ConsultationForm />
                <p className="mt-6 text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and 
                  consent to being contacted regarding your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetStartedPage;
