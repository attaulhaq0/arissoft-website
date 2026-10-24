import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Clock, Building2, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useContactForm } from "@/hooks/useContactForm";
export const Contact = () => {
  const cardsAnimation = useScrollAnimation({
    threshold: 0.1
  });
  const formAnimation = useScrollAnimation({
    threshold: 0.1
  });
  const {
    formData,
    updateField,
    handleSubmit,
    isSubmitting
  } = useContactForm();
  const contactInfo = [{
    icon: Mail,
    title: "Email Us",
    details: "mahesh.bandi@arissoft.com",
    link: "mailto:mahesh.bandi@arissoft.com",
    description: "rahul@arissoft.com | hr@arissoft.com"
  }, {
    icon: Phone,
    title: "Call Us",
    details: "Contact via email",
    link: "mailto:mahesh.bandi@arissoft.com",
    description: "We respond within 24 hours"
  }, {
    icon: MapPin,
    title: "Visit Us",
    details: "Hyderabad, Telangana",
    link: "https://maps.google.com/?q=Prakashnagar,Hyderabad,Secunderabad",
    description: "1-8-505/PG, B-201, Mahaveer Palm Grove, Prakashnagar"
  }];
  const benefits = ["Free project consultation", "Custom solution tailored to your needs", "Dedicated project manager", "Post-launch support included"];
  return <section id="contact" className="py-16 lg:py-20 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Layout - Form Left, Info Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Contact Form */}
          <div ref={formAnimation.ref} className={`transition-all duration-700 ${formAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6">
              <h2 
                className="font-lato mb-2 text-2xl sm:text-3xl lg:text-[40px]"
                style={{ 
                  fontWeight: 600,
                  color: 'rgb(45, 45, 67)',
                  lineHeight: '1.3',
                }}
              >
                Start Your Project Today
              </h2>
              <p className="text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <Card className="p-6 lg:p-8 bg-background border-2 border-border/50 shadow-xl rounded-2xl relative overflow-hidden">
              {/* Decorative corner */}
              
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input placeholder="John Doe" value={formData.name} onChange={e => updateField('name', e.target.value)} className="h-12 border-2 border-border/50 focus:border-primary bg-muted/30 rounded-xl transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="john@example.com" value={formData.email} onChange={e => updateField('email', e.target.value)} className="h-12 border-2 border-border/50 focus:border-primary bg-muted/30 rounded-xl transition-all" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+91 98765 43210" value={formData.phone} onChange={e => updateField('phone', e.target.value)} className="h-12 border-2 border-border/50 focus:border-primary bg-muted/30 rounded-xl transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Service Interested
                    </label>
                    <Input placeholder="Web Development" value={formData.service} onChange={e => updateField('service', e.target.value)} className="h-12 border-2 border-border/50 focus:border-primary bg-muted/30 rounded-xl transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea placeholder="Tell us about your project requirements, timeline, and budget..." value={formData.message} onChange={e => updateField('message', e.target.value)} className="min-h-[140px] border-2 border-border/50 focus:border-primary bg-muted/30 rounded-xl transition-all resize-none" required />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-base font-semibold group shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70">
                  {isSubmitting ? <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Sending...
                    </> : <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </>}
                </Button>
              </form>
            </Card>
          </div>

          {/* Right Side - Contact Info */}
          <div ref={cardsAnimation.ref} className={`space-y-6 transition-all duration-700 ${cardsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => <a key={index} href={info.link} className="flex items-center gap-4 p-4 lg:p-5 bg-background border-2 border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-secondary group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                </a>)}
            </div>

            {/* Benefits Card */}
            <Card className="p-6 bg-secondary text-secondary-foreground rounded-2xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" />
                Why Work With Us?
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => <li key={index} className="flex items-center gap-3 text-secondary-foreground/90">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{benefit}</span>
                  </li>)}
              </ul>
            </Card>

            {/* Company Info Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary/20 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Building2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Arissoft Solutions Pvt Ltd</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    1-8-505/PG Flat No-B-201, B-Block Mahaveer Palm Grove, Prakashnagar, Hyderabad, Secunderabad, Telangana, India - 500016
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-background/80 rounded-full text-muted-foreground">CIN: U72900TG2022PTC166010</span>
                    <span className="px-2 py-1 bg-background/80 rounded-full text-muted-foreground">ROC: Hyderabad</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Response Time Badge */}
            <div className="flex items-center justify-center gap-3 p-4 bg-accent/30 rounded-2xl">
              <Clock className="text-primary" size={20} />
              <span className="font-medium text-secondary">Average response time: <span className="text-primary">Within 24 hours</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};