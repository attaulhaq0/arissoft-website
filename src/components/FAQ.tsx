import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFAQs } from "@/hooks/useContent";
import { motion } from "framer-motion";

// Fallback static data when API is unavailable
const fallbackFaqs = [
  {
    id: 1,
    question: "What services does Arissoft Solutions provide?",
    answer: "We offer comprehensive IT solutions including web development, cloud transformation, mobile app development, DevOps, cybersecurity, data engineering, business intelligence, and custom software development tailored to your business needs.",
    sort_order: 1,
  },
  {
    id: 2,
    question: "How long has Arissoft Solutions been in business?",
    answer: "Arissoft Solutions Private Limited was incorporated on August 25, 2022, and has been actively serving clients with innovative IT solutions since then. We are registered with ROC Hyderabad (CIN: U72900TG2022PTC166010).",
    sort_order: 2,
  },
  {
    id: 3,
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, e-commerce, education, manufacturing, and more. Our solutions are customized to meet the specific requirements of each industry.",
    sort_order: 3,
  },
  {
    id: 4,
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we provide comprehensive application development and maintenance services. Our team offers ongoing support, regular updates, bug fixes, and performance optimization to ensure your systems run smoothly.",
    sort_order: 4,
  },
  {
    id: 5,
    question: "How can I get started with Arissoft Solutions?",
    answer: "Simply contact us through our contact form, email us at ramidinithin@gmail.com, or visit our office in Hyderabad. We'll schedule a consultation to understand your requirements and propose the best solution.",
    sort_order: 5,
  },
  {
    id: 6,
    question: "What technologies do you work with?",
    answer: "We work with cutting-edge technologies including React, Node.js, Python, cloud platforms (AWS, Azure, Google Cloud), databases (SQL, NoSQL), AI/ML frameworks, and modern DevOps tools to deliver robust solutions.",
    sort_order: 6,
  }
];

export const FAQ = () => {
  const { data: faqs } = useFAQs();

  // Use API data or fallback to static data
  const displayFaqs = faqs && faqs.length > 0 ? faqs : fallbackFaqs;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="faq" className="py-14 lg:py-16 bg-accent/20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-10"
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
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {displayFaqs.map((faq, index) => (
              <motion.div key={faq.id || index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${faq.id || index}`}
                  className="bg-background border border-border rounded-lg px-5 hover:border-primary/40 transition-colors duration-200 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:text-primary py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
