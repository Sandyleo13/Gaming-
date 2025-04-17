
import { Gamepad2, Twitter, Instagram, Twitch, Youtube, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gaming-dark-gray pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Gamepad2 className="h-6 w-6 text-gaming-light-purple" />
              <span className="text-gradient">GameON Universe</span>
            </Link>
            <p className="text-gaming-light-gray mb-6">
              The premier destination for online gaming tournaments across all popular game titles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gaming-light-gray hover:text-gaming-light-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gaming-light-gray hover:text-gaming-light-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gaming-light-gray hover:text-gaming-light-purple transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
              <a href="#" className="text-gaming-light-gray hover:text-gaming-light-purple transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>Tournaments</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>Game Categories</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>How It Works</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>Player Rankings</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>Support Center</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Popular Games</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>Apex Legends</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>Fortnite</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>Call of Duty</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>League of Legends</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>Valorant</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-gaming-light-gray mb-4">
              Subscribe to get updates about upcoming tournaments and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gaming-dark-purple/70 border border-gaming-purple/20 rounded-md flex-1 p-2 text-white focus:outline-none focus:ring-2 focus:ring-gaming-light-purple/50"
              />
              <Button className="bg-gaming-light-purple hover:bg-gaming-purple">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gaming-light-gray/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gaming-light-gray text-sm">
            © 2025 GameON Universe. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple text-sm">
              Terms of Service
            </Link>
            <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gaming-light-gray hover:text-gaming-light-purple text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
