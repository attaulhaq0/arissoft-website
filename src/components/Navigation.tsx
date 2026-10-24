import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Determine if we're on the homepage (has full-height hero) or other pages (have shorter PageHeader)
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background changes when scrolled
      setIsScrolled(currentScrollY > 20);
      
      // Only apply hide/show logic on homepage
      if (isHomePage) {
        const heroHeight = window.innerHeight;
        if (currentScrollY < heroHeight) {
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }
      } else {
        // Non-homepage: always visible
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHomePage]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: isHomePage 
          ? 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
          : 'opacity 0.3s ease-out, transform 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <Link to="/" className="inline-block">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-secondary m-0 p-0 font-lato">
              Arissoft Solutions
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-base font-medium text-secondary transition-colors duration-200 group`}
              >
                {link.name}
                {/* Green underline - visible on hover and active */}
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 origin-left ${
                    location.pathname === link.href 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary p-2 hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out bg-white ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border/50">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-3 px-2 text-base font-medium rounded-lg transition-all duration-200 relative ${
                  location.pathname === link.href 
                    ? "text-secondary" 
                    : "text-secondary hover:text-secondary"
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {location.pathname === link.href && (
                  <span className="absolute bottom-2 left-2 right-2 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
