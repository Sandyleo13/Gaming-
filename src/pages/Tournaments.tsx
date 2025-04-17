
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import TournamentList from '@/components/TournamentList';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Filter, Calendar, Trophy } from 'lucide-react';

const Tournaments = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-8 bg-gaming-dark-purple/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Browse</span> Tournaments
          </h1>
          <p className="text-lg text-gaming-light-gray max-w-3xl">
            Find and register for upcoming tournaments across various games. Filter by game, date, or prize pool to find the perfect competition for you.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Button className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>This Week</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span>High Prize Pool</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
            </Button>
          </div>
        </div>
      </div>
      
      <TournamentList showHeading={false} />
      <Footer />
    </div>
  );
};

export default Tournaments;
