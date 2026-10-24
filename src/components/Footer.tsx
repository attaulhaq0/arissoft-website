import { Link } from "react-router-dom";
import footerBg from "@/assets/footer-bg.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      {/* White spacing area between services and footer */}
      <div className="h-8 lg:h-12 bg-white" />
      
      <footer 
        className="pt-16 sm:pt-24 lg:pt-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 mb-10 lg:mb-16">
            {/* Company Info */}
            <div className="mb-8 sm:mb-16">
              <Link to="/" className="inline-block">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary m-0 p-0 font-lato">
                  Arissoft Solutions
                </h2>
              </Link>
              
              <h5 className="text-xl font-medium m-0 p-0 mt-8">
                <a 
                  href="mailto:hr@arissoft.com" 
                  className="font-semibold text-base text-secondary hover:text-primary transition-all duration-300 inline-block"
                >
                  hr@arissoft.com
                </a>
              </h5>

              <h6 className="leading-[3rem] text-primary text-base font-normal m-0 p-0">
                <a href="tel:+919876543210" className="inline-block hover:opacity-80 transition-opacity">
                  Ph +91 98765 43210
                </a>
              </h6>

              <h6 className="leading-[3rem] text-base font-normal text-secondary m-0 p-0">
                Arissoft Solutions Pvt Ltd
              </h6>
              <h6 className="leading-[3rem] text-base font-normal text-secondary m-0 p-0">
                1-8-505/PG Flat No-B-201, B-Block<br />
                Mahaveer Palm Grove, Prakashnagar<br />
                Hyderabad, Telangana - 500016
              </h6>
            </div>

            {/* About Us Links */}
            <div className="mb-6 sm:mb-16">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-secondary m-0 p-0 font-lato">About Us</h4>
              <ul className="list-none m-0 p-0">
                <li className="leading-10">
                  <Link to="/services" className="text-foreground/65 font-medium hover:text-primary transition-all duration-300 inline-block">
                    Services
                  </Link>
                </li>
                <li className="leading-10">
                  <Link to="/contact" className="text-foreground/65 font-medium hover:text-primary transition-all duration-300 inline-block">
                    Contact Us
                  </Link>
                </li>
                <li className="leading-10">
                  <Link to="/about" className="text-foreground/65 font-medium hover:text-primary transition-all duration-300 inline-block">
                    Know More
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="mb-6 sm:mb-16">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-secondary m-0 p-0 font-lato">Services</h4>
              <ul className="list-none m-0 p-0">
                <li className="leading-10 text-foreground/65 font-medium">QA/Testing</li>
                <li className="leading-10 text-foreground/65 font-medium">Salesforce</li>
                <li className="leading-10 text-foreground/65 font-medium">DevOps</li>
                <li className="leading-10 text-foreground/65 font-medium">Cybersecurity</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="mb-6 sm:mb-16">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-secondary m-0 p-0 font-lato">Quick Links</h4>
              <ul className="list-none m-0 p-0">
                <li className="leading-10">
                  <Link to="/" className="text-foreground/65 font-medium hover:text-primary transition-all duration-300 inline-block">
                    Home
                  </Link>
                </li>
                <li className="leading-10">
                  <Link to="/about" className="text-foreground/65 font-medium hover:text-primary transition-all duration-300 inline-block">
                    About Us
                  </Link>
                </li>
                <li className="leading-10">
                  <Link to="/services" className="text-foreground/65 font-medium hover:text-primary transition-all duration-300 inline-block">
                    Services
                  </Link>
                </li>
                <li className="leading-10">
                  <Link to="/contact" className="text-foreground/65 font-medium hover:text-primary transition-all duration-300 inline-block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8">
            <p className="text-sm text-muted-foreground">
              © {currentYear} <Link to="/" className="text-primary hover:underline">Arissoft Solutions</Link>. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
