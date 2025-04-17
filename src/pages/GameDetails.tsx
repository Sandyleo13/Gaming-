
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import TournamentCard from '@/components/TournamentCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Gamepad2, Trophy, Users, Star, CalendarDays } from 'lucide-react';

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch game data based on the ID
  const game = {
    id: id || 'apex',
    name: 'Apex Legends',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    players: '45,000+',
    tournaments: 18,
    rating: 4.8,
    description: 'Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. In Apex Legends, up to 20 three-person squads land on an island and search for weapons and supplies before attempting to defeat all other players in combat.',
    upcoming: [
      {
        id: '1',
        title: 'Apex Legends Global Series',
        game: 'Apex Legends',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        prize: '₹7,50,000',
        date: 'Apr 20, 2025',
        time: '6:00 PM IST',
        playersRegistered: 85,
        playersMax: 100,
        isHot: true,
      },
      {
        id: '7',
        title: 'Apex Weekend Challenge',
        game: 'Apex Legends',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        prize: '₹1,12,500',
        date: 'Apr 27, 2025',
        time: '3:00 PM IST',
        playersRegistered: 30,
        playersMax: 60,
        isHot: false,
      },
      {
        id: '8',
        title: 'Apex Beginners Cup',
        game: 'Apex Legends',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        prize: '₹37,500',
        date: 'May 5, 2025',
        time: '7:00 PM IST',
        playersRegistered: 15,
        playersMax: 32,
        isHot: false,
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-12 rounded-xl overflow-hidden h-80">
            <img 
              src={game.image} 
              alt={game.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gaming-black via-gaming-black/70 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{game.name}</h1>
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gaming-light-purple" />
                    <span className="text-white">{game.players} Players</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gaming-light-purple" />
                    <span className="text-white">{game.tournaments} Tournaments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-gaming-orange" />
                    <span className="text-white">{game.rating}/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Game Overview</h2>
              <p className="text-gaming-light-gray mb-6">{game.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="card-gaming p-4 flex items-start gap-3">
                  <Gamepad2 className="text-gaming-light-purple h-6 w-6 mt-1" />
                  <div>
                    <p className="font-bold">Game Type</p>
                    <p className="text-gaming-light-gray">Battle Royale</p>
                  </div>
                </div>
                
                <div className="card-gaming p-4 flex items-start gap-3">
                  <Users className="text-gaming-light-purple h-6 w-6 mt-1" />
                  <div>
                    <p className="font-bold">Team Size</p>
                    <p className="text-gaming-light-gray">3 players (Squads)</p>
                  </div>
                </div>
                
                <div className="card-gaming p-4 flex items-start gap-3">
                  <Trophy className="text-gaming-light-purple h-6 w-6 mt-1" />
                  <div>
                    <p className="font-bold">Average Prize Pool</p>
                    <p className="text-gaming-light-gray">₹1,50,000</p>
                  </div>
                </div>
                
                <div className="card-gaming p-4 flex items-start gap-3">
                  <CalendarDays className="text-gaming-light-purple h-6 w-6 mt-1" />
                  <div>
                    <p className="font-bold">Tournament Frequency</p>
                    <p className="text-gaming-light-gray">Weekly</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="card-gaming p-6">
                <h3 className="font-bold mb-4">Join The Community</h3>
                <p className="text-gaming-light-gray mb-4">Connect with other Apex Legends players, find teammates, and stay updated on upcoming tournaments.</p>
                <Button className="w-full bg-gaming-light-purple hover:bg-gaming-purple mb-3">
                  Join Discord Server
                </Button>
                <Button variant="outline" className="w-full">
                  Follow Game Updates
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Upcoming Tournaments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {game.upcoming.map((tournament) => (
                <TournamentCard
                  key={tournament.id}
                  {...tournament}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="border-gaming-light-purple text-gaming-light-purple hover:bg-gaming-light-purple hover:text-white">
                View All Tournaments
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GameDetails;
