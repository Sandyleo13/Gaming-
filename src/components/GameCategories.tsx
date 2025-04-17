
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface GameCardProps {
  id: string;
  name: string;
  image: string;
  tournaments: number;
}

const GameCard = ({ id, name, image, tournaments }: GameCardProps) => {
  return (
    <Link to={`/games/${id}`} className="block">
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
    </Link>
  );
};

const games = [
  {
    id: 'apex',
    name: 'Apex Legends',
    image: '/lovable-uploads/6662bb16-6564-4e87-9e37-7edb15913f19.png',
    tournaments: 18
  },
  {
    id: 'fortnite',
    name: 'Fortnite',
    image: '/lovable-uploads/cdd1330a-4539-4305-9766-9184be131acc.png',
    tournaments: 24
  },
  {
    id: 'cod',
    name: 'Call of Duty',
    image: '/lovable-uploads/809c9b6f-72a4-4f4b-90e7-363c4abbc759.png',
    tournaments: 16
  },
  {
    id: 'lol',
    name: 'League of Legends',
    image: '/lovable-uploads/aec433b9-b5d0-45b0-bad3-27c0727635b3.png',
    tournaments: 21
  },
  {
    id: 'valorant',
    name: 'Valorant',
    image: '/lovable-uploads/a9542c40-9b96-485c-a99b-88dbfd4bdb99.png',
    tournaments: 15
  },
  {
    id: 'rocket',
    name: 'Rocket League',
    image: '/lovable-uploads/3c56e47d-67b5-44bf-b967-d20328de3d8d.png',
    tournaments: 9
  },
];

interface GameCategoriesProps {
  showHeading?: boolean;
}

const GameCategories = ({ showHeading = true }: GameCategoriesProps) => {
  return (
    <section id="games" className="py-20 bg-gaming-dark-purple/5">
      <div className="container mx-auto px-4">
        {showHeading && (
          <>
            <h2 className="section-title text-center">
              Popular <span className="text-gradient">Games</span>
            </h2>
            <p className="section-subtitle text-center">
              Browse tournaments by your favorite games and compete with players worldwide
            </p>
          </>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              image={game.image}
              tournaments={game.tournaments}
            />
          ))}
        </div>
        
        {showHeading && (
          <div className="flex justify-center mt-8">
            <Link to="/games" className="btn-outline inline-flex">
              View All Games
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default GameCategories;
