import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Import service background images
import serviceAppDev from "@/assets/service-app-dev.jpg";
import serviceCloudTrans from "@/assets/service-cloud-trans.jpg";
import serviceDevops from "@/assets/service-devops.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceData from "@/assets/service-data.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceSysadmin from "@/assets/service-sysadmin.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceModernize from "@/assets/service-modernize.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceQa from "@/assets/service-qa.jpg";

export const ServicesDetailed = () => {
  const serviceCategories = [
    {
      title: "Application Development",
      description: "Custom software solutions from concept to deployment with ongoing support",
      image: serviceAppDev,
    },
    {
      title: "Cloud Transformation",
      description: "Seamless migration to cloud infrastructure with scalability optimization",
      image: serviceCloudTrans,
    },
    {
      title: "DevOps Solutions",
      description: "Streamline operations with automation, CI/CD pipelines, and IaC",
      image: serviceDevops,
    },
    {
      title: "Design & Development",
      description: "Beautiful, responsive web and mobile apps with modern UI/UX",
      image: serviceDesign,
    },
    {
      title: "SEO & Digital Marketing",
      description: "Improve your online presence and reach your target audience",
      image: serviceSeo,
    },
    {
      title: "Data Engineering",
      description: "Build robust data pipelines and analytics solutions",
      image: serviceData,
    },
    {
      title: "Business Intelligence & AI",
      description: "Transform data into actionable insights with advanced analytics",
      image: serviceAi,
    },
    {
      title: "System Administration",
      description: "Comprehensive IT infrastructure management and monitoring",
      image: serviceSysadmin,
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions",
      image: serviceSecurity,
    },
    {
      title: "App Modernization",
      description: "Legacy system transformation for improved performance",
      image: serviceModernize,
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform apps for iOS and Android",
      image: serviceMobile,
    },
    {
      title: "QA & Testing",
      description: "Comprehensive quality assurance and automated testing",
      image: serviceQa,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-lato mb-3 text-2xl sm:text-3xl lg:text-[40px]"
            style={{ 
              fontWeight: 600,
              color: 'rgb(45, 45, 67)',
              lineHeight: '1.3',
            }}
          >
            Wide Range of <span className="text-primary">Services</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            From digital transformation to ongoing support, we provide comprehensive IT solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {serviceCategories.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card
                className="group relative h-56 lg:h-64 rounded-xl overflow-hidden shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-5 lg:p-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-primary-foreground mb-2">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-primary-foreground/80 leading-relaxed line-clamp-2 mb-3">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-10 lg:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm mb-4">
            Need a custom solution? We're here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-colors group"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
