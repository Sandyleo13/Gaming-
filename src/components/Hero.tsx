
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gaming-black z-[-1]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gaming-light-purple via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Compete in Epic <span className="text-gradient">Gaming Tournaments</span> Worldwide
            </h1>
            
            <p className="text-lg text-gaming-light-gray max-w-2xl mx-auto lg:mx-0">
              Join thousands of players in exciting competitions across popular games.
              Register, compete, and win amazing prizes on GameON Universe.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
              <Button className="btn-primary text-base py-6 px-8 rounded-md font-medium flex items-center gap-2 group">
                <span>Browse Tournaments</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline text-base py-6 px-8 rounded-md font-medium">
                Create Tournament
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-6">
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-gaming-light-purple" />
                <span className="text-white">1,200+ Tournaments</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-gaming-light-purple" />
                <span className="text-white">50,000+ Players</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-gaming-light-purple" />
                <span className="text-white">Daily Events</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <div className="glow-border animate-pulse-glow bg-gaming-dark-gray rounded-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                    alt="Featured Tournament" 
                    className="w-full h-full object-cover rounded-lg opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-black/90 via-gaming-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-gaming-dark-purple/80 backdrop-blur-md rounded-md p-4">
                    <div className="text-gaming-orange uppercase text-sm font-bold tracking-wider mb-1">Featured Tournament</div>
                    <h3 className="text-xl font-bold text-white">Apex Legends Global Series</h3>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="bg-gaming-dark-gray px-3 py-1 rounded-md text-sm">$100,000 Prize</div>
                      <div className="bg-gaming-dark-gray px-3 py-1 rounded-md text-sm">Tomorrow</div>
                    </div>
                    <Button className="mt-3 w-full bg-gaming-light-purple hover:bg-gaming-purple">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gaming-light-purple/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gaming-blue/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
