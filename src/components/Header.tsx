import { Button } from "./ui/button";
import { Sun } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Add this import


const Header = () => {
  const navigate = useNavigate(); // Initialize the hook at the component level

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Sun className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Power Matrix</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Dashboard
          </a>
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Projects
          </a>
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Marketplace
          </a>
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Community
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="connect" size="sm">
            Connect Wallet
          </Button>
          <Button variant="hero" size="sm"
          onClick={() => navigate('/login')} // Add this onClick handler
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;