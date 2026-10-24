import { Link } from "react-router-dom";
import { User, Layers, TrendingUp, Code } from "lucide-react";
import { motion } from "framer-motion";
export const Services = () => {
  const services = [{
    icon: User,
    title: "Data Engineering and Management",
    color: "text-sky-500"
  }, {
    icon: Layers,
    title: "Application Development and Managed Services",
    color: "text-red-500"
  }, {
    icon: TrendingUp,
    title: "SAP ERP, CRM & HANA Migration Solutions",
    color: "text-primary"
  }, {
    icon: Code,
    title: "Business Intelligence and Artificial Intelligence",
    color: "text-orange-500"
  }];
  return <section id="services" className="py-8 lg:py-12 bg-white relative">

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="lg:pl-20">
          {/* Header */}
          <motion.div className="mb-6" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="relative inline-block font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  OUR SERVICES
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-primary to-emerald-400"></span>
                </span>
                
                <h2 
                  className="font-lato mt-4 text-xl sm:text-2xl lg:text-[40px]"
                  style={{ 
                    fontWeight: 600,
                    color: 'rgb(45, 45, 67)',
                    lineHeight: '1.3',
                  }}
                >
                  We provide wide range of web & business services.
                </h2>
                
                <p className="text-muted-foreground text-sm mt-3">
                  We've strong work history with different business services
                </p>
              </div>
              <Link to="/services" className="text-secondary font-semibold uppercase text-sm hover:text-primary transition-colors border-b-2 border-secondary hover:border-primary pb-1 flex-shrink-0">
                SEE ALL SERVICES
              </Link>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-6 py-4 mx-0 my-4 pr-0 pb-0">
            {services.map((service, index) => <motion.div key={service.title} className="flex items-start gap-6 cursor-pointer group" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} whileHover={{
            x: 8,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <div className={`flex-shrink-0 ${service.color} transition-transform duration-300 ease-out group-hover:scale-110`}>
                  <service.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-secondary leading-snug transition-colors duration-300 group-hover:text-primary py-2 pb-[40px]">
                  {service.title}
                </h3>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};