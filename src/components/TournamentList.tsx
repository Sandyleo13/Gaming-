
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TournamentCard from './TournamentCard';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const tournamentsData = [
  {
    id: '1',
    title: 'Apex Legends Global Series',
    game: 'Apex Legends',
    image: '/lovable-uploads/6662bb16-6564-4e87-9e37-7edb15913f19.png',
    prize: '₹7,50,000',
    date: 'Apr 20, 2025',
    time: '6:00 PM IST',
    playersRegistered: 85,
    playersMax: 100,
    isHot: true,
  },
  {
    id: '2',
    title: 'Fortnite Weekend Cup',
    game: 'Fortnite',
    image: '/lovable-uploads/cdd1330a-4539-4305-9766-9184be131acc.png',
    prize: '₹3,75,000',
    date: 'Apr 25, 2025',
    time: '4:00 PM IST',
    playersRegistered: 120,
    playersMax: 200,
    isHot: false,
  },
  {
    id: '3',
    title: 'Call of Duty Warzone Showdown',
    game: 'Call of Duty',
    image: '/lovable-uploads/809c9b6f-72a4-4f4b-90e7-363c4abbc759.png',
    prize: '₹1,87,500',
    date: 'Apr 22, 2025',
    time: '7:00 PM IST',
    playersRegistered: 45,
    playersMax: 64,
    isHot: true,
  },
  {
    id: '4',
    title: 'League of Legends Amateur League',
    game: 'League of Legends',
    image: '/lovable-uploads/aec433b9-b5d0-45b0-bad3-27c0727635b3.png',
    prize: '₹75,000',
    date: 'Apr 21, 2025',
    time: '5:00 PM IST',
    playersRegistered: 12,
    playersMax: 16,
    isHot: false,
  },
  {
    id: '5',
    title: 'Valorant Champions Tour',
    game: 'Valorant',
    image: '/lovable-uploads/a9542c40-9b96-485c-a99b-88dbfd4bdb99.png',
    prize: '₹5,62,500',
    date: 'Apr 30, 2025',
    time: '8:00 PM IST',
    playersRegistered: 28,
    playersMax: 32,
    isHot: true,
  },
  {
    id: '6',
    title: 'Rocket League Championship',
    game: 'Rocket League',
    image: '/lovable-uploads/3c56e47d-67b5-44bf-b967-d20328de3d8d.png',
    prize: '₹1,12,500',
    date: 'Apr 23, 2025',
    time: '3:00 PM IST',
    playersRegistered: 40,
    playersMax: 64,
    isHot: false,
  },
];

const filters = ['All Games', 'Apex Legends', 'Fortnite', 'Call of Duty', 'League of Legends', 'Valorant', 'Rocket League'];

interface TournamentListProps {
  showHeading?: boolean;
}

const TournamentList = ({ showHeading = true }: TournamentListProps) => {
  const [activeFilter, setActiveFilter] = useState('All Games');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTournaments = tournamentsData.filter(tournament => {
    // Apply game filter
    if (activeFilter !== 'All Games' && tournament.game !== activeFilter) {
      return false;
    }
    
    // Apply search filter
    if (
      searchQuery && 
      !tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !tournament.game.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    
    return true;
  });

  return (
    <section id="tournaments" className="py-20">
      <div className="container mx-auto px-4">
        {showHeading && (
          <>
            <h2 className="section-title text-center">
              <span className="text-gradient">Upcoming</span> Tournaments
            </h2>
            <p className="section-subtitle text-center">
              Find and register for the most exciting gaming tournaments across various platforms
            </p>
          </>
        )}

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gaming-light-gray" />
              <input
                type="text"
                placeholder="Search tournaments..."
                className="w-full bg-gaming-dark-gray border border-gaming-purple/20 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-gaming-light-purple/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 md:w-auto">
              <Filter className="text-gaming-light-purple" />
              <span className="text-white">Filter:</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-gaming-light-purple text-white'
                    : 'bg-gaming-dark-gray text-gaming-light-gray hover:bg-gaming-dark-purple'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tournament) => (
            <Link to={`/tournaments/${tournament.id}`} key={tournament.id} className="block h-full">
              <TournamentCard
                {...tournament}
              />
            </Link>
          ))}
        </div>

        {filteredTournaments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gaming-light-gray">No tournaments found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 border-gaming-light-purple text-gaming-light-purple"
              onClick={() => {
                setActiveFilter('All Games');
                setSearchQuery('');
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {filteredTournaments.length > 0 && showHeading && (
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-gaming-light-purple text-gaming-light-purple hover:bg-gaming-light-purple hover:text-white" asChild>
              <Link to="/tournaments">View All Tournaments</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TournamentList;
