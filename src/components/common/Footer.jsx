import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { myEmail } from "./constants";
// import { button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-sm mt-5">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <a
                href="#home"
                className="block select-none font-semibold flex-center text-5xl font-[Whisper]"
              >
                <span>R</span>
                <span className="text-primary">B</span>
              </a>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Shaping ideas into real projects that deliver results. Creating
              digital experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              <button
                variant="outline"
                size="icon"
                className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200"
              >
                <Github className="h-4 w-4" />
              </button>
              <button
                variant="outline"
                size="icon"
                className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 ">
              <span className="border-b-2 border-primary">Quick Links</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">
              <span className="border-b-2 border-primary">Get In Touch</span>
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 " />
                <span className="text-muted-foreground">{myEmail}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 " />
                <span className="text-muted-foreground">+91 9157994959</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 " />
                <span className="text-muted-foreground">
                  Ahmedabad, Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </div>
          {/* <div className="flex space-x-6 text-sm">
            <a
              href="#privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
