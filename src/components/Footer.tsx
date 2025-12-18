import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

// TikTok icon component since lucide doesn't have it
const TikTokIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/thegoassignment", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/thegoassignment", label: "Instagram" },
    { icon: TikTokIcon, href: "https://tiktok.com/@thegoassignment", label: "TikTok" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <img src={logo} alt="GoAssignment" className="h-14 w-auto brightness-0 invert" />
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Your trusted partner for academic success. Professional assignment help from expert writers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Follow us @thegoassignment
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} GoAssignment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
