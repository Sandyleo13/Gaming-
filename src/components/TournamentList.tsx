
import { useState } from 'react';
import TournamentCard from './TournamentCard';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const tournamentsData = [
  {
    id: '1',
    title: 'Apex Legends Global Series',
    game: 'Apex Legends',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    prize: '$100,000',
    date: 'Apr 20, 2025',
    time: '6:00 PM EST',
    playersRegistered: 85,
    playersMax: 100,
    isHot: true,
  },
  {
    id: '2',
    title: 'Fortnite Weekend Cup',
    game: 'Fortnite',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    prize: '$50,000',
    date: 'Apr 25, 2025',
    time: '4:00 PM EST',
    playersRegistered: 120,
    playersMax: 200,
    isHot: false,
  },
  {
    id: '3',
    title: 'Call of Duty Warzone Showdown',
    game: 'Call of Duty',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    prize: '$25,000',
    date: 'Apr 22, 2025',
    time: '7:00 PM EST',
    playersRegistered: 45,
    playersMax: 64,
    isHot: true,
  },
  {
    id: '4',
    title: 'League of Legends Amateur League',
    game: 'League of Legends',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    prize: '$10,000',
    date: 'Apr 21, 2025',
    time: '5:00 PM EST',
    playersRegistered: 12,
    playersMax: 16,
    isHot: false,
  },
  {
    id: '5',
    title: 'Valorant Champions Tour',
    game: 'Valorant',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    prize: '$75,000',
    date: 'Apr 30, 2025',
    time: '8:00 PM EST',
    playersRegistered: 28,
    playersMax: 32,
    isHot: true,
  },
  {
    id: '6',
    title: 'Rocket League Championship',
    game: 'Rocket League',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    prize: '$15,000',
    date: 'Apr 23, 2025',
    time: '3:00 PM EST',
    playersRegistered: 40,
    playersMax: 64,
    isHot: false,
  },
];

const filters = ['All Games', 'Apex Legends', 'Fortnite', 'Call of Duty', 'League of Legends', 'Valorant', 'Rocket League'];

const TournamentList = () => {
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
        <h2 className="section-title text-center">
          <span className="text-gradient">Upcoming</span> Tournaments
        </h2>
        <p className="section-subtitle text-center">
          Find and register for the most exciting gaming tournaments across various platforms
        </p>

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
            <TournamentCard
              key={tournament.id}
              {...tournament}
            />
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

        {filteredTournaments.length > 0 && (
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-gaming-light-purple text-gaming-light-purple hover:bg-gaming-light-purple hover:text-white">
              View All Tournaments
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TournamentList;
