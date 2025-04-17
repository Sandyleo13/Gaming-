
import { ChevronRight } from 'lucide-react';

interface GameCardProps {
  name: string;
  image: string;
  tournaments: number;
}

const GameCard = ({ name, image, tournaments }: GameCardProps) => {
  return (
    <div className="game-card group">
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-black via-gaming-black/50 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gaming-light-gray">{tournaments} Active Tournaments</span>
          <ChevronRight className="text-gaming-light-purple opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </div>
  );
};

const games = [
  {
    name: 'Apex Legends',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    tournaments: 18
  },
  {
    name: 'Fortnite',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    tournaments: 24
  },
  {
    name: 'Call of Duty',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    tournaments: 16
  },
  {
    name: 'League of Legends',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    tournaments: 21
  },
  {
    name: 'Valorant',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    tournaments: 15
  },
  {
    name: 'Rocket League',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    tournaments: 9
  },
];

const GameCategories = () => {
  return (
    <section id="games" className="py-20 bg-gaming-dark-purple/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">
          Popular <span className="text-gradient">Games</span>
        </h2>
        <p className="section-subtitle text-center">
          Browse tournaments by your favorite games and compete with players worldwide
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <GameCard
              key={index}
              name={game.name}
              image={game.image}
              tournaments={game.tournaments}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
