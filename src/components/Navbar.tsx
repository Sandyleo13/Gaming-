
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="fixed w-full bg-gaming-black/90 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Gamepad2 className="h-6 w-6 text-gaming-light-purple" />
          <span className="text-gradient">GameON Universe</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="nav-link active-nav-link">Home</Link>
            <Link to="#tournaments" className="nav-link">Tournaments</Link>
            <Link to="#games" className="nav-link">Games</Link>
            <Link to="#features" className="nav-link">Features</Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-gaming-light-purple/50 text-gaming-light-purple hover:bg-gaming-light-purple hover:text-white">
              Log In
            </Button>
            <Button className="bg-gaming-light-purple hover:bg-gaming-purple text-white">
              Sign Up
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gaming-dark-gray border-t border-gaming-light-purple/10 p-4 shadow-lg">
          <div className="flex flex-col gap-4 py-2">
            <Link to="/" className="nav-link active-nav-link py-2">Home</Link>
            <Link to="#tournaments" className="nav-link py-2" onClick={toggleMenu}>Tournaments</Link>
            <Link to="#games" className="nav-link py-2" onClick={toggleMenu}>Games</Link>
            <Link to="#features" className="nav-link py-2" onClick={toggleMenu}>Features</Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full border-gaming-light-purple/50 text-gaming-light-purple hover:bg-gaming-light-purple hover:text-white">
                Log In
              </Button>
              <Button className="w-full bg-gaming-light-purple hover:bg-gaming-purple text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
