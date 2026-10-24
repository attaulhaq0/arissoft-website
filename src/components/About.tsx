import { CheckCircle2, Award, TrendingUp, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

// Feature background images
import featureMission from "@/assets/feature-mission.jpg";
import featureLeadership from "@/assets/feature-leadership.jpg";
import featureSpeed from "@/assets/feature-speed.jpg";

export const About = () => {
  const features = [
    {
      title: "Mission-Driven",
      description: "Delivering excellence in every project through innovative IT solutions",
      image: featureMission,
    },
    {
      title: "Expert Leadership",
      description: "Led by experienced directors Maheswar Reddy Bandi and Ravali Dodda",
      image: featureLeadership,
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround on projects without compromising quality",
      image: featureSpeed,
    },
  ];

  const highlights = [
    "Computer-related activities and consulting",
    "Website maintenance and development",
    "Multimedia presentations and content",
    "Scalable & secure infrastructure solutions",
  ];

  const stats = [
    { value: "Active", label: "Company Status", icon: Award },
    { value: "2022", label: "Established", icon: TrendingUp },
    { value: "ROC", label: "Hyderabad", icon: Target },
    { value: "CIN", label: "U72900TG2022PTC166010", icon: CheckCircle2 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-16 lg:py-20 bg-accent/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-lato mb-4 leading-tight text-2xl sm:text-3xl lg:text-[40px]"
            style={{ 
              fontWeight: 600,
              color: 'rgb(45, 45, 67)',
              lineHeight: '1.3',
            }}
          >
            Leading IT Solutions Provider in <span className="text-primary">Hyderabad</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Arissoft Solutions Private Limited is a dynamic IT company specializing in 
            computer-related activities, website maintenance, and multimedia presentations. 
            Incorporated on August 25, 2022, we deliver innovative digital solutions.
          </p>
        </motion.div>

        {/* Features Grid - Simple Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12 lg:mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="relative h-48 lg:h-56 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-5 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          className="bg-background rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-xl border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <h3 
                className="font-lato mb-4 lg:mb-5 text-xl sm:text-2xl lg:text-[32px]"
                style={{ 
                  fontWeight: 600,
                  color: 'rgb(45, 45, 67)',
                  lineHeight: '1.3',
                }}
              >
                Why Choose Arissoft Solutions?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm lg:text-base leading-relaxed">
                As a private limited company registered under the Companies Act with CIN 
                U72900TG2022PTC166010, we combine technical expertise with business acumen 
                to deliver solutions that drive real results. We are dedicated to understanding 
                your unique challenges and creating tailored solutions.
              </p>
              <motion.div 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-primary" size={14} />
                    </div>
                    <span className="text-foreground text-sm lg:text-base">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card 
                    className={`p-5 text-center border-none ${
                      index === 0 ? 'bg-primary text-primary-foreground' : 
                      index === 1 ? 'bg-secondary text-secondary-foreground' : 
                      'bg-accent'
                    }`}
                  >
                    <stat.icon 
                      className={`mx-auto mb-2 ${
                        index < 2 ? 'text-white/80' : 'text-primary'
                      }`} 
                      size={20} 
                    />
                    <div className={`text-2xl lg:text-3xl font-bold mb-1 ${
                      index >= 2 ? 'text-primary' : ''
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-xs ${
                      index < 2 ? 'opacity-90' : 'text-muted-foreground'
                    }`}>
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
