import { FileText, BarChart3, Gem } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const services = [
    {
      icon: FileText,
      title: "DevOps",
      description:
        "Do you struggle to keep all of your developers on the same page? Are you always putting out fires, trying to figure out who broke the code, and where? Do your automation tools and systems take more time than they save?",
      color: "text-primary",
      borderColor: "border-primary/20",
    },
    {
      icon: BarChart3,
      title: "Cloud Transformation",
      description:
        "Does your team of developers spend extensive time maintaining databases? Are you tired of spending money on maintenance and for your in-house development system? Does your organization struggle to scale storage limitations?",
      color: "text-red-500",
      borderColor: "border-red-500/20",
    },
    {
      icon: Gem,
      title: "Products Engineering",
      description:
        "We leverage a wide-array of technology stacks and build and deliver cutting-edge digital engineering products from design to deployment. Global delivery models, industry expertise, CMM level-3 processes to deliver robust products",
      color: "text-purple-500",
      borderColor: "border-purple-500/20",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with extended vertical space */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-lato leading-relaxed max-w-4xl mx-auto text-2xl sm:text-3xl lg:text-[40px]"
            style={{ 
              fontWeight: 600,
              color: 'rgb(45, 45, 67)',
              lineHeight: '1.3',
            }}
          >
            Innovation & Software Agency With Good Experience.
          </h2>
          
          {/* Extended text block */}
          <div className="mt-6 sm:mt-10 lg:mt-12 mb-12 sm:mb-20 lg:mb-32 max-w-5xl mx-auto">
            <p className="text-secondary/80 text-sm sm:text-base font-normal leading-relaxed">
              Arissoft has 10+ years of experience in software development, web development, and IT consulting services across a wide array of technologies. We take pride in our exceptional talent, dedicated development teams, and strong corporate relationship management. Our strength lies in rigorous development practices and comprehensive testing to ensure our clients receive only the best solutions. In the fast-paced and competitive technology landscape, we continuously evaluate and invest in acquiring new skills and certifications for our team members.
            </p>
          </div>
        </motion.div>

        {/* Service Cards with connecting lines */}
        <div className="relative">
          {/* Connecting horizontal lines between icons */}
          <div className="hidden md:block absolute top-[60px] left-1/2 -translate-x-1/2 w-[60%]">
            <svg className="w-full h-[2px]" viewBox="0 0 800 2" preserveAspectRatio="none">
              <line x1="0" y1="1" x2="800" y2="1" stroke="hsl(var(--muted-foreground)/0.2)" strokeWidth="2" />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Icon Circle */}
                <div
                  className={`w-[120px] h-[120px] mx-auto rounded-full border-2 ${service.borderColor} flex items-center justify-center mb-8 bg-white relative z-10`}
                >
                  <service.icon
                    size={45}
                    className={service.color}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl text-muted-foreground/60 font-normal mb-5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-8">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
