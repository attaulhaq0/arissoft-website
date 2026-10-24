import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useTestimonials } from "@/hooks/useContent";
import { motion } from "framer-motion";

// Fallback static data when API is unavailable
const fallbackTestimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO",
    company: "TechStart India",
    content: "Arissoft Solutions transformed our digital presence completely. Their team delivered a robust web platform that exceeded our expectations. Highly professional and responsive!",
    rating: 5,
    sort_order: 1,
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "CTO",
    company: "CloudSync Solutions",
    content: "Working with Arissoft was a game-changer for our cloud migration. They handled everything seamlessly and provided excellent post-deployment support. Outstanding service!",
    rating: 5,
    sort_order: 2,
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Director",
    company: "Digital Ventures",
    content: "The custom software solution developed by Arissoft has streamlined our operations significantly. Their expertise in modern technologies is truly impressive.",
    rating: 5,
    sort_order: 3,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    position: "Product Manager",
    company: "InnovateTech",
    content: "Arissoft's team demonstrated exceptional skills in mobile app development. The app they built is fast, intuitive, and our users love it. Great collaboration!",
    rating: 5,
    sort_order: 4,
  }
];

export const Testimonials = () => {
  const { data: testimonials } = useTestimonials();

  // Use API data or fallback to static data
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section id="testimonials" className="py-14 lg:py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-lato mb-3 tracking-tight text-2xl sm:text-3xl lg:text-[40px]"
            style={{ 
              fontWeight: 600,
              color: 'rgb(45, 45, 67)',
              lineHeight: '1.3',
            }}
          >
            What Customers Are <span className="text-primary">Saying About Us</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from our satisfied clients about their experience working with us
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayTestimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id || index} variants={itemVariants}>
              <Card
                className="p-5 bg-background border border-border hover:border-primary/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full group"
              >
                <Quote className="text-primary/15 absolute top-4 right-4 group-hover:text-primary/25 transition-colors duration-300" size={28} />
                
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 relative z-10 leading-relaxed text-sm flex-grow">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border pt-4 mt-auto">
                  <div className="font-semibold text-secondary text-sm group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wide">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
