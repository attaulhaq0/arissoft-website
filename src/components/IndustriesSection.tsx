import { motion } from "framer-motion";
import industriesIllustration from "@/assets/industries-illustration.jpg";

export const IndustriesSection = () => {
  const industries = [
    "Automotive",
    "Financial Services",
    "Manufacturing",
    "Telecommunications",
    "Government",
    "Healthcare",
    "Insurance",
    "Entertainment & Media",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Dotted Pattern Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--muted-foreground)/0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left - Illustration (pushed to the left edge) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:-ml-20 xl:-ml-32 flex justify-center lg:justify-start"
          >

            <img
              src={industriesIllustration}
              alt="Industries we serve"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-lg relative z-10"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </motion.div>

          {/* Right - Industries List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            {/* Industries Header - matching "Create a culture of innovation" style */}
            <h3 
              className="font-lato mb-8 text-2xl sm:text-3xl lg:text-[40px]"
              style={{ 
                fontWeight: 600,
                color: 'rgb(45, 45, 67)',
                lineHeight: '1.3',
              }}
            >
              Industries:
            </h3>
            
            <ul className="space-y-2 sm:space-y-3 pl-4 sm:pl-6">
              {industries.map((industry, index) => (
                <motion.li
                  key={industry}
                  className="text-base sm:text-lg lg:text-2xl font-medium font-lato"
                  style={{ color: 'rgb(100, 100, 115)' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {industry}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
